import type { SupportedLocale } from "@/components/store/preferences-provider";

export type LocalizedTextMap = Record<SupportedLocale, string>;

export type ProductHighlight = {
  icon: string;
  text: LocalizedTextMap;
};

export type ProductTranslation = {
  name: LocalizedTextMap;
  badge: LocalizedTextMap;
  tagline: LocalizedTextMap;
  shortDescription: LocalizedTextMap;
  highlights: ProductHighlight[];
  benefits: Record<SupportedLocale, string[]>;
  ingredients: LocalizedTextMap;
  usageInstructions: LocalizedTextMap;
  warnings: LocalizedTextMap;
  regulatoryInformation: LocalizedTextMap;
};

export type BundleTranslation = {
  name: LocalizedTextMap;
  badge: LocalizedTextMap;
  description: LocalizedTextMap;
};

export const PRODUCT_TRANSLATIONS: Record<string, ProductTranslation> = {
  "rovanx-vitality-60": {
    name: {
      ar: "Vitality Ultra",
      fr: "Vitality Ultra",
      en: "Vitality Ultra"
    },
    badge: {
      ar: "60 كبسولة",
      fr: "60 capsules",
      en: "60 capsules"
    },
    tagline: {
      ar: "صلابة حديدية، زيادة ملحوظة في الحجم والسمك، واستمرارية فائقة لإسعاد زوجتك",
      fr: "Rigidité maximale, expansion du volume et endurance prolongée.",
      en: "Steel firmness, volume expansion, and sustained intimate stamina."
    },
    shortDescription: {
      ar: "التركيبة الطبيعية المطورة الأقوى لتعزيز تدفق الدم وتوسيع الأنسجة الكهفية، منحك انتصاباً صخرياً وضخامة تحس بها الزوجة فوراً، مع تحكم كامل في القذف لتمديد وقت العلاقة وعيش أسعد اللحظات الحميمية.",
      fr: "Formule naturelle avancée pour stimuler le flux sanguin, maximiser la fermeté érectile et développer le volume tissulaire avec endurance prolongée.",
      en: "Advanced natural formula to boost penile blood flow, maximize rock-solid firmness, and support tissue expansion with superior endurance."
    },
    highlights: [
      {
        icon: "🍆",
        text: {
          ar: "صلابة حديدية وتمدد الحجم والسمك",
          fr: "Rigidité maximale & expansion du volume",
          en: "Rock-solid firmness & volume expansion"
        }
      },
      {
        icon: "⏱️",
        text: {
          ar: "تحكم عالي وتأخير القذف 45 دقيقة",
          fr: "Contrôle supérieur & endurance 45 min",
          en: "High control & 45-min endurance"
        }
      },
      {
        icon: "🌿",
        text: {
          ar: "100% طبيعي بدون صداع ولا خفقان",
          fr: "100% naturel sans effets secondaires",
          en: "100% natural, no side effects"
        }
      },
      {
        icon: "📦",
        text: {
          ar: "طرد سري + معاينة قبل الدفع",
          fr: "Colis anonyme + contrôle avant paiement",
          en: "Discreet package + check before paying"
        }
      }
    ],
    benefits: {
      ar: [
        "انتصاب كامل وصلابة حديدية مع زيادة ملحوظة في السمك والطول (ضخامة تحس بها الزوجة فوراً).",
        "تحكم فائق وتأخير طبيعي للقذف لإطالة مدة العلاقة لأكثر من 30 إلى 45 دقيقة بدون تعب.",
        "توسيع الغرف الإسفنجية في أنسجة القضيب لاستيعاب تدفق دموي كثيف يمنح امتلاءً وضخامة دائمة.",
        "طاقة ورغبة متجددة مع سرعة استرجاع لممارسة العلاقة أكثر من مرة في نفس الليلة.",
        "تركيبة نباتية أصلية 100% (جينسينغ أحمر + تونغكات علي + ماكا + L-Arginine + زنك) بدون صداع أو خفقان قلب.",
        "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق المعاينة قبل الدفع."
      ],
      fr: [
        "Érection complète et fermeté maximale avec gain visible en volume et circonférence ressenti immédiatement par la partenaire.",
        "Maîtrise supérieure et retard naturel de l'éjaculation pour prolonger l'acte de 30 à 45 minutes sans fatigue.",
        "Expansion des corps caverneux pour un afflux sanguin optimal assurant une plénitude continue.",
        "Énergie et désir renouvelés avec récupération rapide pour renouveler le rapport avec vitalité.",
        "Formule 100% végétale pure (Ginseng rouge, Tongkat Ali, Maca, Zinc) sans maux de tête ni palpitations.",
        "Livraison rapide et gratuite pour 2 et 3 boîtes sous colis 100% anonyme avec vérification avant paiement."
      ],
      en: [
        "Complete rock-solid erection with visible gain in girth and length felt immediately by your partner.",
        "Superior intimate control and natural climax delay to prolong intimacy by 30 to 45 minutes without fatigue.",
        "Expansion of corpora cavernosa for dense penile blood retention and permanent fullness.",
        "Renewed sexual stamina and libido with rapid recovery to perform multiple times per night.",
        "100% pure plant-based formula (Red Ginseng, Tongkat Ali, Maca, Zinc) with zero headaches or heart flutter.",
        "Fast, free delivery for 2 & 3 packs in 100% discreet packaging with inspection rights prior to payment."
      ]
    },
    ingredients: {
      ar: "مستخلصات الجينسينغ الأحمر الكوري المعتق، التونغكات علي الماليزي، الماكا البيروفية، L-Arginine والتورين، غلوكونات الزنك العضوي، حبوب لقاح النخيل، غذاء الملكات، بروبوليس، فيتامينات B3 و B10 وسترات المغنيسيوم. تركيبة نباتية 100% نقية بدون أي إضافات كيميائية ضارة.",
      fr: "Extraits de Ginseng rouge coréen fermenté, Tongkat Ali de Malaisie, Maca péruvienne pure, L-Arginine, Taurine, gluconate de zinc organique, pollen de palmier, gelée royale, propolis, vitamines B3 et B10, citrate de magnésium. Formule 100% végétale sans aucun additif chimique.",
      en: "Extracts of aged Korean red ginseng, Malaysian Tongkat Ali, pure Peruvian maca, L-Arginine, taurine, organic zinc gluconate, date palm pollen, royal jelly, propolis, vitamins B3 and B10, and magnesium citrate. 100% pure botanical formula without harmful additives."
    },
    usageInstructions: {
      ar: "تناول كبسولة إلى كبسولتين يومياً بعد الوجبة مع كأس كبير من الماء. وفي أيام اللقاء، يمكنك تناول كبسولتين قبل العلاقة بساعة واحدة. يُفضل الاستمرار على كورس شهرين إلى 3 أشهر لثبات تمدد الأنسجة الدائم.",
      fr: "Prendre 1 à 2 gélules par jour après le repas avec un grand verre d'eau. Les jours d'intimité, prendre 2 gélules 1 heure avant l'acte. Une cure de 2 à 3 mois est recommandée pour stabiliser l'expansion tissulaire.",
      en: "Take 1 to 2 capsules daily after a meal with a large glass of water. On intimate days, take 2 capsules 1 hour beforehand. A 2 to 3 month course is recommended for lasting tissue expansion."
    },
    warnings: {
      ar: "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي لا يغني عن تغذية متوازنة. في حال تناول أدوية مزمنة، يُفضل استشارة الطبيب.",
      fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne se substitue pas à une alimentation équilibrée. Consultez un médecin en cas de traitement médical concomitant.",
      en: "Keep out of reach of children. Do not exceed the recommended daily dose. Dietary supplement does not replace a balanced diet. Consult a physician if taking prescription medication."
    },
    regulatoryInformation: {
      ar: "هذا المكمل الغذائي مركب من خلاصات نباتية طبيعية ومغذيات حيوية 100% وليس دواءً كيميائياً. لا يُستخدم لتشخيص أو علاج الأمراض بشكل منفرد، بل يدعم الأداء والنشاط الفسيولوجي الطبيعي للرجل.",
      fr: "Ce complément alimentaire est formulé à base d'extraits végétaux 100% naturels et n'est pas un médicament. Il soutient l'endurance et le tonus physiologique naturel de l'homme.",
      en: "This dietary supplement is formulated with 100% natural botanical extracts and is not a drug. It naturally supports male physiological vigor and performance."
    }
  },
  "rovanx-vitality-30": {
    name: {
      ar: "Vitality Boost",
      fr: "Vitality Boost",
      en: "Vitality Boost"
    },
    badge: {
      ar: "30 كبسولة",
      fr: "30 capsules",
      en: "30 capsules"
    },
    tagline: {
      ar: "طاقة متدفقة، صفاء ذهني، وقوة تحمل تدوم طوال اليوم بدون إجهاد",
      fr: "Énergie propre, clarté mentale et vitalité masculine quotidienne.",
      en: "Clean energy, mental clarity, and sustained male endurance."
    },
    shortDescription: {
      ar: "تركيبة طبيعية مركزة تجمع بين الماكا البيروفية والجينسينغ والتريبولوس لمحاربة التعب والإرهاق اليومي، واستعادة الحيوية والنشاط البدني والذهني.",
      fr: "Complexe tonifiant concentré associant maca péruvienne, ginseng rouge et tribulus pour vaincre la fatigue et stimuler la vitalité globale.",
      en: "Concentrated herbal complex of Peruvian maca, red ginseng, and tribulus to fight daily fatigue and restore overall vitality and stamina."
    },
    highlights: [
      {
        icon: "⚡",
        text: {
          ar: "طاقة ونشاط متواصل طول اليوم",
          fr: "Énergie & vitalité toute la journée",
          en: "Sustained energy throughout the day"
        }
      },
      {
        icon: "🧠",
        text: {
          ar: "تركيز ذهني وقوة تحمل عالية",
          fr: "Clarté mentale & haute endurance",
          en: "Mental focus & high stamina"
        }
      },
      {
        icon: "🌿",
        text: {
          ar: "100% طبيعي بدون منبهات كيميائية",
          fr: "100% naturel sans stimulants chimiques",
          en: "100% natural, no chemical stimulants"
        }
      },
      {
        icon: "📦",
        text: {
          ar: "طرد سري + معاينة قبل الدفع",
          fr: "Colis anonyme + contrôle avant paiement",
          en: "Discreet package + check before paying"
        }
      }
    ],
    benefits: {
      ar: [
        "طاقة نظيفة ومستقرة من الصباح للمساء بدون هبوط مفاجئ أو سخفة بعد الغداء.",
        "محاربة قاطعة للكسل الصباحي والإرهاق المزمن والشعور بالثقل في الجسم.",
        "زيادة ملحوظة في التركيز الذهني والإنتاجية وسرعة اتخاذ القرارات في العمل.",
        "دعم القوة العضلية والقدرة على التحمل واللياقة البدنية والذكورية.",
        "تركيبة نباتية 100% نقية (ماكا + جينسينغ + تريبولوس + زنك + فيتامين ب) آمنة تماماً وبدون أي آثار جانبية.",
        "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق المعاينة قبل الدفع."
      ],
      fr: [
        "Énergie propre et constante du matin au soir sans baisse de régime ni coup de pompe.",
        "Lutte efficace contre la fatigue chronique, la somnolence et la lourdeur corporelle.",
        "Amélioration nette de la concentration, de la productivité et de la vivacité mentale.",
        "Soutien musculaire, endurance physique et dynamisme masculin renforcé.",
        "Formule 100% végétale pure (Maca, Ginseng, Tribulus, Zinc, Vitamines B) parfaitement sûre.",
        "Livraison rapide et gratuite pour 2 et 3 boîtes sous colis 100% anonyme avec vérification avant paiement."
      ],
      en: [
        "Clean, steady energy from morning to evening without mid-afternoon crashes.",
        "Effectively combats chronic fatigue, morning lethargy, and physical sluggishness.",
        "Noticeable boost in mental focus, work productivity, and cognitive clarity.",
        "Supports muscle strength, physical stamina, and male vitality.",
        "100% pure botanical formula (Maca, Ginseng, Tribulus, Zinc, Vitamin B) completely safe.",
        "Fast, free delivery for 2 & 3 packs in 100% discreet packaging with inspection rights prior to payment."
      ]
    },
    ingredients: {
      ar: "مستخلصات الماكا البيروفية النقية، الجينسينغ الأحمر الكوري المعتق، التريبولوس، غلوكونات الزنك العضوي، فيتامينات B6 و B12، ومغنيسيوم بحري نقي. كبسولات نباتية 100% خالية من الكافيين الصناعي والمواد الحافظة.",
      fr: "Extraits purs de Maca péruvienne, Ginseng rouge coréen, Tribulus terrestris, gluconate de zinc organique, vitamines B6 et B12, magnésium marin. Gélules 100% végétales sans caféine synthétique ni conservateurs.",
      en: "Extracts of pure Peruvian maca, aged Korean red ginseng, tribulus terrestris, organic zinc gluconate, vitamins B6 and B12, and pure marine magnesium. 100% plant-based capsules without synthetic caffeine."
    },
    usageInstructions: {
      ar: "تناول كبسولة إلى كبسولتين يومياً في الصباح بعد وجبة الإفطار مع كأس كبير من الماء. يُفضل الاستمرار على كورس شهرين إلى 3 أشهر لتثبيت مستويات الطاقة والنشاط الدائم.",
      fr: "Prendre 1 à 2 gélules par jour le matin après le petit-déjeuner avec un grand verre d'eau. Une cure de 2 à 3 mois est recommandée pour ancrer les niveaux d'énergie.",
      en: "Take 1 to 2 capsules daily in the morning after breakfast with a large glass of water. A 2 to 3 month course is recommended to sustain baseline energy levels."
    },
    warnings: {
      ar: "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي لا يغني عن تغذية متوازنة. في حال تناول أدوية مزمنة، يُفضل استشارة الطبيب.",
      fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne se substitue pas à une alimentation équilibrée.",
      en: "Keep out of reach of children. Do not exceed the recommended daily dose. Dietary supplement does not replace a balanced diet."
    },
    regulatoryInformation: {
      ar: "هذا المكمل الغذائي مركب من خلاصات نباتية طبيعية وفيتامينات عضوية 100% وليس دواءً كيميائياً. يدعم طاقة ونشاط الجسم الطبيعي.",
      fr: "Ce produit est un complément alimentaire naturel à base d'extraits botaniques et nutriments. Non médicamenteux.",
      en: "This product is a natural dietary supplement formulated with botanical extracts and nutrients. Not a drug."
    }
  },
  "rovanx-prostate": {
    name: {
      ar: "Prosta Guard",
      fr: "Prosta Guard",
      en: "Prosta Guard"
    },
    badge: {
      ar: "120 مل",
      fr: "120 ml",
      en: "120 ml"
    },
    tagline: {
      ar: "ودّع الاستيقاظ الليلي وصعوبة التبول واسترجع راحة نومك وحيويتك",
      fr: "Confort urinaire masculin, nuits paisibles et soutien ciblé de la prostate.",
      en: "Targeted prostate comfort, restful sleep, and healthy urinary flow."
    },
    shortDescription: {
      ar: "تركيبة طبيعية سائلة متطورة مخصصة لدعم صحة البروستاتا والتخلص من تكرار التبول وضعف التدفق، لمنحك نوماً هادئاً متواصلاً وتدفقاً مريحاً وسلساً بدون أي مواد كيميائية.",
      fr: "Solution liquide hautement biodisponible (Saw Palmetto, Pygeum, zinc) pour soulager les envies nocturnes et restaurer un flux urinaire régulier.",
      en: "Fast-absorbing liquid formula (Saw Palmetto, Pygeum, zinc) to relieve frequent nighttime urination and maintain healthy prostate function."
    },
    highlights: [
      {
        icon: "🌙",
        text: {
          ar: "نوم هادئ ومتواصل طوال الليل",
          fr: "Sommeil continu & nuits paisibles",
          en: "Peaceful unbroken sleep all night"
        }
      },
      {
        icon: "⚡",
        text: {
          ar: "تدفق بولي طبيعي وسلس وقوي",
          fr: "Flux urinaire régulier, fluide & puissant",
          en: "Smooth, strong natural urinary stream"
        }
      },
      {
        icon: "💧",
        text: {
          ar: "صيغة سائلة سريعة الامتصاص",
          fr: "Formule liquide haute assimilation",
          en: "Fast-absorbing liquid formula"
        }
      },
      {
        icon: "📦",
        text: {
          ar: "طرد سري + معاينة قبل الدفع",
          fr: "Colis anonyme + contrôle avant paiement",
          en: "Discreet package + check before paying"
        }
      }
    ],
    benefits: {
      ar: [
        "نوم هادئ ومتواصل طوال الليل مع تقليل الاستيقاظ المتكرر للتبول من الأسبوع الأول.",
        "تدفق بولي طبيعي وسلس وقوي بدون تقطيع، حصر، أو تقطير مزعج في النهاية.",
        "إفراغ مريح وتام للمثانة مع إحساس فوري بالخفة والراحة في منطقة الحوض وأسفل البطن.",
        "صيغة سائلة مركزة (120 مل) سريعة الامتصاص المباشر تعطي مفعولاً أسرع بـ 3 مرات من الكبسولات الجافة.",
        "تركيبة نباتية أصلية 100% (Saw Palmetto، بيجيوم، زيت القرع، زنك، ليكوبين) آمنة تماماً وبدون أي آثار جانبية.",
        "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق فحص ومعاينة الطرد قبل الدفع."
      ],
      fr: [
        "Nuits paisibles et sommeil continu dès la première semaine en réduisant les réveils nocturnes fréquents.",
        "Flux urinaire naturel, fluide et vigoureux sans hésitation, interruption ni gouttes retardataires.",
        "Vidange vésicale complète et soulagement immédiat de la sensation de pesanteur pelvienne.",
        "Formule liquide concentrée (120 ml) à biodisponibilité immédiate, 3 fois plus rapide que les comprimés secs.",
        "Composition 100% végétale noble (Saw Palmetto, Pygeum, pépins de courge, lycopène, zinc) sans effets secondaires.",
        "Livraison rapide et gratuite pour 2 et 3 flacons sous colis 100% anonyme avec vérification avant paiement."
      ],
      en: [
        "Restful, uninterrupted nighttime sleep starting from week one by reducing frequent bathroom trips.",
        "Smooth, continuous, and robust urinary stream without straining or bothersome post-void dribbling.",
        "Full, comfortable bladder emptying and immediate sensation of lightness in the pelvic region.",
        "Concentrated liquid format (120 ml) offering direct rapid absorption—3 times faster than dry capsules.",
        "100% authentic botanical formula (Saw Palmetto, Pygeum, pumpkin seed, zinc, lycopene) completely safe.",
        "Fast, free delivery for 2 & 3 packs in 100% discreet packaging with inspection rights prior to payment."
      ]
    },
    ingredients: {
      ar: "مستخلصات توت البلميط المنشاري النقي (Saw Palmetto)، لحاء الخوخ الأفريقي (Pygeum Africanum)، زيت بذور القرع المعصور على البارد، ليكوبين طبيعي فائق الفعالية، غلوكونات الزنك العضوي عالي الامتصاص. تركيبة نباتية 100% خالية من أي إضافات كيميائية ضارة.",
      fr: "Extraits de baies de Saw Palmetto, écorce de Pygeum Africanum, huile de graines de courge pressée à froid, lycopène pur, gluconate de zinc organique. Formule 100% végétale sans additifs chimiques.",
      en: "Extracts of pure Saw Palmetto berries, Pygeum Africanum bark, cold-pressed pumpkin seed oil, premium lycopene, and organic zinc gluconate. 100% botanical formula without synthetic fillers."
    },
    usageInstructions: {
      ar: "تناول 5 مل يومياً باستخدام غطاء القياس المرفق بعد وجبة الإفطار أو الغداء مع كأس كبير من الماء. رُجّ العبوة جيداً قبل الاستعمال. يُفضل المواظبة على كورس شهرين إلى 3 أشهر لثبات النتائج ووقاية مستمرة.",
      fr: "Prendre 5 ml par jour à l'aide du bouchon doseur après le repas avec un grand verre d'eau. Bien agiter avant emploi. Une cure de 2 à 3 mois est recommandée pour pérenniser le confort urinaire.",
      en: "Take 5 ml daily using the included measuring cup after breakfast or lunch with a large glass of water. Shake well before use. A 2 to 3 month course is recommended for lasting comfort."
    },
    warnings: {
      ar: "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي لا يغني عن نظام غذائي متوازن. في حال وجود حالة طبية خاصة أو تناول أدوية مزمنة، يُنصح باستشارة الطبيب.",
      fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne se substitue pas à une alimentation équilibrée. Consultez votre médecin en cas de pathologie spécifique.",
      en: "Keep out of reach of children. Do not exceed the recommended daily dose. Dietary supplement does not replace a balanced diet."
    },
    regulatoryInformation: {
      ar: "هذا المكمل الغذائي مركب من خلاصات نباتية طبيعية 100% وليس دواءً كيميائياً. لا يُستخدم لتشخيص أو منع الأمراض بشكل منفرد، بل يدعم التوازن الفسيولوجي الطبيعي للبروستاتا والمسالك البولية.",
      fr: "Complément alimentaire élaboré à base d'extraits naturels. Non médicamenteux, il soutient l'équilibre physiologique de la prostate et du système urinaire.",
      en: "Dietary supplement formulated with 100% natural herbal extracts. Not a pharmaceutical drug. Supports normal prostate and urinary function."
    }
  },
  "rovanx-maca-max": {
    name: {
      ar: "Royal Force",
      fr: "Royal Force",
      en: "Royal Force"
    },
    badge: {
      ar: "30 كبسولة",
      fr: "30 capsules",
      en: "30 capsules"
    },
    tagline: {
      ar: "صلابة فولاذية مستمرة، طاقة فحولية متجددة، وتحكم مطلق في العلاقة الحميمية",
      fr: "Maca noire pure et tribulus pour une puissance virile et une fermeté inébranlable.",
      en: "Pure Peruvian black maca and tribulus for raw virility and rock-solid power."
    },
    shortDescription: {
      ar: "تركيبة ملكية نادرة بالماكا السوداء البيروفية والتريبولوس والجينسينغ والزنك العضوي، صُممت لمنحك صلابة حديدية لا تنكسر وطاقة فحولية متجددة.",
      fr: "Formule royale à haute concentration en maca noire péruvienne pour stimuler la puissance virile, la fermeté et la confiance masculine.",
      en: "Royal high-potency formula with rare Peruvian black maca and tribulus to enhance male stamina, hardness, and confidence."
    },
    highlights: [
      {
        icon: "👑",
        text: {
          ar: "ماكا سوداء بيروفية نادرة ومركزة",
          fr: "Maca noire péruvienne pure & concentrée",
          en: "Pure concentrated Peruvian black maca"
        }
      },
      {
        icon: "⚡",
        text: {
          ar: "صلابة فولاذية وانتصاب حديدي مستمر",
          fr: "Rigidité d'acier & endurance inébranlable",
          en: "Steel rigidity & sustained stamina"
        }
      },
      {
        icon: "🌿",
        text: {
          ar: "100% طبيعي بدون أي خفقان أو صداع",
          fr: "100% naturel sans palpitations ni céphalées",
          en: "100% natural, zero side effects"
        }
      },
      {
        icon: "📦",
        text: {
          ar: "طرد سري + معاينة قبل الدفع",
          fr: "Colis anonyme + contrôle avant paiement",
          en: "Discreet package + check before paying"
        }
      }
    ],
    benefits: {
      ar: [
        "صلابة قوية وانتصاب ثابت ومستمر طوال فترة اللقاء بدون أي ارتخاء مفاجئ أو تراجع.",
        "قدرة عالية على التحكم وتأخير القذف للاستمتاع بعلاقة طويلة وإشباع رغبة الزوجة بالكامل.",
        "طاقة فحولية متفجرة ورغبة متجددة تخلصك من التعب والفتور وضغوط العمل اليومية.",
        "تركيبة طبيعية 100% غنية بالماكا السوداء البيروفية والتريبولوس والجينسينغ والزنك الحيوي بدون آثار جانبية.",
        "تجدد سريع للنشاط لإمكانية تكرار اللقاء الحميمي بكل حيوية وثقة بدون إجهاد.",
        "توصيل سريع ومجاني للباك الثنائي والثلاثي في تغليف سري ومحكم 100% مع حق فحص ومعاينة الطرد قبل الدفع."
      ],
      fr: [
        "Fermeté inébranlable et maintien érectile continu pendant toute la durée du rapport.",
        "Maîtrise remarquable et retard d'éjaculation pour combler pleinement le désir de votre partenaire.",
        "Énergie virile explosive et désir renouvelé balayant le stress et l'épuisement quotidien.",
        "Formule 100% naturelle riche en maca noire, tribulus, ginseng et zinc organique sans effets secondaires.",
        "Récupération physique accélérée permettant de répéter les rapports avec aisance et confiance.",
        "Livraison rapide et gratuite pour 2 et 3 boîtes sous colis 100% anonyme avec vérification avant paiement."
      ],
      en: [
        "Unshakable firmness and sustained erectile rigidity throughout the entire intimate encounter.",
        "Exceptional control and natural climax delay to completely fulfill your partner's pleasure.",
        "Explosive virile stamina and rekindled drive overcoming workday stress and fatigue.",
        "100% natural blend of Peruvian black maca, tribulus, ginseng, and organic zinc with zero side effects.",
        "Accelerated physical recovery to perform multiple times with confidence and vigor.",
        "Fast, free delivery for 2 & 3 packs in 100% discreet packaging with inspection rights prior to payment."
      ]
    },
    ingredients: {
      ar: "مستخلص الماكا السوداء البيروفية النقية المركزة (Lepidium meyenii)، مستخلص نبتة التريبولوس (Tribulus Terrestris) عالي الصابونين، مستخلص الجينسينغ الأحمر الكوري المعتق (Panax Ginseng)، غلوكونات الزنك العضوي عالي الامتصاص، فيتامينات B6 و B12 الحيوية. كبسولات نباتية 100% خالية من المواد الكيميائية الضارة.",
      fr: "Extrait pur de Maca noire péruvienne concentrée, extrait de Tribulus Terrestris titré en saponines, extrait de Panax Ginseng coréen mature, gluconate de zinc organique, vitamines B6 et B12. Gélules 100% végétales sans substances chimiques.",
      en: "Extract of concentrated pure Peruvian black maca, tribulus terrestris standardized in saponins, aged Korean red ginseng extract, bioavailable zinc gluconate, and vitamins B6 & B12. 100% botanical capsules."
    },
    usageInstructions: {
      ar: "تناول كبسولة واحدة يومياً بعد وجبة الإفطار أو الغداء مع كأس كبير من الماء. في أيام اللقاء الحميمي، يمكن تناول كبسولة إضافية قبل ساعتين. يُنصح بالالتزام بكورس شهرين إلى 3 أشهر لترسيخ النتائج واستدامة القوة والفحولة.",
      fr: "Prendre 1 gélule par jour après le repas avec un grand verre d'eau. Les jours de rapport, une gélule supplémentaire peut être prise 2 heures avant. Une cure de 2 à 3 mois est conseillée pour pérenniser les résultats.",
      en: "Take 1 capsule daily after a meal with a large glass of water. On intimate days, an additional capsule may be taken 2 hours before. A 2 to 3 month course is advised for lasting vigor."
    },
    warnings: {
      ar: "يُحفظ بعيداً عن متناول الأطفال وفي مكان جاف وبارد. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي 100% ولا يغني عن نمط حياة وتغذية متوازنة. في حالة وجود أمراض قلبية حادة أو تناول أدوية خاصة، يُفضل استشارة الطبيب.",
      fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose recommandée. Ne se substitue pas à une alimentation équilibrée.",
      en: "Keep out of reach of children. Do not exceed the recommended dose. Dietary supplement does not replace a balanced diet."
    },
    regulatoryInformation: {
      ar: "هذا المنتج مكمل غذائي طبيعي 100% مركب من أعشاب ومغذيات حيوية نقية وليس دواءً صيدلانياً كيميائياً. يدعم الأداء الفحولي والنشاط الجنسي الطبيعي للرجل.",
      fr: "Complément alimentaire naturel à base de plantes et nutriments. Non médicamenteux, il soutient la vitalité masculine naturelle.",
      en: "Natural dietary supplement based on botanical extracts. Not a pharmaceutical drug."
    }
  },
  "rovanx-ginseng": {
    name: {
      ar: "Testo Drive",
      fr: "Testo Drive",
      en: "Testo Drive"
    },
    badge: {
      ar: "30 كبسولة",
      fr: "30 capsules",
      en: "30 capsules"
    },
    tagline: {
      ar: "تحفيز التستوستيرون الطبيعي، قوة عضلية وذهنية خارقة، ومقاومة تامة للإجهاد",
      fr: "Stimulation de la testostérone naturelle, force musculaire et résistance au stress.",
      en: "Natural testosterone support, physical stamina, and stress resilience."
    },
    shortDescription: {
      ar: "جينسينغ أحمر كوري معتق 6 سنوات مع عشبة الروديولا المتكيفة والزنك لرفع التستوستيرون الطبيعي، القضاء على التوتر، ومضاعفة القوة والتحمل.",
      fr: "Ginseng rouge coréen 6 ans d'âge, rhodiola adaptogène et zinc pour optimiser la testostérone libre et dynamiser la résistance physique.",
      en: "6-year mature Korean red ginseng, adaptogenic rhodiola, and zinc to boost free testosterone and support physical power."
    },
    highlights: [
      {
        icon: "⚡",
        text: {
          ar: "تحفيز التستوستيرون والفحولة",
          fr: "Stimulation de la testostérone & virilité",
          en: "Testosterone stimulation & virility"
        }
      },
      {
        icon: "🛡️",
        text: {
          ar: "جينسينغ كوري معتق 6 سنوات",
          fr: "Ginseng rouge coréen 6 ans d'âge",
          en: "6-year mature Korean red ginseng"
        }
      },
      {
        icon: "🧠",
        text: {
          ar: "مقاومة الإجهاد وصفاء ذهني",
          fr: "Anti-stress & résistance mentale",
          en: "Stress relief & mental resilience"
        }
      },
      {
        icon: "📦",
        text: {
          ar: "طرد سري + معاينة قبل الدفع",
          fr: "Colis anonyme + contrôle avant paiement",
          en: "Discreet package + check before paying"
        }
      }
    ],
    benefits: {
      ar: [
        "تحفيز قوي لإفراز هرمون التستوستيرون الحر الطبيعي بدون أي هرمونات صناعية.",
        "طاقة عضلية وبدنية متفجرة ومقاومة فائقة للإجهاد وضغوطات العمل اليومية.",
        "تخفيض هرمون التوتر (الكورتيزول) بفضل عشبة الروديولا المتكيفة لصفاء ذهني وهدوء تام.",
        "استعادة الرغبة الحميمية المتوهجة والفحولة والثقة الذكورية الكاملة.",
        "تركيبة نباتية أصلية 100% (جينسينغ أحمر كوري 6 سنوات + روديولا + زنك + فيتامينات ب) آمنة تماماً.",
        "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق المعاينة قبل الدفع."
      ],
      fr: [
        "Stimulation naturelle de la production de testostérone libre sans hormones de synthèse.",
        "Regain d'énergie musculaire et résistance exceptionnelle face aux surcharges de travail.",
        "Réduction du cortisol (hormone de stress) grâce à la rhodiola pour un calme et une clarté absolue.",
        "Réveil puissant du désir intime, de la vitalité masculine et de l'assurance personnelle.",
        "Formule 100% végétale pure (Ginseng rouge 6 ans, Rhodiola, Zinc, Vitamines B) hautement sécurisée.",
        "Livraison rapide et gratuite pour 2 et 3 boîtes sous colis 100% anonyme avec vérification avant paiement."
      ],
      en: [
        "Powerful stimulation of natural free testosterone synthesis without synthetic hormones.",
        "Surge in muscular stamina and exceptional resilience against daily workday burnout.",
        "Lowers cortisol stress levels via adaptogenic rhodiola for sharp mental calm.",
        "Restores passionate libido, male vitality, and rock-solid inner confidence.",
        "100% authentic botanical formula (6-year Korean red ginseng, rhodiola, zinc, B vitamins) completely safe.",
        "Fast, free delivery for 2 & 3 packs in 100% discreet packaging with inspection rights prior to payment."
      ]
    },
    ingredients: {
      ar: "مستخلص الجينسينغ الأحمر الكوري المعتق 6 سنوات (Panax Ginseng)، مستخلص عشبة الروديولا الوردية النقية (Rhodiola Rosea)، غلوكونات الزنك العضوي عالي الامتصاص، فيتامينات B1 و B2 و B6. كبسولات نباتية 100% بدون أي إضافات كيميائية ضارة.",
      fr: "Extrait sec de Panax Ginseng rouge coréen 6 ans d'âge, extrait pur de Rhodiola Rosea adaptogène, gluconate de zinc organique, vitamines B1, B2 et B6. Gélules 100% végétales sans additifs chimiques.",
      en: "Extract of 6-year aged Korean red Panax Ginseng, pure adaptogenic Rhodiola Rosea extract, organic zinc gluconate, and vitamins B1, B2, and B6. 100% plant-based capsules."
    },
    usageInstructions: {
      ar: "تناول كبسولة واحدة يومياً في الصباح بعد وجبة الإفطار مع كأس كبير من الماء. وفي فترات التمارين الشاقة أو الإجهاد الشديد يمكن تناول كبسولتين. يُفضل الالتزام بكورس شهرين إلى 3 أشهر لتثبيت مستويات التستوستيرون الطبيعي.",
      fr: "Prendre 1 gélule par jour le matin après le petit-déjeuner avec un grand verre d'eau. En période d'effort intense, 2 gélules peuvent être prises. Une cure de 2 à 3 mois est recommandée pour optimiser la testostérone.",
      en: "Take 1 capsule daily in the morning after breakfast with a large glass of water. During intense workouts or high stress, 2 capsules may be taken. A 2 to 3 month course is recommended."
    },
    warnings: {
      ar: "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي لا يغني عن تغذية متوازنة. في حال تناول أدوية مزمنة، يُفضل استشارة الطبيب.",
      fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne se substitue pas à une alimentation équilibrée.",
      en: "Keep out of reach of children. Do not exceed the recommended dose. Dietary supplement does not replace a balanced diet."
    },
    regulatoryInformation: {
      ar: "هذا المكمل الغذائي مركب من خلاصات نباتية طبيعية ومغذيات حيوية 100% وليس دواءً كيميائياً. يدعم التوازن الهرموني والطاقة الحيوية للرجل.",
      fr: "Complément alimentaire naturel soutenant l'équilibre hormonal physiologique et la vigueur masculine. Non médicamenteux.",
      en: "Natural dietary supplement supporting hormonal balance and male vigor. Not a pharmaceutical drug."
    }
  },
  "rovanx-control-oil": {
    name: {
      ar: "Control Flow",
      fr: "Control Flow",
      en: "Control Flow"
    },
    badge: {
      ar: "60 مل",
      fr: "60 ml",
      en: "60 ml"
    },
    tagline: {
      ar: "سيروم القرنفل الطبيعي لتأخير القذف 30 إلى 45 دقيقة وتحكم تام فالعلاقة",
      fr: "Sérum botanique naturel au clou de girofle pour prolonger le plaisir et maîtriser le timing.",
      en: "Natural botanical clove serum to delay ejaculation and master intimate control."
    },
    shortDescription: {
      ar: "تركيبة زيوت طبيعية مركزة بخلاصة القرنفل والجنسنج لتأخير القذف من 30 إلى 45 دقيقة وتحكم كامل في التوقيت بدون أي تخدير أو فقدان للإحساس.",
      fr: "Huile naturelle enrichie au clou de girofle et ginseng pour retarder l'éjaculation de 30 à 45 min sans aucun effet anesthésiant ni perte de sensation.",
      en: "Pure essential clove and ginseng oil formula to delay climax by 30-45 minutes with full sensitivity and zero numbness."
    },
    highlights: [
      {
        icon: "⏱️",
        text: {
          ar: "تأخير القذف 30-45 دقيقة",
          fr: "Retard d'éjaculation de 30 à 45 min",
          en: "Delay climax by 30 to 45 minutes"
        }
      },
      {
        icon: "🌿",
        text: {
          ar: "تركيبة طبيعية 100% بدون تخدير",
          fr: "100% naturel sans anesthésie ni engourdissement",
          en: "100% natural, zero numbness"
        }
      },
      {
        icon: "🎯",
        text: {
          ar: "تحكم كامل لإسعاد شريكة الحياة",
          fr: "Contrôle absolu pour le plaisir du couple",
          en: "Total intimate control for mutual pleasure"
        }
      },
      {
        icon: "📦",
        text: {
          ar: "طرد سري + معاينة قبل الدفع",
          fr: "Colis anonyme + contrôle avant paiement",
          en: "Discreet package + check before paying"
        }
      }
    ],
    benefits: {
      ar: [
        "تأخير فعال للقذف والتحكم الكامل باش متجيبش البليزير ديالك دغيا وتطول فالعلاقة.",
        "علاقة حميمية طويلة وممتعة باش تستمتع نتا والزوجة ديالك وتوصلو بجوج للنشوة الكاملة.",
        "تركيبة نقية بخلاصة القرنفل والجنسنج بدون أي تخدير أو برود في الإحساس.",
        "سهل الاستعمال وسريع المفعول في 15 إلى 20 دقيقة قبل اللقاء.",
        "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق المعاينة قبل الدفع."
      ],
      fr: [
        "Retard efficace de l'éjaculation et contrôle total pour prolonger la durée du rapport.",
        "Harmonie intime prolongée permettant d'amener votre partenaire à l'orgasme complet.",
        "Synergie botanique pure (clou de girofle, ginseng) sans anesthésie ni perte de sensibilité.",
        "Application facile et action rapide en 15 à 20 minutes avant le rapport.",
        "Livraison rapide et gratuite pour 2 et 3 flacons sous colis 100% anonyme avec vérification avant paiement."
      ],
      en: [
        "Effective climax delay and total control to extend intimacy duration.",
        "Extended intimate harmony to ensure your partner achieves complete climax.",
        "Pure botanical synergy (clove oil, ginseng) with zero numbing or loss of sensation.",
        "Easy application with fast-acting benefits in 15 to 20 minutes prior to intimacy.",
        "Fast, free delivery for 2 & 3 packs in 100% discreet packaging with inspection rights prior to payment."
      ]
    },
    ingredients: {
      ar: "خلاصة زيت القرنفل النقي، مستخلص الجينسينغ، زيت اللوز الحلو المعصور على البارد، زيوت نباتية مرطبة، وفيتامين E النقي. خالي تماماً من المواد الكيميائية والعطور الصناعية.",
      fr: "Huile de clou de girofle pure, extrait de Panax Ginseng, huile d'amande douce pressée à froid, extraits végétaux émollients, acétate de vitamine E. Sans parfum synthétique ni agents anesthésiants.",
      en: "Pure clove essential oil, Panax Ginseng extract, cold-pressed sweet almond oil, soothing botanical oils, vitamin E acetate. Free of synthetic fragrances and chemical numbing agents."
    },
    usageInstructions: {
      ar: "ضع 3 إلى 5 قطرات على المنطقة الحميمية قبل 15 إلى 20 دقيقة من اللقاء. دلك بلطف حتى يتم الامتصاص بالكامل. للاستعمال الخارجي فقط.",
      fr: "Appliquer 3 à 5 gouttes sur la zone intime 15 à 20 minutes avant le rapport. Masser délicatement jusqu'à pénétration complète. Usage externe uniquement.",
      en: "Apply 3 to 5 drops to the intimate area 15 to 20 minutes before intimacy. Gently massage until fully absorbed. For external use only."
    },
    warnings: {
      ar: "للاستعمال الخارجي فقط. يُنصح بإجراء اختبار تحسسي على جزء صغير من الجلد قبل أول استعمال. يُحفظ بعيداً عن متناول الأطفال.",
      fr: "Usage externe exclusivement. Effectuer un test cutané avant la première utilisation. Ne pas appliquer sur peau lésée. Tenir hors de portée des enfants.",
      en: "For external use only. Perform a skin patch test before first use. Do not apply on broken skin. Keep out of reach of children."
    },
    regulatoryInformation: {
      ar: "منتج تجميلي طبيعي مخصص للعناية والراحة الحميمية للرجال. يُرجى اتباع إرشادات الاستعمال الموضحة على العبوة.",
      fr: "Produit cosmétique d'hygiène et de bien-être intime masculin. Respecter les conseils d'utilisation figurant sur l'emballage.",
      en: "Natural cosmetic care product for male intimate comfort. Follow the directions on the label."
    }
  },
  "rovanx-vital-protein": {
    name: {
      ar: "Vital Protein",
      fr: "Vital Protein",
      en: "Vital Protein"
    },
    badge: {
      ar: "250 غرام",
      fr: "250 g",
      en: "250 g"
    },
    tagline: {
      ar: "مركب غذائي بالواي بروتين والماكا و L-Arginine لضخ دموي كثيف وحجم أكبر",
      fr: "Complexe Whey, Maca et L-Arginine pour le flux sanguin, la vitalité et la plénitude.",
      en: "Whey protein, Maca, and L-Arginine complex for blood flow, volume, and recovery."
    },
    shortDescription: {
      ar: "مركب بروتيني عالي الامتصاص يجمع بين بروتين مصل اللبن النقي، الماكا و L-Arginine لتحفيز تدفق الدم الشرياني ودعم الحجم والصلابة والنشاط اليومي.",
      fr: "Poudre nutritive haute performance associant Whey, Maca et L-Arginine pour optimiser la circulation sanguine et la récupération masculine.",
      en: "High-performance nutrient blend of Whey, Maca, and L-Arginine to support healthy blood flow, tissue fullness, and muscular stamina."
    },
    highlights: [
      {
        icon: "💪",
        text: {
          ar: "بناء عضلي واسترجاع سريع",
          fr: "Développement musculaire & récupération",
          en: "Muscle building & rapid recovery"
        }
      },
      {
        icon: "⚡",
        text: {
          ar: "طاقة وحيوية للتمارين المكثفة",
          fr: "Énergie pure pour entraînements intenses",
          en: "Pure energy for intense workouts"
        }
      },
      {
        icon: "🌿",
        text: {
          ar: "بروتين نقي وسهل الهضم",
          fr: "Protéine pure haute digestibilité",
          en: "Pure, easily digestible protein"
        }
      },
      {
        icon: "📦",
        text: {
          ar: "طرد سري + معاينة قبل الدفع",
          fr: "Colis anonyme + contrôle avant paiement",
          en: "Discreet package + check before paying"
        }
      }
    ],
    benefits: {
      ar: [
        "ضخ قوي للدم لدعم زيادة حجم وسمك القضيب وصلابة قوية كتحس بيها الزوجة ديالك.",
        "طاقة وقوة بدنية فائقة باش تمتع الزوجة ديالك فالعلاقة الحميمية ديالكم وتعيشو متعة حقيقية.",
        "بناء الألياف العضلية وتسريع التعافي بعد التمارين الرياضية المكثفة.",
        "تركيبة غنية بالبروتين والماكا والجينسينغ والزنك الحيوي.",
        "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق المعاينة قبل الدفع."
      ],
      fr: [
        "Afflux sanguin optimisé pour soutenir la fermeté érectile et l'expansion volumétrique.",
        "Vigueur physique et endurance maximale pour un épanouissement intime partagé.",
        "Renforcement de la fibre musculaire et récupération accélérée après l'effort.",
        "Formule enrichie en Whey protéine pure, Maca, Ginseng et zinc organique.",
        "Livraison rapide et gratuite pour 2 et 3 pots sous colis 100% anonyme avec vérification avant paiement."
      ],
      en: [
        "Optimized blood flow to support erectile firmness and volumetric expansion.",
        "Physical stamina and energy for intense performance and intimate fulfillment.",
        "Strengthens muscle fibers and speeds up recovery after demanding workouts.",
        "Formula enriched with pure Whey protein, Maca, Ginseng, and organic zinc.",
        "Fast, free delivery for 2 & 3 packs in 100% discreet packaging with inspection rights prior to payment."
      ]
    },
    ingredients: {
      ar: "بروتينات مصل اللبن النقية (Whey Protein)، مستخلص الماكا البيروفية، مستخلص الجينسينغ، L-Arginine، غلوكونات الزنك، فيتامين B12، ونكهة طبيعية. خالي من الإضافات الضارة.",
      fr: "Protéines de lactosérum pures (Whey Protein), extrait de Maca, extrait de Panax Ginseng, L-Arginine, gluconate de zinc, vitamine B12, arôme naturel.",
      en: "Pure whey protein isolate, Maca extract, Panax Ginseng extract, L-Arginine, zinc gluconate, vitamin B12, natural flavoring."
    },
    usageInstructions: {
      ar: "اخلط مكيالاً واحداً (حوالي 10 غرام) في 200 مل من الماء أو الحليب أو العصير. تناوله مرة يومياً صباحاً أو قبل التمارين الرياضية. اخلطه جيداً في الشيكر.",
      fr: "Mélanger 1 cuillère doseuse (environ 10g) dans 200 ml d'eau fraîche ou de lait. Consommer une fois par jour le matin ou avant l'effort.",
      en: "Mix 1 scoop (approx. 10g) in 200 ml of cool water or milk. Consume once daily in the morning or before workouts."
    },
    warnings: {
      ar: "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي لا يغني عن تغذية متوازنة. يُحفظ في مكان جاف وبارد.",
      fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose recommandée. Ne se substitue pas à une alimentation équilibrée.",
      en: "Keep out of reach of children. Do not exceed the recommended dose. Store in a cool, dry place."
    },
    regulatoryInformation: {
      ar: "هذا المكمل الغذائي ليس دواءً كيميائياً، بل مكمل غذائي لدعم التغذية الرياضية والطاقة الحيوية للرجال.",
      fr: "Ce produit est un complément alimentaire destiné aux sportifs et à la vitalité masculine. Non médicamenteux.",
      en: "Dietary supplement intended for sports nutrition and male vigor. Not a pharmaceutical drug."
    }
  }
};

