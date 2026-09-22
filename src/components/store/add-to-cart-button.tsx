"use client";

import { ShoppingBag } from "lucide-react";
import type { CartProduct } from "@/components/store/cart-provider";
import { useCart } from "@/components/store/cart-provider";

export function AddToCartButton({ product, label = "Ajouter" }: { product: CartProduct; label?: string }) {
  const { addItem } = useCart();
  return (
    <button className="btn btn-primary w-full" onClick={() => addItem(product)}>
      <ShoppingBag size={18} />
      {label}
    </button>
  );
}
