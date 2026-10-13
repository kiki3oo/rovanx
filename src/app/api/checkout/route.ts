import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { checkoutSchema } from "@/lib/validators";
import { normalizeMoroccanPhone } from "@/lib/phone";
import { calculateTierDiscount } from "@/lib/pricing-tiers";

type IpRecord = {
  phones: Set<string>;
  timestamps: number[];
};

const ipRateMap = new Map<string, IpRecord>();
const IP_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_DISTINCT_PHONES_PER_IP = 2;
const MAX_ATTEMPTS_PER_IP = 6;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function checkIpRateLimit(ip: string, phoneNorm: string): boolean {
  if (!ip || ip === "unknown" || ip === "127.0.0.1" || ip === "::1") {
    return true;
  }
  const now = Date.now();
  const record = ipRateMap.get(ip) || { phones: new Set<string>(), timestamps: [] };
  record.timestamps = record.timestamps.filter((t) => now - t < IP_WINDOW_MS);

  if (record.timestamps.length >= MAX_ATTEMPTS_PER_IP) {
    return false;
  }
  if (!record.phones.has(phoneNorm) && record.phones.size >= MAX_DISTINCT_PHONES_PER_IP) {
    return false;
  }

  record.timestamps.push(now);
  record.phones.add(phoneNorm);
  ipRateMap.set(ip, record);
  return true;
}

export async function POST(request: Request) {
  const body = await request.json();

  // Layer 1: Invisible Honeypot Trap against bots
  if (typeof body?.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json(
      { error: "تم رفض الطلب تلقائياً / Requête bloquée" },
      { status: 400 }
    );
  }

  // Layer 2: Speed-Trap against automated scripts (< 1.5s fill time)
  if (
    typeof body?.formRenderedAt === "number" &&
    body.formRenderedAt > 0 &&
    Date.now() - body.formRenderedAt < 1500
  ) {
    return NextResponse.json(
      {
        error:
          "يرجى التأكد من معلوماتك والمحاولة مرة أخرى / Veuillez vérifier vos informations et réessayer"
      },
      { status: 400 }
    );
  }

  const parsed = checkoutSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Invalid checkout" },
      { status: 400 }
    );
  }

  const phoneNorm = normalizeMoroccanPhone(parsed.data.phone);
  const clientIp = getClientIp(request);

  // Layer 3: IP Rate Limiting (blocks spam with multiple fake phone numbers from same device/IP)
  if (!checkIpRateLimit(clientIp, phoneNorm)) {
    return NextResponse.json(
      {
        error:
          "لقد قمت بإرسال عدة طلبات مؤخراً. سنتصل بك قريباً لتأكيد طلبك أو تواصل معنا عبر واتساب / Vous avez déjà envoyé plusieurs commandes récemment."
      },
      { status: 429 }
    );
  }

  // Layer 4: Blacklist & 15-Minute Duplicate Cooldown Check
  const existingCustomer = await prisma.customer.findUnique({
    where: { phoneNorm },
    include: {
      orders: {
        orderBy: { createdAt: "desc" },
        take: 5,
        include: { items: true }
      }
    }
  });

  if (existingCustomer) {
    // Check if customer has been marked as FAKE / BLACKLIST in any previous order notes
    const isBlacklisted = existingCustomer.orders.some((o) =>
      /\b(fake|blacklist|spam|faux|bloque|bloqué)\b/i.test(o.notes || "")
    );
    if (isBlacklisted) {
      return NextResponse.json(
        {
          error:
            "تعذر تسجيل الطلب بهذا الرقم، يرجى التواصل معنا مباشرة عبر واتساب / Impossible de valider avec ce numéro, contactez-nous sur WhatsApp."
        },
        { status: 403 }
      );
    }

    // Check if customer placed a NEW order within the last 15 minutes (prevent duplicate orders)
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
    const recentOrder = existingCustomer.orders.find(
      (o) => o.status === "NEW" && o.createdAt >= fifteenMinutesAgo
    );

    if (recentOrder) {
      return NextResponse.json({
        orderId: recentOrder.id,
        reference: recentOrder.reference,
        upsellUrl: `/order/${recentOrder.reference}`,
        deduplicated: true
      });
    }
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
      isBump: Boolean(item.isBump),
      total: unitPrice * item.quantity
    };
  });
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);

  let discountTotal = 0;
  const notesList: string[] = [];
  if (parsed.data.notes) notesList.push(parsed.data.notes);

  if (parsed.data.bundleSlug) {
    const bundle = await prisma.bundle.findUnique({
      where: { slug: parsed.data.bundleSlug }
    });
    if (bundle && bundle.bundlePrice < subtotal) {
      discountTotal = subtotal - bundle.bundlePrice;
      notesList.push(`Pack: ${bundle.name} (${bundle.bundlePrice} DH)`);
    }
  } else {
    for (const item of items) {
      if (item.isBump) {
        const targetBumpPrice = 149;
        if (item.unitPrice > targetBumpPrice) {
          const bumpDiscount = (item.unitPrice - targetBumpPrice) * item.quantity;
          discountTotal += bumpDiscount;
          notesList.push(`Order Bump: ${item.product.name} à ${targetBumpPrice} DH (-${bumpDiscount} DH)`);
        }
      } else {
        const calc = calculateTierDiscount(item.product.slug, item.unitPrice, item.quantity);
        if (calc.discount > 0) {
          discountTotal += calc.discount;
          notesList.push(`${item.product.name} - ${calc.packNote}`);
        }
      }
    }
  }

  const finalTotal = Math.max(0, subtotal - discountTotal);
  const combinedNotes = notesList.filter(Boolean).join(" | ") || undefined;
  const reference = `ROV-${Date.now().toString(36).toUpperCase()}`;

  const order = await prisma.$transaction(async (tx) => {
    const customer = await tx.customer.upsert({
      where: { phoneNorm },
      update: {
        fullName: parsed.data.fullName.trim(),
        phone: parsed.data.phone,
        city: parsed.data.city || "À confirmer",
        address: parsed.data.address.trim()
      },
      create: {
        fullName: parsed.data.fullName.trim(),
        phone: parsed.data.phone,
        phoneNorm,
        city: parsed.data.city || "À confirmer",
        address: parsed.data.address.trim()
      }
    });

    const created = await tx.order.create({
      data: {
        reference,
        customerId: customer.id,
        subtotal,
        discountTotal,
        total: finalTotal,
        addressDetails: parsed.data.addressDetails,
        notes: combinedNotes,
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
    where: {
      enabled: true,
      sourceProductId: { in: sourceProductIds },
      offeredProductId: { notIn: sourceProductIds },
      offeredProduct: { active: true }
    },
    orderBy: [{ priority: "desc" }, { createdAt: "asc" }]
  });

  return NextResponse.json({
    orderId: order.id,
    reference: order.reference,
    upsellUrl: rule ? `/upsell/${order.id}` : `/order/${order.reference}`
  });
}
