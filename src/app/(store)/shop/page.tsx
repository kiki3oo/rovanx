import Image from "next/image";
import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";
import { LocalizedText } from "@/components/store/localized-text";
import { ShopFilters } from "@/components/store/shop-filters";
import { ensureCatalogSynced } from "@/lib/catalog-sync";

export const metadata = buildMetadata({
  title: "Shop",
  description: "Tous les produits ROVANX pour la vitalité et le bien-être masculin.",
  path: "/shop"
});

export default async function ShopPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string; search?: string; sort?: string }>;
}) {
  const params = await searchParams;
  await ensureCatalogSynced().catch(() => {});
  const [categories, products] = await Promise.all([
    prisma.category.findMany({ where: { active: true }, orderBy: { name: "asc" } }).catch(() => []),
    prisma.product.findMany({
      where: {
        active: true,
        category: params.category ? { slug: params.category } : undefined,
        OR: params.search
          ? [
              { name: { contains: params.search, mode: "insensitive" } },
              { shortDescription: { contains: params.search, mode: "insensitive" } }
            ]
          : undefined
      },
      orderBy:
        params.sort === "price-asc"
          ? { salePrice: "asc" }
          : params.sort === "price-desc"
            ? { salePrice: "desc" }
            : params.sort === "newest"
              ? { createdAt: "desc" }
              : [{ featured: "desc" }, { hero: "desc" }, { createdAt: "asc" }]
    }).catch(() => [])
  ]);

  return (
    <div className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-16">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/hero/rovanx-shop-bg-wide.webp"
          alt="ROVANX Shop Experience"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-top opacity-55 md:opacity-70"
        />
        {/* Soft edge and depth gradients for maximum contrast & luxury readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/65 to-[#12141a]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12141a]/85 via-transparent to-[#12141a]/85" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />

      <div className="container relative z-10">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="badge mb-3 border-white/10 bg-white/10 text-bronze-500">
              <LocalizedText id="shop" />
            </span>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              <LocalizedText id="shopTitle" />
            </h1>
            <LocalizedText id="shopIntro" as="p" className="mt-3 max-w-xl text-lg text-white/75" />
          </div>
          <ShopFilters categories={categories} search={params.search || ""} category={params.category || ""} sort={params.sort || "featured"} />
        </div>

        {products.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="dark-surface p-12 text-center text-white/80 rounded-2xl border border-white/10">
            <LocalizedText id="noProducts" />
          </div>
        )}
      </div>
    </div>
  );
}
