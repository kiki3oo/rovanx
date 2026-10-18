import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hasOrderAccess } from "@/lib/order-access";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;
    if (!(await hasOrderAccess(orderId))) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }
    const body = await request.json();
    const action = body?.action as "merge" | "keep_latest";

    if (action !== "merge" && action !== "keep_latest") {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const currentOrder = await prisma.order.findUnique({
      where: { id: orderId },
      include: { items: true, customer: true }
    });

    if (!currentOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const otherOrders = await prisma.order.findMany({
      where: {
        customerId: currentOrder.customerId,
        id: { not: currentOrder.id },
        status: { in: ["NEW", "UPSOLD", "CONTACTING"] },
        createdAt: { gte: twentyFourHoursAgo }
      },
      include: { items: true },
      orderBy: { createdAt: "asc" }
    });

    if (otherOrders.length === 0) {
      return NextResponse.json({ ok: true, status: "no_other_orders" });
    }

    const cleanCurrentNotes = (currentOrder.notes || "")
      .replace(/\[MULTI_ORDER\s*#\d+\]\s*\|?\s*/gi, "")
      .trim();

    if (action === "keep_latest") {
      await prisma.$transaction(async (tx) => {
        for (const oldOrder of otherOrders) {
          const updatedOldNotes = [
            oldOrder.notes,
            `[REPLACED_BY:${currentOrder.reference}] ألغاه العميل واحتفظ بالطلب الأخير فقط`
          ]
            .filter(Boolean)
            .join(" | ");

          await tx.order.update({
            where: { id: oldOrder.id },
            data: {
              status: "CANCELLED",
              notes: updatedOldNotes,
              statusHistory: {
                create: {
                  from: oldOrder.status,
                  to: "CANCELLED",
                  note: `Annulé par le client au profit de la commande ${currentOrder.reference}`
                }
              }
            }
          });
        }

        const updatedMainNotes = [
          cleanCurrentNotes,
          "[✓ أكد العميل اعتماد هذا الطلب الأخير فقط وإلغاء السابق]"
        ]
          .filter(Boolean)
          .join(" | ");

        await tx.order.update({
          where: { id: currentOrder.id },
          data: {
            notes: updatedMainNotes,
            statusHistory: {
              create: {
                from: currentOrder.status,
                to: currentOrder.status,
                note: "Le client a confirmé garder uniquement cette dernière commande"
              }
            }
          }
        });
      });

      return NextResponse.json({ ok: true, action: "keep_latest" });
    }

    // action === "merge"
    await prisma.$transaction(async (tx) => {
      let extraSubtotal = 0;
      let extraDiscount = 0;
      let extraTotal = 0;
      const mergedRefs: string[] = [];

      for (const oldOrder of otherOrders) {
        extraSubtotal += oldOrder.subtotal;
        extraDiscount += oldOrder.discountTotal;
        extraTotal += oldOrder.total;
        mergedRefs.push(oldOrder.reference);

        for (const item of oldOrder.items) {
          const existingItem = await tx.orderItem.findFirst({
            where: {
              orderId: currentOrder.id,
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
                orderId: currentOrder.id,
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

        const updatedOldNotes = [
          oldOrder.notes,
          `[MERGED_INTO:${currentOrder.reference}] تم دمج هذا الطلب مع ${currentOrder.reference}`
        ]
          .filter(Boolean)
          .join(" | ");

        await tx.order.update({
          where: { id: oldOrder.id },
          data: {
            status: "CANCELLED",
            notes: updatedOldNotes,
            statusHistory: {
              create: {
                from: oldOrder.status,
                to: "CANCELLED",
                note: `Fusionné dans la commande ${currentOrder.reference} à la demande du client`
              }
            }
          }
        });
      }

      const updatedMainNotes = [
        cleanCurrentNotes,
        `[✓ طلب مدمج ومؤكد من العميل — شمل: ${mergedRefs.join(", ")}]`
      ]
        .filter(Boolean)
        .join(" | ");

      await tx.order.update({
        where: { id: currentOrder.id },
        data: {
          subtotal: currentOrder.subtotal + extraSubtotal,
          discountTotal: currentOrder.discountTotal + extraDiscount,
          total: currentOrder.total + extraTotal,
          notes: updatedMainNotes,
          statusHistory: {
            create: {
              from: currentOrder.status,
              to: currentOrder.status,
              note: `Commandes (${mergedRefs.join(", ")}) fusionnées par le client dans ce colis`
            }
          }
        }
      });
    });

    return NextResponse.json({ ok: true, action: "merge" });
  } catch (err) {
    console.error("Multi-order resolution error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
