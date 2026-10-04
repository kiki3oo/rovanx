export type ProductVisual = {
  src: string;
  alt: string;
};

const productVisuals: Record<string, ProductVisual[]> = {
  "rovanx-control-oil": [
    {
      src: "/products/rovanx-control-oil.webp",
      alt: "Control Flow - Formule Complète & Ingrédients Actifs"
    }
  ],
  "rovanx-prostate": [
    {
      src: "/products/rovanx-prostate.webp",
      alt: "Prosta Guard - Soutien Prostate & Ingrédients Actifs"
    }
  ],
  "rovanx-maca-max": [
    {
      src: "/products/rovanx-maca-max.webp",
      alt: "Royal Force - Extrait Concentré & Ingrédients Naturels"
    }
  ],
  "rovanx-vital-protein": [
    {
      src: "/products/rovanx-vital-protein.webp",
      alt: "Vital Protein - Formule 6-en-1 Poudre Protéinée"
    }
  ],
  "rovanx-vitality-60": [
    {
      src: "/products/rovanx-vitality-60.webp",
      alt: "Vitality Ultra - Cure Complète 60 Gélules"
    }
  ],
  "rovanx-vitality-30": [
    {
      src: "/products/rovanx-vitality-30.webp",
      alt: "Vitality Boost - Format Découverte 30 Gélules"
    }
  ],
  "rovanx-ginseng": [
    {
      src: "/products/rovanx-ginseng.webp",
      alt: "Testo Drive - Ginseng Rouge & Rhodiola 30 Gélules"
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
