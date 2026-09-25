const productVisuals: Record<string, { src: string; alt: string }> = {
  "rovanx-vitality-60": {
    src: "/brand/products/vital-core-60.png",
    alt: "ROVANX Vital Core product bottle"
  },
  "rovanx-vitality-30": {
    src: "/brand/products/vital-core-30.png",
    alt: "ROVANX Vital Core product bottle"
  },
  "rovanx-prostate": {
    src: "/brand/products/prosta-flow.png",
    alt: "ROVANX Prosta Flow syrup bottle"
  },
  "rovanx-maca-max": {
    src: "/brand/products/alpha-drive.png",
    alt: "ROVANX Alpha Drive product bottle"
  },
  "rovanx-ginseng": {
    src: "/brand/products/prime-focus.png",
    alt: "ROVANX Prime Focus product bottle"
  }
};

export function getProductVisual(slug: string) {
  return productVisuals[slug] || null;
}
