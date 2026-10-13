"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Gift,
  Lock,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";
import { RovanxLogo } from "@/components/brand/rovanx-logo";
import { usePreferences } from "@/components/store/preferences-provider";
import {
  VIP_WHEEL_STORAGE_KEY,
  type WheelFunnelTarget
} from "@/lib/wheel-funnels";

type WheelSlice = {
  labelAr: string;
  labelFr: string;
  subAr: string;
  subFr: string;
  bg: string;
  textColor: string;
  isJackpot?: boolean;
};

const WHEEL_SLICES: WheelSlice[] = [
  {
    labelAr: "-50%",
    labelFr: "-50%",
    subAr: "عرض VIP",
    subFr: "Offre VIP",
    bg: "#d8a24a",
    textColor: "#170306",
    isJackpot: true
  },
  {
    labelAr: "-10%",
    labelFr: "-10%",
    subAr: "تخفيض",
    subFr: "Remise",
    bg: "#480a16",
    textColor: "#ffffff"
  },
  {
    labelAr: "-40%",
    labelFr: "-40%",
    subAr: "+ شحن 0 DH",
    subFr: "+ Port 0 DH",
    bg: "#181a24",
    textColor: "#fde68a",
    isJackpot: true
  },
  {
    labelAr: "-20%",
    labelFr: "-20%",
    subAr: "تخفيض",
    subFr: "Remise",
    bg: "#5a0d1c",
    textColor: "#ffffff"
  },
  {
    labelAr: "-30%",
    labelFr: "-30%",
    subAr: "تخفيض فوري",
    subFr: "Immédiat",
    bg: "#b47b2a",
    textColor: "#170306"
  },
  {
    labelAr: "-10%",
    labelFr: "-10%",
    subAr: "هدية",
    subFr: "Bonus",
    bg: "#2b060d",
    textColor: "#ffffff"
  },
  {
    labelAr: "-40%",
    labelFr: "-40%",
    subAr: "عرض الكورس",
    subFr: "Offre Cure",
    bg: "#e5b25d",
    textColor: "#170306",
    isJackpot: true
  },
  {
    labelAr: "-20%",
    labelFr: "-20%",
    subAr: "+ شحن مجاني",
    subFr: "+ Livraison",
    bg: "#3b0811",
    textColor: "#fde68a"
  }
];

const RECENT_WINNERS_AR = [
  "أمين من الدار البيضاء ربح للتو تخفيض VIP + شحن سري مجاني ✓",
  "يوسف من الرباط فعّل عرضه الحصري (-40%) منذ دقيقتين ✓",
  "كريم من مراكش ربح تخفيض الكورس + توصيل مجاني 0 DH ✓",
  "هشام من طنجة فعّل كود الخصم الحصري منذ 3 دقائق ✓",
  "سعيد من فاس ربح عرض VIP مع التغليف السري المجاني ✓",
  "عمر من أكادير فعّل عرضه الحصري منذ دقيقة واحدة ✓"
];

const RECENT_WINNERS_FR = [
  "Amine (Casablanca) vient de gagner la remise VIP + Livraison discrète 0 DH ✓",
  "Youssef (Rabat) a activé son offre exclusive (-40%) il y a 2 min ✓",
  "Karim (Marrakech) a débloqué la remise Cure + Livraison gratuite ✓",
  "Hicham (Tanger) a activé son code privilège il y a 3 min ✓",
  "Saïd (Fès) a gagné l'offre VIP avec colis neutre gratuit ✓"
];

function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians)
  };
}

function createSlicePath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    cx,
    cy,
    "L",
    start.x,
    start.y,
    "A",
    r,
    r,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    "Z"
  ].join(" ");
}

