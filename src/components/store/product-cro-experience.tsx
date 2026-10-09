"use client";

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
  Flame,
  Activity,
  HeartPulse,
  Award,
  Layers,
  Droplet
} from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import { ProstaGuardExperience } from "@/components/store/prosta-guard-experience";
import { VitalityBoostExperience } from "@/components/store/vitality-boost-experience";
import { VitalityUltraExperience } from "@/components/store/vitality-ultra-experience";
import { TestoDriveExperience } from "@/components/store/testo-drive-experience";

interface CROConfig {
  trustItems: { icon: any; titleAr: string; titleFr: string; subAr: string; subFr: string }[];
  headlineAr: string;
  headlineFr: string;
  subheadlineAr: string;
  subheadlineFr: string;
  comparison: {
    beforeAr: string[];
    beforeFr: string[];
    afterAr: string[];
    afterFr: string[];
  };
  ingredients: {
    nameAr: string;
    nameFr: string;
    roleAr: string;
    roleFr: string;
    descAr: string;
    descFr: string;
    badgeAr: string;
    badgeFr: string;
  }[];
  timeline: {
    phaseAr: string;
    phaseFr: string;
    timeAr: string;
    timeFr: string;
    descAr: string;
    descFr?: string;
  }[];
  faqs: { qAr: string; qFr: string; aAr: string; aFr: string }[];
}

