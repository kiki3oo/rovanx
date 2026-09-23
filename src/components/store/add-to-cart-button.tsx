"use client";

import { ShoppingBag } from "lucide-react";
import type { CartProduct } from "@/components/store/cart-provider";
import { useCart } from "@/components/store/cart-provider";
import { usePreferences } from "@/components/store/preferences-provider";

export function AddToCartButton({ product, label }: { product: CartProduct; label?: string }) {
  const { addItem } = useCart();
  const { t } = usePreferences();
  return (
    <button className="btn btn-primary w-full" onClick={() => addItem(product)}>
      <ShoppingBag size={18} />
      {label || t("add")}
    </button>
  );
}
