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
  HeartPulse,
  Timer,
  Maximize2,
  Smile
} from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";

export function VitalityUltraExperience() {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  // Interactive Intimate Health & Performance Assessment State
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([0, 1]);

  const symptomsList = [
    {
      id: 0,
      icon: "⚠️",
      titleAr: "تراجع الصلابة وارتخاء سريع أثناء العلاقة قبل إشباع رغبة الزوجة",
      titleFr: "Perte d'érection rapide et manque de fermeté au moment intime",
      descAr: "انتصاب كيبدا ضعيف أو كيرتخي فجأة وسط اللقاء، وكايخليك فإحراج ونقص فالثقة.",
      descFr: "Érection instable retombant avant que votre partenaire ne soit comblée."
    },
    {
      id: 1,
      icon: "📏",
      titleAr: "صغر الحجم والسمك عند الانتصاب وعدم إحساس الزوجة بالامتلاء الكافي والضخامة",
      titleFr: "Manque de volume, de circonférence et de plénitude ressenti par la partenaire",
      descAr: "الأنسجة مكتاخدش حجمها الأقصى، والزوجة مكتوصلش للإحساس بالامتلاء والنشوة المطلوبة.",
      descFr: "Corps caverneux sous-irrigués ne permettant pas d'atteindre le calibre maximal."
    },
    {
      id: 2,
      icon: "⏱️",
      titleAr: "سرعة القذف وعدم القدرة على التحكم لإطالة مدة المداعبة والإيلاج",
      titleFr: "Éjaculation précoce et incapacité à prolonger l'acte",
      descAr: "القذف كيجي فـ دقائق معدودة وبلا تحكم، وما كيعطيش الوقت الكافي لإسعاد شريكة حياتك.",
      descFr: "Fin d'acte trop rapide provoquant frustration et déception dans le couple."
    },
    {
      id: 3,
      icon: "🥱",
      titleAr: "صعوبة تكرار العلاقة في نفس الليلة والإحساس بالفشل والإرهاق السريع",
      titleFr: "Récupération difficile entre les rapports et fatigue immédiate",
      descAr: "مكتقدرش تدير جولة ثانية فنفس الليلة، وكتكون محتاج وقت طويل باش ترجع لك الرغبة.",
      descFr: "Temps de latence trop long entre deux érections et épuisement physique."
    },
    {
      id: 4,
      icon: "❄️",
      titleAr: "برود حميمي وخوف أو قلق نفسي يفسد المتعة ويخلق جفاء بين الزوجين",
      titleFr: "Anxiété de performance, perte de désir et distance émotionnelle dans le couple",
      descAr: "الضغط والتوتر كيخليك تخاف من اللقاءات الحميمية وتتجنبها خوفاً من الإحباط.",
      descFr: "Peur de décevoir créant un blocage psychologique et un éloignement intime."
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
                <Maximize2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "صلابة وزيادة الحجم" : "Fermeté & Volume max"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "ضخامة تحس بها الزوجة" : "Érection d'acier"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Timer className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تحكم وتأخير فائق" : "Endurance & Contrôle"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "استمرارية تدوم 45 دقيقة" : "Maîtrise totale du plaisir"}</p>
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
              <p className="text-3xl font-black text-amber-400 sm:text-4xl">+3,800</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "رجل بالمغرب استعادوا فحولهم وسعادتهم" : "Hommes comblés au Maroc"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-emerald-400 sm:text-4xl">98.4%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "نسبة زيادة الصلابة والحجم والتحكم" : "Satisfaction fermeté & endurance"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-bronze-300 sm:text-4xl">100%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "طبيعي بدون صداع ولا خفقان" : "Sans effets secondaires"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-white sm:text-4xl">+45 min</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "استمرارية وتحكم في العلاقة" : "Durée maîtrisée par rapport"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE INTIMATE HEALTH ASSESSMENT QUIZ */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "اختبار كشف الأداء والفحولة في 30 ثانية" : "Auto-évaluation de performance intime en 30 secondes"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "واش كتعاني من واحد أو أكثر من هاد المشاكل الحميمية؟"
                : "Ressentez-vous l'un de ces freins dans votre vie de couple ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "حدد المشاكل التي تواجهها لاكتشاف كيف تعيد تركيبة Vitality Ultra شحن صلابتك وضخامة عضوك:"
                : "Cochez vos symptômes pour évaluer votre potentiel d'amélioration érectile :"}
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
                🔥
              </div>
              <div className="text-center sm:text-start flex-1">
                <h4 className="text-lg font-black text-amber-300">
                  {isArabic
                    ? selectedSymptoms.length > 0
                      ? `تم تحديد ${selectedSymptoms.length} عوامل تؤثر على صلابتك وحجمك ورضا الزوجة`
                      : "اختر ما تعاني منه أعلاه لمعرفة الحل الفوري"
                    : `${selectedSymptoms.length} facteur(s) d'inconfort intime identifié(s)`}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  {isArabic
                    ? "تراجع الصلابة وصغر الحجم وسرعة القذف ناتجة عن ضيق الغرف الإسفنجية للأنسجة الكهفية (Corps Caverneux) وضعف تدفق أكسيد النيتريك المسؤول عن احتباس الدم. Vitality Ultra يجمع أقوى المستخلصات العالمية (الجينسينغ الكوري، التونغكات علي، الماكا، L-Arginine والزنك) لتوسيع تلك الأنسجة وزيادة قدرتها الاستيعابية بنسبة 40%، مما يمنحك انتصاباً صخرياً وضخامة حقيقية في السمك والطول تحس بها الزوجة فوراً مع تأخير طبيعي وتحكم كامل!"
                    : "Une érection molle et un manque de volume résultent d'une mauvaise vasodilatation des corps caverneux. Vitality Ultra stimule l'oxyde nitrique et la testostérone pour dilater les chambres érectiles, augmentant la circonférence, la longueur et l'endurance sans aucun risque cardiaque ni migraine."}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <a
                    href="#cod-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-bronze-500 px-6 py-3 text-sm font-black text-graphite-950 shadow-lg hover:brightness-110 transition-all"
                  >
                    <span>{isArabic ? "اطلب Vitality Ultra واسترجع فحولتك الآن" : "Commander Vitality Ultra maintenant"}</span>
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

      {/* 4. REALISTIC MOROCCAN BEFORE VS AFTER */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "الفرق الحقيقي في علاقتك الزوجية" : "La transformation intime"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيف تتغير علاقتك وسعادتك مع الزوجة قبل وبعد Vitality Ultra؟"
                : "Votre vie de couple avant vs après Vitality Ultra"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "مقارنة حقيقية من صميم الواقع المغربي توضح الفارق الهائل في الفحولة والصلابة ورضا الزوجة:"
                : "Découvrez le retour de flamme et l'intensité retrouvée au sein du couple :"}
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
                    {isArabic ? "قبل Vitality Ultra: الإحراج والبرود الزوجي" : "Avant : Frustration et doutes"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "ارتخاء سريع، صغر الحجم، ونقص الثقة" : "Érection molle, fin précoce et gêne"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "انتصاب ضعيف أو ارتخاء مفاجئ وسط العلاقة كيخليك في إحراج حاد ونقص كبير في ثقتك ورجولتك."
                      : "Érection fragile retombant en plein rapport, laissant un sentiment profond de honte et d'échec."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "صغر السمك وعدم إحساس الزوجة بالامتلاء الكافي والضخامة، مما يحرمها من الوصول للنشوة الحقيقية."
                      : "Manque de volume et de calibre ressenti par la partenaire, empêchant d'atteindre l'orgasme."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "سرعة القذف بعد دقيقة أو دقيقتين فقط بدون قدرة على التحكم أو تمديد وقت اللقاء الحميمي."
                      : "Éjaculation incontrôlée après quelques secondes, ruinant le plaisir et l'harmonie intime."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "تجنب اللقاءات الحميمية والتهرب منها خوفاً من الفشل، مما يخلق بروداً وجفاءً وتباعداً بين الزوجين."
                      : "Peur d'échouer poussant à espacer les rapports, créant froideur et éloignement dans le couple."}
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
                    {isArabic ? "مع Vitality Ultra: الفحولة والسعادة المطلقة" : "Avec Vitality Ultra : Puissance et plénitude"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "صلابة حديدية، ضخامة تحس بها الزوجة، وتحكم كامل" : "Érection d'acier, volume max et extase partagée"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "انتصاب صخري وحديدي يدوم طوال العلاقة بدون أي ارتخاء، مع استرجاع هيبتك وفحولتك الكاملة."
                      : "Érection d'acier d'une fermeté absolue du début à la fin, virilité et assurance retrouvées."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "زيادة ملحوظة في السمك والطول وضخامة ملموسة تحس بها الزوجة ديالك فوراً فكل إيلاج وتوصلها لأعلى درجات النشوة."
                      : "Gain net en circonférence et longueur créant une sensation de plénitude intense chez votre conjointe."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "تحكم خارق في وقت القذف وتمديد العلاقة لـ 30 إلى 45 دقيقة بكل متعة وراحة وبدون أي إجهاد."
                      : "Maîtrise totale du réflexe éjaculatoire, rapports prolongés de 30 à 45 minutes à volonté."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "رغبة متقدة وقدرة على تكرار العلاقة مرتين أو ثلاث في نفس الليلة مع تجديد شعلة الحب والشغف الزوجي."
                      : "Récupération ultra-rapide pour enchaîner les rapports et raviver la flamme de la passion conjugale."}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SCIENTIFIC MECHANISM OF ACTION: HOW CORPUS CAVERNOSUM EXPANSION WORKS */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "الميكانيزم العلمي لتمدد الأنسجة" : "Mécanisme scientifique d'action"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيفاش كتخدم تركيبة Vitality Ultra على زيادة الحجم والسمك والصلابة؟"
                : "Comment agit Vitality Ultra sur la taille, le volume et la fermeté ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "حجم القضيب وصلابته كيعتمدو 100% على القدرة الاستيعابية للغرف الإسفنجية للأنسجة الكهفية (Corps Caverneux) وتدفق الدم إليها:"
                : "Une triple action physiologique qui décuple la capacité de rétention sanguine des tissus érectiles :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 font-black text-xl">
                1
              </div>
              <h3 className="mt-4 text-lg font-black text-white">
                {isArabic ? "1. توسيع الأنسجة الكهفية (Expansion)" : "1. Dilatation des corps caverneux"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "مستخلصات الجينسينغ الأحمر و L-Arginine كتحفز إنتاج أكسيد النيتريك (NO)، مما كيرخي الأوعية الدموية ويوسع الغرف الإسفنجية لتستوعب حجماً أكبر من الدم بنسبة تصل لـ 40%."
                  : "Stimulation de l'oxyde nitrique qui assouplit les parois vasculaires et dilate les chambres érectiles pour accueillir un volume sanguin record."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 font-black text-xl">
                2
              </div>
              <h3 className="mt-4 text-lg font-black text-white">
                {isArabic ? "2. ضخامة الامتلاء والسمك (Volume Max)" : "2. Rétention sanguine & Calibre"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "التونغكات علي وحبوب لقاح النخيل كتحبس الدم بقوة داخل الأنسجة وتمنع تسربه السريع، مما كيعطي سمكاً ملحوظاً، تضخماً فالقطر، وصلابة حديدية كتحس بيها الزوجة فوراً."
                  : "Maintien d'une pression intracaverneuse élevée créant un gonflement maximal en largeur et en longueur pour une sensation de plénitude totale."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 font-black text-xl">
                3
              </div>
              <h3 className="mt-4 text-lg font-black text-white">
                {isArabic ? "3. تحكم عصبي كامل وتأخير القذف" : "3. Contrôle & Prolongation"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "الماكا والزنك والمغنيسيوم كيقويو عضلات قاع الحوض ويهدئو حساسية الأعصاب المفرطة، مما كيعطيك القدرة على تأخير القذف والاستمتاع لأكثر من 30-45 دقيقة بدون إجهاد."
                  : "Renforcement des muscles pelviens et régulation de l'influx nerveux pour retarder l'éjaculation et maîtriser le tempo de chaque étreinte."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE 6 POWERFUL CORE INGREDIENTS */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "تركيبة الفحولة الطبيعية المركزة" : "Formule exclusive haute puissance"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "6 عناصر نشطة نادرة ومدروسة علمياً لصلابة وضخامة قصوى"
                : "Les 6 piliers actifs de Vitality Ultra"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "مستخلصات نباتية أصلية بدون أي مواد كيميائية، منشطات صناعية أو تأثيرات جانبية:"
                : "Une synergie d'actifs titrés d'une pureté exceptionnelle pour des résultats tangibles :"}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1. Korean Red Ginseng */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">01</span>
                <span className="text-xs text-amber-400 font-bold">⚡ Panax Ginseng</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الجينسينغ الأحمر الكوري المعتق" : "Ginseng Rouge de Corée pur"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "المحفز الأقوى لأكسيد النيتريك وتوسيع الأوعية الدموية في الأنسجة الكهفية. يضمن تدفقاً دموياً غزيراً يعطي انتصاباً صخرياً، حجماً أضخم، وسمكاً كبيراً لا يرتخي."
                  : "Boosteur puissant d'oxyde nitrique, assure une vasodilatation maximale des corps caverneux pour une verge gonflée, ferme et endurante."}
              </p>
            </div>

            {/* 2. Tongkat Ali */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">02</span>
                <span className="text-xs text-amber-400 font-bold">🔥 Tongkat Ali</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "التونغكات علي الأصلي (Eurycoma)" : "Tongkat Ali de Malaisie"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "عشبة الفحولة الماليزية الشهيرة التي ترفع معدلات التستوستيرون الحر بنسبة تصل إلى 37%. تمنحك قوة ذكورية هائلة، رغبة جارفة، وصلابة حديدية في كل الأوقات."
                  : "Plante ancestrale augmentant la testostérone libre, décuplant la virilité naturelle, la libido et la rigidité érectile."}
              </p>
            </div>

            {/* 3. Peruvian Maca */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">03</span>
                <span className="text-xs text-amber-400 font-bold">🌿 Maca Péruvienne</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الماكا البيروفية المركزة" : "Maca noire des Andes"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "نبتة جبال الأنديز التي تمنحك نفساً طويلاً وقدرة تحمل بدنية عالية، وتساعدك على التحكم وتأخير القذف لإسعاد الزوجة ديالك بدون أدنى تعب أو انقطاع."
                  : "Adaptogène de haute altitude augmentant l'endurance pelvienne et la maîtrise éjaculatoire pour des rapports d'une durée exceptionnelle."}
              </p>
            </div>

            {/* 4. L-Arginine & Taurine */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">04</span>
                <span className="text-xs text-amber-400 font-bold">⚡ L-Arginine & Taurine</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الـ L-Arginine والتورين المركز" : "L-Arginine & Taurine active"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "أحماض أمينية مسؤولة عن إمداد الشرايين التناسلية بالمرونة والقدرة على ضخ الدم الكثيف لاحتجاز أكبر حجم في أنسجة العضو الذكري وإعطائه الامتلاء والضخامة الكاملة."
                  : "Précurseurs directs d'oxyde nitrique, augmentant l'afflux sanguin et la pression dans la verge pour un épaississement visible."}
              </p>
            </div>

            {/* 5. Zinc, Palm Pollen & Royal Jelly */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">05</span>
                <span className="text-xs text-amber-400 font-bold">🍯 Pollen & Gelée Royale</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "لقاح النخيل، غذاء الملكات وغلوكونات الزنك" : "Pollen de Palmier, Gelée Royale & Zinc"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "مزيج ملكي يعزز الخصوبة، جودة وكثافة السائل المنوي، وسرعة استرجاع الطاقة لممارسة العلاقة أكثر من مرة في نفس الليلة بكل قوة ونشاط."
                  : "Complexe fertilisant et tonifiant permettant une recharge séminale éclair et la capacité d'enchaîner plusieurs rapports."}
              </p>
            </div>

            {/* 6. Vitamins B3, B10 & Marine Magnesium */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-bronze-500/5 to-amber-500/15 p-5.5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/30 px-2.5 py-1 text-xs font-black text-amber-300">🛡️</span>
                <span className="text-xs text-amber-400 font-bold">{isArabic ? "فيتامينات ومغنيسيوم" : "Vitamines B & Mg"}</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "فيتامينات B3 و B10 وسترات المغنيسيوم" : "Vitamines B3, B10 & Magnésium"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                {isArabic
                  ? "تدعم الإشارات العصبية الحميمية وتمنع الإجهاد العضلي لتضمن لك تحكماً كاملاً في لحظة الذروة ونشاطاً مستقراً دون أي هبوط."
                  : "Maintient l'influx nerveux optimal et protège contre la fatigue musculaire pelvienne pour une maîtrise souveraine."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESULTS TIMELINE */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "مراحل التحول الأسبوعية الملموسة" : "Chronologie de montée en puissance"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "ماذا تتوقع أنت وزوجتك خلال أسابيع كورس Vitality Ultra؟"
                : "Les étapes clés de votre transformation érectile"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "نتائج تراكمية وتمدد دائم في الأنسجة يبدأ من الأسبوع الأول ويتثبت مع إتمام الكورس:"
                : "Une progression spectaculaire menant à un épanouissement total du couple :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                1
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 1: يقظة ورغبة متقدة" : "Semaine 1 : Réveil & Désir"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "تدفق نشاط وحرارة دافئة في الجسم، انتصاب صباحي صلب، وارتفاع ملحوظ في الرغبة الحميمية."
                  : "Afflux d'énergie corporelle, érections matinales fermes et regain net de libido."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                2
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 2 - 3: صلابة حديدية وبداية زيادة السمك" : "Semaine 2-3 : Fermeté & Volume"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "صلابة صخرية مع زيادة ملموسة فالسمك والامتلاء كتحس بيها الزوجة ديالك فوراً مع تحكم أطول في القذف."
                  : "Rigidité d'acier, premier épaississement visible ressenti par la partenaire et durée prolongée."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                3
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 4 - 6: ضخامة الحجم وتحكم مطلق" : "Semaine 4-6 : Plénitude & Contrôle"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "ضخامة واضحة فالطول والسمك مع قدرة كاملة على قيادة العلاقة لأكثر من 30-45 دقيقة بدون تعب."
                  : "Gain franc en circonférence et longueur, rapports maîtrisés de plus de 45 minutes sans fatigue."}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-500/15 to-bronze-500/10 p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-graphite-950 font-black text-lg">
                ✓
              </div>
              <h3 className="mt-4 text-base font-black text-amber-300">
                {isArabic ? "كورس شهرين إلى 3: ثبات دائم في الحجم والفحولة" : "Cure 2-3 mois : Effet permanent"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                {isArabic
                  ? "تثبيت تمدد الأنسجة الكهفية وفحولة دائمة وسعادة زوجية لا تنقطع طوال العام."
                  : "Stabilisation définitive du volume tissulaire et virilité inébranlable au quotidien."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PACK RECOMMENDATION: WHY 92% CHOOSE 2 OR 3 BOXES */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "باقات الكورس العلاجي الأكثر توفيراً" : "Nos formules de cure recommandées"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "علاش 92% من زبنائنا في المغرب كيختارو باك علبتين أو 3 علب؟"
                : "Pourquoi 92% des hommes choisissent la cure de 2 ou 3 boîtes ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "لأن تمدد الأوعية الكهفية وزيادة الحجم الدائم يحتاج كورس من 60 إلى 90 يوماً لتثبيت النتائج وضمان عدم عودة الارتخاء:"
                : "La régénération tissulaire et la stabilisation du gain de volume exigent une cure continue de 60 à 90 jours :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center shadow-lg flex flex-col justify-between">
              <div>
                <span className="rounded bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
                  {isArabic ? "تجربة شهرية" : "Cure Découverte"}
                </span>
                <h3 className="text-xl font-black text-white mt-3">
                  {isArabic ? "علبة واحدة (60 كبسولة)" : "1 boîte (60 capsules)"}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {isArabic ? "تكفي لمدة شهر كامل (كبسولتان يومياً)" : "Pour 1 mois de traitement"}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-black text-white">299 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70">
                  {isArabic
                    ? "مناسبة لمن يريد تجربة المنتج وملاحظة الصلابة الأولى في العلاقة."
                    : "Idéal pour tester le regain initial de fermeté."}
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
                  {isArabic ? "علبتان (120 كبسولة)" : "2 boîtes (120 capsules)"}
                </h3>
                <p className="text-xs text-amber-300/80 font-bold mt-1">
                  {isArabic ? "كورس شهرين للصلابة وضخامة الحجم وإسعاد الزوجة" : "Cure complète de 2 mois"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-amber-400">499 DH</span>
                  <span className="text-sm text-white/40 line-through">598 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/80 leading-relaxed">
                  {isArabic
                    ? "الخيار الأفضل للرجال الذين يريدون زيادة ملحوظة فالسمك وصلابة حديدية واستمرارية تدوم مع توفير 100 درهم وتوصيل فابور."
                    : "Le choix plébiscité pour une érection d'acier, un gain net de calibre et combler pleinement sa partenaire."}
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
                  {isArabic ? "🏆 أفضل توفير (وفر 250 درهم)" : "🏆 Meilleure Offre (-250 DH)"}
                </span>
                <h3 className="text-xl font-black text-white mt-3">
                  {isArabic ? "3 علب (180 كبسولة)" : "3 boîtes (180 capsules)"}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {isArabic ? "كورس كامل لـ 3 أشهر لتثبيت الحجم الدائم" : "Cure complète 3 mois volume permanent"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-white">649 DH</span>
                  <span className="text-sm text-white/40 line-through">897 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70 leading-relaxed">
                  {isArabic
                    ? "ثبات دائم لأنسجة العضو الذكري وفحولة مستمرة طوال العام بأكبر تخفيض ممكن وتوصيل مجاني لباب منزلك."
                    : "Stabilisation maximale du gain tissulaire et puissance inépuisable au meilleur tarif avec livraison gratuite."}
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

          {/* COMBO PACK BANNER: Vitality Ultra + Control Flow */}
          <div className="mx-auto mt-10 max-w-5xl rounded-2xl border-2 border-dashed border-amber-500/50 bg-gradient-to-r from-amber-500/10 via-bronze-900/30 to-amber-500/10 p-6 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="rounded-full bg-amber-500 px-3 py-0.5 text-xs font-black text-black">
                  {isArabic ? "🔥 الحل المزدوج الأكثر طلباً" : "Pack Double Action"}
                </span>
                <span className="text-xs font-bold text-amber-300">
                  {isArabic ? "صلابة من الداخل + تأخير وتحكم من الخارج" : "Fermeté interne + Maîtrise externe"}
                </span>
              </div>
              <h3 className="mt-2 text-lg sm:text-xl font-black text-white">
                {isArabic
                  ? "باك القوة والتحكم: Vitality Ultra + زيت Control Flow"
                  : "Pack Puissance & Contrôle : Vitality Ultra + Huile Control Flow"}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 leading-relaxed">
                {isArabic
                  ? "يمكنك إضافة زيت Control Flow لتأخير القذف بـ 149 درهم فقط (عوض 249 درهم) بضغطة واحدة في نموذج الطلب أسفله!"
                  : "Ajoutez l'huile Control Flow à 149 DH seulement (au lieu de 249 DH) en cochant l'option dans le formulaire ci-dessous !"}
              </p>
            </div>
            <a
              href="#cod-form"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-black text-black shadow-lg hover:brightness-110 transition-all"
            >
              <span>{isArabic ? "اطلب الباك المزدوج أسفله" : "Commander le Pack ci-dessous"}</span>
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 9. THE 3 PILLARS: CONFIRMATION, DELIVERY & PRIVACY GUARANTEES */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-300">
              {isArabic ? "ضمانات ROVANX الرسمية للزبون" : "Nos engagements de confiance"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيفاش كدوز طلبية Vitality Ultra ديالك بأمان وسرية تامة؟"
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
                  ? "ماكتخلص حتى سنتيم مسبقاً! ملي كيوصلك الموزع حتى للباب، عندك الحق تفتح الكرتون وتتأكد من علبة Vitality Ultra الأصلية وسيل الأمان، ومن بعد كتخلص نقداً للموزع وأنت مرتاح 100%."
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
                  {isArabic ? "ميثاق الفحولة والجودة من ROVANX المغرب" : "Charte d'excellence ROVANX Maroc"}
                </h4>
                <p className="mt-1 text-sm text-white/75 leading-relaxed">
                  {isArabic
                    ? "جميع منتجاتنا طبيعية 100%، أصلية ومختومة بختم المصنع لضمان الفعالية التامة والأمان الصحي. توصيل سريع وموثوق في 24 إلى 48 ساعة بجميع مدن المغرب مع متابعة مستمرة لنتائجك وسعادتك الزوجية."
                    : "Formule originale certifiée avec scellé de sécurité. Livraison rapide en 24-48h partout au Maroc avec accompagnement personnalisé."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REAL MOROCCAN VERIFIED REVIEWS */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "تجارب حقيقية من مدن المغرب" : "Témoignages vérifiés au Maroc"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "شنو كيقولو الرجال لي جربو Vitality Ultra؟"
                : "Ce que disent les hommes après Vitality Ultra"}
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
                {isArabic ? "صلابة حديدية وزيادة واضحة فالسمك حسات بيها الزوجة" : "Fermeté incroyable et gain net de volume"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "كنت كنعاني من ارتخاء مفاجئ وسرعة القذف لي كانت مسببة ليا إحراج كبير مع الزوجة. طلبت باك علبتين بـ 499 درهم. من بعد 12 يوم لاحظت فرق خيالي، الانتصاب ولا صلب كالحجر، والسمك تضخم بشكل واضح حسات بيه المدام فوراً فكل لقاء. العلاقة ولات كدوم أكثر من نصف ساعة. منتج كيستحق كل درهم."
                  : "Résultats spectaculaires sur la fermeté et le volume. Ma partenaire a immédiatement ressenti la différence. Durée prolongée et satisfaction totale."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">يوسف ع. — الدار البيضاء</span>
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
                {isArabic ? "تحكم كامل وتأخير حقيقي بدون أي صداع رأس" : "Maîtrise totale sans aucun effet secondaire"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "جربت شحال من كينة كيميائية وكانت كدير ليا الحريق فالراس ودقات القلب مجهدة. Vitality Ultra طبيعي 100%، مكيسبب حتى شي أثر جانبي. القوة والتحكم زادو بزاف، وليت كنعاود العلاقة جوج مرات فنفس الليلة بكل راحة. والتغليف كان سري ومحكم فمراكش."
                  : "Aucun mal de tête ni palpitations contrairement aux comprimés chimiques. L'endurance est au rendez-vous et la récupération est ultra-rapide."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">عبد الرحيم م. — مراكش</span>
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
                {isArabic ? "استرجاع الثقة وسعادة زوجية لا توصف" : "Confiance retrouvée et harmonie parfaite"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "عندي 48 عام وكنت كنحس بلي الفحولة ديالي نقصات بزاف. هاد المكمل رجع ليا النشاط ديال العشرينات! كتحس براسك راجل حقيقي قادر تمتع شريكة حياتك وتخليها فرحانة وراضية. فحصت الطرد قبل ما نخلص الموزع، مصداقية عالية وخدمة زبناء فالمستوى."
                  : "À 48 ans, j'ai retrouvé la vigueur de mes 25 ans. Un vrai boost de confiance et de complicité avec ma femme. Vérification devant le livreur irréprochable."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">طارق ك. — طنجة</span>
                <span>علبتان</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "إجابات مباشرة وشفافة" : "Foire aux questions"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic ? "الأسئلة الأكثر طرحاً حول Vitality Ultra" : "Questions fréquentes sur Vitality Ultra"}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش بصح كيزيد في الحجم والسمك ديال العضو الذكري؟" : "Vitality Ultra favorise-t-il réellement le gain de volume et de circonférence ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم بالتأكيد! حجم القضيب أثناء الانتصاب محكوم بالقدرة الاستيعابية للأنسجة الكهفية (Corps Caverneux). مكونات Vitality Ultra توسع تلك الغرف الإسفنجية وتحفز تدفق أكسيد النيتريك لاحتجاز أكبر كمية من الدم، مما يمنح العضو تمدداً ملحوظاً في السمك والطول وضخامة حقيقية تحس بها الزوجة فوراً في كل علاقة."
                  : "Oui. En dilatant les chambres caverneuses et en maximisant l'afflux sanguin via l'oxyde nitrique, la verge gagne nettement en calibre et en fermeté."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش كيعالج مشكل سرعة القذف؟" : "Aide-t-il à retarder l'éjaculation ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم، بفضل تركيبة الماكا والزنك والمغنيسيوم التي تقوي عضلات قاع الحوض وتنظم النواقل العصبية الحميمية، يمنحك Vitality Ultra تحكماً كاملاً في توقيت القذف لتمديد وقت العلاقة لأكثر من 30 إلى 45 دقيقة بدون عياء."
                  : "Absolument. Il renforce le contrôle neuromusculaire pelvien pour espacer et différer l'éjaculation à votre rythme."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش فيه مواد كيميائية، منشطات، أو كيدير صداع الرأس؟" : "Y a-t-il des effets secondaires, maux de tête ou palpitations ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "لا إطلاقاً! Vitality Ultra مكمل غذائي طبيعي 100% مستخلص من نباتات نقية (الجينسينغ الأحمر، تونغكات علي، ماكا، حبوب لقاح النخيل، غذاء الملكات، زنك). خالٍ تماماً من أي مواد كيميائية منشطة، ولا يسبب أي صداع، زغللة في العين، أو تسارع في نبضات القلب."
                  : "Aucun effet secondaire. 100% naturel, sans additifs chimiques, sans maux de tête ni palpitations."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "كيفاش كنستعمل المنتج والجرعة الموصى بها؟" : "Comment prendre Vitality Ultra ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "تناول كبسولة إلى كبسولتين يومياً بعد الوجبة مع كأس كبير من الماء. وفي أيام اللقاء الحميمي، يمكنك تناول كبسولتين قبل العلاقة بساعة واحدة لضمان أقصى درجات الصلابة والتحكم. نوصي بكورس علبتين أو 3 علب لتثبيت النتائج وتمدد الأنسجة الدائم."
                  : "Prendre 1 à 2 capsules par jour après le repas avec un grand verre d'eau. 2 capsules 1h avant le rapport pour un effet maximal."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش التوصيل سري؟ واش نقدر نفحص الطرد قبل ما نخلص؟" : "La livraison est-elle discrète avec vérification possible ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم 100%! الطرد كيوصلك مغلف فكرتونة بنية محايدة تماماً بدون أي اسم للمنتج أو إشارة لمحتواه. الموزع لا يعلم محتواه إطلاقاً، وعندك الحق الكامل تفتح الكرتون وتتأكد من العلبة الأصلية وسيل الأمان قبل دفع أي درهم للموزع."
                  : "Discrétion absolue à 100%. Emballage carton neutre scellé sans mention. Vous vérifiez le produit avant de remettre l'argent au livreur."}
              </p>
            </div>
          </div>

          {/* Quick CTA back to order form */}
          <div className="mt-12 text-center">
            <a
              href="#cod-form"
              className="btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-bronze-500 px-8 py-4 text-base font-black uppercase tracking-wider text-graphite-950 shadow-2xl hover:scale-105 transition-transform"
            >
              <span>{isArabic ? "اطلب Vitality Ultra الآن (الدفع عند الاستلام)" : "Commander Vitality Ultra maintenant"}</span>
              <ArrowDown size={18} />
            </a>
            <p className="mt-2.5 text-xs text-white/60">
              {isArabic ? "توصيل سريع مجاني للباك الثنائي والثلاثي | الدفع نقداً بعد المعاينة | سرية تامة 100%" : "Livraison gratuite sur les packs 2 et 3 boîtes | Paiement à la réception"}
            </p>
          </div>
        </div>
      </section>

      {/* 12. FLOATING MOBILE ORDER BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-30 block border-t border-white/10 bg-[#0e1015]/95 p-3 backdrop-blur-lg sm:hidden shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black text-white">Vitality Ultra (60 caps)</p>
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
