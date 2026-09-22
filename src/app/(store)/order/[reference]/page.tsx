import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";

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
    <section className="section">
      <div className="container max-w-3xl">
        <div className="rounded-lg border border-black/10 bg-white p-6">
          <p className="badge mb-3">Merci</p>
          <h1 className="text-4xl font-black">Commande recue</h1>
          <p className="mt-3 text-black/65">
            Reference: <strong>{order.reference}</strong>
          </p>
          <div className="mt-6 grid gap-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between border-b border-black/10 pb-3">
                <span>
                  {item.productName} x {item.quantity}
                  {item.isUpsell ? " (upsell)" : ""}
                </span>
                <strong>{formatMoney(item.total)}</strong>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xl">
            <span>Total COD</span>
            <strong>{formatMoney(order.total)}</strong>
          </div>
          <div className="mt-6 rounded-lg bg-sand-50 p-4 text-sm text-black/70">
            Prochaines etapes: confirmation par appel, preparation apres confirmation, livraison selon la zone.
          </div>
          {whatsapp ? (
            <a className="btn btn-primary mt-4 w-full sm:w-auto" href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
              Confirmer sur WhatsApp
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
