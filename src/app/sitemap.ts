import type { MetadataRoute } from "next";
import { prisma } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const baseRoutes = [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/shop`, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() }
  ];

  try {
    const [products, articles] = await Promise.all([
      prisma.product.findMany({ where: { active: true }, select: { slug: true, updatedAt: true } }),
      prisma.article.findMany({ where: { status: "PUBLISHED" }, select: { slug: true, updatedAt: true } })
    ]);

    return [
      ...baseRoutes,
    ...products.map((product) => ({
      url: `${siteUrl}/product/${product.slug}`,
      lastModified: product.updatedAt
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: article.updatedAt
    }))
    ];
  } catch {
    return baseRoutes;
  }
}
