import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { checkoutSchema } from "@/lib/validators";
import { normalizeMoroccanPhone } from "@/lib/phone";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = checkoutSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid checkout" }, { status: 400 });
  }

  const productIds = parsed.data.items.map((item) => item.productId);
  const products = await prisma.product.findMany({ where: { id: { in: productIds }, active: true } });
  if (products.length !== productIds.length) {
    return NextResponse.json({ error: "Produit invalide" }, { status: 400 });
  }

  const productById = Object.fromEntries(products.map((product) => [product.id, product]));
  const items = parsed.data.items.map((item) => {
    const product = productById[item.productId];
    const unitPrice = product.salePrice || product.regularPrice;
    return {
      product,
      quantity: item.quantity,
      unitPrice,
      total: unitPrice * item.quantity
    };
  });
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const phoneNorm = normalizeMoroccanPhone(parsed.data.phone);
  const reference = `ROV-${Date.now().toString(36).toUpperCase()}`;

  const order = await prisma.$transaction(async (tx) => {
    const customer = await tx.customer.upsert({
      where: { phoneNorm },
      update: {
        fullName: parsed.data.fullName,
        phone: parsed.data.phone,
        city: parsed.data.city,
        address: parsed.data.address
      },
      create: {
        fullName: parsed.data.fullName,
        phone: parsed.data.phone,
        phoneNorm,
        city: parsed.data.city,
        address: parsed.data.address
      }
    });

    const created = await tx.order.create({
      data: {
        reference,
        customerId: customer.id,
        subtotal,
        total: subtotal,
        addressDetails: parsed.data.addressDetails,
        notes: parsed.data.notes,
        utmSource: parsed.data.utmSource,
        utmMedium: parsed.data.utmMedium,
        utmCampaign: parsed.data.utmCampaign,
        utmContent: parsed.data.utmContent,
        utmTerm: parsed.data.utmTerm,
        landingPage: parsed.data.landingPage,
        referrer: parsed.data.referrer,
        items: {
          create: items.map((item) => ({
            productId: item.product.id,
            productName: item.product.name,
            sku: item.product.sku,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            total: item.total
          }))
        },
        statusHistory: {
          create: { to: "NEW", note: "Order created from COD checkout" }
        }
      },
      include: { items: true }
    });
    return created;
  });

  const sourceProductIds = order.items.map((item) => item.productId);
  const rule = await prisma.upsellRule.findFirst({
    where: { enabled: true, sourceProductId: { in: sourceProductIds } },
    orderBy: [{ priority: "desc" }, { createdAt: "asc" }]
  });

  return NextResponse.json({
    orderId: order.id,
    reference: order.reference,
    upsellUrl: rule ? `/upsell/${order.id}` : `/order/${order.reference}`
  });
}
