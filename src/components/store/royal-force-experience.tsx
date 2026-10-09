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
  Crown,
  HeartPulse,
  BatteryCharging,
  Dumbbell
} from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";

export function RoyalForceExperience() {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  // Interactive Stamina & Performance Assessment State
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([0, 1]);

  const symptomsList = [
    {
      id: 0,
      icon: "⚠️",
      titleAr: "نقص في التحمل والقدرة البدنية خلال اللحظات المهمة وسرعة الشعور بالتعب",
      titleFr: "Baisse d'endurance physique lors des moments clés et fatigue rapide",
      descAr: "كتعيا دغيا وما كيبقاش عندك النفس الطويل باش تكمل العلاقة بنفس القوة والحماس.",
      descFr: "Souffle court et manque d'endurance pour prolonger les moments intimes."
    },
    {
      id: 1,
      icon: "📉",
      titleAr: "برود أو تراجع الرغبة الحميمية وضعف النشاط الذكوري والاندفاع التلقائي",
      titleFr: "Perte de désir spontané et baisse de vigueur masculine",
      descAr: "الرغبة باهتة ومكتحسش بداك الحماس الفحولي لي كان عندك فـ سن العشرين.",
      descFr: "Libido au ralenti et manque de fougue intime au quotidien."
    },
    {
      id: 2,
      icon: "⏱️",
      titleAr: "صعوبة المواصلة بنفس الصلابة طوال فترة العلاقة مع ارتخاء تدريجي",
      titleFr: "Difficulté à maintenir une fermeté constante jusqu'au bout",
      descAr: "الانتصاب مكيبقاش صلب حتى لنهاية اللقاء، مما كينقص من المتعة ديالك وديال الزوجة.",
      descFr: "Érection faiblissant avant d'atteindre le plaisir partagé."
    },
    {
      id: 3,
      icon: "🥱",
      titleAr: "بطء الاسترجاع بعد العلاقة وصعوبة تكرارها في نفس الليلة",
      titleFr: "Récupération laborieuse et incapacité d'enchaîner plusieurs rapports",
      descAr: "كترجع ليك الرغبة بصعوبة وكتكون محتاج أيام باش تسترجع طاقتك الفحولية.",
      descFr: "Temps de latence trop long et sensation d'épuisement post-rapport."
    },
    {
      id: 4,
      icon: "⚡",
      titleAr: "إجهاد بدني وعضلي مستمر يؤثر سلباً على ثقتك وفحولتك الزوجية",
      titleFr: "Stress physique et surmenage ruinant la confiance en soi",
      descAr: "ضغط الخدمة والتعب كينعكس على رجولتك وكيخليك تحس بنقص فـ الثقة.",
      descFr: "La fatigue du travail paralyse l'élan viril et crée des doutes."
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
                <Crown className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "قوة وتحمل ملكي" : "Puissance Royale"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "نفس طويل لا ينتهي" : "Endurance infinie"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "ماكا سوداء مركزة" : "Maca Noire Pure"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "أعلى تركيز وجودة" : "Extrait titré Andes"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تغليف سري 100%" : "Colis 100% anonyme"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "خصوصية تامة ومحكمة" : "Discrétion absolue"}</p>
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
              <p className="text-3xl font-black text-amber-400 sm:text-4xl">+3,150</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "رجل بالمغرب استعادوا طاقتهم الملكية" : "Hommes conquis au Maroc"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-emerald-400 sm:text-4xl">97.9%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "نسبة تحسن التحمل والصلابة" : "Endurance et fermeté accrues"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-bronze-300 sm:text-4xl">0%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "مواد كيميائية أو خفقان قلب" : "Sans risque ni palpitations"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-white sm:text-4xl">100%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "ماكا أصلية من جبال الأنديز" : "Maca noire pure certifiée"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE STAMINA & PERFORMANCE ASSESSMENT QUIZ */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "اختبار مستوى التحمل والقوة الفحولية في 30 ثانية" : "Auto-évaluation d'endurance virile en 30 secondes"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "واش كتعاني من واحد أو أكثر من هاد المؤشرات؟"
                : "Ressentez-vous une baisse d'endurance au moment clé ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "اختر ما تشعر به في حياتك الحميمية لاكتشاف كيف تعيد تركيبة Royal Force بناء طاقتك الملكية:"
                : "Cochez vos symptômes pour évaluer votre besoin en nutriments adaptogènes :"}
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
                👑
              </div>
              <div className="text-center sm:text-start flex-1">
                <h4 className="text-lg font-black text-amber-300">
                  {isArabic
                    ? selectedSymptoms.length > 0
                      ? `تم تشخيص ${selectedSymptoms.length} علامات لنقص مخزون القدرة والتحمل الفحولي`
                      : "اختر ما تشعر به أعلاه لمعرفة الحل الفوري"
                    : `${selectedSymptoms.length} signe(s) de fatigue d'endurance identifié(s)`}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  {isArabic
                    ? "الماكا السوداء البيروفية المركزة تُسمى في الطب التقليدي بـ 'ذهب الإنكا للمحاربين'. الإجهاد اليومي وسوء التغذية يستنزفان المعادن الحيوية التي تغذي الغدد التناسلية وعضلات الحوض، مما يسبب سرعة التعب وضعف التحمل. Royal Force يجمع بين الماكا السوداء المركزة، التريبولوس، الجينسينغ الأحمر والزنك ليمنحك نفساً طويلاً، صلابة حديدية، ورغبة متقدة لقيادة العلاقة بثقة كاملة وإسعاد شريكة حياتك دون أي عياء!"
                    : "La Maca noire péruvienne et le Tribulus reconstituent vos réserves énergétiques profondes. Royal Force tonifie les fibres musculaires pelviennes, booste l'endurance cardiovasculaire et stimule une érection puissante sans aucune substance chimique nocive."}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <a
                    href="#cod-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-bronze-500 px-6 py-3 text-sm font-black text-graphite-950 shadow-lg hover:brightness-110 transition-all"
                  >
                    <span>{isArabic ? "اطلب Royal Force واسترجع قوتك الملكية" : "Commander Royal Force maintenant"}</span>
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
              {isArabic ? "الفرق الحقيقي في أدائك ورجولتك" : "La métamorphose en couple"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيف تتغير طاقتك وتحملك قبل وبعد Royal Force؟"
                : "Votre performance avant vs après Royal Force"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "مقارنة حقيقية توضح الفارق الشاسع في القوة والتحمل والصلابة وإسعاد الزوجة:"
                : "Découvrez la différence d'intensité et d'endurance ressentie dès les premières prises :"}
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
                    {isArabic ? "قبل Royal Force: التعب السريع والإحباط" : "Avant : Essoufflement et fatigue précoce"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "ضعف التحمل، ارتخاء، ونقص الثقة" : "Manque d'endurance et frustration"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "إرهاق بدني سريع وضيق في النفس خلال العلاقة يمنعك من إكمال اللقاء بنفس القوة والحماس."
                      : "Essoufflement rapide, fatigue musculaire pelvienne empêchant de maintenir l'intensité."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "تراجع تدريجي في الصلابة وسط اللقاء الحميمي بسبب التعب، مما يسبب إحراجاً كبيراً مع الزوجة."
                      : "Perte progressive de fermeté en cours de route due à l'épuisement physique."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "استهلاك كل طاقتك في جولة واحدة سريعة مع استحالة تكرار العلاقة في نفس الليلة."
                      : "Vidage total des batteries en un seul rapport écourté, impossible d'enchaîner."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "برود وفقدان الدافع الحميمي والتهرب من اللحظات الخاصة خوفاً من الفشل وقلة الحيلة."
                      : "Crainte de décevoir poussant à espacer les moments d'intimité conjugale."}
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
                    {isArabic ? "مع Royal Force: القوة والتحمل الملكي" : "Avec Royal Force : Endurance royale et puissance"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "نفس طويل، صلابة صخرية، وثقة مطلقة" : "Souffle inépuisable, fermeté d'acier et extase"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "نفس طويل وقدرة تحمل بدنية خارقة تقود بها العلاقة لأكثر من 30-45 دقيقة بكل راحة وسيطرة."
                      : "Endurance sans limite, contrôle souverain du tempo et rapports prolongés à volonté."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "صلابة صخرية تلازمك من أول دقيقة حتى النهاية بدون أي تراجع أو ارتخاء مفاجئ."
                      : "Fermeté constante et inébranlable du premier baiser jusqu'au point culminant."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "سرعة استرجاع مذهلة للطاقة تتيح لك تكرار العلاقة مرتين إلى 3 مرات في الليلة بكل نشاط وفرح."
                      : "Recharge d'énergie éclair permettant d'enchaîner plusieurs rapports sans fatigue."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "ثقة فحولية لا تتزعزع وشعور دائم بالرجولة والحرارة وسعادة كاملة تحس بها شريكة حياتك."
                      : "Assurance virile absolue et complicité intime renouvelée pour combler votre couple."}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 5 CLINICAL POWER ACTIVES */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "تركيبة التحمل الملكية 100% طبيعية" : "Synergie adaptogène d'élite"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "5 عناصر نقية ونادرة تمنحك طاقة وتحملاً لا ينضب"
                : "Les 5 actifs majeurs de Royal Force"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "مزيج نباتي فريد يجمع بين أقوى جذور الماكا السوداء ومحفزات التستوستيرون الطبيعي:"
                : "Une formulation concentrée pour une résistance physique et intime d'exception :"}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1. Black Maca */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">01</span>
                <span className="text-xs text-amber-400 font-bold">👑 Maca Noire Pure</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الماكا البيروفية السوداء المركزة" : "Extrait de Maca Noire pure"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "أندر وأقوى أنواع الماكا في جبال الأنديز. ترفع القدرة البدنية والتحمل التنفسي والعضلي، وتزيد من مخزون الطاقة والرغبة الذكورية بدون أي هبوط مفاجئ."
                  : "La variété la plus noble de Maca des Andes. Dope l'endurance respiratoire et musculaire, décuple la vitalité intime et la vigueur."}
              </p>
            </div>

            {/* 2. Tribulus Terrestris */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">02</span>
                <span className="text-xs text-amber-400 font-bold">🔥 Tribulus Titré</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "خلاصة التريبولوس تيريستريس" : "Tribulus Terrestris à haute teneur"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "غني بالصابونينات النشطة التي ترفع هرمون التستوستيرون الطبيعي وتزيد من كثافة وقوة العضلات والصلابة في اللحظات الحاسمة مع الزوجة."
                  : "Stimule la synthèse naturelle de testostérone libre, améliore le tonus musculaire pelvien et raffermit l'érection."}
              </p>
            </div>

            {/* 3. Korean Red Ginseng */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">03</span>
                <span className="text-xs text-amber-400 font-bold">⚡ Panax Ginseng</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الجينسينغ الأحمر الكوري المعتق" : "Ginseng Rouge Coréen titré"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "يوسع الشرايين ويحفز تدفق الدم والأكسجين بكثافة للأنسجة الحيوية، ليمنحك انتصاباً صخرياً مستقراً ونشاطاً متواصلاً بدون أي تعب."
                  : "Vasodilatateur majeur favorisant l'afflux sanguin et l'oxygénation des corps caverneux pour une fermeté inaltérable."}
              </p>
            </div>

            {/* 4. Chelated Zinc */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">04</span>
                <span className="text-xs text-amber-400 font-bold">🛡️ Zinc Chélaté</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "غلوكونات الزنك العضوي النقي" : "Gluconate de Zinc organique"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "المعدن الأساسي لتصنيع التستوستيرون والحيوانات المنوية، يحمي البروستاتا ويضمن سرعة استرجاع الطاقة بين الجولات الحميمية."
                  : "Oligo-élément fondamental pour la fertilité masculine, la santé prostatique et la recharge séminale rapide."}
              </p>
            </div>

            {/* 5. Vitamins B6 & B12 */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-bronze-500/5 to-amber-500/15 p-5.5 shadow-lg backdrop-blur-md sm:col-span-2 lg:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/30 px-2.5 py-1 text-xs font-black text-amber-300">💊</span>
                <span className="text-xs text-amber-400 font-bold">B6 & B12</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "مركب فيتامينات الطاقة B6 و B12" : "Complexe Vitamines B6 & B12"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                {isArabic
                  ? "محرك إنتاج الطاقة الخلوية في العضلات والأعصاب. يقضي على التعب والإجهاد العصبي ويضمن امتصاصاً فائقاً للمكونات الفعالة."
                  : "Cofacteurs majeurs de la synthèse d'énergie cellulaire (ATP), réduisant la fatigue musculaire et soutenant l'influx nerveux."}
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
              {isArabic ? "تدرج ملموس في الأداء" : "Chronologie de montée en puissance"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "ماذا تتوقع أسبوعاً بعد أسبوع مع Royal Force؟"
                : "Les étapes clés de votre transformation"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "نتائج تراكمية وتصاعد مستمر في التحمل والصلابة يبدأ من الأسبوع الأول:"
                : "Une progression spectaculaire menant à une endurance inépuisable :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                1
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 1: حرارة ورغبة متجددة" : "Semaine 1 : Réveil & Vigueur"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "تدفق نشاط في الجسم، خفة في الحركة، وزوال الإرهاق الصباحي مع ارتفاع الرغبة."
                  : "Afflux d'énergie corporelle, réveil dynamique et regain spontané de libido."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                2
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 2 - 3: تحسن التحمل والصلابة" : "Semaine 2-3 : Fermeté & Souffle"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "نفس أطول في العلاقة، صلابة قوية لا ترتخي، وتحكم أفضل في توقيت القذف."
                  : "Souffle prolongé lors de l'acte, fermeté sans faille et contrôle accru."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                3
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 4 - 6: طاقة ملكية لا تنضب" : "Semaine 4-6 : Endurance souveraine"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "قدرة على تكرار اللقاء الحميمي بكل نشاط، أداء رفيع، ورضا تام لشريكة الحياة."
                  : "Recharge éclair, capacité d'enchaîner les rapports et extase partagée."}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-500/15 to-bronze-500/10 p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-graphite-950 font-black text-lg">
                ✓
              </div>
              <h3 className="mt-4 text-base font-black text-amber-300">
                {isArabic ? "كورس شهرين إلى 3: ثبات القوة طوال العام" : "Cure 2-3 mois : Puissance durable"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                {isArabic
                  ? "تثبيت دائم للطاقة الفحولية ومناعة قوية ونشاط مستقر لا ينقطع طوال العام."
                  : "Stabilisation définitive du tonus et virilité inébranlable au quotidien."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PACK RECOMMENDATION: WHY 91% CHOOSE 2 OR 3 BOXES */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "باقات الكورس الأكثر توفيراً" : "Nos formules recommandées"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "علاش 91% من زبنائنا في المغرب كيختارو باك علبتين أو 3 علب؟"
                : "Pourquoi 91% des hommes choisissent la cure de 2 ou 3 boîtes ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "لأن تغذية الخلايا بجذور الماكا وتثبيت هرمون التستوستيرون الطبيعي يحتاج كورس من 60 إلى 90 يوماً:"
                : "La recharge profonde des réserves d'énergie nécessite une cure suivie de 60 à 90 jours :"}
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
                  <span className="text-3xl font-black text-white">299 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70">
                  {isArabic
                    ? "مناسبة لمن يريد تجربة الماكا السوداء والتريبولوس وملاحظة النشاط الأول."
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
                  {isArabic ? "كورس شهرين للتحمل والصلابة وإسعاد الزوجة" : "Cure complète de 2 mois"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-amber-400">499 DH</span>
                  <span className="text-sm text-white/40 line-through">598 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/80 leading-relaxed">
                  {isArabic
                    ? "الخيار الأفضل للرجال الذين يريدون استعادة التحمل الكامل، صلابة صخرية، وقوة لا تنقطع مع توفير 100 درهم وتوصيل فابور."
                    : "Le choix plébiscité pour une endurance inaltérable et combler pleinement sa partenaire."}
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
                  {isArabic ? "3 علب (90 كبسولة)" : "3 boîtes (90 capsules)"}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {isArabic ? "كورس شامل لـ 3 أشهر لقوة ملكية دائمة" : "Cure 3 mois haute performance"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-white">649 DH</span>
                  <span className="text-sm text-white/40 line-through">897 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70 leading-relaxed">
                  {isArabic
                    ? "أعلى مستوى من الفحولة والتحمل والمناعة بأفضل سعر مع توصيل مجاني لباب منزلك."
                    : "Performance physique et intime maximale à prix imbattable avec livraison gratuite."}
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
                ? "كيفاش كدوز طلبية Royal Force ديالك بأمان وسرية تامة؟"
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
                  ? "ماكتخلص حتى سنتيم مسبقاً! ملي كيوصلك الموزع حتى للباب، عندك الحق تفتح الكرتون وتتأكد من علبة Royal Force الأصلية وسيل الأمان، ومن بعد كتخلص نقداً للموزع وأنت مرتاح 100%."
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
                  {isArabic ? "ميثاق الأصالة والجودة من ROVANX المغرب" : "Charte d'excellence ROVANX Maroc"}
                </h4>
                <p className="mt-1 text-sm text-white/75 leading-relaxed">
                  {isArabic
                    ? "منتج أصلي 100% مستخلص من ماكا بيروفية نقية ومطابق للمواصفات الصحية العالمية. توصيل سريع وموثوق في 24 إلى 48 ساعة بجميع مدن وقرى المغرب مع متابعة خاصة لنتائجك وسعادتك."
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
                ? "شنو كيقولو الرجال لي جربو Royal Force؟"
                : "Ce que disent les hommes après Royal Force"}
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
                {isArabic ? "نفس طويل وتحمل عمري ما حسيته من قبل" : "Endurance incroyable et souffle long"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "الماكا السوداء لي فهاد المكمل عجيبة بزاف! كنت كنعيا دغيا واللقاء كيسالي فـ دقائق معدودة. دابا مع Royal Force وليت كنحس بنشاط وتحمل كبير، والعلاقة كدوم أكثر من نصف ساعة براحة تامة. المدام حسات بفرق كبير بزاف."
                  : "La Maca noire donne un souffle et une endurance impressionnante. Rapports prolongés et partenaire comblée."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">إسماعيل ت. — الدار البيضاء</span>
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
                {isArabic ? "صلابة قوية وتكرار العلاقة بدون أي تعب" : "Rigidité parfaite et récupération rapide"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "خديت باك 3 علب باش نستافد من التخفيض والتوصيل المجاني. النتيجة بانت من الأسبوع الأول، انتصاب صلب والقدرة على تكرار العلاقة مرتين فنفس الليلة بدون أي فشل أو تعب. التوصيل فمراكش كان سريع وسري 100%."
                  : "Cure de 3 boîtes très économique. Récupération ultra-rapide et érections solides du début à la fin."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">مراد ص. — مراكش</span>
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
                {isArabic ? "طبيعي 100% ومعاينة قبل الأداء" : "100% naturel et vérification sur place"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "أهم نقطة كانت عندي هي الصحة، مكنبغيش المواد الكيميائية. Royal Force مكوناتو طبيعية ومكيسببش حتى شي صداع راس أو خفقان. فتحت الكرتون وتأكدت من العلبة قدام الموزع عاد خلصت. مصداقية عالية."
                  : "Aucun effet indésirable, produit vérifié devant le livreur avant paiement. Très grande crédibilité."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">نبيل ك. — طنجة</span>
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
              {isArabic ? "الأسئلة الأكثر طرحاً حول Royal Force" : "Questions fréquentes sur Royal Force"}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش هاد المنتج فيه مواد كيميائية أو كيدير خفقان القلب؟" : "Y a-t-il des additifs chimiques ou des palpitations ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "لا إطلاقاً! Royal Force مكمل غذائي طبيعي 100% مستخلص من جذور الماكا السوداء النقية والتريبولوس والجينسينغ والزنك. خالٍ تماماً من أي منشطات كيميائية، ولا يسبب أي صداع، زغللة في العين، أو تسارع في نبضات القلب."
                  : "Non, aucun composant synthétique nocif. 100% végétal et parfaitement toléré sans maux de tête ni palpitations."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "كيفاش كنستعمل المنتج والجرعة المناسبة؟" : "Comment utiliser Royal Force ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "تناول كبسولة إلى كبسولتين يومياً بعد الوجبة مع كأس كبير من الماء. وفي أيام اللقاء الحميمي يُفضل تناول كبسولتين قبل العلاقة بساعة واحدة. يُنصح بالالتزام بكورس شهرين أو 3 أشهر لثبات الأداء والتحمل الملكي."
                  : "Prendre 1 à 2 capsules par jour après le repas avec un grand verre d'eau. 2 capsules 1h avant le rapport en période d'activité."}
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
                  : "Oui, livraison 100% discrète dans un colis neutre sans mention visible. Vous vérifiez le produit avant de régler en espèces."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "شحال من علبة خاصني ناخد باش تبان نتيجة مستقرة؟" : "Combien de boîtes pour un résultat stable ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "النشاط المبدئي يظهر من الأسبوع الأول. ولتثبيت الطاقة الفحولية والتحمل العضلي الدائم، نوصي بكورس علبتين (شهرين) بـ 499 درهم أو 3 علب (3 أشهر) بـ 649 درهم، وهو الخيار الأكثر طلباً وتوفيراً مع توصيل مجاني."
                  : "Les premiers effets sont perceptibles dès 7 jours. Pour une puissance durable, la cure recommandée est de 2 à 3 boîtes."}
              </p>
            </div>
          </div>

          {/* Quick CTA back to order form */}
          <div className="mt-12 text-center">
            <a
              href="#cod-form"
              className="btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-bronze-500 px-8 py-4 text-base font-black uppercase tracking-wider text-graphite-950 shadow-2xl hover:scale-105 transition-transform"
            >
              <span>{isArabic ? "اطلب Royal Force الآن (الدفع عند الاستلام)" : "Commander Royal Force maintenant"}</span>
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
            <p className="text-xs font-black text-white">Royal Force (30 caps)</p>
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
