import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock3, PhoneCall, ShieldCheck, Truck } from "lucide-react";
import { prisma } from "@/lib/db";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { Money } from "@/components/store/money";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";

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
  const productDetails = [
    [CheckCircle2, "benefits", product.benefits.join(", ")],
    [CheckCircle2, "ingredients", product.ingredients],
    [Clock3, "instructions", product.usageInstructions],
    [ShieldCheck, "warnings", product.warnings],
    [ShieldCheck, "regulatory", product.regulatoryInformation],
    [Truck, "deliveryCod", null]
  ] as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="product-visual min-h-[430px] overflow-hidden">
            <div>
              <p className="text-3xl font-black">{product.name}</p>
              <p className="mt-2 text-white/60"><LocalizedText id="visualPlaceholder" /></p>
            </div>
          </div>
          <div className="grid content-start gap-5">
            <div>
              <p className="badge mb-3"><SeedContent value={product.category.name} /></p>
              <h1 className="text-4xl font-black">{product.name}</h1>
              <p className="mt-3 text-lg text-black/65"><SeedContent value={product.shortDescription} /></p>
            </div>
            <div className="premium-panel grid gap-4 p-5">
              <div className="flex flex-wrap items-end gap-3">
                <strong className="text-4xl"><Money value={price} /></strong>
              {product.salePrice ? <span className="text-black/45 line-through"><Money value={product.regularPrice} /></span> : null}
              </div>
              <div className="grid gap-2 text-sm text-black/68 sm:grid-cols-3">
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-bronze-600" /> <LocalizedText id="cashOnDelivery" /></span>
                <span className="flex items-center gap-2"><PhoneCall size={16} className="text-bronze-600" /> <LocalizedText id="callConfirm" /></span>
                <span className="flex items-center gap-2"><Truck size={16} className="text-bronze-600" /> <LocalizedText id="shipping" /></span>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
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
              <Link className="btn btn-secondary" href="/checkout">
                <LocalizedText id="orderNow" />
              </Link>
            </div>
            <div className="grid gap-3 rounded-lg border border-bronze-500/25 bg-white p-4 text-sm text-black/70">
              {product.placeholderNotice ? <SeedContent value={product.placeholderNotice} /> : <LocalizedText id="productInfoPending" />}
              <div className="flex flex-wrap gap-2">
                {["noOnlinePayment", "callBeforePrep", "support"].map((item) => (
                  <span key={item} className="rounded-full bg-bronze-500/10 px-3 py-1 font-bold text-bronze-600">
                    <LocalizedText id={item as "noOnlinePayment" | "callBeforePrep" | "support"} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-5 md:grid-cols-2">
          {productDetails.map(([Icon, title, content]) => (
            <div key={String(title)} className="surface-card p-5">
              <Icon className="mb-4 text-bronze-600" />
              <h2 className="font-black"><LocalizedText id={title as "benefits" | "ingredients" | "instructions" | "warnings" | "regulatory" | "deliveryCod"} /></h2>
              <p className="mt-2 text-sm text-black/65">{content ? <SeedContent value={content as string} /> : <LocalizedText id={title === "deliveryCod" ? "bundleShippingText" : "productInfoPending"} />}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-6 text-3xl font-black"><LocalizedText id="relatedProducts" /></h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 z-30 border-t border-black/10 bg-white p-3 md:hidden">
        <AddToCartButton
          product={{ id: product.id, name: product.name, slug: product.slug, sku: product.sku, price, regularPrice: product.regularPrice }}
        />
      </div>
    </>
  );
}
