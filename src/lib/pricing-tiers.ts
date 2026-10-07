export type ProductTier = {
  qty: number;
  title: string;
  sub: string;
  price: number;
  originalPrice: number | null;
  savings: string | null;
  badge: string | null;
  freeShipping: boolean;
};

export type TierDiscountRule = {
  qty: number;
  discount: number;
  packNote: string;
};

interface PricingConfig {
  unitPrice: number;
  tiers: {
    qty: number;
    price: number;
    originalPrice: number | null;
    savingsAr: string | null;
    savingsFr: string | null;
    badgeAr: string | null;
    badgeFr: string | null;
    subAr: string;
    subFr: string;
    titleAr: string;
    titleFr: string;
    freeShipping: boolean;
  }[];
}

const PRODUCT_PRICING_CONFIGS: Record<string, PricingConfig> = {
  "rovanx-prostate": {
    unitPrice: 299,
    tiers: [
      {
        qty: 1,
        price: 299,
        originalPrice: null,
        savingsAr: null,
        savingsFr: null,
        badgeAr: null,
        badgeFr: null,
        subAr: "120 مل - تجربة شهر",
        subFr: "120 ml - 1 mois",
        titleAr: "علبة واحدة",
        titleFr: "1 flacon",
        freeShipping: false
      },
      {
        qty: 2,
        price: 499,
        originalPrice: 598,
        savingsAr: "وفر 100 درهم",
        savingsFr: "Économisez 100 DH",
        badgeAr: "⭐ الأكثر طلباً",
        badgeFr: "⭐ Plus populaire",
        subAr: "240 مل - كورس موصى به (شهرين)",
        subFr: "240 ml - Cure 2 mois recommandée",
        titleAr: "علبتان (شهرين)",
        titleFr: "2 flacons (2 mois)",
        freeShipping: true
      },
      {
        qty: 3,
        price: 649,
        originalPrice: 897,
        savingsAr: "وفر 250 درهم",
        savingsFr: "Économisez 250 DH",
        badgeAr: "🏆 أفضل توفير",
        badgeFr: "🏆 Meilleure offre",
        subAr: "360 مل - كورس كامل (3 أشهر)",
        subFr: "360 ml - Cure complète 3 mois",
        titleAr: "3 علب (3 أشهر)",
        titleFr: "3 flacons (3 mois)",
        freeShipping: true
      }
    ]
  },
  "rovanx-vitality-60": {
    unitPrice: 299,
    tiers: [
      {
        qty: 1,
        price: 299,
        originalPrice: null,
        savingsAr: null,
        savingsFr: null,
        badgeAr: null,
        badgeFr: null,
        subAr: "60 كبسولة - تجربة شهر",
        subFr: "60 gélules - 1 mois",
        titleAr: "علبة واحدة",
        titleFr: "1 boîte",
        freeShipping: false
      },
      {
        qty: 2,
        price: 499,
        originalPrice: 598,
        savingsAr: "وفر 100 درهم",
        savingsFr: "Économisez 100 DH",
        badgeAr: "⭐ الأكثر طلباً",
        badgeFr: "⭐ Plus populaire",
        subAr: "120 كبسولة - كورس شهرين للطاقة والنشاط",
        subFr: "120 gélules - Cure 2 mois énergie",
        titleAr: "علبتان (شهرين)",
        titleFr: "2 boîtes (2 mois)",
        freeShipping: true
      },
      {
        qty: 3,
        price: 649,
        originalPrice: 897,
        savingsAr: "وفر 250 درهم",
        savingsFr: "Économisez 250 DH",
        badgeAr: "🏆 أفضل توفير",
        badgeFr: "🏆 Meilleure offre",
        subAr: "180 كبسولة - كورس كامل 3 أشهر",
        subFr: "180 gélules - Cure complète 3 mois",
        titleAr: "3 علب (3 أشهر)",
        titleFr: "3 boîtes (3 mois)",
        freeShipping: true
      }
    ]
  },
  "rovanx-vitality-30": {
    unitPrice: 249,
    tiers: [
      {
        qty: 1,
        price: 249,
        originalPrice: null,
        savingsAr: null,
        savingsFr: null,
        badgeAr: null,
        badgeFr: null,
        subAr: "30 كبسولة - تجربة أولى",
        subFr: "30 gélules - Découverte",
        titleAr: "علبة واحدة",
        titleFr: "1 boîte",
        freeShipping: false
      },
      {
        qty: 2,
        price: 399,
        originalPrice: 498,
        savingsAr: "وفر 100 درهم",
        savingsFr: "Économisez 100 DH",
        badgeAr: "⭐ الأكثر طلباً",
        badgeFr: "⭐ Plus populaire",
        subAr: "60 كبسولة - كورس متكامل لحيوية دائمة",
        subFr: "60 gélules - Cure vitalité optimale",
        titleAr: "علبتان (شهرين)",
        titleFr: "2 boîtes (2 mois)",
        freeShipping: true
      },
      {
        qty: 3,
        price: 549,
        originalPrice: 747,
        savingsAr: "وفر 200 درهم",
        savingsFr: "Économisez 200 DH",
        badgeAr: "🏆 أفضل توفير",
        badgeFr: "🏆 Meilleure offre",
        subAr: "90 كبسولة - كورس 3 أشهر",
        subFr: "90 gélules - Cure 3 mois",
        titleAr: "3 علب (3 أشهر)",
        titleFr: "3 boîtes (3 mois)",
        freeShipping: true
      }
    ]
  },
  "rovanx-maca-max": {
    unitPrice: 299,
    tiers: [
      {
        qty: 1,
        price: 299,
        originalPrice: null,
        savingsAr: null,
        savingsFr: null,
        badgeAr: null,
        badgeFr: null,
        subAr: "30 كبسولة - ماكا مركزة",
        subFr: "30 gélules - Maca concentrée",
        titleAr: "علبة واحدة",
        titleFr: "1 boîte",
        freeShipping: false
      },
      {
        qty: 2,
        price: 499,
        originalPrice: 598,
        savingsAr: "وفر 100 درهم",
        savingsFr: "Économisez 100 DH",
        badgeAr: "⭐ الأكثر طلباً",
        badgeFr: "⭐ Plus populaire",
        subAr: "60 كبسولة - قوة وتحمل مستمر",
        subFr: "60 gélules - Endurance & puissance",
        titleAr: "علبتان (شهرين)",
        titleFr: "2 boîtes (2 mois)",
        freeShipping: true
      },
      {
        qty: 3,
        price: 649,
        originalPrice: 897,
        savingsAr: "وفر 250 درهم",
        savingsFr: "Économisez 250 DH",
        badgeAr: "🏆 أفضل توفير",
        badgeFr: "🏆 Meilleure offre",
        subAr: "90 كبسولة - كورس شامل 3 أشهر",
        subFr: "90 gélules - Cure complète 3 mois",
        titleAr: "3 علب (3 أشهر)",
        titleFr: "3 boîtes (3 mois)",
        freeShipping: true
      }
    ]
  },
  "rovanx-ginseng": {
    unitPrice: 249,
    tiers: [
      {
        qty: 1,
        price: 249,
        originalPrice: null,
        savingsAr: null,
        savingsFr: null,
        badgeAr: null,
        badgeFr: null,
        subAr: "30 كبسولة - جينسينغ أحمر كوري",
        subFr: "30 gélules - Ginseng rouge coréen",
        titleAr: "علبة واحدة",
        titleFr: "1 boîte",
        freeShipping: false
      },
      {
        qty: 2,
        price: 399,
        originalPrice: 498,
        savingsAr: "وفر 100 درهم",
        savingsFr: "Économisez 100 DH",
        badgeAr: "⭐ الأكثر طلباً",
        badgeFr: "⭐ Plus populaire",
        subAr: "60 كبسولة - طاقة عضلية وذهنية فائقة",
        subFr: "60 gélules - Énergie physique & mentale",
        titleAr: "علبتان (شهرين)",
        titleFr: "2 boîtes (2 mois)",
        freeShipping: true
      },
      {
        qty: 3,
        price: 549,
        originalPrice: 747,
        savingsAr: "وفر 200 درهم",
        savingsFr: "Économisez 200 DH",
        badgeAr: "🏆 أفضل توفير",
        badgeFr: "🏆 Meilleure offre",
        subAr: "90 كبسولة - كورس 3 أشهر",
        subFr: "90 gélules - Cure 3 mois",
        titleAr: "3 علب (3 أشهر)",
        titleFr: "3 boîtes (3 mois)",
        freeShipping: true
      }
    ]
  },
  "rovanx-control-oil": {
    unitPrice: 199,
    tiers: [
      {
        qty: 1,
        price: 199,
        originalPrice: null,
        savingsAr: null,
        savingsFr: null,
        badgeAr: null,
        badgeFr: null,
        subAr: "60 مل - قارورة مع قطارة دقيقة",
        subFr: "60 ml - Flacon compte-gouttes",
        titleAr: "قارورة واحدة",
        titleFr: "1 flacon",
        freeShipping: false
      },
      {
        qty: 2,
        price: 349,
        originalPrice: 398,
        savingsAr: "وفر 50 درهم",
        savingsFr: "Économisez 50 DH",
        badgeAr: "⭐ الأكثر طلباً",
        badgeFr: "⭐ Plus populaire",
        subAr: "120 مل - تحكم وراحة طويلة الأمد",
        subFr: "120 ml - Contrôle & endurance prolongée",
        titleAr: "قارورتان",
        titleFr: "2 flacons",
        freeShipping: true
      },
      {
        qty: 3,
        price: 479,
        originalPrice: 597,
        savingsAr: "وفر 120 درهم",
        savingsFr: "Économisez 120 DH",
        badgeAr: "🏆 أفضل توفير",
        badgeFr: "🏆 Meilleure offre",
        subAr: "180 مل - توفير استثنائي",
        subFr: "180 ml - Économie maximale",
        titleAr: "3 قارورات",
        titleFr: "3 flacons",
        freeShipping: true
      }
    ]
  },
  "rovanx-vital-protein": {
    unitPrice: 299,
    tiers: [
      {
        qty: 1,
        price: 299,
        originalPrice: null,
        savingsAr: null,
        savingsFr: null,
        badgeAr: null,
        badgeFr: null,
        subAr: "250 غرام - واي بروتين + ماكا وزينك",
        subFr: "250 g - Whey Protein + Maca & Zinc",
        titleAr: "عبوة واحدة",
        titleFr: "1 pot",
        freeShipping: false
      },
      {
        qty: 2,
        price: 499,
        originalPrice: 598,
        savingsAr: "وفر 100 درهم",
        savingsFr: "Économisez 100 DH",
        badgeAr: "⭐ الأكثر طلباً",
        badgeFr: "⭐ Plus populaire",
        subAr: "500 غرام - بناء عضلي وطاقة متجددة",
        subFr: "500 g - Force musculaire & vitalité",
        titleAr: "عبوتان",
        titleFr: "2 pots",
        freeShipping: true
      },
      {
        qty: 3,
        price: 649,
        originalPrice: 897,
        savingsAr: "وفر 250 درهم",
        savingsFr: "Économisez 250 DH",
        badgeAr: "🏆 أفضل توفير",
        badgeFr: "🏆 Meilleure offre",
        subAr: "750 غرام - كورس رياضي متكامل",
        subFr: "750 g - Programme performance complet",
        titleAr: "3 عبوات",
        titleFr: "3 pots",
        freeShipping: true
      }
    ]
  }
};

