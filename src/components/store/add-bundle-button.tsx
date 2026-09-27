"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Check, Loader2, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/store/cart-provider";
import { usePreferences } from "@/components/store/preferences-provider";

type BundleItemProduct = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  regularPrice: number;
  quantity?: number;
};

export function AddBundleButton({
  products,
  label
}: {
  products: BundleItemProduct[];
  label?: string;
}) {
  const { addItem } = useCart();
  const { t } = usePreferences();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  function handleAddBundle() {
    setLoading(true);
    products.forEach((item) => {
      addItem(
        {
          id: item.id,
          name: item.name,
          slug: item.slug,
          sku: item.sku,
          price: item.price,
          regularPrice: item.regularPrice
        },
        item.quantity || 1
      );
    });
    setAdded(true);
    setTimeout(() => {
      router.push("/checkout");
    }, 400);
  }

  return (
    <button
      type="button"
      className={`btn ${added ? "!bg-emerald-700 !text-white" : "btn-primary"} mt-5 w-full transition-all duration-200`}
      onClick={handleAddBundle}
      disabled={loading}
    >
      {loading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : added ? (
        <>
          <Check size={18} className="text-white" />
          <span>{t("added")}</span>
        </>
      ) : (
        <>
          <ShoppingBag size={18} />
          <span>{label || t("composeOrder")}</span>
        </>
      )}
    </button>
  );
}
