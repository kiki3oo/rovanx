import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { Money } from "@/components/store/money";
import { UpsellDecision } from "@/components/store/upsell-decision";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";

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
      <section className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-20">
        <div className="container relative z-10 max-w-xl text-center rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md shadow-2xl">
          <h1 className="text-3xl font-black text-white"><LocalizedText id="orderReceived" /></h1>
          <Link href={`/order/${order.reference}`} className="btn btn-primary mt-6">
            <LocalizedText id="viewConfirmation" />
          </Link>
        </div>
      </section>
    );
  }

  const price = rule.upsellPrice || rule.offeredProduct.salePrice || rule.offeredProduct.regularPrice;

  return (
    <section className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-20">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
      <div className="container relative z-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-md shadow-2xl">
          <div>
            <p className="text-3xl font-black text-white">{rule.offeredProduct.name}</p>
            <p className="mt-2 text-white/70"><LocalizedText id="extraOffer" /></p>
          </div>
        </div>
        <div className="grid gap-5">
          <p className="badge w-fit border-bronze-400/30 bg-bronze-500/15 text-bronze-300 font-bold"><LocalizedText id="oneOffer" /></p>
          <h1 className="text-4xl font-black text-white"><SeedContent value={rule.headline} /></h1>
          <p className="text-lg leading-relaxed text-white/75"><SeedContent value={rule.description} /></p>
          <p className="text-3xl font-black text-white"><Money value={price} /></p>
          <p className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/80 backdrop-blur-sm">
            <LocalizedText id="sameParcel" />
          </p>
          <UpsellDecision orderId={order.id} reference={order.reference} offeredProductId={rule.offeredProductId} />
        </div>
      </div>
    </section>
  );
}
