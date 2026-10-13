"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Crown,
  Gift,
  Lock,
  ShieldCheck,
  Sparkles,
  Truck,
  Volume2,
  VolumeX
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
  icon: string;
  gradId: string;
  textColor: string;
  subBg: string;
  subText: string;
  isJackpot?: boolean;
};

const WHEEL_SLICES: WheelSlice[] = [
  {
    labelAr: "-50%",
    labelFr: "-50%",
    subAr: "JACKPOT VIP",
    subFr: "JACKPOT VIP",
    icon: "👑",
    gradId: "url(#sliceGoldJackpot)",
    textColor: "#170306",
    subBg: "#170306",
    subText: "#fde68a",
    isJackpot: true
  },
  {
    labelAr: "-15%",
    labelFr: "-15%",
    subAr: "تخفيض فوري",
    subFr: "Remise",
    icon: "✨",
    gradId: "url(#sliceRoyalCrimson)",
    textColor: "#ffffff",
    subBg: "rgba(216,162,74,0.22)",
    subText: "#fde68a"
  },
  {
    labelAr: "-40%",
    labelFr: "-40%",
    subAr: "+ شحن 0 DH",
    subFr: "+ Port 0 DH",
    icon: "🔥",
    gradId: "url(#sliceObsidianGold)",
    textColor: "#fde68a",
    subBg: "#d8a24a",
    subText: "#170306",
    isJackpot: true
  },
  {
    labelAr: "-20%",
    labelFr: "-20%",
    subAr: "تخفيض خاص",
    subFr: "Privilège",
    icon: "💎",
    gradId: "url(#sliceRubyVelvet)",
    textColor: "#ffffff",
    subBg: "rgba(255,255,255,0.14)",
    subText: "#fde68a"
  },
  {
    labelAr: "-30%",
    labelFr: "-30%",
    subAr: "+ هدية سرية",
    subFr: "+ Bonus VIP",
    icon: "🎁",
    gradId: "url(#sliceBronzeLuxe)",
    textColor: "#170306",
    subBg: "#170306",
    subText: "#fde68a"
  },
  {
    labelAr: "-10%",
    labelFr: "-10%",
    subAr: "شحن مجاني",
    subFr: "Port Gratuit",
    icon: "⚡",
    gradId: "url(#sliceRoyalCrimson)",
    textColor: "#ffffff",
    subBg: "rgba(216,162,74,0.22)",
    subText: "#fde68a"
  },
  {
    labelAr: "-40%",
    labelFr: "-40%",
    subAr: "عرض الكورس",
    subFr: "Offre Cure",
    icon: "👑",
    gradId: "url(#sliceGoldJackpot)",
    textColor: "#170306",
    subBg: "#170306",
    subText: "#fde68a",
    isJackpot: true
  },
  {
    labelAr: "-25%",
    labelFr: "-25%",
    subAr: "+ توصيل 0 DH",
    subFr: "+ Livraison",
    icon: "🌟",
    gradId: "url(#sliceObsidianGold)",
    textColor: "#fde68a",
    subBg: "rgba(216,162,74,0.25)",
    subText: "#ffffff"
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
  const [flapperTilt, setFlapperTilt] = useState(0);
  const [bulbPhase, setBulbPhase] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [winnerTickerIdx, setWinnerTickerIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Rotate live winner ticker every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWinnerTickerIdx((prev) => (prev + 1) % RECENT_WINNERS_AR.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Animate 16 marquee rim bulbs (faster when spinning)
  useEffect(() => {
    const interval = setInterval(
      () => {
        setBulbPhase((prev) => (prev + 1) % 4);
      },
      spinning ? 110 : 550
    );
    return () => clearInterval(interval);
  }, [spinning]);

  // Countdown timer once won
  useEffect(() => {
    if (!hasWon) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [hasWon]);

  // Synthesize realistic mechanical wheel tick & royal win chord using Web Audio API
  function playMechanicalTick(intensity = 1) {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520 + intensity * 180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.14 * intensity, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore audio errors if blocked by browser autoplay policy
    }
  }

  function playWinFanfare() {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        const startTime = ctx.currentTime + idx * 0.09;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.16, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.55);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.56);
      });
    } catch {
      // Ignore audio errors
    }
  }

  function handleSpin() {
    if (spinning || hasWon) return;
    setSpinning(true);

    // Target slice 0 (-50% JACKPOT VIP) for 50% funnels, or slice 2 (-40% + 0 DH) for 40% funnels
    const targetSliceIndex = funnel.prizePercent === 50 ? 0 : 2;
    const sliceCenterAngle = targetSliceIndex * 45 + 22.5;
    const fullSpins = 7 * 360; // 7 full turns for dramatic momentum
    const targetRotation = fullSpins + (360 - sliceCenterAngle);

    setRotation(targetRotation);

    // Schedule decelerating mechanical ticks + flapper bounces over 4.8s
    const totalDuration = 4800;
    const tickTimes = [
      80, 160, 240, 320, 400, 480, 560, 650, 740, 840, 940, 1050, 1170, 1300,
      1440, 1590, 1750, 1920, 2100, 2300, 2520, 2760, 3020, 3310, 3630, 3980,
      4360
    ];

    tickTimes.forEach((t, i) => {
      setTimeout(() => {
        const progress = i / tickTimes.length;
        const tilt = Math.max(8, Math.round(28 * (1 - progress * 0.6)));
        setFlapperTilt(-tilt);
        playMechanicalTick(1 - progress * 0.5);
        setTimeout(() => setFlapperTilt(0), 65);
      }, t);
    });

    setTimeout(() => {
      setSpinning(false);
      setFlapperTilt(0);
      setHasWon(true);
      playWinFanfare();

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
    }, totalDuration);
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

  // 16 outer rim LED bulbs
  const rimBulbs = Array.from({ length: 16 }, (_, i) => {
    const angle = i * (360 / 16);
    const pos = polarToCartesian(50, 50, 46.8, angle);
    const isLit = spinning ? (i + bulbPhase) % 2 === 0 : (i + bulbPhase) % 2 === 0;
    const isRuby = i % 4 === 0;
    return { angle, x: pos.x, y: pos.y, isLit, isRuby };
  });

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden bg-[#0c0204] text-white selection:bg-bronze-500 selection:text-black"
    >
      {/* Royal Velvet & Gold Radial Background Atmosphere */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 18%, rgba(140,22,44,0.42) 0%, rgba(45,7,15,0.65) 42%, rgba(12,2,4,0.98) 85%)"
        }}
      />
      <div className="pointer-events-none fixed -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-bronze-500/15 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-[#8c162c]/25 blur-[130px]" />

      {/* Confetti / Golden Sparkles Burst on Win */}
      {hasWon && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${(i * 4.2) % 100}%`,
                top: `-5%`,
                animationDelay: `${(i % 6) * 0.15}s`,
                animationDuration: `${2.4 + (i % 4) * 0.4}s`
              }}
              className="absolute h-3 w-2 animate-bounce rounded-sm bg-gradient-to-b from-[#fef08a] via-[#d8a24a] to-[#92400e] opacity-80 shadow-[0_0_12px_#fde68a]"
            />
          ))}
        </div>
      )}

      {/* Top Royal Header Bar */}
      <header className="relative z-20 border-b border-bronze-500/25 bg-[#140307]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-3">
            <RovanxLogo className="h-11 w-auto sm:h-13" tone="light" priority />
            <span className="hidden items-center gap-1.5 rounded-full border border-bronze-400/40 bg-gradient-to-r from-bronze-500/20 to-[#5a0d1c]/50 px-3.5 py-1 text-[11px] font-black text-bronze-300 shadow-inner sm:inline-flex">
              <Crown size={13} className="text-bronze-400" />
              <span>{isAr ? "نادي العروض الملكية VIP" : "Club Privilège Royal VIP"}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSoundEnabled((prev) => !prev)}
              aria-label="Toggle sound"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-bronze-300 transition hover:border-bronze-400/50 hover:bg-white/10"
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>
            <button
              type="button"
              onClick={() => setLocale(isAr ? "fr" : "ar")}
              className="rounded-xl border border-bronze-400/40 bg-gradient-to-b from-[#5a0d1c] to-[#2b060d] px-3.5 py-1.5 text-xs font-black text-bronze-200 shadow-md transition hover:border-bronze-300 hover:text-white"
            >
              {isAr ? "Français" : "العربية"}
            </button>
          </div>
        </div>
      </header>

      {/* Live Winner Social Proof Ticker */}
      <div className="relative z-20 border-b border-bronze-500/20 bg-gradient-to-r from-[#1d0409] via-[#480a16] to-[#1d0409] px-4 py-2 text-center text-xs font-bold text-bronze-200 shadow-md">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-2">
          <Sparkles size={14} className="shrink-0 animate-pulse text-bronze-400" />
          <span className="truncate">
            {isAr ? RECENT_WINNERS_AR[winnerTickerIdx] : RECENT_WINNERS_FR[winnerTickerIdx]}
          </span>
        </div>
      </div>

      {/* Main Layout */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* Column 1: Interactive 3D Royal Casino Wheel + Pedestal */}
          <div className="order-1 flex flex-col items-center justify-center lg:order-2">
            {/* Top Crown Ribbon Badge above Wheel */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-bronze-400/50 bg-gradient-to-r from-[#3b0811] via-[#5a0d1c] to-[#3b0811] px-4 py-1 text-[11px] font-black tracking-wide text-bronze-200 shadow-[0_0_25px_rgba(216,162,74,0.3)]">
              <Crown size={13} className="text-bronze-400" />
              <span>
                {isAr
                  ? "عجلة الحظ الملكية — ربح فوري مضمون 100%"
                  : "ROUE ROYALE ROVANX — GAIN GARANTI 100%"}
              </span>
            </div>

            {/* Wheel Assembly Container */}
            <div className="relative flex flex-col items-center justify-center pt-5">
              {/* Ambient Golden Backlight Behind Wheel */}
              <div className="pointer-events-none absolute inset-4 rounded-full bg-gradient-to-tr from-[#8c162c]/60 via-bronze-500/40 to-[#8c162c]/60 blur-3xl" />

              {/* 12 O'Clock 3D Royal Pointer / Mechanical Flapper */}
              <div
                style={{
                  transform: `translateX(-50%) rotate(${flapperTilt}deg)`,
                  transformOrigin: "50% 14px",
                  transition: flapperTilt === 0 ? "transform 120ms ease-out" : "transform 45ms ease-in"
                }}
                className="
                  absolute -top-1 left-1/2 z-40
                  drop-shadow-[0_12px_18px_rgba(0,0,0,0.95)]
                "
              >
                <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
                  <defs>
                    <linearGradient id="flapperGold" x1="0" y1="0" x2="64" y2="72" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fffbeb" />
                      <stop offset="28%" stopColor="#fde68a" />
                      <stop offset="60%" stopColor="#d8a24a" />
                      <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>
                    <linearGradient id="flapperRim" x1="32" y1="0" x2="32" y2="72" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#92400e" />
                      <stop offset="50%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#451a03" />
                    </linearGradient>
                    <radialGradient id="rubyGem" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#ffccd5" />
                      <stop offset="35%" stopColor="#e11d48" />
                      <stop offset="85%" stopColor="#881337" />
                      <stop offset="100%" stopColor="#2b060d" />
                    </radialGradient>
                  </defs>
                  {/* Outer Royal Shield Mount */}
                  <path
                    d="M32 68L11 22C7 13 13.5 3 23.5 3H40.5C50.5 3 57 13 53 22L32 68Z"
                    fill="url(#flapperGold)"
                    stroke="url(#flapperRim)"
                    strokeWidth="3.5"
                  />
                  {/* Inner 3D Facet */}
                  <path
                    d="M32 58L18 22H46L32 58Z"
                    fill="#92400e"
                    fillOpacity="0.45"
                  />
                  <path
                    d="M32 58L32 18H46L32 58Z"
                    fill="#fffbeb"
                    fillOpacity="0.35"
                  />
                  {/* Center Royal Ruby Jewel */}
                  <circle cx="32" cy="18" r="9" fill="#170306" stroke="#fde68a" strokeWidth="2" />
                  <circle cx="32" cy="18" r="6.5" fill="url(#rubyGem)" />
                  <circle cx="30" cy="15.5" r="2" fill="#ffffff" fillOpacity="0.8" />
                </svg>
              </div>

              {/* OUTER 3D METALLIC GOLD & CRIMSON CASING */}
              <div
                className="
                  relative z-20 flex h-[340px] w-[340px] items-center justify-center rounded-full p-[18px]
                  shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_55px_rgba(216,162,74,0.35)]
                  sm:h-[420px] sm:w-[420px] sm:p-[22px]
                "
                style={{
                  background:
                    "conic-gradient(from 0deg, #78350f, #fde68a, #b47b2a, #fffbeb, #92400e, #d8a24a, #fef08a, #78350f)"
                }}
              >
                {/* Dark Crimson Recessed Bezel Channel for Marquee Bulbs */}
                <div className="relative flex h-full w-full items-center justify-center rounded-full border-[3px] border-[#fef08a]/70 bg-gradient-to-b from-[#2b060d] via-[#170306] to-[#2b060d] p-[14px] shadow-[inset_0_0_25px_rgba(0,0,0,0.95)] sm:p-[16px]">
                  {/* 16 Glowing 3D Marquee Chase Bulbs around the Bezel */}
                  <div className="pointer-events-none absolute inset-0">
                    {rimBulbs.map((bulb, idx) => (
                      <div
                        key={idx}
                        style={{
                          left: `${bulb.x}%`,
                          top: `${bulb.y}%`
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                      >
                        <div
                          className={`h-3 w-3 rounded-full border border-[#78350f] transition-all duration-150 sm:h-3.5 sm:w-3.5 ${
                            bulb.isLit
                              ? bulb.isRuby
                                ? "scale-110 bg-[#fecdd3] shadow-[0_0_12px_#f43f5e,0_0_22px_#e11d48]"
                                : "scale-110 bg-[#fffbeb] shadow-[0_0_14px_#fde68a,0_0_24px_#f59e0b]"
                              : "bg-[#451a03]/80 opacity-60"
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Inner Golden Lip Framing the Spinning Wheel */}
                  <div className="relative h-full w-full overflow-hidden rounded-full border-[4px] border-[#d8a24a] bg-[#120205] shadow-[inset_0_0_35px_rgba(0,0,0,0.9)]">
                    {/* ROTATING SVG WHEEL DISC */}
                    <div
                      onClick={handleSpin}
                      style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: spinning
                          ? "transform 4.8s cubic-bezier(0.12, 0.88, 0.16, 1)"
                          : "none"
                      }}
                      className="h-full w-full cursor-pointer select-none"
                    >
                      <svg viewBox="0 0 440 440" className="h-full w-full">
                        <defs>
                          {/* 1. Radiant Brushed Gold Jackpot Slice Gradient */}
                          <radialGradient id="sliceGoldJackpot" cx="50%" cy="50%" r="55%">
                            <stop offset="0%" stopColor="#fffbeb" />
                            <stop offset="45%" stopColor="#fde68a" />
                            <stop offset="78%" stopColor="#d8a24a" />
                            <stop offset="100%" stopColor="#92400e" />
                          </radialGradient>

                          {/* 2. Deep Royal Crimson Velvet Slice Gradient */}
                          <radialGradient id="sliceRoyalCrimson" cx="50%" cy="50%" r="55%">
                            <stop offset="0%" stopColor="#8c162c" />
                            <stop offset="60%" stopColor="#480a16" />
                            <stop offset="100%" stopColor="#1d0308" />
                          </radialGradient>

                          {/* 3. Obsidian Carbon & Gold Slice Gradient */}
                          <radialGradient id="sliceObsidianGold" cx="50%" cy="50%" r="55%">
                            <stop offset="0%" stopColor="#2a2d3d" />
                            <stop offset="65%" stopColor="#14161f" />
                            <stop offset="100%" stopColor="#08090d" />
                          </radialGradient>

                          {/* 4. Imperial Ruby Velvet Slice Gradient */}
                          <radialGradient id="sliceRubyVelvet" cx="50%" cy="50%" r="55%">
                            <stop offset="0%" stopColor="#a31c35" />
                            <stop offset="65%" stopColor="#5a0d1c" />
                            <stop offset="100%" stopColor="#26040b" />
                          </radialGradient>

                          {/* 5. Warm Bronze Metallic Slice Gradient */}
                          <radialGradient id="sliceBronzeLuxe" cx="50%" cy="50%" r="55%">
                            <stop offset="0%" stopColor="#fef08a" />
                            <stop offset="55%" stopColor="#c88d32" />
                            <stop offset="100%" stopColor="#78350f" />
                          </radialGradient>

                          {/* Metallic Gold Spoke / Pin Gradient */}
                          <linearGradient id="goldPinGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#fffbeb" />
                            <stop offset="50%" stopColor="#d8a24a" />
                            <stop offset="100%" stopColor="#78350f" />
                          </linearGradient>

                          {/* Crisp Drop Shadow for Slice Typography */}
                          <filter id="wheelTextShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.45" />
                          </filter>
                        </defs>

                        {/* Render All 8 Luxury Slices */}
                        {WHEEL_SLICES.map((slice, index) => {
                          const startAngle = index * 45;
                          const endAngle = startAngle + 45;
                          const midAngle = startAngle + 22.5;
                          const path = createSlicePath(220, 220, 218, startAngle, endAngle);

                          const iconPos = polarToCartesian(220, 220, 178, midAngle);
                          const labelPos = polarToCartesian(220, 220, 140, midAngle);
                          const subPos = polarToCartesian(220, 220, 98, midAngle);
                          const innerDotPos = polarToCartesian(220, 220, 68, midAngle);

                          return (
                            <g key={index}>
                              {/* Main Slice Wedge */}
                              <path
                                d={path}
                                fill={slice.gradId}
                                stroke="#fde68a"
                                strokeWidth="2.5"
                              />

                              {/* Subtle Inner Filigree Arc inside each slice */}
                              <path
                                d={createSlicePath(220, 220, 204, startAngle + 1.5, endAngle - 1.5)}
                                fill="none"
                                stroke={slice.isJackpot ? "rgba(23,3,6,0.22)" : "rgba(253,230,138,0.18)"}
                                strokeWidth="1"
                                strokeDasharray="4 3"
                              />

                              {/* Top Icon / Crown / Flame near Outer Rim */}
                              <text
                                x={iconPos.x}
                                y={iconPos.y}
                                fontSize="18"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                transform={`rotate(${midAngle}, ${iconPos.x}, ${iconPos.y})`}
                              >
                                {slice.icon}
                              </text>

                              {/* Main Discount Percentage (-50%, -40%, etc.) */}
                              <text
                                x={labelPos.x}
                                y={labelPos.y}
                                fill={slice.textColor}
                                fontSize="29"
                                fontWeight="900"
                                letterSpacing="-0.5"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                filter={slice.textColor === "#ffffff" || slice.textColor === "#fde68a" ? "url(#wheelTextShadow)" : undefined}
                                transform={`rotate(${midAngle}, ${labelPos.x}, ${labelPos.y})`}
                              >
                                {isAr ? slice.labelAr : slice.labelFr}
                              </text>

                              {/* Subtitle Pill Badge */}
                              <g transform={`rotate(${midAngle}, ${subPos.x}, ${subPos.y})`}>
                                <rect
                                  x={subPos.x - 37}
                                  y={subPos.y - 10}
                                  width="74"
                                  height="20"
                                  rx="10"
                                  fill={slice.subBg}
                                  stroke={slice.isJackpot ? "#fde68a" : "rgba(253,230,138,0.35)"}
                                  strokeWidth="1"
                                />
                                <text
                                  x={subPos.x}
                                  y={subPos.y + 1}
                                  fill={slice.subText}
                                  fontSize="9.5"
                                  fontWeight="900"
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                >
                                  {isAr ? slice.subAr : slice.subFr}
                                </text>
                              </g>

                              {/* Inner Decorative Golden Star Dot */}
                              <circle
                                cx={innerDotPos.x}
                                cy={innerDotPos.y}
                                r="2.5"
                                fill={slice.isJackpot ? "#170306" : "#fde68a"}
                                opacity="0.75"
                              />
                            </g>
                          );
                        })}

                        {/* Inner Golden Ring around Center Hub */}
                        <circle
                          cx="220"
                          cy="220"
                          r="58"
                          fill="none"
                          stroke="#fde68a"
                          strokeWidth="2.5"
                          strokeDasharray="6 4"
                          opacity="0.7"
                        />

                        {/* 8 3D Metallic Gold Divider Pegs on the Rim */}
                        {WHEEL_SLICES.map((_, index) => {
                          const pegAngle = index * 45;
                          const pegPos = polarToCartesian(220, 220, 206, pegAngle);
                          return (
                            <g key={`peg-${index}`}>
                              <circle
                                cx={pegPos.x}
                                cy={pegPos.y}
                                r="7"
                                fill="#170306"
                                opacity="0.65"
                              />
                              <circle
                                cx={pegPos.x}
                                cy={pegPos.y}
                                r="5.5"
                                fill="url(#goldPinGrad)"
                                stroke="#fffbeb"
                                strokeWidth="1.2"
                              />
                            </g>
                          );
                        })}
                      </svg>
                    </div>

                    {/* Non-Rotating 3D Glass Reflection & Inner Rim Shadow Overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.03) 38%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
                        boxShadow: "inset 0 0 28px rgba(0,0,0,0.85)"
                      }}
                    />

                    {/* CENTER 3D ROYAL SPIN HUB BUTTON */}
                    <button
                      type="button"
                      onClick={handleSpin}
                      disabled={spinning}
                      aria-label="Spin the wheel"
                      className="
                        group absolute left-1/2 top-1/2 z-30 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2
                        flex-col items-center justify-center rounded-full p-1.5
                        shadow-[0_10px_30px_rgba(0,0,0,0.95),0_0_25px_rgba(216,162,74,0.5)]
                        transition-transform duration-200 hover:scale-105 active:scale-95
                        sm:h-28 sm:w-28
                      "
                      style={{
                        background:
                          "conic-gradient(from 45deg, #78350f, #fef08a, #d8a24a, #fffbeb, #92400e, #fde68a, #78350f)"
                      }}
                    >
                      {/* Pulsing Aura Ring when idle */}
                      {!spinning && !hasWon && (
                        <span className="pointer-events-none absolute -inset-1.5 animate-ping rounded-full border-2 border-bronze-300/50 opacity-60" />
                      )}

                      <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-2 border-[#fffbeb]/80 bg-gradient-to-b from-[#480a16] via-[#24060c] to-[#0f0204] p-2 shadow-inner">
                        <RovanxLogo variant="mark" className="h-11 w-11 sm:h-13 sm:w-13" />
                        <span className="-mt-1 rounded-full bg-gradient-to-r from-[#fde68a] via-[#d8a24a] to-[#fde68a] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#170306] shadow">
                          {spinning ? "..." : isAr ? "دوّر الآن" : "TOURNER"}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* 3D ROYAL PEDESTAL BASE UNDERNEATH WHEEL */}
              <div className="relative z-10 -mt-5 flex flex-col items-center">
                {/* Pedestal Neck Shadow */}
                <div className="h-5 w-36 rounded-t-xl border-x-2 border-t border-bronze-400/40 bg-gradient-to-b from-[#0d0204] to-[#2b060d] shadow-inner sm:w-44" />
                {/* Pedestal Trapezoid Step 1 */}
                <div
                  className="flex h-9 w-56 items-center justify-center rounded-t-2xl border-2 border-[#fde68a]/70 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.9)] sm:w-68"
                  style={{
                    background:
                      "linear-gradient(90deg, #78350f 0%, #d8a24a 22%, #fef08a 50%, #d8a24a 78%, #78350f 100%)"
                  }}
                >
                  <div className="flex h-6 w-full items-center justify-center rounded-full bg-[#170306] px-3 text-[10px] font-black tracking-widest text-bronze-300 shadow-inner">
                    {isAr ? "★ ROVANX ROYAL VIP CLUB ★" : "★ ROVANX ROYAL VIP CLUB ★"}
                  </div>
                </div>
                {/* Pedestal Wide Base Step 2 */}
                <div className="h-3.5 w-64 rounded-b-xl border border-bronze-400/50 bg-gradient-to-r from-[#2b060d] via-[#5a0d1c] to-[#2b060d] shadow-[0_15px_35px_rgba(0,0,0,0.95)] sm:w-76" />
              </div>
            </div>
          </div>

          {/* Column 2: High-Converting Copy & Winner Reveal Card */}
          <div className="order-2 lg:order-1">
            {!hasWon ? (
              <div className="relative overflow-hidden rounded-3xl border border-bronze-400/35 bg-gradient-to-b from-[#28060d]/95 via-[#180307]/95 to-[#0e1017]/95 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-8">
                {/* Top Corner Decorative Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-bronze-500/20 blur-2xl" />

                <div className="inline-flex items-center gap-2 rounded-full border border-bronze-400/45 bg-bronze-500/15 px-3.5 py-1 text-xs font-black text-bronze-300">
                  <Gift size={14} className="text-bronze-400" />
                  <span>
                    {isAr
                      ? "فرصة حصرية واحدة لكل زائر اليوم — ربح مضمون"
                      : "1 seule chance par visiteur aujourd'hui — Gain garanti"}
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                  {isAr ? (
                    <>
                      جرّب حظك مع عجلة{" "}
                      <span className="bg-gradient-to-r from-[#fef08a] via-[#d8a24a] to-[#fef08a] bg-clip-text text-transparent">
                        ROVANX الملكية
                      </span>{" "}
                      واربح تخفيضاً حتى{" "}
                      <span className="inline-block rounded-xl border border-bronze-400/50 bg-bronze-500/20 px-2.5 py-0.5 text-bronze-300">
                        -50%
                      </span>
                    </>
                  ) : (
                    <>
                      Tournez la Roue{" "}
                      <span className="bg-gradient-to-r from-[#fef08a] via-[#d8a24a] to-[#fef08a] bg-clip-text text-transparent">
                        ROVANX Royale
                      </span>{" "}
                      et gagnez jusqu&apos;à{" "}
                      <span className="inline-block rounded-xl border border-bronze-400/50 bg-bronze-500/20 px-2.5 py-0.5 text-bronze-300">
                        -50%
                      </span>
                    </>
                  )}
                </h1>

                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                  {isAr
                    ? `اضغط على الزر الذهبي لتدوير العجلة وتفعيل كود التخفيض السري الخاص بك على (${funnel.productLabelAr}) مع توصيل مجاني 100% لباب منزلك.`
                    : `Cliquez sur le bouton doré pour lancer la roue et débloquer votre remise privilège sur (${funnel.productLabelFr}) avec livraison 100% gratuite.`}
                </p>

                {/* Primary 3D Gold Spin CTA */}
                <button
                  type="button"
                  disabled={spinning}
                  onClick={handleSpin}
                  className="
                    mt-6 flex w-full items-center justify-center gap-3 rounded-2xl
                    border-2 border-[#fef08a] bg-gradient-to-r from-[#d8a24a] via-[#fde68a] to-[#c2882e]
                    px-6 py-4 text-base font-black text-[#170306]
                    shadow-[0_14px_40px_rgba(216,162,74,0.45),inset_0_2px_0_rgba(255,255,255,0.65)]
                    transition-all hover:scale-[1.015] hover:shadow-[0_18px_50px_rgba(216,162,74,0.65)]
                    disabled:opacity-60 sm:text-lg
                  "
                >
                  <Sparkles size={20} className={spinning ? "animate-spin" : ""} />
                  <span>
                    {spinning
                      ? isAr
                        ? "جاري تدوير العجلة الملكية..."
                        : "La roue royale tourne..."
                      : isAr
                        ? "🎯 دوّر العجلة الآن واكشف عن جائزتك"
                        : "🎯 Tourner la roue maintenant"}
                  </span>
                </button>

                {/* 3 High-Confirmation & High-Delivery Guarantees */}
                <div className="mt-6 grid gap-2.5 border-t border-white/10 pt-5 text-xs text-white/85 sm:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-xl border border-bronze-400/20 bg-white/[0.03] p-2.5">
                    <Truck size={16} className="shrink-0 text-bronze-400" />
                    <span className="font-bold">
                      {isAr ? "توصيل مجاني 0 DH" : "Livraison 0 DH"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-bronze-400/20 bg-white/[0.03] p-2.5">
                    <Lock size={16} className="shrink-0 text-bronze-400" />
                    <span className="font-bold">
                      {isAr ? "تغليف سري 100%" : "Colis 100% discret"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-bronze-400/20 bg-white/[0.03] p-2.5">
                    <ShieldCheck size={16} className="shrink-0 text-bronze-400" />
                    <span className="font-bold">
                      {isAr ? "الدفع عند الاستلام" : "Paiement livraison"}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* WINNER CELEBRATION CARD */
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#fde68a] bg-gradient-to-b from-[#3b0811] via-[#1f0409] to-[#11131a] p-6 shadow-[0_25px_80px_rgba(216,162,74,0.45)] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-emerald-500/20 px-3.5 py-1 text-xs font-black text-emerald-300">
                    <CheckCircle2 size={14} />
                    <span>
                      {isAr ? "🎉 مبروك! ربحت الجائزة الملكية الكبرى" : "🎉 Félicitations ! Gros lot Royal débloqué"}
                    </span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/50 bg-amber-500/20 px-3 py-1 font-mono text-xs font-black text-amber-300">
                    <Clock size={13} />
                    <span>
                      {isAr ? `ينتهي العرض خلال ${mins}:${secs}` : `Expire dans ${mins}:${secs}`}
                    </span>
                  </span>
                </div>

                <div className="mt-4 rounded-2xl border border-bronze-400/40 bg-gradient-to-r from-bronze-500/20 via-[#5a0d1c]/40 to-bronze-500/20 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-bronze-300">
                    {isAr ? "👑 جائزتك الحصرية المفعّلة:" : "👑 Votre récompense activée :"}
                  </span>
                  <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                    {isAr ? funnel.vipBadgeAr : funnel.vipBadgeFr}
                  </h2>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  {isAr
                    ? `تم تطبيق تخفيضك أوتوماتيكياً على (${funnel.productLabelAr}). اضغط على الزر الذهبي أسفله للدخول إلى المتجر وإتمام طلبك قبل انتهاء الـ 15 دقيقة.`
                    : `Votre remise est appliquée d'office sur (${funnel.productLabelFr}). Cliquez sur le bouton doré ci-dessous pour accéder à la boutique avant l'expiration.`}
                </p>

                {/* Auto-Activated Coupon Box */}
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-bronze-400/40 bg-black/50 px-4 py-3">
                  <div>
                    <span className="block text-[11px] text-white/60">
                      {isAr ? "كود الامتياز الملكي:" : "Code privilège Royal :"}
                    </span>
                    <strong className="font-mono text-lg font-black tracking-wider text-[#fde68a]">
                      {funnel.promoCode}
                    </strong>
                  </div>
                  <span className="rounded-xl border border-emerald-500/40 bg-emerald-500/20 px-3 py-1.5 text-xs font-black text-emerald-300">
                    {isAr ? "✓ مفعّل تلقائياً" : "✓ Activé d'office"}
                  </span>
                </div>

                {/* Big Pulsing Claim CTA */}
                <button
                  type="button"
                  onClick={handleClaimAndEnter}
                  className="
                    mt-5 flex w-full items-center justify-center gap-3 rounded-2xl
                    border-2 border-[#fef08a] bg-gradient-to-r from-[#d8a24a] via-[#fde68a] to-[#d8a24a]
                    px-6 py-4 text-base font-black text-[#170306]
                    shadow-[0_16px_45px_rgba(245,158,11,0.55),inset_0_2px_0_rgba(255,255,255,0.7)]
                    transition-all hover:scale-[1.02] sm:text-lg
                  "
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
        </div>
      </main>
    </div>
  );
}