/**
 * Returns localized product tiers for direct COD form.
 * Falls back to dynamic calculation if product is not in the explicit list.
 */
export function getProductTiers(slug: string, unitPrice: number, isArabic = true): ProductTier[] {
  const config = PRODUCT_PRICING_CONFIGS[slug];
  if (config) {
    return config.tiers.map((t) => ({
      qty: t.qty,
      title: isArabic ? t.titleAr : t.titleFr,
      sub: isArabic ? t.subAr : t.subFr,
      price: t.price,
      originalPrice: t.originalPrice,
      savings: isArabic ? t.savingsAr : t.savingsFr,
      badge: isArabic ? t.badgeAr : t.badgeFr,
      freeShipping: t.freeShipping
    }));
  }

  // Fallback dynamic generator
  return [
    {
      qty: 1,
      title: isArabic ? "علبة واحدة" : "1 boîte",
      sub: isArabic ? "تجربة شهر" : "1 mois",
      price: unitPrice,
      originalPrice: null,
      savings: null,
      badge: null,
      freeShipping: false
    },
    {
      qty: 2,
      title: isArabic ? "علبتان" : "2 boîtes",
      sub: isArabic ? "كورس شهرين موصى به" : "Cure 2 mois recommandée",
      price: Math.round(unitPrice * 1.67),
      originalPrice: unitPrice * 2,
      savings: isArabic ? `وفر ${unitPrice * 2 - Math.round(unitPrice * 1.67)} درهم` : `Économisez ${unitPrice * 2 - Math.round(unitPrice * 1.67)} DH`,
      badge: isArabic ? "⭐ الأكثر طلباً" : "⭐ Plus populaire",
      freeShipping: true
    },
    {
      qty: 3,
      title: isArabic ? "3 علب" : "3 boîtes",
      sub: isArabic ? "كورس 3 أشهر كامل" : "Cure complète 3 mois",
      price: Math.round(unitPrice * 2.17),
      originalPrice: unitPrice * 3,
      savings: isArabic ? `وفر ${unitPrice * 3 - Math.round(unitPrice * 2.17)} درهم` : `Économisez ${unitPrice * 3 - Math.round(unitPrice * 2.17)} DH`,
      badge: isArabic ? "🏆 أفضل توفير" : "🏆 Meilleure offre",
      freeShipping: true
    }
  ];
}

/**
 * Returns tier pricing info for a single quantity selection.
 */
export function getSelectedTierInfo(slug: string, unitPrice: number, quantity: number, isArabic = true) {
  const tiers = getProductTiers(slug, unitPrice, isArabic);
  const found = tiers.find((t) => t.qty === quantity);
  if (found) {
    return {
      totalPrice: found.price,
      originalPrice: found.originalPrice,
      freeShipping: found.freeShipping,
      savings: found.savings
    };
  }
  return {
    totalPrice: unitPrice * quantity,
    originalPrice: null,
    freeShipping: quantity >= 2,
    savings: null
  };
}

/**
 * Calculates discount and pack notes for backend checkout API.
 */
export function calculateTierDiscount(slug: string, unitPrice: number, quantity: number): {
  discount: number;
  packNote: string | null;
} {
  const tiers = getProductTiers(slug, unitPrice, false);
  const found = tiers.find((t) => t.qty === quantity);
  if (found && found.originalPrice) {
    const discount = Math.max(0, found.originalPrice - found.price);
    const packNote = `Pack ${found.qty} (${found.price} DH - Livraison Gratuite)`;
    return { discount, packNote };
  }
  return { discount: 0, packNote: null };
}