const CRO_EXPERIENCES: Record<string, CROConfig> = {
  // 1. Vitality Ultra (60 capsules)
  "rovanx-vitality-60": {
    trustItems: [
      {
        icon: Flame,
        titleAr: "صلابة وزيادة ملحوظة فالحجم",
        titleFr: "Fermeté & Gain de Volume",
        subAr: "تمدد الأنسجة وتدفق دموي كثيف",
        subFr: "Afflux sanguin maximal et expansion"
      },
      {
        icon: HeartPulse,
        titleAr: "إمتاع وإسعاد الزوجة ديالك",
        titleFr: "Plaisir & Harmonie du couple",
        subAr: "علاقة حميمية ممتعة ومرضية للطرفين",
        subFr: "Satisfaction mutuelle assurée"
      },
      {
        icon: Lock,
        titleAr: "تغليف سري 100%",
        titleFr: "Colis 100% anonyme",
        subAr: "طرد مغلق بإحكام بدون إحراج",
        subFr: "Discrétion absolue et colis scellé"
      },
      {
        icon: Eye,
        titleAr: "معاينة قبل الدفع",
        titleFr: "Vérifiez avant de payer",
        subAr: "افحص علبتك مع موزع الطلبية",
        subFr: "Contrôlez le colis avec le livreur"
      }
    ],
    headlineAr: "استرجع فحولتك، صلابتك وزيادة الحجم.. باش تمتع الزوجة ديالك فالعلاقة الحميمية ديالكم وتعيشو أسعد اللحظات",
    headlineFr: "Retrouvez puissance, fermeté et gain de volume pour combler votre partenaire",
    subheadlineAr: "تركيبة طبيعية فائقة القوة صُممت خصيصاً لتعزيز الصلابة، تمدد الأنسجة وزيادة الحجم والسمك، والتحكم المستمر باش تمتع الزوجة ديالك وتخليها راضية وفرحانة بيك في كل لقاء حميمي.",
    subheadlineFr: "Une formule naturelle concentrée (Ginseng rouge, Maca, Tongkat Ali, Zinc) pour une expansion tissulaire, fermeté maximale et épanouissement intime absolu.",
    comparison: {
      beforeAr: [
        "تراجع الصلابة وصغر الحجم عند الانتصاب مع ارتخاء سريع قبل إشباع رغبة الزوجة",
        "عدم إحساس الزوجة بالامتلاء الكافي وسرعة القذف اللي كتسبب إحراج ونقص فالثقة",
        "تأثير ضغوط العمل والتعب اليومي على الرغبة الحميمية والبرود بين الزوجين",
        "خوف دائم وقلق نفسي يفسد عليك وعلى الزوجة ديالك الاستمتاع بالعلاقة"
      ],
      beforeFr: [
        "Baisse de fermeté, volume réduit et fatigue rapide avant d'avoir comblé votre partenaire",
        "Manque de plénitude ressenti par la partenaire et frustration au moment intime",
        "Impact du stress et de la fatigue du travail sur le désir et la libido",
        "Pression psychologique gâchant le plaisir partagé dans le couple"
      ],
      afterAr: [
        "انتصاب كامل وزيادة ملحوظة فالسمك والطول (ضخامة كتحس بيها الزوجة ديالك فوراً)",
        "صلابة حديدية واستمرارية قوية باش تمتع الزوجة ديالك وتوصلها لأعلى درجات النشوة",
        "تحكم كامل وقدرة على إطالة وقت العلاقة وتكرارها بكل نشاط وبدون عياء",
        "استعادة الثقة والرجولة الكاملة وتجديد مشاعر الحب والشغف بين الزوجين"
      ],
      afterFr: [
        "Érection complète et gain visible en circonférence et longueur ressenti immédiatement par la partenaire",
        "Fermeté maximale et endurance prolongée pour combler pleinement votre couple",
        "Maîtrise totale et capacité de prolonger l'acte avec vitalité et sans fatigue",
        "Confiance et virilité absolue renouvelant la flamme et l'harmonie intime"
      ]
    },
    ingredients: [
      {
        nameAr: "الجينسينغ الكوري الأحمر (Panax Ginseng)",
        nameFr: "Ginseng Rouge Coréen",
        roleAr: "توسيع الأنسجة وزيادة الحجم والسمك",
        roleFr: "Expansion tissulaire & Afflux sanguin",
        descAr: "يحفز إنتاج أكسيد النيتريك لتوسيع الغرف الإسفنجية في القضيب، مما يتيح استيعاب تدفق دموي كثيف يعطي انتصاباً أضخم، أطول، وأكثر سمكاً وصلابة.",
        descFr: "Stimule l'oxyde nitrique pour dilater les corps caverneux, permettant une rétention sanguine maximale pour un volume et une fermeté accrus.",
        badgeAr: "مستخلص نقي",
        badgeFr: "Extrait pur"
      },
      {
        nameAr: "الماكا البيروفية النقية (Lepidium Meyenii)",
        nameFr: "Maca Péruvienne",
        roleAr: "طاقة وتحمل مستمر لإسعاد شريكة الحياة",
        roleFr: "Endurance & Vigueur",
        descAr: "نبتة جبال الأنديز الشهيرة التي ترفع القدرة البدنية وتمنحك النفس الطويل للتحكم وإمتاع الزوجة ديالك بدون تعب.",
        descFr: "Racine andine légendaire augmentant la résistance physique et le souffle pour durer sans faiblir.",
        badgeAr: "تركيز عالي",
        badgeFr: "Haute concentration"
      },
      {
        nameAr: "تونغكات علي (Tongkat Ali)",
        nameFr: "Tongkat Ali (Eurycoma)",
        roleAr: "تعزيز هرمون الذكورة والفحولة الطبيعية",
        roleFr: "Testostérone & Virilité",
        descAr: "عشبة تقليدية فعالة في تعزيز مستويات النشاط الذكوري الطبيعي وبناء قوة وصلابة حقيقية في اللحظات المهمة.",
        descFr: "Plante ancestrale soutenant les niveaux naturels de testostérone et la puissance masculine.",
        badgeAr: "أصلي 100%",
        badgeFr: "100% Authentique"
      },
      {
        nameAr: "غلوكونات الزنك وحبوب لقاح النخيل وغذاء الملكات",
        nameFr: "Zinc, Pollen de Palmier & Gelée Royale",
        roleAr: "خصوبة وقوة وتجديد الرغبة الحميمية",
        roleFr: "Vitalité séminale & Désir",
        descAr: "مغذيات حيوية تعزز توازن الهرمونات وتضمن سرعة الاسترجاع للقدرة على تكرار العلاقة بدون إرهاق.",
        descFr: "Synergie d'oligo-éléments et nutriments nobles pour une régénération rapide entre les rapports.",
        badgeAr: "توافر حيوي عالي",
        badgeFr: "Haute biodisponibilité"
      }
    ],
    timeline: [
      {
        phaseAr: "المرحلة الأولى: يقظة ورغبة متجددة",
        phaseFr: "Phase 1 : Éveil & Désir",
        timeAr: "الأيام 1 - 7",
        timeFr: "Jours 1 à 7",
        descAr: "تدفق نشاط وحرارة دافئة في الجسم، انتصاب صباحي قوي وارتفاع ملحوظ في الرغبة الحميمية."
      },
      {
        phaseAr: "المرحلة الثانية: صلابة وبداية زيادة الامتلاء والسمك",
        phaseFr: "Phase 2 : Fermeté & Volume",
        timeAr: "الأسبوع 2 - 3",
        timeFr: "Semaines 2 à 3",
        descAr: "صلابة حديدية مع زيادة ملموسة فالسمك والامتلاء عند الانتصاب كتحس بيها الزوجة ديالك فكل إيلاج مع تحكم أطول فالعلاقة."
      },
      {
        phaseAr: "المرحلة الثالثة: ضخامة الحجم، تحكم كامل وسعادة زوجية دائمة",
        phaseFr: "Phase 3 : Épanouissement Total",
        timeAr: "الشهر 1 - 2",
        timeFr: "Mois 1 à 2",
        descAr: "تمدد كامل للأنسجة واستقرار ملحوظ في الحجم والسمك والصلابة، مع متعة قصوى ورضا تام لشريكة الحياة."
      }
    ],
    faqs: [
      {
        qAr: "واش Vitality Ultra كيساعد فعلاً فزيادة حجم وسمك القضيب؟",
        qFr: "Vitality Ultra aide-t-il vraiment à augmenter la taille et le volume ?",
        aAr: "نعم! المكونات الفعالة كالجينسينغ الأحمر الكوري، تونغكات علي، والماكا تعمل على تعزيز تدفق الدم وتوسيع الغرف الإسفنجية للأنسجة الكهفية، مما يعطي امتلاءً أقصى يترجم إلى زيادة حقيقية وملموسة فالسمك والطول أثناء الانتصاب كتحس بيها الزوجة ديالك بوضوح.",
        aFr: "Oui ! Les principes actifs stimulent la microcirculation et l'expansion des corps caverneux, permettant une réplétion sanguine maximale qui se traduit par un gain net de circonférence et de fermeté ressenti par votre partenaire."
      },
      {
        qAr: "واش كيعاون فعلاً باش نمتع الزوجة ديالي ونطول فالعلاقة؟",
        qFr: "Aide-t-il vraiment à combler ma partenaire et durer plus longtemps ?",
        aAr: "نعم بكل تأكيد! المكونات الفعالة تعمل على تقوية ضخ الدم وتحسين القدرة على التحكم، مما يمنحك الوقت الكافي والاستمرارية باش تمتع الزوجة ديالك وتوصلها للنشوة والمتعة الكاملة.",
        aFr: "Oui absolument ! Les principes actifs agissent en synergie pour stimuler l'afflux sanguin et prolonger l'endurance afin d'apporter une pleine satisfaction à votre partenaire."
      },
      {
        qAr: "واش فيه أي مواد كيميائية أو آثار جانبية؟",
        qFr: "Y a-t-il des effets secondaires ?",
        aAr: "لا، المنتج مكون من مستخلصات نباتية ومعادن وفيتامينات طبيعية 100% بدون أي مواد محظورة أو خفقان للقلب.",
        aFr: "Non, formule 100% naturelle à base d'extraits de plantes, vitamines et minéraux sans effets indésirables."
      },
      {
        qAr: "واش التغليف كيكون سري ومحكم؟",
        qFr: "La livraison est-elle discrète ?",
        aAr: "نعم سرية تامة 100%! طرد كرتوني سري ومحكم بدون أي اسم محرج من الخارج، ويحق لك فحصه والتأكد من العلبة قبل الدفع للموزع.",
        aFr: "Oui, colis scellé et totalement anonyme sans mention extérieure. Vous vérifiez le contenu avant de payer le livreur."
      }
    ]
  },

  // 2. Vitality Boost (30 capsules)
  "rovanx-vitality-30": {
    trustItems: [
      {
        icon: Zap,
        titleAr: "جرعة نشاط سريعة",
        titleFr: "Boost d'énergie rapide",
        subAr: "تنشيط فوري للجسم والعقل",
        subFr: "Tonus immédiat corps & esprit"
      },
      {
        icon: Flame,
        titleAr: "ماكا وجينسينغ وتريبولوس",
        titleFr: "Maca, Ginseng & Tribulus",
        subAr: "تركيبة ثلاثية مركزة",
        subFr: "Synergie active concentrée"
      },
      {
        icon: Lock,
        titleAr: "تغليف سري ومحكم",
        titleFr: "Colis 100% anonyme",
        subAr: "أمان وخصوصية تامة",
        subFr: "Discrétion absolue garantie"
      },
      {
        icon: Eye,
        titleAr: "معاينة قبل الدفع",
        titleFr: "Vérifiez avant de payer",
        subAr: "افحص علبتك مع موزع الطلبية",
        subFr: "Contrôlez le colis avec le livreur"
      }
    ],
    headlineAr: "الانطلاقة المثالية لمحاربة العياء والكسل واستعادة النشاط اليومي",
    headlineFr: "La formule tonifiante pour dynamiser votre quotidien",
    subheadlineAr: "عبوة 30 كبسولة مركّزة تمنحك الدفعة اليومية للتركيز، القوة، والحيوية المطلوبة في أيام العمل الصعبة.",
    subheadlineFr: "30 capsules concentrées pour affronter vos journées chargées avec vitalité et clarté.",
    comparison: {
      beforeAr: [
        "كسل وثقل فالحركة فالصباح وصعوبة فالبدء بنشاط",
        "تراجع القدرة على مواصلة المهام بعد وجبة الغداء",
        "إرهاق بدني ملحوظ وتوتر مستمر"
      ],
      beforeFr: [
        "Réveil difficile et sensation de lourdeur matinale",
        "Coup de pompe systématique après le déjeuner",
        "Épuisement physique et baisse de dynamisme"
      ],
      afterAr: [
        "نشاط وانتعاش فوري يساعدك على بدء يومك بكل قوة",
        "طاقة مستمرة بدون هبوط مفاجئ طول النهار",
        "قدرة عالية على التحمل وإنجاز المهام براحة تامة"
      ],
      afterFr: [
        "Vitalité immédiate pour attaquer la journée",
        "Énergie continue sans coup de fatigue",
        "Endurance optimale face aux journées denses"
      ]
    },
    ingredients: [
      {
        nameAr: "خلاصة الماكا البيروفية",
        nameFr: "Extrait de Maca",
        roleAr: "طاقة طبيعية مستدامة",
        roleFr: "Énergie durable",
        descAr: "تدعم القوة البدنية وتقلل من الشعور بالإجهاد المزمن.",
        descFr: "Soutient la vigueur physique et réduit l'épuisement.",
        badgeAr: "طبيعي 100%",
        badgeFr: "100% Naturel"
      },
      {
        nameAr: "الجينسينغ الأحمر الكوري",
        nameFr: "Ginseng Rouge",
        roleAr: "تنبيه ذهني ونشاط بدني",
        roleFr: "Focus & Tonus",
        descAr: "يعزز تدفق الدم ويساعد الدماغ على التركيز والتغلب على الضغوط.",
        descFr: "Améliore la clarté mentale et combat le stress oxydatif.",
        badgeAr: "مستخلص معتق",
        badgeFr: "Extrait vieilli"
      },
      {
        nameAr: "التريبولوس (Tribulus Terrestris)",
        nameFr: "Tribulus Terrestris",
        roleAr: "قوة وحيوية ذكورية",
        roleFr: "Vigueur masculine",
        descAr: "يدعم النشاط الهرموني الطبيعي ويعزز التحمل البدني.",
        descFr: "Soutient la vitalité et l'endurance masculine.",
        badgeAr: "مركز",
        badgeFr: "Concentré"
      }
    ],
    timeline: [
      {
        phaseAr: "الأيام 1 - 5",
        phaseFr: "Jours 1 à 5",
        timeAr: "بداية المفعول",
        timeFr: "Premiers effets",
        descAr: "إحساس بالخفة وزوال ثقل الصباح واستقرار طاقة اليوم."
      },
      {
        phaseAr: "الأسبوع 2 - 3",
        phaseFr: "Semaines 2 à 3",
        timeAr: "تثبيت النشاط",
        timeFr: "Consolidation",
        descAr: "تحسن ملحوظ في التركيز والقدرة على مواصلة العمل والرياضة بدون تعب."
      }
    ],
    faqs: [
      {
        qAr: "شنو الفرق بين Vitality Boost و Vitality Ultra؟",
        qFr: "Quelle différence avec Vitality Ultra ?",
        aAr: "Vitality Boost (30 كبسولة) هو تجربة أولى سريعة ومثالية، بينما Vitality Ultra (60 كبسولة) يحتوي على تركيبة أغنى (تونغكات علي، غذاء ملكات النحل) لكورس متكامل يدوم شهرين.",
        aFr: "Boost (30 caps) est le format découverte dynamique, tandis qu'Ultra (60 caps) offre une formule renforcée (Tongkat Ali, Gelée Royale) pour une cure approfondie."
      },
      {
        qAr: "واش نقدر نفحص الطرد قبل ما نخلص؟",
        qFr: "Puis-je vérifier le colis ?",
        aAr: "نعم بكل تأكيد، لك كامل الحق في فتح وفحص الطرد والتأكد من العلبة قبل دفع ثمنها للموزع.",
        aFr: "Oui absolument, vous contrôlez votre colis avant de régler la commande."
      }
    ]
  },

  // 3. Royal Force (rovanx-maca-max)
  "rovanx-maca-max": {
    trustItems: [
      {
        icon: Flame,
        titleAr: "قوة وتحمل استثنائي",
        titleFr: "Force & Puissance",
        subAr: "أداء وحيوية ذكورية متجددة",
        subFr: "Performance & vigueur masculine"
      },
      {
        icon: Award,
        titleAr: "ماكا سوداء مركزة 100%",
        titleFr: "Maca Noire Concentrée",
        subAr: "أعلى نقاوة وجودة معتمدة",
        subFr: "Pureté et concentration maximale"
      },
      {
        icon: Lock,
        titleAr: "تغليف سري ومحكم 100%",
        titleFr: "Discrétion totale 100%",
        subAr: "بدون أي إحراج أو علامات خارجية",
        subFr: "Colis neutre sans mention embarrassante"
      },
      {
        icon: Eye,
        titleAr: "معاينة قبل الدفع",
        titleFr: "Vérifiez avant de payer",
        subAr: "افحص علبتك مع موزع الطلبية",
        subFr: "Vérifiez votre colis avec le livreur"
      }
    ],
    headlineAr: "القوة الرجالية الخالصة.. استعد طاقتك وثقتك وأداءك الطبيعي",
    headlineFr: "La force masculine à l'état pur : puissance, endurance et vitalité",
    subheadlineAr: "تركيبة الماكا البيروفية المركزة مع التريبولوس والجينسينغ والزنك لتعزيز التحمل، الحيوية، والصلابة.",
    subheadlineFr: "Formule premium associant Maca concentrée, Tribulus et Zinc pour une virilité et un tonus exceptionnels.",
    comparison: {
      beforeAr: [
        "نقص فالحيوية وتراجع القدرة والتحمل خلال اللحظات المهمة",
        "إحساس بالإرهاق السريع وفقدان الثقة فالنفس",
        "تأثير سلبي للإجهاد اليومي وضغوط العمل على الطاقة الذكورية"
      ],
      beforeFr: [
        "Baisse d'énergie et d'endurance lors des moments clés",
        "Fatigue rapide et perte de confiance en soi",
        "Impact négatif du stress quotidien sur la vitalité intime"
      ],
      afterAr: [
        "تحمل عالي وطاقة وقوة بدنية متدفقة",
        "استعادة كامل الثقة والراحة والشعور بالحيوية المستمرة",
        "تركيبة طبيعية 100% بدون أي مواد كيميائية أو خفقان"
      ],
      afterFr: [
        "Endurance renforcée et puissance naturelle décuplée",
        "Confiance absolue et vitalité masculine au sommet",
        "Formule 100% saine sans aucun effet indésirable"
      ]
    },
    ingredients: [
      {
        nameAr: "خلاصة الماكا البيروفية المركزة",
        nameFr: "Extrait Pur de Maca",
        roleAr: "محفز طبيعي للقدرة والتحمل",
        roleFr: "Booster naturel de vigueur",
        descAr: "تغذي الجسم بالعناصر النادرة وترفع مستويات الطاقة والرغبة الطبيعية.",
        descFr: "Nourrit l'organisme en oligo-éléments et stimule la vitalité intime.",
        badgeAr: "أعلى تركيز",
        badgeFr: "Ultra-concentré"
      },
      {
        nameAr: "خلاصة التريبولوس تيريستريس",
        nameFr: "Tribulus Terrestris",
        roleAr: "دعم التستوستيرون الطبيعي",
        roleFr: "Soutien testostérone naturelle",
        descAr: "يعزز الصلابة والقوة العضلية والأداء الرجالي بدون أي منبهات ضارة.",
        descFr: "Favorise la fermeté, la force musculaire et l'endurance.",
        badgeAr: "قياسي 90%",
        badgeFr: "Standardisé 90%"
      },
      {
        nameAr: "الزنك المخلبي وفيتامينات B6/B12",
        nameFr: "Zinc & Vitamines B",
        roleAr: "الخصوبة وصحة الجهاز التناسلي",
        roleFr: "Fertilité & Vigueur",
        descAr: "معدن الزنك أساسي لإنتاج الهرمونات الذكورية والحفاظ على جودة الحيوانات المنوية.",
        descFr: "Minéral clé pour le maintien d'un taux normal de testostérone.",
        badgeAr: "معدن أساسي",
        badgeFr: "Minéral clé"
      }
    ],
    timeline: [
      {
        phaseAr: "الأيام الأولى (1-7)",
        phaseFr: "Jours 1 à 7",
        timeAr: "تنشيط فوري",
        timeFr: "Activation",
        descAr: "ارتفاع ملحوظ في مستوى الطاقة والحرارة الحيوية والنشاط."
      },
      {
        phaseAr: "الأسبوع 2 - 4",
        phaseFr: "Semaines 2 à 4",
        timeAr: "قوة وتحمل مستقر",
        timeFr: "Puissance stabilisée",
        descAr: "صلابة ممتازة، قدرة تحمل عالية، وثقة مطلقة فالنفس."
      }
    ],
    faqs: [
      {
        qAr: "واش كاين سرية فالتوصيل؟",
        qFr: "La livraison est-elle discrète ?",
        aAr: "نعم 100%. الطرد كرتوني مقفل بدون أي اسم للمنتج أو أي إشارة لمحتواه، ويتم تسليمه لك شخصياً في يدك بكل احترام.",
        aFr: "Oui à 100%. Colis complètement anonyme et scellé, remis en main propre en toute discrétion."
      },
      {
        qAr: "واش النتيجة كتبقى حتى بعد انتهاء الكورس؟",
        qFr: "Les effets durent-ils après la cure ?",
        aAr: "نعم، لأن الماكا والزنك يقومان بتغذية الجسم ودعم الهرمونات طبيعياً وليس مجرد مفعول مؤقت كيميائي.",
        aFr: "Oui, la formule nourrit l'organisme en profondeur et rééquilibre la vitalité masculine durablement."
      }
    ]
  },

  // 4. Testo Drive (rovanx-ginseng)
  "rovanx-ginseng": {
    trustItems: [
      {
        icon: Flame,
        titleAr: "طاقة جينسينغ أحمر كوري",
        titleFr: "Ginseng Rouge Coréen",
        subAr: "المعتق لأعلى فاعلية ونشاط",
        subFr: "Vieilli pour un tonus optimal"
      },
      {
        icon: Zap,
        titleAr: "مقاومة الإجهاد والضغط",
        titleFr: "Anti-stress & Endurance",
        subAr: "عشبة الروديولا المتكيفة",
        subFr: "Plante adaptogène Rhodiola"
      },
      {
        icon: Lock,
        titleAr: "تغليف سري 100%",
        titleFr: "Colis 100% anonyme",
        subAr: "خصوصية تامة ومحكمة",
        subFr: "Discrétion absolue"
      },
      {
        icon: Eye,
        titleAr: "معاينة قبل الدفع",
        titleFr: "Vérifiez avant de payer",
        subAr: "افحص علبتك مع الموزع",
        subFr: "Vérification avec le livreur"
      }
    ],
    headlineAr: "الجينسينغ الأحمر الكوري.. الطاقة البدنية والذهنية التي لا تنفد",
    headlineFr: "Le Ginseng Rouge Coréen : vitalité physique et mentale inépuisable",
    subheadlineAr: "تركيبة حيوية تجمع بين الجينسينغ الأحمر المعتق والروديولا والزنك لدعم القوة، المقاومة، وصفاء الذهن.",
    subheadlineFr: "Association puissante de Ginseng rouge, Rhodiola et Zinc pour stimuler la résistance physique et mentale.",
    comparison: {
      beforeAr: [
        "إرهاق عصبي وتأثير ضغوط العمل على المزاج والطاقة",
        "خمول بدني وصعوبة ممارسة الرياضة بعد يوم العمل",
        "تراجع المناعة والحيوية العامة"
      ],
      beforeFr: [
        "Épuisement nerveux et impact du stress sur l'humeur",
        "Lourdeur physique et manque d'entrain après le travail",
        "Baisse générale de résistance et d'immunité"
      ],
      afterAr: [
        "نشاط متقد وثابت وهدوء عصبي أمام الضغوط",
        "قوة بدنية وتحمل لممارسة الرياضة والعمل بكل نشاط",
        "حيوية وقوة مناعية عالية وطاقة إيجابية"
      ],
      afterFr: [
        "Tonus dynamique et calme nerveux face au stress",
        "Force physique et motivation sportive retrouvées",
        "Résistance accrue et vitalité globale renforcée"
      ]
    },
    ingredients: [
      {
        nameAr: "خلاصة الجينسينغ الأحمر الكوري (Panax Ginseng 6 Ans)",
        nameFr: "Ginseng Rouge Coréen (6 ans)",
        roleAr: "منشط عام ومقاوم للإجهاد",
        roleFr: "Tonifiant physique & mental",
        descAr: "غني بالجينسينوسيدات التي تنشط الدورة الدموية وتزيد من تدفق الطاقة في كافة أجهزة الجسم.",
        descFr: "Riche en ginsénosides bioactifs stimulant l'énergie cellulaire.",
        badgeAr: "معتق 6 سنوات",
        badgeFr: "Vieilli 6 ans"
      },
      {
        nameAr: "خلاصة الروديولا الوردية (Rhodiola Rosea)",
        nameFr: "Rhodiola Rosea",
        roleAr: "عشبة التكيف ومحاربة التوتر",
        roleFr: "Adaptogène anti-fatigue",
        descAr: "تحمي الجهاز العصبي من الإرهاق وتمنحك هدوءاً وتركيزاً حاداً حتى في أصعب الظروف.",
        descFr: "Protège le système nerveux et optimise les fonctions cognitives.",
        badgeAr: "متكيف طبيعي",
        badgeFr: "Adaptogène pur"
      },
      {
        nameAr: "الزنك وفيتامينات B1, B2, B6",
        nameFr: "Zinc & Vitamines B",
        roleAr: "توليد الطاقة العضلية والذهنية",
        roleFr: "Soutien métabolique",
        descAr: "تضمن تحويل الكربوهيدرات والبروتينات إلى طاقة مستمرة وتدعم قوة العضلات.",
        descFr: "Transforme les nutriments en énergie disponible pour l'effort.",
        badgeAr: "مركب متكامل",
        badgeFr: "Complexe complet"
      }
    ],
    timeline: [
      {
        phaseAr: "الأسبوع الأول",
        phaseFr: "Semaine 1",
        timeAr: "اليقظة والنشاط",
        timeFr: "Éveil & Clarté",
        descAr: "زوال التعب الصباحي وإحساس فوري بالنشاط والتركيز الذهني."
      },
      {
        phaseAr: "الأسابيع 2 - 4",
        phaseFr: "Semaines 2 à 4",
        timeAr: "المقاومة القصوى",
        timeFr: "Résistance Maximale",
        descAr: "زيادة واضحة في قوة التحمل العضلي ومقاومة الإجهاد طوال اليوم."
      }
    ],
    faqs: [
      {
        qAr: "واش كيرفع ضغط الدم؟",
        qFr: "Augmente-t-il la tension artérielle ?",
        aAr: "لا، الجينسينغ الأحمر المعتق بتراكيز متوازنة ومصنوع وفق معايير الجودة الصيدلانية ولا يسبب أي خفقان أو ارتفاع ضغط عند الالتزام بالجرعة اليومية (كبسولة واحدة صباحاً).",
        aFr: "Non, notre formule est dosée avec précision et équilibrée avec la rhodiola pour un tonus sans nervosité."
      },
      {
        qAr: "شحال من كبسولة كناخد فالنهار؟",
        qFr: "Quelle est la posologie ?",
        aAr: "كبسولة واحدة كل صباح بعد وجبة الإفطار مع كأس كبير من الماء كافية تماماً ليوم كامل من النشاط.",
        aFr: "Une seule capsule chaque matin après le petit-déjeuner suffit pour toute la journée."
      }
    ]
  },

  // 5. Control Flow (rovanx-control-oil)
  "rovanx-control-oil": {
    trustItems: [
      {
        icon: Clock3,
        titleAr: "تأخير القذف والتحكم الكامل",
        titleFr: "Retardant & Contrôle Absolu",
        subAr: "كيأخرك باش متجيبش البليزير دغيا",
        subFr: "Prolonge l'acte sans précipitation"
      },
      {
        icon: HeartPulse,
        titleAr: "علاقة طويلة وممتعة للطرفين",
        titleFr: "Plaisir Partagé & Durable",
        subAr: "باش تستمتع نتا والزوجة ديالك",
        subFr: "Pour combler les deux partenaires"
      },
      {
        icon: Droplet,
        titleAr: "زيوت نباتية نقية 100%",
        titleFr: "Huiles 100% végétales",
        subAr: "بدون تخدير أو مواد كيميائية",
        subFr: "Sans effet anesthésiant chimique"
      },
      {
        icon: Lock,
        titleAr: "تغليف سري ومعاينة قبل الدفع",
        titleFr: "Colis discret & Vérification",
        subAr: "طرد عادي بدون أي إحراج",
        subFr: "Discrétion totale garantie"
      }
    ],
    headlineAr: "تأخير القذف والتحكم الكامل.. باش تطول العلاقة مع الزوجة ديالك وتستمتعو بيها بجوج لأقصى حد",
    headlineFr: "Contrôle de l'éjaculation et durée prolongée : pour savourer pleinement l'intimité à deux",
    subheadlineAr: "زيت طبيعي مركب من خلاصة القرنفل والجينسينغ وزيت اللوز، كيهدئ الحساسية المفرطة وكيأخر القذف باش متساليش بالزربة، وكيمنحك النفس الطويل باش تعيشو علاقة حميمية طويلة، ممتعة، ومرضية ليك ولشريكة حياتك.",
    subheadlineFr: "Une formule externe raffinée à l'huile de girofle et ginseng pour retarder l'éjaculation, prolonger la durée du rapport et profiter d'un plaisir mutuel intense.",
    comparison: {
      beforeAr: [
        "سرعة القذف والتسرع في الدقائق الأولى قبل ما تستمتع الزوجة ديالك",
        "عدم القدرة على التحكم والإحساس بالإحراج ونقص الثقة قدام شريكة حياتك",
        "تجارب سيئة مع المراهم الكيميائية المخدرة اللي كتفقدك الإحساس والمتعة تماماً",
        "قصر وقت العلاقة اللي كيخلي الزوجة ممتنعاش وما وصلاش للنشوة الكاملة"
      ],
      beforeFr: [
        "Éjaculation précoce et fin précipitée avant d'avoir pu combler votre partenaire",
        "Perte de maîtrise, frustration et sentiment d'impuissance face au stress",
        "Mauvaises expériences avec des gels chimiques anesthésiants désagréables",
        "Rapports trop courts empêchant votre conjointe d'atteindre l'orgasme"
      ],
      afterAr: [
        "تأخير ملموس وتحكم كامل باش متجيبش البليزير ديالك دغيا وتطول فالعلاقة",
        "علاقة حميمية طويلة ومرتاحة كتخليك نتا ومارتك تستمتعو بكل دقيقة وبكل إيلاج",
        "إحساس طبيعي كامل بدون أي تخدير مزعج أو حريق، مع الحفاظ على قمة اللذة",
        "ثقة مطلقة وهدوء نفسي ورضا تام وفرحة كبيرة لشريكة حياتك"
      ],
      afterFr: [
        "Retardement notable et maîtrise sereine pour prolonger le rapport autant que souhaité",
        "Moments intimes longs, complices et profondément épanouissants pour les deux partenaires",
        "Sensations naturelles intactes sans perte de sensibilité ni effet anesthésiant",
        "Confiance totale et satisfaction mutuelle absolue dans le couple"
      ]
    },
    ingredients: [
      {
        nameAr: "زيت القرنفل النقي (Eugenia Caryophyllata)",
        nameFr: "Huile Essentielle de Girofle",
        roleAr: "تهدئة طبيعية وضبط الإشارات وتأخير القذف",
        roleFr: "Régulation sensorielle & Retardant",
        descAr: "يحتوي على الأوجينول الطبيعي الذي يهدئ الحساسية المفرطة بلطف وكيأخر وصول النشوة بسرعة دون أن يفقدك الإحساس الطبيعي.",
        descFr: "Riche en eugénol naturel, il régule la sensibilité excessive et retarde le réflexe éjaculatoire en douceur.",
        badgeAr: "مقطر نقي",
        badgeFr: "Distillation pure"
      },
      {
        nameAr: "خلاصة الجينسينغ الموضعية",
        nameFr: "Extrait de Ginseng",
        roleAr: "تنشيط الدورة الدموية وثبات الصلابة",
        roleFr: "Tonus & Circulation locale",
        descAr: "يعزز تدفق الدم ويضمن استمرار الانتصاب والصلابة القوية طوال فترة إطالة العلاقة مع الزوجة.",
        descFr: "Favorise la microcirculation et maintient une fermeté vigoureuse durant tout le rapport prolongé.",
        badgeAr: "مستخلص طبيعي",
        badgeFr: "Extrait actif"
      },
      {
        nameAr: "زيت اللوز الحلو وفيتامين E",
        nameFr: "Huile d'Amande Douce & Vitamine E",
        roleAr: "ترطيب وحماية ونعومة فائقة للأنسجة",
        roleFr: "Hydratation & Confort intime",
        descAr: "قاعدة نباتية فائقة النعومة تغذي البشرة الحساسة وتسهل التدليك لامتصاص سريع بدون أي أثر دهني مزعج.",
        descFr: "Base végétale ultra-douce garantissant une absorption optimale, sans résidu et sans irritation.",
        badgeAr: "عناية فائقة",
        badgeFr: "Soin doux"
      }
    ],
    timeline: [
      {
        phaseAr: "الاستعمال الأول",
        phaseFr: "Dès la 1ère utilisation",
        timeAr: "مفعول سريع (15-20 دقيقة)",
        timeFr: "Action en 15-20 min",
        descAr: "3 إلى 5 قطرات بتدليك خفيف قبل 15 دقيقة تمنحك استرخاءً موضعياً وتأخيراً واضحاً للقذف يطول وقت الجماع من أول مرة."
      },
      {
        phaseAr: "مع الانتظام وتكرار الاستعمال",
        phaseFr: "Avec la régularité",
        timeAr: "تحكم وهدوء دائم",
        timeFr: "Maîtrise durable",
        descAr: "تزول رهبة التسرع النفسي تماماً وتصبح قادراً على ضبط وقت القذف بكل هدوء باش تستمتع نتا والزوجة ديالك لأطول فترة ممكنة."
      }
    ],
    faqs: [
      {
        qAr: "واش كيعاون فعلاً باش نأخر القذف ونطول العلاقة مع الزوجة ديالي؟",
        qFr: "Aide-t-il vraiment à retarder l'éjaculation et prolonger l'acte avec ma partenaire ?",
        aAr: "نعم بكل تأكيد! هادي هي المهمة الأساسية لـ Control Flow. زيت القرنفل الطبيعي غني بالأوجينول اللي كيهدئ الحساسية المفرطة، وهادشي كيخليك تتحكم فالقذف وماتساليش دغيا، باش تعيشو علاقة حميمية طويلة وممتعة نتا والزوجة ديالك حتى تستمتعو بجوج وتوصلو للنشوة الكاملة.",
        aFr: "Oui absolument ! C'est le rôle premier de Control Flow. L'eugénol naturel apaise l'hypersensibilité cutanée et permet de retarder l'éjaculation, offrant un rapport intime beaucoup plus long et intense pour combler les deux partenaires."
      },
      {
        qAr: "كيفاش كنستعمل زيت Control Flow؟",
        qFr: "Comment appliquer l'huile Control Flow ?",
        aAr: "ضع 3 إلى 5 قطرات باستخدام القطارة المرفقة على المنطقة الحساسة قبل 15 إلى 20 دقيقة من اللقاء، وقم بتدليك خفيف حتى يمتصه الجلد تماماً. (للاستعمال الخارجي فقط).",
        aFr: "Appliquer 3 à 5 gouttes à l'aide de la pipette 15 à 20 minutes avant. Masser délicatement jusqu'à pénétration complète. Usage externe uniquement."
      },
      {
        qAr: "واش كيخدر العضو ولا كيحرق؟",
        qFr: "Y a-t-il un effet d'anesthésie ou de brûlure ?",
        aAr: "لا نهائياً! تركيبته طبيعية 100% بدون ليدوكائين أو مواد كيميائية مخدرة. كيعطي إحساس دافئ ومريح وكيحافظ على كامل المتعة واللذة الطبيعية بدون أي فقدان للإحساس.",
        aFr: "Absolument pas ! Sans anesthésiant chimique (sans lidocaïne), il préserve 100% du plaisir et des sensations naturelles sans brûlure ni engourdissement."
      },
      {
        qAr: "واش الطرد كيوصل مسدود وسري؟",
        qFr: "Le colis est-il discret ?",
        aAr: "نعم سرية تامة 100%! الكرتونة عادية وبدون أي إشارة للمنتج أو طبيعته، والتوصيل لباب دارك مع إمكانية فحص العلبة والتأكد منها قبل الدفع للموزع.",
        aFr: "Discrétion totale 100%. Colis carton neutre sans mention du contenu. Vous pouvez vérifier la boîte avant de régler le livreur."
      }
    ]
  },

  // 6. Vital Protein (rovanx-vital-protein)
  "rovanx-vital-protein": {
    trustItems: [
      {
        icon: Award,
        titleAr: "زيادة حجم وسمك القضيب",
        titleFr: "Volume & Épaisseur Masculine",
        subAr: "ضخ دموي قوي وتمدد واضح للأنسجة",
        subFr: "Afflux sanguin puissant & fermeté"
      },
      {
        icon: Zap,
        titleAr: "متعة وإسعاد الزوجة",
        titleFr: "Plaisir & Épanouissement du Couple",
        subAr: "باش تمتع الزوجة ديالك فالعلاقة الحميمية",
        subFr: "Combler votre partenaire pleinement"
      },
      {
        icon: Lock,
        titleAr: "طاقة متواصلة بدون عياء",
        titleFr: "Énergie & Endurance Intime",
        subAr: "مركب الماكا، L-Arginine والزنك",
        subFr: "Maca concentrée, Arginine & Zinc"
      },
      {
        icon: Eye,
        titleAr: "معاينة قبل الدفع وسرية تامة",
        titleFr: "Vérifiez avant de payer",
        subAr: "طرد مغلف بسريّة وافحص قبل الخلاص",
        subFr: "Colis 100% discret & contrôle à la livraison"
      }
    ],
    headlineAr: "طاقة جبارة وزيادة فحجم القضيب.. باش تمتع الزوجة ديالك فالعلاقة الحميمية ديالكم وتعيشو قمة اللذة",
    headlineFr: "Puissance Maximale & Volume Masculin pour Combler Votre Partenaire",
    subheadlineAr: "مركب غذائي نشط يجمع بين بروتين مصل اللبن النقي، الماكا، خلاصة الجينسينغ و L-Arginine؛ لتوسيع الأوعية وضخ الدم بقوة لتحقيق زيادة ملحوظة في حجم وسمك القضيب وصلابة قوية، وتوفير طاقة بدنية لا تنفد باش تسعد الزوجة ديالك وتعيشو علاقة ممتعة وطويلة للطرفين.",
    subheadlineFr: "Formule active enrichie en Whey Pure, L-Arginine, Maca et Ginseng : stimule l'afflux sanguin pour maximiser le volume, la fermeté et l'endurance afin d'offrir un plaisir intense et partagé.",
    comparison: {
      beforeAr: [
        "حجم عادي وضعف في الانتصاب مع ارتخاء سريع يسبب الحرج أمام الزوجة",
        "عياء وسخفة سريعة قبل إشباع رغبة الزوجة فالعلاقة الحميمية",
        "قلة الثقة بالنفس والتوتر النفسي قبل وأثناء اللقاء الحميمي"
      ],
      beforeFr: [
        "Manque de volume, érections molles et perte de confiance",
        "Fatigue rapide et incapacité à satisfaire pleinement sa partenaire",
        "Frustration et stress intime diminuant le plaisir partagé"
      ],
      afterAr: [
        "زيادة واضحة فحجم وسمك القضيب مع صلابة حديدية كتحس بيها الزوجة فوراً",
        "طاقة وقوة بدنية هائلة باش تمتع الزوجة ديالك وتطولو فالعلاقة بدون سخفة",
        "ثقة مطلقة برجولتك، وانسجام حميمي وسعادة كاملة تجمعك مع الزوجة ديالك"
      ],
      afterFr: [
        "Volume et fermeté décuplés, ressenti immédiat par votre partenaire",
        "Énergie inépuisable pour prolonger le plaisir et combler votre couple",
        "Assurance virile totale et moments d'intimité inoubliables"
      ]
    },
    ingredients: [
      {
        nameAr: "بروتين مصل اللبن و L-Arginine المنشط",
        nameFr: "Whey Protein & L-Arginine Active",
        roleAr: "ضخ الدم وتمدد الأنسجة وزيادة حجم القضيب",
        roleFr: "Vasodilatation & Volume Maximal",
        descAr: "يعمل L-Arginine على مضاعفة إنتاج أكسيد النيتريك وتوسيع الأوعية الدموية لضخ كميات هائلة من الدم، مما يوسع الأنسجة الكهفية ويزيد من حجم وسمك وصلابة القضيب أثناء العلاقة.",
        descFr: "Booste la production d'oxyde nitrique, dilatant les corps caverneux pour un afflux sanguin massif et un gain visible de fermeté et de volume.",
        badgeAr: "ضخ دموي فائق",
        badgeFr: "Afflux maximal"
      },
      {
        nameAr: "خلاصة الماكا البيروفية والجينسينغ",
        nameFr: "Extraits de Maca Noire & Ginseng",
        roleAr: "طاقة حميمية وإسعاد الزوجة",
        roleFr: "Endurance & Plaisir Partagé",
        descAr: "تمنحك طاقة بدنية مستمرة ورغبة قوية وقدرة على المتابعة بدون أي إرهاق، باش تمتع الزوجة ديالك فالعلاقة الحميمية ديالكم وتعيشو قمة النشوة والسعادة الزوجية.",
        descFr: "Fournit une vitalité infatigable et une endurance élevée pour prolonger l'acte et satisfaire intensément votre partenaire.",
        badgeAr: "طاقة ورغبة",
        badgeFr: "Énergie pure"
      },
      {
        nameAr: "الزنك المركز وفيتامين B12",
        nameFr: "Zinc Hautement Assimilable & Vitamine B12",
        roleAr: "دعم التستوستيرون والصلابة المستمرة",
        roleFr: "Testostérone & Fermeté Durable",
        descAr: "يدعم توازن هرمون الذكورة الطبيعي، ويقوي جودة الانتصاب ويحافظ على الحيوية والنشاط العضلي طوال اليوم بدون هبوط.",
        descFr: "Soutient la synthèse naturelle de testostérone et le maintien d'une vigueur masculine optimale au quotidien.",
        badgeAr: "حيوية ذكورية",
        badgeFr: "Vigueur virile"
      }
    ],
    timeline: [
      {
        phaseAr: "الأسبوع الأول",
        phaseFr: "Semaine 1",
        timeAr: "طاقة فورية وصلابة قوية",
        timeFr: "Vitalité & Érection ferme",
        descAr: "كتلاحظ نشاط بدني متجدد وزوال السخفة، مع ضخ دموي أسرع وانتصاب صلب وقوي من أول الأيام."
      },
      {
        phaseAr: "الأسابيع 2 إلى 4",
        phaseFr: "Semaines 2 à 4",
        timeAr: "زيادة الحجم وإسعاد كامل للزوجة",
        timeFr: "Volume visible & Plaisir total",
        descAr: "امتلاء واضح وزيادة ملحوظة فسمك وحجم القضيب، مع طاقة وقدرة استثنائية باش تمتع الزوجة ديالك فالعلاقة وتعيشو قمة اللذة والانسجام."
      }
    ],
    faqs: [
      {
        qAr: "واش كيعاون فعلاً فزيادة حجم وسمك القضيب؟",
        qFr: "Aide-t-il réellement à augmenter le volume et l'épaisseur ?",
        aAr: "نعم! المزيج المركز من L-Arginine والماكا وبروتين مصل اللبن كيحفز أكسيد النيتريك اللي كيوسع الأوعية الدموية وكيخلي الدم يتدفق بكثافة للأنسجة الكهفية، هادشي كيعطي تمدد ملحوظ وزيادة واضحة فالسمك والحجم مع صلابة حديدية كتلاحظها نتا والزوجة ديالك.",
        aFr: "Oui ! La synergie entre la L-Arginine, la Maca et les protéines stimule la vasodilatation et l'afflux sanguin dans les corps caverneux, entraînant un élargissement naturel, une fermeté accrue et un volume visible."
      },
      {
        qAr: "كيفاش كيعاون باش نمتع الزوجة ديالي فالعلاقة الحميمية ديالنا؟",
        qFr: "Comment aide-t-il à combler et satisfaire ma partenaire ?",
        aAr: "كيعطيك انتصاب صلب وقوي مع زيادة فالحجم والسمك كتحس بيها الزوجة فوراً، بالإضافة لطاقة بدنية ولياقة متواصلة بدون أي سخفة، باش تقدر تطول العلاقة وتوصلها لأعلى درجات النشوة والمتعة المشتركة.",
        aFr: "En offrant une fermeté robuste, un volume plus généreux et une endurance physique sans faille, il permet de prolonger les moments d'intimité et d'amener votre conjointe à un épanouissement complet."
      },
      {
        qAr: "كيفاش كنستعمل Vital Protein؟",
        qFr: "Comment consommer Vital Protein ?",
        aAr: "اخلط ملعقة واحدة (المرفقة بالعبوة، حوالي 10 غرام) في 200 مل من الماء البارد أو الحليب. اشربها مرة واحدة يومياً فالصباح أو قبل العلاقة الحميمية أو التمرين.",
        aFr: "Mélanger 1 cuillère doseuse (environ 10g) dans 200 ml d'eau ou de lait, une fois par jour le matin ou avant votre moment intime / séance."
      },
      {
        qAr: "واش كيوصل الطرد بسريّة تامة وهل يمكن الفحص قبل الدفع؟",
        qFr: "La livraison est-elle discrète avec vérification possible ?",
        aAr: "نعم 100%! الطرد كيوصلك مغلف فكرتونة عادية بدون أي اسم أو إشارة لطبيعة المنتج، وعندك الحق تفحص العلبة وتتأكد منها قدام الموزع قبل ما تدفع أي درهم.",
        aFr: "Discrétion totale à 100%. Emballage neutre sans mention du produit. Vous pouvez inspecter votre colis avant de payer le livreur."
      }
    ]
  }
};

