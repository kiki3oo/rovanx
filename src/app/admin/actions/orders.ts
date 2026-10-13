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

