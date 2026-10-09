import { prisma } from "@/lib/db";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import { Money } from "@/components/store/money";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";
import { AddBundleButton } from "@/components/store/add-bundle-button";
import { ensureCatalogSynced } from "@/lib/catalog-sync";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = buildMetadata({
  title: "Bundles",
  description: "Packs ROVANX editables.",
  path: "/bundles"
});

export default async function BundlesPage() {
  await ensureCatalogSynced().catch(() => {});
  const bundles = await prisma.bundle.findMany({
    where: { active: true },
    include: { items: { include: { product: true } } },
    orderBy: { createdAt: "asc" }
  }).catch(() => []);

  return (
    <section className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-16">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="container relative z-10">
        <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <span className="badge mb-3 border-white/10 bg-white/10 text-bronze-400">
              <LocalizedText id="bundles" />
            </span>
            <h1 className="text-4xl font-black text-white sm:text-5xl">
              <LocalizedText id="bundlesTitle" />
            </h1>
            <LocalizedText id="bundlePageIntro" as="p" className="mt-3 max-w-2xl text-white/75" />
          </div>
          <Link href="/shop" className="btn border border-white/20 bg-white/10 text-white hover:bg-white/15">
            <LocalizedText id="viewProducts" /> <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {bundles.map((bundle) => (
            <article
              key={bundle.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze-500/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/50"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-bronze-500/30 bg-gradient-to-br from-bronze-400/20 to-bronze-600/30 text-bronze-400 shadow-md">
                    <BadgeCheck size={26} />
                  </span>
                  <span className="badge border-bronze-500/30 bg-bronze-500/15 text-xs font-bold text-bronze-300 uppercase tracking-wider">
                    Pack Avantage
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white transition-colors group-hover:text-bronze-400">{bundle.name}</h2>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  <SeedContent value={bundle.description} />
                </div>
                <ul className="mt-5 grid gap-2.5 text-sm">
                  {bundle.items.map((item) => (
                    <li key={item.id} className="flex items-center gap-2 text-white/85 font-medium">
                      <CheckCircle2 size={16} className="shrink-0 text-bronze-400" />
                      {item.product.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-end justify-between gap-3">
                  <p className="text-3xl font-black text-white"><Money value={bundle.bundlePrice} /></p>
                  <p className="text-sm text-white/50 line-through"><Money value={bundle.regularCombinedPrice} /></p>
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-5 text-white/70">
                  <ShieldCheck size={16} className="mb-1 text-bronze-400 inline me-1.5" />
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
