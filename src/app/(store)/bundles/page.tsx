import { prisma } from "@/lib/db";
import { buildMetadata } from "@/lib/seo";
import { ensureCatalogSynced } from "@/lib/catalog-sync";
import { BundlesView } from "@/components/store/bundles-view";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = buildMetadata({
  title: "باقات وعروض التوفير الحصرية | Packs ROVANX",
  description: "باقات ROVANX للنتائج المضاعفة والتوفير الأكبر. علاجات متكاملة مصممة علمياً للرجال: صلابة، تحكم، هرمونات وتوفير حتى 200 درهم مع شحن مجاني وتغليف سري 100%.",
  path: "/bundles"
});

export default async function BundlesPage() {
  await ensureCatalogSynced().catch(() => {});

  const bundles = await prisma.bundle.findMany({
    where: { active: true },
    include: {
      items: {
        include: {
          product: {
            select: {
              id: true,
              name: true,
              slug: true
            }
          }
        }
      }
    },
    orderBy: { createdAt: "asc" }
  }).catch(() => []);

  return <BundlesView bundles={bundles} />;
}
