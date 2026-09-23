import Link from "next/link";
import type { Product } from "@prisma/client";
import { formatMoney } from "@/lib/money";
import { AddToCartButton } from "@/components/store/add-to-cart-button";

type ProductCardProduct = Pick<
  Product,
  "id" | "name" | "slug" | "sku" | "shortDescription" | "regularPrice" | "salePrice" | "featured" | "hero"
>;

export function ProductCard({ product }: { product: ProductCardProduct }) {
  const price = product.salePrice || product.regularPrice;
  return (
    <article className="surface-card grid overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-bronze-500/45">
      <Link href={`/product/${product.slug}`} className="product-visual m-3 min-h-[260px] overflow-hidden">
        <span className="max-w-[13ch] text-balance text-xl font-black leading-tight">{product.name}</span>
      </Link>
      <div className="grid gap-4 p-5 pt-1">
        <div className="flex min-h-7 flex-wrap gap-2">
          {product.salePrice ? <span className="badge">Offre</span> : null}
          {product.hero || product.featured ? <span className="badge">Selection premium</span> : null}
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-xl font-black leading-tight hover:text-bronze-600">{product.name}</h3>
        </Link>
        <p className="min-h-12 text-sm leading-6 text-black/62">{product.shortDescription}</p>
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-black uppercase text-black/55">
          {["COD", "Appel", "Livraison"].map((item) => (
            <span key={item} className="rounded-md bg-bronze-500/10 px-2 py-2 text-bronze-700">
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-end justify-between gap-3 border-t border-black/10 pt-4">
          <strong className="text-xl">{formatMoney(price)}</strong>
          {product.salePrice ? (
            <span className="text-sm text-black/45 line-through">{formatMoney(product.regularPrice)}</span>
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
