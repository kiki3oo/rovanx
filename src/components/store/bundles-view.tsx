"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  CheckCircle2,
  Lock,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";
import { BundleCodForm, BundleItemData } from "@/components/store/bundle-cod-form";
import { getProductVisual } from "@/lib/product-visuals";

type RawBundle = {
  id: string;
  name: string;
  slug: string;
  bundlePrice: number;
  regularCombinedPrice: number;
  description: string;
  items: {
    product: {
      id: string;
      name: string;
      slug: string;
    };
    quantity: number;
  }[];
};

const BUNDLE_MULTILINGUAL: Record<
  string,
  {
    nameAr: string;
    nameFr: string;
    nameEn: string;
    badgeAr: string;
    badgeFr: string;
    badgeEn: string;
    badgeColor: string;
    descAr: string;
    descFr: string;
    descEn: string;
    highlightsAr: string[];
    highlightsFr: string[];
    highlightsEn: string[];
  }
> = {
  "rovanx-pack-puissance": {
    nameAr: "Pack Puissance & Contrôle",
    nameFr: "Pack Puissance & Contrôle",
    nameEn: "Power & Control Pack",
    badgeAr: "⭐ الأكثر طلباً وتوفيراً (Best-Seller)",
    badgeFr: "⭐ Meilleure Vente (Best-Seller)",
    badgeEn: "⭐ Best-Seller Pack",
    badgeColor: "bg-gradient-to-r from-amber-500/25 via-amber-400/20 to-amber-500/25 text-amber-300 border border-amber-400/80 font-black shadow-sm shadow-amber-500/10",
    descAr:
      "الحل المزدوج المتكامل: كبسولات Vitality Ultra للصلابة وتمدد الحجم والسمك + زيت Control Flow لتأخير القذف 30-45 دقيقة وتحكم تام فالعلاقة لإسعاد الزوجة.",
    descFr:
      "La double action complète : Vitality Ultra pour une fermeté maximale et gain de volume + huile Control Flow pour retarder l'éjaculation de 30 à 45 min sans anesthésie.",
    descEn:
      "Complete dual action: Vitality Ultra for steel firmness and volume expansion + Control Flow oil to delay ejaculation by 30-45 min with full control.",
    highlightsAr: [
      "صلابة حديدية وتمدد الحجم والسمك من الداخل (Vitality Ultra)",
      "تأخير القذف من 30 إلى 45 دقيقة وتحكم كامل من الخارج (Control Flow)",
      "إمتاع وإسعاد الزوجة في كل لقاء مع توفير فوري 100 درهم"
    ],
    highlightsFr: [
      "Fermeté d'acier et expansion du volume tissulaire (Vitality Ultra)",
      "Contrôle et retard de l'éjaculation de 30 à 45 min (Control Flow)",
      "Satisfaction mutuelle du couple avec 100 DH d'économie immédiate"
    ],
    highlightsEn: [
      "Steel firmness and tissue volume expansion (Vitality Ultra)",
      "Delay and control for 30 to 45 min (Control Flow)",
      "Mutual partner satisfaction with 100 DH instant savings"
    ]
  },
  "rovanx-men-pack": {
    nameAr: "Men Pack",
    nameFr: "Men Pack",
    nameEn: "Men Pack",
    badgeAr: "👑 الثنائي الفحولي الملكي",
    badgeFr: "👑 Duo Virilité Royale",
    badgeEn: "👑 Royal Virility Duo",
    badgeColor: "bg-gradient-to-r from-amber-500/15 to-bronze-500/20 text-amber-300 border border-amber-500/30",
    descAr:
      "الثنائي الفحولي: Vitality Ultra + Royal Force لانتصاب حديدي وطاقة مضاعفة طوال اللقاء.",
    descFr:
      "Le duo de virilité : Vitality Ultra + Royal Force pour une érection inébranlable et une endurance décuplée.",
    descEn:
      "The virility duo: Vitality Ultra + Royal Force for continuous steel erection and enhanced stamina.",
    highlightsAr: [
      "مضاعفة التدفق الدموي وتوسيع الأنسجة الكهفية (Vitality Ultra)",
      "ماكا سوداء بيروفية نادرة لانتصاب صخري دائم (Royal Force)",
      "طاقة فحولية متجددة بدون أي هبوط مع توفير 130 درهم"
    ],
    highlightsFr: [
      "Afflux sanguin maximal et expansion caverneuse (Vitality Ultra)",
      "Maca noire péruvienne pure pour une érection pérenne (Royal Force)",
      "Énergie masculine renouvelée sans fatigue avec 130 DH d'économie"
    ],
    highlightsEn: [
      "Maximum blood flow and cavernous expansion (Vitality Ultra)",
      "Rare Peruvian Black Maca for sustained erection (Royal Force)",
      "Renewed masculine stamina with 130 DH savings"
    ]
  },
  "rovanx-men-plus-pack": {
    nameAr: "Men Plus Pack",
    nameFr: "Men Plus Pack",
    nameEn: "Men Plus Pack",
    badgeAr: "🏆 الكورس الشامل VIP (3 في 1)",
    badgeFr: "🏆 Cure Complète VIP (3-en-1)",
    badgeEn: "🏆 Complete VIP Cure (3-in-1)",
    badgeColor: "bg-gradient-to-r from-emerald-500/15 to-teal-500/20 text-emerald-300 border border-emerald-500/30",
    descAr:
      "الباك الملكي 3 في 1: صلابة مستمرة، تحفيز التستوستيرون، ومقاومة تامة للتعب والإجهاد.",
    descFr:
      "La cure royale 3-en-1 : érection ferme, stimulation de la testostérone et résistance au stress.",
    descEn:
      "The royal 3-in-1 cure: firm erection, testosterone stimulation, and resistance to stress.",
    highlightsAr: [
      "علاج 360 درجة متكامل: صلابة + هرمونات + طاقة عضلية",
      "تحفيز التستوستيرون الطبيعي بجينسينغ كوري معتق 6 سنوات (Testo Drive)",
      "كورس كامل لمدة شهرين لتثبيت النتائج الدائمة مع توفير 200 درهم"
    ],
    highlightsFr: [
      "Action globale 360° : fermeté + testostérone + endurance musculaire",
      "Ginseng rouge coréen 6 ans et zinc hautement assimilable (Testo Drive)",
      "Cure complète de 2 mois pour des résultats durables avec 200 DH d'économie"
    ],
    highlightsEn: [
      "Full 360° action: firmness + testosterone + muscular endurance",
      "6-year Korean Red Ginseng and organic zinc (Testo Drive)",
      "Full 2-month course for lasting results with 200 DH savings"
    ]
  },
  "rovanx-prostate-energie-pack": {
    nameAr: "Pack Santé Prostate & Énergie",
    nameFr: "Pack Santé Prostate & Énergie",
    nameEn: "Prostate & Vitality Pack",
    badgeAr: "🌿 صحة البروستاتا والراحة الليلية",
    badgeFr: "🌿 Santé Prostate & Confort Nocturne",
    badgeEn: "🌿 Prostate Health & Night Comfort",
    badgeColor: "bg-gradient-to-r from-blue-500/15 to-cyan-500/20 text-cyan-300 border border-blue-500/30",
    descAr:
      "باك صحة البروستاتا والراحة الليلية: Prosta Guard (120 مل) للراحة البولية والنوم الهادئ + Testo Drive لدعم الحيوية والدورة الدموية للحوض.",
    descFr:
      "Pack santé prostate et confort : Prosta Guard (120 ml) pour un flux urinaire fluide et sommeil paisible + Testo Drive pour l'énergie pelvienne.",
    descEn:
      "Prostate health and comfort pack: Prosta Guard (120 ml) for smooth urinary flow and restful sleep + Testo Drive for vitality.",
    highlightsAr: [
      "إفراغ مريح وكامل للمثانة ونوم هادئ بدون استيقاظ ليلي (Prosta Guard)",
      "تدفق بولي سلس وقوي مع راحة تامة في منطقة الحوض",
      "تنشيط الدورة الدموية ومقاومة الإجهاد والتعب (Testo Drive)"
    ],
    highlightsFr: [
      "Vidange vésicale complète et nuits paisibles sans réveils (Prosta Guard)",
      "Jet urinaire puissant et fluide avec soulagement pelvien durable",
      "Vitalité masculine et lutte contre la fatigue (Testo Drive)"
    ],
    highlightsEn: [
      "Complete bladder emptying and restful sleep without night waking (Prosta Guard)",
      "Strong smooth urinary flow and lasting pelvic comfort",
      "Masculine vitality and stress relief (Testo Drive)"
    ]
  }
};

