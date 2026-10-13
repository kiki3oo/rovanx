"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, Loader2, Sparkles, ArrowRight, ShieldCheck, Truck, PackageCheck } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import { Money } from "@/components/store/money";

type UpsellViewProps = {
  orderId: string;
  reference: string;
  offeredProduct: {
    id: string;
    name: string;
    slug: string;
    regularPrice: number;
    imageSrc: string;
  };
  upsellPrice: number;
  headlineAr: string;
  headlineFr: string;
  descAr: string;
  descFr: string;
};

export function UpsellDecision({
  orderId,
  reference,
  offeredProduct,
  upsellPrice,
  headlineAr,
  headlineFr,
  descAr,
  descFr
}: UpsellViewProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<"accept" | "skip" | null>(null);
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  const savings = Math.max(0, offeredProduct.regularPrice - upsellPrice);

  async function decide(accept: boolean) {
    setLoading(accept ? "accept" : "skip");
    try {
      await fetch(`/api/orders/${orderId}/upsell`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accept, offeredProductId: offeredProduct.id })
      });
    } catch {
      // Even on network hiccup, proceed to thank you page
    }
    router.push(`/order/${reference}`);
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Top Progress & Confirmation Banner */}
      <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-black text-emerald-300 sm:text-base">
          <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
          <span>
            {isArabic
              ? `تم تسجيل طلبك رقم (${reference}) بنجاح! خطوة أخيرة قبل إغلاق طردك السري...`
              : `Votre commande (${reference}) est bien enregistrée ! Dernière étape avant la fermeture de votre colis discret...`}
          </span>
        </div>
        <div className="mx-auto mt-3 h-2 max-w-md overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-amber-400" />
        </div>
      </div>

      {/* Main VIP One-Time Offer Card */}
      <div className="overflow-hidden rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-[#201217]/90 via-[#151822]/95 to-[#12141a] p-6 shadow-2xl backdrop-blur-xl sm:p-10">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.15fr] md:items-center">
          {/* Product Visual */}
          <div className="relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-6 text-center shadow-inner">
            {savings > 0 ? (
              <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-black text-graphite-950 shadow-lg">
                {isArabic ? `وفّر ${savings} درهم الآن` : `Économisez ${savings} DH`}
              </span>
            ) : null}
            <span className="badge mb-3 border-amber-400/30 bg-amber-500/15 text-xs font-bold text-amber-300">
              <Sparkles size={13} className="mr-1 inline" />
              {isArabic ? "عرض VIP لمرة واحدة فقط" : "Offre VIP Unique"}
            </span>
            <img
              src={offeredProduct.imageSrc}
              alt={offeredProduct.name}
              className="my-2 h-56 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105"
            />
            <p className="mt-2 text-lg font-black text-white">{offeredProduct.name}</p>
            <div className="mt-2 flex items-baseline justify-center gap-3">
              <strong className="text-3xl font-black text-amber-400">
                <Money value={upsellPrice} />
              </strong>
              <span className="text-base text-white/45 line-through">
                <Money value={offeredProduct.regularPrice} />
              </span>
            </div>
          </div>

          {/* Offer Details & 1-Click Actions */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/15 px-3.5 py-1 text-xs font-black text-amber-300">
              <span>🔥</span>
              <span>
                {isArabic
                  ? "ترقية فورية في نفس الكرتونة السرية (شحن مجاني 0 DH)"
                  : "Ajout immédiat dans le même colis discret (Livraison 0 DH)"}
              </span>
            </div>

            <h1 className="text-2xl font-black leading-snug text-white sm:text-3xl">
              {isArabic ? headlineAr : headlineFr}
            </h1>

            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              {isArabic ? descAr : descFr}
            </p>

            {/* Reassurance bullets */}
            <div className="grid gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs font-bold text-white/85 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <PackageCheck size={16} className="text-emerald-400 shrink-0" />
                <span>{isArabic ? "نفس الطرد السري المحايد" : "Même colis neutre"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "0 درهم مصاريف شحن إضافية" : "0 DH frais de port"}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-bronze-400 shrink-0" />
                <span>{isArabic ? "الدفع عند الاستلام بعد الفحص" : "Paiement après contrôle"}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                disabled={loading !== null}
                onClick={() => decide(true)}
                className="btn btn-primary flex w-full items-center justify-center gap-2 py-4 text-base font-black shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.01]"
              >
                {loading === "accept" ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <span>
                      {isArabic
                        ? `نعم! أضف ${offeredProduct.name} لطلبي بـ ${upsellPrice} درهم فقط`
                        : `Oui ! Ajouter ${offeredProduct.name} pour seulement ${upsellPrice} DH`}
                    </span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <button
                type="button"
                disabled={loading !== null}
                onClick={() => decide(false)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 text-xs font-bold text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                {loading === "skip"
                  ? isArabic
                    ? "جاري الانتقال لصفحة تأكيد الطلب..."
                    : "Redirection vers votre confirmation..."
                  : isArabic
                    ? "لا شكراً، أكتفي بطلبي الأساسي وأنتقل لصفحة التأكيد النهائية"
                    : "Non merci, je garde uniquement ma commande initiale"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
