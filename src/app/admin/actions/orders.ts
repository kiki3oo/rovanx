"use server";

import { OrderStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function updateOrderStatusAction(formData: FormData) {
  await requireAdmin();
  const orderId = String(formData.get("orderId"));
  const status = String(formData.get("status")) as OrderStatus;
  const note = String(formData.get("note") || "");
  const order = await prisma.order.findUniqueOrThrow({ where: { id: orderId } });
  await prisma.order.update({
    where: { id: orderId },
    data: {
      status,
      statusHistory: {
        create: { from: order.status, to: status, note }
      }
    }
  });
  revalidatePath("/admin/orders");
  revalidatePath(`/admin/orders/${orderId}`);
}

export async function blockFakeOrderAction(formData: FormData) {
  await requireAdmin();
  const orderId = String(formData.get("orderId"));
  const order = await prisma.order.findUniqueOrThrow({ where: { id: orderId } });
  const updatedNotes = [order.notes, "BLACKLIST: Fake / Spam Order"].filter(Boolean).join(" | ");
  await prisma.order.update({
    where: { id: orderId },
    data: {
      status: "CANCELLED",
      notes: updatedNotes,
      statusHistory: {
        create: {
          from: order.status,
          to: "CANCELLED",
          note: "BLACKLIST: Numéro bloqué (Fake / Spam)"
        }
      }
    }
  });
  revalidatePath("/admin/orders");
  revalidatePath(`/admin/orders/${orderId}`);
}

export async function mergeCustomerOrdersAction(formData: FormData) {
  await requireAdmin();
  const orderId = String(formData.get("orderId"));
  const currentOrder = await prisma.order.findUniqueOrThrow({
    where: { id: orderId },
    include: { items: true }
  });

  const otherOrders = await prisma.order.findMany({
    where: {
      customerId: currentOrder.customerId,
      id: { not: currentOrder.id },
      status: { in: ["NEW", "UPSOLD", "CONTACTING"] }
    },
    include: { items: true },
    orderBy: { createdAt: "asc" }
  });

  if (otherOrders.length === 0) {
    const cleanNotes = (currentOrder.notes || "")
      .replace(/\[MULTI_ORDER\s*#\d+\]\s*\|?\s*/gi, "")
      .trim();
    await prisma.order.update({
      where: { id: currentOrder.id },
      data: { notes: cleanNotes || null }
    });
    revalidatePath("/admin/orders");
    return;
  }

  // Merge into the earliest active order (the primary order) so it stays in the main tab
  const allActive = [...otherOrders, currentOrder].sort(
    (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
  );
  const targetOrder = allActive[0];
  const ordersToMerge = allActive.slice(1);

  await prisma.$transaction(async (tx) => {
    let extraSubtotal = 0;
    let extraDiscount = 0;
    let extraTotal = 0;
    const mergedRefs: string[] = [];

    for (const secOrder of ordersToMerge) {
      extraSubtotal += secOrder.subtotal;
      extraDiscount += secOrder.discountTotal;
      extraTotal += secOrder.total;
      mergedRefs.push(secOrder.reference);

      for (const item of secOrder.items) {
        const existingItem = await tx.orderItem.findFirst({
          where: {
            orderId: targetOrder.id,
            productId: item.productId,
            isUpsell: item.isUpsell
          }
        });

        if (existingItem) {
          await tx.orderItem.update({
            where: { id: existingItem.id },
            data: {
              quantity: existingItem.quantity + item.quantity,
              total: existingItem.total + item.total
            }
          });
        } else {
          await tx.orderItem.create({
            data: {
              orderId: targetOrder.id,
              productId: item.productId,
              productName: item.productName,
              sku: item.sku,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              total: item.total,
              isUpsell: item.isUpsell
            }
          });
        }
      }

      const secNotes = [
        secOrder.notes,
        `[MERGED_INTO:${targetOrder.reference}] Fusionné par l'admin`
      ]
        .filter(Boolean)
        .join(" | ");

      await tx.order.update({
        where: { id: secOrder.id },
        data: {
          status: "CANCELLED",
          notes: secNotes,
          statusHistory: {
            create: {
              from: secOrder.status,
              to: "CANCELLED",
              note: `Fusionné dans ${targetOrder.reference} par l'admin`
            }
          }
        }
      });
    }

    const cleanTargetNotes = (targetOrder.notes || "")
      .replace(/\[MULTI_ORDER\s*#\d+\]\s*\|?\s*/gi, "")
      .trim();

    await tx.order.update({
      where: { id: targetOrder.id },
      data: {
        subtotal: targetOrder.subtotal + extraSubtotal,
        discountTotal: targetOrder.discountTotal + extraDiscount,
        total: targetOrder.total + extraTotal,
        notes: [cleanTargetNotes, `[✓ مدمج مع: ${mergedRefs.join(", ")}]`]
          .filter(Boolean)
          .join(" | "),
        statusHistory: {
          create: {
            from: targetOrder.status,
            to: targetOrder.status,
            note: `Commandes (${mergedRefs.join(", ")}) fusionnées dans ce colis`
          }
        }
      }
    });
  });

  revalidatePath("/admin/orders");
}

export async function keepOnlyThisOrderAction(formData: FormData) {
  await requireAdmin();
  const orderId = String(formData.get("orderId"));
  const currentOrder = await prisma.order.findUniqueOrThrow({ where: { id: orderId } });

  const otherOrders = await prisma.order.findMany({
    where: {
      customerId: currentOrder.customerId,
      id: { not: currentOrder.id },
      status: { in: ["NEW", "UPSOLD", "CONTACTING"] }
    }
  });

  await prisma.$transaction(async (tx) => {
    for (const oldOrder of otherOrders) {
      await tx.order.update({
        where: { id: oldOrder.id },
        data: {
          status: "CANCELLED",
          notes: [oldOrder.notes, `[REPLACED_BY:${currentOrder.reference}] Annulé par l'admin`]
            .filter(Boolean)
            .join(" | "),
          statusHistory: {
            create: {
              from: oldOrder.status,
              to: "CANCELLED",
              note: `Remplacé par ${currentOrder.reference}`
            }
          }
        }
      });
    }

    const cleanNotes = (currentOrder.notes || "")
      .replace(/\[MULTI_ORDER\s*#\d+\]\s*\|?\s*/gi, "")
      .trim();

    await tx.order.update({
      where: { id: currentOrder.id },
      data: {
        notes: [cleanNotes, "[✓ الطلب المعتمد للعميل]"].filter(Boolean).join(" | ")
      }
    });
  });

  revalidatePath("/admin/orders");
}


