"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import type { CartProduct } from "@/components/store/cart-provider";
import { useCart } from "@/components/store/cart-provider";
import { usePreferences } from "@/components/store/preferences-provider";

export function BuyNowButton({
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
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleBuyNow() {
    setLoading(true);
    addItem(product, 1);
    router.push("/checkout");
  }

  return (
    <button
      type="button"
      className={className || "btn btn-secondary w-full"}
      onClick={handleBuyNow}
      disabled={loading}
    >
      {loading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        <>
          <span>{label || t("orderNow")}</span>
          <ArrowRight size={17} />
        </>
      )}
    </button>
  );
}
