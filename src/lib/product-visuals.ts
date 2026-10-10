export type ProductVisual = {
  src: string;
  alt: string;
};

const productVisuals: Record<string, ProductVisual[]> = {
  "rovanx-control-oil": [
    {
      src: "/products/rovanx-control-oil.webp?v=3",
      alt: "Control Flow - flacon de 60 ml"
    },
    {
      src: "/products/rovanx-pack-puissance-ar.webp?v=6",
      alt: "باقة القوة و التحكم - ROVANX"
    },
    {
      src: "/products/rovanx-pack-puissance-fr.webp?v=6",
      alt: "Pack Puissance & Contrôle - ROVANX"
    }
  ],
  "rovanx-prostate": [
    {
      src: "/products/rovanx-prostate.webp?v=3",
      alt: "Prosta Guard - flacon de 120 ml"
    },
    {
      src: "/products/rovanx-prostate-energie-pack-ar.webp?v=5",
      alt: "باك صحي لصحة البروستاتا والطاقة - ROVANX"
    },
    {
      src: "/products/rovanx-prostate-energie-pack-fr.webp?v=5",
      alt: "Pack Santé Prostate & Énergie - ROVANX"
    }
  ],
  "rovanx-maca-max": [
    {
      src: "/products/rovanx-maca-max.webp?v=3",
      alt: "Royal Force - flacon de 30 capsules"
    },
    {
      src: "/products/rovanx-men-plus-pack-ar.webp?v=7",
      alt: "باقة القوة و التحكم - ROVANX"
    },
    {
      src: "/products/rovanx-men-plus-pack-fr.webp?v=7",
      alt: "Men Plus Pack - ROVANX"
    }
  ],
  "rovanx-vital-protein": [
    {
      src: "/products/rovanx-vital-protein.webp?v=3",
      alt: "Vital Protein - pot de 250 g"
    }
  ],
  "rovanx-vitality-60": [
    {
      src: "/products/rovanx-vitality-60.webp?v=3",
      alt: "Vitality Ultra - flacon de 60 capsules"
    },
    {
      src: "/products/rovanx-men-plus-pack-ar.webp?v=7",
      alt: "باقة القوة و التحكم - ROVANX"
    },
    {
      src: "/products/rovanx-men-plus-pack-fr.webp?v=7",
      alt: "Men Plus Pack - ROVANX"
    }
  ],
  "rovanx-vitality-30": [
    {
      src: "/products/rovanx-vitality-30.webp?v=3",
      alt: "Vitality Boost - flacon de 30 capsules"
    }
  ],
  "rovanx-ginseng": [
    {
      src: "/products/rovanx-ginseng.webp?v=3",
      alt: "Testo Drive - flacon de 30 capsules"
    },
    {
      src: "/products/rovanx-men-plus-pack-ar.webp?v=7",
      alt: "باقة القوة و التحكم - ROVANX"
    },
    {
      src: "/products/rovanx-men-plus-pack-fr.webp?v=7",
      alt: "Men Plus Pack - ROVANX"
    }
  ]
};

export function getProductVisual(slug: string): ProductVisual | null {
  const list = productVisuals[slug];
  return list && list.length > 0 ? list[0] : null;
}

export function getProductGallery(slug: string): ProductVisual[] {
  return productVisuals[slug] || [];
}
