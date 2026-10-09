"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, CheckCircle2, Loader2, Lock, PhoneCall, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";

export type BundleItemData = {
  id: string;
  name: string;
  slug: string;
  bundlePrice: number;
  regularCombinedPrice: number;
  description: string;
  badge?: string;
  image?: string;
  items: {
    productId: string;
    productName: string;
    productSlug: string;
    quantity: number;
  }[];
};

export function BundleCodForm({
  bundles,
  selectedSlug,
  onSelectBundle
}: {
  bundles: BundleItemData[];
  selectedSlug?: string;
  onSelectBundle?: (slug: string) => void;
}) {
  const router = useRouter();
  const { locale, currency } = usePreferences();
  const isArabic = locale === "ar";
  const isEnglish = locale === "en";

  const [currentSlug, setCurrentSlug] = useState<string>(
    selectedSlug || bundles[0]?.slug || "rovanx-pack-puissance"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const activeBundle = bundles.find((b) => b.slug === currentSlug) || bundles[0];

  function handlePick(slug: string) {
    setCurrentSlug(slug);
    if (onSelectBundle) onSelectBundle(slug);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!activeBundle) return;

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const phoneDigits = String(formData.get("phone") || "").replace(/\D/g, "");

    if (!/^(?:0[67]\d{8}|212[67]\d{8}|[67]\d{8})$/.test(phoneDigits)) {
      setError(
        isArabic
          ? "يرجى إدخال رقم هاتف مغربي صحيح لتأكيد الطلب."
          : isEnglish
            ? "Enter a valid Moroccan mobile number."
            : "Saisissez un numéro mobile marocain valide."
      );
      setLoading(false);
      return;
    }

    const payload = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      city: "À confirmer",
      address: formData.get("address"),
      addressDetails: formData.get("addressDetails") || undefined,
      notes: `Commande Pack: ${activeBundle.name}`,
      bundleSlug: activeBundle.slug,
      items: activeBundle.items.map((it) => ({
        productId: it.productId,
        quantity: it.quantity
      })),
      displayCurrency: currency,
      locale,
      landingPage: typeof window !== "undefined" ? window.location.href : undefined,
      referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined
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
        setError(
          data.error ||
            (isArabic
              ? "تعذر إتمام الطلب، المرجو التأكد من معلوماتك"
              : isEnglish
                ? "Could not complete order, please check your info."
                : "Une erreur est survenue lors de la commande.")
        );
        return;
      }

      router.push(data.upsellUrl || `/order/${data.reference}`);
    } catch {
      setLoading(false);
      setError(
        isArabic
          ? "حدث خطأ في الاتصال، حاول مرة أخرى"
          : isEnglish
            ? "Connection error, please try again."
            : "Erreur de connexion, réessayez."
      );
    }
  }

  if (!activeBundle) return null;

  return (
    <div
      id="bundle-order-form"
      className="relative mx-auto mt-12 max-w-3xl rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-[#181a22] to-[#0f1117] p-6 text-white shadow-2xl backdrop-blur-xl sm:p-8"
    >
      <div className="absolute -top-4 right-8 rounded-full bg-gradient-to-r from-amber-500 to-bronze-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-black shadow-lg">
        {isArabic
          ? "طلب سريع للباقات - الدفع عند الاستلام"
          : isEnglish
            ? "Express Pack Order - Cash on Delivery"
            : "Commande Rapide de Pack - COD"}
      </div>

      <div className="mb-6 text-center sm:text-start">
        <h3 className="text-2xl font-black text-white sm:text-3xl">
          {isArabic
            ? "اختر باقتك وسجل طلبك في ثوانٍ"
            : isEnglish
              ? "Choose your pack and order in seconds"
              : "Choisissez votre Pack et commandez"}
        </h3>
        <p className="mt-1 text-sm text-white/70">
          {isArabic
            ? "توصيل مجاني 0 درهم لباب المنزل، تغليف سري 100%، واتصال محترم لتأكيد العنوان قبل الشحن."
            : isEnglish
              ? "Free home delivery 0 DH, 100% discreet packaging, respectful confirmation call before dispatch."
              : "Livraison gratuite à domicile, colis 100% anonyme, paiement après inspection."}
        </p>
      </div>

      {/* 1. Pack Selector Options */}
      <div className="mb-6 grid gap-3">
        <label className="text-xs font-black uppercase tracking-wider text-amber-400">
          {isArabic ? "1. الباقة المختارة:" : isEnglish ? "1. Selected Pack:" : "1. Pack sélectionné :"}
        </label>
        {bundles.map((b) => {
          const isSelected = b.slug === currentSlug;
          const savings = b.regularCombinedPrice - b.bundlePrice;
          return (
            <div
              key={b.slug}
              onClick={() => handlePick(b.slug)}
              className={`relative cursor-pointer rounded-2xl border-2 p-4 transition-all duration-200 select-none ${
                isSelected
                  ? "border-amber-400 bg-gradient-to-r from-amber-500/15 via-bronze-900/30 to-amber-500/15 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-black transition-colors ${
                      isSelected
                        ? "border-amber-400 bg-amber-400 text-black"
                        : "border-white/30 bg-transparent text-transparent"
                    }`}
                  >
                    ✓
                  </div>
                  {b.image ? (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                      <img src={b.image} alt={b.name} className="h-full w-full object-cover" />
                    </div>
                  ) : null}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-black text-white">{b.name}</h4>
                      {b.badge ? (
                        <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-black text-amber-300">
                          {b.badge}
                        </span>
                      ) : null}
                      {savings > 0 ? (
                        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-black text-emerald-400">
                          {isArabic ? `وفر ${savings} درهم` : isEnglish ? `Save ${savings} DH` : `-${savings} DH`}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-xs text-white/65 line-clamp-1">{b.description}</p>
                  </div>
                </div>

                <div className="text-end shrink-0">
                  <p className="text-xl font-black text-amber-400">
                    <Money value={b.bundlePrice} />
                  </p>
                  <p className="text-xs text-white/40 line-through">
                    <Money value={b.regularCombinedPrice} />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Customer Form */}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="font-bold text-white/90">
            {isArabic ? "الاسم الكامل *" : isEnglish ? "Full Name *" : "Nom et prénom *"}
          </span>
          <input
            className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-base text-white placeholder:text-white/35 backdrop-blur-sm focus:border-amber-400 focus:outline-none"
            name="fullName"
            placeholder={isArabic ? "مثال: يونس العلمي" : isEnglish ? "e.g. Youness El Alami" : "Ex : Youness El Alami"}
            required
            autoComplete="name"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-bold text-white/90">
            {isArabic
              ? "رقم الهاتف (للتأكيد قبل الشحن) *"
              : isEnglish
                ? "Phone Number (for confirmation) *"
                : "Numéro de téléphone portable *"}
          </span>
          <input
            className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-base text-white placeholder:text-white/35 backdrop-blur-sm focus:border-amber-400 focus:outline-none"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="06 00 00 00 00"
            required
            autoComplete="tel"
          />
          <span className="text-xs text-white/50">
            {isArabic
              ? "سنتصل بك لتأكيد الطلب والعنوان هاتفياً."
              : isEnglish
                ? "We will call you to confirm your address before shipping."
                : "Nous vous appellerons avant l'envoi."}
          </span>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-bold text-white/90">
            {isArabic ? "العنوان والحي والمدينة *" : isEnglish ? "Address, district and city *" : "Adresse, quartier et ville *"}
          </span>
          <input
            className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-base text-white placeholder:text-white/35 backdrop-blur-sm focus:border-amber-400 focus:outline-none"
            name="address"
            placeholder={isArabic ? "مثال: الدار البيضاء، حي المعاريف، زنقة..." : isEnglish ? "e.g. Casablanca, Maarif..." : "Ex : Casablanca, Maârif, rue..."}
            required
            autoComplete="street-address"
          />
        </label>

        {/* Total Summary */}
        <div className="mt-2 flex items-center justify-between rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 font-black">
          <div>
            <span className="text-xs text-white/70">
              {isArabic ? "المجموع للدفع عند الاستلام:" : isEnglish ? "Total due on delivery:" : "Total à payer à la livraison :"}
            </span>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-black text-amber-400">
                <Money value={activeBundle.bundlePrice} />
              </p>
              <span className="text-sm text-white/40 line-through">
                <Money value={activeBundle.regularCombinedPrice} />
              </span>
            </div>
            <p className="mt-1 text-xs text-emerald-400">
              {isArabic
                ? `✓ وفرت ${activeBundle.regularCombinedPrice - activeBundle.bundlePrice} درهم + توصيل مجاني`
                : isEnglish
                  ? `✓ You save ${activeBundle.regularCombinedPrice - activeBundle.bundlePrice} DH + Free shipping`
                  : `✓ Économie de ${activeBundle.regularCombinedPrice - activeBundle.bundlePrice} DH + Port offert`}
            </p>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1.5 text-xs font-black text-emerald-300">
            {isArabic ? "توصيل مجاني 0 DH ✓" : isEnglish ? "Free delivery 0 DH ✓" : "Livraison 0 DH ✓"}
          </span>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-white">
          <div className="flex items-center gap-2 font-bold text-emerald-400">
            <PhoneCall size={16} className="shrink-0" />
            <span>
              {isArabic
                ? "تأكيد فوري وسري (في أقل من 30 دقيقة)"
                : isEnglish
                  ? "Quick & discreet confirmation (within 30 mins)"
                  : "Confirmation rapide et discrète"}
            </span>
          </div>
          <p className="mt-1 text-white/80 leading-relaxed text-[11px]">
            {isArabic
              ? "📞 سيتصل بك مستشارنا هاتفياً باحترام ولباقة لتأكيد موعد التسليم وعنوانك قبل شحن الطرد."
              : isEnglish
                ? "Our advisor will call politely to confirm your delivery slot and address before sending the package."
                : "Notre conseiller vous appelle sous 30 min pour valider le créneau de remise."}
          </p>
        </div>

        {error ? (
          <div role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm font-bold text-red-300">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary mt-2 min-h-14 w-full text-base font-black uppercase tracking-wide shadow-xl hover:shadow-2xl sm:text-lg"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 size={20} className="animate-spin" />
              {isArabic ? "جارٍ تسجيل طلب الباك..." : isEnglish ? "Processing pack order..." : "Enregistrement du pack..."}
            </span>
          ) : (
            <span>
              {isArabic
                ? `تأكيد طلب ${activeBundle.name} (الدفع عند الاستلام)`
                : isEnglish
                  ? `Order ${activeBundle.name} - Pay on Delivery`
                  : `Commander ${activeBundle.name} - Paiement Livraison`}
            </span>
          )}
        </button>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-bold text-white/85">
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
            <ShieldCheck size={20} className="text-amber-400" />
            <span className="font-black text-white">{isArabic ? "تغليف سري 100%" : isEnglish ? "Discreet parcel" : "Colis discret"}</span>
            <span className="text-[10px] text-white/60">{isArabic ? "طرد محايد" : isEnglish ? "Neutral box" : "Sans mention"}</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
            <Truck size={20} className="text-amber-400" />
            <span className="font-black text-white">{isArabic ? "توصيل 24-48 ساعة" : isEnglish ? "24-48h Delivery" : "Livraison 24-48h"}</span>
            <span className="text-[10px] text-white/60">{isArabic ? "لباب المنزل" : isEnglish ? "To door" : "À domicile"}</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
            <ShieldCheck size={20} className="text-emerald-400" />
            <span className="font-black text-white">{isArabic ? "معاينة قبل الدفع" : isEnglish ? "Inspect on delivery" : "Vérifiez avant"}</span>
            <span className="text-[10px] text-white/60">{isArabic ? "افحص أمانتك" : isEnglish ? "Pay courier" : "Paiement livreur"}</span>
          </div>
        </div>
      </form>
    </div>
  );
}
