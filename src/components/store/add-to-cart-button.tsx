"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import type { CartProduct } from "@/components/store/cart-provider";
import { useCart } from "@/components/store/cart-provider";
import { usePreferences } from "@/components/store/preferences-provider";

export function AddToCartButton({
  product,
  label,
  className
}: {
  product: CartProduct;
  label?: string;
  className?: string;
}) {
  const { addItem } = useCart();
  const { t } = usePreferences();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }

  return (
    <button
      type="button"
      className={
        className ||
        `btn ${added ? "!bg-emerald-700 !text-white" : "btn-primary"} w-full transition-all duration-200`
      }
      onClick={handleClick}
    >
      {added ? (
        <>
          <Check size={18} className="text-white" />
          <span>{t("added")}</span>
        </>
      ) : (
        <>
          <ShoppingBag size={18} />
          <span>{label || t("add")}</span>
        </>
      )}
    </button>
  );
}
