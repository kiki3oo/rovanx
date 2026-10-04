"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, LockKeyhole, PhoneCall, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/components/store/cart-provider";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const { currency, locale, t } = usePreferences();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(formData: FormData) {
    setLoading(true);
    setError("");
    const payload = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      city: "À confirmer",
      address: formData.get("address"),
      addressDetails: formData.get("addressDetails"),
      notes: formData.get("notes"),
      items: lines.map((line) => ({ productId: line.product.id, quantity: line.quantity })),
      displayCurrency: currency,
      locale,
      landingPage: window.location.href,
      referrer: document.referrer || undefined,
      utmSource: new URLSearchParams(window.location.search).get("utm_source") || undefined,
      utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || undefined,
      utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || undefined,
      utmContent: new URLSearchParams(window.location.search).get("utm_content") || undefined,
      utmTerm: new URLSearchParams(window.location.search).get("utm_term") || undefined
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
    <section className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-16">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
      <div className="container relative z-10">
        <p className="badge mb-3 border-white/10 bg-white/10 text-bronze-400">{t("checkoutBadge")}</p>
        <div className="mb-8 max-w-3xl">
          <h1 className="text-4xl font-black text-white sm:text-5xl">{t("checkoutTitle")}</h1>
          <p className="mt-3 text-white/75">{t("checkoutIntro")}</p>
        </div>
        {lines.length ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
            <form action={submit} className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-md shadow-2xl sm:p-8">
              <div className="grid gap-3 rounded-xl border border-bronze-500/30 bg-bronze-500/10 p-4 text-sm text-bronze-300 sm:grid-cols-3">
                {[
                  [LockKeyhole, t("protectedData")],
                  [PhoneCall, t("callConfirm")],
                  [Truck, t("shipAfterValidation")]
                ].map(([Icon, text]) => (
                  <span key={String(text)} className="flex items-center gap-2 font-bold">
                    <Icon size={16} className="text-bronze-400" />
                    {text as string}
                  </span>
                ))}
              </div>
              <label className="field text-sm font-bold text-white/90">
                <span>{t("fullName")}</span>
                <input
                  className="rounded-xl border border-white/15 bg-white/[0.05] p-3 text-white placeholder:text-white/35 backdrop-blur-sm focus:border-bronze-400 focus:outline-none"
                  name="fullName"
                  required
                />
              </label>
              <label className="field text-sm font-bold text-white/90">
                <span>{t("phone")}</span>
                <input
                  className="rounded-xl border border-white/15 bg-white/[0.05] p-3 text-white placeholder:text-white/35 backdrop-blur-sm focus:border-bronze-400 focus:outline-none"
                  name="phone"
                  required
                  inputMode="tel"
                />
              </label>
              <label className="field text-sm font-bold text-white/90">
                <span>{locale === "ar" ? "العنوان" : "Adresse de livraison"}</span>
                <textarea
                  className="min-h-[100px] rounded-xl border border-white/15 bg-white/[0.05] p-3 text-white placeholder:text-white/35 backdrop-blur-sm focus:border-bronze-400 focus:outline-none"
                  name="address"
                  required
                  placeholder={locale === "ar" ? "اكتب عنوانك وحيك هنا..." : "Ex: Quartier Maârif, rue..."}
                />
              </label>
              <label className="field text-sm font-bold text-white/90">
                <span>{t("addressDetails")}</span>
                <input
                  className="rounded-xl border border-white/15 bg-white/[0.05] p-3 text-white placeholder:text-white/35 backdrop-blur-sm focus:border-bronze-400 focus:outline-none"
                  name="addressDetails"
                />
              </label>
              <label className="field text-sm font-bold text-white/90">
                <span>{t("notes")}</span>
                <textarea
                  className="min-h-[80px] rounded-xl border border-white/15 bg-white/[0.05] p-3 text-white placeholder:text-white/35 backdrop-blur-sm focus:border-bronze-400 focus:outline-none"
                  name="notes"
                />
              </label>
              {error ? <p className="rounded-xl border border-red-500/30 bg-red-500/15 p-3 text-sm font-bold text-red-300">{error}</p> : null}
              <button className="btn btn-primary mt-2 w-full py-4 text-base font-bold shadow-lg" disabled={loading}>
                {loading ? t("creating") : t("confirmOrder")}
              </button>
            </form>
            <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-md shadow-2xl">
              <h2 className="text-xl font-black text-white">{t("summary")}</h2>
              <div className="mt-4 grid gap-3">
                {lines.map((line) => (
                  <div key={line.product.id} className="flex justify-between gap-4 text-sm text-white/85">
                    <span>
                      {line.product.name} x {line.quantity}
                    </span>
                    <strong className="text-white"><Money value={line.product.price * line.quantity} /></strong>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-between border-t border-white/10 pt-4">
                <span className="text-white/80">{t("totalCod")}</span>
                <strong className="text-2xl font-black text-white"><Money value={subtotal} /></strong>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-white/70">
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-bronze-400" /> {t("noOnlinePayment")}</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-bronze-400" /> {t("callBeforePrep")}</span>
                <span className="flex items-center gap-2"><Truck size={16} className="text-bronze-400" /> {t("deliveryByAvailability")}</span>
              </div>
            </aside>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-10 text-center text-white backdrop-blur-md">
            <p className="text-lg text-white/75">{t("addProductBeforeCheckout")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
