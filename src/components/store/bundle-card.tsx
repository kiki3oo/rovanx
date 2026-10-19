"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";
import { getLocalizedBundle } from "@/lib/store-translations";

const BUNDLE_IMAGES: Record<string, { ar?: string; default: string }> = {
  "rovanx-pack-puissance": {
    ar: "/products/rovanx-pack-puissance-ar.webp?v=6",
    default: "/products/rovanx-pack-puissance-fr.webp?v=6"
  },
  "rovanx-men-pack": {
    ar: "/products/rovanx-men-pack-ar.webp?v=4",
    default: "/products/rovanx-men-pack-fr.webp?v=4"
  },
  "rovanx-men-plus-pack": {
    ar: "/products/rovanx-men-plus-pack-ar.webp?v=7",
    default: "/products/rovanx-men-plus-pack-fr.webp?v=7"
  },
  "rovanx-prostate-energie-pack": {
    ar: "/products/rovanx-prostate-energie-pack-ar.webp?v=5",
    default: "/products/rovanx-prostate-energie-pack-fr.webp?v=5"
  }
};

const BUNDLE_BADGES: Record<string, { ar: string; fr: string }> = {
  "rovanx-pack-puissance": {
    ar: "⭐ الأكثر طلباً وتوفيراً (Best-Seller)",
    fr: "⭐ Meilleure Vente (Best-Seller)"
  },
  "rovanx-men-pack": {
    ar: "👑 الثنائي الفحولي الملكي",
    fr: "👑 Duo Virilité Royale"
  },
  "rovanx-men-plus-pack": {
    ar: "👑 الباك الملكي 3 في 1 (توفير 200 DH)",
    fr: "👑 Pack Royal 3-en-1 (-200 DH)"
  },
  "rovanx-prostate-energie-pack": {
    ar: "🛡️ باقة البروستاتا والراحة الليلية",
    fr: "🛡️ Pack Confort Prostate & Nuit"
  }
};

export type BundleCardData = {
  id: string;
  name: string;
  slug: string;
  bundlePrice: number;
  regularCombinedPrice: number;
  description: string;
  items?: { product: { id: string; name: string; slug: string } }[];
};

export function BundleCard({ bundle }: { bundle: BundleCardData }) {
  const { locale, t } = usePreferences();
  const isArabic = locale === "ar";

  const imgInfo = BUNDLE_IMAGES[bundle.slug];
  const imgSrc = imgInfo ? (isArabic && imgInfo.ar ? imgInfo.ar : imgInfo.default) : `/products/${bundle.slug}.webp?v=2`;
  const localized = getLocalizedBundle(bundle.slug, locale);
  const bundleName = localized?.name || bundle.name;
  const badgeText = localized?.badge || (BUNDLE_BADGES[bundle.slug] ? (isArabic ? BUNDLE_BADGES[bundle.slug].ar : BUNDLE_BADGES[bundle.slug].fr) : t("packAvantage"));
  const descriptionText = localized?.description || bundle.description;
  const savings = bundle.regularCombinedPrice - bundle.bundlePrice;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-amber-500/30 bg-gradient-to-b from-[#201217]/70 via-[#14161f]/80 to-[#12141a] p-6 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/10">
      <div>
        {/* Top Badges */}
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="badge border-amber-400/40 bg-amber-500/20 text-xs font-black text-amber-300 shadow-sm">
            {badgeText}
          </span>
          {savings > 0 ? (
            <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-black text-emerald-300">
              {isArabic ? `${t("saveAmount")} ${savings} DH` : `-${savings} DH`}
            </span>
          ) : null}
        </div>

        {/* Packshot Image */}
        <Link
          href={`/bundles`}
          className="relative mb-5 flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4 transition-all duration-300 group-hover:border-amber-400/40"
        >
          <img
            src={imgSrc}
            alt={bundleName}
            className="h-full w-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Title */}
        <Link href={`/bundles`}>
          <h3 className="text-xl font-black text-white transition-colors group-hover:text-amber-400">
            {bundleName}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-white/70 line-clamp-3">
          {descriptionText}
        </p>

        {/* Inclusions */}
        {bundle.items && bundle.items.length > 0 ? (
          <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-xs text-white/80">
            <span className="font-bold text-amber-300 block mb-1">
              {isArabic ? "محتويات الباقة:" : "Composé de :"}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {bundle.items.map((it) => (
                <span key={it.product.id} className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-white/90">
                  {it.product.name}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* Pricing & CTA */}
      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="flex items-baseline justify-between gap-3 mb-4">
          <div>
            <span className="text-xs text-white/50 block">
              {isArabic ? "سعر الباقة الإجمالي:" : "Prix total :"}
            </span>
            <div className="flex items-baseline gap-2">
              <strong className="text-2xl font-black text-amber-400">
                <Money value={bundle.bundlePrice} />
              </strong>
              <span className="text-sm text-white/45 line-through">
                <Money value={bundle.regularCombinedPrice} />
              </span>
            </div>
          </div>

          <span className="rounded bg-emerald-500/20 px-2 py-1 text-[11px] font-black text-emerald-300">
            {isArabic ? "شحن مجاني 0 DH ✓" : "Port gratuit 0 DH ✓"}
          </span>
        </div>

        <Link
          href={`/bundles`}
          className="btn btn-primary flex w-full items-center justify-center gap-2 py-3 text-sm font-black shadow-xl"
        >
          <span>{isArabic ? "طلب الباقة الآن (الدفع عند الاستلام)" : "Commander le Pack (COD)"}</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