export function VipWheelFunnel({ funnel }: { funnel: WheelFunnelTarget }) {
  const { locale, setLocale } = usePreferences();
  const isAr = locale === "ar";

  const [spinning, setSpinning] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winnerTickerIdx, setWinnerTickerIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15 * 60); // 15 minutes urgency timer

  // Rotate live winner ticker every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWinnerTickerIdx((prev) => (prev + 1) % RECENT_WINNERS_AR.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer once won
  useEffect(() => {
    if (!hasWon) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [hasWon]);

  function handleSpin() {
    if (spinning || hasWon) return;
    setSpinning(true);

    // If funnel prizePercent is 50 (e.g. Pack), land on slice 0 (-50% VIP, center at 22.5 deg -> target 360 - 22.5 = 337.5)
    // If funnel prizePercent is 40 (e.g. single product), land on slice 2 (-40% + 0 DH, center at 112.5 deg -> target 360 - 112.5 = 247.5)
    const targetSliceIndex = funnel.prizePercent === 50 ? 0 : 2;
    const sliceCenterAngle = targetSliceIndex * 45 + 22.5;
    const fullSpins = 6 * 360; // 6 full turns
    const targetRotation = fullSpins + (360 - sliceCenterAngle);

    setRotation(targetRotation);

    setTimeout(() => {
      setSpinning(false);
      setHasWon(true);

      if (typeof window !== "undefined") {
        const expiresAt = Date.now() + 15 * 60 * 1000;
        window.localStorage.setItem(
          VIP_WHEEL_STORAGE_KEY,
          JSON.stringify({
            promoCode: funnel.promoCode,
            prizePercent: funnel.prizePercent,
            funnelCode: funnel.code,
            expiresAt
          })
        );
      }
    }, 4600);
  }

  function handleClaimAndEnter() {
    if (typeof window === "undefined") return;

    const expiresAt = Date.now() + 15 * 60 * 1000;
    window.localStorage.setItem(
      VIP_WHEEL_STORAGE_KEY,
      JSON.stringify({
        promoCode: funnel.promoCode,
        prizePercent: funnel.prizePercent,
        funnelCode: funnel.code,
        expiresAt
      })
    );

    // If user is on a subdomain (e.g. promo.rovanx.com or offre.rovanx.com), redirect to main domain rovanx.com
    const host = window.location.hostname;
    const isSubdomain =
      host.endsWith(".rovanx.com") && host !== "rovanx.com" && host !== "www.rovanx.com";

    const separator = funnel.targetPath.includes("?") ? "&" : "?";
    const [pathWithoutHash, hashPart] = funnel.targetPath.split("#");
    const destRelative = `${pathWithoutHash}${separator}promo=${funnel.promoCode}&utm_source=vip_wheel&utm_campaign=${funnel.code}${
      hashPart ? `#${hashPart}` : ""
    }`;

    if (isSubdomain) {
      window.location.href = `https://rovanx.com${destRelative}`;
    } else {
      window.location.href = destRelative;
    }
  }

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const secs = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#170306] via-[#24060c] to-[#0d0f14] text-white selection:bg-bronze-500 selection:text-black"
    >
      {/* Ambient Royal Burgundy & Gold Glows */}
      <div className="pointer-events-none fixed -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#8c162c]/30 blur-[130px]" />
      <div className="pointer-events-none fixed bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-bronze-500/15 blur-[130px]" />

      {/* Top Royal Bar */}
      <header className="relative z-20 border-b border-[#8c162c]/40 bg-[#170306]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <RovanxLogo className="h-12 w-auto sm:h-14" tone="light" priority />
            <span className="hidden rounded-full border border-bronze-400/35 bg-bronze-500/15 px-3 py-1 text-[11px] font-black text-bronze-300 sm:inline-flex">
              {isAr ? "✨ بوابة العروض الحصرية VIP" : "✨ Portail Privilège VIP"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale(isAr ? "fr" : "ar")}
              className="rounded-xl border border-[#991b31]/60 bg-gradient-to-b from-[#5a0d1c] to-[#33070f] px-3.5 py-1.5 text-xs font-black text-white shadow-md transition hover:border-bronze-400"
            >
              {isAr ? "Français" : "العربية"}
            </button>
          </div>
        </div>
      </header>

      {/* Live Winner Social Proof Bar */}
      <div className="relative z-20 border-b border-bronze-500/20 bg-gradient-to-r from-[#2b060d] via-[#480a16] to-[#2b060d] px-4 py-2 text-center text-xs font-bold text-bronze-200">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-2">
          <Sparkles size={14} className="shrink-0 text-bronze-400 animate-pulse" />
          <span className="truncate">
            {isAr ? RECENT_WINNERS_AR[winnerTickerIdx] : RECENT_WINNERS_FR[winnerTickerIdx]}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Column 1: Copy + High-Converting Value Proposition (Or Winner Card after spin) */}
          <div className="order-2 lg:order-1">
            {!hasWon ? (
              <div className="rounded-3xl border border-[#8c162c]/50 bg-gradient-to-b from-[#24060c]/90 via-[#190408]/95 to-[#12141a]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-bronze-400/40 bg-bronze-500/15 px-3.5 py-1 text-xs font-black text-bronze-300">
                  <Gift size={14} className="text-bronze-400" />
                  <span>
                    {isAr
                      ? "فرصة واحدة لكل زائر اليوم — تخفيض فوري مضمون"
                      : "1 seule chance par visiteur aujourd'hui — Remise garantie"}
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                  {isAr ? (
                    <>
                      دوّر عجلة <span className="text-bronze-400">ROVANX الملكية</span> واربح تخفيضك الحصري حتى{" "}
                      <span className="underline decoration-bronze-400 decoration-2 underline-offset-4">
                        -50%
                      </span>
                    </>
                  ) : (
                    <>
                      Tournez la Roue <span className="text-bronze-400">ROVANX Royale</span> et gagnez jusqu&apos;à{" "}
                      <span className="underline decoration-bronze-400 decoration-2 underline-offset-4">
                        -50%
                      </span>
                    </>
                  )}
                </h1>

                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                  {isAr
                    ? `أدر العجلة الآن بضغطة واحدة لتفعيل عرضك الخاص على (${funnel.productLabelAr}) مع الشحن السري والمجاني لباب منزلك.`
                    : `Lancez la roue en un clic pour débloquer votre remise privilège sur (${funnel.productLabelFr}) avec livraison gratuite et confidentielle.`}
                </p>

                {/* Spin Button for Mobile/Desktop */}
                <button
                  type="button"
                  disabled={spinning}
                  onClick={handleSpin}
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-bronze-300/60 bg-gradient-to-r from-[#d8a24a] via-[#f59e0b] to-[#c2882e] px-6 py-4 text-base font-black text-[#170306] shadow-[0_12px_35px_rgba(216,162,74,0.4)] transition-all hover:scale-[1.01] hover:shadow-[0_16px_45px_rgba(216,162,74,0.55)] disabled:opacity-60 sm:text-lg"
                >
                  <Sparkles size={20} className={spinning ? "animate-spin" : ""} />
                  <span>
                    {spinning
                      ? isAr
                        ? "جاري تدوير العجلة..."
                        : "La roue tourne..."
                      : isAr
                        ? "🎯 دوّر العجلة الآن واكشف عن تخفيضك"
                        : "🎯 Tourner la roue maintenant"}
                  </span>
                </button>

                {/* 3 High-Confirmation & High-Delivery Guarantees */}
                <div className="mt-6 grid gap-2.5 border-t border-white/10 pt-5 text-xs text-white/80 sm:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                    <Truck size={16} className="shrink-0 text-bronze-400" />
                    <span className="font-bold">
                      {isAr ? "توصيل مجاني 0 DH" : "Livraison 0 DH"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                    <Lock size={16} className="shrink-0 text-bronze-400" />
                    <span className="font-bold">
                      {isAr ? "تغليف سري 100%" : "Colis 100% discret"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                    <ShieldCheck size={16} className="shrink-0 text-bronze-400" />
                    <span className="font-bold">
                      {isAr ? "الدفع عند الاستلام" : "Paiement livraison"}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* WINNER CELEBRATION CARD (High Conversion + Confirmation + Delivery Booster) */
              <div className="relative overflow-hidden rounded-3xl border-2 border-bronze-400 bg-gradient-to-b from-[#33070f] via-[#1f050a] to-[#12141a] p-6 shadow-[0_20px_70px_rgba(216,162,74,0.35)] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 text-xs font-black text-emerald-300">
                    <CheckCircle2 size={14} />
                    <span>
                      {isAr ? "🎉 مبروك! تم ربح الجائزة الكبرى" : "🎉 Félicitations ! Gros lot débloqué"}
                    </span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/20 px-3 py-1 font-mono text-xs font-black text-amber-300">
                    <Clock size={13} />
                    <span>
                      {isAr ? `صالح لمدة ${mins}:${secs}` : `Valide ${mins}:${secs}`}
                    </span>
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  {isAr ? funnel.vipBadgeAr : funnel.vipBadgeFr}
                </h2>

                <p className="mt-2 text-sm text-white/80">
                  {isAr
                    ? `تم تفعيل عرضك الخاص على (${funnel.productLabelAr}). اضغط على الزر أسفله للدخول إلى المتجر وإتمام طلبك بالتخفيض المفعّل قبل انتهاء العداد.`
                    : `Votre offre privilège sur (${funnel.productLabelFr}) est activée. Cliquez ci-dessous pour accéder à la boutique avec votre remise appliquée.`}
                </p>

                {/* Auto-Activated Coupon Box */}
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-bronze-400/40 bg-black/45 px-4 py-3">
                  <div>
                    <span className="block text-[11px] text-white/60">
                      {isAr ? "كود الامتياز الخاص بك:" : "Votre code privilège :"}
                    </span>
                    <strong className="font-mono text-lg font-black tracking-wider text-bronze-300">
                      {funnel.promoCode}
                    </strong>
                  </div>
                  <span className="rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-3 py-1.5 text-xs font-black text-emerald-300">
                    {isAr ? "✓ مفعّل تلقائياً" : "✓ Activé d'office"}
                  </span>
                </div>

                {/* Big Pulsing Claim CTA */}
                <button
                  type="button"
                  onClick={handleClaimAndEnter}
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-bronze-300 bg-gradient-to-r from-[#d8a24a] via-[#f59e0b] to-[#d8a24a] px-6 py-4 text-base font-black text-[#170306] shadow-[0_14px_40px_rgba(245,158,11,0.45)] transition-all hover:scale-[1.02] sm:text-lg"
                >
                  <span>
                    {isAr
                      ? "🎁 الدخول للمتجر والاستفادة من التخفيض الآن"
                      : "🎁 Accéder à l'offre avec ma remise maintenant"}
                  </span>
                  {isAr ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </button>

                {/* Confirmation & Delivery Rate Reassurance Box */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs leading-relaxed text-white/80">
                  <p className="font-black text-bronze-300">
                    {isAr
                      ? "🔒 كيف تستفيد من عرضك بكل سرية وأمان؟"
                      : "🔒 Comment profiter de votre offre en toute discrétion ?"}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    <li>
                      {isAr
                        ? "1. ادخل لصفحة العرض واختر الكمية المناسبة أو أضف أي منتج آخر لسلتك."
                        : "1. Accédez à la page de l'offre et choisissez votre formule."}
                    </li>
                    <li>
                      {isAr
                        ? "2. سجل اسمك ورقم هاتفك (10 أرقام) — لا تدفع أي درهم الآن."
                        : "2. Indiquez votre nom et téléphone (10 chiffres) — 0 DH à payer maintenant."}
                    </li>
                    <li>
                      {isAr
                        ? "3. سنتصل بك لتأكيد العنوان ويصلك الطرد سرياً ومجاناً حتى باب منزلك!"
                        : "3. Nous confirmons par téléphone et livrons gratuitement en colis neutre !"}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Column 2: The Royal ROVANX Wheel */}
          <div className="order-1 flex flex-col items-center justify-center lg:order-2">
            <div className="relative flex items-center justify-center p-3 sm:p-5">
              {/* Outer Golden Halo */}
              <div className="pointer-events-none absolute inset-2 rounded-full bg-gradient-to-tr from-[#8c162c]/50 via-bronze-500/35 to-[#8c162c]/50 blur-2xl" />

              {/* Top Golden Pointer */}
              <div className="absolute -top-2 left-1/2 z-30 -translate-x-1/2 drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]">
                <svg width="46" height="52" viewBox="0 0 46 52" fill="none">
                  <path
                    d="M23 50L5 14C2 8 6.5 2 13 2H33C39.5 2 44 8 41 14L23 50Z"
                    fill="url(#pointerGold)"
                    stroke="#170306"
                    strokeWidth="3"
                  />
                  <circle cx="23" cy="14" r="5" fill="#170306" />
                  <defs>
                    <linearGradient id="pointerGold" x1="0" y1="0" x2="46" y2="52" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fde68a" />
                      <stop offset="0.5" stopColor="#d8a24a" />
                      <stop offset="1" stopColor="#92400e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Outer Royal Rim with Golden Studs */}
              <div className="relative h-[320px] w-[320px] rounded-full border-[8px] border-[#d8a24a] bg-[#170306] p-1.5 shadow-[0_0_55px_rgba(216,162,74,0.35),inset_0_0_25px_rgba(0,0,0,0.9)] sm:h-[390px] sm:w-[390px]">
                {/* Rotating SVG Wheel */}
                <div
                  onClick={handleSpin}
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: spinning
                      ? "transform 4.5s cubic-bezier(0.14, 0.85, 0.18, 1)"
                      : "none"
                  }}
                  className="h-full w-full cursor-pointer rounded-full overflow-hidden"
                >
                  <svg viewBox="0 0 400 400" className="h-full w-full">
                    {WHEEL_SLICES.map((slice, index) => {
                      const startAngle = index * 45;
                      const endAngle = startAngle + 45;
                      const midAngle = startAngle + 22.5;
                      const path = createSlicePath(200, 200, 196, startAngle, endAngle);
                      const labelPos = polarToCartesian(200, 200, 128, midAngle);
                      const subPos = polarToCartesian(200, 200, 94, midAngle);
                      const studPos = polarToCartesian(200, 200, 186, startAngle);

                      return (
                        <g key={index}>
                          <path
                            d={path}
                            fill={slice.bg}
                            stroke="#d8a24a"
                            strokeWidth="2"
                          />
                          <circle
                            cx={studPos.x}
                            cy={studPos.y}
                            r="4"
                            fill="#fde68a"
                          />
                          <text
                            x={labelPos.x}
                            y={labelPos.y}
                            fill={slice.textColor}
                            fontSize="24"
                            fontWeight="900"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            transform={`rotate(${midAngle}, ${labelPos.x}, ${labelPos.y})`}
                          >
                            {isAr ? slice.labelAr : slice.labelFr}
                          </text>
                          <text
                            x={subPos.x}
                            y={subPos.y}
                            fill={slice.textColor}
                            fontSize="11"
                            fontWeight="800"
                            opacity="0.9"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            transform={`rotate(${midAngle}, ${subPos.x}, ${subPos.y})`}
                          >
                            {isAr ? slice.subAr : slice.subFr}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Center Hub with ROVANX Golden Lion Mark */}
                <button
                  type="button"
                  onClick={handleSpin}
                  disabled={spinning}
                  aria-label="Spin wheel"
                  className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#fde68a] bg-gradient-to-b from-[#3b0811] via-[#24060c] to-[#170306] p-2.5 shadow-[0_0_25px_rgba(0,0,0,0.9)] transition-transform hover:scale-105 sm:h-24 sm:w-24"
                >
                  <RovanxLogo variant="mark" className="h-full w-full" />
                </button>
              </div>
            </div>

            {!hasWon ? (
              <p className="mt-2 text-center text-xs font-bold text-bronze-300/90">
                {isAr
                  ? "👆 اضغط على وسط العجلة أو على الزر الذهبي لتدويرها"
                  : "👆 Cliquez au centre de la roue ou sur le bouton doré pour tourner"}
              </p>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
