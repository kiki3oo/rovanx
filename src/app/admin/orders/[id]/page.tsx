import Link from "next/link";
import { notFound } from "next/navigation";
import { OrderStatus } from "@prisma/client";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";
import { normalizeMoroccanPhone } from "@/lib/phone";
import { getOrderStatusClassName, getOrderStatusLabel } from "@/lib/order-status";
import { blockFakeOrderAction, updateOrderStatusAction } from "@/app/admin/actions/orders";
import { AdminShell } from "@/components/admin/admin-shell";

export default async function AdminOrderDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await prisma.order.findUnique({
    where: { id },
    include: { customer: true, items: true, statusHistory: { orderBy: { createdAt: "desc" } } }
  });
  if (!order) notFound();
  const phoneForLinks = normalizeMoroccanPhone(order.customer.phone);
  const whatsappPhone = phoneForLinks.replace(/^\+/, "");
  const whatsappText = encodeURIComponent(
    `Bonjour ${order.customer.fullName}, nous vous contactons pour confirmer votre commande ROVANX ${order.reference}.`
  );
  const isBlacklisted = /\b(fake|blacklist|spam|faux|bloque|bloqué)\b/i.test(order.notes || "");

  return (
    <AdminShell>
      <div className="grid gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-black">Order {order.reference}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-bold ring-1 ${getOrderStatusClassName(order.status)}`}
              >
                {getOrderStatusLabel(order.status)}
              </span>
              {isBlacklisted ? (
                <span className="inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-black text-white">
                  🚫 NUMÉRO BLOQUÉ (FAKE / SPAM)
                </span>
              ) : null}
            </div>
          </div>
          <Link className="btn btn-secondary" href="/admin/orders">
            Back to orders
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <section className="rounded-lg border border-black/10 bg-white p-5">
            <h2 className="font-black">Customer</h2>
            <div className="mt-3 grid gap-2 text-sm">
              <p>
                <span className="font-bold">Name:</span> {order.customer.fullName}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {order.customer.phone}
              </p>
              <p>
                <span className="font-bold">City:</span> {order.customer.city}
              </p>
              <p>
                <span className="font-bold">Address:</span> {order.customer.address}
              </p>
              {order.addressDetails ? (
                <p>
                  <span className="font-bold">Details:</span> {order.addressDetails}
                </p>
              ) : null}
              {order.notes ? (
                <p>
                  <span className="font-bold">Notes:</span> {order.notes}
                </p>
              ) : null}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                className="btn btn-primary"
                href={`https://wa.me/${whatsappPhone}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp customer
              </a>
              <a className="btn btn-secondary" href={`tel:${phoneForLinks}`}>
                Call
              </a>
            </div>
          </section>
          <section className="rounded-lg border border-black/10 bg-white p-5">
            <h2 className="font-black">Status</h2>
            <form action={updateOrderStatusAction} className="mt-3 grid gap-3">
              <input type="hidden" name="orderId" value={order.id} />
              <select className="select" name="status" defaultValue={order.status}>
                {Object.values(OrderStatus).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <input className="input" name="note" placeholder="Note" />
              <button className="btn btn-primary">Update</button>
            </form>
            {!isBlacklisted ? (
              <form action={blockFakeOrderAction} className="mt-3 border-t border-black/10 pt-3">
                <input type="hidden" name="orderId" value={order.id} />
                <button className="btn w-full border border-red-600/30 bg-red-50 text-xs font-black text-red-700 hover:bg-red-100">
                  🚫 Annuler & Bloquer ce numéro (Fake / Spam)
                </button>
              </form>
            ) : null}
          </section>
        </div>
        <section className="rounded-lg border border-indigo-500/25 bg-indigo-50/40 p-5">
          <h2 className="font-black text-indigo-950">📊 Origine Publicitaire &amp; UTM (Ensemble de publicités)</h2>
          <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-indigo-200 bg-white p-3">
              <p className="text-xs font-bold text-black/55">🎯 Ensemble de publicités (Ad Set / utm_medium)</p>
              <p className="mt-1 font-black text-indigo-800">{order.utmMedium || "— Non renseigné"}</p>
            </div>
            <div className="rounded-lg border border-indigo-200 bg-white p-3">
              <p className="text-xs font-bold text-black/55">📢 Source (utm_source)</p>
              <p className="mt-1 font-black text-black">{order.utmSource || "— Direct / Organique"}</p>
            </div>
            <div className="rounded-lg border border-indigo-200 bg-white p-3">
              <p className="text-xs font-bold text-black/55">📁 Campagne (utm_campaign)</p>
              <p className="mt-1 font-black text-black">{order.utmCampaign || "—"}</p>
            </div>
            <div className="rounded-lg border border-indigo-200 bg-white p-3">
              <p className="text-xs font-bold text-black/55">🎬 Publicité / Vidéo (Ad / utm_content)</p>
              <p className="mt-1 font-black text-amber-900">{order.utmContent || "—"}</p>
            </div>
            <div className="rounded-lg border border-indigo-200 bg-white p-3">
              <p className="text-xs font-bold text-black/55">🎡 Placement / Roue (utm_term)</p>
              <p className="mt-1 font-black text-emerald-800">{order.utmTerm || "—"}</p>
            </div>
            <div className="rounded-lg border border-indigo-200 bg-white p-3">
              <p className="text-xs font-bold text-black/55">🔗 Page d&apos;entrée (Landing Page)</p>
              <p className="mt-1 truncate font-mono text-xs text-black/75" title={order.landingPage || ""}>
                {order.landingPage || "—"}
              </p>
            </div>
          </div>
        </section>
        <section className="rounded-lg border border-black/10 bg-white p-5">
          <h2 className="font-black">Items</h2>
          <div className="mt-3 grid gap-2">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between border-b border-black/10 pb-2">
                <span>
                  {item.productName} x {item.quantity}
                </span>
                <strong>{formatMoney(item.total)}</strong>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between text-xl">
            <span>Total</span>
            <strong>{formatMoney(order.total)}</strong>
          </div>
        </section>
        <section className="rounded-lg border border-black/10 bg-white p-5">
          <h2 className="font-black">History</h2>
          <div className="mt-3 grid gap-2 text-sm">
            {order.statusHistory.map((history) => (
              <p key={history.id}>
                {history.createdAt.toLocaleString("fr-MA")}: {history.from || "START"} {"->"}{" "}
                {history.to} {history.note ? `- ${history.note}` : ""}
              </p>
            ))}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
