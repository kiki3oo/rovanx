export type SanadokomItem = {
  sku?: string | null;
  productName?: string | null;
  productId?: string | null;
  quantity: number;
  unitPrice: number;
};

export type SanadokomOrderData = {
  customerName: string;
  customerPhone: string;
  customerCity?: string | null;
  customerAddress?: string | null;
  customerNote?: string | null;
  totalAmount: number;
  items: SanadokomItem[];
  source?: string | null;
  utmSource?: string | null;
  utmCampaign?: string | null;
  adSet?: string | null;
  action?: 'create' | 'upsell';
  isUpsell?: boolean;
};

/**
 * Asynchronously send order to Sanadokom COD Operating System
 * Non-blocking: will never crash or delay customer checkout experience
 */
export async function sendOrderToSanadokom(orderData: SanadokomOrderData): Promise<void> {
  try {
    const webhookUrl =
      process.env.SANADOKOM_WEBHOOK_URL?.trim() || 'https://app.rovanx.com/api/webhooks/orders';
    const webhookSecret =
      process.env.SANADOKOM_WEBHOOK_SECRET?.trim() || 'whsec_rovanx_maroc_2026';

    const payload = {
      webhookSecret,
      action: orderData.action || (orderData.isUpsell ? 'upsell' : 'create'),
      isUpsell: orderData.isUpsell || false,
      customerName: orderData.customerName,
      customerPhone: orderData.customerPhone,
      customerCity: orderData.customerCity || 'Casablanca',
      customerAddress: orderData.customerAddress || '',
      customerNote: orderData.customerNote || null,
      totalAmount: orderData.totalAmount,
      items: orderData.items,
      source: orderData.source || 'Rovanx Store',
      utmSource: orderData.utmSource || null,
      utmCampaign: orderData.utmCampaign || null,
      adSet: orderData.adSet || null,
    };

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.warn(`[Sanadokom] HTTP ${res.status}:`, errText);
    }
  } catch (err) {
    console.warn('[Sanadokom] Failed to send order webhook:', err);
  }
}
