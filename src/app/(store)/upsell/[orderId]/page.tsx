import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { Money } from "@/components/store/money";
import { UpsellDecision } from "@/components/store/upsell-decision";

export default async function UpsellPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const order = await prisma.order.findUnique({ where: { id: orderId }, include: { items: true } });
  if (!order) notFound();

  const sourceProductIds = order.items.map((item) => item.productId);
  const rule = await prisma.upsellRule.findFirst({
    where: {
      enabled: true,
      sourceProductId: { in: sourceProductIds },
      offeredProductId: { notIn: sourceProductIds }
    },
    include: { offeredProduct: true },
    orderBy: [{ priority: "desc" }, { createdAt: "asc" }]
  });

  if (!rule) {
    return (
      <section className="section">
        <div className="container rounded-lg border border-black/10 bg-white p-8 text-center">
          <h1 className="text-3xl font-black">Commande recue</h1>
          <Link href={`/order/${order.reference}`} className="btn btn-primary mt-4">
            Voir la confirmation
          </Link>
        </div>
      </section>
    );
  }

  const price = rule.upsellPrice || rule.offeredProduct.salePrice || rule.offeredProduct.regularPrice;

  return (
    <section className="section">
      <div className="container grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="product-visual min-h-[320px]">
          <div>
            <p className="text-3xl font-black">{rule.offeredProduct.name}</p>
            <p className="mt-2 text-white/60">Offre additionnelle</p>
          </div>
        </div>
        <div className="grid gap-5">
          <p className="badge w-fit">Une seule offre</p>
          <h1 className="text-4xl font-black">{rule.headline}</h1>
          <p className="text-lg text-black/65">{rule.description}</p>
          <p className="text-3xl font-black"><Money value={price} /></p>
          <p className="rounded-lg border border-black/10 bg-white p-4 text-sm text-black/65">
            Ajoute au meme colis et a la meme commande. Aucun deuxieme checkout.
          </p>
          <UpsellDecision orderId={order.id} reference={order.reference} offeredProductId={rule.offeredProductId} />
        </div>
      </div>
    </section>
  );
}
