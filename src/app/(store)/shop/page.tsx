import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/store/product-card";
import { BundleCard } from "@/components/store/bundle-card";
import { buildMetadata } from "@/lib/seo";
import { LocalizedText } from "@/components/store/localized-text";
import { ShopFilters } from "@/components/store/shop-filters";
import { ensureCatalogSynced } from "@/lib/catalog-sync";

export const metadata = buildMetadata({
  title: "متجر ROVANX | مكملات وباقات الحيوية والنشاط للرجال بالمغرب",
  description: "تسوق منتجات وباقات ROVANX الأصلية بالمغرب: كبسولات الصلابة، زيت تأخير القذف، سيروم البروستات، وباقات التوفير مع شحن مجاني ودفع عند الاستلام.",
  path: "/shop"
});

export default async function ShopPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string; search?: string; sort?: string }>;
}) {
  const params = await searchParams;
  await ensureCatalogSynced().catch(() => {});

  const isPacksCategory = params.category === "packs";

  const [categories, products, bundles] = await Promise.all([
    prisma.category.findMany({ where: { active: true }, orderBy: { name: "asc" } }).catch(() => []),
    isPacksCategory
      ? Promise.resolve([])
      : prisma.product.findMany({
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
        }).catch(() => []),
    (isPacksCategory || (!params.category && !params.search))
      ? prisma.bundle.findMany({
          where: { active: true },
          include: { items: { include: { product: true } } },
          orderBy: { createdAt: "asc" }
        }).catch(() => [])
      : Promise.resolve([])
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
        <div className="mb-10 space-y-6">
          <div>
            <span className="badge mb-3 border-white/10 bg-white/10 text-bronze-500">
              <LocalizedText id="shop" />
            </span>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              <LocalizedText id="shopTitle" />
            </h1>
            <LocalizedText id="shopIntro" as="p" className="mt-3 max-w-xl text-lg text-white/75" />
          </div>

          <ShopFilters
            categories={categories}
            search={params.search || ""}
            category={params.category || ""}
            sort={params.sort || "featured"}
          />
        </div>

        {/* 1. If "Packs" category selected: Show all packs */}
        {isPacksCategory ? (
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-amber-400" />
                <h2 className="text-2xl font-black text-white"><LocalizedText id="exclusivePacks" /></h2>
              </div>
              <span className="text-xs text-white/50">{bundles.length} <LocalizedText id="integratedPacks" /></span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bundles.map((bundle) => (
                <BundleCard key={bundle.id} bundle={bundle} />
              ))}
            </div>
          </div>
        ) : null}

        {/* 2. If viewing a specific product category */}
        {!isPacksCategory && products.length > 0 ? (
          <div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} darkTheme />
              ))}
            </div>

            {/* When viewing all products without search, also show the packs section underneath */}
            {!params.category && !params.search && bundles.length > 0 ? (
              <div className="mt-16 border-t border-white/10 pt-12">
                <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="badge mb-2 border-amber-400/30 bg-amber-500/15 text-xs font-black text-amber-300">
                      <LocalizedText id="packAvantage" />
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      <LocalizedText id="bundlesTitle" />
                    </h2>
                    <LocalizedText id="bundlesIntro" as="p" className="mt-1 text-sm text-white/65" />
                  </div>
                  <Link
                    href="/bundles"
                    className="btn border border-white/20 bg-white/10 text-white hover:bg-white/15 flex items-center gap-2"
                  >
                    <span><LocalizedText id="allPacks" /></span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {bundles.map((bundle) => (
                    <BundleCard key={bundle.id} bundle={bundle} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* 3. Empty State */}
        {!isPacksCategory && products.length === 0 ? (
          <div className="dark-surface p-12 text-center text-white/80 rounded-2xl border border-white/10">
            <LocalizedText id="noProducts" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
