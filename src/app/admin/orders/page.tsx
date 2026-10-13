import Link from "next/link";
import { CheckCircle2, GitMerge, MessageCircle, ShieldAlert } from "lucide-react";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";
import { normalizeMoroccanPhone } from "@/lib/phone";
import { getOrderStatusClassName, getOrderStatusLabel } from "@/lib/order-status";
import { keepOnlyThisOrderAction, mergeCustomerOrdersAction } from "@/app/admin/actions/orders";
import { AdminShell } from "@/components/admin/admin-shell";

export default async function AdminOrdersPage({
  searchParams
}: {
  searchParams: Promise<{ search?: string; status?: string; tab?: string }>;
}) {
  const params = await searchParams;
  const currentTab = params.tab || "main";

  const allOrders = await prisma.order.findMany({
    where: {
      status: params.status ? (params.status as never) : undefined,
      OR: params.search
        ? [
            { reference: { contains: params.search, mode: "insensitive" } },
            { customer: { fullName: { contains: params.search, mode: "insensitive" } } },
            { customer: { phone: { contains: params.search, mode: "insensitive" } } }
          ]
        : undefined
    },
    include: { customer: true, items: true },
    orderBy: { createdAt: "desc" }
  });

  // Group active orders by customerId to detect multi-orders
  const activeOrdersByCustomer = new Map<string, typeof allOrders>();
  for (const o of allOrders) {
    if (o.status !== "CANCELLED") {
      const list = activeOrdersByCustomer.get(o.customerId) || [];
      list.push(o);
      activeOrdersByCustomer.set(o.customerId, list);
    }
  }

  function classifyOrder(order: (typeof allOrders)[number]): "main" | "multi" | "blocked" {
    const notes = order.notes || "";
    const isBlacklisted = /\b(fake|blacklist|spam|faux|bloque|bloqué)\b/i.test(notes);
    const isAutoCancelled = /\[(MERGED_INTO|REPLACED_BY):/i.test(notes);

    if (isBlacklisted || isAutoCancelled) {
      return "blocked";
    }

    const isTaggedMulti = /\[MULTI_ORDER\s*#\d+\]/i.test(notes);
    if (isTaggedMulti && order.status !== "CANCELLED") {
      return "multi";
    }

    return "main";
  }

  const mainOrders = allOrders.filter((o) => classifyOrder(o) === "main");
  const multiOrders = allOrders.filter((o) => classifyOrder(o) === "multi");
  const blockedOrders = allOrders.filter((o) => classifyOrder(o) === "blocked");

  const displayedOrders =
    currentTab === "multi"
      ? multiOrders
      : currentTab === "blocked"
        ? blockedOrders
        : mainOrders;

  return (
    <AdminShell>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black">Orders</h1>
          <p className="mt-1 text-xs text-black/60">
            Les commandes supplémentaires (2e et 3e commande du même client) sont isolées dans l&apos;onglet Multi-commandes pour ne pas perturber votre confirmation.
          </p>
        </div>
        <a className="btn btn-secondary" href="/api/admin/orders/export">
          Export CSV
        </a>
      </div>

      {/* 3 Clean Workspace Tabs */}
      <div className="mb-5 flex flex-wrap gap-2 border-b border-black/10 pb-3">
        <Link
          href={`/admin/orders?tab=main${params.status ? `&status=${params.status}` : ""}${params.search ? `&search=${params.search}` : ""}`}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition ${
            currentTab === "main"
              ? "bg-graphite-950 text-white shadow-sm"
              : "border border-black/10 bg-white text-black/70 hover:bg-sand-50"
          }`}
        >
          <span>📦 Commandes Principales (الطلبات الأساسية)</span>
          <span className="rounded-full bg-bronze-500 px-2 py-0.5 text-[11px] font-black text-black">
            {mainOrders.length}
          </span>
        </Link>

        <Link
          href={`/admin/orders?tab=multi${params.status ? `&status=${params.status}` : ""}${params.search ? `&search=${params.search}` : ""}`}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition ${
            currentTab === "multi"
              ? "bg-amber-500 text-black shadow-sm"
              : "border border-amber-500/40 bg-amber-50/70 text-amber-950 hover:bg-amber-100"
          }`}
        >
          <span>⚠️ Multi-commandes 2 & 3 (طلبات مكررة للمراجعة)</span>
          <span className="rounded-full bg-black/15 px-2 py-0.5 text-[11px] font-black">
            {multiOrders.length}
          </span>
        </Link>

        <Link
          href={`/admin/orders?tab=blocked${params.status ? `&status=${params.status}` : ""}${params.search ? `&search=${params.search}` : ""}`}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition ${
            currentTab === "blocked"
              ? "bg-red-700 text-white shadow-sm"
              : "border border-black/10 bg-white text-black/65 hover:bg-sand-50"
          }`}
        >
          <ShieldAlert size={14} />
          <span>🚫 Bloqués & Fusionnés ({blockedOrders.length})</span>
        </Link>
      </div>

      <form className="mb-5 grid gap-3 rounded-lg border border-black/10 bg-white p-4 sm:grid-cols-[1fr_180px_auto]">
        <input type="hidden" name="tab" value={currentTab} />
        <input
          className="input"
          name="search"
          placeholder="Search par référence, nom ou téléphone..."
          defaultValue={params.search || ""}
        />
        <select className="select" name="status" defaultValue={params.status || ""}>
          <option value="">All statuses</option>
          {[
            "NEW",
            "UPSOLD",
            "CONTACTING",
            "CONFIRMED",
            "CANCELLED",
            "SHIPPED",
            "DELIVERED",
            "RETURNED"
          ].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button className="btn btn-primary">Filter</button>
      </form>

      <div className="overflow-x-auto rounded-lg border border-black/10 bg-white">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-sand-50">
            <tr>
              <th className="p-3">Reference</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Produits & Notes</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total</th>
              <th className="p-3">Created</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-sm text-black/55">
                  Aucune commande dans cet onglet.
                </td>
              </tr>
            ) : (
              displayedOrders.map((order) => {
                const phoneForWa = normalizeMoroccanPhone(order.customer.phone).replace(/^\+/, "");
                const customerActiveOrders = activeOrdersByCustomer.get(order.customerId) || [order];
                const hasMultipleActive = customerActiveOrders.length > 1;
                const itemsText = order.items
                  .map((it) => `${it.productName} (x${it.quantity})`)
                  .join(" + ");

                const allCustomerOrdersSummary = customerActiveOrders
                  .map(
                    (o, idx) =>
                      `${idx + 1}. طلب ${o.reference}: ${o.items.map((i) => `${i.productName} x${i.quantity}`).join(" + ")} (${o.total} DH)`
                  )
                  .join("\n");

                // Smart Chatbot-style WhatsApp message when customer placed 2 or 3 orders
                const waMessage = encodeURIComponent(
                  hasMultipleActive
                    ? `السلام عليكم سي ${order.customer.fullName} 👋\nمعك خدمة تأكيد الطلبات من متجر ROVANX.\nلاحظنا أنك سجلت ${customerActiveOrders.length} طلبات اليوم بنفس الرقم:\n${allCustomerOrdersSummary}\n\nالمرجو الرد برقم:\n1️⃣ إذا كنت ترغب في دمج كل الطلبات في شحنة سرية واحدة\n2️⃣ إذا كنت ترغب في اعتماد الطلب الأخير فقط وإلغاء السابق`
                    : `السلام عليكم سي ${order.customer.fullName} 👋\nمعك متجر ROVANX لتأكيد طلبك رقم ${order.reference} (${itemsText}) بمبلغ ${formatMoney(order.total)} (التوصيل مجاني وسري 100%).\nهل نعتمد العنوان (${order.customer.address}) لشحن طردك اليوم؟`
                );

                return (
                  <tr key={order.id} className="border-t border-black/10 align-top">
                    <td className="p-3 font-bold">
                      <Link href={`/admin/orders/${order.id}`} className="hover:text-bronze-600">
                        {order.reference}
                      </Link>
                      {hasMultipleActive ? (
                        <div className="mt-1">
                          <span className="inline-block rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-900 ring-1 ring-amber-400/50">
                            ⚠️ {customerActiveOrders.length} commandes actives
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td className="p-3">
                      <div className="font-semibold">{order.customer.fullName}</div>
                      <div className="font-mono text-xs text-black/65">{order.customer.phone}</div>
                      <div className="mt-0.5 text-xs text-black/50">{order.customer.address}</div>
                    </td>
                    <td className="max-w-xs p-3">
                      <div className="text-xs font-bold text-black/85">{itemsText}</div>
                      {order.notes ? (
                        <div className="mt-1 rounded bg-sand-50 p-1.5 text-[11px] text-black/65">
                          {order.notes}
                        </div>
                      ) : null}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${getOrderStatusClassName(order.status)}`}
                      >
                        {getOrderStatusLabel(order.status)}
                      </span>
                    </td>
                    <td className="p-3 font-bold">{formatMoney(order.total)}</td>
                    <td className="p-3 text-xs text-black/65">
                      {order.createdAt.toLocaleString("fr-MA", {
                        day: "2-digit",
                        month: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex flex-wrap items-center justify-end gap-1.5">
                        <a
                          href={`https://wa.me/${phoneForWa}?text=${waMessage}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-md bg-[#25D366] px-2.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-600"
                          title={
                            hasMultipleActive
                              ? "Envoyer le message Bot Multi-Commandes sur WhatsApp"
                              : "Confirmer sur WhatsApp"
                          }
                        >
                          <MessageCircle size={13} />
                          <span>{hasMultipleActive ? "Bot WhatsApp (Multi)" : "WhatsApp"}</span>
                        </a>

                        {hasMultipleActive ? (
                          <>
                            <form action={mergeCustomerOrdersAction}>
                              <input type="hidden" name="orderId" value={order.id} />
                              <button
                                type="submit"
                                className="inline-flex items-center gap-1 rounded-md border border-indigo-600/30 bg-indigo-50 px-2.5 py-1.5 text-xs font-black text-indigo-800 hover:bg-indigo-100"
                                title="Fusionner toutes les commandes de ce client en une seule commande principale"
                              >
                                <GitMerge size={13} />
                                <span>دمج الكل (Fusionner)</span>
                              </button>
                            </form>

                            <form action={keepOnlyThisOrderAction}>
                              <input type="hidden" name="orderId" value={order.id} />
                              <button
                                type="submit"
                                className="inline-flex items-center gap-1 rounded-md border border-amber-600/30 bg-amber-50 px-2.5 py-1.5 text-xs font-black text-amber-900 hover:bg-amber-100"
                                title="Garder uniquement cette commande et annuler les autres du même client"
                              >
                                <CheckCircle2 size={13} />
                                <span>اعتماد هذا فقط</span>
                              </button>
                            </form>
                          </>
                        ) : null}

                        <Link
                          href={`/admin/orders/${order.id}`}
                          className="rounded-md border border-black/15 bg-white px-2.5 py-1.5 text-xs font-bold hover:bg-sand-50"
                        >
                          Détails
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}

