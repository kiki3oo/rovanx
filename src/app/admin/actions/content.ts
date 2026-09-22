"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function saveCategoryAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const data = {
    name: String(formData.get("name")),
    slug: String(formData.get("slug")),
    description: String(formData.get("description") || ""),
    active: formData.get("active") === "on"
  };
  if (id) await prisma.category.update({ where: { id }, data });
  else await prisma.category.create({ data });
  revalidatePath("/admin/categories");
  redirect("/admin/categories");
}

export async function saveUpsellRuleAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const data = {
    sourceProductId: String(formData.get("sourceProductId")),
    offeredProductId: String(formData.get("offeredProductId")),
    upsellPrice: formData.get("upsellPrice") ? Number(formData.get("upsellPrice")) : null,
    headline: String(formData.get("headline")),
    description: String(formData.get("description")),
    enabled: formData.get("enabled") === "on",
    priority: Number(formData.get("priority") || 0)
  };
  if (id) await prisma.upsellRule.update({ where: { id }, data });
  else await prisma.upsellRule.create({ data });
  revalidatePath("/admin/upsells");
  redirect("/admin/upsells");
}

export async function saveBundleAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const data = {
    name: String(formData.get("name")),
    slug: String(formData.get("slug")),
    description: String(formData.get("description")),
    bundlePrice: Number(formData.get("bundlePrice") || 0),
    regularCombinedPrice: Number(formData.get("regularCombinedPrice") || 0),
    active: formData.get("active") === "on"
  };
  if (id) await prisma.bundle.update({ where: { id }, data });
  else await prisma.bundle.create({ data });
  revalidatePath("/admin/bundles");
  redirect("/admin/bundles");
}

export async function saveArticleAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const data = {
    title: String(formData.get("title")),
    slug: String(formData.get("slug")),
    excerpt: String(formData.get("excerpt")),
    body: String(formData.get("body")),
    authorId: String(formData.get("authorId")),
    categoryId: String(formData.get("categoryId")),
    status: formData.get("status") === "PUBLISHED" ? "PUBLISHED" : "DRAFT",
    publishedAt: formData.get("status") === "PUBLISHED" ? new Date() : null,
    seoTitle: String(formData.get("seoTitle") || ""),
    seoDescription: String(formData.get("seoDescription") || "")
  } as const;
  if (id) await prisma.article.update({ where: { id }, data });
  else await prisma.article.create({ data });
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  redirect("/admin/blog");
}
