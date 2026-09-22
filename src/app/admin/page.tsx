import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";
import { AdminShell } from "@/components/admin/admin-shell";

export default async function AdminDashboardPage() {
  const [orders, confirmed, delivered, cancelled, returned] = await Promise.all([
    prisma.order.findMany({ include: { items: true }, orderBy: { createdAt: "desc" }, take: 50 }),
    prisma.order.count({ where: { status: "CONFIRMED" } }),
    prisma.order.count({ where: { status: "DELIVERED" } }),
    prisma.order.count({ where: { status: "CANCELLED" } }),
    prisma.order.count({ where: { status: "RETURNED" } })
  ]);
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);
  const aov = orders.length ? Math.round(revenue / orders.length) : 0;
  const upsells = orders.filter((order) => order.upsellAccepted).length;
  const rate = (value: number) => (orders.length ? `${Math.round((value / orders.length) * 100)}%` : "0%");
  const cards = [
    ["New Orders", String(orders.filter((order) => order.status === "NEW").length)],
    ["Confirmed Orders", String(confirmed)],
    ["Delivered Orders", String(delivered)],
    ["Revenue", formatMoney(revenue)],
    ["Average Order Value", formatMoney(aov)],
    ["Upsell Acceptance Rate", rate(upsells)],
    ["Cancellation Rate", rate(cancelled)],
    ["Return Rate", rate(returned)]
  ];

  return (
    <AdminShell>
      <h1 className="mb-6 text-3xl font-black">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label, value]) => (
          <div key={label} className="rounded-lg border border-black/10 bg-white p-5">
            <p className="text-sm text-black/55">{label}</p>
            <p className="mt-2 text-2xl font-black">{value}</p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
