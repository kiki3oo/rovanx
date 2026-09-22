import { notFound } from "next/navigation";
import { OrderStatus } from "@prisma/client";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";
import { updateOrderStatusAction } from "@/app/admin/actions/orders";
import { AdminShell } from "@/components/admin/admin-shell";

export default async function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = await prisma.order.findUnique({
    where: { id },
    include: { customer: true, items: true, statusHistory: { orderBy: { createdAt: "desc" } } }
  });
  if (!order) notFound();

  return (
    <AdminShell>
    <div className="grid gap-5">
      <h1 className="text-3xl font-black">Order {order.reference}</h1>
      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-lg border border-black/10 bg-white p-5">
          <h2 className="font-black">Customer</h2>
          <p className="mt-3">{order.customer.fullName}</p>
          <p>{order.customer.phone}</p>
          <p>{order.customer.city}</p>
          <p>{order.customer.address}</p>
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
        </section>
      </div>
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
              {history.createdAt.toLocaleString("fr-MA")}: {history.from || "START"} {"->"} {history.to} {history.note ? `- ${history.note}` : ""}
            </p>
          ))}
        </div>
      </section>
    </div>
    </AdminShell>
  );
}
