import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendOrderToGoogleSheet } from "@/lib/google-sheets";

export async function POST(request: Request, { params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const { accept, offeredProductId } = await request.json();
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: true, customer: true }
  });
  if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });
  if (!accept) return NextResponse.json({ ok: true });

  const existing = order.items.find((item) => item.productId === offeredProductId);
  if (existing) return NextResponse.json({ ok: true });

  const product = await prisma.product.findUnique({ where: { id: offeredProductId } });
  if (!product || !product.active) return NextResponse.json({ error: "Invalid product" }, { status: 400 });

  const rule = await prisma.upsellRule.findFirst({
    where: {
      enabled: true,
      offeredProductId,
      sourceProductId: { in: order.items.map((item) => item.productId) }
    },
    orderBy: [{ priority: "desc" }, { createdAt: "asc" }]
  });
  if (!rule) return NextResponse.json({ error: "Upsell unavailable" }, { status: 400 });

  const unitPrice = rule.upsellPrice || product.salePrice || product.regularPrice;
  await prisma.$transaction([
    prisma.orderItem.create({
      data: {
        orderId,
        productId: product.id,
        productName: product.name,
        sku: product.sku,
        quantity: 1,
        unitPrice,
        total: unitPrice,
        isUpsell: true
      }
    }),
    prisma.order.update({
      where: { id: orderId },
      data: {
        subtotal: { increment: unitPrice },
        total: { increment: unitPrice },
        upsellAccepted: true,
        status: "UPSOLD",
        statusHistory: { create: { from: order.status, to: "UPSOLD", note: "Website upsell accepted" } }
      }
    })
  ]);

  if (order.customer) {
    const updatedItems = [
      ...order.items.map((it) => ({
        productName: it.productName,
        quantity: it.quantity,
        unitPrice: it.unitPrice,
        total: it.total,
        isUpsell: it.isUpsell
      })),
      {
        productName: product.name,
        quantity: 1,
        unitPrice,
        total: unitPrice,
        isUpsell: true
      }
    ];

    sendOrderToGoogleSheet({
      reference: order.reference,
      createdAt: order.createdAt,
      fullName: order.customer.fullName,
      phone: order.customer.phone,
      city: order.customer.city,
      address: order.customer.address,
      addressDetails: order.addressDetails,
      items: updatedItems,
      subtotal: order.subtotal + unitPrice,
      discountTotal: order.discountTotal,
      total: order.total + unitPrice,
      notes: [order.notes, `+ Upsell: ${product.name} (${unitPrice} DH)`].filter(Boolean).join(" | "),
      utmSource: order.utmSource,
      utmMedium: order.utmMedium,
      utmCampaign: order.utmCampaign,
      utmContent: order.utmContent,
      utmTerm: order.utmTerm,
      status: "UPSOLD"
    }).catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
