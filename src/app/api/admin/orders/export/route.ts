import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  await requireAdmin();
  const orders = await prisma.order.findMany({ include: { customer: true }, orderBy: { createdAt: "desc" } });
  const header = ["reference", "status", "customer", "phone", "city", "total", "createdAt"];
  const rows = orders.map((order) => [
    order.reference,
    order.status,
    order.customer.fullName,
    order.customer.phone,
    order.customer.city,
    String(order.total),
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