export const BUNDLE_TRANSLATIONS: Record<string, BundleTranslation> = {
  "rovanx-pack-puissance": {
    name: {
      ar: "Pack Puissance & Contrôle",
      fr: "Pack Puissance & Contrôle",
      en: "Power & Control Pack"
    },
    badge: {
      ar: "⭐ الأكثر طلباً وتوفيراً (Best-Seller)",
      fr: "⭐ Meilleure Vente (Best-Seller)",
      en: "⭐ Best-Seller Pack"
    },
    description: {
      ar: "الحل المزدوج المتكامل: كبسولات Vitality Ultra للصلابة وتمدد الحجم والسمك + زيت Control Flow لتأخير القذف 30-45 دقيقة وتحكم تام فالعلاقة لإسعاد الزوجة.",
      fr: "La double action complète : Vitality Ultra pour une fermeté maximale et gain de volume + huile Control Flow pour retarder l'éjaculation de 30 à 45 min sans anesthésie.",
      en: "Complete dual action: Vitality Ultra for maximum firmness and volume expansion + Control Flow oil to delay ejaculation by 30-45 min with full control."
    }
  },
  "rovanx-men-pack": {
    name: {
      ar: "Men Pack",
      fr: "Men Pack",
      en: "Men Pack"
    },
    badge: {
      ar: "👑 الثنائي الفحولي الملكي",
      fr: "👑 Duo Virilité Royale",
      en: "👑 Royal Virility Duo"
    },
    description: {
      ar: "الثنائي الفحولي: Vitality Ultra + Royal Force لانتصاب حديدي وطاقة مضاعفة طوال اللقاء.",
      fr: "Le duo de virilité : Vitality Ultra + Royal Force pour une érection inébranlable et une endurance décuplée.",
      en: "The virility duo: Vitality Ultra + Royal Force for continuous steel erection and enhanced stamina."
    }
  },
  "rovanx-men-plus-pack": {
    name: {
      ar: "Men Plus Pack",
      fr: "Men Plus Pack",
      en: "Men Plus Pack"
    },
    badge: {
      ar: "👑 الباك الملكي 3 في 1 (توفير 200 DH)",
      fr: "👑 Pack Royal 3-en-1 (-200 DH)",
      en: "👑 Royal 3-in-1 Pack (Save 200 DH)"
    },
    description: {
      ar: "الباك الملكي 3 في 1: صلابة مستمرة، تحفيز التستوستيرون، ومقاومة تامة للتعب والإجهاد.",
      fr: "Le pack royal ultime 3-en-1 : fermeté durable, stimulation de la testostérone et endurance sans faille.",
      en: "The ultimate 3-in-1 royal pack: sustained firmness, natural testosterone optimization, and fatigue resilience."
    }
  },
  "rovanx-prostate-energie-pack": {
    name: {
      ar: "Pack Santé Prostate & Énergie",
      fr: "Pack Santé Prostate & Énergie",
      en: "Prostate Health & Energy Pack"
    },
    badge: {
      ar: "🛡️ باقة البروستاتا والراحة الليلية",
      fr: "🛡️ Pack Confort Prostate & Nuit",
      en: "🛡️ Prostate & Night Comfort Pack"
    },
    description: {
      ar: "باقة البروستاتا والراحة الليلية: Prosta Guard للتخلص من صعوبة التبول + Testo Drive لنشاط متجدد طوال النهار.",
      fr: "Pack confort nocturne et vitalité : Prosta Guard pour le bien-être prostatique et Testo Drive pour l'énergie quotidienne.",
      en: "Nighttime comfort and energy: Prosta Guard for healthy prostate and Testo Drive for daytime vitality."
    }
  }
};

