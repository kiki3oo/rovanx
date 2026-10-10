export type CustomerReview = {
  id: string;
  authorName: string;
  city: string;
  productSlug: string;
  productName: string;
  productNameAr?: string;
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
    productName: "Vitality Ultra",
    productNameAr: "Vitality Ultra",
    rating: 5,
    date: "Il y a 3 jours",
    title: "Franchement résultat incroyable dès la 1ère semaine",
    titleAr: "صلابة وزيادة فالسمك.. الزوجة ديالي تفاجأت بالفرق الكبير",
    comment: "Kount kan7ess b3aya kbir w fatigue f l'intimité m3a lkhedma w stress. Men ba3d 10 jours dyal Vitality Ultra, l'endurance, la fermeté w le volume wlaw top. Zawja dyali la7dat far9 kbir w rja3 l'plaisir binatna. Produit original m3a l'emballage scellé w livraison wslet f 24h f Casa. Merci ROVANX !",
    commentAr: "كنت كنعاني من عياء وسرعة القذف وارتخاء فالحجم مع ضغط الخدمة. من بعد 12 يوم ديال Vitality Ultra، الصلابة ولات حديدية وتدفق الدم عطى امتلاء وزيادة واضحة فالسمك والطول. الزوجة ديالي تفاجأت وحسات بفرق شاسع فكل لقاء ورجعات المتعة الحقيقية لعلاقتنا. التوصيل وصل فـ 24 ساعة فكازا والعلبة مسدودة وموثقة. شكراً روفانكس!",
    verifiedBuyer: true,
    highlight: "صلابة وزيادة فالسمك"
  },
  {
    id: "rev-2",
    authorName: "Mehdi T.",
    city: "Rabat",
    productSlug: "rovanx-vitality-60",
    productName: "Vitality Ultra",
    productNameAr: "Vitality Ultra",
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
    productSlug: "rovanx-men-pack",
    productName: "Men Pack",
    productNameAr: "Men Pack",
    rating: 5,
    date: "Il y a 1 semaine",
    title: "C'est ma 2ème commande, la différence est nette",
    titleAr: "هادي تاني طلبية ليا.. متعة حميمية وثقة رجعات 100%",
    comment: "Hadhi la 2ème commande li kanakhod. الفرق كيبان فـ l'endurance w la fermeté. Kaddir l'plaisir l zawja dyalek bla 3ya w bla stress. Had lmara khdit Men Pack b réduction w livraison gratuite. Produit marocain b standard international, bravo !",
    commentAr: "هادي تاني طلبية كناخدها. الفرق كبير بزاف فالتحمل والصلابة فالفراش، كتقدر تمتع الزوجة ديالك بدون داك الإرهاق ولا الإحراج اللي كان كيعصبني. هاد المرة خديت Men Pack بالتخفيض وتوصيل مجاني. منتج أصلي وفخر كبير، برافو!",
    verifiedBuyer: true,
    highlight: "ثقة ومتعة متبادلة"
  },
  {
    id: "rev-4",
    authorName: "Omar E.",
    city: "Tanger",
    productSlug: "rovanx-prostate",
    productName: "Prosta Guard",
    productNameAr: "Prosta Guard (120 مل)",
    rating: 5,
    date: "Il y a 1 semaine",
    title: "Soulagement et confort urinaire retrouvé",
    titleAr: "راحة كبيرة وتحسن ملحوظ فـ النوم",
    comment: "Après 50 ans, je me réveillais 3 à 4 fois par nuit. Après 3 semaines d'utilisation régulière de Prosta Guard, je ne me réveille qu'une seule fois et mon sommeil est beaucoup plus réparateur. Produit naturel très efficace.",
    commentAr: "من بعد 50 سنة كنت كنفيق 3 حتى 4 المرات فالليل. دابا مع الاستعمال المنتظم لـ Prosta Guard، كنفيق مرة وحدة فقط ونعاسي ولا مريح بزاف. منتج طبيعي وفعال جداً.",
    verifiedBuyer: true,
    highlight: "Santé Prostate"
  },
  {
    id: "rev-prostate-2",
    authorName: "Hassan M.",
    city: "Casablanca",
    productSlug: "rovanx-prostate-energie-pack",
    productName: "Pack Santé Prostate & Énergie",
    productNameAr: "Pack Santé Prostate & Énergie",
    rating: 5,
    date: "Il y a 4 jours",
    title: "تدفق سلس ونوم هادئ طول الليل",
    titleAr: "تدفق سلس ونوم هادئ طول الليل",
    comment: "عندي 54 عام وكنت كنعاني من صعوبة فالبداية د التبول وضعف التدفق. خديت Pack Santé Prostate & Énergie. من بعد 15 يوم لاحظت فرق شاسع، البول كيدوز بسلاسة ومبقيتش كنحس بداك الثقل فالمثانة. التوصيل كان سريع وسري فكازا.",
    commentAr: "عندي 54 عام وكنت كنعاني من صعوبة فالبداية د التبول وضعف التدفق. خديت Pack Santé Prostate & Énergie. من بعد 15 يوم لاحظت فرق شاسع، البول كيدوز بسلاسة ومبقيتش كنحس بداك الثقل فالمثانة. التوصيل كان سريع وسري فكازا.",
    verifiedBuyer: true,
    highlight: "راحة فورية وتدفق طبيعي"
  },
  {
    id: "rev-prostate-3",
    authorName: "Abdelaziz K.",
    city: "Rabat",
    productSlug: "rovanx-prostate",
    productName: "Prosta Guard",
    productNameAr: "Prosta Guard",
    rating: 5,
    date: "Il y a 1 semaine",
    title: "نوم متواصل بدون انقطاع.. منتج يستحق الثقة",
    titleAr: "نوم متواصل بدون انقطاع.. منتج يستحق الثقة",
    comment: "أهم حاجة عندي كانت هي النعاس، كنت كنفيق بزاف د المرات ومكنرتاحش فالصباح. دابا مع Prosta Guard كنفيق مرة وحدة فقط على الأكثر. المذاق ساهل للشرب بفضل غطاء القياس. شكراً على المعاملة الطيبة والتأكيد الهاتفي السريع.",
    commentAr: "أهم حاجة عندي كانت هي النعاس، كنت كنفيق بزاف د المرات ومكنرتاحش فالصباح. دابا مع Prosta Guard كنفيق مرة وحدة فقط على الأكثر. المذاق ساهل للشرب بفضل غطاء القياس. شكراً على المعاملة الطيبة والتأكيد الهاتفي السريع.",
    verifiedBuyer: true,
    highlight: "نوم هادئ وغير متقطع"
  },
  {
    id: "rev-prostate-4",
    authorName: "Mohamed L.",
    city: "Marrakech",
    productSlug: "rovanx-prostate-energie-pack",
    productName: "Pack Santé Prostate & Énergie",
    productNameAr: "Pack Santé Prostate & Énergie",
    rating: 5,
    date: "Il y a 10 jours",
    title: "طرد سري ومحكم وراحة ملحوظة من الأسبوع الأول",
    titleAr: "طرد سري ومحكم وراحة ملحوظة من الأسبوع الأول",
    comment: "طلبت الباك، وصلني الطرد مسدود بإحكام وبدون أي كتابة محرجة من الخارج، وهادي نقطة مهمة بزاف. المنتج أصلي وعندو جودة عالية، كنحس براحة كبيرة فالحوض والتبول ولا طبيعي جداً. كنصح بيه أي راجل فوق 45 سنة.",
    commentAr: "طلبت الباك، وصلني الطرد مسدود بإحكام وبدون أي كتابة محرجة من الخارج، وهادي نقطة مهمة بزاف. المنتج أصلي وعندو جودة عالية، كنحس براحة كبيرة فالحوض والتبول ولا طبيعي جداً. كنصح بيه أي راجل فوق 45 سنة.",
    verifiedBuyer: true,
    highlight: "تغليف سري وجودة عالية"
  },
  {
    id: "rev-prostate-5",
    authorName: "Rachid B.",
    city: "Fès",
    productSlug: "rovanx-prostate",
    productName: "Prosta Guard",
    productNameAr: "Prosta Guard",
    rating: 5,
    date: "Il y a 2 semaines",
    title: "بديل طبيعي ممتاز بدون أي أعراض جانبية",
    titleAr: "بديل طبيعي ممتاز بدون أي أعراض جانبية",
    comment: "جربت بزاف د الوصفات العشوائية وما عطاوني حتى نتيجة. Prosta Guard مكوناتو واضحة ونقية (البلميط المنشاري وزيت بذور القرع). بديت كنحس بالخفة والراحة من الأسبوع الأول، وفحصت الطرد قبل ما نخلص الموزع. مصداقية عالية.",
    commentAr: "جربت بزاف د الوصفات العشوائية وما عطاوني حتى نتيجة. Prosta Guard مكوناتو واضحة ونقية (البلميط المنشاري وزيت بذور القرع). بديت كنحس بالخفة والراحة من الأسبوع الأول، وفحصت الطرد قبل ما نخلص الموزع. مصداقية عالية.",
    verifiedBuyer: true,
    highlight: "مكونات طبيعية 100%"
  },
  {
    id: "rev-5",
    authorName: "Amine Z.",
    city: "Fès",
    productSlug: "rovanx-vitality-30",
    productName: "Vitality Boost",
    productNameAr: "Vitality Boost",
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
    productName: "Vitality Ultra",
    productNameAr: "Vitality Ultra",
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
    productName: "Control Flow",
    productNameAr: "Control Flow",
    rating: 5,
    date: "Il y a 3 semaines",
    title: "تأخير حقيقي للقذف وعلاقة أطول بكتير مع الزوجة",
    titleAr: "تأخير حقيقي للقذف وعلاقة أطول بكتير مع الزوجة",
    comment: "Colis 100% anonyme sans aucune mention extérieure gênante. Produit de très grande qualité : il retarde vraiment l'éjaculation sans aucun engourdissement, ce qui permet de prolonger l'acte avec ma femme et de savourer chaque moment ensemble.",
    commentAr: "طرد سري 100% بدون أي كتابة محرجة من الخارج. والأهم من هادشي أن المفعول كيبان من أول مرة: كيعطيك تأخير حقيقي ومكتساليش دغيا، وهادشي خلا العلاقة مع مراتي تطول بزاف ونستمتعو بيها بجوج بدون أي فقدان للإحساس.",
    verifiedBuyer: true,
    highlight: "تأخير القذف واستمتاع أطول"
  },
  {
    id: "rev-8",
    authorName: "Hamza L.",
    city: "Mohammedia",
    productSlug: "rovanx-vitality-60",
    productName: "Vitality Ultra",
    productNameAr: "Vitality Ultra",
    rating: 5,
    date: "Il y a 3 semaines",
    title: "Top pour les sportifs et les journées chargées",
    titleAr: "ممتاز للرياضيين وأيام العمل الشاقة",
    comment: "Je fais de la musculation 4 fois par semaine en plus d'un travail de bureau prenant. ROVANX m'aide énormément sur la vitalité générale, la concentration et la libido. Un sans faute.",
    commentAr: "كندير كمال الأجسام 4 مرات فالأسبوع مع خدمة مكتبية شاقة. روفانكس عاوني بزاف فالحيوية العامة والتركيز والنشاط. منتج متكامل يستحق 5 نجوم.",
    verifiedBuyer: true,
    highlight: "Performance & Sport"
  },
  {
    id: "rev-vit30-1",
    authorName: "Nabil S.",
    city: "Tanger",
    productSlug: "rovanx-vitality-30",
    productName: "Vitality Boost",
    productNameAr: "Vitality Boost",
    rating: 5,
    date: "Il y a 6 jours",
    title: "طاقة ونشاط طيلة اليوم بدون أي خمول",
    titleAr: "طاقة ونشاط طيلة اليوم بدون أي خمول",
    comment: "كبسولة وحدة فالفطور كافية تبعد عليك العياء د الخدمة. التركيز زاد بزاف ومبقيتش كنحس بداك الإرهاق. التوصيل كان سريع فـ طنجة والطرد مغلف مزيان.",
    commentAr: "كبسولة وحدة فالفطور كافية تبعد عليك العياء د الخدمة. التركيز زاد بزاف ومبقيتش كنحس بداك الإرهاق. التوصيل كان سريع فـ طنجة والطرد مغلف مزيان.",
    verifiedBuyer: true,
    highlight: "طاقة يومية وتركيز"
  },
  {
    id: "rev-vit30-2",
    authorName: "Othman K.",
    city: "Rabat",
    productSlug: "rovanx-vitality-30",
    productName: "Vitality Boost",
    productNameAr: "Vitality Boost",
    rating: 5,
    date: "Il y a 10 jours",
    title: "خديت علبتين والنتيجة ممتازة",
    titleAr: "خديت علبتين والنتيجة ممتازة",
    comment: "استفدت من التخفيض مع التوصيل المجاني. خدمة احترافية، اتصلو بيا لتأكيد العنوان ووصلاتني فـ 24 ساعة. مكمل نقي كيحيد السخفة تماماً.",
    commentAr: "استفدت من التخفيض مع التوصيل المجاني. خدمة احترافية، اتصلو بيا لتأكيد العنوان ووصلاتني فـ 24 ساعة. مكمل نقي كيحيد السخفة تماماً.",
    verifiedBuyer: true,
    highlight: "توصيل سريع وجودة"
  },
  {
    id: "rev-maca-1",
    authorName: "Brahim M.",
    city: "Casablanca",
    productSlug: "rovanx-maca-max",
    productName: "Royal Force",
    productNameAr: "Royal Force",
    rating: 5,
    date: "Il y a 4 jours",
    title: "قوة وتحمل عالي وفرق كبير من الأسبوع الأول",
    titleAr: "قوة وتحمل عالي وفرق كبير من الأسبوع الأول",
    comment: "الماكا البيروفية والتريبولوس فهاد المنتج جودتهم عالية بزاف. كنحس بطاقة قوية وقدرة بدنية مضاعفة فالنهار. الطرد وصل مسدود ومحكم وفحصتو قبل ما نخلص الموزع.",
    commentAr: "الماكا البيروفية والتريبولوس فهاد المنتج جودتهم عالية بزاف. كنحس بطاقة قوية وقدرة بدنية مضاعفة فالنهار. الطرد وصل مسدود ومحكم وفحصتو قبل ما نخلص الموزع.",
    verifiedBuyer: true,
    highlight: "قوة وتحمل طبيعي"
  },
  {
    id: "rev-maca-2",
    authorName: "Samir T.",
    city: "Marrakech",
    productSlug: "rovanx-men-pack",
    productName: "Men Pack",
    productNameAr: "Men Pack",
    rating: 5,
    date: "Il y a 8 jours",
    title: "منتج أصلي يستحق كل درهم، سرية تامة",
    titleAr: "منتج أصلي يستحق كل درهم، سرية تامة",
    comment: "هادي أحسن تركيبة جربتها، خديت Men Pack. الحيوية والثقة رجعات 100%. التغليف سري ومحترم بدون أي كتابة محرجة، وهادي نقطة كنشكر عليها روفانكس بزاف.",
    commentAr: "هادي أحسن تركيبة جربتها، خديت Men Pack. الحيوية والثقة رجعات 100%. التغليف سري ومحترم بدون أي كتابة محرجة، وهادي نقطة كنشكر عليها روفانكس بزاف.",
    verifiedBuyer: true,
    highlight: "سرية تامة وفعالية"
  },
  {
    id: "rev-gin-1",
    authorName: "Adil R.",
    city: "Fès",
    productSlug: "rovanx-ginseng",
    productName: "Testo Drive",
    productNameAr: "Testo Drive",
    rating: 5,
    date: "Il y a 5 jours",
    title: "نشاط وقوة بدنية كتحس بيها من الصباح",
    titleAr: "نشاط وقوة بدنية كتحس بيها من الصباح",
    comment: "الجينسينغ الأحمر الكوري عندو مفعول قوي على التركيز والمناعة والنشاط البدني. خديتو باش نعاون راسي ففترة ضغط الخدمة وعطاني نتيجة مبهرة.",
    commentAr: "الجينسينغ الأحمر الكوري عندو مفعول قوي على التركيز والمناعة والنشاط البدني. خديتو باش نعاون راسي ففترة ضغط الخدمة وعطاني نتيجة مبهرة.",
    verifiedBuyer: true,
    highlight: "مقاومة الإجهاد والنشاط"
  },
  {
    id: "rev-gin-2",
    authorName: "Kamal F.",
    city: "Kenitra",
    productSlug: "rovanx-men-plus-pack",
    productName: "Men Plus Pack",
    productNameAr: "Men Plus Pack",
    rating: 5,
    date: "Il y a 12 jours",
    title: "الباك الملكي بتخفيض ممتاز وتوصيل مجاني",
    titleAr: "الباك الملكي بتخفيض ممتاز وتوصيل مجاني",
    comment: "طلبت Men Plus Pack وفرت 200 درهم، وصلني الطرد فقنيطرة فـ 48 ساعة. منتج طبيعي 100% بدون أي خفقان أو أضرار جانبية. شكراً روفانكس.",
    commentAr: "طلبت Men Plus Pack وفرت 200 درهم، وصلني الطرد فقنيطرة فـ 48 ساعة. منتج طبيعي 100% بدون أي خفقان أو أضرار جانبية. شكراً روفانكس.",
    verifiedBuyer: true,
    highlight: "توفير وجودة ممتازة"
  },
  {
    id: "rev-oil-2",
    authorName: "Anas C.",
    city: "Casablanca",
    productSlug: "rovanx-pack-puissance",
    productName: "Pack Puissance & Contrôle",
    productNameAr: "Pack Puissance & Contrôle",
    rating: 5,
    date: "Il y a 4 jours",
    title: "تحكم كامل وتأخير القذف.. ولينا كنستمتعو بالعلاقة بجوج",
    titleAr: "تحكم كامل وتأخير القذف.. ولينا كنستمتعو بالعلاقة بجوج",
    comment: "طلبت Pack Puissance & Contrôle. الزيت طبيعي برائحة القرنفل الزكية وكبسولات Vitality Ultra كتعطي صلابة حديدية. كيعطي تحكم ممتاز وكيأخر القذف بزاف باش متساليش دغيا، وبدون أي تخدير مزعج. الزوجة ديالي فرحانة بزاف بالتغيير والتغليف سري ومحكم.",
    commentAr: "طلبت Pack Puissance & Contrôle. الزيت طبيعي برائحة القرنفل الزكية وكبسولات Vitality Ultra كتعطي صلابة حديدية. كيعطي تحكم ممتاز وكيأخر القذف بزاف باش متساليش دغيا، وبدون أي تخدير مزعج. الزوجة ديالي فرحانة بزاف بالتغيير والتغليف سري ومحكم.",
    verifiedBuyer: true,
    highlight: "تحكم وتأخير ممتع"
  },
  {
    id: "rev-oil-3",
    authorName: "Yassine E.",
    city: "Agadir",
    productSlug: "rovanx-control-oil",
    productName: "Control Flow",
    productNameAr: "Control Flow",
    rating: 5,
    date: "Il y a 10 jours",
    title: "منتج فعال جداً وفحصت العلبة قبل الدفع",
    titleAr: "منتج فعال جداً وفحصت العلبة قبل الدفع",
    comment: "أهم حاجة أنك كتفحص الطرد قبل ما تخلص الموزع. القطارة دقيقة والزيت نقي وساهل فالمساج. النتيجة كتبان فوراً وكتعطيك ثقة كبيرة.",
    commentAr: "أهم حاجة أنك كتفحص الطرد قبل ما تخلص الموزع. القطارة دقيقة والزيت نقي وساهل فالمساج. النتيجة كتبان فوراً وكتعطيك ثقة كبيرة.",
    verifiedBuyer: true,
    highlight: "معاينة قبل الدفع"
  },
  {
    id: "rev-prot-1",
    authorName: "Reda D.",
    city: "Rabat",
    productSlug: "rovanx-vital-protein",
    productName: "Vital Protein",
    productNameAr: "Vital Protein",
    rating: 5,
    date: "Il y a 5 jours",
    title: "فرق واضح فالحجم والسمك وصلابة كتحس بيها الزوجة",
    titleAr: "فرق واضح فالحجم والسمك وصلابة كتحس بيها الزوجة",
    comment: "المزيج ديال البروتين والماكا و L-Arginine عطى مفعول خيالي. حسيت بتدفق دم قوي وزيادة ملحوظة فالحجم والسمك وصلابة حديدية، وهادشي خلا الزوجة ديالي تفرح بزاف وتعيشو علاقة ممتعة. منتج ممتاز يستاهل كل درهم.",
    commentAr: "المزيج ديال البروتين والماكا و L-Arginine عطى مفعول خيالي. حسيت بتدفق دم قوي وزيادة ملحوظة فالحجم والسمك وصلابة حديدية، وهادشي خلا الزوجة ديالي تفرح بزاف وتعيشو علاقة ممتعة. منتج ممتاز يستاهل كل درهم.",
    verifiedBuyer: true,
    highlight: "زيادة الحجم والصلابة"
  },
  {
    id: "rev-prot-2",
    authorName: "Said M.",
    city: "Casablanca",
    productSlug: "rovanx-vital-protein",
    productName: "Vital Protein",
    productNameAr: "Vital Protein",
    rating: 5,
    date: "Il y a 9 jours",
    title: "طاقة متواصلة باش تمتع الزوجة ديالك بدون أي عياء",
    titleAr: "طاقة متواصلة باش تمتع الزوجة ديالك بدون أي عياء",
    comment: "كيحيد السخفة تماماً وكيخليك نشيط وفورمة عالية. العلاقة ولات كطول بكتير ونستمتعو بيها بجوج، وخفيف بزاف فالهضم بدون أي انتفاخ. طلبت عبوات وصلوني فـ 24 ساعة فكازا وفحصت العلبة قبل الخلاص.",
    commentAr: "كيحيد السخفة تماماً وكيخليك نشيط وفورمة عالية. العلاقة ولات كطول بكتير ونستمتعو بيها بجوج، وخفيف بزاف فالهضم بدون أي انتفاخ. طلبت عبوات وصلوني فـ 24 ساعة فكازا وفحصت العلبة قبل الخلاص.",
    verifiedBuyer: true,
    highlight: "طاقة ومتعة حميمية"
  },
  {
    id: "rev-prot-3",
    authorName: "Hicham K.",
    city: "Marrakech",
    productSlug: "rovanx-vital-protein",
    productName: "Vital Protein",
    productNameAr: "Vital Protein",
    rating: 5,
    date: "Il y a 12 jours",
    title: "ثقة بالنفس وسعادة زوجية حقيقية",
    titleAr: "ثقة بالنفس وسعادة زوجية حقيقية",
    comment: "من بعد أسبوعين حسيت بفرق كبير فالحجم وامتلاء الأنسجة، والزوجة ديالي لاحظات التغيير من أول لقاء. راحة بال وسرية تامة فالتوصيل لباب الدار.",
    commentAr: "من بعد أسبوعين حسيت بفرق كبير فالحجم وامتلاء الأنسجة، والزوجة ديالي لاحظات التغيير من أول لقاء. راحة بال وسرية تامة فالتوصيل لباب الدار.",
    verifiedBuyer: true,
    highlight: "نتيجة وسعادة للزوجين"
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
