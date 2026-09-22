import bcrypt from "bcryptjs";
import { PrismaClient, ProductRole } from "@prisma/client";

const prisma = new PrismaClient();

const placeholder =
  "Placeholder admin content. Final formula, dosage, warnings, regulatory references and claims must be reviewed before production.";

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@rovanx.local";
  const adminPassword = process.env.ADMIN_PASSWORD || "change-this-admin-password";

  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "ROVANX Admin",
      passwordHash: await bcrypt.hash(adminPassword, 12)
    }
  });

  const categories = [
    "Vitality",
    "Men's Wellness",
    "Prostate",
    "Energy",
    "Balance",
    "Sleep",
    "Supplements"
  ];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { slug: slugify(name) },
      update: {},
      create: { name, slug: slugify(name), description: `${name} products` }
    });
  }

  const categoryBySlug = Object.fromEntries(
    (await prisma.category.findMany()).map((category) => [category.slug, category])
  );

  const products = [
    ["ROVANX Vitality 60", "rovanx-vitality-60", "ROV-VIT-60", ProductRole.MAIN_HERO, "vitality", 349, 299, true, true],
    ["ROVANX Vitality 30", "rovanx-vitality-30", "ROV-VIT-30", ProductRole.ENTRY, "vitality", 219, 189, true, false],
    ["ROVANX Prostate", "rovanx-prostate", "ROV-PRO-01", ProductRole.HERO, "prostate", 279, 239, true, true],
    ["ROVANX Maca Max", "rovanx-maca-max", "ROV-MAC-01", ProductRole.HERO, "energy", 249, 219, true, true],
    ["ROVANX Ginseng", "rovanx-ginseng", "ROV-GIN-01", ProductRole.UPSELL, "energy", 229, 199, false, false],
    ["ROVANX Daily Men", "rovanx-daily-men", "ROV-DAY-01", ProductRole.CROSS_SELL, "men-s-wellness", 199, null, false, false],
    ["ROVANX Balance", "rovanx-balance", "ROV-BAL-01", ProductRole.CROSS_SELL, "balance", 229, 199, false, false],
    ["ROVANX Magnesium", "rovanx-magnesium", "ROV-MAG-01", ProductRole.UPSELL, "supplements", 189, 169, false, false],
    ["ROVANX Multi", "rovanx-multi", "ROV-MUL-01", ProductRole.CROSS_SELL, "supplements", 179, null, false, false],
    ["ROVANX Sleep", "rovanx-sleep", "ROV-SLP-01", ProductRole.CROSS_SELL, "sleep", 199, 179, false, false]
  ] as const;

  for (const [name, slug, sku, role, categorySlug, regularPrice, salePrice, hero, featured] of products) {
    await prisma.product.upsert({
      where: { slug },
      update: {},
      create: {
        name,
        slug,
        sku,
        role,
        categoryId: categoryBySlug[categorySlug].id,
        shortDescription: "Support quotidien pour la vitalite et le bien-etre masculin.",
        longDescription:
          "Contenu provisoire editable dans l'administration. Les details officiels seront ajoutes apres validation laboratoire.",
        placeholderNotice: placeholder,
        regularPrice,
        salePrice,
        cost: null,
        stockStatus: "UNKNOWN",
        active: true,
        featured,
        hero,
        ingredients: placeholder,
        servingSize: placeholder,
        usageInstructions: placeholder,
        warnings: placeholder,
        regulatoryInformation: placeholder,
        onssaReference: placeholder,
        benefits: ["Vitalite", "Bien-etre masculin", "Routine quotidienne"],
        seoTitle: `${name} | ROVANX`,
        seoDescription: `${name} - produit ROVANX avec contenu final a valider.`
      }
    });
  }

  const productBySlug = Object.fromEntries(
    (await prisma.product.findMany()).map((product) => [product.slug, product])
  );

  const bundleData = [
    ["ROVANX Men Pack", "rovanx-men-pack", ["rovanx-vitality-60", "rovanx-maca-max"], 469, 598],
    [
      "ROVANX Men Plus Pack",
      "rovanx-men-plus-pack",
      ["rovanx-vitality-60", "rovanx-maca-max", "rovanx-ginseng"],
      629,
      827
    ],
    ["ROVANX Daily Balance Pack", "rovanx-daily-balance-pack", ["rovanx-balance", "rovanx-magnesium"], 339, 418]
  ] as const;

  for (const [name, slug, items, bundlePrice, regularCombinedPrice] of bundleData) {
    const bundle = await prisma.bundle.upsert({
      where: { slug },
      update: {},
      create: {
        name,
        slug,
        description: "Bundle provisoire editable dans l'administration.",
        bundlePrice,
        regularCombinedPrice,
        active: true,
        seoTitle: `${name} | ROVANX`,
        seoDescription: "Pack ROVANX avec prix et contenu editables."
      }
    });

    for (const productSlug of items) {
      await prisma.bundleItem.upsert({
        where: { bundleId_productId: { bundleId: bundle.id, productId: productBySlug[productSlug].id } },
        update: {},
        create: { bundleId: bundle.id, productId: productBySlug[productSlug].id, quantity: 1 }
      });
    }
  }

  const rules = [
    ["rovanx-vitality-60", "rovanx-maca-max", "Ajoutez Maca Max a votre commande"],
    ["rovanx-vitality-30", "rovanx-vitality-60", "Passez au format Vitality 60"],
    ["rovanx-maca-max", "rovanx-ginseng", "Completez avec Ginseng"],
    ["rovanx-balance", "rovanx-magnesium", "Ajoutez Magnesium a votre routine"],
    ["rovanx-sleep", "rovanx-magnesium", "Associez Sleep et Magnesium"],
    ["rovanx-magnesium", "rovanx-multi", "Ajoutez Multi"],
    ["rovanx-prostate", "rovanx-daily-men", "Ajoutez Daily Men"]
  ] as const;

  for (const [sourceSlug, offeredSlug, headline] of rules) {
    const existing = await prisma.upsellRule.findFirst({
      where: {
        sourceProductId: productBySlug[sourceSlug].id,
        offeredProductId: productBySlug[offeredSlug].id
      }
    });
    if (!existing) {
      await prisma.upsellRule.create({
        data: {
          sourceProductId: productBySlug[sourceSlug].id,
          offeredProductId: productBySlug[offeredSlug].id,
          headline,
          description: "Offre additionnelle sans frais de livraison supplementaires.",
          upsellPrice: productBySlug[offeredSlug].salePrice || productBySlug[offeredSlug].regularPrice,
          enabled: true,
          priority: 10
        }
      });
    }
  }

  const blogCategories = [
    "Men's Health",
    "Vitality",
    "Prostate",
    "Supplements",
    "Nutrition",
    "Sleep",
    "Stress & Balance",
    "Lifestyle"
  ];
  for (const name of blogCategories) {
    await prisma.articleCategory.upsert({
      where: { slug: slugify(name) },
      update: {},
      create: { name, slug: slugify(name), description: "Categorie blog provisoire." }
    });
  }

  const author = await prisma.author.upsert({
    where: { id: "seed-author-rovanx" },
    update: {},
    create: { id: "seed-author-rovanx", name: "Equipe ROVANX", bio: "Auteur provisoire." }
  });

  const vitalityBlogCategory = await prisma.articleCategory.findUniqueOrThrow({
    where: { slug: "vitality" }
  });

  const articleTitles = [
    "Guide provisoire: construire une routine de bien-etre masculin",
    "Checklist avant publication: informations produit a valider",
    "Comprendre les complements sans promesses medicales"
  ];

  for (const title of articleTitles) {
    await prisma.article.upsert({
      where: { slug: slugify(title) },
      update: {},
      create: {
        title,
        slug: slugify(title),
        excerpt: "Article de demonstration. Contenu medical final a rediger et sourcer avant production.",
        body:
          "Ceci est un contenu de demonstration pour tester le CMS. Les sources, formulations et recommandations doivent etre validees avant publication commerciale.",
        authorId: author.id,
        categoryId: vitalityBlogCategory.id,
        status: "PUBLISHED",
        publishedAt: new Date(),
        seoTitle: `${title} | ROVANX`,
        seoDescription: "Article demo ROVANX sans allégation medicale."
      }
    });
  }

  await prisma.siteSetting.upsert({
    where: { key: "store" },
    update: {},
    create: {
      key: "store",
      value: {
        name: "ROVANX",
        tagline: "Men's Vitality & Wellness",
        contactEmail: "contact@rovanx.com",
        whatsapp: "PLACEHOLDER",
        legalReviewRequired: true
      }
    }
  });
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
