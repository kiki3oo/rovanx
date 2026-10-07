export type ProductDetailInfo = {
  name: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  benefits: string[];
  ingredients: string;
  usageInstructions: string;
  warnings: string;
  regulatoryInformation: string;
};

export const PRODUCT_DETAILS: Record<string, ProductDetailInfo> = {
  "rovanx-vitality-60": {
    name: "Vitality Ultra",
    badge: "60 capsules",
    tagline: "Formule Puissance & Endurance Masculine - Vitality Ultra",
    shortDescription:
      "Formule avancée Vitality Ultra pour la puissance, la fermeté et l'épanouissement intime du couple.",
    benefits: [
      "صلابة حديدية وزيادة ملحوظة فالحجم والسمك كتحس بيها الزوجة ديالك فوراً.",
      "استمرارية وتحكم عالي باش تمتع الزوجة ديالك وتعيشو علاقة حميمية ممتعة للطرفين.",
      "Conseils d'utilisation : 1 à 2 capsules par jour, après le repas, avec un verre d'eau."
    ],
    ingredients:
      "Extraits de ginseng, maca et tongkat ali, gluconate de zinc, vitamine B3, pollen de palmier, gelée royale, vitamine B10 (PABA), citrate de magnésium, taurine, L-arginine, propolis, glycérine, sorbitol, arôme miel et eau. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Prendre 1 à 2 capsules par jour, après le repas, avec un verre d'eau. Respectez les indications figurant sur l'emballage.",
    warnings:
      "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. En cas de grossesse, d'allaitement, de maladie ou de traitement médical, demandez conseil à un professionnel de santé.",
    regulatoryInformation:
      "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie."
  },
  "rovanx-vitality-30": {
    name: "Vitality Boost",
    badge: "30 capsules",
    tagline: "Complément alimentaire pour hommes",
    shortDescription:
      "Une formule tonifiante pour accompagner la vitalité et l'endurance masculine au quotidien. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    benefits: [
      "Format de 30 capsules.",
      "Conseils d'utilisation : 1 à 2 capsules par jour, après le repas, avec un verre d'eau."
    ],
    ingredients:
      "Extraits de maca péruvienne, ginseng rouge coréen, tribulus terrestris, gluconate de zinc, vitamines B6 et B12, magnésium marin. Gélule végétale. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Prendre 1 à 2 capsules par jour, après le repas, avec un verre d'eau. Respectez les indications figurant sur l'emballage.",
    warnings:
      "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. En cas de grossesse, d'allaitement, de maladie ou de traitement médical, demandez conseil à un professionnel de santé.",
    regulatoryInformation:
      "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie."
  },
  "rovanx-prostate": {
    name: "Prosta Guard",
    badge: "120 ml",
    tagline: "Soutien et confort de la prostate pour hommes",
    shortDescription:
      "Une formule ciblée pour soutenir la santé de la prostate et préserver le confort urinaire masculin. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    benefits: [
      "Flacon de 120 ml.",
      "Conseils d'utilisation : 5 ml par jour avec le bouchon doseur, de préférence après le repas."
    ],
    ingredients:
      "Extraits de baies de Saw Palmetto, écorce de Pygeum Africanum, huile de graines de courge, lycopène, gluconate de zinc. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Prendre 5 ml par jour à l'aide du bouchon doseur, après un repas. Agiter avant utilisation. Respectez les indications figurant sur l'emballage.",
    warnings:
      "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. En cas de traitement médical ou de troubles urinaires sévères, consultez un médecin.",
    regulatoryInformation:
      "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie."
  },
  "rovanx-maca-max": {
    name: "Royal Force",
    badge: "30 capsules",
    tagline: "Complément alimentaire pour hommes",
    shortDescription:
      "Une formule concentrée pour stimuler la puissance, l'endurance et l'énergie masculine au quotidien. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    benefits: [
      "Format de 30 capsules.",
      "Conseils d'utilisation : 1 à 2 capsules par jour, après le repas, avec un verre d'eau."
    ],
    ingredients:
      "Extrait concentré de racine de Maca, extrait de Tribulus Terrestris, extrait de Ginseng rouge, gluconate de zinc, vitamines B6 et B12. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Prendre 1 à 2 capsules par jour, après le repas, avec un verre d'eau. Respectez les indications figurant sur l'emballage.",
    warnings:
      "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. En cas de grossesse, d'allaitement, de maladie ou de traitement médical, demandez conseil à un professionnel de santé.",
    regulatoryInformation:
      "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie."
  },
  "rovanx-ginseng": {
    name: "Testo Drive",
    badge: "30 capsules",
    tagline: "Complément alimentaire pour hommes",
    shortDescription:
      "Une formule puissante associant le ginseng rouge et la rhodiola pour dynamiser la résistance physique et mentale. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    benefits: [
      "Format de 30 capsules.",
      "Conseils d'utilisation : 1 capsule par jour le matin, après le repas, avec un verre d'eau."
    ],
    ingredients:
      "Extrait sec de Panax Ginseng rouge coréen, extrait de Rhodiola Rosea, zinc, vitamines B1, B2, B6. Gélule végétale. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Prendre 1 capsule par jour le matin, après le repas, avec un grand verre d'eau. Respectez les indications figurant sur l'emballage.",
    warnings:
      "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Déconseillé aux personnes sous traitement antidiabétique sans avis médical. Ne remplace pas une alimentation variée et équilibrée.",
    regulatoryInformation:
      "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie."
  },
  "rovanx-control-oil": {
    name: "Control Flow",
    badge: "60 ml",
    tagline: "Formule Retardante Naturelle - Control Flow",
    shortDescription:
      "Une formule d'huiles naturelles enrichie au clou de girofle et ginseng pour le confort, la maîtrise et l'endurance masculine. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    benefits: [
      "تأخير فعال للقذف والتحكم الكامل باش متجيبش البليزير ديالك دغيا وتطول فالعلاقة.",
      "علاقة حميمية طويلة وممتعة باش تستمتع نتا والزوجة ديالك وتوصلو بجوج للنشوة الكاملة.",
      "Flacon de 60 ml avec pipette compte-gouttes.",
      "Conseils d'utilisation : 3 à 5 gouttes en massage doux, 15 à 20 minutes avant le rapport."
    ],
    ingredients:
      "Huile de clou de girofle, extrait de Panax Ginseng, huile d'amande douce, extraits de plantes naturelles, acétate de vitamine E. Sans parfum synthétique. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Appliquer 3 à 5 gouttes sur la zone intime 15 à 20 minutes avant l'acte. Masser délicatement jusqu'à absorption complète. Usage externe uniquement.",
    warnings:
      "Usage externe exclusivement. Faire un test cutané avant la première utilisation. Ne pas appliquer sur une peau irritée ou présentant des lésions. Tenir hors de portée des enfants.",
    regulatoryInformation:
      "Produit cosmétique pour le bien-être masculin. Respectez les conseils d'utilisation figurant sur l'emballage."
  },
  "rovanx-vital-protein": {
    name: "Vital Protein",
    badge: "250 g",
    tagline: "Poudre nutritionnelle pour hommes",
    shortDescription:
      "Un complexe nutritif haute performance associant protéines de Whey, Maca, Ginseng et Zinc pour soutenir l'énergie, les muscles et la vitalité. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    benefits: [
      "Pot de 250 g avec cuillère doseuse.",
      "Conseils d'utilisation : 1 cuillère par jour dans 200 ml d'eau ou de lait, le matin ou avant l'effort."
    ],
    ingredients:
      "Protéines de lactosérum (Whey Protein), extrait de Maca, extrait de Panax Ginseng, L-Arginine, gluconate de zinc, vitamine B12, arôme naturel. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Mélanger 1 cuillère (environ 10g) dans 200 ml d'eau fraîche, de lait ou de smoothie. Consommer une fois par jour le matin ou avant l'entraînement. Bien mélanger au shaker.",
    warnings:
      "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. Conserver dans un endroit sec et frais.",
    regulatoryInformation:
      "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie."
  }
};

export function getProductDetail(slug: string): ProductDetailInfo | null {
  return PRODUCT_DETAILS[slug] || null;
}
