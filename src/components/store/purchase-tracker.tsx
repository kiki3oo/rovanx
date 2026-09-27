"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, params?: Record<string, unknown>) => void };
    gtag?: (...args: unknown[]) => void;
  }
}

export function PurchaseTracker({
  reference,
  total,
  currency = "MAD"
}: {
  reference: string;
  total: number;
  currency?: string;
}) {
  useEffect(() => {
    // Prevent duplicate fires per session
    const storageKey = `rovanx-purchased-${reference}`;
    try {
      if (window.sessionStorage.getItem(storageKey)) return;
      window.sessionStorage.setItem(storageKey, "1");
    } catch {
      // ignore
    }

    // Meta (Facebook) Purchase Event
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Purchase", {
        value: total,
        currency,
        content_type: "product"
      });
    }

    // TikTok CompletePayment Event
    if (typeof window !== "undefined" && window.ttq && typeof window.ttq.track === "function") {
      window.ttq.track("CompletePayment", {
        content_id: reference,
        value: total,
        currency
      });
    }

    // Google Analytics Purchase Event
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "purchase", {
        transaction_id: reference,
        value: total,
        currency
      });
    }
  }, [reference, total, currency]);

  return null;
}
