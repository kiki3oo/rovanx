const productVisuals: Record<string, { src: string; alt: string }> = {
  "rovanx-control-oil": {
    src: "/products/rovanx-control-oil.webp",
    alt: "ROVANX Control Oil - Sérum Naturel de Contrôle & Vitalité"
  },
  "rovanx-vital-protein": {
    src: "/products/rovanx-vital-protein.webp",
    alt: "ROVANX Vital Protein 250g - Poudre Protéinée Énergie & Endurance"
  },
  "rovanx-vitality-60": {
    src: "/products/rovanx-vitality-60.webp",
    alt: "ROVANX Vitality 60 - Cure Complète 2 Mois"
  },
  "rovanx-vitality-30": {
    src: "/products/rovanx-vitality-30.webp",
    alt: "ROVANX Vitality 30 - Format Découverte 1 Mois"
  },
  "rovanx-prostate": {
    src: "/products/rovanx-prostate.webp",
    alt: "ROVANX Prostate - Confort Urinaire & Protection"
  },
  "rovanx-maca-max": {
    src: "/products/rovanx-maca-max.webp",
    alt: "ROVANX Maca Max - Extrait Concentré 10:1"
  },
  "rovanx-ginseng": {
    src: "/products/rovanx-ginseng.webp",
    alt: "ROVANX Ginseng - Ginseng Rouge Titré 20%"
  }
};

export function getProductVisual(slug: string) {
  return productVisuals[slug] || null;
}
