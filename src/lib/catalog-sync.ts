import { prisma } from "@/lib/db";
import { ProductRole, StockStatus } from "@prisma/client";
import { PRODUCT_DETAILS } from "@/lib/product-details";

let syncExecuted = false;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const CATEGORIES = [
  "Vitality",
  "Men's Wellness",
  "Prostate",
  "Energy",
  "Supplements"
];

type SeedProduct = {
  name: string;
  slug: string;
  sku: string;
  role: ProductRole;
  categorySlug: string;
  regularPrice: number;
  salePrice: number | null;
  hero: boolean;
  featured: boolean;
  active: boolean;
};

const CATALOG_PRODUCTS: SeedProduct[] = [
  {
    name: "Vitality Ultra",
    slug: "rovanx-vitality-60",
    sku: "ROV-VIT-60",
    role: ProductRole.MAIN_HERO,
    categorySlug: "vitality",
    regularPrice: 299,
    salePrice: null,
    hero: true,
    featured: true,
    active: true
  },
  {
    name: "Vitality Boost",
    slug: "rovanx-vitality-30",
    sku: "ROV-VIT-30",
    role: ProductRole.ENTRY,
    categorySlug: "vitality",
    regularPrice: 249,
    salePrice: null,
    hero: false,
    featured: true,
    active: true
  },
  {
    name: "Prosta Guard",
    slug: "rovanx-prostate",
    sku: "ROV-PRO-01",
    role: ProductRole.HERO,
    categorySlug: "prostate",
    regularPrice: 299,
    salePrice: null,
    hero: false,
    featured: true,
    active: true
  },
  {
    name: "Royal Force",
    slug: "rovanx-maca-max",
    sku: "ROV-MAC-01",
    role: ProductRole.HERO,
    categorySlug: "energy",
    regularPrice: 299,
    salePrice: null,
    hero: false,
    featured: true,
    active: true
  },
  {
    name: "Testo Drive",
    slug: "rovanx-ginseng",
    sku: "ROV-GIN-01",
    role: ProductRole.UPSELL,
    categorySlug: "energy",
    regularPrice: 249,
    salePrice: null,
    hero: false,
    featured: true,
    active: true
  },
  {
    name: "Control Flow",
    slug: "rovanx-control-oil",
    sku: "ROV-OIL-01",
    role: ProductRole.HERO,
    categorySlug: "men-s-wellness",
    regularPrice: 249,
    salePrice: 199,
    hero: false,
    featured: true,
    active: true
  },
  {
    name: "Vital Protein",
    slug: "rovanx-vital-protein",
    sku: "ROV-PROT-01",
    role: ProductRole.HERO,
    categorySlug: "supplements",
    regularPrice: 399,
    salePrice: 299,
    hero: false,
    featured: true,
    active: true
  }
];

