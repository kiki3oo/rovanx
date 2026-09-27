import { prisma } from "@/lib/db";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import { Money } from "@/components/store/money";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";
import { AddBundleButton } from "@/components/store/add-bundle-button";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Bundles",
  description: "Packs ROVANX editables.",
  path: "/bundles"
});


export default async function BundlesPage() {
  const bundles = await prisma.bundle.findMany({
    where: { active: true },
    include: { items: { include: { product: true } } },
    orderBy: { createdAt: "asc" }
  }).catch(() => []);

  return (
    <section className="section">
      <div className="container">
        <p className="badge mb-3"><LocalizedText id="bundles" /></p>
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="text-4xl font-black"><LocalizedText id="bundlesTitle" /></h1>
            <LocalizedText id="bundlePageIntro" as="p" className="mt-3 max-w-2xl text-black/62" />
          </div>
          <Link href="/shop" className="btn btn-secondary">
            <LocalizedText id="viewProducts" /> <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {bundles.map((bundle) => (
            <article key={bundle.id} className="premium-panel grid p-5">
              <BadgeCheck className="mb-4 text-bronze-600" />
              <h2 className="text-xl font-black">{bundle.name}</h2>
              <p className="mt-2 text-sm text-black/65"><SeedContent value={bundle.description} /></p>
              <ul className="mt-5 grid gap-2 text-sm">
                {bundle.items.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="shrink-0 text-bronze-600" />
                    {item.product.name}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-3xl font-black"><Money value={bundle.bundlePrice} /></p>
              <p className="text-sm text-black/45 line-through"><Money value={bundle.regularCombinedPrice} /></p>
              <div className="mt-5 rounded-md bg-white/80 p-3 text-sm text-black/65">
                <ShieldCheck size={16} className="mb-2 text-bronze-600" />
                <LocalizedText id="bundleShippingText" />
              </div>
              <AddBundleButton
                products={bundle.items.map((item) => ({
                  id: item.product.id,
                  name: item.product.name,
                  slug: item.product.slug,
                  sku: item.product.sku,
                  price: item.product.salePrice || item.product.regularPrice,
                  regularPrice: item.product.regularPrice,
                  quantity: item.quantity
                }))}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
