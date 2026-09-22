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
    <article className="grid overflow-hidden rounded-lg border border-black/10 bg-white">
      <Link href={`/product/${product.slug}`} className="product-visual m-3">
        <span className="max-w-[12ch] text-lg font-black">{product.name}</span>
      </Link>
      <div className="grid gap-3 p-4 pt-1">
        <div className="flex flex-wrap gap-2">
          {product.salePrice ? <span className="badge">Offre</span> : null}
          {product.hero || product.featured ? <span className="badge">Selection</span> : null}
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-lg font-black leading-tight">{product.name}</h3>
        </Link>
        <p className="text-sm text-black/65">{product.shortDescription}</p>
        <div className="flex items-center gap-2">
          <strong>{formatMoney(price)}</strong>
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
