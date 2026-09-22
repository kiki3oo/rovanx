"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
        Ajouter a ma commande
      </button>
      <button className="btn btn-secondary" disabled={loading} onClick={() => decide(false)}>
        Passer
      </button>
    </div>
  );
}
