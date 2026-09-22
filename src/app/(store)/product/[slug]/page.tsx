import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });
  if (!product) return {};
  return buildMetadata({
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.shortDescription,
    path: `/product/${product.slug}`,
    image: product.ogImage
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: { category: true }
  });
  if (!product || !product.active) notFound();

  const related = await prisma.product.findMany({
    where: { active: true, categoryId: product.categoryId, id: { not: product.id } },
    take: 3
  });

  const price = product.salePrice || product.regularPrice;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    brand: { "@type": "Brand", name: "ROVANX" },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="product-visual min-h-[330px]">
            <div>
              <p className="text-3xl font-black">{product.name}</p>
              <p className="mt-2 text-white/60">Image produit provisoire</p>
            </div>
          </div>
          <div className="grid content-start gap-5">
            <div>
              <p className="badge mb-3">{product.category.name}</p>
              <h1 className="text-4xl font-black">{product.name}</h1>
              <p className="mt-3 text-lg text-black/65">{product.shortDescription}</p>
            </div>
            <div className="flex items-center gap-3">
              <strong className="text-3xl">{formatMoney(price)}</strong>
              {product.salePrice ? <span className="text-black/45 line-through">{formatMoney(product.regularPrice)}</span> : null}
            </div>
            <AddToCartButton
              label="Ajouter au panier"
              product={{
                id: product.id,
                name: product.name,
                slug: product.slug,
                sku: product.sku,
                price,
                regularPrice: product.regularPrice
              }}
            />
            <a className="btn btn-secondary" href="/checkout">
              Acheter maintenant
            </a>
            <div className="rounded-lg border border-bronze-500/25 bg-white p-4 text-sm text-black/70">
              {product.placeholderNotice || "Informations a valider avant production."}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-5 md:grid-cols-2">
          {[
            ["Benefits", product.benefits.join(", ") || "Placeholder"],
            ["Ingredients", product.ingredients || "Placeholder"],
            ["Instructions", product.usageInstructions || "Placeholder"],
            ["Warnings", product.warnings || "Placeholder"],
            ["Regulatory", product.regulatoryInformation || "Placeholder"],
            ["Delivery/COD", "Paiement a la livraison. Confirmation telephonique avant expedition."]
          ].map(([title, content]) => (
            <div key={title} className="rounded-lg border border-black/10 p-5">
              <h2 className="font-black">{title}</h2>
              <p className="mt-2 text-sm text-black/65">{content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-6 text-3xl font-black">Produits associes</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 z-30 border-t border-black/10 bg-white p-3 md:hidden">
        <AddToCartButton
          label={`Ajouter - ${formatMoney(price)}`}
          product={{ id: product.id, name: product.name, slug: product.slug, sku: product.sku, price, regularPrice: product.regularPrice }}
        />
      </div>
    </>
  );
}
