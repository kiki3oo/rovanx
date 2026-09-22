import { AdminShell } from "@/components/admin/admin-shell";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    include: { orders: true },
    orderBy: { createdAt: "desc" }
  });
  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">Customers</h1>
      <div className="overflow-x-auto rounded-lg border border-black/10 bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-sand-50">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">City</th>
              <th className="p-3">Orders</th>
              <th className="p-3">Total purchases</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t border-black/10">
                <td className="p-3 font-bold">{customer.fullName}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">{customer.city}</td>
                <td className="p-3">{customer.orders.length}</td>
                <td className="p-3">{formatMoney(customer.orders.reduce((sum, order) => sum + order.total, 0))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
