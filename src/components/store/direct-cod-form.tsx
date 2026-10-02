"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, LockKeyhole, PhoneCall, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";

type DirectCodProduct = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  regularPrice: number;
};

export function DirectCodForm({
  product,
  darkTheme = false
}: {
  product: DirectCodProduct;
  darkTheme?: boolean;
}) {
  const router = useRouter();
  const { locale, currency } = usePreferences();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isArabic = locale === "ar";

  // Tier pricing calculation
  let discountMultiplier = 1;
  let tierLabel = "";
  if (quantity === 2) {
    discountMultiplier = 0.9; // 10% discount for 2 units
    tierLabel = isArabic ? "خصم 10% (الأكثر طلباً)" : "Économisez 10% (Offre populaire)";
  } else if (quantity >= 3) {
    discountMultiplier = 0.85; // 15% discount for 3+ units
    tierLabel = isArabic ? "خصم 15% (أفضل قيمة)" : "Économisez 15% (Meilleure offre)";
  }

  const unitPrice = Math.round(product.price * discountMultiplier);
  const totalPrice = unitPrice * quantity;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      city: "À confirmer",
      address: formData.get("address"),
      addressDetails: formData.get("addressDetails") || undefined,
      notes: formData.get("notes") || undefined,
      items: [{ productId: product.id, quantity }],
      displayCurrency: currency,
      locale,
      landingPage: typeof window !== "undefined" ? window.location.href : undefined,
      referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
      utmSource: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_source") || undefined : undefined,
      utmMedium: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_medium") || undefined : undefined,
      utmCampaign: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_campaign") || undefined : undefined
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
        setError(data.error || (isArabic ? "تعذر إتمام الطلب، المرجو التأكد من معلوماتك" : "Une erreur est survenue lors de la commande."));
        return;
      }

      router.push(data.upsellUrl || `/order/${data.reference}`);
    } catch {
      setLoading(false);
      setError(isArabic ? "حدث خطأ في الاتصال، حاول مرة أخرى" : "Erreur de connexion, veuillez réessayer.");
    }
  }

  return (
    <div
      id="cod-form"
      className={
        darkTheme
          ? "relative mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white shadow-2xl backdrop-blur-md sm:p-7"
          : "relative mt-8 rounded-2xl border-2 border-bronze-500/40 bg-white p-5 shadow-xl sm:p-7"
      }
    >
      <div className="absolute -top-4 right-6 rounded-full bg-gradient-to-r from-bronze-600 to-amber-600 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
        {isArabic ? "طلب سريع ودفع عند الاستلام" : "Commande Rapide COD"}
      </div>

      <div className="mb-6">
        <h3 className={`text-2xl font-black sm:text-3xl ${darkTheme ? "text-white" : "text-graphite-950"}`}>
          {isArabic ? "املأ معلوماتك وسنتصل بك للتأكيد" : "Commandez maintenant, payez à la livraison"}
        </h3>
        <p className={`mt-1 text-sm ${darkTheme ? "text-white/70" : "text-black/65"}`}>
          {isArabic
            ? "التوصيل لجميع مدن المغرب خلال 24-48 ساعة. لن تدفع أي سنتيم حتى تستلم طردك."
            : "Livraison rapide 24/48h partout au Maroc. Vous ne payez rien maintenant."}
        </p>
      </div>

      {/* Quantity Tier Selector */}
      <div className="mb-6">
        <label className={`mb-2 block text-xs font-black uppercase tracking-wider ${darkTheme ? "text-white/70" : "text-black/70"}`}>
          {isArabic ? "اختر العرض المناسب:" : "Choisissez votre offre :"}
        </label>
        <div className="grid gap-2.5 sm:grid-cols-3">
          {[
            { qty: 1, label: isArabic ? "علبة واحدة" : "1 Boîte", badge: null },
            { qty: 2, label: isArabic ? "علبتان (2)" : "2 Boîtes", badge: "-10%" },
            { qty: 3, label: isArabic ? "3 علب" : "3 Boîtes", badge: "-15%" }
          ].map((tier) => (
            <button
              key={tier.qty}
              type="button"
              onClick={() => setQuantity(tier.qty)}
              className={`relative flex flex-col items-center justify-center rounded-xl border-2 p-3 text-center transition-all ${
                quantity === tier.qty
                  ? darkTheme
                    ? "border-bronze-500 bg-bronze-500/20 font-black text-bronze-300 shadow-sm"
                    : "border-bronze-500 bg-bronze-500/10 font-black text-bronze-900 shadow-sm"
                  : darkTheme
                    ? "border-white/10 bg-white/[0.03] text-white/80 hover:border-white/20"
                    : "border-black/10 bg-sand-50/50 text-black/75 hover:border-black/25"
              }`}
            >
              {tier.badge ? (
                <span className="absolute -top-2.5 right-2 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-black text-white">
                  {tier.badge}
                </span>
              ) : null}
              <span className="text-sm font-bold">{tier.label}</span>
              <span className={`mt-1 text-xs ${darkTheme ? "text-white/60" : "text-black/60"}`}>
                <Money value={Math.round(product.price * (tier.qty === 2 ? 0.9 : tier.qty >= 3 ? 0.85 : 1)) * tier.qty} />
              </span>
            </button>
          ))}
        </div>
        {tierLabel ? (
          <p className={`mt-2 flex items-center gap-1.5 text-xs font-bold ${darkTheme ? "text-emerald-400" : "text-emerald-700"}`}>
            <Sparkles size={14} />
            {tierLabel}
          </p>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Full Name */}
        <label className="flex flex-col gap-1.5">
          <span className={`font-bold ${darkTheme ? "text-white/90" : "text-black/85"}`}>
            {isArabic ? "الاسم الكامل *" : "Nom et prénom *"}
          </span>
          <input
            className={
              darkTheme
                ? "w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-base text-white placeholder:text-white/35 backdrop-blur-sm focus:border-bronze-400 focus:outline-none"
                : "input text-base"
            }
            name="fullName"
            placeholder={isArabic ? "مثال: يونس العلوي" : "Ex: Youness El Alaoui"}
            required
            autoComplete="name"
          />
        </label>

        {/* Phone */}
        <label className="flex flex-col gap-1.5">
          <span className={`font-bold ${darkTheme ? "text-white/90" : "text-black/85"}`}>
            {isArabic ? "رقم الهاتف (للتأكيد قبل الشحن) *" : "Numéro de téléphone portable *"}
          </span>
          <input
            className={
              darkTheme
                ? "w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-base text-white placeholder:text-white/35 backdrop-blur-sm focus:border-bronze-400 focus:outline-none"
                : "input text-base"
            }
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="06 XX XX XX XX"
            required
            autoComplete="tel"
          />
          <span className={`text-xs ${darkTheme ? "text-white/50" : "text-black/55"}`}>
            {isArabic ? "سيتصل بك أحد أفراد الفريق لتأكيد العنوان وموعد التسليم." : "Un conseiller vous appellera pour confirmer l'expédition."}
          </span>
        </label>

        {/* Address */}
        <label className="flex flex-col gap-1.5">
          <span className={`font-bold ${darkTheme ? "text-white/90" : "text-black/85"}`}>
            {isArabic ? "العنوان أو المدينة *" : "Adresse ou Ville de livraison *"}
          </span>
          <input
            className={
              darkTheme
                ? "w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-base text-white placeholder:text-white/35 backdrop-blur-sm focus:border-bronze-400 focus:outline-none"
                : "input text-base"
            }
            name="address"
            placeholder={isArabic ? "اكتب عنوانك أو مدينتك وحيك هنا..." : "Ex: Casablanca, Quartier Maârif..."}
            required
            autoComplete="street-address"
          />
          <span className={`text-xs ${darkTheme ? "text-white/50" : "text-black/55"}`}>
            {isArabic ? "سنتصل بك لتأكيد العنوان الدقيق وموعد التسليم قبل إرسال الطلب." : "Nous vous contacterons par téléphone pour confirmer l'adresse exacte avant l'envoi."}
          </span>
        </label>

        {/* Order Summary Line */}
        <div
          className={`mt-2 flex items-center justify-between rounded-xl p-4 font-black ${
            darkTheme ? "border border-white/10 bg-white/[0.03]" : "bg-sand-50"
          }`}
        >
          <div>
            <span className={`text-sm ${darkTheme ? "text-white/60" : "text-black/60"}`}>
              {isArabic ? "المجموع عند الاستلام:" : "Total à payer à la livraison :"}
            </span>
            <p className={`text-2xl ${darkTheme ? "text-white" : "text-graphite-950"}`}>
              <Money value={totalPrice} />
            </p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-black ${
              darkTheme
                ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-300"
                : "bg-emerald-100 text-emerald-800"
            }`}
          >
            {isArabic ? "توصيل مجاني ✓" : "Livraison Gratuite ✓"}
          </span>
        </div>

        {error ? (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm font-bold text-red-300">
            {error}
          </div>
        ) : null}

        {/* Big Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary mt-2 min-h-14 w-full text-base font-black uppercase tracking-wide shadow-lg hover:shadow-xl sm:text-lg"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 size={20} className="animate-spin" />
              {isArabic ? "جارٍ تسجيل طلبك..." : "Enregistrement de la commande..."}
            </span>
          ) : (
            <span>
              {isArabic
                ? "اضغط هنا للطلب الآن (الدفع عند الاستلام)"
                : "COMMANDER MAINTENANT - PAIEMENT À LA LIVRAISON"}
            </span>
          )}
        </button>

        {/* Trust Badges */}
        <div className={`mt-3 grid grid-cols-3 gap-2 text-center text-xs font-bold ${darkTheme ? "text-white/80" : "text-black/70"}`}>
          <div className={`flex flex-col items-center gap-1 rounded-lg p-2 ${darkTheme ? "border border-white/10 bg-white/[0.03]" : "bg-sand-50/80"}`}>
            <Truck size={18} className="text-bronze-400" />
            <span>{isArabic ? "توصيل 24/48h" : "Livraison 24/48h"}</span>
          </div>
          <div className={`flex flex-col items-center gap-1 rounded-lg p-2 ${darkTheme ? "border border-white/10 bg-white/[0.03]" : "bg-sand-50/80"}`}>
            <ShieldCheck size={18} className="text-bronze-400" />
            <span>{isArabic ? "افحص طردك" : "Ouvrez le colis"}</span>
          </div>
          <div className={`flex flex-col items-center gap-1 rounded-lg p-2 ${darkTheme ? "border border-white/10 bg-white/[0.03]" : "bg-sand-50/80"}`}>
            <PhoneCall size={18} className="text-bronze-400" />
            <span>{isArabic ? "تأكيد هاتفي" : "Appel préalable"}</span>
          </div>
        </div>
      </form>
    </div>
  );
}
