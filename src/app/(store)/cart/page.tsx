"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  CheckCircle2,
  Flame,
  Minus,
  PhoneCall,
  Plus,
  ShieldCheck,
  Sparkles,
  Trash2,
  Truck
} from "lucide-react";
import { useCart } from "@/components/store/cart-provider";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";
import { isValidHumanText, isValidMoroccanPhone10Digits, sanitizePhoneInput } from "@/lib/phone";
import { getSelectedTierInfo } from "@/lib/pricing-tiers";
import { getProductVisual } from "@/lib/product-visuals";
import { getActiveWheelReward, getAttributionPayload } from "@/lib/wheel-funnels";

export default function CartPage() {
  const {
    lines,
    rawSubtotal,
    discountTotal,
    subtotal,
    updateQuantity,
    removeItem,
    clear
  } = useCart();
  const { currency, locale, t } = usePreferences();
  const router = useRouter();
  const isAr = locale === "ar";

  const [fullName, setFullName] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [formRenderedAt] = useState(() => Date.now());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleExpressCheckout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!lines.length) return;
    setLoading(true);
    setError("");

    const cleanPhone = sanitizePhoneInput(phoneValue);
    if (!isValidHumanText(fullName, 2)) {
      setLoading(false);
      setError(
        isAr
          ? "يرجى إدخال اسمك الكامل الحقيقي للتوصل بطلبك."
          : "Veuillez saisir votre vrai nom complet."
      );
      return;
    }

    if (!isValidMoroccanPhone10Digits(cleanPhone)) {
      setLoading(false);
      setError(
        isAr
          ? "يرجى إدخال رقم هاتف مغربي حقيقي وصحيح مكون من 10 أرقام (يبدأ بـ 06 أو 07)."
          : "Veuillez saisir un vrai numéro de téléphone marocain valide à 10 chiffres."
      );
      return;
    }

    if (!isValidHumanText(address, 4)) {
      setLoading(false);
      setError(
        isAr
          ? "يرجى كتابة المدينة والعنوان بشكل واضح وصحيح للتوصيل."
          : "Veuillez saisir une adresse et ville de livraison valides."
      );
      return;
    }

    const wheelReward = getActiveWheelReward();
    const payload = {
      fullName: fullName.trim(),
      phone: cleanPhone,
      city: "À confirmer",
      address: address.trim(),
      notes: wheelReward ? `[🎁 عرض العجلة VIP: ${wheelReward.promoCode}]` : undefined,
      website,
      formRenderedAt,
      items: lines.map((line) => ({
        productId: line.product.id,
        quantity: line.quantity
      })),
      displayCurrency: currency,
      locale,
      ...getAttributionPayload()
    };

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      setLoading(false);
      if (!response.ok) {
        setError(data.error || t("orderFailed"));
        return;
      }
      clear();
      router.push(data.upsellUrl || `/order/${data.reference}`);
    } catch {
      setLoading(false);
      setError(t("orderFailed"));
    }
  }

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#12141a] py-12 text-white md:py-16">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
      <div className="container relative z-10">
        <p className="badge mb-3 border-white/10 bg-white/10 text-bronze-400">{t("cart")}</p>
        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="text-4xl font-black text-white sm:text-5xl">{t("cartTitle")}</h1>
            <p className="mt-3 text-white/75">{t("cartIntro")}</p>
          </div>
          <Link href="/shop" className="btn border border-white/20 bg-white/10 text-white hover:bg-white/15">
            {t("continueShopping")}
          </Link>
        </div>

        {lines.length ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_410px]">
            <div className="grid content-start gap-4">
              {/* Free & Discreet Shipping Banner */}
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-bold text-emerald-300 sm:text-sm">
                <span className="flex items-center gap-2">
                  <Truck size={18} className="shrink-0 text-emerald-400" />
                  {isAr
                    ? "توصيل مجاني 100% في تغليف سري وغير معنون لجميع المدن المغربية"
                    : "Livraison 100% GRATUITE en colis neutre et discret partout au Maroc"}
                </span>
                <span className="shrink-0 rounded-full bg-emerald-500/20 px-2.5 py-0.5 font-black text-emerald-300">
                  0 DH ✓
                </span>
              </div>

              {lines.map((line) => {
                const visual = getProductVisual(line.product.slug);
                const tierInfo = getSelectedTierInfo(
                  line.product.slug,
                  line.product.price,
                  line.quantity,
                  isAr
                );
                const savedAmount = tierInfo.originalPrice
                  ? tierInfo.originalPrice - tierInfo.totalPrice
                  : 0;

                return (
                  <div
                    key={line.product.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white backdrop-blur-md transition-all hover:border-bronze-500/40 sm:p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Link
                          href={`/product/${line.product.slug}`}
                          className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-black/40 p-2"
                        >
                          <img
                            src={visual?.src || "/products/rovanx-vitality-60.webp?v=3"}
                            alt={line.product.name}
                            className="h-full w-full object-contain"
                          />
                        </Link>
                        <div>
                          <Link
                            href={`/product/${line.product.slug}`}
                            className="text-lg font-black text-white hover:text-bronze-300"
                          >
                            {line.product.name}
                          </Link>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span className="text-base font-black text-bronze-300">
                              <Money value={tierInfo.totalPrice} />
                            </span>
                            {savedAmount > 0 && tierInfo.originalPrice ? (
                              <>
                                <span className="text-xs text-white/40 line-through">
                                  <Money value={tierInfo.originalPrice} />
                                </span>
                                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-black text-emerald-300">
                                  {isAr
                                    ? `وفرت ${savedAmount} د.م`
                                    : `-${savedAmount} DH`}
                                </span>
                              </>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center rounded-xl border border-white/15 bg-black/40 p-1">
                          <button
                            type="button"
                            onClick={() =>
                              line.quantity === 1
                                ? removeItem(line.product.id)
                                : updateQuantity(line.product.id, line.quantity - 1)
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/75 transition hover:bg-white/10 hover:text-white"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-9 text-center text-sm font-black text-white">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(line.product.id, line.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/75 transition hover:bg-white/10 hover:text-white"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 transition-colors hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                          onClick={() => removeItem(line.product.id)}
                          aria-label={t("removeItem")}
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>

                    {/* 1-Tap Course Upgrade when quantity === 1 */}
                    {line.quantity === 1 ? (
                      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-bronze-400/35 bg-gradient-to-r from-bronze-500/15 via-bronze-500/10 to-transparent px-3.5 py-2.5">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-bronze-200">
                          <Flame size={15} className=" shrink-0 text-bronze-400" />
                          {isAr
                            ? "عرض الكورس المكثف (عبوتان): وفر 100 درهم فورية!"
                            : "Cure 2 boîtes : Économisez 100 DH immédiatement !"}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.product.id, 2)}
                          className="shrink-0 rounded-lg bg-bronze-500 px-3 py-1 text-xs font-black text-graphite-950 transition hover:bg-bronze-400"
                        >
                          {isAr ? "+ ترقية لـ 2 عبوات (-100 د.م)" : "+ Passer à 2 (-100 DH)"}
                        </button>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            {/* Sidebar: Summary + Direct Express COD Checkout */}
            <aside className="h-fit rounded-2xl border border-bronze-500/35 bg-white/[0.04] p-6 text-white shadow-2xl backdrop-blur-md">
              <h2 className="text-xl font-black text-white">{t("summary")}</h2>
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
                {discountTotal > 0 ? (
                  <>
                    <div className="flex justify-between text-white/65">
                      <span>{isAr ? "المجموع قبل الخصم" : "Total avant remise"}</span>
                      <span className="line-through">
                        <Money value={rawSubtotal} />
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-emerald-400">
                      <span className="flex items-center gap-1">
                        <Sparkles size={14} />
                        {isAr ? "تخفيض الكمية التلقائي" : "Remise quantité"}
                      </span>
                      <span>
                        -<Money value={discountTotal} />
                      </span>
                    </div>
                  </>
                ) : null}
                <div className="flex justify-between text-white/75">
                  <span>{t("shipping")}</span>
                  <span className="font-black text-emerald-400">
                    {isAr ? "مجاني (0 د.م)" : "Gratuit (0 DH)"}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="font-bold text-white">{t("subtotal")}</span>
                  <strong className="text-2xl font-black text-bronze-300">
                    <Money value={subtotal} />
                  </strong>
                </div>
              </div>

              {/* Direct Express COD Form inside Cart Page */}
              <form onSubmit={handleExpressCheckout} className="mt-5 grid gap-3 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-bronze-300">
                    {isAr ? "⚡ إتمام الطلب السريع (الدفع عند الاستلام)" : "⚡ Commande Express (Paiement à la livraison)"}
                  </span>
                </div>

                <label className="grid gap-1 text-xs font-bold text-white/85">
                  <span>{isAr ? "الاسم الكامل *" : "Nom complet *"}</span>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={isAr ? "الاسم الكامل" : "Votre nom complet"}
                    className="rounded-xl border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-bronze-400 focus:outline-none"
                  />
                </label>

                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <label className="grid gap-1 text-xs font-bold text-white/85">
                  <div className="flex items-center justify-between gap-2">
                    <span>{isAr ? "رقم الهاتف (10 أرقام) *" : "Téléphone (10 chiffres) *"}</span>
                    {phoneValue.length > 0 ? (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                          isValidMoroccanPhone10Digits(phoneValue)
                            ? "bg-emerald-500/20 text-emerald-400"
                            : phoneValue.length === 10
                              ? "bg-red-500/20 text-red-400"
                              : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {isValidMoroccanPhone10Digits(phoneValue)
                          ? isAr
                            ? "✓ 10/10 صحيح"
                            : "✓ 10/10 valide"
                          : phoneValue.length === 10
                            ? isAr
                              ? "✗ رقم غير صالح"
                              : "✗ Invalide"
                            : `${phoneValue.length}/10`}
                      </span>
                    ) : null}
                  </div>
                  <input
                    type="tel"
                    dir="ltr"
                    inputMode="numeric"
                    maxLength={10}
                    required
                    value={phoneValue}
                    onChange={(e) => setPhoneValue(sanitizePhoneInput(e.target.value))}
                    placeholder="06XXXXXXXX"
                    className="rounded-xl border border-white/15 bg-black/40 px-3.5 py-2.5 font-mono text-sm tracking-wider text-white placeholder:text-white/35 focus:border-bronze-400 focus:outline-none"
                  />
                </label>

                <label className="grid gap-1 text-xs font-bold text-white/85">
                  <span>{isAr ? "المدينة والعنوان *" : "Ville et adresse *"}</span>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={isAr ? "مثال: الدار البيضاء، حي المعاريف..." : "Ex: Casablanca, Maârif..."}
                    className="rounded-xl border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-bronze-400 focus:outline-none"
                  />
                </label>

                {error ? (
                  <p className="rounded-xl border border-red-500/30 bg-red-500/15 px-3 py-2 text-xs font-bold text-red-300">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary mt-1 w-full py-3.5 text-sm font-black shadow-[0_10px_25px_rgba(216,162,74,0.3)]"
                >
                  <CheckCircle2 size={17} />
                  <span>
                    {loading
                      ? t("creating")
                      : isAr
                        ? "تأكيد الطلب الآن — الدفع عند الاستلام"
                        : "Confirmer la commande — Paiement à la livraison"}
                  </span>
                </button>
              </form>

              <div className="mt-5 grid gap-2.5 border-t border-white/10 pt-4 text-xs text-white/70">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-bronze-400" /> {t("codSecureText")}
                </span>
                <span className="flex items-center gap-2">
                  <PhoneCall size={15} className="text-bronze-400" /> {t("phoneConfirmation")}
                </span>
                <span className="flex items-center gap-2">
                  <Truck size={15} className="text-bronze-400" /> {t("shipAfterValidation")}
                </span>
              </div>
            </aside>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-10 text-center text-white backdrop-blur-md">
            <p className="text-lg text-white/75">{t("emptyCart")}</p>
            <Link href="/shop" className="btn btn-primary mt-5">
              {t("viewProducts")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