export function BundlesView({ bundles }: { bundles: RawBundle[] }) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";
  const isEnglish = locale === "en";

  const [selectedPackSlug, setSelectedPackSlug] = useState<string>("rovanx-pack-puissance");

  // Format bundle items for the COD form
  const bundlesData: BundleItemData[] = bundles.map((b) => {
    const multi = BUNDLE_MULTILINGUAL[b.slug];
    const name = isArabic ? multi?.nameAr || b.name : isEnglish ? multi?.nameEn || b.name : multi?.nameFr || b.name;
    const description = isArabic
      ? multi?.descAr || b.description
      : isEnglish
        ? multi?.descEn || b.description
        : multi?.descFr || b.description;
    const badge = isArabic ? multi?.badgeAr : isEnglish ? multi?.badgeEn : multi?.badgeFr;

    return {
      id: b.id,
      name,
      slug: b.slug,
      bundlePrice: b.bundlePrice,
      regularCombinedPrice: b.regularCombinedPrice,
      description,
      badge,
      items: b.items.map((it) => ({
        productId: it.product.id,
        productName: it.product.name,
        productSlug: it.product.slug,
        quantity: it.quantity
      }))
    };
  });

  return (
    <div className="relative min-h-screen bg-[#0e1015] text-white">
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#180a0f] via-[#12141a] to-[#0e1015] py-14 md:py-20">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-black text-amber-300">
            <Sparkles size={15} />
            <span>
              {isArabic
                ? "باقات وعروض التوفير الحصرية (ROVANX المغرب)"
                : isEnglish
                  ? "Exclusive Packs & Best Value Offers (ROVANX)"
                  : "Packs Exclusifs & Meilleures Offres (ROVANX Maroc)"}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white sm:text-5xl lg:text-6xl tracking-tight">
            {isArabic
              ? "باقات القوة والنتائج المضاعفة"
              : isEnglish
                ? "Power Packs & Multiplied Results"
                : "Packs Puissance & Résultats Multipliés"}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
            {isArabic
              ? "علاجات متكاملة مصممة علمياً للرجال: صلابة، تحكم، هرمونات وتوفير يصل إلى 200 درهم مع شحن مجاني 0 DH وتغليف سري 100% ودفع عند الاستلام."
              : isEnglish
                ? "Scientifically formulated solutions for men: firmness, control, testosterone, and up to 200 DH savings with free discreet shipping and cash on delivery."
                : "Formules complètes conçues scientifiquement pour les hommes : fermeté, contrôle, testostérone et jusqu'à 200 DH d'économie. Livraison discrète 100% gratuite et paiement à la livraison."}
          </p>

          {/* 3 Reassurance Pillars */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
              <Truck size={22} className="text-amber-400" />
              <span className="text-xs font-black text-white sm:text-sm">
                {isArabic ? "توصيل مجاني 0 DH" : isEnglish ? "Free Delivery 0 DH" : "Livraison Gratuite 0 DH"}
              </span>
              <span className="text-[10px] text-white/60">
                {isArabic ? "24 إلى 48 ساعة" : isEnglish ? "24 to 48 hours" : "24 à 48 heures"}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
              <Lock size={22} className="text-amber-400" />
              <span className="text-xs font-black text-white sm:text-sm">
                {isArabic ? "تغليف سري 100%" : isEnglish ? "100% Discreet Parcel" : "Colis 100% Anonyme"}
              </span>
              <span className="text-[10px] text-white/60">
                {isArabic ? "طرد محايد بدون إحراج" : isEnglish ? "Neutral sealed packaging" : "Emballage neutre sans mention"}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
              <ShieldCheck size={22} className="text-emerald-400" />
              <span className="text-xs font-black text-white sm:text-sm">
                {isArabic ? "معاينة قبل الدفع" : isEnglish ? "Check before paying" : "Vérifiez avant de payer"}
              </span>
              <span className="text-[10px] text-white/60">
                {isArabic ? "افحص أمانتك مع الموزع" : isEnglish ? "Inspect with courier" : "Inspectez avec le livreur"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PACKS CARDS GRID */}
      <section className="section py-14">
        <div className="container">
          <div className="mb-10 text-center">
            <span className="badge border-white/10 bg-white/5 text-xs font-bold text-amber-400">
              {isArabic
                ? "اختر الباقة الأنسب لاحتياجك"
                : isEnglish
                  ? "Choose the best pack for your needs"
                  : "Choisissez la formule idéale pour vous"}
            </span>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">
              {isArabic ? "باقات ROVANX المتكاملة" : isEnglish ? "ROVANX Complete Packs" : "Les Packs Complets ROVANX"}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bundles.map((bundle) => {
              const multi = BUNDLE_MULTILINGUAL[bundle.slug];
              const title = isArabic ? multi?.nameAr || bundle.name : isEnglish ? multi?.nameEn || bundle.name : multi?.nameFr || bundle.name;
              const badgeText = isArabic ? multi?.badgeAr : isEnglish ? multi?.badgeEn : multi?.badgeFr;
              const desc = isArabic ? multi?.descAr || bundle.description : isEnglish ? multi?.descEn || bundle.description : multi?.descFr || bundle.description;
              const highlights = isArabic ? multi?.highlightsAr : isEnglish ? multi?.highlightsEn : multi?.highlightsFr || [];

              const savings = bundle.regularCombinedPrice - bundle.bundlePrice;
              const isBestSeller = bundle.slug === "rovanx-pack-puissance";

              return (
                <article
                  key={bundle.id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl ${
                    isBestSeller
                      ? "border-amber-400 bg-gradient-to-b from-[#241419]/90 via-[#181a22]/80 to-[#12141a]/90 shadow-2xl shadow-amber-500/10 ring-2 ring-amber-400/30"
                      : "border-white/10 bg-white/[0.03] hover:border-amber-500/40 hover:bg-white/[0.06] shadow-xl"
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-black ${
                          multi?.badgeColor || "bg-white/10 text-white"
                        }`}
                      >
                        {badgeText || (isArabic ? "باقة توفير مميزة" : "Pack Avantage")}
                      </span>
                      {savings > 0 ? (
                        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-black text-emerald-300">
                          {isArabic ? `وفر ${savings} DH` : isEnglish ? `Save ${savings} DH` : `-${savings} DH`}
                        </span>
                      ) : null}
                    </div>

                    {/* Pack Visual Packshots Preview */}
                    <div className="mb-5 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      {bundle.items.map((item, idx) => {
                        const visual = getProductVisual(item.product.slug);
                        return (
                          <div key={item.product.id} className="flex items-center gap-2">
                            {idx > 0 ? (
                              <span className="text-xl font-black text-amber-400">+</span>
                            ) : null}
                            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-white/[0.03] p-1.5 flex items-center justify-center">
                              {visual ? (
                                <img
                                  src={visual.src}
                                  alt={item.product.name}
                                  className="h-full w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <span className="text-xs font-bold text-white/50">{item.product.name}</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      {desc}
                    </p>

                    {/* What's inside */}
                    <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                      <p className="text-xs font-black uppercase text-amber-300">
                        {isArabic ? "مكونات ومزايا الباقة:" : isEnglish ? "What's included:" : "Composition & Bénéfices :"}
                      </p>
                      <ul className="space-y-2 text-xs text-white/85">
                        {highlights && highlights.length > 0
                          ? highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                                <span>{h}</span>
                              </li>
                            ))
                          : bundle.items.map((it) => (
                              <li key={it.product.id} className="flex items-center gap-2">
                                <CheckCircle2 size={15} className="shrink-0 text-emerald-400" />
                                <span>{it.product.name}</span>
                              </li>
                            ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <div>
                        <span className="text-xs text-white/60">
                          {isArabic ? "سعر الباقة الإجمالي:" : isEnglish ? "Total pack price:" : "Prix total du pack :"}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-black text-amber-400">
                            <Money value={bundle.bundlePrice} />
                          </p>
                          <p className="text-sm text-white/40 line-through">
                            <Money value={bundle.regularCombinedPrice} />
                          </p>
                        </div>
                      </div>
                      <span className="rounded bg-emerald-500/20 px-2 py-1 text-[11px] font-black text-emerald-300">
                        {isArabic ? "شحن مجاني 0 DH ✓" : isEnglish ? "Free delivery 0 DH ✓" : "Port gratuit 0 DH ✓"}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPackSlug(bundle.slug);
                        const form = document.getElementById("bundle-order-form");
                        if (form) form.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`btn mt-4 flex min-h-12 w-full items-center justify-center gap-2 text-sm font-black uppercase tracking-wider shadow-lg transition-all ${
                        isBestSeller
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:brightness-110"
                          : "btn-primary"
                      }`}
                    >
                      <span>
                        {isArabic ? "اطلب هذه الباقة الآن" : isEnglish ? "Order this Pack" : "Commander ce Pack"}
                      </span>
                      <ArrowDown size={16} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* 3. DIRECT COD ORDER FORM */}
          <BundleCodForm
            bundles={bundlesData}
            selectedSlug={selectedPackSlug}
            onSelectBundle={(slug) => setSelectedPackSlug(slug)}
          />
        </div>
      </section>

      {/* 4. FOOTER TRUST & SATISFACTION GUARANTEES */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container max-w-4xl text-center">
          <span className="badge border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-300">
            {isArabic ? "ضمان الرضا والخصوصية 100%" : isEnglish ? "100% Privacy & Satisfaction" : "Garantie 100% Discrétion & Satisfaction"}
          </span>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
            {isArabic
              ? "لماذا يثق آلاف الرجال في المغرب بـ ROVANX؟"
              : isEnglish
                ? "Why thousands of men in Morocco trust ROVANX"
                : "Pourquoi des milliers d'hommes font confiance à ROVANX ?"}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 text-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 font-bold">
                🔒
              </div>
              <h3 className="mt-3 text-base font-black text-white">
                {isArabic ? "سرية تامة 100%" : isEnglish ? "100% Total Privacy" : "Discrétion Totale 100%"}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "طرد كرتوني مغلق بإحكام وبدون أي اسم أو تفاصيل للمنتج. معلوماتك الشخصية محمية ولا يتم مشاركتها أبداً."
                  : isEnglish
                    ? "Sealed neutral packaging without any product mention. Your personal data is confidential and protected."
                    : "Emballage scellé et anonyme sans aucune mention extérieure. Vos informations personnelles restent strictement confidentielles."}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold">
                ✓
              </div>
              <h3 className="mt-3 text-base font-black text-white">
                {isArabic ? "معاينة قبل الدفع" : isEnglish ? "Inspection Before Payment" : "Contrôle Avant Paiement"}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "من حقك القانوني فحص علبتك والتأكد من سلامة الطرد مع موزع الأمانة قبل تسليم أي درهم."
                  : isEnglish
                    ? "Inspect your package with the courier before paying. Zero risk."
                    : "Vous pouvez vérifier l'état de votre colis avec le livreur avant de régler. Zéro risque."}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 font-bold">
                🌿
              </div>
              <h3 className="mt-3 text-base font-black text-white">
                {isArabic ? "مكونات طبيعية نقية" : isEnglish ? "100% Pure Natural Formula" : "Formules 100% Naturelles"}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "تركيبات عشبية نباتية 100% بدون أي مواد كيميائية ضارة، لا تسبب صداعاً ولا خفقاناً ولا أي آثار جانبية."
                  : isEnglish
                    ? "Plant-based extracts without synthetic chemicals. No headaches, no palpitations, no side effects."
                    : "Extraits botaniques purs sans additifs chimiques nocifs. Pas de maux de tête ni de palpitations."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
