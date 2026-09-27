export type LegalSection = {
  titleFr: string;
  titleAr: string;
  badgeFr: string;
  badgeAr: string;
  contentFr: Array<{ heading?: string; text: string }>;
  contentAr: Array<{ heading?: string; text: string }>;
};

export const legalContent: Record<string, LegalSection> = {
  shipping: {
    titleFr: "Politique de Livraison & Expédition",
    titleAr: "سياسة الشحن والتوصيل",
    badgeFr: "Livraison Partout au Maroc",
    badgeAr: "توصيل لجميع المدن المغربية",
    contentFr: [
      {
        heading: "1. Délais et zones de livraison",
        text: "ROVANX assure la livraison de ses commandes partout au Maroc. Nos délais habituels sont de 24 heures pour les grandes villes (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir...) et de 48 heures pour les autres régions et zones périphériques."
      },
      {
        heading: "2. Paiement à la livraison (Cash on Delivery)",
        text: "Toutes nos commandes s'effectuent avec paiement en espèces à la livraison. Vous ne payez aucun dirham à l'avance sur internet. Le montant exact de votre commande est remis directement au livreur lors de la réception de votre colis."
      },
      {
        heading: "3. Discrétion et emballage scellé",
        text: "Nous accordons une importance primordiale à votre vie privée. Tous nos colis sont expédiés dans des emballages neutres, entièrement scellés, sans aucune mention du contenu sur l'extérieur du colis."
      },
      {
        heading: "4. Confirmation téléphonique préalable",
        text: "Dès réception de votre commande sur le site, notre équipe vous contacte par téléphone ou via WhatsApp pour confirmer avec vous l'adresse exacte et convenir du créneau de livraison qui vous convient avant tout envoi."
      }
    ],
    contentAr: [
      {
        heading: "1. مدة ومناطق التوصيل",
        text: "توفر علامة ROVANX خدمة التوصيل السريع لجميع ربوع المملكة المغربية. يستغرق التوصيل عادة 24 ساعة للمدن الكبرى (الدار البيضاء، الرباط، مراكش، طنجة، فاس، أكادير...) و48 ساعة لباقي المدن والمناطق."
      },
      {
        heading: "2. الدفع عند الاستلام (COD)",
        text: "جميع الطلبات تتم بخاصية الدفع نقداً عند الاستلام. لن يطلب منك دفع أي درهم عبر الإنترنت. يتم تسليم المبلغ لموزع التوصيل فقط عند استلام طردك."
      },
      {
        heading: "3. تغليف سري ومحكم",
        text: "نحرص التزاماً تاماً على سرية وخصوصية زبنائنا. جميع الطرود ترسل في علب كرتونية محكمة ومغلقة دون أي إشارة إلى نوعية المنتج في الخارج."
      },
      {
        heading: "4. تأكيد الطلب هاتفياً",
        text: "فور تسجيل طلبكم عبر الموقع، يتصل بكم مستشار من فريقنا لتأكيد العنوان وتحديد موعد التسليم الأنسب لكم قبل شحن الطرد."
      }
    ]
  },

  returns: {
    titleFr: "Politique de Retour & Remboursement",
    titleAr: "سياسة الاستبدال والاسترجاع",
    badgeFr: "Garantie Sérénité",
    badgeAr: "ضمان الرضا والثقة",
    contentFr: [
      {
        heading: "1. Droit d'échange sous 14 jours",
        text: "Conformément à nos engagements de qualité, vous disposez d'un délai de 14 jours à compter de la réception de votre commande pour demander un échange ou un retour en cas de non-conformité."
      },
      {
        heading: "2. Conditions d'acceptation des retours",
        text: "Pour des raisons évidentes d'hygiène et de sécurité sanitaire liées aux compléments alimentaires, seuls les produits dans leur état d'origine, non ouverts, munis de leur opercule de scellé intact peuvent faire l'objet d'un retour."
      },
      {
        heading: "3. Procédure simple via WhatsApp",
        text: "Pour initier une demande, contactez simplement notre service client avec votre numéro de référence de commande. Notre équipe prendra en charge votre demande sous 24h."
      }
    ],
    contentAr: [
      {
        heading: "1. حق الاستبدال خلال 14 يوماً",
        text: "التزاماً منا بأعلى معايير الجودة، نتيح لكم إمكانية طلب استبدال أو إرجاع المنتج خلال 14 يوماً من تاريخ استلام الطلب في حال وجود أي ملاحظة."
      },
      {
        heading: "2. شروط قبول الإرجاع",
        text: "نظراً لطبيعة المكملات الغذائية وحرصاً على السلامة الصحية، يجب أن يكون المنتج في حالته الأصلية المغلقة وبختم الأمان الأصلي دون فتح."
      },
      {
        heading: "3. خطوات سهلة عبر واتساب",
        text: "كل ما عليك هو التواصل مع خدمة الزبناء مع تزويدنا برقم طلبك، وسيتكفل فريقنا بمعالجة طلبك خلال 24 ساعة."
      }
    ]
  },

  faq: {
    titleFr: "Foire Aux Questions (FAQ)",
    titleAr: "الأسئلة الشائعة",
    badgeFr: "Réponses Rapides & Claires",
    badgeAr: "إجابات واضحة وسريعة",
    contentFr: [
      {
        heading: "1. Comment puis-je passer commande ?",
        text: "Il vous suffit de sélectionner votre produit ou pack, de renseigner votre nom, votre numéro de téléphone et votre ville sur notre formulaire, puis de cliquer sur 'Commander'. Vous n'avez besoin d'aucun compte ni de carte bancaire."
      },
      {
        heading: "2. Quand et comment vais-je recevoir ma commande ?",
        text: "Dès réception de votre commande, notre service client vous appelle pour confirmer votre adresse et vos disponibilités. La livraison s'effectue sous 24h pour les grandes villes (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir...) et sous 48h pour les autres localités."
      },
      {
        heading: "3. Comment se passe le paiement ?",
        text: "Le paiement s'effectue intégralement en espèces lors de la livraison (Cash on Delivery). Vous ne payez rien à l'avance en ligne. Vous réglez directement le livreur au moment où il vous remet votre colis en main propre."
      },
      {
        heading: "4. Puis-je vérifier mon colis avant de payer ?",
        text: "Oui, absolument. Nos partenaires livreurs vous permettent de vérifier l'intégrité de votre colis scellé avant d'effectuer le paiement en toute sérénité."
      },
      {
        heading: "5. Les produits ROVANX sont-ils naturels et sûrs ?",
        text: "Oui. Nos formules sont développées à base d'extraits naturels concentrés reconnus pour la santé et la vitalité masculine (Maca péruvienne, Panax Ginseng, Zinc chélaté, Magnésium biodisponible, Saw Palmetto). Tous nos ingrédients respectent scrupuleusement les normes de pureté et d'innocuité."
      },
      {
        heading: "6. Comment utiliser les compléments pour une efficacité optimale ?",
        text: "La posologie recommandée est détaillée sur chaque boîte (généralement 1 à 2 gélules par jour avec un grand verre d'eau au cours d'un repas). Pour ressentir pleinement les bénéfices sur la vitalité et l'endurance, nous conseillons une cure régulière de 30 à 60 jours."
      },
      {
        heading: "7. La livraison est-elle discrète ?",
        text: "La discrétion est garantie à 100%. Votre commande est expédiée dans un colis neutre, rigoureusement scellé, sans aucun logo extérieur ni mention du contenu."
      },
      {
        heading: "8. Comment contacter le support en cas de question ?",
        text: "Notre équipe est joignable directement par WhatsApp et par téléphone 6 jours sur 7 pour vous conseiller, suivre votre colis ou répondre à vos interrogations avant et après votre commande."
      }
    ],
    contentAr: [
      {
        heading: "1. كيفاش نقدر ندوز الطلب ديالي؟",
        text: "الأمر سهل جداً وبسيط: كتختار المنتج أو الباقة اللي بغيتي، كتعمر الاسم ورقم الهاتف والمدينة فـ الاستمارة وكتكليكي على 'تأكيد الطلب'. ما كتحتاج لا تسجل حساب ولا تدخل بطاقة بنكية."
      },
      {
        heading: "2. فوقاش وكيفاش كيوصلني الكولي؟",
        text: "غير كتوصلنا الطلبية ديالك، كيتصل بيك مستشار من فريقنا لتأكيد العنوان وتحديد وقت التسليم المناسب ليك. كيوصلك الطرد فـ ظرف 24 ساعة فـ المدن الكبرى (الدار البيضاء، الرباط، مراكش، طنجة، فاس، أكادير...) وفـ ظرف 48 ساعة لباقي المدن والمناطق."
      },
      {
        heading: "3. كيفاش كيكون الخلاص؟",
        text: "الخلاص كيكون نقداً عند الاستلام 100% (Cash on Delivery). ما كتخلص حتى درهم عبر الإنترنت، حتى كيجيب ليك الموزع الطرد ديالك حتى لـ عند باب الدار أو مكان العمل عاد كتخلصو."
      },
      {
        heading: "4. واش نقدر نقلب الكولي قبل ما نخلص؟",
        text: "بكل تأكيد. الموزعين الشركاء ديالنا كيعطيوك الوقت باش تفحص الطرد وتتأكد من سلامة العلبة والختم الخارجي قبل ما تسلم المبلغ."
      },
      {
        heading: "5. واش منتجات ROVANX طبيعية وآمنة؟",
        text: "نعم، جميع تركيبات ROVANX مطورة بخلاصات طبيعية عالية الجودة مخصصة لصحة وحيوية الرجل (مثل جذور الماكا، الجينسنغ، الزنك، المغنيسيوم، وخلاصات البلميط المنشاري). نعتمد على مكونات نقية وآمنة تماماً للاستعمال اليومي."
      },
      {
        heading: "6. كيفاش نستعمل المنتج باش يعطيني أحسن نتيجة؟",
        text: "طريقة الاستعمال موضحة بوضوح فـ ظهر كل علبة (عادة كبسولة إلى كبسولتين يومياً مع كأس كبير من الماء مع الأكل). وللحصول على أفضل النتائج فـ النشاط والطاقة، كنصحو ببرنامج منتظم ما بين 30 إلى 60 يوماً."
      },
      {
        heading: "7. واش التوصيل كيكون سري وكيحترم الخصوصية؟",
        text: "السرية التامة مضمونة 100%. الطرد كيوصلك فـ كرطونة عادية محكمة الإغلاق، بدون أي صور أو كتابة من الخارج تبين شنو كاين لداخل."
      },
      {
        heading: "8. كيفاش نتواصل معاكم إلى كان عندي أي سؤال بعد الشراء؟",
        text: "فريق خدمة الزبناء ديالنا فـ المغرب رهن إشارتك مباشرة عبر الواتساب والمكالمات الهاتفية 6 أيام فـ الأسبوع، باش نجاوبوك على أي استفسار ونتبعو معاك طلبيتك خطوة بخطوة."
      }
    ]
  },

  about: {
    titleFr: "À Propos de ROVANX",
    titleAr: "من نحن - قصة علامة ROVANX",
    badgeFr: "L'Excellence & La Vitalité Masculine",
    badgeAr: "التميز والعناية بحيوية الرجل",
    contentFr: [
      {
        heading: "Notre Mission & Vision",
        text: "ROVANX est née d'une conviction profonde : chaque homme moderne mérite d'avoir accès à des solutions de bien-être haut de gamme, naturelles et efficaces pour soutenir son énergie, son endurance et son équilibre quotidien au Maroc. Face aux rythmes de vie exigeants et au stress, nous concevons des formules ciblées pour accompagner l'homme à chaque étape de sa vie."
      },
      {
        heading: "Nos 3 Piliers d'Excellence",
        text: "1. Ingrédients nobles & titrés : Nous sélectionnons des extraits botaniques et minéraux de premier choix (Maca, Ginseng, Minéraux chélatés) pour une biodisponibilité maximale. \n2. Sécurité & Pureté : Des procédés de fabrication rigoureux, sans additifs superflus ni substances controversées. \n3. Proximité & Discrétion : Une logistique locale ultra-rapide et un respect absolu de votre vie privée."
      },
      {
        heading: "Pourquoi choisir ROVANX au Maroc ?",
        text: "Nous combinons la puissance des meilleures plantes adaptogènes avec une compréhension fine des besoins de l'homme marocain : pas d'attente d'importation interminable, pas de paiement risqué par carte bancaire, mais un service irréprochable avec livraison express et paiement direct en dirhams à la réception."
      },
      {
        heading: "Un Engagement envers Votre Confiance",
        text: "Nous ne promettons pas de miracles éphémères, mais des solutions de fond sérieuses et scientifiquement documentées pour vous aider à retrouver votre pleine forme, votre vitalité et votre sérénité au quotidien."
      }
    ],
    contentAr: [
      {
        heading: "رسالتنا ورؤيتنا",
        text: "تأسست علامة ROVANX انطلاقاً من إيمان قوي بأن كل رجل يستحق الحصول على حلول صحية راقية، طبيعية وفعالة لمساعدته على الحفاظ على نشاطه، حيويته وتوازنه اليومي. في ظل ضغوطات العمل والحياة اليومية، نبتكر تركيبات متطورة ومدروسة ترافق الرجل في روتينه الصحي لتعزيز طاقته وثقته بنفسه."
      },
      {
        heading: "ركائز التميز لدى ROVANX",
        text: "1. مكونات طبيعية منتقاة بعناية: نعتمد على أفضل الخلاصات النباتية والمعادن الأساسية (الماكا، الجينسنغ، الزنك، المغنيسيوم) لضمان أقصى درجات الامتصاص والفعالية.\n2. السلامة والنقاء: معايير تصنيع صارمة، وخلو تام من أي مواد كيميائية ضارة أو إضافات غير ضرورية.\n3. القرب والسرية: خدمة توصيل محلية سريعة واحترام مطلق لخصوصية عملائنا الكرام."
      },
      {
        heading: "علاش تختار ROVANX فـ المغرب؟",
        text: "كنوفرو ليك الجودة العالمية فـ قلب المغرب بلا ما تسنى شهور ديال الشحن من الخارج وبلا مخاطر الأداء بالبطاقة البنكية: كتوصلك طلبيتك حتى للباب فـ ظرف 24-48 ساعة، ومغلفة بكل سرية، وكتخلص نقداً عند الاستلام بعد معاينة الطرد."
      },
      {
        heading: "التزامنا بالثقة والشفافية",
        text: "فـ ROVANX لا نبيع أوهاماً أو وعوداً سحرية غير واقعية، بل نقدم مكملات غذائية مدروسة ومبنية على خلاصات معروفة عالمياً بفوائدها في دعم النشاط، مقاومة الإرهاق وتعزيز حيوية الرجل بشكل مستدام."
      }
    ]
  },

  contact: {
    titleFr: "Contactez le Service Client",
    titleAr: "اتصل بنا",
    badgeFr: "À Votre Écoute",
    badgeAr: "فريقنا في خدمتكم",
    contentFr: [
      {
        heading: "Assistance Téléphonique & WhatsApp",
        text: "Notre équipe de conseillers est à votre disposition du Lundi au Samedi de 9h00 à 19h00 pour répondre à toutes vos questions sur nos produits et le suivi de vos commandes."
      },
      {
        heading: "Canaux de communication",
        text: "WhatsApp officiel : Disponible 6j/7 pour un échange direct et discret. Email : contact@rovanx.com pour toute demande administrative ou partenariat."
      }
    ],
    contentAr: [
      {
        heading: "خدمة الزبناء عبر الهاتف وواتساب",
        text: "فريق مستشارينا رهن إشارتكم من الإثنين إلى السبت من الساعة 9:00 صباحاً إلى 19:00 مساءً للإجابة على جميع تساؤلاتكم ومتابعة طلبياتكم."
      },
      {
        heading: "قنوات التواصل المباشرة",
        text: "واتساب الرسمي: متاح طيلة أيام الأسبوع للتواصل السريع والمباشر. البريد الإلكتروني: contact@rovanx.com لجميع الاستفسارات والشراكات."
      }
    ]
  },

  privacy: {
    titleFr: "Politique de Confidentialité",
    titleAr: "سياسة الخصوصية وحماية البيانات",
    badgeFr: "Données Protégées",
    badgeAr: "حماية تامة للبيانات",
    contentFr: [
      {
        heading: "Protection des données personnelles",
        text: "Les informations collectées lors de votre commande (nom, téléphone, adresse) sont strictement utilisées pour le traitement et la livraison de votre colis. Elles ne sont en aucun cas cédées, vendues ou partagées avec des tiers non autorisés."
      },
      {
        heading: "Sécurité de vos informations",
        text: "Nous appliquons des mesures de sécurité techniques et organisationnelles rigoureuses pour préserver la confidentialité de vos données conformément aux normes en vigueur au Maroc."
      }
    ],
    contentAr: [
      {
        heading: "حماية المعطيات الشخصية",
        text: "المعلومات المقدمة عند الطلب (الاسم، رقم الهاتف، العنوان) تُستخدم حصرياً لمعالجة وإيصال طردكم، ولا يتم بأي شكل من الأشكال بيعها أو مشاركتها مع أي جهة خارجية غير مخولة."
      },
      {
        heading: "أمان وسرية بياناتكم",
        text: "نعتمد بروتوكولات حماية متطورة لضمان أمن وسرية معطياتكم وفق القوانين والتشريعات المعمول بها في المغرب."
      }
    ]
  },

  terms: {
    titleFr: "Conditions Générales de Vente",
    titleAr: "الشروط العامة للبيع",
    badgeFr: "Cadre Juridique",
    badgeAr: "الإطار القانوني والتجاري",
    contentFr: [
      {
        heading: "Dispositions générales",
        text: "Les présentes conditions générales régissent les ventes de produits proposées sur la boutique en ligne ROVANX. Toute commande validée sur le site implique l'adhésion entière du client aux présentes conditions."
      },
      {
        heading: "Prix et modalités de règlement",
        text: "Les prix sont indiqués en Dirhams marocains (MAD) toutes taxes comprises. Le paiement s'effectue exclusivement en espèces lors de la livraison physique du colis."
      }
    ],
    contentAr: [
      {
        heading: "أحكام عامة",
        text: "تحدد هذه الشروط القواعد المنظمة لعمليات الشراء عبر متجر ROVANX. يعتبر تأكيد الطلب موافقة صريحة على بنود الشراء والتوصيل."
      },
      {
        heading: "الأسعار وطرق الأداء",
        text: "الأسعار محددة بالدرهم المغربي (MAD) شاملة لكافة الرسوم. يتم الأداء حصرياً نقداً عند استلام الطرد من الموزع."
      }
    ]
  },

  cookies: {
    titleFr: "Politique des Cookies",
    titleAr: "سياسة ملفات تعريف الارتباط (Cookies)",
    badgeFr: "Gestion des Cookies",
    badgeAr: "إدارة الكوكيز",
    contentFr: [
      {
        heading: "Utilisation des cookies",
        text: "Notre site utilise des cookies techniques nécessaires au bon fonctionnement de votre panier d'achat et à la mémorisation de vos préférences linguistiques (Arabe/Français)."
      }
    ],
    contentAr: [
      {
        heading: "استخدام ملفات تعريف الارتباط",
        text: "يستخدم موقعنا ملفات تعريف ارتباط فنية ضرورية لتشغيل سلة المشتريات وحفظ تفضيلات اللغة المختارة لتسهيل التصفح."
      }
    ]
  }
};
