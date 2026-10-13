"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Clock, Gift, Sparkles } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import {
  captureUtmAttributionFromUrl,
  getActiveWheelReward,
  VIP_WHEEL_STORAGE_KEY,
  type StoredWheelReward
} from "@/lib/wheel-funnels";

export function VipPromoBanner() {
  const pathname = usePathname();
  const { locale } = usePreferences();
  const isAr = locale === "ar";

  const [reward, setReward] = useState<StoredWheelReward | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    // Capture & persist any incoming UTMs (utm_source, utm_medium / Ad Set, utm_campaign, etc.)
    // and check if URL has ?promo=ROV-... to activate wheel reward if coming from subdomain
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const wheelParam = params.get("wheel") || undefined;
      captureUtmAttributionFromUrl({ funnelCode: wheelParam });

      const promoParam = params.get("promo");
      let current = getActiveWheelReward();

      if (!current && promoParam && promoParam.startsWith("ROV-")) {
        current = {
          promoCode: promoParam,
          prizePercent: promoParam.includes("50") ? 50 : 40,
          funnelCode: wheelParam || params.get("utm_campaign") || "v1",
          expiresAt: Date.now() + 15 * 60 * 1000
        };
        window.localStorage.setItem(VIP_WHEEL_STORAGE_KEY, JSON.stringify(current));
      }

      if (current) {
        setReward(current);
        setSecondsLeft(Math.max(0, Math.floor((current.expiresAt - Date.now()) / 1000)));
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (!reward) return;
    const timer = setInterval(() => {
      const remaining = Math.max(0, Math.floor((reward.expiresAt - Date.now()) / 1000));
      setSecondsLeft(remaining);
      if (remaining <= 0) {
        setReward(null);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [reward]);

  if (!reward || secondsLeft <= 0) return null;
  if (pathname?.startsWith("/go") || pathname?.startsWith("/admin")) return null;

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const secs = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="relative z-40 border-b border-bronze-400/40 bg-gradient-to-r from-[#2b060d] via-[#5a0d1c] to-[#2b060d] px-3 py-2 text-white shadow-md">
      <div className="container flex flex-wrap items-center justify-center gap-2 text-center text-xs sm:justify-between sm:text-sm">
        <div className="flex items-center justify-center gap-2 font-bold">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bronze-500 text-black">
            <Gift size={14} />
          </span>
          <span>
            {isAr ? (
              <>
                🎉 <strong className="text-bronze-300">عرض عجلة الحظ مفعل تلقائياً:</strong> تخفيض يصل إلى{" "}
                <strong className="text-emerald-300">-{reward.prizePercent}%</strong> + شحن سري مجاني{" "}
                <span className="rounded bg-black/35 px-1.5 py-0.5 font-mono text-[11px] text-bronze-300">
                  {reward.promoCode}
                </span>
              </>
            ) : (
              <>
                🎉 <strong className="text-bronze-300">Offre Roue VIP activée :</strong> Jusqu&apos;à{" "}
                <strong className="text-emerald-300">-{reward.prizePercent}%</strong> + Livraison discrète 0 DH{" "}
                <span className="rounded bg-black/35 px-1.5 py-0.5 font-mono text-[11px] text-bronze-300">
                  {reward.promoCode}
                </span>
              </>
            )}
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-bronze-400/40 bg-black/40 px-3 py-0.5 font-mono text-xs font-black text-bronze-300">
          <Clock size={12} className="text-bronze-400" />
          <span>
            {isAr ? `ينتهي خلال ${mins}:${secs}` : `Expire dans ${mins}:${secs}`}
          </span>
          <Sparkles size={12} className="text-bronze-400" />
        </div>
      </div>
    </div>
  );
}
