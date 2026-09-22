import Link from "next/link";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";
import { getOrderStatusClassName, getOrderStatusLabel } from "@/lib/order-status";
import { AdminShell } from "@/components/admin/admin-shell";

export default async function AdminOrdersPage({
  searchParams
}: {
  searchParams: Promise<{ search?: string; status?: string }>;
}) {
  const params = await searchParams;
  const orders = await prisma.order.findMany({
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

  return (
    <AdminShell>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-black">Orders</h1>
        <a className="btn btn-secondary" href="/api/admin/orders/export">
          Export CSV
        </a>
      </div>
      <form className="mb-5 grid gap-3 rounded-lg border border-black/10 bg-white p-4 sm:grid-cols-[1fr_180px_auto]">
        <input
          className="input"
          name="search"
          placeholder="Search"
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
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-sand-50">
            <tr>
              <th className="p-3">Reference</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total</th>
              <th className="p-3">Upsell</th>
              <th className="p-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-black/10">
                <td className="p-3 font-bold">
                  <Link href={`/admin/orders/${order.id}`}>{order.reference}</Link>
                </td>
                <td className="p-3">
                  <div className="font-semibold">{order.customer.fullName}</div>
                  <div className="text-xs text-black/55">{order.customer.phone}</div>
                </td>
                <td className="p-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${getOrderStatusClassName(order.status)}`}
                  >
                    {getOrderStatusLabel(order.status)}
                  </span>
                </td>
                <td className="p-3">{formatMoney(order.total)}</td>
                <td className="p-3">{order.upsellAccepted ? "Yes" : "No"}</td>
                <td className="p-3">{order.createdAt.toLocaleDateString("fr-MA")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
