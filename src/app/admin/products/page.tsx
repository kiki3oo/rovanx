import Link from "next/link";
import { AdminShell } from "@/components/admin/admin-shell";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";
import { deleteProductAction } from "@/app/admin/actions/products";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({ include: { category: true }, orderBy: { createdAt: "asc" } });
  return (
    <AdminShell>
      <div>
        <div className="mb-5 flex items-center justify-between gap-3">
          <h1 className="text-3xl font-black">Products</h1>
          <Link href="/admin/products/new" className="btn btn-primary">
            New product
          </Link>
        </div>
        <div className="overflow-x-auto rounded-lg border border-black/10 bg-white">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-sand-50">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">SKU</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Active</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t border-black/10">
                  <td className="p-3 font-bold">{product.name}</td>
                  <td className="p-3">{product.sku}</td>
                  <td className="p-3">{product.category.name}</td>
                  <td className="p-3">{formatMoney(product.salePrice || product.regularPrice)}</td>
                  <td className="p-3">{product.active ? "Yes" : "No"}</td>
                  <td className="flex gap-2 p-3">
                    <Link href={`/admin/products/${product.id}`} className="btn btn-secondary px-3 py-2 text-xs">
                      Edit
                    </Link>
                    <form action={deleteProductAction}>
                      <input type="hidden" name="id" value={product.id} />
                      <button className="btn btn-secondary px-3 py-2 text-xs">Disable</button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
