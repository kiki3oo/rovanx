import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isValidMoroccanPhone10Digits, normalizeMoroccanPhone, sanitizePhoneInput } from "@/lib/phone";

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
    const cleanPhone = sanitizePhoneInput(phone || order.customer.phone);
    const cleanAddress = (address || order.customer.address).trim();

    if (!isValidMoroccanPhone10Digits(cleanPhone)) {
      return NextResponse.json(
        { error: "يرجى إدخال رقم هاتف مغربي صحيح مكون من 10 أرقام بالضبط (مثال: 0612345678)." },
        { status: 400 }
      );
    }

    const phoneNorm = normalizeMoroccanPhone(cleanPhone);

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
