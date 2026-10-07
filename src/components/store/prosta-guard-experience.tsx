"use client";

import { CheckCircle2, ShieldCheck, Truck, Clock3, Star, Sparkles, Moon, Zap, Eye, Lock, HelpCircle, ArrowDown } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";

export function ProstaGuardExperience() {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  return (
    <div className="border-t border-white/10 bg-[#0e1015] text-white">
      {/* 1. Trust & Reassurance Bar */}
      <section className="border-b border-white/10 bg-gradient-to-r from-bronze-950/40 via-bronze-900/20 to-bronze-950/40 py-6">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl border border-bronze-500/20 bg-white/[0.03] p-3 backdrop-blur-sm">
              <Moon className="h-6 w-6 shrink-0 text-bronze-400" />
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "نوم متواصل وهادئ" : "Sommeil ininterrompu"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "تقليل الاستيقاظ الليلي" : "Moins de réveils nocturnes"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-bronze-500/20 bg-white/[0.03] p-3 backdrop-blur-sm">
              <Zap className="h-6 w-6 shrink-0 text-bronze-400" />
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تدفق سلس ومريح" : "Flux urinaire fluide"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "بدون تقطيع ولا انزعاج" : "Sans interruption ni gêne"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-bronze-500/20 bg-white/[0.03] p-3 backdrop-blur-sm">
              <Lock className="h-6 w-6 shrink-0 text-bronze-400" />
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "تغليف سري 100%" : "Colis 100% anonyme"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "خصوصية تامة ومحكمة" : "Discrétion absolue"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-bronze-500/20 bg-white/[0.03] p-3 backdrop-blur-sm">
              <Eye className="h-6 w-6 shrink-0 text-bronze-400" />
              <div>
                <p className="text-xs font-black text-white">{isArabic ? "معاينة قبل الدفع" : "Vérification à la livraison"}</p>
                <p className="text-[11px] text-white/60">{isArabic ? "افحص طردك قبل التسليم" : "Paiement en espèces"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem vs Solution Comparison */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "الراحة التي تستحقها يومياً" : "Votre confort retrouvé au quotidien"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيف يغير Prosta Guard يومك ونومك؟"
                : "Comment Prosta Guard transforme votre quotidien ?"}
            </h2>
            <p className="mt-3 text-base text-white/70">
              {isArabic
                ? "مع التقدم في السن، يعاني العديد من الرجال بعد سن الأربعين من ضغط البروستاتا وتكرار التبول. تم تطوير Prosta Guard بتركيبة نباتية متقدمة لتوفير راحة مستمرة."
                : "Formule naturelle ciblée pour apaiser la prostate et retrouver un confort urinaire optimal sans effets secondaires."}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 border-b border-red-500/20 pb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/20 text-lg font-black text-red-400">✕</span>
                <h3 className="text-xl font-black text-red-300">
                  {isArabic ? "المعاناة اليومية قبل استعمال المنتج" : "Avant Prosta Guard : Le calvaire quotidien"}
                </h3>
              </div>
              <ul className="mt-5 space-y-3.5 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400">•</span>
                  <span>{isArabic ? "الاستيقاظ 3 إلى 5 مرات كل ليلة للتبول، مما يسبب إرهاقاً وتعباً صباحياً مزمناً." : "Réveils nocturnes répétés (3 à 5 fois par nuit) causant fatigue et épuisement."}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400">•</span>
                  <span>{isArabic ? "تدفق بولي ضعيف أو متقطع، وصعوبة في البدء مع تقطير مزعج في النهاية." : "Jet urinaire faible, hésitant ou saccadé avec gouttes retardataires."}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400">•</span>
                  <span>{isArabic ? "شعور مستمر بعدم إفراغ المثانة بشكل كامل وثقل مزعج في أسفل البطن." : "Sensation permanente de vidange incomplète et pesanteur dans le bas-ventre."}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400">•</span>
                  <span>{isArabic ? "القلق الدائم من البحث عن حمام عند الخروج أو أثناء السفر والعمل." : "Stress constant de trouver des toilettes lors des déplacements ou au travail."}</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-lg font-black text-emerald-400">✓</span>
                <h3 className="text-xl font-black text-emerald-300">
                  {isArabic ? "مع Prosta Guard بانتظام" : "Avec Prosta Guard : La liberté et le calme"}
                </h3>
              </div>
              <ul className="mt-5 space-y-3.5 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  <span>{isArabic ? "نوم عميق ومتواصل ليلة كاملة بدون تقطيع، واستيقاظ بنشاط وطاقة متجددة." : "Nuit complète et réparatrice sans réveils incessants, réveil plein d'énergie."}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  <span>{isArabic ? "تدفق طبيعي وسلس وقوي بدون أدنى مجهود أو حصر أو تقطير." : "Flux urinaire puissant, régulier et fluide sans aucune douleur."}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  <span>{isArabic ? "إفراغ مريح وتام للمثانة واسترخاء عضلات الحوض والبروستاتا." : "Vidange vésicale totale et soulagement immédiat des tensions pelviennes."}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  <span>{isArabic ? "ثقة تامة وراحة بال طوال اليوم في العمل وأثناء السفر والنشاطات اليومية." : "Confiance et sérénité absolue tout au long de la journée."}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 5 Active Botanical Ingredients */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "مكونات طبيعية 100% موثقة" : "Synergie botanique 100% naturelle"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "5 عناصر نباتية مدروسة لصحة البروستاتا"
                : "Les 5 actifs naturels de Prosta Guard"}
            </h2>
            <p className="mt-3 text-base text-white/70">
              {isArabic
                ? "تركيبة سائلة متوازنة تم اختيار مكوناتها بعناية لتقديم امتصاص فائق ونتائج ملموسة."
                : "Formule liquide concentrée assurant une biodisponibilité optimale pour une action rapide."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1. Saw Palmetto */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">01</span>
                <span className="text-xs text-bronze-400">🌿 Saw Palmetto</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "مستخلص البلميط المنشاري" : "Extrait de Saw Palmetto"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "العشبة الأولى عالمياً المعتمدة لدعم البروستاتا. تساعد على تقليل تحول التستوستيرون إلى DHT، مما يحد من احتقان وتضخم أنسجة البروستاتا ويخفف الضغط على المثانة."
                  : "L'actif végétal de référence pour freiner l'action de l'enzyme 5-alpha réductase et soulager la pression exercée sur la vessie."}
              </p>
            </div>

            {/* 2. Pygeum Africanum */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">02</span>
                <span className="text-xs text-bronze-400">🌳 Pygeum Africanum</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "لحاء الخوخ الإفريقي" : "Écorce de Pygeum Africanum"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "مستخلص نباتي إفريقي ذو فعالية مشهود لها في تخفيف الالتهابات وزيادة مرونة عنق المثانة، مما يساعد على سهولة تدفق البول واستعادة السلاسة الطبيعية."
                  : "Aide à diminuer les tensions inflammatoires prostatiques et améliore significativement la contractilité de la vessie."}
              </p>
            </div>

            {/* 3. Pumpkin Seed Oil */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">03</span>
                <span className="text-xs text-bronze-400">🌱 Huile de graines</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "زيت بذور القرع النقي" : "Huile de graines de courge"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "غني بالفيتوستيرول والأحماض الدهنية الأساسية (أوميغا). يساهم في تقوية عضلات الحوض والمثانة وتسهيل خروج البول بدون أي انزعاج أو تقطير."
                  : "Riche en phytostérols naturels et acides gras essentiels, favorise le confort mictionnel et la vigueur masculine."}
              </p>
            </div>

            {/* 4. Lycopene */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">04</span>
                <span className="text-xs text-bronze-400">🍅 Lycopène pur</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الليكوبين الطبيعي المضاد للأكسدة" : "Lycopène antioxydant"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "أحد أقوى مضادات الأكسدة التي تحمي خلايا وأنسجة البروستاتا من الإجهاد التأكسدي والالتهابات، ويحافظ على صحتها وحيويتها على المدى الطويل."
                  : "Puissant caroténoïde protecteur des cellules de la prostate contre le stress oxydatif et le vieillissement tissulaire."}
              </p>
            </div>

            {/* 5. Zinc */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/20 px-2.5 py-1 text-xs font-black text-bronze-300">05</span>
                <span className="text-xs text-bronze-400">⚡ Zinc chélaté</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "الزنك العضوي عالي الامتصاص" : "Gluconate de Zinc"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "تحتوي البروستاتا السليمة على أعلى تركيز من الزنك في جسم الرجل. يساهم في التوازن الهرموني الذكوري والحفاظ على بنية البروستاتا الطبيعية."
                  : "Minéral clé hautement concentré dans le tissu prostatique sain, contribuant à l'équilibre hormonal masculin."}
              </p>
            </div>

            {/* 6. Liquid formula advantage */}
            <div className="rounded-2xl border border-bronze-500/30 bg-bronze-500/[0.08] p-5 shadow-lg backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-lg bg-bronze-500/30 px-2.5 py-1 text-xs font-black text-bronze-300">💧</span>
                <span className="text-xs text-bronze-400">{isArabic ? "امتصاص سريع" : "Absorption rapide"}</span>
              </div>
              <h3 className="text-lg font-black text-white">
                {isArabic ? "صيغة سائلة 120 مل مع غطاء قياس" : "Formule liquide 120 ml"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {isArabic
                  ? "الصيغة السائلة تضمن وصول المكونات الفعالة إلى مجرى الدم بسرعة أكبر مقارنة بالحبوب الجافة، وسهلة البلع بدون أي صعوبة."
                  : "Absorption supérieure et assimilation accélérée grâce à la forme liquide concentrée avec bouchon doseur précis."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline of Expected Results */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "تدرج ملموس في التحسن" : "Chronologie des résultats"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "ماذا تتوقع خلال الأسابيع الأولى؟"
                : "Les étapes clés de votre amélioration"}
            </h2>
            <p className="mt-3 text-base text-white/70">
              {isArabic
                ? "نتائج تراكمية مستمرة تبدأ من الأيام الأولى وتتعزز مع المواظبة على الكورس."
                : "Des résultats progressifs et durables dès les premières semaines d'utilisation régulière."}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bronze-500/20 text-bronze-400 font-black">
                1
              </div>
              <h3 className="mt-4 text-base font-black text-white">{isArabic ? "الأسبوع 1: هدوء وراحة أولية" : "Semaine 1 : Soulagement initial"}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "انخفاض الشعور بالحصر والانزعاج، وبداية استرخاء عضلات الحوض والمثانة."
                  : "Diminution des sensations de tiraillement et détente des muscles vésicaux."}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bronze-500/20 text-bronze-400 font-black">
                2
              </div>
              <h3 className="mt-4 text-base font-black text-white">{isArabic ? "الأسبوع 2: انخفاض الاستيقاظ الليلي" : "Semaine 2 : Moins de réveils"}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "تراجع عدد مرات الاستيقاظ ليلاً للتبول (من 4 مرات إلى مرة واحدة)، ونوم أعمق وأكثر راحة."
                  : "Réduction nette des levers nocturnes, sommeil plus réparateur et continu."}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bronze-500/20 text-bronze-400 font-black">
                3
              </div>
              <h3 className="mt-4 text-base font-black text-white">{isArabic ? "الأسبوع 3 - 4: تدفق قوي وسلس" : "Semaine 3-4 : Jet fluide & puissant"}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "استعادة قوة وسلاسة تدفق البول الطبيعي، واختفاء التقطير المزعج والشعور بالحصر."
                  : "Débit urinaire régulier et facile, vidange complète sans gouttes retardataires."}
              </p>
            </div>
            <div className="rounded-2xl border border-bronze-500/30 bg-bronze-500/10 p-5 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bronze-500 text-graphite-950 font-black">
                ✓
              </div>
              <h3 className="mt-4 text-base font-black text-bronze-300">{isArabic ? "كورس شهرين إلى 3: راحة وثبات" : "Cure 2-3 mois : Confort durable"}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {isArabic
                  ? "حماية وقائية مستمرة لأنسجة البروستاتا والحفاظ على راحة يومية وحيوية دائمة."
                  : "Stabilisation des bienfaits et protection prostatique à long terme."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3-Step Simple COD Ordering & Delivery Guarantee */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-300">
              {isArabic ? "سهولة وأمان تام في كل خطوة" : "Processus 100% sécurisé et transparent"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic
                ? "كيف تسير عملية الطلب والتسليم؟"
                : "Comment se déroule votre commande ?"}
            </h2>
            <p className="mt-3 text-base text-white/70">
              {isArabic
                ? "3 خطوات واضحة ومباشرة بدون أي تعقيد أو دفع إلكتروني مسبق."
                : "Simple, discret et sans aucun paiement en ligne préalable."}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bronze-500/20 text-bronze-400 font-black text-xl">
                1
              </div>
              <h3 className="mt-4 text-lg font-black text-white">
                {isArabic ? "أدخل بياناتك في الاستمارة" : "Remplissez le formulaire"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "اختر الباك المناسب لك (علبة، علبتان، أو 3 علب) وأدخل اسمك، هاتفك وعنوانك. لا تدفع أي شيء الآن."
                  : "Choisissez votre pack et indiquez vos coordonnées. Aucun paiement par carte bancaire requis."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bronze-500/20 text-bronze-400 font-black text-xl">
                2
              </div>
              <h3 className="mt-4 text-lg font-black text-white">
                {isArabic ? "مكالمة هاتفية سريعة للتأكيد" : "Appel rapide de confirmation"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "يتصل بك مستشارنا الهاتفي باحترام لتأكيد العنوان وموعد التسليم الأنسب لك والإجابة عن أي استفسار قبل شحن الطرد."
                  : "Notre équipe vous appelle pour valider l'adresse et le créneau idéal de livraison avant l'envoi."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bronze-500/20 text-bronze-400 font-black text-xl">
                3
              </div>
              <h3 className="mt-4 text-lg font-black text-white">
                {isArabic ? "طرد سري والدفع عند المعاينة" : "Colis discret & paiement sur place"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {isArabic
                  ? "يصلك الطرد في علبة سرية محكمة بدون أي إشارة محرجة من الخارج. يمكنك فتح ومعاينة الطرد ثم الدفع نقداً للموزع."
                  : "Livraison sous 24-48h dans un colis totalement neutre. Vous vérifiez le produit et payez le livreur en espèces."}
              </p>
            </div>
          </div>

          {/* Discreet Packaging Banner */}
          <div className="mt-8 rounded-2xl border border-bronze-500/30 bg-gradient-to-r from-bronze-950/60 via-bronze-900/40 to-bronze-950/60 p-6 backdrop-blur-md">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-bronze-500/20 text-3xl">
                📦
              </div>
              <div>
                <h4 className="text-lg font-black text-white">
                  {isArabic ? "ضمان الخصوصية والسرية التامة 100%" : "Garantie de discrétion absolue 100%"}
                </h4>
                <p className="mt-1 text-sm text-white/70">
                  {isArabic
                    ? "نحترم خصوصيتك بالكامل. جميع شحناتنا ترسل في عبوات كرتونية بنية محايدة مغلقة بإحكام، لا يظهر اسم المنتج أو علامة ROVANX من الخارج لحفظ سرية طلبك أمام العائلة أو في العمل."
                    : "Emballage carton totalement neutre sans mention du nom du produit ni de sa nature pour protéger votre intimité."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="section py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border-bronze-400/30 bg-bronze-500/10 text-xs font-bold text-bronze-300">
              {isArabic ? "إجابات مباشرة وواضحة" : "Foire aux questions"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              {isArabic ? "الأسئلة الأكثر طرحاً حول Prosta Guard" : "Questions fréquentes sur Prosta Guard"}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-bronze-400 shrink-0" />
                <span>{isArabic ? "واش هاد المنتج فيه مواد كيميائية أو أدوية؟" : "Est-ce un produit chimique ou un médicament ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "لا، Prosta Guard مكمل غذائي طبيعي 100% مستخلص من نباتات وزيوت طبيعية نقية (Saw Palmetto، البيجيوم، زيت القرع، زنك، ليكوبين). خالٍ تماماً من أي مواد كيميائية أو منشطات، وليس له أي تأثيرات جانبية غير مرغوبة."
                  : "Non, c'est un complément alimentaire 100% naturel élaboré selon les normes de qualité sans additifs chimiques nocifs."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-bronze-400 shrink-0" />
                <span>{isArabic ? "شحال من علبة خاصني ناخد باش تبان نتيجة مستقرة؟" : "Combien de boîtes pour un résultat stable ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "الراحة الأولية تبدأ من الأسبوعين الأولين. وللحصول على نتيجة ثابتة ووقاية طويلة الأمد، نوصي بكورس علبتين (شهرين) أو 3 علب (3 أشهر)، وهو الخيار الأكثر طلباً وتوفيراً مع توصيل مجاني."
                  : "Un premier soulagement se fait sentir dès 2 semaines. Pour un résultat durable, la cure recommandée est de 2 à 3 boîtes."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-bronze-400 shrink-0" />
                <span>{isArabic ? "واش التوصيل سري؟ واش الموزع كيعرف شنو كاين فالطرد؟" : "La livraison est-elle discrète ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم، التوصيل سري 100%. الطرد مغلق في كرتون محايد تماماً والموزع لا يعلم محتواه إطلاقاً، وتتسلمه براحة وسرية تامة."
                  : "Oui, livraison 100% discrète dans un colis scellé sans mention visible du contenu."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-bronze-400 shrink-0" />
                <span>{isArabic ? "كيفاش كنستعمل المنتج؟" : "Comment utiliser Prosta Guard ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "طريقة الاستعمال بسيطة جداً: تأخذ 5 مل يومياً باستخدام غطاء القياس المرفق بعد وجبة الإفطار أو الغداء مع كأس كبير من الماء. ترج العبوة جيداً قبل الاستعمال."
                  : "Prendre 5 ml par jour à l'aide du bouchon doseur fourni, après le repas, avec un grand verre d'eau. Bien agiter avant emploi."}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="flex items-center gap-2 text-base font-black text-white">
                <HelpCircle size={18} className="text-bronze-400 shrink-0" />
                <span>{isArabic ? "واش نقدر نفحص الطرد قبل ما نخلص؟" : "Puis-je vérifier le colis avant de payer ?"}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 ps-6">
                {isArabic
                  ? "نعم بالتأكيد! يمكنك فتح الطرد الخارجي والتأكد من سلامة علبة Prosta Guard الأصلية قبل تسليم المبلغ نقداً لموزع الأمانة."
                  : "Absolument. Vous avez le droit d'ouvrir le carton et de vérifier le produit avant de remettre l'argent au livreur."}
              </p>
            </div>
          </div>

          {/* Quick CTA back to order form */}
          <div className="mt-10 text-center">
            <a
              href="#cod-form"
              className="btn btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-black uppercase tracking-wider shadow-xl hover:scale-105 transition-transform"
            >
              <span>{isArabic ? "اطلب Prosta Guard الآن (الدفع عند الاستلام)" : "Commander Prosta Guard maintenant"}</span>
              <ArrowDown size={18} />
            </a>
            <p className="mt-2 text-xs text-white/60">
              {isArabic ? "توصيل سريع مجاني للباك الثنائي والثلاثي | الدفع نقداً بعد المعاينة" : "Livraison gratuite sur les packs 2 et 3 flacons | Paiement à la réception"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
