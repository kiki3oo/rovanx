import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";
import { LocalizedText } from "@/components/store/localized-text";
import { PurchaseTracker } from "@/components/store/purchase-tracker";

export default async function OrderConfirmationPage({ params }: { params: Promise<{ reference: string }> }) {
  const { reference } = await params;
  const order = await prisma.order.findUnique({
    where: { reference },
    include: { customer: true, items: true }
  });
  if (!order) notFound();
  const setting = await prisma.siteSetting.findUnique({ where: { key: "store" } });
  const store = (setting?.value || {}) as { whatsapp?: string };
  const whatsapp = store.whatsapp && store.whatsapp !== "PLACEHOLDER" ? store.whatsapp : "";
  const whatsappMessage = encodeURIComponent(`Bonjour ROVANX, je souhaite confirmer ma commande ${order.reference}.`);

  return (
    <section className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-20">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
      <PurchaseTracker reference={order.reference} total={order.total} currency={order.currency} />
      <div className="container relative z-10 max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-white backdrop-blur-md shadow-2xl">
          <p className="badge mb-3 border-bronze-400/30 bg-bronze-500/15 text-bronze-300 font-bold"><LocalizedText id="thanks" /></p>
          <h1 className="text-4xl font-black text-white sm:text-5xl"><LocalizedText id="orderReceived" /></h1>
          <p className="mt-3 text-white/75">
            <LocalizedText id="reference" />: <strong className="text-bronze-300">{order.reference}</strong>
          </p>
          <div className="mt-6 grid gap-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between border-b border-white/10 pb-3 text-white/85">
                <span>
                  {item.productName} x {item.quantity}
                  {item.isUpsell ? <> (<LocalizedText id="upsell" />)</> : null}
                </span>
                <strong className="text-white">{formatMoney(item.total)}</strong>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-between border-t border-white/10 pt-4 text-xl">
            <span className="text-white/80"><LocalizedText id="totalCod" /></span>
            <strong className="text-2xl font-black text-white">{formatMoney(order.total)}</strong>
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/75">
            <LocalizedText id="nextSteps" />
          </div>
          {whatsapp ? (
            <a className="btn btn-primary mt-6 w-full sm:w-auto" href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
              <LocalizedText id="confirmWhatsapp" />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
