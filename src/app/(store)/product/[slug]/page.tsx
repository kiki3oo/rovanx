import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, Clock3, PhoneCall, ShieldCheck, Truck } from "lucide-react";
import { prisma } from "@/lib/db";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { DirectCodForm } from "@/components/store/direct-cod-form";
import { Money } from "@/components/store/money";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";
import { getProductVisual, getProductGallery } from "@/lib/product-visuals";
import { getProductDetail } from "@/lib/product-details";
import { ProductGallery } from "@/components/store/product-gallery";
import { ProductCroExperience } from "@/components/store/product-cro-experience";
import { ProductReviews } from "@/components/store/product-reviews";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
  const gallery = getProductGallery(product.slug);
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
      <section className="section relative overflow-hidden bg-[#12141a] text-white">
        {product.slug === "rovanx-vital-protein" && (
          <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/products/vital-protein-couple-bg.webp"
              alt="Vital Protein Ambience"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-center opacity-30 md:opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/80 to-[#12141a]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12141a]/95 via-[#12141a]/70 to-[#12141a]/95" />
          </div>
        )}
        <div className="container relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex items-start justify-center">
            <ProductGallery
              images={gallery}
              productName={detail?.name || product.name}
            />
          </div>
          <div className="grid content-start gap-5">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <p className="inline-flex items-center gap-1.5 rounded-full border border-bronze-500/30 bg-bronze-500/10 px-3 py-1 text-xs font-bold text-bronze-300">
                  <SeedContent value={detail?.badge || product.category.name} />
                </p>
              </div>
              <h1 className="text-3xl font-black text-white sm:text-4xl">{detail?.name || product.name}</h1>
              {detail?.tagline ? <p className="mt-1 text-sm font-bold text-bronze-400"><SeedContent value={detail.tagline} /></p> : null}
              <p className="mt-3 text-lg leading-relaxed text-white/70"><SeedContent value={shortDescription} /></p>
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
              <a href="#cod-form" className="btn flex min-h-11 items-center justify-center border border-bronze-400 bg-bronze-500 text-center font-bold text-graphite-950 hover:bg-bronze-400">
                <LocalizedText id="orderNow" />
              </a>
            </div>
            <div className="grid gap-2.5 border-t border-white/10 pt-4 text-sm text-white/80">
              <div className="flex items-center gap-2 font-black text-white">
                <ShieldCheck size={18} className="text-bronze-400" />
                <LocalizedText id="cashOnDelivery" />
              </div>
              <p className="text-sm leading-relaxed text-white/70"><LocalizedText id="cashOnDeliveryText" /> <LocalizedText id="callBeforePrep" />.</p>
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

      <ProductCroExperience slug={product.slug} />

      <section className="section border-t border-white/10 bg-[#0e1015] text-white">
        <div className="container grid gap-5 md:grid-cols-2">
          {productDetails.map(([Icon, title, content]) => (
            <div key={String(title)} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-xl backdrop-blur-md">
              <Icon className="mb-4 text-bronze-400" />
              <h2 className="text-lg font-black text-white"><LocalizedText id={title as "benefits" | "ingredients" | "instructions" | "warnings" | "regulatory" | "deliveryCod"} /></h2>
              <div className="mt-2 text-sm leading-relaxed text-white/70">
                {title === "benefits" && detail ? (
                  <ul className="list-disc space-y-2 ps-5">
                    {detail.benefits.map((benefit) => <li key={benefit}><SeedContent value={benefit} /></li>)}
                  </ul>
                ) : content ? <SeedContent value={content as string} /> : <LocalizedText id={title === "deliveryCod" ? "bundleShippingText" : "productInfoPending"} />}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductReviews slug={product.slug} productName={detail?.name || product.name} />

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
        <a href="#cod-form" className="btn btn-primary flex min-h-12 w-full items-center justify-center font-bold">
          <LocalizedText id="orderNow" /> · <Money value={price} />
        </a>
      </div>
    </>
  );
}
