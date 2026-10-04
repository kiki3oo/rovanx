"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, PhoneCall, ShieldCheck, Truck } from "lucide-react";
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
  const isEnglish = locale === "en";

  const totalPrice = product.price * quantity;

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
      city: formData.get("city"),
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
        <label className={`mb-2 block text-xs font-black uppercase tracking-wider ${darkTheme ? "text-white/70" : "text-black/70"}`}>
          {isArabic ? "عدد العلب" : isEnglish ? "Number of bottles" : "Nombre de boîtes"}
        </label>
        <div className="grid gap-2.5 sm:grid-cols-3">
          {[
            { qty: 1, label: isArabic ? "علبة واحدة" : isEnglish ? "1 bottle" : "1 boîte" },
            { qty: 2, label: isArabic ? "علبتان" : isEnglish ? "2 bottles" : "2 boîtes" },
            { qty: 3, label: isArabic ? "3 علب" : isEnglish ? "3 bottles" : "3 boîtes" }
          ].map((tier) => (
            <button
              key={tier.qty}
              type="button"
              onClick={() => setQuantity(tier.qty)}
              aria-pressed={quantity === tier.qty}
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
              <span className="text-sm font-bold">{tier.label}</span>
              <span className={`mt-1 text-xs ${darkTheme ? "text-white/60" : "text-black/60"}`}>
                <Money value={product.price * tier.qty} />
              </span>
            </button>
          ))}
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
            {isArabic ? "المدينة *" : isEnglish ? "City *" : "Ville *"}
          </span>
          <input
            className={darkTheme ? "w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-base text-white placeholder:text-white/35 focus:border-bronze-400 focus:outline-none" : "input text-base"}
            name="city"
            placeholder={isArabic ? "مثال: الدار البيضاء" : isEnglish ? "e.g. Casablanca" : "Ex : Casablanca"}
            required
            autoComplete="address-level2"
          />
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
              {isArabic ? "ثمن المنتجات:" : isEnglish ? "Products total:" : "Total des produits :"}
            </span>
            <p className={`text-2xl ${darkTheme ? "text-white" : "text-graphite-950"}`}>
              <Money value={totalPrice} />
            </p>
          </div>
        </div>
        <p className={`text-xs ${darkTheme ? "text-white/60" : "text-black/60"}`}>
          {isArabic ? "سيتم تأكيد رسوم التوصيل هاتفياً قبل الشحن." : isEnglish ? "Delivery fees will be confirmed by phone before shipping." : "Les frais de livraison seront confirmés par téléphone avant l'envoi."}
        </p>

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

        <div className={`mt-3 grid grid-cols-3 gap-2 text-center text-xs font-bold ${darkTheme ? "text-white/80" : "text-black/70"}`}>
          <div className={`flex flex-col items-center gap-1 rounded-lg p-2 ${darkTheme ? "border border-white/10 bg-white/[0.03]" : "bg-sand-50/80"}`}>
            <Truck size={18} className="text-bronze-400" />
            <span>{isArabic ? "التوصيل بعد التأكيد" : isEnglish ? "Delivery after confirmation" : "Livraison après confirmation"}</span>
          </div>
          <div className={`flex flex-col items-center gap-1 rounded-lg p-2 ${darkTheme ? "border border-white/10 bg-white/[0.03]" : "bg-sand-50/80"}`}>
            <ShieldCheck size={18} className="text-bronze-400" />
            <span>{isArabic ? "الدفع عند الاستلام" : isEnglish ? "Pay on delivery" : "Paiement à la livraison"}</span>
          </div>
          <div className={`flex flex-col items-center gap-1 rounded-lg p-2 ${darkTheme ? "border border-white/10 bg-white/[0.03]" : "bg-sand-50/80"}`}>
            <PhoneCall size={18} className="text-bronze-400" />
            <span>{isArabic ? "تأكيد هاتفي" : isEnglish ? "Confirmation call" : "Appel de confirmation"}</span>
          </div>
        </div>
      </form>
    </div>
  );
}
