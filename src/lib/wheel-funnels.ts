export type WheelFunnelTarget = {
  code: string;
  aliases: string[];
  targetPath: string;
  productLabelAr: string;
  productLabelFr: string;
  vipBadgeAr: string;
  vipBadgeFr: string;
  prizePercent: number;
  promoCode: string;
};

export const WHEEL_FUNNELS: WheelFunnelTarget[] = [
  {
    code: "v1",
    aliases: ["vitality", "rovanx-vitality-60"],
    targetPath: "/product/rovanx-vitality-60",
    productLabelAr: "العرض الحصري للصلابة والحيوية القصوى",
    productLabelFr: "Offre Exclusive Vitalité & Performance",
    vipBadgeAr: "تخفيض VIP يصل إلى -40% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Remise VIP jusqu'à -40% + Livraison discrète 0 DH",
    prizePercent: 40,
    promoCode: "ROV-VIP40"
  },
  {
    code: "c1",
    aliases: ["control", "rovanx-control-oil"],
    targetPath: "/product/rovanx-control-oil",
    productLabelAr: "العرض الحصري للتحكم الموضعي وإطالة المدة",
    productLabelFr: "Offre Exclusive Maîtrise & Endurance",
    vipBadgeAr: "تخفيض VIP يصل إلى -40% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Remise VIP jusqu'à -40% + Livraison discrète 0 DH",
    prizePercent: 40,
    promoCode: "ROV-VIP40"
  },
  {
    code: "p1",
    aliases: ["prostate", "rovanx-prostate"],
    targetPath: "/product/rovanx-prostate",
    productLabelAr: "العرض الحصري لراحة البروستاتا والمسالك",
    productLabelFr: "Offre Exclusive Confort Prostatique",
    vipBadgeAr: "تخفيض VIP يصل إلى -40% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Remise VIP jusqu'à -40% + Livraison discrète 0 DH",
    prizePercent: 40,
    promoCode: "ROV-VIP40"
  },
  {
    code: "m1",
    aliases: ["maca", "rovanx-maca-max"],
    targetPath: "/product/rovanx-maca-max",
    productLabelAr: "العرض الحصري للطاقة الملكية والقدرة البدنية",
    productLabelFr: "Offre Exclusive Force Royale & Énergie",
    vipBadgeAr: "تخفيض VIP يصل إلى -40% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Remise VIP jusqu'à -40% + Livraison discrète 0 DH",
    prizePercent: 40,
    promoCode: "ROV-VIP40"
  },
  {
    code: "g1",
    aliases: ["ginseng", "rovanx-ginseng"],
    targetPath: "/product/rovanx-ginseng",
    productLabelAr: "العرض الحصري لتنشيط الدورة الدموية والحيوية",
    productLabelFr: "Offre Exclusive Tonus & Circulation",
    vipBadgeAr: "تخفيض VIP يصل إلى -40% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Remise VIP jusqu'à -40% + Livraison discrète 0 DH",
    prizePercent: 40,
    promoCode: "ROV-VIP40"
  },
  {
    code: "a1",
    aliases: ["alpha", "mass", "rovanx-mass-protein"],
    targetPath: "/product/rovanx-mass-protein",
    productLabelAr: "العرض الحصري لبناء الحجم والقوة العضلية",
    productLabelFr: "Offre Exclusive Volume & Masse Musculaire",
    vipBadgeAr: "تخفيض VIP يصل إلى -40% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Remise VIP jusqu'à -40% + Livraison discrète 0 DH",
    prizePercent: 40,
    promoCode: "ROV-VIP40"
  },
  {
    code: "pack1",
    aliases: ["pack-puissance", "rovanx-pack-puissance"],
    targetPath: "/bundles?pack=rovanx-pack-puissance#bundle-order-form",
    productLabelAr: "الباقة الثنائية الأكثر طلباً (توفير مضاعف)",
    productLabelFr: "Pack Puissance 2-en-1 (Économie Maximale)",
    vipBadgeAr: "تخفيض الباقة الحصري -50% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Offre Pack VIP -50% + Livraison discrète 0 DH",
    prizePercent: 50,
    promoCode: "ROV-PACK50"
  },
  {
    code: "pack2",
    aliases: ["men-pack", "rovanx-men-pack"],
    targetPath: "/bundles?pack=rovanx-men-pack#bundle-order-form",
    productLabelAr: "الباقة الثلاثية الشاملة للرجل (توفير 448 درهم)",
    productLabelFr: "Men Pack 3-en-1 Complet (-448 DH)",
    vipBadgeAr: "تخفيض الباقة الحصري -50% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Offre Pack VIP -50% + Livraison discrète 0 DH",
    prizePercent: 50,
    promoCode: "ROV-PACK50"
  },
  {
    code: "pack3",
    aliases: ["men-plus", "rovanx-men-plus-pack"],
    targetPath: "/bundles?pack=rovanx-men-plus-pack#bundle-order-form",
    productLabelAr: "باقة VIP المتكاملة 4 في 1 (أقصى توفير)",
    productLabelFr: "Men+ Pack 4-en-1 Intégral (Offre Ultime)",
    vipBadgeAr: "تخفيض الباقة الحصري -50% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Offre Pack VIP -50% + Livraison discrète 0 DH",
    prizePercent: 50,
    promoCode: "ROV-PACK50"
  },
  {
    code: "shop",
    aliases: ["all", "store"],
    targetPath: "/shop",
    productLabelAr: "جميع عروض وباقات متجر ROVANX الرسمي",
    productLabelFr: "Toutes les offres de la boutique officielle ROVANX",
    vipBadgeAr: "تخفيض VIP يصل إلى -50% + شحن سري مجاني 0 DH",
    vipBadgeFr: "Remise VIP jusqu'à -50% + Livraison discrète 0 DH",
    prizePercent: 50,
    promoCode: "ROV-VIP50"
  }
];

export function resolveWheelFunnel(rawCode?: string): WheelFunnelTarget {
  if (!rawCode) return WHEEL_FUNNELS[0];
  const clean = rawCode.trim().toLowerCase();
  const found = WHEEL_FUNNELS.find(
    (f) => f.code === clean || f.aliases.includes(clean)
  );
  return found || WHEEL_FUNNELS[0];
}

export const VIP_WHEEL_STORAGE_KEY = "rovanx_vip_wheel_reward_v1";

export type StoredWheelReward = {
  promoCode: string;
  prizePercent: number;
  funnelCode: string;
  expiresAt: number;
};

export function getActiveWheelReward(): StoredWheelReward | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(VIP_WHEEL_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredWheelReward;
    if (!parsed || typeof parsed.expiresAt !== "number" || Date.now() > parsed.expiresAt) {
      window.localStorage.removeItem(VIP_WHEEL_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}
