import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { ensureCatalogSynced } from "@/lib/catalog-sync";
import { getProductVisual } from "@/lib/product-visuals";
import { UpsellDecision } from "@/components/store/upsell-decision";
import { hasOrderAccess } from "@/lib/order-access";

const UPSELL_COPY: Record<
  string,
  { headlineAr: string; headlineFr: string; descAr: string; descFr: string; defaultUpsellPrice: number }
> = {
  "rovanx-control-oil": {
    defaultUpsellPrice: 149,
    headlineAr: "عرض VIP حصري: أضف زيت التحكم Control Flow بـ 149 درهم فقط (عوض 249 درهم)",
    headlineFr: "Offre VIP Exclusive : Ajoutez le sérum Control Flow pour 149 DH seulement (au lieu de 249 DH)",
    descAr:
      "ضاعف النتيجة 100%: الكبسولات تمنحك الصلابة من الداخل، وزيت Control Flow يمنحك تحكماً تاماً في التوقيت وتأخيراً من 30 إلى 45 دقيقة بدون أي تخدير أو فقدان للإحساس.",
    descFr:
      "Doublez vos résultats : pendant que vos capsules agissent de l'intérieur sur la fermeté, le sérum naturel Control Flow vous offre une maîtrise totale (30 à 45 min) sans aucun effet anesthésiant."
  },
  "rovanx-vitality-60": {
    defaultUpsellPrice: 199,
    headlineAr: "عرض VIP حصري: أضف كبسولات Vitality Ultra (60 كبسولة) بـ 199 درهم فقط (عوض 299 درهم)",
    headlineFr: "Offre VIP Exclusive : Ajoutez Vitality Ultra (60 gélules) pour 199 DH seulement (au lieu de 299 DH)",
    descAr:
      "احصل على الكورس المزدوج الكامل: تدفق دم قوي وصلابة صخرية مستمرة من الداخل مع Vitality Ultra بتخفيض فوري 100 درهم وفي نفس الطرد السري.",
    descFr:
      "Complétez votre cure avec Vitality Ultra (60 gélules) pour un flux sanguin puissant et une rigidité durable avec 100 DH de réduction immédiate dans le même colis discret."
  },
  "rovanx-maca-max": {
    defaultUpsellPrice: 179,
    headlineAr: "عرض VIP حصري: أضف Royal Force بـ 179 درهم فقط (عوض 299 درهم)",
    headlineFr: "Offre VIP Exclusive : Ajoutez Royal Force pour 179 DH seulement (au lieu de 299 DH)",
    descAr:
      "عزز كورس الصلابة بطاقة الماكا السوداء الملكية والجينسينغ الكوري لقوة مضاعفة، رغبة متقدة، وعدم الشعور بأي إرهاق بعد العلاقة.",
    descFr:
      "Boostez votre cure avec la Maca Noire royale et le Ginseng coréen de Royal Force pour une endurance décuplée et zéro fatigue après l'effort."
  },
  "rovanx-ginseng": {
    defaultUpsellPrice: 169,
    headlineAr: "عرض VIP حصري: أضف Testo Drive بـ 169 درهم فقط (عوض 249 درهم)",
    headlineFr: "Offre VIP Exclusive : Ajoutez Testo Drive pour 169 DH seulement (au lieu de 249 DH)",
    descAr:
      "كورس متكامل للحيوية والتستوستيرون: يعيد Testo Drive تنشيط الدورة الدموية للحوض ورفع هرمون الذكورة الطبيعي ومقاومة الإجهاد اليومي.",
    descFr:
      "Synergie complète : Testo Drive stimule la testostérone naturelle, la circulation pelvienne et élimine le stress et la fatigue chronique."
  }
};

export default async function UpsellPage({ params }: { params: Promise<{ orderId: string }> }) {
  await ensureCatalogSynced();
  const { orderId } = await params;
  if (!(await hasOrderAccess(orderId))) notFound();
  const order = await prisma.order.findUnique({ where: { id: orderId }, include: { items: true } });
  if (!order) notFound();

  const sourceProductIds = order.items.map((item) => item.productId);
  const rule = await prisma.upsellRule.findFirst({
    where: {
      enabled: true,
      sourceProductId: { in: sourceProductIds },
      offeredProductId: { notIn: sourceProductIds },
      offeredProduct: { active: true }
    },
    include: { offeredProduct: true },
    orderBy: [{ priority: "desc" }, { createdAt: "asc" }]
  });

  if (!rule) {
    redirect(`/order/${order.reference}`);
  }

  const copy = UPSELL_COPY[rule.offeredProduct.slug];
  const price = rule.upsellPrice || copy?.defaultUpsellPrice || rule.offeredProduct.salePrice || rule.offeredProduct.regularPrice;
  const visual = getProductVisual(rule.offeredProduct.slug);

  return (
    <section className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-10 md:py-16">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
      <div className="container relative z-10">
        <UpsellDecision
          orderId={order.id}
          reference={order.reference}
          offeredProduct={{
            id: rule.offeredProduct.id,
            name: rule.offeredProduct.name,
            slug: rule.offeredProduct.slug,
            regularPrice: rule.offeredProduct.regularPrice,
            imageSrc: visual?.src || "/products/rovanx-vitality-60.webp?v=3"
          }}
          upsellPrice={price}
          headlineAr={copy?.headlineAr || rule.headline}
          headlineFr={copy?.headlineFr || `Offre VIP : Ajoutez ${rule.offeredProduct.name} à votre colis`}
          descAr={copy?.descAr || rule.description}
          descFr={copy?.descFr || "Profitez d'un tarif préférentiel unique ajouté directement dans votre colis discret sans frais de livraison supplémentaires."}
        />
      </div>
    </section>
  );
}
