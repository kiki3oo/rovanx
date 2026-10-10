"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Flame,
  Lock,
  Package,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";

export function HomeSolutions() {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  const solutions = [
    {
      id: "erection-vitality",
      badgeAr: "⚡ حل الصلابة والانتصاب الحديدي",
      badgeFr: "⚡ Solution Érection & Rigidité",
      titleAr: "الصلابة وتدفق الدم الشرياني",
      titleFr: "Rigidité & Érection d'Acier",
      subtitleAr: "للتغلب على ضعف أو ارتخاء الانتصاب واسترجاع الفحولة الكاملة في كل لقاء.",
      subtitleFr: "Pour surmonter les pannes d'érection et retrouver une fermeté inébranlable.",
      targetAr: "يعالج: ضعف الانتصاب، الارتخاء المفاجئ، التعب السريع.",
      targetFr: "Cible : Manque de fermeté, relâchement précoce, baisse de libido.",
      pointsAr: [
        "توسيع الأوعية الدموية وتدفق قوي للدم في أنسجة القضيب",
        "صلابة مستمرة من البداية حتى نهاية اللقاء بدون انقطاع",
        "تحفيز إنتاج التستوستيرون الطبيعي وطاقة مضاعفة"
      ],
      pointsFr: [
        "Stimulation du flux sanguin vers les corps caverneux",
        "Maintien d'une fermeté maximale tout au long du rapport",
        "Booste la testostérone naturelle et l'endurance physique"
      ],
      recommendedAr: "الحل المقترح: Vitality Ultra / Men Plus Pack",
      recommendedFr: "Recommandé : Vitality Ultra / Men Plus Pack",
      ctaTextAr: "اكتشف حل الصلابة والباكات",
      ctaTextFr: "Découvrir la Solution Érection",
      ctaLink: "/bundles",
      accentBorder: "border-amber-500/40 hover:border-amber-400",
      accentBg: "from-amber-950/20 via-white/[0.03] to-black/40",
      accentBadge: "border-amber-500/30 bg-amber-500/15 text-amber-300",
      icon: Flame,
      iconColor: "text-amber-400 bg-amber-500/15 border-amber-500/30"
    },
    {
      id: "delay-control",
      badgeAr: "⏱️ تحكم كامل وتأخير 30-45 دقيقة",
      badgeFr: "⏱️ Maîtrise & Retard 30-45 min",
      titleAr: "تأخير القذف والتحكم التام",
      titleFr: "Contrôle & Retard d'Éjaculation",
      subtitleAr: "للسيطرة الكاملة على توقيت القذف وإطالة مدة اللقاء لإسعاد الشريكة.",
      subtitleFr: "Pour maîtriser le timing de l'éjaculation et prolonger l'acte avec assurance.",
      targetAr: "يعالج: القذف السريع، فقدان السيطرة، التوتر والقلق الجنسي.",
      targetFr: "Cible : Éjaculation précoce, manque de contrôle, anxiété de performance.",
      pointsAr: [
        "تأخير القذف من 30 إلى 45 دقيقة بدون تخدير أو فقدان المتعة",
        "عمل مزدوج: كبسولات للصلابة + سيروم طبيعي للتحكم الخارجي",
        "ثقة تامة وراحة نفسية مع إسعاد الزوجة في كل مرة"
      ],
      pointsFr: [
        "Retard de l'éjaculation de 30 à 45 min sans perte de sensations",
        "Double action : capsules pour la vigueur + sérum de contrôle",
        "Confiance totale et satisfaction mutuelle du couple"
      ],
      recommendedAr: "الحل المقترح: Pack Puissance & Contrôle (Best-Seller ⭐)",
      recommendedFr: "Recommandé : Pack Puissance & Contrôle (Best-Seller ⭐)",
      ctaTextAr: "اكتشف باك القوة والتحكم",
      ctaTextFr: "Voir le Pack Puissance & Contrôle",
      ctaLink: "/bundles",
      accentBorder: "border-emerald-500/40 hover:border-emerald-400",
      accentBg: "from-emerald-950/20 via-white/[0.03] to-black/40",
      accentBadge: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
      icon: Clock,
      iconColor: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30"
    },
    {
      id: "prostate-comfort",
      badgeAr: "🛡️ راحة البروستات ونوم هادئ بدون تقطاع",
      badgeFr: "🛡️ Santé Prostate & Nuit Sereine",
      titleAr: "راحة البروستات والمسالك البولية",
      titleFr: "Confort Urinaire & Prostate",
      subtitleAr: "للتخلص من التقطير وحريق البول والاستيقاظ المتكرر طوال الليل.",
      subtitleFr: "Pour soulager les mictions fréquentes, le goutte-à-goutte et dormir d'une traite.",
      targetAr: "يعالج: تقطير البول، ضعف التدفق، الاستيقاظ في الليل، احتقان البروستات.",
      targetFr: "Cible : Jet urinaire faible, mictions nocturnes, sensation de vessie pleine.",
      pointsAr: [
        "تخفيف احتقان وتضخم البروستات بتركيبة طبيعية مركزة 120 مل",
        "تدفق بولي سلس وقوي وإفراغ مريح وتام للمثانة",
        "نوم عميق ومتواصل بدون الحاجة للذهاب للمرحاض كل ساعة"
      ],
      pointsFr: [
        "Désengorgement de la prostate par extraits végétaux concentrés (120ml)",
        "Flux urinaire puissant, régulier et vidange complète",
        "Sommeil profond et réparateur sans réveils nocturnes répétés"
      ],
      recommendedAr: "الحل المقترح: Prosta Guard / Pack Prostate",
      recommendedFr: "Recommandé : Prosta Guard / Pack Prostate",
      ctaTextAr: "اكتشف حل البروستات الطبيعي",
      ctaTextFr: "Découvrir la Solution Prostate",
      ctaLink: "/product/rovanx-prostate",
      accentBorder: "border-cyan-500/40 hover:border-cyan-400",
      accentBg: "from-cyan-950/20 via-white/[0.03] to-black/40",
      accentBadge: "border-cyan-500/30 bg-cyan-500/15 text-cyan-300",
      icon: ShieldCheck,
      iconColor: "text-cyan-400 bg-cyan-500/15 border-cyan-500/30"
    }
  ];

  return (
    <section className="section border-b border-white/10 bg-[#12141a] text-white">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-bronze-500/30 bg-bronze-500/10 px-4 py-1.5 text-xs font-black text-bronze-300">
            <Sparkles size={14} className="text-bronze-400" />
            <span>
              {isArabic ? "حلول علاجية دقيقة وموجهة" : "Solutions Thérapeutiques Ciblées"}
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl tracking-tight">
            {isArabic ? "اختر الحل المناسب لاحتياجك الشخصي" : "Choisissez la Solution Adaptée à Votre Besoin"}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-white/70 sm:text-lg leading-relaxed">
            {isArabic
              ? "تركيبات طبيعية 100% مرخصة ومصممة علمياً لمعالجة المشكل من جذوره، مع ضمان السرية التامة والدفع بعد فحص الطرد."
              : "Des formules 100% naturelles formulées pour cibler la cause profonde, avec discrétion absolue et paiement à la livraison après vérification."}
          </p>
        </div>

        {/* 3 Solution Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 bg-gradient-to-b ${item.accentBg} p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${item.accentBorder}`}
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-black ${item.accentBadge}`}
                    >
                      {isArabic ? item.badgeAr : item.badgeFr}
                    </span>
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-2xl border ${item.iconColor} shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={22} />
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 text-2xl font-black text-white group-hover:text-bronze-300 transition-colors">
                    {isArabic ? item.titleAr : item.titleFr}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/75 font-medium">
                    {isArabic ? item.subtitleAr : item.subtitleFr}
                  </p>

                  {/* Target Issue pill */}
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs text-white/80">
                    <span className="font-bold text-bronze-400">
                      {isArabic ? "التشخيص: " : "Diagnostic : "}
                    </span>
                    <span>{isArabic ? item.targetAr : item.targetFr}</span>
                  </div>

                  {/* Key Benefits */}
                  <div className="mt-5 space-y-2.5">
                    {(isArabic ? item.pointsAr : item.pointsFr).map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/85">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Recommendation & CTA */}
                <div className="mt-7 border-t border-white/10 pt-5">
                  <div className="mb-3 text-[11px] font-bold text-amber-300/90 flex items-center gap-1.5">
                    <BadgeCheck size={14} className="text-amber-400 shrink-0" />
                    <span>{isArabic ? item.recommendedAr : item.recommendedFr}</span>
                  </div>

                  <Link
                    href={item.ctaLink}
                    className="btn btn-primary flex w-full items-center justify-center gap-2 py-3 text-sm font-black shadow-lg group-hover:brightness-110"
                  >
                    <span>{isArabic ? item.ctaTextAr : item.ctaTextFr}</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Footer Strip (Discretion + Inspection) */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
              <Lock size={18} />
            </span>
            <div>
              <h4 className="text-xs font-black text-white">
                {isArabic ? "طرد سري 100%" : "Colis 100% Anonyme"}
              </h4>
              <p className="text-[11px] text-white/60">
                {isArabic ? "كرتونة بدون أي إشارة للمحتوى" : "Emballage neutre sans mention"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <Package size={18} />
            </span>
            <div>
              <h4 className="text-xs font-black text-white">
                {isArabic ? "فحص الطرد قبل الأداء" : "Vérification Avant Paiement"}
              </h4>
              <p className="text-[11px] text-white/60">
                {isArabic ? "افحص علبتك عاد خلص الموزع" : "Contrôlez le colis avant de payer"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-bronze-500/30 bg-bronze-500/10 text-bronze-400">
              <Truck size={18} />
            </span>
            <div>
              <h4 className="text-xs font-black text-white">
                {isArabic ? "توصيل سريع 24-48 ساعة" : "Livraison Rapide 24/48h"}
              </h4>
              <p className="text-[11px] text-white/60">
                {isArabic ? "بالمجان لجميع مدن المغرب" : "Gratuite partout au Maroc"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
              <ShieldCheck size={18} />
            </span>
            <div>
              <h4 className="text-xs font-black text-white">
                {isArabic ? "طبيعي ومرخص" : "100% Naturel & Certifié"}
              </h4>
              <p className="text-[11px] text-white/60">
                {isArabic ? "مكونات نقية خالية من الكيماويات" : "Formules pures sans additifs"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
