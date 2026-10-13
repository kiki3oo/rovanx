import { z } from "zod";
import { isValidHumanText, isValidMoroccanPhone10Digits, sanitizePhoneInput } from "@/lib/phone";

export const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(2, "يرجى إدخال الاسم الكامل الحقيقي / Veuillez saisir votre vrai nom complet")
    .refine((val) => isValidHumanText(val, 2), {
      message: "يرجى إدخال اسم حقيقي صحيح / Veuillez saisir un nom valide"
    }),
  phone: z
    .string()
    .transform((val) => sanitizePhoneInput(val))
    .refine((val) => isValidMoroccanPhone10Digits(val), {
      message:
        "يرجى إدخال رقم هاتف مغربي حقيقي وصحيح مكون من 10 أرقام / Numéro marocain valide à 10 chiffres requis"
    }),
  city: z.string().optional().default("À confirmer"),
  address: z
    .string()
    .min(4, "يرجى إدخال المدينة والعنوان بشكل واضح / Veuillez préciser votre ville et adresse")
    .refine((val) => isValidHumanText(val, 4), {
      message: "يرجى كتابة عنوان حقيقي وواضح للتوصيل / Veuillez saisir une adresse de livraison valide"
    }),
  addressDetails: z.string().optional(),
  notes: z.string().optional(),
  bundleSlug: z.string().optional(),
  website: z.string().optional(), // Invisible honeypot against bots
  formRenderedAt: z.number().optional(), // Timestamp speed-trap against automated scripts
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.coerce.number().int().min(1).max(20),
        isBump: z.boolean().optional()
      })
    )
    .min(1, "Panier vide"),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
  landingPage: z.string().optional(),
  referrer: z.string().optional(),
  locale: z.enum(["ar", "fr", "en"]).optional(),
  displayCurrency: z.enum(["MAD", "EUR", "USD", "XOF", "XAF"]).optional()
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
