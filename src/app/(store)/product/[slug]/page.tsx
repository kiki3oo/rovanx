import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock3, PhoneCall, ShieldCheck, Truck } from "lucide-react";
import { prisma } from "@/lib/db";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { BuyNowButton } from "@/components/store/buy-now-button";
import { DirectCodForm } from "@/components/store/direct-cod-form";
import { Money } from "@/components/store/money";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";
import { getProductVisual } from "@/lib/product-visuals";
import { getProductDetail } from "@/lib/product-details";

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await prisma.product.findMany({ select: { slug: true }, where: { active: true } }).catch(() => []);
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } }).catch(() => null);
  if (!product) return {};
  const detail = getProductDetail(slug);
  return buildMetadata({
    title: product.seoTitle || detail?.name || product.name,
    description: product.seoDescription || detail?.shortDescription || product.shortDescription,
    path: `/product/${product.slug}`,
    image: product.ogImage || getProductVisual(product.slug)?.src
  });
}


export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: { category: true }
  }).catch(() => null);
  if (!product || !product.active) notFound();

  const related = await prisma.product.findMany({
    where: { active: true, categoryId: product.categoryId, id: { not: product.id } },
    take: 3
  }).catch(() => []);

  const detail = getProductDetail(product.slug);
  const shortDescription = detail?.shortDescription || product.shortDescription;
  const benefitsText = detail ? detail.benefits.join("\n\n• ") : product.benefits.join(", ");
  const ingredientsText = detail?.ingredients || (product.ingredients?.includes("Placeholder") ? null : product.ingredients);
  const instructionsText = detail?.usageInstructions || (product.usageInstructions?.includes("Placeholder") ? null : product.usageInstructions);
  const warningsText = detail?.warnings || (product.warnings?.includes("Placeholder") ? null : product.warnings);
  const regulatoryText = detail?.regulatoryInformation || (product.regulatoryInformation?.includes("Placeholder") ? null : product.regulatoryInformation);

  const price = product.salePrice || product.regularPrice;
  const visual = getProductVisual(product.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: shortDescription,
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
    [CheckCircle2, "benefits", benefitsText ? `• ${benefitsText}` : null],
    [CheckCircle2, "ingredients", ingredientsText],
    [Clock3, "instructions", instructionsText],
    [ShieldCheck, "warnings", warningsText],
    [ShieldCheck, "regulatory", regulatoryText],
    [Truck, "deliveryCod", null]
  ] as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="section bg-[#12141a] text-white">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md">
            {visual ? (
              <img src={visual.src} alt={visual.alt} className="product-packshot product-packshot-page" />
            ) : (
              <div>
                <p className="text-3xl font-black text-white">{product.name}</p>
                <p className="mt-2 text-white/60"><LocalizedText id="visualPlaceholder" /></p>
              </div>
            )}
          </div>
          <div className="grid content-start gap-5">
            <div>
              <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-bronze-500/30 bg-bronze-500/10 px-3 py-1 text-xs font-bold text-bronze-300">
                <SeedContent value={detail?.badge || product.category.name} />
              </p>
              <h1 className="text-3xl font-black text-white sm:text-4xl">{detail?.name || product.name}</h1>
              {detail?.tagline ? <p className="mt-1 text-sm font-bold text-bronze-400">{detail.tagline}</p> : null}
              <p className="mt-3 text-lg leading-relaxed text-white/70">{shortDescription}</p>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur-md">
              <div className="flex flex-wrap items-end gap-3">
                <strong className="text-4xl text-white"><Money value={price} /></strong>
                {product.salePrice ? <span className="text-white/40 line-through"><Money value={product.regularPrice} /></span> : null}
              </div>
              <div className="grid gap-2 text-sm text-white/70 sm:grid-cols-3">
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-bronze-400" /> <LocalizedText id="cashOnDelivery" /></span>
                <span className="flex items-center gap-2"><PhoneCall size={16} className="text-bronze-400" /> <LocalizedText id="callConfirm" /></span>
                <span className="flex items-center gap-2"><Truck size={16} className="text-bronze-400" /> <LocalizedText id="shipping" /></span>
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
              <BuyNowButton
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
            <div className="grid gap-2.5 rounded-xl border border-bronze-500/25 bg-white/[0.03] p-4 text-sm text-white/80 backdrop-blur-md">
              <div className="flex items-center gap-2 font-black text-white">
                <ShieldCheck size={18} className="text-bronze-400" />
                <span>Garantie Qualité & Authenticité ROVANX</span>
              </div>
              <p className="text-xs leading-relaxed text-white/70">
                Formule originale certifiée, extraits standardisés et contrôlés. Emballage scellé et expédition sous 24/48h partout au Maroc avec paiement en espèces à la livraison.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["noOnlinePayment", "callBeforePrep", "support"].map((item) => (
                  <span key={item} className="rounded-full border border-bronze-500/20 bg-bronze-500/10 px-3 py-1 text-xs font-bold text-bronze-300">
                    <LocalizedText id={item as "noOnlinePayment" | "callBeforePrep" | "support"} />
                  </span>
                ))}
              </div>
            </div>

            <DirectCodForm
              darkTheme={true}
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
        </div>
      </section>

      <section className="section border-t border-white/10 bg-[#0e1015] text-white">
        <div className="container grid gap-5 md:grid-cols-2">
          {productDetails.map(([Icon, title, content]) => (
            <div key={String(title)} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-xl backdrop-blur-md">
              <Icon className="mb-4 text-bronze-400" />
              <h2 className="text-lg font-black text-white"><LocalizedText id={title as "benefits" | "ingredients" | "instructions" | "warnings" | "regulatory" | "deliveryCod"} /></h2>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{content ? <SeedContent value={content as string} /> : <LocalizedText id={title === "deliveryCod" ? "bundleShippingText" : "productInfoPending"} />}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section border-t border-white/10 bg-[#12141a] text-white">
        <div className="container">
          <h2 className="mb-6 text-3xl font-black text-white"><LocalizedText id="relatedProducts" /></h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} darkTheme />
            ))}
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 z-30 border-t border-white/10 bg-[#12141a]/95 p-3 backdrop-blur-md md:hidden">
        <AddToCartButton
          product={{ id: product.id, name: product.name, slug: product.slug, sku: product.sku, price, regularPrice: product.regularPrice }}
        />
      </div>
    </>
  );
}
