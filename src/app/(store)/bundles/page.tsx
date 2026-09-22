import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";
import { buildMetadata } from "@/lib/seo";

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
  });

  return (
    <section className="section">
      <div className="container">
        <p className="badge mb-3">Bundles</p>
        <h1 className="mb-8 text-4xl font-black">Packs ROVANX</h1>
        <div className="grid gap-5 md:grid-cols-3">
          {bundles.map((bundle) => (
            <article key={bundle.id} className="rounded-lg border border-black/10 bg-white p-5">
              <h2 className="text-xl font-black">{bundle.name}</h2>
              <p className="mt-2 text-sm text-black/65">{bundle.description}</p>
              <ul className="mt-4 grid gap-2 text-sm">
                {bundle.items.map((item) => (
                  <li key={item.id}>{item.product.name}</li>
                ))}
              </ul>
              <p className="mt-4 text-2xl font-black">{formatMoney(bundle.bundlePrice)}</p>
              <p className="text-sm text-black/45 line-through">{formatMoney(bundle.regularCombinedPrice)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
