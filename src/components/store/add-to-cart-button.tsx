"use client";

import { useState } from "react";
import { Check, Plus, ShoppingBag } from "lucide-react";
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
  const { addItem, lines } = useCart();
  const { t } = usePreferences();
  const [added, setAdded] = useState(false);

  const inCartQty = lines.find((line) => line.product.id === product.id)?.quantity || 0;

  function handleClick() {
    addItem(product, 1, true);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1800);
  }

  return (
    <button
      type="button"
      className={
        className ||
        `btn group relative overflow-hidden ${
          added
            ? "!border-emerald-500/60 !bg-emerald-600 !text-white"
            : "btn-primary shadow-[0_8px_22px_rgba(216,162,74,0.22)] hover:shadow-[0_12px_28px_rgba(216,162,74,0.34)]"
        } w-full transition-all duration-200`
      }
      onClick={handleClick}
    >
      {added ? (
        <>
          <Check size={17} className="text-white" />
          <span className="font-black">{t("added")}</span>
        </>
      ) : (
        <>
          <span className="relative flex items-center justify-center">
            <ShoppingBag size={17} className="transition-transform group-hover:scale-110" />
            <Plus size={10} className="-ml-1 -mt-2 font-black" />
          </span>
          <span className="font-black">{label || t("add")}</span>
          {inCartQty > 0 ? (
            <span className="rounded-full bg-black/25 px-2 py-0.5 text-[11px] font-black">
              {inCartQty}
            </span>
          ) : null}
        </>
      )}
    </button>
  );
}
