import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { ProductForm } from "@/components/admin/product-form";
import { prisma } from "@/lib/db";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [product, categories] = await Promise.all([
    prisma.product.findUnique({ where: { id } }),
    prisma.category.findMany({ orderBy: { name: "asc" } })
  ]);
  if (!product) notFound();
  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">Edit product</h1>
      <ProductForm product={product} categories={categories} />
    </AdminShell>
  );
}
