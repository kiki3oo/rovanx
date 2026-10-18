import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ensureCatalogSynced } from "@/lib/catalog-sync";
import { getProductVisual } from "@/lib/product-visuals";
import { PurchaseTracker } from "@/components/store/purchase-tracker";
import { OrderThankYouView, type ThankYouUpsellOffer } from "@/components/store/order-thank-you-view";
import { hasOrderAccess } from "@/lib/order-access";

const UPSELL_COPY: Record<
  string,
  { headlineAr: string; headlineFr: string; descAr: string; descFr: string; defaultUpsellPrice: number }
> = {
  "rovanx-control-oil": {
    defaultUpsellPrice: 149,
    headlineAr: "عرض VIP أخير: أضف زيت التحكم Control Flow بـ 149 درهم فقط (عوض 249 درهم)",
    headlineFr: "Offre VIP : Ajoutez le sérum Control Flow pour 149 DH seulement (au lieu de 249 DH)",
    descAr:
      "يُضاف لنفس الكرتونة السرية مجاناً: تحكم كامل في توقيت القذف وتمديد العلاقة من 30 إلى 45 دقيقة بدون أي تخدير.",
    descFr:
      "Ajouté dans le même colis discret sans frais : maîtrise totale (30 à 45 min) sans aucun effet anesthésiant."
  },
  "rovanx-vitality-60": {
    defaultUpsellPrice: 199,
    headlineAr: "عرض VIP أخير: أضف كبسولات Vitality Ultra (60 كبسولة) بـ 199 درهم فقط (عوض 299 درهم)",
    headlineFr: "Offre VIP : Ajoutez Vitality Ultra (60 gélules) pour 199 DH seulement (au lieu de 299 DH)",
    descAr:
      "يُضاف لنفس الكرتونة السرية مجاناً: تدفق دم قوي وصلابة حديدية مستمرة بتخفيض فوري 100 درهم.",
    descFr:
      "Ajouté dans le même colis discret : flux sanguin puissant et rigidité durable avec 100 DH de réduction immédiate."
  },
  "rovanx-maca-max": {
    defaultUpsellPrice: 179,
    headlineAr: "عرض VIP أخير: أضف Royal Force بـ 179 درهم فقط (عوض 299 درهم)",
    headlineFr: "Offre VIP : Ajoutez Royal Force pour 179 DH seulement (au lieu de 299 DH)",
    descAr:
      "يُضاف لنفس الكرتونة السرية مجاناً: طاقة الماكا السوداء الملكية والجينسينغ الكوري لقوة مضاعفة طوال اللقاء.",
    descFr:
      "Ajouté dans le même colis discret : Maca Noire royale et Ginseng coréen pour une endurance décuplée."
  },
  "rovanx-ginseng": {
    defaultUpsellPrice: 169,
    headlineAr: "عرض VIP أخير: أضف Testo Drive بـ 169 درهم فقط (عوض 249 درهم)",
    headlineFr: "Offre VIP : Ajoutez Testo Drive pour 169 DH seulement (au lieu de 249 DH)",
    descAr:
      "يُضاف لنفس الكرتونة السرية مجاناً: تنشيط الدورة الدموية للحوض ورفع هرمون التستوستيرون الطبيعي.",
    descFr:
      "Ajouté dans le même colis discret : stimule la testostérone naturelle et la circulation pelvienne."
  }
};

