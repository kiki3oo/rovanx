export type ProductVisual = {
  src: string;
  alt: string;
};

const productVisuals: Record<string, ProductVisual[]> = {
  "rovanx-control-oil": [
    {
      src: "/products/rovanx-control-oil.webp",
      alt: "Control Flow - flacon de 60 ml"
    }
  ],
  "rovanx-prostate": [
    {
      src: "/products/rovanx-prostate.webp",
      alt: "Prosta Guard - flacon de 120 ml"
    }
  ],
  "rovanx-maca-max": [
    {
      src: "/products/rovanx-maca-max.webp",
      alt: "Royal Force - flacon de 30 capsules"
    }
  ],
  "rovanx-vital-protein": [
    {
      src: "/products/rovanx-vital-protein.webp",
      alt: "Vital Protein - pot de 250 g"
    }
  ],
  "rovanx-vitality-60": [
    {
      src: "/products/rovanx-vitality-60.webp",
      alt: "Vitality Ultra - flacon de 60 capsules"
    }
  ],
  "rovanx-vitality-30": [
    {
      src: "/products/rovanx-vitality-30.webp",
      alt: "Vitality Boost - flacon de 30 capsules"
    }
  ],
  "rovanx-ginseng": [
    {
      src: "/products/rovanx-ginseng.webp",
      alt: "Testo Drive - flacon de 30 capsules"
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
