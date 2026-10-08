"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  Clock3,
  Star,
  Sparkles,
  Moon,
  Zap,
  Eye,
  Lock,
  HelpCircle,
  ArrowDown,
  PhoneCall,
  AlertCircle,
  ThumbsUp,
  Check,
  Activity,
  HeartPulse,
  PackageCheck,
  Award,
  Droplet,
  Package
} from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";

export function ProstaGuardExperience() {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  // Interactive Symptom Checker State
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([0, 1]);

  const symptomsList = [
    {
      id: 0,
      icon: "🌙",
      titleAr: "الاستيقاظ من مرتين إلى 5 مرات كل ليلة للتبول وتقطع النوم",
      titleFr: "Réveils nocturnes répétés (2 à 5 fois par nuit)",
      descAr: "كتفيق بزاف د المرات بالليل ومكتشبعش نعاس، وكتصبح عيان وفاشل.",
      descFr: "Sommeil fragmenté, sensation de fatigue persistante dès le réveil."
    },
    {
      id: 1,
      icon: "💧",
      titleAr: "تدفق بولي ضعيف، متقطع، وصعوبة أو تأخر في البدء",
      titleFr: "Jet urinaire faible, hésitant ou saccadé",
      descAr: "التبول كياخد وقت طويل، والتدفق قليل وكيتقطع مع تقطير مزعج فالنهاية.",
      descFr: "Difficulté à commencer à uriner, jet faible avec gouttes retardataires."
    },
    {
      id: 2,
      icon: "⌛",
      titleAr: "الشعور المستمر بأن المثانة لم تفرغ بالكامل",
      titleFr: "Sensation de vidange incomplète de la vessie",
      descAr: "كتخرج من المرحاض وباقي كتحس بلي باغي تبول أو المثانة عامرة.",
      descFr: "Besoin de retourner aux toilettes peu après avoir uriné."
    },
    {
      id: 3,
      icon: "⚡",
      titleAr: "رغبة ملحة ومفاجئة في التبول وصعوبة التأجيل",
      titleFr: "Envies impérieuses et soudaines d'uriner",
      descAr: "حصر مفاجئ كيخلق ليك القلق فالطريق، فالمسجد، السفر، أو فالخدمة.",
      descFr: "Stress constant d'avoir à trouver des toilettes en urgence."
    },
    {
      id: 4,
      icon: "⚠️",
      titleAr: "ثقل وضغط مزعج أو حريق خفيف في أسفل الحوض والمثانة",
      titleFr: "Pesanteur ou tension inconfortable dans le bas-ventre",
      descAr: "إحساس بالضغط والاحتقان فمنطقة الحوض كيأثر على راحتك اليومية.",
      descFr: "Inconfort et tiraillements pelviens fréquents au quotidien."
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
      <section className="border-b border-white/10 bg-gradient-to-r from-bronze-950/60 via-bronze-900/30 to-bronze-950/60 py-6">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl border border-bronze-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bronze-500/20 text-bronze-400">
                <Moon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "نوم متواصل 100%" : "Sommeil réparateur"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "ودّع الاستيقاظ الليلي" : "Zéro réveil nocturne"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-bronze-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bronze-500/20 text-bronze-400">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تدفق سلس وقوي" : "Flux urinaire puissant"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "بدون تقطيع ولا تقطير" : "Sans interruption"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-bronze-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تغليف سري ومحكم" : "Colis 100% anonyme"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "خصوصية وسرية تامة" : "Discrétion absolue"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-bronze-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
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
              <p className="text-3xl font-black text-amber-400 sm:text-4xl">+1,850</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "زبون بالمغرب استعادوا راحة نومهم" : "Hommes soulagés au Maroc"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-emerald-400 sm:text-4xl">96.4%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "نسبة تحسن سلاسة التدفق" : "Amélioration du débit"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-bronze-300 sm:text-4xl">3x</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "امتصاص أسرع بصيغة سائلة" : "Assimilation liquide rapide"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-white sm:text-4xl">100%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "طبيعي بدون آثار جانبية" : "Actifs naturels sans risque"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SYMPTOM CHECKER QUIZ */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "اختبار كشف أعراض البروستاتا في 30 ثانية" : "Auto-évaluation rapide en 30 secondes"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "واش كتعاني من واحد أو أكثر من هاد الأعراض؟"
                : "Ressentez-vous l'un de ces symptômes ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "اضغط على الأعراض التي تشعر بها يومياً لاكتشاف مدى تأثير البروستاتا على راحتك وحيويتك:"
                : "Cochez vos symptômes pour évaluer la pression exercée sur votre prostate :"}
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
                💡
              </div>
              <div className="text-center sm:text-start flex-1">
                <h4 className="text-lg font-black text-amber-300">
                  {isArabic
                    ? selectedSymptoms.length > 0
                      ? `تم تحديد ${selectedSymptoms.length} علامات لاحتقان البروستاتا`
                      : "اختر الأعراض التي تعاني منها أعلاه"
                    : `${selectedSymptoms.length} signe(s) d'engorgement prostatique identifié(s)`}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  {isArabic
                    ? "مع التقدم في السن (خاصة بعد سن 40)، يتحول هرمون التستوستيرون تدريجياً إلى DHT مما يسبب تضخماً حميداً يضغط على عنق المثانة ويضيق مجرى البول. Prosta Guard يوفر حلاً طبيعياً مركزاً يوقف هذا التحول ويهدئ أنسجة البروستاتا لتستعيد راحتك ونومك بدون الحاجة إلى أدوية كيميائية ثقيلة."
                    : "Après 40 ans, la conversion hormonale en DHT provoque une augmentation de volume prostatique qui comprime la vessie. Prosta Guard régule ce phénomène grâce à ses extraits végétaux ciblés."}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <a
                    href="#cod-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-bronze-500 px-6 py-3 text-sm font-black text-graphite-950 shadow-lg hover:brightness-110 transition-all"
                  >
                    <span>{isArabic ? "اطلب Prosta Guard لحل هذا المشكل الآن" : "Commander Prosta Guard maintenant"}</span>
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
              {isArabic ? "الفرق الحقيقي في حياتك اليومية" : "La transformation au quotidien"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيف تتغير حياتك ونومك قبل وبعد Prosta Guard؟"
                : "Votre vie avant vs après Prosta Guard"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "مقارنة حقيقية توضح الفارق الشاسع الذي يلمسه مستعملو Prosta Guard ابتداءً من الأسابيع الأولى:"
                : "Découvrez la différence ressentie dès les premières semaines :"}
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
                    {isArabic ? "قبل Prosta Guard: المعاناة اليومية" : "Avant : Le calvaire quotidien"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "إرهاق، تقطع نوم، وقلق دائم" : "Fatigue, stress et nuits hachées"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "الاستيقاظ من 3 إلى 5 مرات كل ليلة للذهاب للمرحاض، مما يسبب إرهاقاً حاداً وقلة تركيز صباحاً."
                      : "Réveils incessants la nuit pour uriner (3 à 5 fois), sommeil non réparateur et fatigue chronique."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "تدفق بولي ضعيف ومتقطع، وتأخر في البدء مع تقطير مزعج في الملابس بعد الانتهاء."
                      : "Jet urinaire faible, hésitant ou saccadé avec gouttes retardataires embarrassantes."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "الإحساس الدائم بأن المثانة لم تفرغ، وثقل مستمر في أسفل البطن لا يزول."
                      : "Sensation permanente de ne pas vider totalement la vessie et pesanteur dans le bas-ventre."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "القلق المستمر في صلاة المسجد، أثناء السفر بالسيارة، أو في العمل من البحث المستعجل عن مرحاض."
                      : "Angoisse permanente lors des déplacements, des réunions ou des prières à la mosquée."}
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
                    {isArabic ? "مع Prosta Guard: الراحة والحرية" : "Avec Prosta Guard : La sérénité retrouvée"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "نوم متواصل، راحة بال، وتدفق طبيعي" : "Sommeil paisible et débit puissant"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "نوم عميق ومتواصل طوال الليل بدون انقطاع، واستيقاظ بنشاط وطاقة عالية مع بداية اليوم."
                      : "Nuit complète et ininterrompue de 7 à 8 heures, réveil frais et plein d'énergie."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "تدفق بولي طبيعي وسلس وقوي بدون أدنى مجهود وبدون أي تقطير أو حصر."
                      : "Débit puissant, fluide et continu sans effort, sans douleur ni gouttes retardataires."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "إفراغ تام ومريح للمثانة وخفة فورية واسترخاء في منطقة الحوض وأسفل البطن."
                      : "Vidange vésicale totale et immédiate, sensation de légèreté et de confort pelvien."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "ثقة تامة وراحة بال كاملة في الصلاة، أثناء السفر الطويل، وفي العمل بدون أي قلق."
                      : "Tranquillité d'esprit absolue lors de vos voyages, au travail et dans toutes vos activités."}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 3X LIQUID ADVANTAGE (WHY LIQUID FORMULA IS SUPERIOR) */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "سر الفعالية والسرعة" : "Avantage galénique exclusif"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "علاش الصيغة السائلة لـ Prosta Guard أفضل 3 أضعاف من الحبوب والكبسولات العادية؟"
                : "Pourquoi la formule liquide surpasse les comprimés classiques ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "تم تطوير Prosta Guard في عبوة سائلة (120 مل) بتركيز عالٍ وغطاء قياس دقيق لضمان وصول المكونات فورياً لمجرى الدم:"
                : "Une biodisponibilité maximale pour une action ciblée sans perte d'actifs."}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 via-white/[0.03] to-emerald-950/20 p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-2xl text-emerald-400">
                  💧
                </span>
                <div>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-black text-emerald-300 uppercase">
                    {isArabic ? "صيغة Prosta Guard السائلة" : "Prosta Guard Liquide 120 ml"}
                  </span>
                  <h3 className="text-xl font-black text-white mt-1">
                    {isArabic ? "امتصاص مباشر خلال 15 دقيقة" : "Absorption immédiate en 15 minutes"}
                  </h3>
                </div>
              </div>
              <ul className="mt-5 space-y-3.5 text-sm text-white/80">
                <li className="flex items-center gap-2.5">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>{isArabic ? "امتصاص فوري بنسبة 98% في مجرى الدم دون أن تفقده المعدة." : "Assimilation à 98% directement dans le flux sanguin."}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>{isArabic ? "خفيف جداً على المعدة ولا يسبب أي حرقة أو ثقل هضمي." : "Douce pour l'estomac, aucune irritation gastrique."}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>{isArabic ? "جرعة دقيقة ومثالية (5 مل) بواسطة غطاء القياس المرفق." : "Dosage au millimètre grâce au bouchon doseur 5 ml."}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>{isArabic ? "مفعول سريع يبدأ الشعور بالراحة منه في الأيام الأولى." : "Action rapide et soulagement perceptible dès les premiers jours."}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl text-white/50">
                  💊
                </span>
                <div>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-bold text-white/60 uppercase">
                    {isArabic ? "الحبوب والأقراص الجافة العادية" : "Comprimés secs classiques"}
                  </span>
                  <h3 className="text-xl font-black text-white/80 mt-1">
                    {isArabic ? "امتصاص بطيء وهدر في الفعالية" : "Absorption lente et perte d'actifs"}
                  </h3>
                </div>
              </div>
              <ul className="mt-5 space-y-3.5 text-sm text-white/60">
                <li className="flex items-center gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{isArabic ? "تفقد حتى 60% من المكونات الفعالة أثناء تفتتها في أحماض المعدة." : "Perdent jusqu'à 60% de leurs principes actifs lors de la digestion."}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{isArabic ? "بطيئة التأثير، تأخذ ما بين ساعتين إلى 3 ساعات لتبدأ بالعمل." : "Effet retardé prenant plusieurs heures à se diffuser."}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{isArabic ? "قد تسبب ثقلاً أو عسراً في الهضم للعديد من الرجال." : "Difficiles à avaler et parfois lourdes pour l'estomac."}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{isArabic ? "تحتوي عادة على مواد رابطة ومواد كيميائية لتثبيت شكل الحبة." : "Contiennent souvent des liants et agents de compression chimiques."}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE 5 CLINICALLY BACKED INGREDIENTS */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "تركيبة نباتية موثقة علمياً" : "Synergie végétale 100% active"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "5 عناصر طبيعية متكاملة لحماية ودعم البروستاتا"
                : "Les 5 piliers naturels de Prosta Guard"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "كل مكون تم اختياره وفق أحدث الدراسات الطبية في صحة البروستاتا والمسالك البولية:"
                : "Une formulation synergique ciblée pour des résultats durables."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1. Saw Palmetto */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-bronze-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">01</span>
                <span className="text-xs text-bronze-400 font-bold">🌿 Saw Palmetto</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "مستخلص البلميط المنشاري الأصلي" : "Extrait de Saw Palmetto pur"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "المستخلص العشبي رقم #1 عالمياً المعتمد في أوروبا والولايات المتحدة لدعم البروستاتا. يعمل على تثبيط إنزيم (5-Alpha Reductase) ليمنع تحول التستوستيرون إلى هرمون DHT المسبب لانتفاخ البروستاتا، مما يزيل الضغط عن عنق المثانة."
                  : "Freine l'action de l'enzyme 5-alpha réductase pour limiter la conversion de testostérone en DHT et décongestionner la prostate."}
              </p>
            </div>

            {/* 2. Pygeum Africanum */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-bronze-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">02</span>
                <span className="text-xs text-bronze-400 font-bold">🌳 Pygeum Africanum</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "لحاء الخوخ الأفريقي (بيجيوم)" : "Écorce de Pygeum Africanum"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "مستخلص نباتي غني بالفيتوستيرولات المضادة للالتهاب. يزيد من مرونة وقوة تقلص عضلات المثانة ويخفف التوتر الداخلي، مما يجعل خروج البول سلساً وسريعاً بدون حصر أو تقطيع."
                  : "Rétablit l'élasticité du col vésical, diminue l'inflammation et favorise une vidange complète sans douleur."}
              </p>
            </div>

            {/* 3. Pumpkin Seed Oil */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-bronze-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">03</span>
                <span className="text-xs text-bronze-400 font-bold">🌱 Huile de courge</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "زيت بذور القرع المعصور على البارد" : "Huile de graines de courge"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "مصدر غني بالأحماض الدهنية الأساسية والزنك الطبيعي. يقوي عضلات قاع الحوض ويدعم التحكم الكامل في التبول لمنع التقطير المزعج والشعور بالحصر المفاجئ."
                  : "Renforce le tonus du plancher pelvien et assure un meilleur contrôle sphinctérien pour éliminer les fuites."}
              </p>
            </div>

            {/* 4. Lycopene */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-bronze-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">04</span>
                <span className="text-xs text-bronze-400 font-bold">🍅 Lycopène naturel</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الليكوبين الطبيعي المضاد للأكسدة" : "Lycopène antioxydant puissant"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "أقوى كاروتينويد طبيعي لحماية خلايا البروستاتا. يحارب الشوارد الحرة والإجهاد التأكسدي المسؤول عن شيخوخة وتليف أنسجة البروستاتا، مما يضمن حماية ووقاية طويلة المدى."
                  : "Protège les cellules prostatiques contre le vieillissement prématuré et le stress oxydatif cellulaire."}
              </p>
            </div>

            {/* 5. Zinc Gluconate */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-bronze-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">05</span>
                <span className="text-xs text-bronze-400 font-bold">⚡ Zinc organique</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "غلوكونات الزنك العضوي النقي" : "Gluconate de Zinc hautement assimilable"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "تحتوي البروستاتا السليمة على تركيز من الزنك أعلى بـ 10 مرات من أي عضو آخر في الجسم. نقص الزنك يؤدي مباشرة لتضخمها. يوفر Prosta Guard جرعة متوازنة للحفاظ على الحجم الطبيعي للغدة."
                  : "Minéral fondamental pour l'équilibre hormonal et la régulation naturelle du volume prostatique."}
              </p>
            </div>

            {/* 6. Liquid formula advantage */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-bronze-500/5 to-amber-500/15 p-5.5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/30 px-2.5 py-1 text-xs font-black text-amber-300">💧</span>
                <span className="text-xs text-amber-400 font-bold">{isArabic ? "صيغة سائلة 120 مل" : "Format 120 ml"}</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "غطاء قياس 5 مل للاستعمال الدقيق" : "Bouchon doseur précis 5 ml"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                {isArabic
                  ? "طريقة استعمال بسيطة جداً: تأخذ 5 مل يومياً بعد وجبة الإفطار أو الغداء مع كأس ماء كبير. طعم طبيعي مقبول وسهل البلع بدون أي صعوبة أو انزعاج."
                  : "Simple et pratique au quotidien : 5 ml par jour après le repas avec un grand verre d'eau. Goût agréable et assimilation immédiate."}
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
              {isArabic ? "تدرج ملموس وأكيد" : "Progression des résultats"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "ماذا تلاحظ أسبوعاً بعد أسبوع مع Prosta Guard؟"
                : "Ce que vous allez ressentir semaine après semaine"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "نتائج تراكمية مستمرة تبدأ من الأيام الأولى وتتثبت مع إتمام الكورس الموصى به:"
                : "Des bienfaits progressifs qui s'installent durablement avec la cure :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bronze-500/20 text-bronze-400 font-black text-lg">
                1
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 1: راحة وهدوء أولي" : "Semaine 1 : Apaisement"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "انخفاض الشعور بالحصر والانزعاج، وبداية استرخاء عضلات الحوض وأسفل المثانة."
                  : "Diminution des tiraillements et détente musculaire pelvienne."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bronze-500/20 text-bronze-400 font-black text-lg">
                2
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 2: تراجع الاستيقاظ الليلي" : "Semaine 2 : Sommeil continu"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "تراجع عدد مرات الاستيقاظ ليلاً للتبول (من 4 مرات إلى مرة واحدة فقط)، ونوم أعمق وأكثر راحة."
                  : "Réduction des levers nocturnes (de 4 fois à 1 seule fois), nuits réparatrices."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bronze-500/20 text-bronze-400 font-black text-lg">
                3
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 3 - 4: تدفق قوي وسلس" : "Semaine 3-4 : Débit puissant"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "تدفق بولي طبيعي وسلس وقوي بدون مجهود، واختفاء التقطير المزعج والشعور بالحصر نهائياً."
                  : "Flux continu sans effort ni interruption, disparition des gouttes résiduelles."}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-500/15 to-bronze-500/10 p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-graphite-950 font-black text-lg">
                ✓
              </div>
              <h3 className="mt-4 text-base font-black text-amber-300">
                {isArabic ? "كورس شهرين إلى 3: ثبات ووقاية دائمة" : "Cure 2-3 mois : Protection"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                {isArabic
                  ? "تثبيت النتائج وحماية أنسجة البروستاتا من عودة الاحتقان، مع راحة وحيوية يومية مستمرة."
                  : "Stabilisation du volume prostatique et confort urinaire durable sur le long terme."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PACK RECOMMENDATION: WHY 91% CHOOSE 2 OR 3 BOTTLES */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "خيارات التوفير والكورس العلاجي" : "Nos formules recommandées"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "علاش 91% من زبنائنا في المغرب كيختارو كورس علبتين أو 3 علب؟"
                : "Pourquoi 91% des clients choisissent la cure de 2 ou 3 flacons ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "لأن خلايا البروستاتا تحتاج إلى 6 إلى 8 أسابيع لتستعيد توازنها الطبيعي وتضمن عدم عودة أعراض الحصر والاستيقاظ الليلي:"
                : "La régénération tissulaire prostatique nécessite une cure continue de 60 à 90 jours :"}
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
                  {isArabic ? "علبة واحدة (120 مل)" : "1 flacon (120 ml)"}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {isArabic ? "تكفي لمدة 24 إلى 30 يوماً" : "Pour 1 mois d'utilisation"}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-black text-white">299 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70">
                  {isArabic
                    ? "مناسبة لمن يريد تجربة المنتج وملاحظة الراحة الأولى في التبول."
                    : "Idéal pour tester les premiers bienfaits."}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#cod-form"
                  className="w-full inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  {isArabic ? "طلب علبة واحدة" : "Choisir 1 flacon"}
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
                  {isArabic ? "علبتان (240 مل)" : "2 flacons (240 ml)"}
                </h3>
                <p className="text-xs text-amber-300/80 font-bold mt-1">
                  {isArabic ? "كورس شهرين كامل لتثبيت الراحة والنوم" : "Cure complète de 2 mois"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-amber-400">499 DH</span>
                  <span className="text-sm text-white/40 line-through">598 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/80 leading-relaxed">
                  {isArabic
                    ? "الخيار الأفضل للرجال الذين يريدون التخلص من الاستيقاظ الليلي وتثبيت قوة التدفق مع توفير كبير وتوصيل مجاني."
                    : "Le choix plébiscité pour stabiliser le confort urinaire et dormir sans réveil."}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#cod-form"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-bronze-500 py-3.5 text-sm font-black text-graphite-950 shadow-lg hover:brightness-110 transition-all"
                >
                  {isArabic ? "اطلب باك علبتين الآن (توصيل فابور)" : "Commander 2 flacons (Port offert)"}
                </a>
              </div>
            </div>

            {/* Tier 3: BEST VALUE */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center shadow-lg flex flex-col justify-between">
              <div>
                <span className="rounded bg-emerald-500/20 px-3 py-1 text-xs font-black text-emerald-300">
                  {isArabic ? "🏆 أفضل توفير (وفر 250 درهم)" : "🏆 Meilleure Valeur (-250 DH)"}
                </span>
                <h3 className="text-xl font-black text-white mt-3">
                  {isArabic ? "3 علب (360 مل)" : "3 flacons (360 ml)"}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {isArabic ? "كورس وقائي شامل لـ 3 أشهر" : "Cure préventive de 3 mois"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-white">649 DH</span>
                  <span className="text-sm text-white/40 line-through">897 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70 leading-relaxed">
                  {isArabic
                    ? "حماية كاملة ووقاية طويلة المدى لغدة البروستاتا طوال العام مع أكبر نسبة تخفيض وتوصيل مجاني."
                    : "Protection prostatique maximale à prix imbattable avec livraison gratuite."}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#cod-form"
                  className="w-full inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  {isArabic ? "اطلب باك 3 علب (أفضل توفير)" : "Commander 3 flacons"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. THE 3 PILLARS: CONFIRMATION, DELIVERY & PRIVACY GUARANTEES */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-300">
              {isArabic ? "ضمانات ROVANX الرسمية للزبون" : "Nos engagements de confiance"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيفاش كدوز طلبية Prosta Guard ديالك بأمان وسرية تامة؟"
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
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bronze-500/20 text-bronze-400 font-black text-xl">
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
                  ? "الطرد كيوصلك مغلف فكرتونة بنية محايدة مغلقة بإحكام. مكاين حتى شي اسم للمنتج ولا كلمة 'بروستاتا' من برا. الموزع نفسو مكيعرفش شنو كاين لداخل، باش تسلم أمانتك براحة قدام العائلة أو فالخدمة."
                  : "Carton totalement neutre sans mention du nom du produit ni de sa nature pour préserver votre intimité devant vos proches ou au travail."}
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
                  ? "ماكتخلص حتى سنتيم مسبقاً! ملي كيوصلك الموزع حتى للباب، عندك الحق تفتح الكرتون وتتأكد من قارورة Prosta Guard الأصلية وسيل الأمان، ومن بعد كتخلص نقداً للموزع وأنت مرتاح 100%."
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
                  {isArabic ? "ميثاق الثقة والأمان من ROVANX المغرب" : "Charte de confiance ROVANX Maroc"}
                </h4>
                <p className="mt-1 text-sm text-white/75 leading-relaxed">
                  {isArabic
                    ? "جميع منتجاتنا مطابقة للمواصفات الصحية، أصلية ومغلقة بختم المصنع. التوصيل سريع في 24 إلى 48 ساعة بجميع مدن المغرب. خدمة الزبناء رهن إشارتك طوال فترة الكورس لمتابعة نتائجك والإجابة عن كل تساؤلاتك."
                    : "Produits originaux certifiés avec scellé de sécurité. Livraison rapide en 24-48h partout au Maroc avec suivi personnalisé."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REAL MOROCCAN VERIFIED REVIEWS */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "تجارب حقيقية من مدن المغرب" : "Témoignages vérifiés au Maroc"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "شنو كيقولو الرجال لي جربو Prosta Guard؟"
                : "Ce que disent les hommes après la cure Prosta Guard"}
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
                {isArabic ? "راحة كبيرة فـ النعاس والتبول ولا طبيعي" : "Soulagement remarquable du sommeil"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "عندي 54 عام وكنت كنعاني من صعوبة فالبداية د التبول وكنفيق 4 المرات فالليل. خديت الباك ديال علبتين بـ 499 درهم. من بعد 15 يوم لاحظت فرق شاسع، البول كيدوز بسلاسة ومبقيتش كنحس بداك الثقل فالمثانة. التوصيل كان سريع وسري فكازا."
                  : "À 54 ans, je me réveillais 4 fois par nuit. Après 2 semaines de cure, le débit est fluide et je dors enfin paisiblement."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">حسن م. — الدار البيضاء</span>
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
                {isArabic ? "طرد سري ومحكم والمذاق ساهل للشرب" : "Colis ultra discret et prise facile"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "أهم حاجة كانت عاجباني هي التغليف، وصلني الطرد كرتون عادي ومسدود ومفيه حتى شي كتابة من برا. المنتج جودتو عالية، غطاء القياس كيسهل تاخد 5 مل كل نهار. كنفيق دابا مرة وحدة فقط بعدما كنت كنعاني. شكراً على المعاملة الطيبة."
                  : "Livraison parfaitement discrète, flacon avec bouchon doseur très pratique. Les réveils nocturnes ont quasiment disparu."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">عبد العزيز ك. — الرباط</span>
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
                {isArabic ? "بديل طبيعي ممتاز بدون أي أعراض جانبية" : "Excellente alternative 100% naturelle"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "جربت بزاف د الوصفات العشوائية وما عطاوني حتى نتيجة. Prosta Guard مكوناتو واضحة ونقية (البلميط المنشاري وزيت بذور القرع). بديت كنحس بالخفة والراحة من الأسبوع الأول، وفحصت الطرد قبل ما نخلص الموزع. مصداقية عالية."
                  : "Des composants purs et efficaces. J'ai vérifié le colis avant de payer. Très grande crédibilité et produit de qualité."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">عمر ع. — طنجة</span>
                <span>علبتان</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "إجابات مباشرة وشفافة" : "Foire aux questions"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic ? "الأسئلة الأكثر طرحاً حول Prosta Guard" : "Questions fréquentes sur Prosta Guard"}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش هاد المنتج فيه مواد كيميائية أو أدوية كيماوية؟" : "Est-ce un produit chimique ou un médicament ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "لا، Prosta Guard مكمل غذائي طبيعي 100% مستخلص من نباتات وزيوت طبيعية نقية (Saw Palmetto، البيجيوم الأفريقي، زيت بذور القرع، زنك، ليكوبين). خالٍ تماماً من أي مواد كيميائية، منشطات، أو هرمونات صناعية، وليس له أي أعراض جانبية غير مرغوبة."
                  : "Non, c'est un complément 100% naturel élaboré selon les normes de qualité sans additifs chimiques nocifs."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش كيتعارض مع أدوية الضغط أو السكر؟" : "Y a-t-il des interactions avec le diabète ou la tension ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "مكونات Prosta Guard نباتية لطيفة لا تؤثر على ضغط الدم أو مستويات السكر. ومع ذلك، إذا كنت تتابع علاجاً طبياً دقيقاً، يُنصح دائماً بمباعدة وقت تناوله بساعتين عن أدويتك اليومية أو استشارة طبيبك."
                  : "Les actifs végétaux sont doux et sans impact néfaste sur la glycémie ou la tension artérielle."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "شحال من علبة خاصني ناخد باش تبان نتيجة مستقرة؟" : "Combien de flacons pour un résultat stable ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "الراحة الأولية تبدأ من الأسبوع الأول إلى الثاني. وللحصول على نتيجة ثابتة وتجديد أنسجة البروستاتا، نوصي بشدة بكورس علبتين (شهرين) بـ 499 درهم أو 3 علب (3 أشهر) بـ 649 درهم، وهو الخيار الأكثر طلباً وتوفيراً مع توصيل مجاني."
                  : "Un premier soulagement se fait sentir dès 2 semaines. Pour un résultat durable, la cure recommandée est de 2 à 3 flacons."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش التوصيل سري؟ واش الموزع كيعرف شنو كاين فالطرد؟" : "La livraison est-elle discrète ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم، التوصيل سري 100%. الطرد مغلق في كرتون محايد تماماً وبدون أي كتابة تشير لنوعية المنتج أو كلمة بروستاتا. الموزع لا يعلم محتواه إطلاقاً، وتتسلمه براحة وسرية تامة أمام عائلتك أو زملائك."
                  : "Oui, livraison 100% discrète dans un colis scellé neutre sans mention visible du contenu."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش نقدر نفحص الطرد قبل ما نخلص؟" : "Puis-je vérifier le colis avant de payer ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم بالتأكيد! يمكنك فتح الطرد والتأكد من سلامة قارورة Prosta Guard الأصلية وسيل الأمان قبل تسليم المبلغ نقداً للموزع. ثقتك وأمانك هما أولويتنا."
                  : "Absolument. Vous avez le droit d'ouvrir le carton et de vérifier le flacon scellé avant de régler en espèces."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "كيفاش كنستعمل المنتج؟" : "Comment utiliser Prosta Guard ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "طريقة الاستعمال بسيطة جداً: تأخذ 5 مل يومياً باستخدام غطاء القياس المرفق بعد وجبة الإفطار أو الغداء مع كأس كبير من الماء. ترج القارورة جيداً قبل كل استعمال."
                  : "Prendre 5 ml par jour à l'aide du bouchon doseur fourni, après le repas, avec un grand verre d'eau. Bien agiter avant emploi."}
              </p>
            </div>
          </div>

          {/* Quick CTA back to order form */}
          <div className="mt-12 text-center">
            <a
              href="#cod-form"
              className="btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-bronze-500 px-8 py-4 text-base font-black uppercase tracking-wider text-graphite-950 shadow-2xl hover:scale-105 transition-transform"
            >
              <span>{isArabic ? "اطلب Prosta Guard الآن (الدفع عند الاستلام)" : "Commander Prosta Guard maintenant"}</span>
              <ArrowDown size={18} />
            </a>
            <p className="mt-2.5 text-xs text-white/60">
              {isArabic ? "توصيل سريع مجاني للباك الثنائي والثلاثي | الدفع نقداً بعد المعاينة | سرية تامة 100%" : "Livraison gratuite sur les packs 2 et 3 flacons | Paiement à la réception"}
            </p>
          </div>
        </div>
      </section>

      {/* 12. FLOATING MOBILE ORDER BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-30 block border-t border-white/10 bg-[#0e1015]/95 p-3 backdrop-blur-lg sm:hidden shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black text-white">Prosta Guard (120 ml)</p>
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
