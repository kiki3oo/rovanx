export type ProductDetailInfo = {
  name: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  benefits: string[];
  ingredients: string;
  usageInstructions: string;
  warnings: string;
  regulatoryInformation: string;
};

export const PRODUCT_DETAILS: Record<string, ProductDetailInfo> = {
  "rovanx-vitality-60": {
    name: "ROVANX Vitality 60",
    badge: "Cure Complète 2 Mois",
    tagline: "Formule Complète d'Endurance et de Vitalité Masculine",
    shortDescription:
      "Complexe exclusif associant extraits concentrés de Maca péruvienne, Panax Ginseng, Zinc chélaté et Vitamines B. Conçu pour stimuler l'énergie physique, la vitalité quotidienne et la résistance au surmenage.",
    benefits: [
      "Énergie & Endurance : Réduit la fatigue physique et intellectuelle grâce à la synergie du Ginseng et des vitamines B.",
      "Équilibre Hormonal : Le Zinc chélaté contribue au maintien d'un taux normal de vitalité masculine dans l'organisme.",
      "Soutien Adaptogène : La Maca aide le corps à s'adapter au stress quotidien sans effet excitant ni nervosité.",
      "Formule 100% Végétale : Gélules d'origine végétale, sans gluten, sans OGM, sans colorants artificiels."
    ],
    ingredients:
      "Extrait sec de racine de Maca (Lepidium meyenii) 500mg, Extrait sec de Panax Ginseng rouge 200mg (titré à 15% en ginsénosides), Zinc (bisglycinate chélaté) 15mg (150% VNR), Vitamine B6 2.8mg (200% VNR), Vitamine B12 5µg, Magnésium marin 100mg. Gélule d'origine végétale (HPMC).",
    usageInstructions:
      "Prendre 2 gélules par jour le matin avec un grand verre d'eau au cours du petit-déjeuner. Pour des résultats optimaux et durables, une cure régulière de 60 jours est recommandée.",
    warnings:
      "Complément alimentaire destiné à l'adulte. Ne pas dépasser la dose journalière recommandée. Ne se substitue pas à une alimentation variée et équilibrée ni à un mode de vie sain. Tenir hors de portée des jeunes enfants.",
    regulatoryInformation:
      "Formulé et fabriqué selon les bonnes pratiques de fabrication (BPF / GMP). Traçabilité rigoureuse et contrôle de pureté garanti à chaque lot."
  },
  "rovanx-vitality-30": {
    name: "ROVANX Vitality 30",
    badge: "Cure Découverte 1 Mois",
    tagline: "Format Découverte Vitalité & Tonus Quotidien",
    shortDescription:
      "Le format découverte 30 jours de notre formule signature Vitality. Un concentré de Maca, Ginseng et Zinc pour retrouver dynamisme et tonus dès les premières semaines.",
    benefits: [
      "Action Rapide : Dès les 10 premiers jours, sensation de réveil plus facile et meilleure endurance.",
      "Vitalité Naturelle : Formule équilibrée qui nourrit l'organisme en micronutriments essentiels.",
      "Format Pratique : Idéal pour tester l'efficacité ROVANX avant d'engager une cure complète de 60 jours.",
      "Haute Tolérance : Digestibilité optimale sans acidité ni inconfort gastrique."
    ],
    ingredients:
      "Extrait sec de racine de Maca 500mg, Extrait sec de Panax Ginseng rouge 200mg, Zinc bisglycinate 15mg, Vitamine B6 2.8mg, Vitamine B12 5µg, Magnésium marin 100mg. Gélule végétale.",
    usageInstructions:
      "Prendre 1 à 2 gélules par jour le matin avec un verre d'eau au cours d'un repas. Boîte de 30 gélules pour 15 à 30 jours d'utilisation.",
    warnings:
      "Complément alimentaire réservé à l'adulte. Respecter la dose recommandée. Conserver dans un endroit sec et frais à l'abri de l'humidité.",
    regulatoryInformation:
      "Normes de fabrication BPF / GMP. Ingrédients certifiés conformes aux standards de sécurité sanitaire."
  },
  "rovanx-prostate": {
    name: "ROVANX Prostate",
    badge: "Confort Urinaire & Protection",
    tagline: "Soutien Avancé de la Prostate et du Flux Urinaire",
    shortDescription:
      "Synergie protectrice combinant Saw Palmetto (Palmier nain), extrait de pépins de courge, Lycopène et Zinc. Formulé pour soutenir la fonction prostatique normale et préserver le confort urinaire chez l'homme dès 40 ans.",
    benefits: [
      "Confort Nocturne : Réduit significativement la fréquence des réveils nocturnes pour un sommeil réparateur.",
      "Flux & Débit Normal : Soutient un débit urinaire régulier et diminue la sensation d'inconfort ou de vidange incomplète.",
      "Bouclier Antioxydant : Le Zinc et le Lycopène protègent les tissus prostatiques contre le vieillissement cellulaire prématuré.",
      "Plantes Standardisées : Dosage scientifiquement calibré pour une action douce, progressive et sans accoutumance."
    ],
    ingredients:
      "Extrait de baies de Saw Palmetto (Serenoa repens) 320mg (titré à 85% en acides gras libres), Extrait concentré de pépins de courge (Cucurbita pepo) 150mg, Lycopène naturel de tomate 10mg, Zinc (gluconate) 10mg (100% VNR), Sélénium 55µg. Gélule végétale.",
    usageInstructions:
      "Prendre 1 à 2 gélules par jour avec un grand verre d'eau, de préférence le soir au dîner. Une cure continue de 60 à 90 jours est recommandée pour un confort durable.",
    warnings:
      "Complément alimentaire réservé à l'homme adulte. Demandez conseil à votre médecin ou pharmacien en cas de traitement médical en cours. Ne pas dépasser la dose conseillée.",
    regulatoryInformation:
      "Fabriqué sous contrôle qualité strict selon les normes BPF / GMP. Absence garantie de contaminants et de métaux lourds."
  },
  "rovanx-maca-max": {
    name: "ROVANX Maca Max",
    badge: "Haute Concentration 10:1",
    tagline: "Extrait Pur Concentré de Maca Noire Péruvienne",
    shortDescription:
      "Concentré purifié 10:1 de racine de Maca des Andes. Apport ultra-concentré en acides aminés, vitamines et minéraux pour stimuler l'endurance, la puissance musculaire et la vitalité générale.",
    benefits: [
      "Endurance Renforcée : Idéal pour les hommes actifs, sportifs ou soumis à des journées intenses.",
      "Tonicité & Force : Soutient la vitalité générale et aide à surmonter les baisses de régime passées 40 ans.",
      "Extrait Titré 10:1 : 500mg d'extrait équivalent à 5000mg de plante sèche pour une puissance maximale.",
      "100% Naturel : Racine de Maca sélectionnée, séchée naturellement sans additifs de synthèse."
    ],
    ingredients:
      "Extrait sec de racine de Maca péruvienne (Lepidium meyenii) 500mg (ratio 10:1, équivalent 5000mg de plante), Vitamine C 80mg (100% VNR), Zinc 10mg. Gélule végétale.",
    usageInstructions:
      "Prendre 2 gélules par jour le matin avec un grand verre d'eau. Cure conseillée de 30 à 60 jours.",
    warnings:
      "Réservé à l'adulte. Conserver à l'abri de la chaleur et de l'humidité. Tenir hors de portée des enfants.",
    regulatoryInformation:
      "Standard international BPF / GMP. Traçabilité des matières premières garantie de la récolte au conditionnement."
  },
  "rovanx-ginseng": {
    name: "ROVANX Ginseng",
    badge: "Ginseng Rouge Titré 20%",
    tagline: "Panax Ginseng C.A. Meyer Haute Puissance",
    shortDescription:
      "Extrait hautement titré à 20% en ginsénosides bio-actifs. Le stimulant adaptogène royal pour la concentration intellectuelle, la clarté mentale et la résistance à l'effort physique.",
    benefits: [
      "Anti-Fatigue Puissant : Combat la fatigue passagère et redonne du tonus sans palpitations ni nervosité.",
      "Clarté Mentale : Favorise la concentration, la vigilance et la mémoire face au stress professionnel.",
      "Défenses Naturelles : Contribue au bon fonctionnement du système immunitaire masculin.",
      "Ginseng Rouge Traditionnel : Sélection de racines matures de 6 ans pour une richesse optimale en principes actifs."
    ],
    ingredients:
      "Extrait sec de racine de Panax Ginseng 300mg (titré à 20% en ginsénosides totaux), Vitamine B1 1.1mg, Vitamine B2 1.4mg, Vitamine B6 1.4mg. Gélule végétale.",
    usageInstructions:
      "Prendre 1 gélule par jour le matin avec un verre d'eau au petit-déjeuner. Cure de 30 jours renouvelable.",
    warnings:
      "Déconseillé aux personnes sous traitement antidiabétique sans avis médical. Ne pas dépasser la dose recommandée.",
    regulatoryInformation:
      "Certifié conforme aux normes BPF / GMP. Pureté et concentration en ginsénosides vérifiées en laboratoire."
  }
};

export function getProductDetail(slug: string): ProductDetailInfo | null {
  return PRODUCT_DETAILS[slug] || null;
}
