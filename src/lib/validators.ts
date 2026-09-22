import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().min(2, "Nom complet requis"),
  phone: z.string().min(9, "Telephone requis"),
  city: z.string().min(2, "Ville requise"),
  address: z.string().min(6, "Adresse complete requise"),
  addressDetails: z.string().optional(),
  notes: z.string().optional(),
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.coerce.number().int().min(1).max(20)
      })
    )
    .min(1, "Panier vide"),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
  landingPage: z.string().optional(),
  referrer: z.string().optional()
});

export const productAdminSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/),
  sku: z.string().min(2),
  categoryId: z.string().min(1),
  shortDescription: z.string().min(5),
  longDescription: z.string().min(5),
  regularPrice: z.coerce.number().int().min(0),
  salePrice: z.coerce.number().int().min(0).optional().nullable(),
  active: z.coerce.boolean().default(false),
  featured: z.coerce.boolean().default(false),
  hero: z.coerce.boolean().default(false)
});
