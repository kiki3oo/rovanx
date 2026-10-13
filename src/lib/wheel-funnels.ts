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

export const UTM_STORAGE_KEY = "rovanx_utm_attribution_v1";

export type StoredUtmAttribution = {
  utmSource?: string;
  utmMedium?: string; // Ensemble de publicités (Ad Set)
  utmCampaign?: string;
  utmContent?: string; // Publicité / Creative
  utmTerm?: string; // Placement / Funnel
  landingPage?: string;
  referrer?: string;
  funnelCode?: string;
  capturedAt: number;
  expiresAt: number;
};

export function getStoredUtmAttribution(): StoredUtmAttribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredUtmAttribution;
    if (!parsed || typeof parsed.expiresAt !== "number" || Date.now() > parsed.expiresAt) {
      window.localStorage.removeItem(UTM_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function captureUtmAttributionFromUrl(extra?: { funnelCode?: string }): StoredUtmAttribution | null {
  if (typeof window === "undefined") return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const existing = getStoredUtmAttribution();

    const urlSource =
      params.get("utm_source") ||
      params.get("source") ||
      (params.get("fbclid") ? "facebook_ads" : undefined) ||
      (params.get("ttclid") ? "tiktok_ads" : undefined);

    // Support standard utm_medium as well as adset / ensemble aliases
    const urlMedium =
      params.get("utm_medium") ||
      params.get("adset") ||
      params.get("ad_set") ||
      params.get("ensemble") ||
      undefined;

    const urlCampaign =
      params.get("utm_campaign") ||
      params.get("campaign") ||
      undefined;

    const urlContent =
      params.get("utm_content") ||
      params.get("ad") ||
      params.get("creative") ||
      undefined;

    const urlTerm =
      params.get("utm_term") ||
      params.get("placement") ||
      params.get("wheel") ||
      undefined;

    const funnelCode = extra?.funnelCode || params.get("wheel") || existing?.funnelCode || undefined;

    const hasNewUrlUtm = Boolean(
      urlSource || urlMedium || urlCampaign || urlContent || urlTerm || extra?.funnelCode
    );

    if (!hasNewUrlUtm && existing) {
      return existing;
    }

    const updated: StoredUtmAttribution = {
      utmSource: urlSource || existing?.utmSource || (funnelCode ? `vip_wheel_${funnelCode}` : undefined),
      utmMedium: urlMedium || existing?.utmMedium,
      utmCampaign: urlCampaign || existing?.utmCampaign || (funnelCode ? `wheel_${funnelCode}` : undefined),
      utmContent: urlContent || existing?.utmContent,
      utmTerm: urlTerm || existing?.utmTerm || (funnelCode ? `wheel:${funnelCode}` : undefined),
      landingPage: existing?.landingPage || window.location.href,
      referrer: existing?.referrer || (typeof document !== "undefined" ? document.referrer || undefined : undefined),
      funnelCode,
      capturedAt: existing?.capturedAt || Date.now(),
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days attribution window
    };

    window.localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return null;
  }
}

export function getAttributionPayload() {
  if (typeof window === "undefined") {
    return {
      utmSource: undefined,
      utmMedium: undefined,
      utmCampaign: undefined,
      utmContent: undefined,
      utmTerm: undefined,
      landingPage: undefined,
      referrer: undefined
    };
  }

  const captured = captureUtmAttributionFromUrl();
  const wheel = getActiveWheelReward();
  const params = new URLSearchParams(window.location.search);

  const utmSource =
    params.get("utm_source") ||
    captured?.utmSource ||
    (wheel ? `vip_wheel_${wheel.funnelCode}` : undefined);

  const utmMedium =
    params.get("utm_medium") ||
    params.get("adset") ||
    params.get("ensemble") ||
    captured?.utmMedium ||
    undefined;

  const utmCampaign =
    params.get("utm_campaign") ||
    captured?.utmCampaign ||
    (wheel ? `wheel_${wheel.funnelCode}` : undefined);

  const utmContent =
    params.get("utm_content") ||
    params.get("ad") ||
    captured?.utmContent ||
    undefined;

  const utmTerm =
    params.get("utm_term") ||
    captured?.utmTerm ||
    (wheel ? `wheel:${wheel.funnelCode}` : undefined);

  return {
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmTerm,
    landingPage: captured?.landingPage || window.location.href,
    referrer: captured?.referrer || (typeof document !== "undefined" ? document.referrer || undefined : undefined)
  };
}

