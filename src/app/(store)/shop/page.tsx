import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";
import { LocalizedText } from "@/components/store/localized-text";
import { ShopFilters } from "@/components/store/shop-filters";

export const metadata = buildMetadata({
  title: "Shop",
  description: "Tous les produits ROVANX.",
  path: "/shop"
});

export default async function ShopPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string; search?: string; sort?: string }>;
}) {
  const params = await searchParams;
  const [categories, products] = await Promise.all([
    prisma.category.findMany({ where: { active: true }, orderBy: { name: "asc" } }),
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
    })
  ]);

  return (
    <section className="section">
      <div className="container">
        <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="badge mb-3"><LocalizedText id="shop" /></p>
            <h1 className="text-4xl font-black"><LocalizedText id="shopTitle" /></h1>
            <LocalizedText id="shopIntro" as="p" className="mt-3 text-black/62" />
          </div>
          <ShopFilters categories={categories} search={params.search || ""} category={params.category || ""} sort={params.sort || "featured"} />
        </div>
        {products.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="surface-card p-8 text-center"><LocalizedText id="noProducts" /></div>
        )}
      </div>
    </section>
  );
}
