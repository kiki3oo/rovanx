export type ProductVisual = {
  src: string;
  alt: string;
};

const productVisuals: Record<string, ProductVisual[]> = {
  "rovanx-control-oil": [
    {
      src: "/products/rovanx-control-oil.webp",
      alt: "ROVANX Control Flow - Formule Complète & Ingrédients Actifs"
    },
    {
      src: "/products/rovanx-control-oil-packshot.webp",
      alt: "ROVANX Control Flow - Flacon 60ml"
    }
  ],
  "rovanx-prostate": [
    {
      src: "/products/rovanx-prostate.webp",
      alt: "ROVANX Prosta Guard - Soutien Prostate & Ingrédients Actifs"
    },
    {
      src: "/products/rovanx-prostate-packshot.webp",
      alt: "ROVANX Prosta Guard - Flacon"
    }
  ],
  "rovanx-maca-max": [
    {
      src: "/products/rovanx-maca-max.webp",
      alt: "ROVANX Royal Force - Extrait Concentré & Ingrédients Naturels"
    },
    {
      src: "/products/rovanx-maca-max-packshot.webp",
      alt: "ROVANX Royal Force - Boîte 30 Gélules"
    }
  ],
  "rovanx-vital-protein": [
    {
      src: "/products/rovanx-vital-protein.webp",
      alt: "ROVANX Vital Protein - Poudre Protéinée Énergie & Endurance"
    }
  ],
  "rovanx-vitality-60": [
    {
      src: "/products/rovanx-vitality-60.webp",
      alt: "ROVANX Vitality Ultra - Cure Complète 2 Mois"
    }
  ],
  "rovanx-vitality-30": [
    {
      src: "/products/rovanx-vitality-30.webp",
      alt: "ROVANX Vitality Boost - Format Découverte 1 Mois"
    }
  ],
  "rovanx-ginseng": [
    {
      src: "/products/rovanx-ginseng.webp",
      alt: "ROVANX Testo Drive - Ginseng Rouge Titré 20%"
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
