import type { SupportedLocale } from "@/components/store/preferences-provider";

export type LocalizedTextMap = Record<SupportedLocale, string>;

export type ProductTranslation = {
  name: LocalizedTextMap;
  badge: LocalizedTextMap;
  tagline: LocalizedTextMap;
  shortDescription: LocalizedTextMap;
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
      ar: "التركيبة الطبيعية المطورة الأقوى لتعزيز تدفق الدم وتوسيع الأنسجة الكهفية، منحك انتصاباً صخرياً وضخامة تحس بها الزوجة فوراً، مع تحكم كامل في القذف.",
      fr: "Formule naturelle avancée pour stimuler le flux sanguin, maximiser la fermeté érectile et développer le volume tissulaire avec endurance prolongée.",
      en: "Advanced natural formula to boost penile blood flow, maximize rock-solid firmness, and support tissue expansion with superior endurance."
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
      ar: "تركيبة طبيعية سائلة متطورة مخصصة لدعم صحة البروستاتا والتخلص من تكرار التبول وضعف التدفق، لمنحك نوماً هادئاً متواصلاً وتدفقاً مريحاً.",
      fr: "Solution liquide hautement biodisponible (Saw Palmetto, Pygeum, zinc) pour soulager les envies nocturnes et restaurer un flux urinaire régulier.",
      en: "Fast-absorbing liquid formula (Saw Palmetto, Pygeum, zinc) to relieve frequent nighttime urination and maintain healthy prostate function."
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
    shortDescription: trans.shortDescription[locale] || trans.shortDescription.fr
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
