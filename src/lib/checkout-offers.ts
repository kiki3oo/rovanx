type OrderLine = {
  product: { id: string; slug: string };
  quantity: number;
  isBump: boolean;
};

type BundleLine = { productId: string; quantity: number };

export function matchesBundle(items: OrderLine[], bundleItems: BundleLine[]): boolean {
  return items.length === bundleItems.length &&
    bundleItems.every((bundleItem) => items.some((item) =>
      item.product.id === bundleItem.productId &&
      item.quantity === bundleItem.quantity &&
      !item.isBump
    ));
}

const bumpOffers: Record<string, { slug: string; price: number }> = {
  "rovanx-vitality-60": { slug: "rovanx-control-oil", price: 149 },
  "rovanx-vitality-30": { slug: "rovanx-control-oil", price: 149 },
  "rovanx-maca-max": { slug: "rovanx-control-oil", price: 149 },
  "rovanx-ginseng": { slug: "rovanx-control-oil", price: 149 },
  "rovanx-control-oil": { slug: "rovanx-vitality-60", price: 199 },
  "rovanx-prostate": { slug: "rovanx-ginseng", price: 149 }
};

export function validBumpPrice(items: OrderLine[]): number | null {
  const main = items.filter((item) => !item.isBump);
  const bump = items.filter((item) => item.isBump);
  if (bump.length !== 1 || main.length !== 1 || bump[0].quantity !== 1) return null;
  const offer = bumpOffers[main[0].product.slug];
  return offer?.slug === bump[0].product.slug ? offer.price : null;
}
