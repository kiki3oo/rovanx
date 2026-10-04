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
      alt: "ROVANX Vital Protein - Formule 6-en-1 Poudre Protéinée"
    },
    {
      src: "/products/rovanx-vital-protein-packshot.webp",
      alt: "ROVANX Vital Protein - Pot 250g"
    }
  ],
  "rovanx-vitality-60": [
    {
      src: "/products/rovanx-vitality-60.webp",
      alt: "ROVANX Vitality Ultra - Cure Complète 60 Gélules"
    },
    {
      src: "/products/rovanx-vitality-60-packshot.webp",
      alt: "ROVANX Vitality Ultra - Flacon 60 Gélules"
    }
  ],
  "rovanx-vitality-30": [
    {
      src: "/products/rovanx-vitality-30.webp",
      alt: "ROVANX Vitality Boost - Format Découverte 30 Gélules"
    },
    {
      src: "/products/rovanx-vitality-30-packshot.webp",
      alt: "ROVANX Vitality Boost - Flacon 30 Gélules"
    }
  ],
  "rovanx-ginseng": [
    {
      src: "/products/rovanx-ginseng.webp",
      alt: "ROVANX Testo Drive - Ginseng Rouge & Rhodiola 30 Gélules"
    },
    {
      src: "/products/rovanx-ginseng-packshot.webp",
      alt: "ROVANX Testo Drive - Flacon 30 Gélules"
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
