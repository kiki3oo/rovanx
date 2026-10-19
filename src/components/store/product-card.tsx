"use client";

import Link from "next/link";
import type { Product } from "@prisma/client";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";
import { getProductVisual } from "@/lib/product-visuals";
import { getProductDetail } from "@/lib/product-details";

type ProductCardProduct = Pick<
  Product,
  "id" | "name" | "slug" | "sku" | "shortDescription" | "regularPrice" | "salePrice" | "featured" | "hero"
>;

export function ProductCard({
  product,
  darkTheme = false
}: {
  product: ProductCardProduct;
  darkTheme?: boolean;
}) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  const price = product.salePrice || product.regularPrice;
  const savings = product.regularPrice > price ? product.regularPrice - price : 0;
  const visual = getProductVisual(product.slug);
  const detail = getProductDetail(product.slug);
  const shortDescription = detail?.shortDescription || product.shortDescription;
  const productName = detail?.name || product.name;

  if (darkTheme) {
    return (
      <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-b from-[#1c1a24]/80 via-[#14161f]/90 to-[#0e1017] p-5 sm:p-6 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/10">
        <div>
          {/* Top Badges (Header) */}
          <div className="mb-4 flex items-center justify-between gap-2 min-h-[26px]">
            {detail?.badge ? (
              <span className="badge border-amber-400/40 bg-amber-500/15 text-xs font-black text-amber-300 uppercase tracking-wider shadow-sm">
                {detail.badge}
              </span>
            ) : product.hero || product.featured ? (
              <span className="badge border-amber-400/40 bg-amber-500/15 text-xs font-black text-amber-300 uppercase tracking-wider shadow-sm">
                {isArabic ? "⭐ اختيار مميز" : "⭐ Sélection Premium"}
              </span>
            ) : <span />}

            {savings > 0 ? (
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-black text-emerald-300">
                {isArabic ? `وفّر ${savings} DH` : `-${savings} DH`}
              </span>
            ) : product.hero || product.featured ? (
              <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-[11px] font-black text-amber-300">
                {isArabic ? "الأكثر طلباً" : "Best-Seller"}
              </span>
            ) : null}
          </div>

          {/* Luxury Packshot Image Container */}
          <Link
            href={`/product/${product.slug}`}
            className="relative mb-5 flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-black/50 to-black/25 p-4 transition-all duration-500 group-hover:border-amber-400/40"
          >
            {visual ? (
              <img
                src={visual.src}
                alt={visual.alt}
                className="h-full w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <span className="max-w-[13ch] text-balance text-xl font-black leading-tight text-white">{productName}</span>
            )}
          </Link>

          {/* Title */}
          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white transition-colors group-hover:text-amber-400 line-clamp-1">
              {productName}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-2 min-h-[40px]">
            {shortDescription}
          </p>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                {isArabic ? "السعر :" : "Prix :"}
              </span>
              <div className="flex items-baseline gap-2">
                <strong className="text-2xl sm:text-3xl font-black text-amber-400">
                  <Money value={price} />
                </strong>
                {product.salePrice ? (
                  <span className="text-sm text-white/40 line-through">
                    <Money value={product.regularPrice} />
                  </span>
                ) : null}
              </div>
            </div>

            {savings > 0 ? (
              <span className="rounded-md bg-emerald-500/15 border border-emerald-500/25 px-2 py-1 text-xs font-black text-emerald-300">
                {isArabic ? `توفير ${savings} DH` : `-${savings} DH`}
              </span>
            ) : (
              <span className="rounded-md bg-white/[0.05] border border-white/10 px-2 py-1 text-[11px] font-bold text-white/70">
                {isArabic ? "أصلي 100% ✓" : "100% Authentique ✓"}
              </span>
            )}
          </div>

          <AddToCartButton
            product={{
              id: product.id,
              name: product.name,
              slug: product.slug,
              sku: product.sku,
              price,
              regularPrice: product.regularPrice
            }}
          />
        </div>
      </article>
    );
  }

  // Light theme fallback
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-stone-200 bg-white p-5 sm:p-6 text-stone-900 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/60 hover:shadow-xl">
      <div>
        <div className="mb-4 flex items-center justify-between gap-2 min-h-[26px]">
          {detail?.badge ? (
            <span className="badge border-amber-500/30 bg-amber-500/10 text-xs font-black text-amber-700 uppercase tracking-wider">
              {detail.badge}
            </span>
          ) : <span />}

          {savings > 0 ? (
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-black text-emerald-700">
              {isArabic ? `وفّر ${savings} DH` : `-${savings} DH`}
            </span>
          ) : null}
        </div>

        <Link
          href={`/product/${product.slug}`}
          className="relative mb-5 flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-stone-100 bg-stone-50 p-4 transition-all duration-500 group-hover:border-amber-400/40"
        >
          {visual ? (
            <img
              src={visual.src}
              alt={visual.alt}
              className="h-full w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="max-w-[13ch] text-balance text-xl font-black leading-tight">{productName}</span>
          )}
        </Link>

        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 transition-colors group-hover:text-amber-600 line-clamp-1">
            {productName}
          </h3>
        </Link>

        <p className="mt-2 text-sm leading-relaxed text-stone-600 line-clamp-2 min-h-[40px]">
          {shortDescription}
        </p>
      </div>

      <div className="mt-6 border-t border-stone-100 pt-4">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400">
              {isArabic ? "السعر :" : "Prix :"}
            </span>
            <div className="flex items-baseline gap-2">
              <strong className="text-2xl sm:text-3xl font-black text-stone-900">
                <Money value={price} />
              </strong>
              {product.salePrice ? (
                <span className="text-sm text-stone-400 line-through">
                  <Money value={product.regularPrice} />
                </span>
              ) : null}
            </div>
          </div>

          {savings > 0 ? (
            <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-black text-emerald-700">
              {isArabic ? `توفير ${savings} DH` : `-${savings} DH`}
            </span>
          ) : (
            <span className="rounded-md bg-stone-100 px-2 py-1 text-[11px] font-bold text-stone-600">
              {isArabic ? "أصلي 100% ✓" : "100% Authentique ✓"}
            </span>
          )}
        </div>

        <AddToCartButton
          product={{
            id: product.id,
            name: product.name,
            slug: product.slug,
            sku: product.sku,
            price,
            regularPrice: product.regularPrice
          }}
        />
      </div>
    </article>
  );
}
