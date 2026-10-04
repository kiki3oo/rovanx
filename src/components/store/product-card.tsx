import Link from "next/link";
import type { Product } from "@prisma/client";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { Money } from "@/components/store/money";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";
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
  const price = product.salePrice || product.regularPrice;
  const visual = getProductVisual(product.slug);
  const detail = getProductDetail(product.slug);
  const shortDescription = detail?.shortDescription || product.shortDescription;
  const productName = detail?.name || product.name;

  if (darkTheme) {
    return (
      <article className="group relative grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze-500/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/50 text-white">
        <Link
          href={`/product/${product.slug}`}
          className="relative m-3 flex min-h-[260px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-bronze-500/30"
        >
          {visual ? (
            <img
              src={visual.src}
              alt={visual.alt}
              className="product-packshot product-packshot-card rounded-xl drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="max-w-[13ch] text-balance text-xl font-black leading-tight text-white">{product.name}</span>
          )}
        </Link>
        <div className="grid gap-4 p-5 pt-1">
          <div className="flex min-h-7 flex-wrap gap-2">
            {detail?.badge ? (
              <span className="badge border-bronze-400/30 bg-bronze-500/15 text-xs font-bold text-bronze-300">
                {detail.badge}
              </span>
            ) : null}
            {product.salePrice ? (
              <span className="badge border-white/15 bg-white/10 text-xs font-bold text-white">
                <LocalizedText id="offer" />
              </span>
            ) : null}
            {product.hero || product.featured ? (
              <span className="badge border-amber-400/30 bg-amber-500/15 text-xs font-bold text-amber-300">
                <LocalizedText id="selectionPremium" />
              </span>
            ) : null}
          </div>
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-xl font-black leading-tight text-white transition-colors group-hover:text-bronze-400">
              {productName}
            </h3>
          </Link>
          <p className="min-h-12 text-sm leading-6 text-white/70 line-clamp-2">{shortDescription}</p>
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-black uppercase text-white/70">
            {[
              ["COD", "COD"],
              ["phoneCall", "Appel"],
              ["delivery", "Livraison"]
            ].map(([key, fallback]) => (
              <span key={key} className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-2 text-bronze-300">
                {key === "COD" ? fallback : <LocalizedText id={key as "phoneCall" | "delivery"} />}
              </span>
            ))}
          </div>
          <div className="flex items-end justify-between gap-3 border-t border-white/10 pt-4">
            <strong className="text-2xl font-black text-white">
              <Money value={price} />
            </strong>
            {product.salePrice ? (
              <span className="text-sm text-white/50 line-through">
                <Money value={product.regularPrice} />
              </span>
            ) : null}
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

  return (
    <article className="surface-card grid overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-bronze-500/45">
      <Link
        href={`/product/${product.slug}`}
        className={`product-visual m-3 min-h-[260px] overflow-hidden ${visual ? "product-visual-image" : ""}`}
      >
        {visual ? (
          <img src={visual.src} alt={visual.alt} className="product-packshot product-packshot-card rounded-xl" />
        ) : (
          <span className="max-w-[13ch] text-balance text-xl font-black leading-tight">{product.name}</span>
        )}
      </Link>
      <div className="grid gap-4 p-5 pt-1">
        <div className="flex min-h-7 flex-wrap gap-2">
          {detail?.badge ? <span className="badge border-bronze-500/20 bg-bronze-500/10 text-xs font-bold text-bronze-700">{detail.badge}</span> : null}
          {product.salePrice ? <span className="badge"><LocalizedText id="offer" /></span> : null}
          {product.hero || product.featured ? <span className="badge"><LocalizedText id="selectionPremium" /></span> : null}
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-xl font-black leading-tight hover:text-bronze-600">{productName}</h3>
        </Link>
        <p className="min-h-12 text-sm leading-6 text-black/65 line-clamp-2">{shortDescription}</p>
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-black uppercase text-black/55">
          {[
            ["COD", "COD"],
            ["phoneCall", "Appel"],
            ["delivery", "Livraison"]
          ].map(([key, fallback]) => (
            <span key={key} className="rounded-md bg-bronze-500/10 px-2 py-2 text-bronze-700">
              {key === "COD" ? fallback : <LocalizedText id={key as "phoneCall" | "delivery"} />}
            </span>
          ))}
        </div>
        <div className="flex items-end justify-between gap-3 border-t border-black/10 pt-4">
          <strong className="text-xl"><Money value={price} /></strong>
          {product.salePrice ? (
            <span className="text-sm text-black/45 line-through"><Money value={product.regularPrice} /></span>
          ) : null}
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
