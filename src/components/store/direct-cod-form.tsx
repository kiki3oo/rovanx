"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, LockKeyhole, PhoneCall, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { moroccanCities } from "@/lib/moroccan-cities";
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

export function DirectCodForm({ product }: { product: DirectCodProduct }) {
  const router = useRouter();
  const { locale, currency } = usePreferences();
  const [quantity, setQuantity] = useState(1);
  const [city, setCity] = useState("Casablanca");
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
      city: formData.get("city") || city,
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
    <div id="cod-form" className="relative mt-8 rounded-2xl border-2 border-bronze-500/40 bg-white p-5 shadow-xl sm:p-7">
      <div className="absolute -top-4 right-6 rounded-full bg-gradient-to-r from-bronze-600 to-amber-600 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
        {isArabic ? "طلب سريع ودفع عند الاستلام" : "Commande Rapide COD"}
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-black text-graphite-950 sm:text-3xl">
          {isArabic ? "املأ معلوماتك وسنتصل بك للتأكيد" : "Commandez maintenant, payez à la livraison"}
        </h3>
        <p className="mt-1 text-sm text-black/65">
          {isArabic
            ? "التوصيل لجميع مدن المغرب خلال 24-48 ساعة. لن تدفع أي سنتيم حتى تستلم طردك."
            : "Livraison rapide 24/48h partout au Maroc. Vous ne payez rien maintenant."}
        </p>
      </div>

      {/* Quantity Tier Selector */}
      <div className="mb-6">
        <label className="mb-2 block text-xs font-black uppercase tracking-wider text-black/70">
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
                  ? "border-bronze-500 bg-bronze-500/10 font-black text-bronze-900 shadow-sm"
                  : "border-black/10 bg-sand-50/50 text-black/75 hover:border-black/25"
              }`}
            >
              {tier.badge ? (
                <span className="absolute -top-2.5 right-2 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-black text-white">
                  {tier.badge}
                </span>
              ) : null}
              <span className="text-sm font-bold">{tier.label}</span>
              <span className="mt-1 text-xs text-black/60">
                <Money value={Math.round(product.price * (tier.qty === 2 ? 0.9 : tier.qty >= 3 ? 0.85 : 1)) * tier.qty} />
              </span>
            </button>
          ))}
        </div>
        {tierLabel ? (
          <p className="mt-2 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
            <Sparkles size={14} />
            {tierLabel}
          </p>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Full Name */}
        <label className="field">
          <span className="font-bold text-black/85">
            {isArabic ? "الاسم الكامل *" : "Nom et prénom *"}
          </span>
          <input
            className="input text-base"
            name="fullName"
            placeholder={isArabic ? "مثال: يونس العلوي" : "Ex: Youness El Alaoui"}
            required
            autoComplete="name"
          />
        </label>

        {/* Phone */}
        <label className="field">
          <span className="font-bold text-black/85">
            {isArabic ? "رقم الهاتف (للتأكيد قبل الشحن) *" : "Numéro de téléphone portable *"}
          </span>
          <input
            className="input text-base"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="06 XX XX XX XX"
            required
            autoComplete="tel"
          />
          <span className="text-xs text-black/55">
            {isArabic ? "سيتصل بك أحد أفراد الفريق لتأكيد العنوان وموعد التسليم." : "Un conseiller vous appellera pour confirmer l'expédition."}
          </span>
        </label>

        {/* City Select */}
        <label className="field">
          <span className="font-bold text-black/85">
            {isArabic ? "المدينة *" : "Ville de livraison *"}
          </span>
          <select
            className="select text-base"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            {moroccanCities.map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </label>

        {/* Address */}
        <label className="field">
          <span className="font-bold text-black/85">
            {isArabic ? "العنوان أو الحي *" : "Adresse ou quartier de livraison *"}
          </span>
          <input
            className="input text-base"
            name="address"
            placeholder={isArabic ? "مثال: حي المعاريف، زنقة 14" : "Ex: Quartier Maârif, Rue 14..."}
            required
            autoComplete="street-address"
          />
        </label>

        {/* Order Summary Line */}
        <div className="mt-2 flex items-center justify-between rounded-xl bg-sand-50 p-4 font-black">
          <div>
            <span className="text-sm text-black/60">{isArabic ? "المجموع عند الاستلام:" : "Total à payer à la livraison :"}</span>
            <p className="text-2xl text-graphite-950">
              <Money value={totalPrice} />
            </p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
            {isArabic ? "توصيل مجاني ✓" : "Livraison Gratuite ✓"}
          </span>
        </div>

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">
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
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-bold text-black/70">
          <div className="flex flex-col items-center gap-1 rounded-lg bg-sand-50/80 p-2">
            <Truck size={18} className="text-bronze-600" />
            <span>{isArabic ? "توصيل 24/48h" : "Livraison 24/48h"}</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg bg-sand-50/80 p-2">
            <ShieldCheck size={18} className="text-bronze-600" />
            <span>{isArabic ? "افحص طردك" : "Ouvrez le colis"}</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg bg-sand-50/80 p-2">
            <PhoneCall size={18} className="text-bronze-600" />
            <span>{isArabic ? "تأكيد هاتفي" : "Appel préalable"}</span>
          </div>
        </div>
      </form>
    </div>
  );
}
