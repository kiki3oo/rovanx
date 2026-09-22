import { AdminShell } from "@/components/admin/admin-shell";
import { ProductForm } from "@/components/admin/product-form";
import { prisma } from "@/lib/db";

export default async function NewProductPage() {
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">New product</h1>
      <ProductForm categories={categories} />
    </AdminShell>
  );
}
