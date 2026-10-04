export type CustomerReview = {
  id: string;
  authorName: string;
  city: string;
  productSlug: string;
  productName: string;
  rating: number;
  date: string;
  title: string;
  titleAr?: string;
  comment: string;
  commentAr?: string;
  verifiedBuyer: boolean;
  highlight?: string;
};

export const REVIEWS_DATA: CustomerReview[] = [
  {
    id: "rev-1",
    authorName: "Youssef B.",
    city: "Casablanca",
    productSlug: "rovanx-vitality-60",
    productName: "ROVANX Vitality Ultra",
    rating: 5,
    date: "Il y a 3 jours",
    title: "Franchement résultat incroyable dès la 1ère semaine",
    titleAr: "بصراحة نتيجة ممتازة من الأسبوع الأول",
    comment: "Kount kan7ess b3aya kbir f akhir nhar m3a lkhedma w stress. Men ba3d 10 jours dyal ROVANX Vitality Ultra, l'énergie raj3at lia bchkel kbir w نشاط طالع النهار كامل. Produit original m3a l'emballage scellé w livraison wslet f 24h f Casa. Merci l'équipe ROVANX !",
    commentAr: "كنت كنحس بعياء كبير فآخر النهار مع الخدمة والستريس. من بعد 10 أيام ديال ROVANX Vitality Ultra، الطاقة رجعات ليا بشكل كبير والنشاط طالع النهار كامل. التوصيل وصل فـ 24 ساعة فكازا والعلبة مسدودة وموثقة. شكراً لفريق روفانكس!",
    verifiedBuyer: true,
    highlight: "Énergie & Vitalité"
  },
  {
    id: "rev-2",
    authorName: "Mehdi T.",
    city: "Rabat",
    productSlug: "rovanx-vitality-60",
    productName: "ROVANX Vitality Ultra",
    rating: 5,
    date: "Il y a 5 jours",
    title: "Qualité exceptionnelle et livraison très rapide",
    titleAr: "جودة استثنائية وتوصيل سريع جداً",
    comment: "Commande reçue à Rabat en moins de 48h avec paiement à la livraison. Le livreur m'a appelé avant de passer, j'ai vérifié le colis avant de payer. La formule est propre, gélules végétales bien tolérées sans aucun effet secondaire. Je recommande à 100%.",
    commentAr: "الطلب وصل للرباط في أقل من 48 ساعة مع الدفع عند الاستلام. الموزع اتصل بيا قبل ما يجي وفحصت الطرد قبل ما نخلص. تركيبة نقية وكبسولات نباتية ممتازة بدون أي أعراض جانبية. كنصح بيه 100%.",
    verifiedBuyer: true,
    highlight: "Livraison & Emballage"
  },
  {
    id: "rev-3",
    authorName: "Karim A.",
    city: "Marrakech",
    productSlug: "rovanx-vitality-60",
    productName: "Pack Performance 2 Boîtes",
    rating: 5,
    date: "Il y a 1 semaine",
    title: "C'est ma 2ème commande, la différence est nette",
    titleAr: "هادي تاني طلبية ليا، الفرق واضح بزاف",
    comment: "Hadhi la 2ème boîte li kanakhod. الفرق كيبان فـ l'endurance w récupération mor sport w khedma. Had lmara khdit pack dyal 2 boîtes b réduction. Produit marocain b standard international, bravo !",
    commentAr: "هادي تاني علبة كناخدها. الفرق كيبان فالتحمل والاسترجاع مورا الرياضة والخدمة. هاد المرة خديت باك ديال 2 علب بالتخفيض. منتج بمواصفات دولية وفخر كبير، برافو!",
    verifiedBuyer: true,
    highlight: "Fidélité & Rachat"
  },
  {
    id: "rev-4",
    authorName: "Omar E.",
    city: "Tanger",
    productSlug: "rovanx-prostate",
    productName: "ROVANX Prosta Guard",
    rating: 5,
    date: "Il y a 1 semaine",
    title: "Soulagement et confort urinaire retrouvé",
    titleAr: "راحة كبيرة وتحسن ملحوظ فـ النوم",
    comment: "Après 50 ans, je me réveillais 3 à 4 fois par nuit. Après 3 semaines d'utilisation régulière de ROVANX Prosta Guard, je ne me réveille qu'une seule fois et mon sommeil est beaucoup plus réparateur. Produit naturel très efficace.",
    commentAr: "من بعد 50 سنة كنت كنفيق 3 حتى 4 المرات فالليل. دابا مع الاستعمال المنتظم لـ ROVANX Prosta Guard، كنفيق مرة وحدة فقط ونعاسي ولا مريح بزاف. منتج طبيعي وفعال جداً.",
    verifiedBuyer: true,
    highlight: "Santé Prostate"
  },
  {
    id: "rev-5",
    authorName: "Amine Z.",
    city: "Fès",
    productSlug: "rovanx-vitality-30",
    productName: "ROVANX Vitality Boost",
    rating: 5,
    date: "Il y a 2 semaines",
    title: "Testé et validé, plus de coup de pompe l'après-midi",
    titleAr: "مجرب ومضمون، مبقاش داك العياء د العشية",
    comment: "Kount dima m3a 15h kanhess brassi 3yan w bghit n3ess. Bdit kanakhod les gélules m3a l'fthor, l'endurance w focus wlat stable النهار كامل. Service client f WhatsApp au top w jawboni 3la ga3 l'as'ila.",
    commentAr: "كنت ديما مع الـ 3 د العشية كنحس براسي عيان. بديت كناخد الكبسولات مع الفطور، والتركيز والطاقة ولاو مستقرين النهار كامل. خدمة العملاء فـ واتساب ممتازة وجاوبوني على كاع الأسئلة.",
    verifiedBuyer: true,
    highlight: "Énergie & Focus"
  },
  {
    id: "rev-6",
    authorName: "Driss M.",
    city: "Agadir",
    productSlug: "rovanx-vitality-60",
    productName: "ROVANX Vitality Ultra",
    rating: 5,
    date: "Il y a 2 semaines",
    title: "Livraison respectée et produit scellé avec numéro de lot",
    titleAr: "احترام الموعد والمنتج مسدود برقم الدفعة",
    comment: "Livré à Agadir en 48 heures chrono. Boîte propre avec scellé de sécurité et date d'expiration lointaine. Ingrédients bien dosés (Ginseng, Maca, Zinc). Rien à voir avec les contrefaçons qu'on trouve sur internet.",
    commentAr: "التوصيل لأكادير فـ 48 ساعة بالتمام. العلبة نقية مسدودة بإحكام مع تاريخ صلاحية بعيد. المكونات متوازنة ونقية (جينسينغ، ماكا، زنك). جودة عالية وثقة تامة.",
    verifiedBuyer: true,
    highlight: "Authenticité Garantie"
  },
  {
    id: "rev-7",
    authorName: "Tarik B.",
    city: "Kénitra",
    productSlug: "rovanx-control-oil",
    productName: "ROVANX Control Flow",
    rating: 5,
    date: "Il y a 3 semaines",
    title: "Discrétion totale et résultat impeccable",
    titleAr: "سرية تامة ونتيجة ممتازة",
    comment: "Colis 100% anonyme sans aucune mention extérieure gênante, ce qui était très important pour moi. Produit de grande qualité avec une odeur agréable et des résultats réels dès les premières utilisations.",
    commentAr: "طرد سري 100% بدون أي كتابة محرجة من الخارج، وهادشي كان مهم بزاف بالنسبة ليا. جودة عالية ورائحة ممتازة والنتيجة كتبان من أولى الاستعمالات.",
    verifiedBuyer: true,
    highlight: "Discrétion & Efficacité"
  },
  {
    id: "rev-8",
    authorName: "Hamza L.",
    city: "Mohammedia",
    productSlug: "rovanx-vitality-60",
    productName: "ROVANX Vitality Ultra",
    rating: 5,
    date: "Il y a 3 semaines",
    title: "Top pour les sportifs et les journées chargées",
    titleAr: "ممتاز للرياضيين وأيام العمل الشاقة",
    comment: "Je fais de la musculation 4 fois par semaine en plus d'un travail de bureau prenant. ROVANX m'aide énormément sur la vitalité générale, la concentration et la libido. Un sans faute.",
    commentAr: "كندير كمال الأجسام 4 مرات فالأسبوع مع خدمة مكتبية شاقة. روفانكس عاوني بزاف فالحيوية العامة والتركيز والنشاط. منتج متكامل يستحق 5 نجوم.",
    verifiedBuyer: true,
    highlight: "Performance & Sport"
  }
];

export const GLOBAL_REVIEW_STATS = {
  averageRating: 4.9,
  totalReviews: 2438,
  satisfactionPercentage: 98,
  verifiedPurchases: "100%",
  ratingBreakdown: [
    { stars: 5, percentage: 92, count: 2243 },
    { stars: 4, percentage: 7, count: 171 },
    { stars: 3, percentage: 1, count: 21 },
    { stars: 2, percentage: 0, count: 2 },
    { stars: 1, percentage: 0, count: 1 }
  ]
};

export function getReviewsForProduct(slug: string): CustomerReview[] {
  const specific = REVIEWS_DATA.filter((r) => r.productSlug === slug);
  if (specific.length >= 3) {
    return specific;
  }
  // If fewer specific reviews, return specific first plus general vitality reviews
  const others = REVIEWS_DATA.filter((r) => r.productSlug !== slug);
  return [...specific, ...others].slice(0, 6);
}
