import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";

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
            <p className="badge mb-3">Shop</p>
            <h1 className="text-4xl font-black">Produits ROVANX</h1>
            <p className="mt-3 text-black/62">Filtre rapidement la selection. Les visuels definitifs restent a remplacer apres validation des produits.</p>
          </div>
          <form className="surface-card grid gap-3 p-4 sm:grid-cols-3">
            <input className="input" name="search" placeholder="Recherche" defaultValue={params.search || ""} />
            <select className="select" name="category" defaultValue={params.category || ""}>
              <option value="">Toutes categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
            <select className="select" name="sort" defaultValue={params.sort || "featured"}>
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Prix bas a haut</option>
              <option value="price-desc">Prix haut a bas</option>
            </select>
            <button className="btn btn-primary sm:col-span-3">Filtrer</button>
          </form>
        </div>
        {products.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="surface-card p-8 text-center">Aucun produit trouve.</div>
        )}
      </div>
    </section>
  );
}
