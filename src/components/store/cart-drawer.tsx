"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Sparkles,
  Truck,
  ShieldCheck,
  Lock,
  ArrowRight,
  Loader2,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { useCart, type CartProduct } from "@/components/store/cart-provider";
import { usePreferences } from "@/components/store/preferences-provider";
import { Money } from "@/components/store/money";
import { getProductVisual } from "@/lib/product-visuals";
import { getProductTiers, getSelectedTierInfo } from "@/lib/pricing-tiers";
import { isValidHumanText, isValidMoroccanPhone10Digits, sanitizePhoneInput } from "@/lib/phone";

type CatalogCrossSellItem = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  salePrice: number | null;
  regularPrice: number;
};

let cachedCatalogProducts: CatalogCrossSellItem[] | null = null;

export function CartDrawer() {
  const router = useRouter();
  const {
    lines,
    count,
    rawSubtotal,
    discountTotal,
    subtotal,
    isOpen,
    closeCart,
    addItem,
    updateQuantity,
    removeItem,
    clear
  } = useCart();
  const { locale, currency } = usePreferences();
  const isArabic = locale === "ar";

  const [catalogProducts, setCatalogProducts] = useState<CatalogCrossSellItem[]>(
    cachedCatalogProducts || []
  );
  const [showExpressForm, setShowExpressForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [formRenderedAt, setFormRenderedAt] = useState(() => Date.now());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setShowExpressForm(false);
      setError("");
      return;
    }
    setFormRenderedAt(Date.now());
    if (!cachedCatalogProducts) {
      fetch("/api/sync-catalog")
        .then((r) => r.json())
        .then((data) => {
          if (data?.products && Array.isArray(data.products)) {
            cachedCatalogProducts = data.products;
            setCatalogProducts(data.products);
          }
        })
        .catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Determine smart complementary cross-sell product not yet in cart
  const cartSlugs = new Set(lines.map((l) => l.product.slug));
  let targetCrossSellSlug = "rovanx-control-oil";
  if (cartSlugs.has("rovanx-control-oil") && !cartSlugs.has("rovanx-vitality-60")) {
    targetCrossSellSlug = "rovanx-vitality-60";
  } else if (cartSlugs.has("rovanx-prostate") && !cartSlugs.has("rovanx-ginseng")) {
    targetCrossSellSlug = "rovanx-ginseng";
  } else if (cartSlugs.has("rovanx-vitality-60") && cartSlugs.has("rovanx-control-oil")) {
    targetCrossSellSlug = "rovanx-maca-max";
  }

  const crossSellProduct = !cartSlugs.has(targetCrossSellSlug)
    ? catalogProducts.find((p) => p.slug === targetCrossSellSlug)
    : null;

  const crossSellVisual = crossSellProduct ? getProductVisual(crossSellProduct.slug) : null;
  const crossSellPrice = crossSellProduct
    ? crossSellProduct.salePrice || crossSellProduct.regularPrice
    : 0;

  async function handleExpressOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const cleanPhone = sanitizePhoneInput(phoneValue);

    if (!isValidHumanText(fullName, 2)) {
      setError(
        isArabic
          ? "يرجى إدخال اسمك الكامل الحقيقي للتوصل بطلبك."
          : "Veuillez saisir votre vrai nom complet."
      );
      return;
    }

    if (!isValidMoroccanPhone10Digits(cleanPhone)) {
      setError(
        isArabic
          ? "يرجى إدخال رقم هاتف مغربي حقيقي وصحيح مكون من 10 أرقام (يبدأ بـ 06 أو 07)."
          : "Veuillez saisir un vrai numéro de téléphone marocain valide à 10 chiffres."
      );
      return;
    }

    if (!isValidHumanText(address, 4)) {
      setError(
        isArabic
          ? "يرجى كتابة المدينة والعنوان بشكل واضح وصحيح للتوصيل."
          : "Veuillez saisir une adresse et ville de livraison valides."
      );
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: cleanPhone,
          city: "À confirmer",
          address: address.trim(),
          website,
          formRenderedAt,
          items: lines.map((line) => ({
            productId: line.product.id,
            quantity: line.quantity
          })),
          displayCurrency: currency,
          locale,
          landingPage: typeof window !== "undefined" ? window.location.href : undefined
        })
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(
          data.error ||
            (isArabic
              ? "تعذر تسجيل الطلب، المرجو التأكد من معلوماتك."
              : "Impossible de valider la commande, vérifiez vos informations.")
        );
        return;
      }

      clear();
      closeCart();
      router.push(data.upsellUrl || `/order/${data.reference}`);
    } catch {
      setLoading(false);
      setError(
        isArabic
          ? "حدث خطأ في الاتصال، حاول مرة أخرى."
          : "Erreur de connexion, veuillez réessayer."
      );
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 flex max-w-full ${
          isArabic ? "left-0 pr-0 sm:pr-10" : "right-0 pl-0 sm:pl-10"
        }`}
      >
        <div className="flex h-full w-screen max-w-md flex-col border-x border-white/10 bg-[#12141a] text-white shadow-2xl">
          {/* 1. Drawer Header */}
          <div className="border-b border-white/10 bg-gradient-to-r from-[#26070e] via-[#1a0b10] to-[#12141a] px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/15 text-amber-300">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-black text-white">
                    {isArabic ? "سلة المشتريات" : "Votre Panier"}
                  </h2>
                  <p className="text-[11px] font-bold text-amber-300">
                    {isArabic
                      ? `${count} منتجات مختارة — دفع عند الاستلام`
                      : `${count} article(s) — Paiement à la livraison`}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Free Shipping & Discretion Bar */}
            {lines.length > 0 ? (
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-3 py-2 text-xs font-bold text-emerald-300">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>
                  {isArabic
                    ? "شحن سري ومجاني (0 DH) لجميع المدن + فحص قبل الدفع ✓"
                    : "Livraison discrète & gratuite (0 DH) + Contrôle avant paiement ✓"}
                </span>
              </div>
            ) : null}
          </div>

          {/* 2. Scrollable Cart Body */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {lines.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40">
                  <ShoppingBag size={30} />
                </div>
                <p className="text-lg font-black text-white">
                  {isArabic ? "سلتك فارغة حالياً" : "Votre panier est vide"}
                </p>
                <p className="mt-1 max-w-xs text-xs text-white/60">
                  {isArabic
                    ? "اختر منتجاتك أو باقات التوفير واستفد من الشحن السري والمجاني."
                    : "Découvrez nos formules naturelles et nos packs avantages avec livraison gratuite."}
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="btn btn-primary mt-6 px-6 py-3 text-xs font-black"
                >
                  {isArabic ? "تصفح المنتجات الآن" : "Découvrir les produits"}
                </button>
              </div>
            ) : (
              <>
                {/* Cart Lines */}
                <div className="space-y-3">
                  {lines.map((line) => {
                    const visual = getProductVisual(line.product.slug);
                    const tiers = getProductTiers(line.product.slug, line.product.price, isArabic);
                    const tier2 = tiers.find((t) => t.qty === 2);
                    const linePricing = getSelectedTierInfo(
                      line.product.slug,
                      line.product.price,
                      line.quantity,
                      isArabic
                    );

                    return (
                      <div
                        key={line.product.id}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 transition-all hover:border-amber-500/30"
                      >
                        <div className="flex gap-3.5">
                          <Link
                            href={`/product/${line.product.slug}`}
                            onClick={closeCart}
                            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 p-2"
                          >
                            <img
                              src={visual?.src || "/products/rovanx-vitality-60.webp?v=3"}
                              alt={line.product.name}
                              className="h-full w-full object-contain"
                            />
                          </Link>

                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <Link
                                  href={`/product/${line.product.slug}`}
                                  onClick={closeCart}
                                  className="font-black text-white hover:text-amber-400"
                                >
                                  {line.product.name}
                                </Link>
                                <p className="text-[11px] text-white/55">
                                  {isArabic ? "تركيبة أصلية — تغليف سري" : "Formule originale — Colis neutre"}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeItem(line.product.id)}
                                className="rounded-lg p-1 text-white/40 transition hover:bg-red-500/15 hover:text-red-400"
                                aria-label="Remove"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>

                            <div className="mt-2 flex items-center justify-between">
                              {/* Quantity Stepper */}
                              <div className="inline-flex items-center rounded-xl border border-white/15 bg-black/40 p-0.5">
                                <button
                                  type="button"
                                  onClick={() =>
                                    line.quantity > 1
                                      ? updateQuantity(line.product.id, line.quantity - 1)
                                      : removeItem(line.product.id)
                                  }
                                  className="flex h-7 w-7 items-center justify-center rounded-lg text-white/75 transition hover:bg-white/10 hover:text-white"
                                >
                                  <Minus size={13} />
                                </button>
                                <span className="min-w-8 text-center font-mono text-xs font-black text-white">
                                  {line.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(line.product.id, line.quantity + 1)}
                                  className="flex h-7 w-7 items-center justify-center rounded-lg text-white/75 transition hover:bg-white/10 hover:text-white"
                                >
                                  <Plus size={13} />
                                </button>
                              </div>

                              {/* Line Total */}
                              <div className="text-end">
                                <strong className="text-base font-black text-amber-400">
                                  <Money value={linePricing.totalPrice} />
                                </strong>
                                {linePricing.originalPrice ? (
                                  <span className="block text-[11px] text-white/40 line-through">
                                    <Money value={linePricing.originalPrice} />
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Smart 1-Tap Course Upgrade Nudge */}
                        {line.quantity === 1 && tier2 ? (
                          <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border border-amber-400/35 bg-gradient-to-r from-amber-500/15 to-bronze-500/10 px-3 py-2">
                            <div className="text-[11px] leading-snug text-amber-200">
                              <span className="font-black text-amber-300">
                                🔥 {isArabic ? "عرض الكورس (عبوتان):" : "Offre Cure (2 boîtes) :"}
                              </span>{" "}
                              {isArabic
                                ? `${tier2.savings} فورية (${tier2.price} DH عوض ${tier2.originalPrice} DH)`
                                : `${tier2.savings} (${tier2.price} DH au lieu de ${tier2.originalPrice} DH)`}
                            </div>
                            <button
                              type="button"
                              onClick={() => updateQuantity(line.product.id, 2)}
                              className="shrink-0 rounded-lg bg-amber-400 px-2.5 py-1 text-[11px] font-black text-graphite-950 shadow transition hover:bg-amber-300"
                            >
                              {isArabic ? "+ ترقية لـ 2" : "+ Passer à 2"}
                            </button>
                          </div>
                        ) : linePricing.savings ? (
                          <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-emerald-500/15 px-2.5 py-1 text-[11px] font-bold text-emerald-300">
                            <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                            <span>
                              {isArabic
                                ? `تم تطبيق خصم الكورس (${linePricing.savings}) بنجاح!`
                                : `Remise Cure appliquée (${linePricing.savings}) !`}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                {/* Smart In-Cart 1-Click Cross-Sell */}
                {crossSellProduct ? (
                  <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#211116] via-[#161822] to-[#12141a] p-3.5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[11px] font-black text-amber-300">
                        <Sparkles size={12} />
                        {isArabic
                          ? "كمل الكورس لنتيجة مضاعفة 100%:"
                          : "Complétez votre cure pour un résultat optimal :"}
                      </span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black text-emerald-300">
                        {isArabic ? "شحن مجاني 0 DH" : "Port 0 DH"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 p-1">
                          <img
                            src={crossSellVisual?.src || "/products/rovanx-control-oil.webp?v=3"}
                            alt={crossSellProduct.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-white">{crossSellProduct.name}</h4>
                          <div className="flex items-baseline gap-1.5">
                            <strong className="text-xs font-black text-amber-400">
                              <Money value={crossSellPrice} />
                            </strong>
                            {crossSellProduct.salePrice ? (
                              <span className="text-[10px] text-white/40 line-through">
                                <Money value={crossSellProduct.regularPrice} />
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const p: CartProduct = {
                            id: crossSellProduct.id,
                            name: crossSellProduct.name,
                            slug: crossSellProduct.slug,
                            sku: crossSellProduct.sku,
                            price: crossSellPrice,
                            regularPrice: crossSellProduct.regularPrice
                          };
                          addItem(p, 1, false);
                        }}
                        className="shrink-0 rounded-xl border border-amber-400/50 bg-amber-500/20 px-3 py-2 text-xs font-black text-amber-300 transition hover:bg-amber-400 hover:text-graphite-950"
                      >
                        {isArabic ? "+ أضف للسلة" : "+ Ajouter"}
                      </button>
                    </div>
                  </div>
                ) : null}

                {/* Express COD Form Inside Drawer */}
                {showExpressForm ? (
                  <form
                    id="drawer-cod-form"
                    onSubmit={handleExpressOrder}
                    className="space-y-3 rounded-2xl border-2 border-amber-400/50 bg-black/45 p-4 shadow-xl"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-xs font-black text-amber-300">
                        ⚡ {isArabic ? "معلومات التوصيل السري (الدفع عند الاستلام)" : "Livraison discrète (Paiement COD)"}
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowExpressForm(false)}
                        className="text-[11px] text-white/50 hover:text-white"
                      >
                        {isArabic ? "إخفاء" : "Masquer"}
                      </button>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-white/85">
                        {isArabic ? "الاسم الكامل *" : "Nom complet *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={isArabic ? "مثال: يونس العلمي" : "Ex : Youness El Alami"}
                        className="input w-full py-2.5 text-sm"
                      />
                    </div>

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

                    <div>
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <label className="block text-xs font-bold text-white/85">
                          {isArabic ? "رقم الهاتف (10 أرقام) *" : "Téléphone (10 chiffres) *"}
                        </label>
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
                              ? isArabic
                                ? "✓ 10/10 صحيح"
                                : "✓ 10/10"
                              : phoneValue.length === 10
                                ? isArabic
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
                        className="input w-full py-2.5 font-mono text-sm font-bold tracking-wider"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-white/85">
                        {isArabic ? "العنوان والمدينة *" : "Adresse et ville *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder={isArabic ? "مثال: الدار البيضاء، حي المعاريف..." : "Ex : Casablanca, Maârif..."}
                        className="input w-full py-2.5 text-sm"
                      />
                    </div>

                    {error ? (
                      <p className="rounded-lg border border-red-500/30 bg-red-500/15 p-2 text-xs font-bold text-red-300">
                        {error}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-sm font-black shadow-xl"
                    >
                      {loading ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <>
                          <span>
                            {isArabic
                              ? `تأكيد الطلب الآن (${subtotal} DH عند الاستلام)`
                              : `Confirmer la commande (${subtotal} DH COD)`}
                          </span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                ) : null}
              </>
            )}
          </div>

          {/* 3. Drawer Footer Totals & Actions */}
          {lines.length > 0 ? (
            <div className="border-t border-white/10 bg-[#161922] px-5 py-4 space-y-3">
              <div className="space-y-1.5 text-xs">
                {discountTotal > 0 ? (
                  <div className="flex justify-between font-bold text-emerald-400">
                    <span>{isArabic ? "خصم الكورس الفوري:" : "Remise Cure immédiate :"}</span>
                    <span>
                      - <Money value={discountTotal} />
                    </span>
                  </div>
                ) : null}
                <div className="flex justify-between text-white/75">
                  <span>{isArabic ? "التوصيل السري لجميع المدن:" : "Livraison discrète :"}</span>
                  <strong className="text-emerald-400">
                    {isArabic ? "مجاني (0 DH) ✓" : "Gratuite (0 DH) ✓"}
                  </strong>
                </div>
                <div className="flex items-baseline justify-between border-t border-white/10 pt-2 text-base">
                  <span className="font-black text-white">
                    {isArabic ? "المجموع للدفع عند الاستلام:" : "Total à la livraison :"}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <strong className="text-2xl font-black text-amber-400">
                      <Money value={subtotal} />
                    </strong>
                    {discountTotal > 0 ? (
                      <span className="text-xs text-white/40 line-through">
                        <Money value={rawSubtotal} />
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              {!showExpressForm ? (
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setShowExpressForm(true)}
                    className="btn btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-sm font-black shadow-xl"
                  >
                    <span>
                      {isArabic
                        ? "⚡ إتمام الطلب السريع الآن (الدفع عند الاستلام)"
                        : "⚡ Commander maintenant (Paiement à la livraison)"}
                    </span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/cart"
                      onClick={closeCart}
                      className="rounded-xl border border-white/15 bg-white/[0.04] py-2 text-center text-xs font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {isArabic ? "عرض السلة الكاملة" : "Voir le panier"}
                    </Link>
                    <button
                      type="button"
                      onClick={closeCart}
                      className="rounded-xl border border-white/10 bg-transparent py-2 text-center text-xs font-bold text-white/60 transition hover:text-white"
                    >
                      {isArabic ? "مواصلة التسوق" : "Continuer mes achats"}
                    </button>
                  </div>
                </div>
              ) : null}

              <div className="flex items-center justify-center gap-4 pt-1 text-[10px] font-bold text-white/55">
                <span className="flex items-center gap-1">
                  <Lock size={11} className="text-amber-400" />
                  {isArabic ? "طرد محايد 100%" : "Colis neutre 100%"}
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-emerald-400" />
                  {isArabic ? "معاينة قبل الدفع" : "Contrôle avant paiement"}
                </span>
                <span className="flex items-center gap-1">
                  <PhoneCall size={11} className="text-bronze-400" />
                  {isArabic ? "تأكيد سري" : "Appel discret"}
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