export function ProductCroExperience({ slug }: { slug: string }) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  // If prostate, use dedicated rich ProstaGuard experience
  if (slug === "rovanx-prostate") {
    return <ProstaGuardExperience />;
  }

  // If vitality boost, use dedicated rich VitalityBoost experience
  if (slug === "rovanx-vitality-30") {
    return <VitalityBoostExperience />;
  }

  // If vitality ultra, use dedicated rich VitalityUltra experience
  if (slug === "rovanx-vitality-60") {
    return <VitalityUltraExperience />;
  }

  // If testo drive, use dedicated rich TestoDrive experience
  if (slug === "rovanx-ginseng") {
    return <TestoDriveExperience />;
  }

  const config = CRO_EXPERIENCES[slug];
  if (!config) return null;

  return (
    <div className="border-t border-white/10 bg-[#0e1015] text-white">
      {/* 1. Trust & Reassurance Bar */}
      <section className="border-b border-white/10 bg-gradient-to-r from-bronze-950/40 via-bronze-900/20 to-bronze-950/40 py-6">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {config.trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 rounded-xl border border-bronze-500/20 bg-white/[0.03] p-3 backdrop-blur-sm">
                  <Icon className="h-6 w-6 shrink-0 text-bronze-400" />
                  <div>
                    <p className="text-xs font-black text-white">{isArabic ? item.titleAr : item.titleFr}</p>
                    <p className="text-[11px] text-white/60">{isArabic ? item.subAr : item.subFr}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Problem vs Solution */}
      <section className="section relative z-10 py-14">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold text-amber-400">
              <Sparkles size={14} />
              {isArabic ? "الفرق الملموس من الأسبوع الأول" : "La différence dès la 1ère semaine"}
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
              {isArabic ? config.headlineAr : config.headlineFr}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              {isArabic ? config.subheadlineAr : config.subheadlineFr}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-red-500/20 pb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/20 text-sm font-black text-red-400">
                  ✕
                </span>
                <h3 className="text-lg font-black text-red-300">
                  {isArabic ? "قبل الاستعمال (المعاناة اليومية):" : "Avant l'utilisation :"}
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {(isArabic ? config.comparison.beforeAr : config.comparison.beforeFr).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/15 p-6 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-2 border-b border-emerald-500/20 pb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-black text-emerald-400">
                  ✓
                </span>
                <h3 className="text-lg font-black text-emerald-300">
                  {isArabic ? "بعد الانتظام على المنتج (النتيجة الملموسة):" : "Après l'utilisation régulière :"}
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {(isArabic ? config.comparison.afterAr : config.comparison.afterFr).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-white/90">
                    <span className="mt-0.5 text-emerald-400">✓</span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Active Ingredients */}
      <section className="section relative z-10 border-t border-white/10 bg-[#12141a]/60 py-14 backdrop-blur-sm">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              {isArabic ? "مكونات طبيعية نقية ذات فعالية مثبتة" : "Ingrédients actifs d'origine naturelle"}
            </h2>
            <p className="mt-2 text-sm text-white/70">
              {isArabic
                ? "تم اختيار كل عنصر بعناية فائقة وتحديد جرعته بدقة لضمان أفضل امتصاص ونتائج مستدامة بدون أي أضرار."
                : "Chaque actif est sélectionné pour sa pureté et sa concentration optimale."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {config.ingredients.map((ing, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all hover:border-bronze-400/40 hover:bg-white/[0.05]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-bronze-500/30 bg-bronze-500/10 px-2.5 py-0.5 text-[11px] font-bold text-bronze-300">
                      {isArabic ? ing.badgeAr : ing.badgeFr}
                    </span>
                    <CheckCircle2 size={16} className="text-emerald-400" />
                  </div>
                  <h3 className="mt-3 text-base font-black text-white group-hover:text-amber-300">
                    {isArabic ? ing.nameAr : ing.nameFr}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-amber-400">
                    {isArabic ? ing.roleAr : ing.roleFr}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    {isArabic ? ing.descAr : ing.descFr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline */}
      <section className="section relative z-10 border-t border-white/10 py-14">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              {isArabic ? "النتائج المتوقعة خطوة بخطوة" : "Chronologie des résultats"}
            </h2>
            <p className="mt-2 text-sm text-white/70">
              {isArabic ? "كيف يتفاعل جسمك مع التركيبة الطبيعية خلال الكورس" : "Comment votre corps réagit au fil des semaines"}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {config.timeline.map((step, idx) => (
              <div key={idx} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-xs font-black text-amber-300">
                    {isArabic ? step.timeAr : step.timeFr}
                  </span>
                  <span className="text-xs font-bold text-white/40">#{idx + 1}</span>
                </div>
                <h3 className="mt-4 text-base font-black text-white">{isArabic ? step.phaseAr : step.phaseFr}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">{isArabic ? step.descAr : (step.descFr || step.descAr)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 100% Discreet Packaging Guarantee Box */}
      <section className="section relative z-10 border-t border-white/10 bg-[#12141a]/80 py-12 backdrop-blur-sm">
        <div className="container">
          <div className="rounded-3xl border-2 border-bronze-500/40 bg-gradient-to-br from-bronze-950/40 via-graphite-950 to-bronze-950/30 p-8 shadow-2xl backdrop-blur-md">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <Lock size={24} />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">{isArabic ? "تغليف سري ومحكم 100%" : "Colis 100% Anonyme"}</h3>
                  <p className="mt-1 text-xs text-white/70">
                    {isArabic
                      ? "الطرد كرتوني مقفل بإحكام وبدون أي اسم أو عبارة محرجة من الخارج، لضمان خصوصيتك التامة."
                      : "Colis carton scellé sans mention du produit extérieur pour une discrétion absolue."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">{isArabic ? "حق المعاينة قبل الدفع" : "Vérification à la livraison"}</h3>
                  <p className="mt-1 text-xs text-white/70">
                    {isArabic
                      ? "افحص طردك وتأكد من العلبة وسلامتها بيدك عاد خلص الموزع. راحة بالك وثقتك مضمونة."
                      : "Vous vérifiez votre colis avant de régler le montant au livreur."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">{isArabic ? "توصيل سريع لباب دارك" : "Livraison 24-48h"}</h3>
                  <p className="mt-1 text-xs text-white/70">
                    {isArabic
                      ? "توصيل خلال 24 إلى 48 ساعة لجميع مدن وقرى المغرب، مع مكالمة تأكيد مسبقة."
                      : "Livraison rapide dans toutes les villes du Maroc avec appel de confirmation préalable."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-center">
              <a
                href="#cod-form"
                className="btn btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base font-black uppercase tracking-wider shadow-lg hover:shadow-xl"
              >
                <span>{isArabic ? "اضغط هنا لاختيار باقتك والطلب الآن" : "Commander maintenant - Paiement à la livraison"}</span>
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="section relative z-10 border-t border-white/10 py-12">
        <div className="container max-w-3xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-bold text-white/70">
              <HelpCircle size={14} className="text-amber-400" />
              {isArabic ? "أسئلة شائعة وإجابات صريحة" : "Questions Fréquentes"}
            </span>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              {isArabic ? "كل ما تود معرفته قبل الطلب" : "Tout ce que vous devez savoir"}
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {config.faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-sm font-black text-white sm:text-base">
                  {isArabic ? faq.qAr : faq.qFr}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                  {isArabic ? faq.aAr : faq.aFr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
