import { NextResponse } from "next/server";
import { ensureCatalogSynced } from "@/lib/catalog-sync";
import { prisma } from "@/lib/db";
import type { Product } from "@prisma/client";

export const dynamic = "force-dynamic";

type CatalogProduct = Pick<Product, "id" | "name" | "slug" | "sku" | "salePrice" | "regularPrice" | "active" | "featured">;
let cachedProductsResponse: { timestamp: number; data: CatalogProduct[] } | null = null;
const CACHE_TTL_MS = 60 * 1000; // 60s cache to shield database from bursts

export async function GET() {
  const now = Date.now();
  if (cachedProductsResponse && now - cachedProductsResponse.timestamp < CACHE_TTL_MS) {
    return NextResponse.json({
      success: true,
      total: cachedProductsResponse.data.length,
      products: cachedProductsResponse.data
    });
  }

  const products = await prisma.product.findMany({
    where: { active: true },
    select: {
      id: true,
      name: true,
      slug: true,
      sku: true,
      salePrice: true,
      regularPrice: true,
      active: true,
      featured: true
    }
  });

  cachedProductsResponse = { timestamp: now, data: products };

  return NextResponse.json({
    success: true,
    total: products.length,
    products
  });
}

export async function POST(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || secret.length < 32 || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await ensureCatalogSynced(true);
  cachedProductsResponse = null;
  return GET();
}
