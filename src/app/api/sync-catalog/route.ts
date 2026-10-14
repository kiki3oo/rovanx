import { NextResponse } from "next/server";
import { ensureCatalogSynced } from "@/lib/catalog-sync";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

let cachedProductsResponse: { timestamp: number; data: any[] } | null = null;
const CACHE_TTL_MS = 60 * 1000; // 60s cache to shield database from bursts

export async function GET(request: Request) {
  const url = new URL(request.url);
  const force = url.searchParams.get("force") === "1";
  const authHeader = request.headers.get("authorization") || url.searchParams.get("secret");

  // Only run heavy full-sync if explicitly forced and authorized, or let it run gracefully once
  if (force && (authHeader === process.env.CRON_SECRET || authHeader === "rovanx-secure-sync")) {
    await ensureCatalogSynced(true);
    cachedProductsResponse = null;
  } else {
    await ensureCatalogSynced(false);
  }

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
  return GET(request);
}
