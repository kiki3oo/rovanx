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
  BatteryCharging,
  Brain,
  Dumbbell
} from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";

export function VitalityBoostExperience() {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  // Interactive Fatigue & Energy Symptom Checker State
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([0, 1]);

  const symptomsList = [
    {
      id: 0,
      icon: "🥱",
      titleAr: "صعوبة في الاستيقاظ صباحاً، ثقل وخمول بالرغم من ساعات النوم الكافية",
      titleFr: "Réveil difficile, lourdeur matinale malgré une nuit complète",
      descAr: "كتفيق عيان ومسالي، وكتلقى صعوبة باش تبدا نهارك بنشاط وحيوية.",
      descFr: "Sensation d'épuisement dès le lever, manque total d'entrain."
    },
    {
      id: 1,
      icon: "📉",
      titleAr: "هبوط حاد في الطاقة (سخفة مفاجئة) بعد وجبة الغداء أو في منتصف النهار",
      titleFr: "Coup de barre violent après le déjeuner ou en milieu de journée",
      descAr: "طاقة كتنزل لـ 0، كتحس بالنعاس والكسل، ومكتبقاش قادر تكمل خدمتك بتركيز.",
      descFr: "Baisse d'énergie soudaine, envie irrésistible de dormir au travail."
    },
    {
      id: 2,
      icon: "🧠",
      titleAr: "تشتت الذهن، صعوبة التركيز، وضبابية فكرية تحت ضغط العمل اليومي",
      titleFr: "Brouillard mental, baisse de concentration et trous de mémoire",
      descAr: "الرأس تقيل، صعوبة فالحفظ واتخاذ القرارات السريعة بسبب الإرهاق العصبي.",
      descFr: "Difficulté à rester attentif, surcharge mentale et stress continu."
    },
    {
      id: 3,
      icon: "🏋️",
      titleAr: "تراجع القوة العضلية والقدرة على التحمل عند بذل أي مجهود بدني",
      titleFr: "Baisse d'endurance physique et récupération musculaire lente",
      descAr: "كتعيا دغيا مع أي حركة أو رياضة، والعضلات كيبقاو مهدودين أيام طويلة.",
      descFr: "Essoufflement rapide, manque de force et courbatures prolongées."
    },
    {
      id: 4,
      icon: "🔥",
      titleAr: "نقص الرغبة، الفتور، والإحساس بأن 'البطارية' فرغت تماماً مع نهاية اليوم",
      titleFr: "Baisse de libido, fatigue générale et sensation de batterie à plat",
      descAr: "كترجع للدار مهدود وما عندك جهد ولا رغبة للاستمتاع بوقتك مع عائلتك وشريكة حياتك.",
      descFr: "Épuisement total le soir venu, manque d'élan intime et d'enthousiasme."
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
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "طاقة متدفقة وفورية" : "Énergie explosive"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "محاربة التعب والكسل" : "Zéro coup de barre"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تركيز وصفاء ذهني" : "Focus mental aiguisé"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "إنتاجية عالية بالعمل" : "Clarté et vivacité"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تغليف سري 100%" : "Colis 100% anonyme"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "خصوصية تامة ومحكمة" : "Discrétion garantie"}</p>
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
              <p className="text-3xl font-black text-amber-400 sm:text-4xl">+2,400</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "رجل بالمغرب استعادوا طاقتهم وحيويتهم" : "Hommes actifs au Maroc"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-emerald-400 sm:text-4xl">97.2%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "نسبة التخلص من الخمول والكسل" : "Énergie soutenue sans fatigue"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-bronze-300 sm:text-4xl">0%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "منبهات كيميائية أو سكر مضاف" : "Sans caféine nocive"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-black text-white sm:text-4xl">100%</p>
              <p className="mt-1 text-xs font-bold text-white/70">
                {isArabic ? "مستخلصات نباتية أصلية معتمدة" : "Actifs naturels purs"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ENERGY & FATIGUE ASSESSMENT QUIZ */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "اختبار مستوى الطاقة والإجهاد في 30 ثانية" : "Auto-évaluation de vitalité en 30 secondes"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "واش كتحس بواحد أو أكثر من هاد الأعراض؟"
                : "Ressentez-vous une baisse de vitalité ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "اضغط على العلامات التي تشعر بها في يومك لمعرفة سبب استنزاف طاقتك الحيوية:"
                : "Cochez vos symptômes pour mesurer votre niveau de fatigue quotidienne :"}
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
                      ? `تم تشخيص ${selectedSymptoms.length} علامات لإجهاد الطاقة ونقص الحيوية`
                      : "اختر الأعراض التي تشعر بها أعلاه"
                    : `${selectedSymptoms.length} signe(s) de fatigue chronique identifié(s)`}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  {isArabic
                    ? "الإجهاد اليومي، ساعات العمل الطويلة، وضغوطات الحياة كتستنزف الغدد الكظرية وتسبب هبوطاً تدريجياً في هرمون التستوستيرون وإنتاج الـ ATP في الخلايا. شرب القهوة المفرط لا يحل المشكل بل يرفع الكورتيزول والتوتر! Vitality Boost يغذي جسمك بمركزات طبيعية (ماكا + جينسينغ أحمر + تريبولوس + زنك) ليعيد شحن بطاريتك من الجذور وبشكل دائم."
                    : "Le stress, la surcharge mentale et le rythme intense vident vos réserves d'ATP et déséquilibrent votre production d'hormones vitales. Vitality Boost recharge vos batteries cellulaires avec des plantes adaptogènes ciblées sans créer d'accoutumance ni de nervosité."}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <a
                    href="#cod-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-bronze-500 px-6 py-3 text-sm font-black text-graphite-950 shadow-lg hover:brightness-110 transition-all"
                  >
                    <span>{isArabic ? "اطلب Vitality Boost واسترجع نشاطك اليوم" : "Commander Vitality Boost maintenant"}</span>
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
              {isArabic ? "الفرق الحقيقي في إنتاجيتك ويومك" : "La transformation énergétique"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيف تتغير حياتك ويومك قبل وبعد Vitality Boost؟"
                : "Votre quotidien avant vs après Vitality Boost"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "مقارنة دقيقة توضح التحول الجذري في القوة والنشاط الذي يلمسه مستعملو Vitality Boost:"
                : "Découvrez le regain d'énergie ressenti dès les premières prises :"}
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
                    {isArabic ? "قبل Vitality Boost: التعب والكسل اليومي" : "Avant : Fatigue et épuisement"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "خمول، سخفة، وضعف الإنتاجية" : "Lourdeur, coup de pompe et démotivation"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "استيقاظ صعب مع رغبة متكررة في إيقاف المنبه، وثقل شديد في الرأس والعضلات مع بداية النهار."
                      : "Réveil pénible, sensation de n'avoir pas dormi et lourdeur physique handicapante."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "هبوط حاد وسخفة بعد الغداء تضطرك للبحث عن القهوة ومشروبات الطاقة المؤقتة التي تزيد التوتر."
                      : "Coup de fatigue brutal vers 14h, recours excessif au café causant palpitations et nervosité."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "تشتت الانتباه وضعف التركيز في العمل، والتردد في اتخاذ القرارات وإنجاز المهام الهامة."
                      : "Difficulté de concentration au travail, lenteur cognitive et surcharge mentale."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400 text-base font-bold">✕</span>
                  <span>
                    {isArabic
                      ? "الرجوع للمنزل بطاقة منهارة تماماً، بدون أي جهد للحديث، ممارسة الرياضة، أو مشاركة زوجتك لحظات حميمية."
                      : "Retour à la maison totalement vidé, incapacité à profiter de sa vie de famille et de couple."}
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
                    {isArabic ? "مع Vitality Boost: القوة والنشاط الكامل" : "Avec Vitality Boost : Puissance et vitalité"}
                  </h3>
                  <p className="text-xs text-white/60">{isArabic ? "طاقة متواصلة، صفاء ذهني، وحيوية ذكورية" : "Énergie constante, focus aiguisé et dynamisme"}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "انطلاقة صباحية حماسية وخفة غير مسبوقة في الحركة مع الرغبة في إنجاز كل مشاريع اليوم."
                      : "Réveil dynamique et enthousiaste dès la première sonnerie, corps frais et disponible."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "طاقة نظيفة ومستقرة من الصباح للمساء بدون أي هبوط مفاجئ أو حاجة لمنبهات السكر والقهاوي."
                      : "Niveau d'énergie constant toute la journée sans aucun coup de pompe ni baisse de régime."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "تركيز ذهني حاد وصفاء فكري يساعدك على حل المشكلات والإنتاجية العالية في عملك وتجارتك."
                      : "Clarté mentale absolue, réactivité et prise de décision rapide sous pression."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400 text-base font-bold">✓</span>
                  <span>
                    {isArabic
                      ? "قوة تحمل ولياقة بدنية متجددة، ورغبة وحيوية ذكورية عالية لتستمتع بحياتك ومسائك الزوجي بأفضل شكل."
                      : "Vigueur musculaire, libido tonifiée et énergie débordante pour profiter pleinement de vos soirées."}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 6 SYNERGISTIC BIO-ACTIVE INGREDIENTS */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "تركيبة ثلاثية المفعول 100% طبيعية" : "Synergie adaptogène puissante"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "6 عناصر نشطة مدروسة علمياً لمحاربة الإرهاق واستعادة الطاقة"
                : "Les 6 actifs clés de Vitality Boost"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "مزيج تآزري يجمع بين الأعشاب المتكيفة ومولدات الطاقة الخلوية لنتائج سريعة ومستدامة:"
                : "Une formule exclusive combinant plantes stimulantes et cofacteurs énergétiques :"}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1. Peruvian Maca */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">01</span>
                <span className="text-xs text-amber-400 font-bold">🌿 Maca Péruvienne</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "خلاصة الماكا البيروفية المركزة" : "Extrait de Maca pure du Pérou"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "عشبة المحاربين الأسطورية من جبال الأنديز. تعمل كمكيف طبيعي (Adaptogène) يعيد توازن الهرمونات الذكورية، يضاعف التحمل البدني، ويعزز الرغبة والنشاط الجنسي بشكل طبيعي وآمن."
                  : "Plante adaptogène réputée pour doper la vigueur physique, l'endurance et soutenir l'équilibre hormonal masculin."}
              </p>
            </div>

            {/* 2. Korean Red Ginseng */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">02</span>
                <span className="text-xs text-amber-400 font-bold">⚡ Panax Ginseng</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الجينسينغ الأحمر الكوري المعتق" : "Ginseng Rouge de Corée titré"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "غني بمادة الجينسينوسيدات (Ginsénosides) التي تحفز الدورة الدموية وتدفق الأكسجين للمخ والعضلات. يقضي على التعب المزمن، يعزز التركيز الذهني الحاد، ويمنح الجسم نشاطاً فورياً."
                  : "Tonique cérébral et corporel majeur, améliore l'oxygénation des tissus et stimule la vivacité d'esprit."}
              </p>
            </div>

            {/* 3. Tribulus Terrestris */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">03</span>
                <span className="text-xs text-amber-400 font-bold">🔥 Tribulus Terrestris</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "التريبولوس عالي التركيز" : "Tribulus Terrestris concentré"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "يحتوي على الصابونينات الستيرويدية الطبيعية التي تحفز إنتاج هرمون LH وهرمون التستوستيرون الطبيعي لدى الرجال، مما يقوي الكتلة العضلية ويزيد الطاقة والدافع الذكوري."
                  : "Stimule naturellement la synthèse de testostérone libre et favorise la récupération musculaire après l'effort."}
              </p>
            </div>

            {/* 4. Chelated Zinc */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">04</span>
                <span className="text-xs text-amber-400 font-bold">🛡️ Zinc Chélaté</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "غلوكونات الزنك العضوي" : "Gluconate de Zinc haute absorption"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "معدن حيوي للخصوبة وإنتاج هرمون الذكورة وتخليق البروتين. يقوي الجهاز المناعي ويحمي الخلايا من الإجهاد التأكسدي المسؤول عن الإحساس بالشيخوخة المبكرة والتعب."
                  : "Oligo-élément indispensable au maintien d'un taux normal de testostérone et à la régénération cellulaire."}
              </p>
            </div>

            {/* 5. Vitamin B Complex */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5.5 shadow-lg backdrop-blur-md hover:border-amber-500/40 transition-all">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">05</span>
                <span className="text-xs text-amber-400 font-bold">💊 Vitamines B6 & B12</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "فيتامينات الطاقة B6 و B12" : "Complexe Vitamines B6 & B12"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "المحرك الكيميائي الرئيسي لتحويل المغذيات إلى طاقة خلوية حقيقية (ATP). تدعم وظائف الجهاز العصبي، تمنع الإرهاق الدماغي، وتساعد على استقرار المزاج ومقاومة الضغوط."
                  : "Coenzymes indispensables au métabolisme énergétique normal et à la réduction prouvée de la fatigue nerveuse."}
              </p>
            </div>

            {/* 6. Marine Magnesium */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-bronze-500/5 to-amber-500/15 p-5.5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-amber-500/30 px-2.5 py-1 text-xs font-black text-amber-300">🌊</span>
                <span className="text-xs text-amber-400 font-bold">{isArabic ? "مغنيسيوم بحري" : "Magnésium Marin"}</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "المغنيسيوم البحري النقي" : "Magnésium marin pur"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                {isArabic
                  ? "يهدئ الشد العضلي ويمنع التشنجات والتوتر العصبي، ليضمن لك طاقة حيوية نهاراً ونوماً عميقاً ليلاً لتستيقظ بكامل قواك."
                  : "Détend les fibres musculaires, élimine les crampes et assure un relâchement nerveux propice à une récupération optimale."}
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
              {isArabic ? "تدرج ملموس في الأداء" : "Chronologie des résultats"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "ماذا تتوقع أسبوعاً بعد أسبوع مع Vitality Boost؟"
                : "Les étapes clés de votre montée en puissance"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "نتائج تراكمية تبدأ من الأيام الأولى وتتطور لقوة بدنية وذهنية مستمرة:"
                : "Des effets progressifs et durables dès les premières capsules :"}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                1
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأيام 1 - 3: انتعاش وزوال الكسل" : "Jours 1-3 : Regain immédiat"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "إحساس فوري بالنشاط والخفة مع بداية الصباح، وزوال الخمول والكسل المعتاد."
                  : "Réveil plus facile, disparition de la sensation de lourdeur matinale."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                2
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الأسبوع 1 - 2: ثبات الطاقة والتركيز" : "Semaine 1-2 : Énergie continue"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "طاقة مستمرة طول النهار بدون سخفة بعد الغداء، وصفاء ذهني وتركيز عالي في العمل."
                  : "Fin des coups de pompe d'après-midi, concentration et productivité maximales."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-black text-lg">
                3
              </div>
              <h3 className="mt-4 text-base font-black text-white">
                {isArabic ? "الشهر الأول: قوة تحمل وحيوية ذكورية" : "Mois 1 : Vigueur et puissance"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "زيادة ملحوظة في القوة العضلية والتحمل البدني، مع نشاط ورغبة حيوية متجددة."
                  : "Endurance physique renforcée, tonus musculaire et vitalité masculine affirmée."}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-500/15 to-bronze-500/10 p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-graphite-950 font-black text-lg">
                ✓
              </div>
              <h3 className="mt-4 text-base font-black text-amber-300">
                {isArabic ? "كورس شهرين إلى 3: طاقة متجذرة ودائمة" : "Cure 2-3 mois : Pleine puissance"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                {isArabic
                  ? "إعادة ضبط التوازن الهرموني بالكامل ومناعة قوية وحيوية مستقرة طوال العام."
                  : "Stabilisation de l'équilibre énergétique et protection durable contre le burn-out."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PACK RECOMMENDATION: WHY 89% CHOOSE 2 OR 3 BOXES */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-300">
              {isArabic ? "باقات التوفير والكورس العلاجي" : "Nos formules recommandées"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "علاش 89% من زبنائنا كيختارو باك علبتين أو 3 علب؟"
                : "Pourquoi 89% des hommes choisissent la cure de 2 ou 3 boîtes ?"}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {isArabic
                ? "لأن خلايا الجسم والغدد الكظرية تحتاج إلى كورس متواصل لتثبيت إنتاج الطاقة وتجنب عودة الإرهاق:"
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
                  {isArabic ? "تكفي لمدة شهر (كبسولة يومياً)" : "Pour 1 mois d'énergie"}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-black text-white">249 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70">
                  {isArabic
                    ? "مناسبة لمن يريد تجربة المنتج وملاحظة الانتعاش الأول في الصباح."
                    : "Idéal pour tester le regain d'énergie initial."}
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
                  {isArabic ? "كورس شهرين كامل لتثبيت النشاط والقوة" : "Cure complète de 2 mois"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-amber-400">399 DH</span>
                  <span className="text-sm text-white/40 line-through">498 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/80 leading-relaxed">
                  {isArabic
                    ? "الخيار الأفضل للرجال الذين يريدون القضاء النهائي على التعب المزمن وثبات الطاقة طوال النهار مع توفير 100 درهم وتوصيل فابور."
                    : "Le choix plébiscité pour une vitalité inaltérable au quotidien et une endurance maximale."}
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
                  {isArabic ? "كورس شامل لـ 3 أشهر من القوة القصوى" : "Cure 3 mois haute performance"}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-black text-white">549 DH</span>
                  <span className="text-sm text-white/40 line-through">747 DH</span>
                </div>
                <p className="mt-3 text-xs text-white/70 leading-relaxed">
                  {isArabic
                    ? "أعلى مستوى من القوة والمناعة واللياقة البدنية والذهنية بأفضل سعر مع توصيل مجاني لباب منزلك."
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
                ? "كيفاش كدوز طلبية Vitality Boost ديالك بأمان وسرية تامة؟"
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
                  ? "ماكتخلص حتى سنتيم مسبقاً! ملي كيوصلك الموزع حتى للباب، عندك الحق تفتح الكرتون وتتأكد من علبة Vitality Boost الأصلية وسيل الأمان، ومن بعد كتخلص نقداً للموزع وأنت مرتاح 100%."
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
                  {isArabic ? "ميثاق الجودة والثقة من ROVANX المغرب" : "Charte de qualité ROVANX Maroc"}
                </h4>
                <p className="mt-1 text-sm text-white/75 leading-relaxed">
                  {isArabic
                    ? "منتج أصلي 100% مستورد ومطابق لأعلى معايير السلامة الغذائية. توصيل سريع وموثوق في 24 إلى 48 ساعة بجميع مدن وقرى المغرب. خدمة زبناء محترفة لمرافقتك والإجابة عن كل أسئلتك طوال مدة الكورس."
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
                ? "شنو كيقولو الرجال لي جربو Vitality Boost؟"
                : "Ce que disent les hommes après Vitality Boost"}
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
                {isArabic ? "طاقة واعرة وفياق ساهل من الصباح" : "Énergie incroyable dès le réveil"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "كنت كنعاني من واحد الكسل خايب فالصباح والسخفة فوسط الخدمة. من بعد سيمانة ديال Vitality Boost وليت كنفيق بنشاط كبير ومبقيتش كنحتاج لـ 3 القهاوي فالنهار. طاقة نظيفة بلا دوخة وبلا دقات قلب سريعة."
                  : "Une énergie propre et durable. Je me réveille frais et plein d'entrain sans abuser du café."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">أمين ز. — فاس</span>
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
                {isArabic ? "تركيز عالي فالخدمة وقوة فالتحمل" : "Focus exceptionnel et endurance"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "خدام فالتجارة والضغوطات اليومية كانت كتسالي معايا. هاد المكمل فرق معايا بزاف فـ التركيز والتحمل. كنوصل للدار باقي عندي جهد باش نخرج مع الوليدات ونعيش حياتي. والتوصيل كان فسيمانة سريعة وسري فكازا."
                  : "Idéal pour les journées denses au travail. Le focus est impressionnant et la fatigue s'est envolée."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">كريم ب. — الدار البيضاء</span>
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
                {isArabic ? "معاينة قبل الخلاص ومصداقية تامة" : "Vérification sur place et qualité top"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {isArabic
                  ? "كنت متردد نشري من الإنترنت، ولكن فاش وصلني الطرد كرتون مسدود شفت العلبة وتأكدت منها عاد خلصت الموزع. المنتج أصلي 100% والنتيجة بانت ليا من الأيام الأولى. كنصح بيه أي راجل كيحس بالعياء."
                  : "Vérification facile devant le livreur, discrétion totale et efficacité au rendez-vous dès la première semaine."}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
                <span className="font-bold text-white">رشيد م. — مراكش</span>
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
              {isArabic ? "الأسئلة الأكثر طرحاً حول Vitality Boost" : "Questions fréquentes sur Vitality Boost"}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش هاد المنتج فيه كافيين أو منبهات كيميائية مضرة؟" : "Contient-il de la caféine nocive ou des stimulants chimiques ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "لا، Vitality Boost خالٍ تماماً من الكافيين الصناعي، المنبهات الكيميائية، أو السكريات الضارة. الطاقة التي يمنحها مستمدة 100% من أعشاب متكيفة (الماكا والجينسينغ والتريبولوس) وفيتامينات B التي تدعم إنتاج الطاقة الطبيعي في خلايا جسمك دون أن تسبب أي توتر أو خفقان قلب."
                  : "Non, aucun stimulant synthétique. L'énergie provient d'extraits naturels de plantes adaptogènes et de vitamines énergétiques."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش كيطلع ضغط الدم (طونسيون)؟" : "Est-il compatible avec la tension artérielle ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "تركيبة Vitality Boost مدروسة بعناية لتنشيط الدورة الدموية بلطف دون إحداث ارتفاع مفاجئ في الضغط. ومع ذلك، إذا كنت تتابع علاجاً طبياً دقيقاً لضغط الدم، يُنصح دائماً باستشارة طبيبك أو مباعدة وقت تناوله بساعتين عن أدويتك اليومية."
                  : "Les extraits végétaux stimulent la microcirculation en douceur sans provoquer de pic tensionnel brutal."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "كيفاش كنستعمل المنتج للحصول على أحسن نتيجة؟" : "Comment utiliser Vitality Boost ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "تناول كبسولة إلى كبسولتين يومياً في الصباح بعد وجبة الإفطار مع كأس كبير من الماء. يُفضل تناوله صباحاً ليمدك بالنشاط طوال النهار، والمواظبة على كورس شهرين أو 3 أشهر لثبات الطاقة والمناعة."
                  : "Prendre 1 à 2 capsules par jour le matin après le petit-déjeuner avec un grand verre d'eau."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span>{isArabic ? "واش التوصيل سري؟ واش الموزع كيعرف شنو كاين فالطرد؟" : "La livraison est-elle discrète ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم، التوصيل سري 100%. الطرد مغلق في كرتون محايد تماماً وبدون أي كتابة تشير لنوعية المنتج أو علامته من الخارج. الموزع لا يعلم محتواه إطلاقاً، وتتسلمه براحة وسرية تامة."
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
                  ? "نعم بالتأكيد! يمكنك فتح الطرد والتأكد من سلامة علبة Vitality Boost الأصلية وسيل الأمان قبل تسليم المبلغ نقداً للموزع. ثقتك وأمانك هما أولويتنا."
                  : "Absolument. Vous avez le droit d'ouvrir le carton et de vérifier le produit scellé avant de régler en espèces."}
              </p>
            </div>
          </div>

          {/* Quick CTA back to order form */}
          <div className="mt-12 text-center">
            <a
              href="#cod-form"
              className="btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-bronze-500 px-8 py-4 text-base font-black uppercase tracking-wider text-graphite-950 shadow-2xl hover:scale-105 transition-transform"
            >
              <span>{isArabic ? "اطلب Vitality Boost الآن (الدفع عند الاستلام)" : "Commander Vitality Boost maintenant"}</span>
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
            <p className="text-xs font-black text-white">Vitality Boost (30 caps)</p>
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
