"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePreferences } from "@/components/store/preferences-provider";

export function UpsellDecision({
  orderId,
  reference,
  offeredProductId
}: {
  orderId: string;
  reference: string;
  offeredProductId: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { t } = usePreferences();

  async function decide(accept: boolean) {
    setLoading(true);
    await fetch(`/api/orders/${orderId}/upsell`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accept, offeredProductId })
    });
    router.push(`/order/${reference}`);
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button className="btn btn-primary" disabled={loading} onClick={() => decide(true)}>
        {t("addToOrder")}
      </button>
      <button className="btn btn-secondary" disabled={loading} onClick={() => decide(false)}>
        {t("skip")}
      </button>
    </div>
  );
}