export async function ensureCatalogSynced(force = false) {
  if (syncExecuted && !force) {
    return;
  }

  try {
    // 1. Ensure all categories exist
    for (const name of CATEGORIES) {
      const slug = slugify(name);
      await prisma.category.upsert({
        where: { slug },
        update: { active: true },
        create: { name, slug, description: `${name} products`, active: true }
      });
    }

    // Deactivate unused categories without products
    await prisma.category.updateMany({
      where: { slug: { in: ["balance", "sleep"] } },
      data: { active: false }
    }).catch(() => {});

    const categories = await prisma.category.findMany();
    const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

    // 2. Upsert each product
    for (const item of CATALOG_PRODUCTS) {
      const detail = PRODUCT_DETAILS[item.slug];
      const category = categoryBySlug[item.categorySlug];
      if (!category) continue;

      const shortDesc = detail?.shortDescription || "Support quotidien pour la vitalite et le bien-etre masculin.";
      const longDesc = detail ? `${detail.tagline}\n\n${detail.shortDescription}` : "Produit premium ROVANX.";
      const benefits = detail?.benefits || ["Vitalite", "Bien-etre masculin", "Performance"];
      const ingredients = detail?.ingredients || null;
      const usage = detail?.usageInstructions || null;
      const warnings = detail?.warnings || null;
      const reg = detail?.regulatoryInformation || null;

      await prisma.product.upsert({
        where: { slug: item.slug },
        update: {
          name: item.name,
          sku: item.sku,
          role: item.role,
          categoryId: category.id,
          regularPrice: item.regularPrice,
          salePrice: item.salePrice,
          hero: item.hero,
          featured: item.featured,
          active: item.active,
          stockStatus: StockStatus.IN_STOCK,
          shortDescription: shortDesc,
          longDescription: longDesc,
          benefits,
          ingredients,
          usageInstructions: usage,
          warnings,
          regulatoryInformation: reg,
          seoTitle: `${item.name} | ROVANX`,
          seoDescription: `${item.name} - ${shortDesc}`
        },
        create: {
          name: item.name,
          slug: item.slug,
          sku: item.sku,
          role: item.role,
          categoryId: category.id,
          regularPrice: item.regularPrice,
          salePrice: item.salePrice,
          hero: item.hero,
          featured: item.featured,
          active: item.active,
          stockStatus: StockStatus.IN_STOCK,
          shortDescription: shortDesc,
          longDescription: longDesc,
          benefits,
          ingredients,
          usageInstructions: usage,
          warnings,
          regulatoryInformation: reg,
          seoTitle: `${item.name} | ROVANX`,
          seoDescription: `${item.name} - ${shortDesc}`
        }
      });
    }

    // 3. Ensure official bundles exist and are active
    const allProducts = await prisma.product.findMany();
    const productBySlug = Object.fromEntries(allProducts.map((p) => [p.slug, p]));

    const BUNDLES = [
      {
        name: "Pack Puissance & Contrôle",
        slug: "rovanx-pack-puissance",
        items: ["rovanx-vitality-60", "rovanx-control-oil"],
        bundlePrice: 449,
        regularCombinedPrice: 548,
        description: "الحل المزدوج المتكامل: كبسولات Vitality Ultra للصلابة وتمدد الحجم والسمك + زيت Control Flow لتأخير القذف 30-45 دقيقة وتحكم تام فالعلاقة لإسعاد الزوجة."
      },
      {
        name: "Men Pack",
        slug: "rovanx-men-pack",
        items: ["rovanx-vitality-60", "rovanx-maca-max"],
        bundlePrice: 469,
        regularCombinedPrice: 598,
        description: "الثنائي الفحولي: Vitality Ultra + Royal Force لانتصاب حديدي وطاقة مضاعفة طوال اللقاء."
      },
      {
        name: "Men Plus Pack",
        slug: "rovanx-men-plus-pack",
        items: ["rovanx-vitality-60", "rovanx-maca-max", "rovanx-ginseng"],
        bundlePrice: 629,
        regularCombinedPrice: 827,
        description: "الباك الملكي 3 في 1: صلابة مستمرة، تحفيز التستوستيرون، ومقاومة تامة للتعب والإجهاد."
      },
      {
        name: "Pack Santé Prostate & Énergie",
        slug: "rovanx-prostate-energie-pack",
        items: ["rovanx-prostate", "rovanx-ginseng"],
        bundlePrice: 469,
        regularCombinedPrice: 548,
        description: "باك صحة البروستاتا والراحة الليلية: Prosta Guard (120 مل) للراحة البولية والنوم الهادئ + Testo Drive لدعم الحيوية والدورة الدموية للحوض."
      }
    ];

    for (const b of BUNDLES) {
      const bundle = await prisma.bundle.upsert({
        where: { slug: b.slug },
        update: {
          name: b.name,
          seoTitle: `${b.name} | ROVANX`,
          bundlePrice: b.bundlePrice,
          regularCombinedPrice: b.regularCombinedPrice,
          description: b.description,
          active: true
        },
        create: {
          name: b.name,
          slug: b.slug,
          description: b.description,
          bundlePrice: b.bundlePrice,
          regularCombinedPrice: b.regularCombinedPrice,
          active: true,
          seoTitle: `${b.name} | ROVANX`,
          seoDescription: "Pack avantage ROVANX avec livraison gratuite et discrète."
        }
      });

      for (const pSlug of b.items) {
        const prod = productBySlug[pSlug];
        if (prod) {
          await prisma.bundleItem.upsert({
            where: { bundleId_productId: { bundleId: bundle.id, productId: prod.id } },
            update: {},
            create: { bundleId: bundle.id, productId: prod.id, quantity: 1 }
          });
        }
      }
    }

    // 4. Ensure active upsell rules exist for all 7 official products and disable legacy inactive ones
    const activeSlugs = CATALOG_PRODUCTS.map((p) => p.slug);
    const activeIds = activeSlugs.map((s) => productBySlug[s]?.id).filter(Boolean) as string[];
    await prisma.upsellRule.updateMany({
      where: {
        OR: [
          { sourceProductId: { notIn: activeIds } },
          { offeredProductId: { notIn: activeIds } }
        ]
      },
      data: { enabled: false }
    });

    const UPSELL_RULES = [
      {
        sourceSlug: "rovanx-vitality-60",
        offeredSlug: "rovanx-control-oil",
        upsellPrice: 149,
        priority: 20,
        headline: "عرض VIP حصري: أضف زيت التحكم Control Flow بـ 149 درهم فقط (عوض 249 درهم)",
        description: "ضاعف النتيجة 100%: كبسولات Vitality Ultra تمنحك الصلابة من الداخل، وزيت Control Flow يمنحك تحكماً تاماً وتأخيراً من 30 إلى 45 دقيقة بدون أي تخدير."
      },
      {
        sourceSlug: "rovanx-vitality-60",
        offeredSlug: "rovanx-maca-max",
        upsellPrice: 179,
        priority: 10,
        headline: "عرض VIP حصري: أضف Royal Force بـ 179 درهم فقط (عوض 299 درهم)",
        description: "عزز كورس الصلابة بطاقة الماكا السوداء الملكية والجينسينغ الكوري لقوة مضاعفة وعدم الشعور بأي إرهاق بعد العلاقة."
      },
      {
        sourceSlug: "rovanx-control-oil",
        offeredSlug: "rovanx-vitality-60",
        upsellPrice: 199,
        priority: 20,
        headline: "عرض VIP حصري: أضف كبسولات Vitality Ultra (60 كبسولة) بـ 199 درهم فقط (عوض 299 درهم)",
        description: "للحصول على أفضل نتيجة: اجمع بين التحكم الخارجي (Control Flow) والصلابة الحديدية وتدفق الدم من الداخل مع Vitality Ultra."
      },
      {
        sourceSlug: "rovanx-prostate",
        offeredSlug: "rovanx-ginseng",
        upsellPrice: 169,
        priority: 20,
        headline: "عرض VIP حصري: أضف Testo Drive بـ 169 درهم فقط (عوض 249 درهم)",
        description: "كورس متكامل لصحة البروستات والحيوية: بينما يريح Prosta Guard المسالك البولية، يعيد Testo Drive تنشيط الدورة الدموية للحوض ورفع التستوستيرون الطبيعي."
      },
      {
        sourceSlug: "rovanx-maca-max",
        offeredSlug: "rovanx-control-oil",
        upsellPrice: 149,
        priority: 20,
        headline: "عرض VIP حصري: أضف زيت التحكم Control Flow بـ 149 درهم فقط (عوض 249 درهم)",
        description: "أكمل قوة Royal Force بتحكم كامل في توقيت القذف (30-45 دقيقة) مع سيروم القرنفل الطبيعي Control Flow في نفس الطرد السري."
      },
      {
        sourceSlug: "rovanx-ginseng",
        offeredSlug: "rovanx-vitality-60",
        upsellPrice: 199,
        priority: 20,
        headline: "عرض VIP حصري: أضف كبسولات Vitality Ultra بـ 199 درهم فقط (عوض 299 درهم)",
        description: "اجمع بين رفع التستوستيرون (Testo Drive) وأقوى تركيبة لتوسيع الأوعية والصلابة الفورية (Vitality Ultra) بتخفيض 100 درهم."
      },
      {
        sourceSlug: "rovanx-vitality-30",
        offeredSlug: "rovanx-control-oil",
        upsellPrice: 149,
        priority: 20,
        headline: "عرض VIP حصري: أضف زيت التحكم Control Flow بـ 149 درهم فقط (عوض 249 درهم)",
        description: "أضف سيروم التحكم الطبيعي Control Flow لطردك واستفد من تأخير القذف 30-45 دقيقة مع شحن مجاني بالكامل."
      },
      {
        sourceSlug: "rovanx-vital-protein",
        offeredSlug: "rovanx-vitality-60",
        upsellPrice: 199,
        priority: 20,
        headline: "عرض VIP حصري: أضف كبسولات Vitality Ultra بـ 199 درهم فقط (عوض 299 درهم)",
        description: "ضاعف نتائج Vital Protein في الضخامة وتدفق الدم مع كبسولات Vitality Ultra (60 كبسولة) بتخفيض فوري 100 درهم."
      }
    ];

    for (const r of UPSELL_RULES) {
      const source = productBySlug[r.sourceSlug];
      const offered = productBySlug[r.offeredSlug];
      if (!source || !offered) continue;

      const existingRule = await prisma.upsellRule.findFirst({
        where: { sourceProductId: source.id, offeredProductId: offered.id }
      });

      if (existingRule) {
        await prisma.upsellRule.update({
          where: { id: existingRule.id },
          data: {
            enabled: true,
            upsellPrice: r.upsellPrice,
            priority: r.priority,
            headline: r.headline,
            description: r.description
          }
        });
      } else {
        await prisma.upsellRule.create({
          data: {
            sourceProductId: source.id,
            offeredProductId: offered.id,
            enabled: true,
            upsellPrice: r.upsellPrice,
            priority: r.priority,
            headline: r.headline,
            description: r.description
          }
        });
      }
    }

    syncExecuted = true;
  } catch (error) {
    console.error("Failed to ensure catalog synced:", error);
  }
}
