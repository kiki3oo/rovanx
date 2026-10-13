import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  await requireAdmin();
  const orders = await prisma.order.findMany({ include: { customer: true }, orderBy: { createdAt: "desc" } });
  const header = [
    "reference",
    "status",
    "customer",
    "phone",
    "city",
    "total",
    "utmMedium_AdSet",
    "utmSource",
    "utmCampaign",
    "utmContent_Ad",
    "utmTerm",
    "createdAt"
  ];
  const rows = orders.map((order) => [
    order.reference,
    order.status,
    order.customer.fullName,
    order.customer.phone,
    order.customer.city,
    String(order.total),
    order.utmMedium || "",
    order.utmSource || "",
    order.utmCampaign || "",
    order.utmContent || "",
    order.utmTerm || "",
    order.createdAt.toISOString()
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(","))
    .join("\n");
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=rovanx-orders.csv"
    }
  });
}