export default async function OrderConfirmationPage({
  params
}: {
  params: Promise<{ reference: string }>;
}) {
  await ensureCatalogSynced();
  const { reference } = await params;

  const order = await prisma.order.findUnique({
    where: { reference },
    include: {
      customer: true,
      items: {
        include: {
          product: true
        }
      }
    }
  });

  if (!order) notFound();
  if (!(await hasOrderAccess(order.id))) {
    return (
      <main className="container min-h-[60vh] py-16 text-center">
        <h1 className="text-2xl font-bold">Accès aux détails de la commande expiré</h1>
        <p className="mt-4">Pour protéger vos informations, contactez-nous avec votre référence de commande.</p>
        <p className="mt-2" dir="rtl">لحماية معلوماتك، تواصل معنا وأعطنا رقم الطلب ديالك.</p>
        <a className="mt-6 inline-block underline" href="mailto:contact@rovanx.com">contact@rovanx.com</a>
      </main>
    );
  }

  const setting = await prisma.siteSetting.findUnique({ where: { key: "store" } });
  const store = (setting?.value || {}) as { whatsapp?: string };
  const rawWhatsapp =
    store.whatsapp && store.whatsapp !== "PLACEHOLDER" ? store.whatsapp : "212600000000";
  const whatsappNumber = rawWhatsapp.replace(/\D/g, "") || "212600000000";

  // Check if there is still an unaccepted upsell offer available for this order
  const sourceProductIds = order.items.map((item) => item.productId);
  const upsellRule = !order.upsellAccepted
    ? await prisma.upsellRule.findFirst({
        where: {
          enabled: true,
          sourceProductId: { in: sourceProductIds },
          offeredProductId: { notIn: sourceProductIds },
          offeredProduct: { active: true }
        },
        include: { offeredProduct: true },
        orderBy: [{ priority: "desc" }, { createdAt: "asc" }]
      })
    : null;

  let availableUpsell: ThankYouUpsellOffer | null = null;
  if (upsellRule) {
    const copy = UPSELL_COPY[upsellRule.offeredProduct.slug];
    const visual = getProductVisual(upsellRule.offeredProduct.slug);
    const upsellPrice =
      upsellRule.upsellPrice ||
      copy?.defaultUpsellPrice ||
      upsellRule.offeredProduct.salePrice ||
      upsellRule.offeredProduct.regularPrice;

    availableUpsell = {
      productId: upsellRule.offeredProduct.id,
      name: upsellRule.offeredProduct.name,
      slug: upsellRule.offeredProduct.slug,
      imageSrc: visual?.src || "/products/rovanx-vitality-60.webp?v=3",
      regularPrice: upsellRule.offeredProduct.regularPrice,
      upsellPrice,
      headlineAr: copy?.headlineAr || upsellRule.headline,
      headlineFr:
        copy?.headlineFr || `Offre VIP : Ajoutez ${upsellRule.offeredProduct.name} à votre colis`,
      descAr: copy?.descAr || upsellRule.description,
      descFr:
        copy?.descFr ||
        "Profitez d'un tarif préférentiel unique ajouté directement dans votre colis discret sans frais de port."
    };
  }

  const mappedItems = order.items.map((item) => {
    const slug = item.product?.slug || "rovanx-vitality-60";
    const visual = getProductVisual(slug);
    return {
      id: item.id,
      productId: item.productId,
      productName: item.productName,
      productSlug: slug,
      imageSrc: visual?.src || "/products/rovanx-vitality-60.webp?v=3",
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      total: item.total,
      isUpsell: item.isUpsell
    };
  });

  // Compare nearby orders against the original order time, not the page visit time.
  const twentyFourHoursAgo = new Date(order.createdAt.getTime() - 24 * 60 * 60 * 1000);
  const otherOrdersRaw = await prisma.order.findMany({
    where: {
      customerId: order.customerId,
      id: { not: order.id },
      status: { in: ["NEW", "UPSOLD", "CONTACTING"] },
      createdAt: { gte: twentyFourHoursAgo }
    },
    include: { items: true },
    orderBy: { createdAt: "asc" }
  });

  const otherActiveOrders = otherOrdersRaw.map((o) => ({
    id: o.id,
    reference: o.reference,
    total: o.total,
    summary: o.items.map((it) => `${it.productName} (x${it.quantity})`).join(" + ")
  }));

  return (
    <section className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-10 md:py-16">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
      <PurchaseTracker
        reference={order.reference}
        total={order.total}
        currency={order.currency}
      />
      <div className="container relative z-10">
        <OrderThankYouView
          order={{
            id: order.id,
            reference: order.reference,
            subtotal: order.subtotal,
            discountTotal: order.discountTotal,
            total: order.total,
            notes: order.notes,
            customer: {
              fullName: order.customer.fullName,
              phone: order.customer.phone,
              address: order.customer.address
            },
            items: mappedItems
          }}
          whatsappNumber={whatsappNumber}
          availableUpsell={availableUpsell}
          otherActiveOrders={otherActiveOrders}
        />
      </div>
    </section>
  );
}