export function getLocalizedProduct(slug: string, locale: SupportedLocale) {
  const trans = PRODUCT_TRANSLATIONS[slug];
  if (!trans) return null;
  return {
    name: trans.name[locale] || trans.name.fr,
    badge: trans.badge[locale] || trans.badge.fr,
    tagline: trans.tagline[locale] || trans.tagline.fr,
    shortDescription: trans.shortDescription[locale] || trans.shortDescription.fr,
    highlights: (trans.highlights || []).map((h) => ({
      icon: h.icon,
      text: h.text[locale] || h.text.fr
    })),
    benefits: trans.benefits?.[locale] || trans.benefits?.fr || [],
    ingredients: trans.ingredients?.[locale] || trans.ingredients?.fr || null,
    usageInstructions: trans.usageInstructions?.[locale] || trans.usageInstructions?.fr || null,
    warnings: trans.warnings?.[locale] || trans.warnings?.fr || null,
    regulatoryInformation: trans.regulatoryInformation?.[locale] || trans.regulatoryInformation?.fr || null
  };
}

export function getLocalizedBundle(slug: string, locale: SupportedLocale) {
  const trans = BUNDLE_TRANSLATIONS[slug];
  if (!trans) return null;
  return {
    name: trans.name[locale] || trans.name.fr,
    badge: trans.badge[locale] || trans.badge.fr,
    description: trans.description[locale] || trans.description.fr
  };
}
