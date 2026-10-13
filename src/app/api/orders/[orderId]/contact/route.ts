import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { normalizeMoroccanPhone } from "@/lib/phone";

export async function POST(request: Request, { params }: { params: Promise<{ orderId: string }> }) {
  try {
    const { orderId } = await params;
    const body = await request.json();
    const { fullName, phone, address, confirmOnly } = body as {
      fullName?: string;
      phone?: string;
      address?: string;
      confirmOnly?: boolean;
    };

    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { customer: true }
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (confirmOnly) {
      const marker = "[✓ بيانات مؤكدة من الزبون]";
      const updatedNotes = order.notes?.includes(marker)
        ? order.notes
        : [order.notes, marker].filter(Boolean).join(" | ");

      await prisma.order.update({
        where: { id: order.id },
        data: {
          notes: updatedNotes,
          statusHistory: {
            create: {
              from: order.status,
              to: order.status,
              note: "Coordonnées vérifiées et confirmées par le client sur la Thank You Page"
            }
          }
        }
      });

      return NextResponse.json({
        ok: true,
        fullName: order.customer.fullName,
        phone: order.customer.phone,
        address: order.customer.address
      });
    }

    const cleanName = (fullName || order.customer.fullName).trim();
    const cleanPhone = (phone || order.customer.phone).trim();
    const cleanAddress = (address || order.customer.address).trim();
    const phoneDigits = cleanPhone.replace(/\D/g, "");

    if (!/^(?:0[67]\d{8}|212[67]\d{8}|[67]\d{8})$/.test(phoneDigits)) {
      return NextResponse.json(
        { error: "رقم الهاتف غير صحيح. يرجى إدخال رقم مغربي مكون من 10 أرقام." },
        { status: 400 }
      );
    }

    const phoneNorm = normalizeMoroccanPhone(cleanPhone);

    // Update customer info safely
    await prisma.customer.update({
      where: { id: order.customerId },
      data: {
        fullName: cleanName,
        phone: cleanPhone,
        phoneNorm: phoneNorm === order.customer.phoneNorm ? phoneNorm : undefined,
        address: cleanAddress
      }
    });

    const marker = `[✓ تم تصحيح وتأكيد البيانات: ${cleanPhone}]`;
    const updatedNotes = [
      order.notes?.replace(/\[✓.*?\]/g, "").trim(),
      marker
    ]
      .filter(Boolean)
      .join(" | ");

    await prisma.order.update({
      where: { id: order.id },
      data: {
        notes: updatedNotes,
        statusHistory: {
          create: {
            from: order.status,
            to: order.status,
            note: `Coordonnées corrigées et confirmées par le client (${cleanPhone} - ${cleanAddress})`
          }
        }
      }
    });

    return NextResponse.json({
      ok: true,
      fullName: cleanName,
      phone: cleanPhone,
      address: cleanAddress
    });
  } catch (error) {
    console.error("Failed to update order contact:", error);
    return NextResponse.json({ error: "Failed to update contact details" }, { status: 500 });
  }
}
