import { prisma } from "@/lib/db";

export type OrderSheetPayload = {
  reference: string;
  createdAt?: Date | string;
  fullName: string;
  phone: string;
  city: string;
  address: string;
  addressDetails?: string | null;
  items: Array<{
    productName: string;
    quantity: number;
    unitPrice: number;
    total: number;
    isUpsell?: boolean;
    isBump?: boolean;
  }>;
  subtotal: number;
  discountTotal: number;
  total: number;
  notes?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  utmContent?: string | null;
  utmTerm?: string | null;
  status?: string;
};

/**
 * Send order details to Google Sheets webhook asynchronously without blocking response
 */
export async function sendOrderToGoogleSheet(payload: OrderSheetPayload): Promise<void> {
  try {
    let webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL?.trim() ||
      "https://script.google.com/macros/s/AKfycbyd1wdMWp-DW2a70RnKTNoBPm2wibASrD1Tfcwo4J95eGI1HFzEfTsW66uh91C0uUQ9/exec";

    if (!webhookUrl) {
      const setting = await prisma.siteSetting
        .findUnique({
          where: { key: "google_sheet_webhook_url" }
        })
        .catch(() => null);

      if (setting && typeof setting.value === "string") {
        webhookUrl = setting.value.trim();
      } else if (
        setting &&
        typeof setting.value === "object" &&
        setting.value !== null &&
        "url" in (setting.value as Record<string, unknown>)
      ) {
        webhookUrl = String((setting.value as Record<string, unknown>).url).trim();
      }
    }

    if (!webhookUrl) {
      return; // No webhook configured yet
    }

    // Format products readable: e.g. "Royal Force (x2), Control Flow (x1)"
    const itemsFormatted = payload.items
      .map(
        (it) =>
          `${it.productName} (x${it.quantity})${it.isBump ? " [Bump]" : ""}${
            it.isUpsell ? " [Upsell]" : ""
          }`
      )
      .join(", ");

    // Format date in Morocco GMT+1
    const orderDate = payload.createdAt ? new Date(payload.createdAt) : new Date();
    const formattedDate = orderDate.toLocaleString("fr-FR", {
      timeZone: "Africa/Casablanca",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });

    const bodyData = {
      date: formattedDate,
      reference: payload.reference,
      customerName: payload.fullName,
      phone: payload.phone,
      city: payload.city,
      address: [payload.address, payload.addressDetails].filter(Boolean).join(" - "),
      items: itemsFormatted,
      total: `${payload.total} MAD`,
      subtotal: `${payload.subtotal} MAD`,
      discount: payload.discountTotal > 0 ? `${payload.discountTotal} MAD` : "0",
      notes: payload.notes || "",
      utmSource: payload.utmSource || "",
      utmMedium: payload.utmMedium || "",
      utmCampaign: payload.utmCampaign || "",
      utmContent: payload.utmContent || "",
      utmTerm: payload.utmTerm || "",
      status: payload.status || "NEW"
    };

    // Fast non-blocking fetch with 6s timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
      signal: controller.signal
    })
      .then((res) => {
        if (!res.ok) {
          console.warn(`[GoogleSheet] Webhook returned status ${res.status}`);
        }
      })
      .catch((err) => {
        console.error("[GoogleSheet] Webhook failed:", err?.message || err);
      })
      .finally(() => clearTimeout(timeout));
  } catch (error) {
    console.error("[GoogleSheet] Unexpected error sending order:", error);
  }
}
