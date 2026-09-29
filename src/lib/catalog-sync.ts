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
  "Balance",
  "Sleep",
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
    name: "ROVANX Vitality 60",
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
    name: "ROVANX Vitality 30",
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
    name: "ROVANX Prostate",
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
    name: "ROVANX Maca Max 60",
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
    name: "ROVANX Ginseng 30",
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
    name: "ROVANX Control Oil",
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
    name: "ROVANX Vital Protein 250g",
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

    syncExecuted = true;
  } catch (error) {
    console.error("Failed to ensure catalog synced:", error);
  }
}
