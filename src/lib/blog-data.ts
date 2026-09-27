export type BlogPost = {
  id: string;
  slug: string;
  titleFr: string;
  titleAr: string;
  excerptFr: string;
  excerptAr: string;
  categoryFr: string;
  categoryAr: string;
  author: string;
  readTime: string;
  publishedAt: string;
  coverImage?: string;
  contentFr: Array<{ heading?: string; paragraph: string; bulletPoints?: string[] }>;
  contentAr: Array<{ heading?: string; paragraph: string; bulletPoints?: string[] }>;
  recommendedProductSlug?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-vitality-habits",
    slug: "5-habitudes-vitalite-masculine-energie-naturelle",
    titleFr: "Vitalité Masculine : 5 Habitudes Quotidiennes pour Booster Votre Énergie Naturellement",
    titleAr: "حيوية وطاقة الرجل: 5 عادات يومية لزيادة النشاط والتغلب على الإرهاق",
    excerptFr: "Découvrez les 5 habitudes simples et scientifiquement documentées pour surmonter les baisses d'énergie, soutenir l'endurance et retrouver votre pleine vitalité au quotidien.",
    excerptAr: "اكتشف 5 عادات يومية مثبتة علمياً لمقاومة التعب والإرهاق، تعزيز النشاط البدني والذهني، والحفاظ على أقصى درجات الحيوية طوال اليوم.",
    categoryFr: "Vitalité & Énergie",
    categoryAr: "الحيوية والنشاط",
    author: "Équipe ROVANX",
    readTime: "4 min",
    publishedAt: "2026-09-20",
    recommendedProductSlug: "rovanx-vitality-60",
    contentFr: [
      {
        heading: "1. Prioriser une hydratation matinale ciblée",
        paragraph: "Après 7 à 8 heures de sommeil, l'organisme est naturellement déshydraté. Boire un grand verre d'eau dès le réveil active le métabolisme, facilite l'élimination des toxines et prépare votre système digestif. Ajoutez-y une pincée de sel minéral ou un filet de citron pour optimiser l'équilibre électrolytique."
      },
      {
        heading: "2. Consommer des micronutriments clés (Zinc & Magnésium)",
        paragraph: "Le zinc et le magnésium sont indispensables au métabolisme énergétique et à l'équilibre hormonal de l'homme. Une carence, fréquente avec les régimes modernes, se traduit rapidement par une fatigue musculaire, une baisse de moral et un manque de ressort."
      },
      {
        heading: "3. Tirer parti des plantes adaptogènes (Maca & Ginseng)",
        paragraph: "Les adaptogènes sont des extraits botaniques qui aident le corps à s'adapter au stress physique et mental sans provoquer d'accoutumance ni d'effet d'excitation brutale. La Maca et le Ginseng constituent la base d'une cure de vitalité durable.",
        bulletPoints: [
          "Maca péruvienne : soutient l'endurance et l'équilibre physique.",
          "Panax Ginseng : aide à maintenir les performances cognitives et la résistance à l'effort."
        ]
      },
      {
        heading: "4. Pratiquer une activité physique courte mais intense",
        paragraph: "Inutile de passer 2 heures en salle de sport chaque jour. 25 à 30 minutes d'entraînement fonctionnel (marche rapide, renforcement musculaire au poids du corps) 3 à 4 fois par semaine suffisent à relancer la circulation sanguine et la production d'énergie cellulaire."
      },
      {
        heading: "5. Structurer un sommeil réparateur",
        paragraph: "C'est durant le sommeil profond que votre organisme régule ses fonctions hormonales et répare les tissus musculaires. Évitez les écrans au moins 45 minutes avant le coucher et maintenez une chambre fraîche et sombre."
      }
    ],
    contentAr: [
      {
        heading: "1. ترطيب الجسم فور الاستيقاظ",
        paragraph: "بعد 7 إلى 8 ساعات من النوم، يكون الجسم في حالة جفاف طبيعية. شرب كوبين من الماء فور الاستيقاظ ينشط الدورة الدموية، يحفز الجهاز الهضمي، ويعيد تشغيل خلايا الدماغ لبداية يوم نشيطة."
      },
      {
        heading: "2. الاهتمام بالمعادن الأساسية (الزنك والمغنيسيوم)",
        paragraph: "يعد الزنك والمغنيسيوم من أهم المعادن الحيوية لصحة وتوازن هرمونات الرجل. نقص هذه العناصر بسبب ضغوط الحياة وسوء التغذية يظهر مباشرة على شكل إرهاق مستمر وضعف في التركيز والعضلات."
      },
      {
        heading: "3. الاستفادة من النباتات المكيفة (الماكا والجينسنغ)",
        paragraph: "النباتات المكيفة (Adaptogens) تساعد الجسم على مقاومة الضغط والإجهاد البدني والذهني بدون أي أعراض جانبية مفاجئة. يعتبر مزيج جذور الماكا والجينسنغ من أقوى الحلول الطبيعية لدعم النشاط المستدام.",
        bulletPoints: [
          "جذور الماكا: تزيد من طاقة التحمل وتدعم الحيوية العامة.",
          "الجينسنغ الكوري: يعزز التركيز الذهني ومقاومة الإرهاق العصبي."
        ]
      },
      {
        heading: "4. ممارسة نشاط بدني منتظم ولو لمدة قصيرة",
        paragraph: "لا تحتاج لقضاء ساعات في قاعة الرياضة. 20 إلى 30 دقيقة من المشي السريع أو التمارين السويدية 3 مرات أسبوعياً كافية لتحفيز تدفق الدم وتنشيط إنتاج الطاقة داخل الخلايا."
      },
      {
        heading: "5. الحفاظ على نوم عميق ومريح",
        paragraph: "خلال ساعات النوم العميق يقوم الجسم بإعادة بناء الأنسجة وضبط المستويات الهرمونية الحيوية. تجنب الهاتف والشاشات قبل النوم بنصف ساعة، واحرص على غرفة مظلمة وهادئة."
      }
    ]
  },
  {
    id: "post-maca-ginseng",
    slug: "maca-et-ginseng-bienfaits-vitalite-masculine",
    titleFr: "Maca & Ginseng : Le Duo de Référence pour la Forme et l'Endurance Masculine",
    titleAr: "الماكا والجينسنغ: أفضل تركيبة طبيعية لدعم طاقة ونشاط الرجل",
    excerptFr: "Pourquoi ces deux plantes adaptogènes légendaires sont aujourd'hui au cœur des meilleures formulations pour l'énergie, la vigueur et la résistance à l'effort.",
    excerptAr: "تعرف على الأسباب العلمية التي تجعل جذور الماكا والجينسنغ الخيار الأول عالمياً لدعم الطاقة، الحيوية ومقاومة الإجهاد لدى الرجال.",
    categoryFr: "Ingrédients & Science",
    categoryAr: "المكونات والعلوم",
    author: "Équipe ROVANX",
    readTime: "5 min",
    publishedAt: "2026-09-18",
    recommendedProductSlug: "rovanx-vitality-60",
    contentFr: [
      {
        heading: "La Maca Péruvienne : La racine d'or des Andes",
        paragraph: "Cultivée sur les hauts plateaux andins à plus de 4 000 mètres d'altitude dans des conditions climatiques extrêmes, la racine de Maca (Lepidium meyenii) a développé une densité nutritionnelle hors du commun. Riche en macaènes, macamides, acides aminés et minéraux essentiels, elle est utilisée depuis des millénaires pour soutenir la vitalité globale et l'équilibre physique de l'homme."
      },
      {
        heading: "Le Panax Ginseng : Le roi des toniques orientaux",
        paragraph: "Dans la pharmacopée traditionnelle asiatique, le Ginseng rouge (Panax Ginseng) est le maître incontesté de l'énergie vitale (le Qi). Ses principes actifs spécifiques, les ginsénosides, ont fait l'objet de nombreuses études cliniques modernes démontrant leur capacité à améliorer l'oxygénation cellulaire et la résistance au surmenage intellectuel et musculaire."
      },
      {
        heading: "Pourquoi associer Maca et Ginseng ?",
        paragraph: "L'association de ces deux plantes crée une synergie remarquable : tandis que la Maca agit en profondeur sur la résistance de fond et l'endurance, le Ginseng procure un soutien dynamique immédiat face à la fatigue passagère. C'est précisément l'équilibre recherché dans la formule ROVANX Vitality."
      },
      {
        heading: "Comment choisir une formule de qualité au Maroc ?",
        paragraph: "Attention aux poudres brutes peu concentrées. Pour une efficacité tangible, privilégiez des extraits secs titrés garantissant une concentration constante en principes actifs, formulés sans excipients nocifs et conditionnés selon les normes de sécurité sanitaire les plus rigoureuses."
      }
    ],
    contentAr: [
      {
        heading: "جذور الماكا البيروفية: ذهب جبال الأنديز",
        paragraph: "تنمو جذور الماكا على ارتفاعات تتجاوز 4000 متر في جبال الأنديز في ظروف مناخية قاسية، مما منحها تركيزاً غذائياً استثنائياً. بفضل غناها بالأحماض الأمينية والمعادن الأساسية والمركبات النشطة، تعد الماكا من أقدم النباتات المستعملة عالمياً لتعزيز طاقة الرجل وقوة تحمله."
      },
      {
        heading: "الجينسنغ الكوري (Panax Ginseng): ملك النباتات المنشطة",
        paragraph: "يعد الجينسنغ الآسيوي أشهر نبات تقليدي لتعزيز الحيوية والنشاط. أثبتت الدراسات العلمية الحديثة أن مركبات 'الparams-جينسينوسيدات' الموجودة في جذوره تساعد على تنشيط الدورة الدموية، محاربة الإجهاد الذهني، وتجديد النشاط البدني بدون أي هبوط مفاجئ."
      },
      {
        heading: "سر القوة في الجمع بين الماكا والجينسنغ",
        paragraph: "الجمع بين الماكا والجينسنغ يعطي تكاملاً مذهلاً: الماكا تعمل على بناء الطاقة العميقة والمستدامة في الجسم، بينما يمنح الجينسنغ دعماً فورياً للتركيز والنشاط اليومي. وهذا هو الأساس العلمي المعتمد في تركيبة ROVANX Vitality."
      },
      {
        heading: "كيف تختار منتجاً موثوقاً في المغرب؟",
        paragraph: "احرص دائماً على اختيار مكملات تعتمد على خلاصات نباتية مركزة وموثوقة، مغلفة وفق أعلى معايير النظافة والسلامة، مع خدمة توصيل محلية تضمن لك أصالة وجودة المنتج."
      }
    ]
  },
  {
    id: "post-prostate-health",
    slug: "sante-prostate-conseils-nutrition-bien-etre-homme",
    titleFr: "Confort de la Prostate : Ce que Chaque Homme Doit Savoir Après 40 Ans",
    titleAr: "صحة البروستاتا: دليلك الشامل للحفاظ على الراحة والوقاية بعد سن الأربعين",
    excerptFr: "Comprendre le fonctionnement de la prostate, les nutriments protecteurs comme le Saw Palmetto et le Zinc, et les bons réflexes au quotidien pour préserver votre confort urinaire.",
    excerptAr: "كل ما يهم الرجل حول الحفاظ على صحة البروستاتا، الأغذية والمكملات الداعمة (مثل البلميط المنشاري والزنك)، وأهم النصائح لتجنب الاضطرابات البولية المزعجة.",
    categoryFr: "Santé Masculine",
    categoryAr: "صحة الرجل",
    author: "Équipe ROVANX",
    readTime: "4 min",
    publishedAt: "2026-09-15",
    recommendedProductSlug: "rovanx-prostate",
    contentFr: [
      {
        heading: "Le rôle vital de la prostate",
        paragraph: "Petite glande de la taille d'une châtaigne située sous la vessie, la prostate joue un rôle clé dans le système reproducteur et urinaire masculin. Avec l'âge et les variations hormonales naturelles (notamment la conversion de testostérone en DHT), son volume a tendance à augmenter progressivement à partir de 40-45 ans."
      },
      {
        heading: "Les signaux d'alerte à ne pas ignorer",
        paragraph: "Un besoin fréquent d'uriner (notamment la nuit), un jet affaibli, ou une sensation de vidange incomplète sont des inconforts fréquents mais qu'il ne faut pas laisser s'installer sans agir pour préserver sa qualité de vie."
      },
      {
        heading: "Les alliés naturels : Saw Palmetto & Zinc",
        paragraph: "L'extrait de baies de palmier nain (Saw Palmetto / Serenoa repens) est traditionnellement reconnu pour freiner l'action de l'enzyme 5-alpha-réductase, contribuant ainsi à maintenir un volume prostatique normal. Associé au zinc, oligo-élément hautement concentré dans le tissu prostatique sain, il forme un bouclier protecteur essentiel."
      },
      {
        heading: "3 gestes préventifs simples",
        paragraph: "Adoptez une alimentation riche en antioxydants (tomates cuites riches en lycopène, graines de courge), réduisez la sédentarité prolongée et limitez la consommation excessive de caféine ou d'épices en soirée."
      }
    ],
    contentAr: [
      {
        heading: "ما هو دور غدة البروستاتا في جسم الرجل؟",
        paragraph: "البروستاتا هي غدة صغيرة بحجم حبة الجوز تقع أسفل المثانة، وتلعب دوراً رئيسياً في صحة الجهاز البولي والتناسلي للرجل. مع التقدم في العمر (خاصة بعد سن 40-45)، يمر معظم الرجال بتغيرات هرمونية طبيعية تؤدي تدريجياً لزيادة حجمها."
      },
      {
        heading: "أعراض شائعة تتطلب الانتباه والاهتمام المبكر",
        paragraph: "الاستيقاظ المتكرر ليلاً للتبول، ضعف تدفق البول، أو الإحساس بعدم إفراغ المثانة بشكل كامل، هي علامات شائعة يمكن التعامل معها بنجاح عبر الاهتمام المبكر بنمط الحياة والتغذية السليمة."
      },
      {
        heading: "عناصر طبيعية لحماية البروستاتا: البلميط المنشاري والزنك",
        paragraph: "خلاصة البلميط المنشاري (Saw Palmetto) أثبتت الدراسات دورها في دعم صحة وتدفق البول والحفاظ على حجم طبيعي للبروستاتا. كما يعتبر معدن الزنك عنصراً وقائياً أساسياً يتركز بشكل طبيعي في أنسجة البروستاتا السليمة."
      },
      {
        heading: "نصائح ذهبية للحفاظ على صحة البروستاتا",
        paragraph: "احرص على شرب كميات كافية من الماء نهاراً مع تقليله قبل النوم، تناول الأغذية الغنية بمضادات الأكسدة مثل بذور القرع والطماطم، وتجنب الجلوس لساعات طويلة دون حركة."
      }
    ]
  }
];
