const productVisuals: Record<string, { src: string; alt: string }> = {};

export function getProductVisual(slug: string) {
  return productVisuals[slug] || null;
}
