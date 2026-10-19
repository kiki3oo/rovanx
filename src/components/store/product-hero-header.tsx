"use client";

import { usePreferences } from "@/components/store/preferences-provider";
import { getLocalizedProduct } from "@/lib/store-translations";

export function ProductHeroHeader({
  productSlug,
  fallbackName,
  fallbackBadge,
  fallbackTagline,
  fallbackDescription
}: {
  productSlug: string;
  fallbackName: string;
  fallbackBadge?: string | null;
  fallbackTagline?: string | null;
  fallbackDescription: string;
}) {
  const { locale } = usePreferences();
  const loc = getLocalizedProduct(productSlug, locale);

  const badge = loc?.badge || fallbackBadge;
  const name = loc?.name || fallbackName;
  const tagline = loc?.tagline || fallbackTagline;
  const description = loc?.shortDescription || fallbackDescription;
  const highlights = loc?.highlights || [];

  return (
    <div>
      {badge ? (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-bronze-500/30 bg-bronze-500/10 px-3 py-1 text-xs font-bold text-bronze-300">
            {badge}
          </p>
        </div>
      ) : null}

      <h1 className="text-3xl font-black text-white sm:text-4xl">{name}</h1>

      {tagline ? (
        <p className="mt-1 text-sm font-bold text-bronze-400">{tagline}</p>
      ) : null}

      <p className="mt-3 text-lg leading-relaxed text-white/70">{description}</p>

      {highlights.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-white/90">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-lg border border-bronze-500/20 bg-white/[0.04] p-2"
            >
              <span className="text-base shrink-0">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
