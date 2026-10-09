"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  Clock3,
  Star,
  Sparkles,
  Zap,
  Eye,
  Lock,
  HelpCircle,
  ArrowDown,
  PhoneCall,
  Flame,
  Check,
  Activity,
  Award,
  Brain,
  Dumbbell,
  ShieldAlert,
  BatteryCharging
} from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";

export function TestoDriveExperience() {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  // Interactive Testosterone & Vitality Assessment State
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([0, 1]);

  const symptomsList = [
    {
      id: 0,
      icon: "🥱",
      titleAr: "تراجع الدافع والحماس الذكوري، والشعور بالفتور والكسل حتى في أوقات الراحة",
      titleFr: "Baisse de dynamisme, manque de motivation et léthargie générale",
      descAr: "كتفقد الشغف والحماس اليومي، وكتحس بلي طاقتك ونشاطك تراجعو بزاف مقارنة بالماضي.",
      descFr: "Manque d'entrain, lassitude et perte d'ambition physique au quotidien."
    },
    {
      id: 1,
      icon: "📉",
      titleAr: "نقص الرغبة الحميمية وضعف الاندفاع للفحولة واللقاءات الزوجية",
      titleFr: "Baisse de libido et manque de vigueur spontanée",
      descAr: "الرغبة قليلة وباردة، ومكيبقاش عندك داك الاندفاع التلقائي والنشاط الذكوري الطبيعي.",
      descFr: "Désir émoussé et baisse de tonus spontané lors des moments intimes."
    },
    {
      id: 2,
      icon: "🏋️",
      titleAr: "صعوبة بناء أو الحفاظ على الكتلة العضلية مع زيادة تراكم الدهون في أسفل البطن",
      titleFr: "Perte de tonus musculaire et stockage abdominal accru",
      descAr: "العضلات كيرتخيو وصعوبة فالاسترجاع بعد الرياضة، مع تراكم ملحوظ للكرش والدهون.",
      descFr: "Fonte musculaire, graisse abdominale résistante et récupération laborieuse."
    },
    {
      id: 3,
      icon: "🧠",
      titleAr: "ضبابية فكرية، تقلب المزاج، وفقدان التركيز تحت ضغوطات العمل اليومية",
      titleFr: "Surcharge mentale, sautes d'humeur et baisse de concentration",
      descAr: "الأعصاب مشدودة، نرفزة سريعة، وضبابية فالدماغ كتأثر على قراراتك وتجارتك.",
      descFr: "Irritabilité, difficulté à trancher et fatigue nerveuse sous tension."
    },
    {
      id: 4,
      icon: "⚡",
      titleAr: "إرهاق عصبي مستمر والشعور بأن هرمون التوتر (الكورتيزول) يستنزف قواك",
      titleFr: "Stress chronique et cortisol élevé détruisant l'énergie vitale",
      descAr: "الضغط ديال الخدمة والمشاكل اليومية كيمص منك كاع الطاقة ويخليك مهدود.",
      descFr: "Épuisement des glandes surrénales bloquant la vitalité naturelle."
    }
  ];

  const toggleSymptom = (id: number) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="border-t border-white/10 bg-[#0e1015] text-white">
      {/* 1. TOP IMPACT PROOF BAR */}
      <section className="border-b border-white/10 bg-gradient-to-r from-amber-950/60 via-bronze-900/30 to-amber-950/60 py-6">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تحفيز التستوستيرون" : "Boost Testostérone"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "فحولة وقوة طبيعية" : "Virilité augmentée"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "جينسينغ كوري 6 سنوات" : "Ginseng 6 Ans d'âge"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "معتق لأقصى فاعلية" : "Extrait rouge titré"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تغليف سري 100%" : "Colis 100% anonyme"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "خصوصية وسرية تامة" : "Discrétion garantie"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "معاينة قبل الدفع" : "Vérification sur place"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "افحص طردك ثم ادفع" : "Paiement en espèces"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SOCIAL PROOF BANNER */}
      <section className="border-b border-white/10 bg-[#12151c] py-8">
        <div className="container">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div className="p-3">
              <p className="text-3xl font-black text-amber-400 sm:text-4xl">+2,650</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "رجل بالمغرب استعادوا طاقتهم الذكورية" : "Hommes actifs au Maroc"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-emerald-400 sm:text-4xl">96.8%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "نسبة التخلص من الإجهاد وضعف الرغبة" : "Moins de fatigue & stress"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-bronze-300 sm:text-4xl">0%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "هرمونات صناعية أو أضرار جانبية" : "Sans additif chimique"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-white sm:text-4xl">100%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "مستخلصات نباتية أصلية ونقية" : "Plantes adaptogènes pures"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TESTOSTERONE & VITALITY ASSESSMENT QUIZ */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "اختبار مستوى التستوستيرون والطاقة في 30 ثانية" : "Auto-évaluation de testostérone en 30 secondes"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "واش كتحس بواحد أو أكثر من هاد المؤشرات الذكورية؟"
                : "Ressentez-vous une baisse de vitalité masculine ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "اختر العلامات التي تلاحظها في يومك لاكتشاف كيف تعيد تركيبة Testo Drive توازن هرموناتك:"
                : "Cochez vos ressentis pour évaluer votre niveau de testostérone libre :"}
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {symptomsList.map((item) => {
              const isChecked = selectedSymptoms.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleSymptom(item.id)}
                  className={`w-full text-start flex items-start gap-4 rounded-2xl border p-4.5 transition-all ${
                    isChecked
                      ? "border-amber-400 bg-amber-500/15 shadow-lg shadow-amber-950/20 ring-1 ring-amber-400"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <div
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-xs font-bold transition-colors ${
                      isChecked
                        ? "border-amber-400 bg-amber-400 text-graphite-950"
                        : "border-white/30 bg-transparent text-transparent"
                    }`}
                  >
                    ✓
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="text-base font-black text-white">
                        {isArabic ? item.titleAr : item.titleFr}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-white/65">
                      {isArabic ? item.descAr : item.descFr}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Diagnostic Result Box */}
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-bronze-950/40 to-amber-950/40 p-6 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-2xl text-amber-400">
                ⚡
              </div>
              <div className="text-center sm:text-start flex-1">
                <h4 className="text-lg font-black text-amber-300">
                  {isArabic
                    ? selectedSymptoms.length > 0
                      ? `تم تشخيص ${selectedSymptoms.length} علامات لهبوط التستوستيرون وارتفاع هرمون التوتر`
                      : "اختر ما تشعر به أعلاه لمعرفة الحل الطبيعي"
                    : `${selectedSymptoms.length} signe(s) de fatigue hormonale identifié(s)`}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  {isArabic
                    ? "ابتداءً من سن 30، ينخفض إنتاج التستوستيرون الطبيعي بمعدل 1% إلى 2% سنوياً، ومع ضغوط العمل والإجهاد يرتفع هرمون الكورتيزول الذي يدمر التستوستيرون الحر ويسلبك طاقتك وعضلاتك! Testo Drive يجمع الجينسينغ الأحمر الكوري المعتق (6 سنوات) وعشبة الروديولا المتكيفة النادرة مع الزنك النقي لتخفيض الكورتيزول بنسبة 30% وإعادة شحن الغدد لإنتاج التستوستيرون الذاتي بكل قوة وأمان."
                    : "Après 30 ans, le taux de testostérone chute progressivement tandis que le cortisol (hormone du stress) bloque la vigueur masculine. Testo Drive associe le Panax Ginseng 6 ans et la Rhodiola pour neutraliser le cortisol et relancer la synthèse naturelle de testostérone libre sans aucune hormone de synthèse."}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <a
                    href="#cod-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-bronze-500 px-6 py-3 text-sm font-black text-graphite-950 shadow-lg hover:brightness-110 transition-all"
                  >
                    <span>{isArabic ? "اطلب Testo Drive واسترجع طاقتك الذكورية" : "Commander Testo Drive maintenant"}</span>
                    <ArrowDown size={16} />
                  </a>
                  <span className="text-xs text-white/60">
                    {isArabic ? "الدفع بعد المعاينة عند الاستلام" : "Paiement à la livraison"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEFORE VS AFTER COMPARISON */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "الفرق الحقيقي في حياتك ويومك" : "La transformation au quotidien"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيف تتغير طاقتك وقوتك قبل وبعد Testo Drive؟"
                : "Votre niveau d'énergie avant vs après Testo Drive"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "مقارنة دقيقة توضح التحول الجذري في الحافز الذكوري والقوة البدنية والمزاج:"
                : "Découvrez la montée en puissance physique, mentale et hormonale :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-2xl border border-red-500/25 bg-red-950/15 p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 border-b border-red-500/20 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20 text-lg font-black text-red-400">
                  ✕
                </span>
                <div>
                  <h3 className="text-xl font-black text-red-300">
                    {isArabic ? "قبل Testo Drive: الإرهاق وضعف الحافز" : "Avant : Fatigue nerveuse et baisse de régime"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "فتور، توتر عصبي، وتراجع القوة" : "Cortisol élevé, perte de tonus et démotivation"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "إرهاق عصبي مزمن وتأثير ضغوط العمل على المزاج والطاقة مع نرفزة سريعة وضيق في الصدر."
                      : "Épuisement nerveux permanent, stress du travail impactant l'humeur et la patience."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "خمول بدني وصعوبة ممارسة الرياضة بعد العمل، مع ارتخاء العضلات وزيادة الكرش والدهون."
                      : "Lourdeur physique, abandon de l'activité sportive et accumulation de graisse abdominale."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "تراجع الرغبة الحميمية والاندفاع الفحولي التلقائي، والإحساس بأن الشباب والحرارة قد تراجعا."
                      : "Libido au ralenti, manque d'élan spontané et sentiment de vieillissement prématuré."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "ضعف المناعة وسرعة التأثر بنزلات البرد والتعب المزمن الذي لا يزول حتى بعد النوم."
                      : "Immunité fragilisée, vulnérabilité aux coups de froid et fatigue inexpliquée."}
                  </span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/15 p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-lg font-black text-emerald-400">
                  ✓
                </span>
                <div>
                  <h3 className="text-xl font-black text-emerald-300">
                    {isArabic ? "مع Testo Drive: الفحولة والقوة الكاملة" : "Avec Testo Drive : Force et virilité souveraine"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "تستوستيرون متدفق، عضلات مشدودة، وهدوء عصبي" : "Testostérone libre, masse musculaire et calme"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "نشاط متقد وثابت وهدوء عصبي تام أمام أصعب الضغوط بفضل توازن هرمون الكورتيزول."
                      : "Sérénité nerveuse absolue, maîtrise totale du stress et clarté d'esprit face aux défis."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "قوة بدنية وتحمل مضاعف لممارسة الرياضة وبناء بنية عضلية مشدودة ورشيقة بكل حماس."
                      : "Poussée de force physique, endurance à l'entraînement et tonification musculaire visible."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "رغبة حميمية متقدة واندفاع فحولي قوي يعيد إليك حرارة الشباب وثقتك ورضا شريكة حياتك."
                      : "Désir intense et spontané, virilité affirmée et assurance sans faille au quotidien."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "مناعة حديدية وقوة تعافٍ سريعة وطاقة إيجابية متجددة تلازمك من الصباح إلى المساء."
                      : "Défenses immunitaires d'acier, régénération cellulaire accélérée et vitalité rayonnante."}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 4 SYNERGISTIC CLINICAL ACTIVES */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "تركيبة الفحولة والمقاومة الطبيعية" : "Synergie adaptogène & hormonale"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "4 عناصر نقية لتحفيز التستوستيرون وقهر الإجهاد"
                : "Les 4 actifs puissants de Testo Drive"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "مزيج مدروس سريرياً يجمع بين أقوى النباتات المتكيفة ومعدن الرجولة الأساسي:"
                : "Une formulation d'élite associant plantes adaptogènes millénaires et micronutriments ciblés :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Korean Red Ginseng 6 Years */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">01</span>
                <span className="text-xs text-amber-400 font-bold">⚡ Ginseng 6 Ans</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الجينسينغ الأحمر الكوري المعتق" : "Panax Ginseng Coréen 6 Ans"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "معتق لمدة 6 سنوات لاكتساب أعلى تركيز من الجينسينوسيدات النشطة. ينشط الدورة الدموية، يوسع الشرايين، ويدعم إفراز أكسيد النيتريك لتحقيق انتصاب قوي وطاقة بدنية تدوم."
                  : "Le roi des toniques asiatiques titré en ginsénosides actifs. Stimule l'oxygénation cellulaire et la microcirculation pour une vigueur sans faille."}
              </p>
            </div>

            {/* 2. Rhodiola Rosea */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">02</span>
                <span className="text-xs text-amber-400 font-bold">🌿 Rhodiola Rosea</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "عشبة الروديولا الوردية المتكيفة" : "Rhodiola Rosea de l'Arctique"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "نبتة المناطق الجبلية الباردة التي تخفض هرمون الكورتيزول (هرمون التوتر) بنسبة تصل لـ 30%. تحمي التستوستيرون من التدمير وتمنحك هدوءاً عصبياً وتركيزاً حاداً."
                  : "Adaptogène polaire réduisant drastiquement le cortisol, protégeant ainsi la testostérone libre et améliorant la résistance au stress chronique."}
              </p>
            </div>

            {/* 3. Zinc Gluconate */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">03</span>
                <span className="text-xs text-amber-400 font-bold">🛡️ Zinc Chélaté</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "غلوكونات الزنك العضوي" : "Gluconate de Zinc organique"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "المعدن الأساسي المسؤول عن تحويل الكوليسترول إلى هرمون التستوستيرون في الخصيتين. يحمي صحة البروستاتا ويدعم كثافة وقوة السائل المنوي."
                  : "Cofacteur enzymatique clé de la synthèse endogène de testostérone et garant de la vitalité prostatique et séminale."}
              </p>
            </div>

            {/* 4. Vitamin B Complex */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-bronze-500/5 to-amber-500/15 p-5.5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/30 px-2.5 py-1 text-xs font-black text-amber-300">💊</span>
                <span className="text-xs text-amber-400 font-bold">B1, B2, B6</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "مركب فيتامينات B1, B2, B6" : "Complexe Vitamines B1, B2, B6"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                {isArabic
                  ? "تساعد على استقلاب البروتينات والأحماض الأمينية في العضلات، وتحمي الجهاز العصبي من الإنهاك، وتضمن امتصاصاً مثالياً للجينسينغ والزنك."
                  : "Indispensables au métabolisme protéique musculaire et à l'équilibre du système nerveux central face à la fatigue."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TIMELINE */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "تدرج ملموس في الفحولة" : "Chronologie de montée en puissance"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "ماذا تتوقع أسبوعاً بعد أسبوع مع Testo Drive؟"
                : "Les étapes clés de votre transformation"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "نتائج تراكمية وتوازن هرموني متصاعد يبدأ من الأيام الأولى:"
                : "Des effets progressifs et durables dès les premières capsules :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                1
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 1: صفاء وهدوء عصبي" : "Semaine 1 : Calme & Clarté"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "انخفاض التوتر والإجهاد العصبي، خفة في الجسم، وبداية استعادة النشاط الصباحي."
                  : "Baisse nette du stress, réveil facilité et sensation de corps disponible."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                2
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 2 - 3: تحفيز التستوستيرون" : "Semaine 2-3 : Regain hormonal"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "ارتفاع ملحوظ في هرمون التستوستيرون، عودة الرغبة الفحولية القوية، ونشاط عضلي متزايد."
                  : "Montée de la testostérone libre, libido réveillée et endurance accrue."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                3
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 4 - 6: قوة عضلية وثقة كاملة" : "Semaine 4-6 : Puissance musculaire"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "بنية مشدودة، تراجع دهون البطن، قدرة تحمل مضاعفة، وأداء حميمي متميز بدون تعب."
                  : "Muscles tonifiés, résistance à l'effort physique et assurance totale."}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-500/15 to-bronze-500/10 p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-graphite-950 font-black text-lg">
                ✓
              </div>
              <h3 className="mt-4 text-base font-black text-amber-300">
                {isArabic ? "كورس شهرين إلى 3: استقرار هرموني دائم" : "Cure 2-3 mois : Équilibre durable"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                {isArabic
                  ? "تثبيت مستويات التستوستيرون ومناعة قوية وفحولة ونشاط لا ينقطع طوال العام."
                  : "Stabilisation hormonale définitive et protection continue contre la fatigue."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PACK RECOMMENDATION: WHY 90% CHOOSE 2 OR 3 BOXES */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "باقات الكورس الأكثر توفيراً" : "Nos formules recommandées"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "علاش 90% من زبنائنا في المغرب كيختارو باك علبتين أو 3 علب؟"
                : "Pourquoi 90% des hommes choisissent la cure de 2 ou 3 boîtes ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "لأن ضبط إفراز التستوستيرون الطبيعي وتخفيض الكورتيزول يحتاج إلى كورس متواصل لـ 60 أو 90 يوماً:"
                : "La régulation hormonale profonde nécessite une prise continue de 60 à 90 jours :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center shadow-lg flex flex-col justify-between">
              <div>
                <span className="rounded bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
                  {isArabic ? "تجربة أولية" : "Cure Découverte"}
                </span>
                <h3 className="text-xl font-black text-white mt-3">
                  {isArabic ? "علبة واحدة (30 كبسولة)" : "1 boîte (30 capsules)"}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {isArabic ? "تكفي لمدة شهر (كبسولة يومياً)" : "Pour 1 mois de traitement"}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-black text-white">249 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70">
                  {isArabic
                    ? "مناسبة لمن يريد تجربة فعالية الجينسينغ الأحمر الكوري والروديولا لأول مرة."
                    : "Idéal pour tester les premiers bienfaits."}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#cod-form"
                  className="w-full inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  {isArabic ? "طلب علبة واحدة" : "Choisir 1 boîte"}
                </a>
              </div>
            </div>

            {/* Tier 2: POPULAR */}
            <div className="relative rounded-2xl border-2 border-amber-400 bg-gradient-to-b from-amber-500/15 via-white/[0.04] to-amber-500/10 p-6 text-center shadow-2xl flex flex-col justify-between ring-2 ring-amber-400/30">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-bronze-500 px-4 py-1 text-[11px] font-black uppercase text-graphite-950 shadow-md">
                {isArabic ? "⭐ الأكثر طلباً - كورس موصى به" : "⭐ Cure Recommandée (2 mois)"}
              </div>
              <div>
                <span className="rounded bg-amber-500/20 px-3 py-1 text-xs font-black text-amber-300">
                  {isArabic ? "وفر 100 درهم + توصيل مجاني" : "Économisez 100 DH + Port Gratuit"}
                </span>
                <h3 className="text-2xl font-black text-white mt-3">
                  {isArabic ? "علبتان (60 كبسولة)" : "2 boîtes (60 capsules)"}
                </h3>
                <p className="text-xs text-amber-300/80 font-bold mt-1">
                  {isArabic ? "كورس شهرين لتحفيز التستوستيرون والقوة العضلية" : "Cure complète de 2 mois"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-amber-400">399 DH</span>
                  <span className="text-sm text-white/40 line-through">498 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/80 leading-relaxed">
                  {isArabic
                    ? "الخيار الأفضل للرجال الذين يريدون القضاء النهائي على التوتر، رفع التستوستيرون، واسترجاع الفحولة مع توفير 100 درهم وتوصيل مجاني."
                    : "Le choix plébiscité pour stabiliser le taux de testostérone et maximiser la vitalité."}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#cod-form"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-bronze-500 py-3.5 text-sm font-black text-graphite-950 shadow-lg hover:brightness-110 transition-all"
                >
                  {isArabic ? "اطلب باك علبتين الآن (توصيل فابور)" : "Commander 2 boîtes (Port offert)"}
                </a>
              </div>
            </div>

            {/* Tier 3: BEST VALUE */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center shadow-lg flex flex-col justify-between">
              <div>
                <span className="rounded bg-emerald-500/20 px-3 py-1 text-xs font-black text-emerald-300">
                  {isArabic ? "🏆 أفضل توفير (وفر 200 درهم)" : "🏆 Meilleure Offre (-200 DH)"}
                </span>
                <h3 className="text-xl font-black text-white mt-3">
                  {isArabic ? "3 علب (90 كبسولة)" : "3 boîtes (90 capsules)"}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {isArabic ? "كورس كامل لـ 3 أشهر لحيوية دائمة طوال العام" : "Cure 3 mois haute performance"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-white">549 DH</span>
                  <span className="text-sm text-white/40 line-through">747 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70 leading-relaxed">
                  {isArabic
                    ? "أعلى مستوى من الفحولة والمناعة واللياقة البدنية والذهنية بأفضل سعر مع توصيل مجاني لباب منزلك."
                    : "Performance physique et mentale maximale à prix imbattable avec livraison gratuite."}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#cod-form"
                  className="w-full inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  {isArabic ? "اطلب باك 3 علب (أفضل توفير)" : "Commander 3 boîtes"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. THE 3 PILLARS: CONFIRMATION, DELIVERY & PRIVACY GUARANTEES */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-300">
              {isArabic ? "ضمانات ROVANX الرسمية للزبون" : "Nos engagements de confiance"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيفاش كدوز طلبية Testo Drive ديالك بأمان وسرية تامة؟"
                : "Votre commande en toute sérénité et discrétion"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "3 خطوات بسيطة ومريحة كتضمن ليك سرية معلوماتك، جودة المنتج، والدفع بعد المعاينة فقط:"
                : "Un processus transparent du clic jusqu'à la remise en main propre :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Step 1: Confirmation Call Reassurance */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 font-black text-xl">
                <PhoneCall className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-black text-white">
                {isArabic ? "1. مكالمة تأكيد سريعة وسرية 100%" : "1. Appel discret de confirmation"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "بعد ملء الاستمارة، كيتصل بيك مستشارنا فـ 15 إلى 30 دقيقة باحترام ولباقة وسرية تامة. كيتأكد من العنوان وتوقيت التسليم لي كيناسبك ويجاوبك على أي استفسار قبل إرسال الطرد."
                  : "Notre conseiller vous appelle en toute discrétion sous 15-30 min pour valider votre adresse et le créneau idéal de livraison."}
              </p>
            </div>

            {/* Step 2: 100% Discreet Packaging */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 font-black text-xl">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-black text-white">
                {isArabic ? "2. كرتون سري ومحكم بدون أي اسم" : "2. Colis 100% anonyme scellé"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "الطرد كيوصلك مغلف فكرتونة بنية محايدة مغلقة بإحكام. مكاين حتى شي اسم للمنتج ولا كتابة من برا. الموزع نفسو مكيعرفش شنو كاين لداخل، باش تسلم أمانتك براحة قدام العائلة أو فالخدمة."
                  : "Carton totalement neutre sans mention du nom du produit pour préserver votre intimité devant vos proches ou au travail."}
              </p>
            </div>

            {/* Step 3: Zero Risk Inspection */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 font-black text-xl">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-black text-white">
                {isArabic ? "3. حل وتأكد من طردك عاد خلص" : "3. Vérification avant paiement"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "ماكتخلص حتى سنتيم مسبقاً! ملي كيوصلك الموزع حتى للباب، عندك الحق تفتح الكرتون وتتأكد من علبة Testo Drive الأصلية وسيل الأمان، ومن بعد كتخلص نقداً للموزع وأنت مرتاح 100%."
                  : "Aucun paiement en ligne. Vous avez le droit d'ouvrir le colis et de vérifier le produit authentique avant de régler le livreur en espèces."}
              </p>
            </div>
          </div>

          {/* Full Guarantee Banner */}
          <div className="mt-8 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/60 via-bronze-950/40 to-amber-950/60 p-6 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-3xl">
                🛡️
              </div>
              <div>
                <h4 className="text-lg font-black text-white">
                  {isArabic ? "ميثاق الجودة والأصالة من ROVANX المغرب" : "Charte de qualité ROVANX Maroc"}
                </h4>
                <p className="mt-1 text-sm text-white/75 leading-relaxed">
                  {isArabic
                    ? "منتج أصلي 100% مستخلص من نباتات معتقة عالية التركيز ومطابق للمواصفات الصحية العالمية. توصيل سريع وموثوق في 24 إلى 48 ساعة بجميع مدن المغرب مع متابعة مستمرة لنتائجك."
                    : "Produits originaux certifiés avec scellé de sécurité. Livraison rapide en 24-48h partout au Maroc avec suivi personnalisé."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. REAL MOROCCAN VERIFIED REVIEWS */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "تجارب حقيقية من مدن المغرب" : "Témoignages vérifiés au Maroc"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "شنو كيقولو الرجال لي جربو Testo Drive؟"
                : "Ce que disent les hommes après Testo Drive"}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Review 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {"★".repeat(5)}
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                  {isArabic ? "زبون موثق ✓" : "Achat vérifié"}
                </span>
              </div>
              <h3 className="text-base font-black text-white mt-3">
                {isArabic ? "نشاط وقوة بدنية كتحس بيها من الصباح" : "Force physique et focus au top"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "الجينسينغ الأحمر الكوري عندو مفعول قوي على التركيز والمناعة والنشاط البدني. خديتو باش نعاون راسي ففترة ضغط الخدمة والرياضة وعطاني نتيجة مبهرة. وليت كنتريني ونخدم بنشاط كبير ومبقيتش كنعيا دغيا."
                  : "Le ginseng rouge 6 ans fait une vraie différence sur le tonus et la résistance physique au quotidien."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">عادل ر. — فاس</span>
                <span>باك علبتين</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {"★".repeat(5)}
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                  {isArabic ? "زبون موثق ✓" : "Achat vérifié"}
                </span>
              </div>
              <h3 className="text-base font-black text-white mt-3">
                {isArabic ? "تراجع الكرش ورغبة متوهجة مع الزوجة" : "Regain de libido et tonus musculaire"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "عندي 44 عام وكنت كنحس بهبوط فـ التستوستيرون. طلبت باك 3 علب بـ 549 درهم. من بعد شهر نقصت الكرش وتحسنت العضلات بزاف، والرغبة والحرارة رجعات كيف كانت فالعشرينات. التوصيل فقنيطرة كان فسيمانة وسري 100%."
                  : "À 44 ans, j'ai retrouvé la fougue et la masse musculaire d'antan. Excellent produit naturel."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">كمال ف. — القنيطرة</span>
                <span>باك 3 علب</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {"★".repeat(5)}
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                  {isArabic ? "زبون موثق ✓" : "Achat vérifié"}
                </span>
              </div>
              <h3 className="text-base font-black text-white mt-3">
                {isArabic ? "هدوء عصبي ومعاينة الطرد قبل الأداء" : "Anti-stress puissant et discrétion"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "عشبة الروديولا لي فيه كتهدن الأعصاب بواحد الطريقة عجيبة. التوتر نقص بزاف ومبقيتش كنعصب فـ الخدمة. فتحت الطرد وتأكدت من العلبة قدام الموزع عاد خلصتو. تعامل احترافي."
                  : "La Rhodiola diminue réellement le stress sans endormir. Vérification devant le livreur sans aucun problème."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">سفيان ب. — الدار البيضاء</span>
                <span>علبتان</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "إجابات مباشرة وشفافة" : "Foire aux questions"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic ? "الأسئلة الأكثر طرحاً حول Testo Drive" : "Questions fréquentes sur Testo Drive"}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش فيه هرمونات صناعية أو منشطات محظورة؟" : "Contient-il des hormones synthétiques ou des stéroïdes ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "لا إطلاقاً! Testo Drive مكمل غذائي طبيعي 100% نباتي ولا يحتوي على أي هرمونات كيميائية أو مواد محظورة. هو يعمل على تحفيز غدد جسمك لإنتاج التستوستيرون الذاتي الطبيعي، وتخفيض هرمون الكورتيزول الذي يهدمه، مما يجعله آمناً تماماً وبدون أي أضرار على الكبد أو الكلى."
                  : "Non, absolument aucune hormone de synthèse. Il stimule votre propre production naturelle de testostérone libre en toute sécurité."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش كيصلح للرجال بعد سن 35 و 40 سنة وللرياضيين؟" : "Est-il recommandé après 35-40 ans et pour les sportifs ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم، هو الخيار المثالي للرجال فوق سن 35 حيث يبدأ التستوستيرون بالانخفاض الطبيعي، وللرياضيين الذين يحتاجون قوة عضلية، تعافياً سريعاً، وتحملاً مضاعفاً في التمارين."
                  : "Parfaitement adapté aux hommes dès 35 ans pour contrer la baisse naturelle de testostérone et aux sportifs pour le tonus musculaire."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "كيفاش كنستعمل المنتج والجرعة الموصى بها؟" : "Comment prendre Testo Drive ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "تناول كبسولة واحدة يومياً في الصباح بعد وجبة الإفطار مع كأس كبير من الماء. وفي فترات التمارين الشاقة أو الإجهاد العالي يمكن تناول كبسولتين. يُنصح بالمواظبة على كورس شهرين أو 3 أشهر لثبات النتائج."
                  : "Prendre 1 capsule par jour le matin avec un verre d'eau. 2 capsules en période d'entraînement intense."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش التوصيل سري؟ واش نقدر نفحص الطرد قبل ما نخلص؟" : "La livraison est-elle discrète avec vérification possible ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم 100%! الطرد كيوصلك مغلف فكرتونة بنية محايدة تماماً بدون أي اسم للمنتج أو إشارة لمحتواه. الموزع لا يعلم محتواه إطلاقاً، وعندك الحق تفتح الكرتون وتتأكد من العلبة الأصلية وسيل الأمان قبل دفع أي درهم للموزع."
                  : "Oui, discrétion absolue à 100%. Emballage neutre sans mention. Vous vérifiez le produit avant de régler en espèces."}
              </p>
            </div>
          </div>

          {/* Quick CTA back to order form */}
          <div className="mt-12 text-center">
            <a
              href="#cod-form"
              className="btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-bronze-500 px-8 py-4 text-base font-black uppercase tracking-wider text-graphite-950 shadow-2xl hover:scale-105 transition-transform"
            >
              <span>{isArabic ? "اطلب Testo Drive الآن (الدفع عند الاستلام)" : "Commander Testo Drive maintenant"}</span>
              <ArrowDown size={18} />
            </a>
            <p className="mt-2.5 text-xs text-white/60">
              {isArabic ? "توصيل سريع مجاني للباك الثنائي والثلاثي | الدفع نقداً بعد المعاينة | سرية تامة 100%" : "Livraison gratuite sur les packs 2 et 3 boîtes | Paiement à la réception"}
            </p>
          </div>
        </div>
      </section>

      {/* 11. FLOATING MOBILE ORDER BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-30 block border-t border-white/10 bg-[#0e1015]/95 p-3 backdrop-blur-lg sm:hidden shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black text-white">Testo Drive (30 caps)</p>
            <p className="text-[11px] text-amber-400 font-bold">{isArabic ? "الدفع بعد المعاينة" : "Paiement à la livraison"}</p>
          </div>
          <a
            href="#cod-form"
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-bronze-500 px-4 py-2 text-xs font-black text-graphite-950 shadow-md"
          >
            <span>{isArabic ? "اطلب الآن" : "Commander"}</span>
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
