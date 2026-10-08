"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, Loader2, Lock, PhoneCall, ShieldCheck, Truck } from "lucide-react";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";
import { getProductTiers, getSelectedTierInfo } from "@/lib/pricing-tiers";

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
  const isArabic = locale === "ar";
  const isEnglish = locale === "en";

  const tiers = getProductTiers(product.slug, product.price, isArabic);
  const [quantity, setQuantity] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selectedInfo = getSelectedTierInfo(product.slug, product.price, quantity, isArabic);
  const totalPrice = selectedInfo.totalPrice;
  const originalPrice = selectedInfo.originalPrice;
  const freeShipping = selectedInfo.freeShipping;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const phoneDigits = String(formData.get("phone") || "").replace(/\D/g, "");
    if (!/^(?:0[67]\d{8}|212[67]\d{8}|[67]\d{8})$/.test(phoneDigits)) {
      setError(isArabic ? "يرجى إدخال رقم هاتف مغربي صحيح لتأكيد الطلب." : isEnglish ? "Enter a valid Moroccan mobile number so we can confirm your order." : "Saisissez un numéro mobile marocain valide pour confirmer votre commande.");
      setLoading(false);
      return;
    }

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
        {isArabic ? "طلب سريع ودفع عند الاستلام" : isEnglish ? "Quick cash-on-delivery order" : "Commande rapide à la livraison"}
      </div>

      <div className="mb-6">
        <h3 className={`text-2xl font-black sm:text-3xl ${darkTheme ? "text-white" : "text-graphite-950"}`}>
          {isArabic ? "املأ معلوماتك وسنتصل بك للتأكيد" : isEnglish ? "Order now, pay on delivery" : "Commandez maintenant, payez à la livraison"}
        </h3>
        <p className={`mt-1 text-sm ${darkTheme ? "text-white/70" : "text-black/65"}`}>
          {isArabic
            ? "سنتصل بك لتأكيد الطلب والعنوان ورسوم وموعد التوصيل قبل الشحن. لا يلزم الدفع الآن."
            : isEnglish
              ? "We'll call to confirm your order, address, delivery fee and timing before shipping. Nothing to pay now."
              : "Nous vous appellerons pour confirmer la commande, l'adresse, les frais et le délai de livraison avant l'envoi. Rien à payer maintenant."}
        </p>
      </div>

      <div className="mb-6">
        <label className={`mb-2.5 flex items-center justify-between text-xs font-black uppercase tracking-wider ${darkTheme ? "text-white/80" : "text-black/80"}`}>
          <span>{isArabic ? "اختر العرض المناسب لك:" : "Choisissez votre offre :"}</span>
          <span className="text-[11px] font-bold text-amber-400">
            {isArabic ? "⚡ تخفيض خاص وتوصيل مجاني للكميات" : "⚡ Réduction et livraison gratuite"}
          </span>
        </label>
        <div className="grid gap-3">
          {tiers.map((tier) => {
            const isSelected = quantity === tier.qty;
            return (
              <button
                key={tier.qty}
                type="button"
                onClick={() => setQuantity(tier.qty)}
                aria-pressed={isSelected}
                className={`relative flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl border-2 p-3.5 text-right transition-all cursor-pointer ${
                  isSelected
                    ? darkTheme
                      ? "border-amber-400 bg-amber-500/15 shadow-lg shadow-amber-950/40 ring-1 ring-amber-400"
                      : "border-amber-500 bg-amber-500/10 shadow-md ring-1 ring-amber-500"
                    : darkTheme
                      ? "border-white/10 bg-white/[0.03] hover:border-white/20"
                      : "border-black/10 bg-sand-50/50 hover:border-black/20"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-4 rounded-full bg-gradient-to-r from-amber-500 to-bronze-600 px-2.5 py-0.5 text-[11px] font-black text-white shadow-sm">
                    {tier.badge}
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isSelected
                        ? "border-amber-400 bg-amber-400 text-graphite-950"
                        : darkTheme ? "border-white/30" : "border-black/30"
                    }`}
                  >
                    {isSelected && <span className="h-2 w-2 rounded-full bg-graphite-950" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-base font-black ${isSelected ? (darkTheme ? "text-amber-300" : "text-amber-900") : (darkTheme ? "text-white" : "text-graphite-950")}`}>
                        {tier.title}
                      </span>
                      {tier.savings && (
                        <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[11px] font-black text-red-400">
                          {tier.savings}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs ${darkTheme ? "text-white/60" : "text-black/60"}`}>
                      {tier.sub}
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-baseline justify-between sm:mt-0 sm:justify-end sm:gap-3">
                  {tier.freeShipping && (
                    <span className="text-[11px] font-bold text-emerald-400">
                      {isArabic ? "توصيل مجاني" : "Livraison gratuite"}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1.5">
                    {tier.originalPrice && (
                      <span className="text-xs line-through text-white/40">
                        <Money value={tier.originalPrice} />
                      </span>
                    )}
                    <span className={`text-lg font-black ${isSelected ? (darkTheme ? "text-amber-300" : "text-amber-900") : (darkTheme ? "text-white" : "text-graphite-950")}`}>
                      <Money value={tier.price} />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <label className="flex flex-col gap-1.5">
          <span className={`font-bold ${darkTheme ? "text-white/90" : "text-black/85"}`}>
            {isArabic ? "الاسم الكامل *" : isEnglish ? "Full name *" : "Nom et prénom *"}
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

        <label className="flex flex-col gap-1.5">
          <span className={`font-bold ${darkTheme ? "text-white/90" : "text-black/85"}`}>
            {isArabic ? "رقم الهاتف (للتأكيد قبل الشحن) *" : isEnglish ? "Mobile number for confirmation *" : "Numéro de téléphone portable *"}
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
            placeholder="06 00 00 00 00"
            required
            autoComplete="tel"
          />
          <span className={`text-xs ${darkTheme ? "text-white/50" : "text-black/55"}`}>
            {isArabic ? "سنتصل بك لتأكيد الطلب قبل الشحن." : isEnglish ? "We'll call you to confirm before shipping." : "Nous vous appellerons pour confirmer avant l'envoi."}
          </span>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className={`font-bold ${darkTheme ? "text-white/90" : "text-black/85"}`}>
            {isArabic ? "العنوان والحي *" : isEnglish ? "Street address and neighborhood *" : "Adresse et quartier *"}
          </span>
          <input
            className={
              darkTheme
                ? "w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-base text-white placeholder:text-white/35 backdrop-blur-sm focus:border-bronze-400 focus:outline-none"
                : "input text-base"
            }
            name="address"
            placeholder={isArabic ? "مثال: حي المعاريف، زنقة..." : isEnglish ? "e.g. Maarif, street..." : "Ex : Maârif, rue..."}
            required
            autoComplete="street-address"
          />
          <span className={`text-xs ${darkTheme ? "text-white/50" : "text-black/55"}`}>
            {isArabic ? "سنتأكد من العنوان وموعد التوصيل قبل الشحن." : isEnglish ? "We'll confirm the address and delivery timing before shipping." : "Nous confirmerons l'adresse et le délai avant l'envoi."}
          </span>
        </label>

        <div
          className={`mt-2 flex items-center justify-between rounded-xl p-4 font-black ${
            darkTheme ? "border border-white/10 bg-white/[0.03]" : "bg-sand-50"
          }`}
        >
          <div>
            <span className={`text-sm ${darkTheme ? "text-white/60" : "text-black/60"}`}>
              {isArabic ? "المجموع للدفع عند الاستلام:" : isEnglish ? "Total due on delivery:" : "Total à payer à la livraison :"}
            </span>
            <div className="flex items-baseline gap-2">
              <p className={`text-2xl sm:text-3xl font-black ${darkTheme ? "text-amber-400" : "text-graphite-950"}`}>
                <Money value={totalPrice} />
              </p>
              {originalPrice ? (
                <span className={`text-sm line-through ${darkTheme ? "text-white/40" : "text-black/40"}`}>
                  <Money value={originalPrice} />
                </span>
              ) : null}
            </div>
          </div>
          {freeShipping ? (
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-black text-emerald-400">
              {isArabic ? "توصيل مجاني 0 درهم ✓" : "Livraison gratuite 0 DH ✓"}
            </span>
          ) : null}
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-white">
          <div className="flex items-center gap-2 font-bold text-emerald-400">
            <PhoneCall size={16} className="shrink-0" />
            <span>{isArabic ? "تأكيد سريع وسري (في أقل من 30 دقيقة)" : "Confirmation rapide (sous 30 min)"}</span>
          </div>
          <p className="mt-1 text-white/80 leading-relaxed">
            {isArabic
              ? "📞 سيتصل بك مستشارنا هاتفياً في أقل من 30 دقيقة (أو رسالة واتساب إذا كنت مشغولاً) لتأكيد العنوان وموعد التسليم الأنسب لك قبل إرسال الشحنة."
              : "Notre conseiller vous contactera sous 30 min (ou par WhatsApp si vous êtes occupé) pour valider l'adresse et le créneau de livraison avant expédition."}
          </p>
        </div>

        {error ? (
          <div role="alert" className={`rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm font-bold ${darkTheme ? "text-red-300" : "text-red-800"}`}>
            {error}
          </div>
        ) : null}

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
                : isEnglish ? "PLACE ORDER - PAY ON DELIVERY" : "COMMANDER - PAIEMENT À LA LIVRAISON"}
            </span>
          )}
        </button>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-bold text-white/85">
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
            <ShieldCheck size={20} className="text-amber-400" />
            <span className="font-black text-white">{isArabic ? "تغليف سري 100%" : "Colis discret 100%"}</span>
            <span className="text-[10px] text-white/60">{isArabic ? "بدون أي إحراج" : "Sans mention"}</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
            <Truck size={20} className="text-amber-400" />
            <span className="font-black text-white">{isArabic ? "توصيل 24-48 ساعة" : "Livraison 24-48h"}</span>
            <span className="text-[10px] text-white/60">{isArabic ? "لباب المنزل" : "À domicile"}</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
            <ShieldCheck size={20} className="text-emerald-400" />
            <span className="font-black text-white">{isArabic ? "معاينة قبل الدفع" : "Vérifiez avant"}</span>
            <span className="text-[10px] text-white/60">{isArabic ? "افحص علبتك" : "Paiement livreur"}</span>
          </div>
        </div>
      </form>
    </div>
  );
}
