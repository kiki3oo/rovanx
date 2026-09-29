import { NextResponse } from "next/server";
import { ensureCatalogSynced } from "@/lib/catalog-sync";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  await ensureCatalogSynced(true);
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

  return NextResponse.json({
    success: true,
    total: products.length,
    products
  });
}

export async function POST() {
  return GET();
}
