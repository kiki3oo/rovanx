"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { productAdminSchema } from "@/lib/validators";

export async function saveProductAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const parsed = productAdminSchema.parse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    sku: formData.get("sku"),
    categoryId: formData.get("categoryId"),
    shortDescription: formData.get("shortDescription"),
    longDescription: formData.get("longDescription"),
    regularPrice: formData.get("regularPrice"),
    salePrice: formData.get("salePrice") ? formData.get("salePrice") : null,
    active: formData.get("active") === "on",
    featured: formData.get("featured") === "on",
    hero: formData.get("hero") === "on"
  });

  const data = {
    ...parsed,
    placeholderNotice:
      "Placeholder admin content. Final formula, dosage, warnings, regulatory references and claims must be reviewed before production.",
    benefits: ["Editable benefit placeholder"],
    salePrice: parsed.salePrice || null
  };

  if (id) {
    await prisma.product.update({ where: { id }, data });
  } else {
    await prisma.product.create({ data: { ...data, role: "CROSS_SELL", stockStatus: "UNKNOWN" } });
  }
  revalidatePath("/admin/products");
  revalidatePath("/shop");
  redirect("/admin/products");
}

export async function deleteProductAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id"));
  await prisma.product.update({ where: { id }, data: { active: false } });
  revalidatePath("/admin/products");
}
