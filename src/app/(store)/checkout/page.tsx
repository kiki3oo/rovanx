"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, LockKeyhole, PhoneCall, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/components/store/cart-provider";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const { currency, locale } = usePreferences();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(formData: FormData) {
    setLoading(true);
    setError("");
    const payload = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      city: formData.get("city"),
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
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    setLoading(false);
    if (!response.ok) {
      setError(data.error || "Checkout failed");
      return;
    }
    clear();
    router.push(data.upsellUrl || `/order/${data.reference}`);
  }

  return (
    <section className="section">
      <div className="container">
        <p className="badge mb-3">COD Checkout</p>
        <div className="mb-8 max-w-3xl">
          <h1 className="text-4xl font-black">Confirmer la commande</h1>
          <p className="mt-3 text-black/62">Remplissez vos informations. Un agent confirme par telephone avant expedition. Aucun paiement en ligne.</p>
        </div>
        {lines.length ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
            <form action={submit} className="surface-card grid gap-4 p-5">
              <div className="grid gap-3 rounded-md bg-bronze-500/10 p-4 text-sm text-black/70 sm:grid-cols-3">
                {[
                  [LockKeyhole, "Donnees protegees"],
                  [PhoneCall, "Confirmation par appel"],
                  [Truck, "Livraison apres validation"]
                ].map(([Icon, text]) => (
                  <span key={String(text)} className="flex items-center gap-2 font-bold">
                    <Icon size={16} className="text-bronze-600" />
                    {text as string}
                  </span>
                ))}
              </div>
              <label className="field">
                <span>Nom complet *</span>
                <input className="input" name="fullName" required />
              </label>
              <label className="field">
                <span>Telephone *</span>
                <input className="input" name="phone" required inputMode="tel" />
              </label>
              <label className="field">
                <span>Ville *</span>
                <input className="input" name="city" required />
              </label>
              <label className="field">
                <span>Adresse complete *</span>
                <textarea className="textarea" name="address" required />
              </label>
              <label className="field">
                <span>Details additionnels</span>
                <input className="input" name="addressDetails" />
              </label>
              <label className="field">
                <span>Notes</span>
                <textarea className="textarea" name="notes" />
              </label>
              {error ? <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
              <button className="btn btn-primary" disabled={loading}>
                {loading ? "Creation..." : "Confirmer la commande"}
              </button>
            </form>
            <aside className="premium-panel h-fit p-5">
              <h2 className="text-xl font-black">Resume</h2>
              <div className="mt-4 grid gap-3">
                {lines.map((line) => (
                  <div key={line.product.id} className="flex justify-between gap-4 text-sm">
                    <span>
                      {line.product.name} x {line.quantity}
                    </span>
                    <strong><Money value={line.product.price * line.quantity} /></strong>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between border-t border-black/10 pt-4">
                <span>Total COD</span>
                <strong><Money value={subtotal} /></strong>
              </div>
              <div className="mt-5 grid gap-3 text-sm text-black/65">
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-bronze-600" /> Aucun paiement en ligne requis</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-bronze-600" /> Appel avant preparation</span>
                <span className="flex items-center gap-2"><Truck size={16} className="text-bronze-600" /> Livraison selon disponibilite</span>
              </div>
            </aside>
          </div>
        ) : (
          <div className="premium-panel p-8">Ajoutez un produit avant le checkout.</div>
        )}
      </div>
    </section>
  );
}
