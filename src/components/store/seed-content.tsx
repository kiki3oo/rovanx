"use client";

import { usePreferences, type SupportedLocale } from "@/components/store/preferences-provider";

const seedTranslations: Record<string, Record<SupportedLocale, string>> = {
  "Vitality": { ar: "الحيوية", fr: "Vitalité", en: "Vitality" },
  "Men's Wellness": { ar: "صحة الرجل", fr: "Bien-être masculin", en: "Men's wellness" },
  "Prostate": { ar: "البروستاتا", fr: "Prostate", en: "Prostate" },
  "Energy": { ar: "الطاقة", fr: "Énergie", en: "Energy" },
  "Balance": { ar: "التوازن", fr: "Équilibre", en: "Balance" },
  "Sleep": { ar: "النوم", fr: "Sommeil", en: "Sleep" },
  "Supplements": { ar: "المكملات الغذائية", fr: "Compléments alimentaires", en: "Supplements" },
  "Men's Health": { ar: "صحة الرجل", fr: "Santé masculine", en: "Men's health" },
  "Nutrition": { ar: "التغذية", fr: "Nutrition", en: "Nutrition" },
  "Stress & Balance": { ar: "التوتر والتوازن", fr: "Stress et équilibre", en: "Stress and balance" },
  "Lifestyle": { ar: "نمط الحياة", fr: "Mode de vie", en: "Lifestyle" },
  "Support quotidien pour la vitalite et le bien-etre masculin.": {
    ar: "دعم يومي لحيوية الرجل ورفاهيته.", fr: "Un soutien quotidien pour la vitalité et le bien-être masculin.",
    en: "Daily support for men's vitality and wellness."
  },
  "Bundle provisoire editable dans l'administration.": {
    ar: "باقة تجريبية يمكن تعديلها من لوحة الإدارة.", fr: "Pack provisoire modifiable dans l'administration.",
    en: "Sample bundle, editable in the admin panel."
  },
  "Article de demonstration. Contenu medical final a rediger et sourcer avant production.": {
    ar: "مقال تجريبي. سيُكتب المحتوى الصحي النهائي ويُوثّق قبل النشر.",
    fr: "Article de démonstration. Le contenu santé final sera rédigé et sourcé avant publication.",
    en: "Sample article. Final health content will be written and sourced before publication."
  },
  "Ceci est un contenu de demonstration pour tester le CMS. Les sources, formulations et recommandations doivent etre validees avant publication commerciale.": {
    ar: "هذا محتوى تجريبي لاختبار نظام إدارة المحتوى. يجب مراجعة المصادر والصياغة والتوصيات قبل النشر التجاري.",
    fr: "Ce contenu sert à tester le CMS. Les sources, formulations et recommandations doivent être validées avant publication commerciale.",
    en: "This content is for testing the CMS. Sources, wording, and recommendations must be approved before commercial publication."
  },
  "Guide provisoire: construire une routine de bien-etre masculin": {
    ar: "دليل تجريبي: بناء روتين لرفاهية الرجل", fr: "Guide provisoire : construire une routine de bien-être masculin",
    en: "Sample guide: building a men's wellness routine"
  },
  "Checklist avant publication: informations produit a valider": {
    ar: "قائمة مراجعة قبل النشر: بيانات المنتج التي يجب اعتمادها", fr: "Liste de vérification avant publication : informations produit à valider",
    en: "Pre-publication checklist: product information to approve"
  },
  "Comprendre les complements sans promesses medicales": {
    ar: "فهم المكملات دون وعود طبية", fr: "Comprendre les compléments sans promesses médicales",
    en: "Understanding supplements without medical claims"
  },
  "Placeholder admin content. Final formula, dosage, warnings, regulatory references and claims must be reviewed before production.": {
    ar: "محتوى تجريبي. يجب مراجعة التركيبة والجرعة والتحذيرات والمراجع التنظيمية قبل الإنتاج.",
    fr: "Contenu provisoire. La formule, la dose, les précautions et les références réglementaires doivent être validées avant production.",
    en: "Placeholder content. Formula, dosage, warnings, and regulatory details must be reviewed before production."
  },
  "Vitalite, Bien-etre masculin, Routine quotidienne": {
    ar: "الحيوية، رفاهية الرجل، الروتين اليومي", fr: "Vitalité, bien-être masculin, routine quotidienne",
    en: "Vitality, men's wellness, daily routine"
  },
  "Offre additionnelle sans frais de livraison supplementaires.": {
    ar: "عرض إضافي دون رسوم توصيل إضافية.", fr: "Offre supplémentaire sans frais de livraison additionnels.",
    en: "Additional offer with no extra delivery fee."
  },
  "Ajoutez Maca Max a votre commande": { ar: "أضف Maca Max إلى طلبك", fr: "Ajoutez Maca Max à votre commande", en: "Add Maca Max to your order" },
  "Passez au format Vitality 60": { ar: "انتقل إلى Vitality 60", fr: "Passez au format Vitality 60", en: "Upgrade to Vitality 60" },
  "Completez avec Ginseng": { ar: "أكمل طلبك بـ Ginseng", fr: "Complétez avec Ginseng", en: "Complete your order with Ginseng" },
  "Ajoutez Magnesium a votre routine": { ar: "أضف Magnesium إلى روتينك", fr: "Ajoutez Magnesium à votre routine", en: "Add Magnesium to your routine" },
  "Associez Sleep et Magnesium": { ar: "اجمع Sleep و Magnesium", fr: "Associez Sleep et Magnesium", en: "Pair Sleep with Magnesium" },
  "Ajoutez Multi": { ar: "أضف Multi", fr: "Ajoutez Multi", en: "Add Multi" },
  "Ajoutez Daily Men": { ar: "أضف Daily Men", fr: "Ajoutez Daily Men", en: "Add Daily Men" }
};

export function localizedSeedText(value: string, locale: SupportedLocale) {
  return seedTranslations[value]?.[locale] || value;
}

export function SeedContent({ value }: { value: string }) {
  const { locale } = usePreferences();
  return <>{localizedSeedText(value, locale)}</>;
}
