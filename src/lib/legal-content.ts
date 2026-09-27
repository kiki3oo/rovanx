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
    badgeFr: "Réponses Rapides",
    badgeAr: "إجابات فورية",
    contentFr: [
      {
        heading: "Comment puis-je passer commande ?",
        text: "Il vous suffit de choisir votre produit ou pack, d'entrer votre nom, numéro de téléphone et ville sur notre formulaire, puis de cliquer sur 'Commander'. Aucun compte ni carte bancaire n'est requis."
      },
      {
        heading: "Quand vais-je recevoir ma commande ?",
        text: "Après notre appel de confirmation, votre colis est expédié et livré sous 24 à 48 heures ouvrables selon votre ville de résidence."
      },
      {
        heading: "Les produits ROVANX sont-ils naturels ?",
        text: "Oui, nos formules associent des extraits naturels de plantes réputées (Maca, Ginseng, Minéraux essentiels comme le Zinc et le Magnésium) rigoureusement sélectionnés pour l'équilibre et la vitalité masculine."
      },
      {
        heading: "Puis-je ouvrir mon colis avant de payer ?",
        text: "Absolument. Nos partenaires livreurs vous permettent de vérifier l'intégrité extérieure de votre colis avant d'effectuer le règlement."
      }
    ],
    contentAr: [
      {
        heading: "كيف يمكنني تسجيل الطلب؟",
        text: "يكفيك اختيار المنتج أو الباقة، إدخال اسمك ورقم هاتفك ومدينتك في استمارة الطلب والضغط على تأكيد. لا حاجة لإنشاء حساب أو إدخال بطاقة بنكية."
      },
      {
        heading: "متى سأستلم طلبي؟",
        text: "بعد مكالمة التأكيد الهاتفية من فريقنا، يتم تسليم الطرد خلال 24 إلى 48 ساعة كحد أقصى حسب مدينتك."
      },
      {
        heading: "هل منتجات ROVANX طبيعية وآمنة؟",
        text: "نعم، تركيباتنا تحتوي على خلاصات طبيعية مدروسة (مثل جذور الماكا، الجينسنغ، الزنك، والمغنيسيوم) الموجهة لدعم النشاط والحيوية اليومية للرجل."
      },
      {
        heading: "هل يمكنني فحص الطرد قبل الأداء؟",
        text: "بكل تأكيد. يمكنك تفقد الطرد والتأكد من سلامته قبل تسليم المبلغ للموزع."
      }
    ]
  },

  about: {
    titleFr: "À Propos de ROVANX",
    titleAr: "من نحن - علامة ROVANX",
    badgeFr: "L'Excellence Masculine",
    badgeAr: "العناية بحيوية الرجل",
    contentFr: [
      {
        heading: "Notre Mission",
        text: "ROVANX est une marque marocaine haut de gamme dédiée à la santé, l'énergie et la vitalité masculine. Nous concevons des solutions complètes et accessibles pour accompagner les hommes dans leur quotidien, renforcer leur confiance et préserver leur équilibre physique et mental."
      },
      {
        heading: "La Qualité au cœur de notre démarche",
        text: "Chaque formule ROVANX s'appuie sur une sélection rigoureuse d'ingrédients actifs reconnus pour leur efficacité, formulés selon les normes les plus strictes de sécurité et d'hygiène."
      },
      {
        heading: "Un service proche de vous",
        text: "Nous croyons en une expérience d'achat fluide, discrète et respectueuse, avec un accompagnement personnalisé et une livraison rapide partout dans le Royaume."
      }
    ],
    contentAr: [
      {
        heading: "رسالتنا",
        text: "ROVANX هي علامة مغربية متميزة متخصصة في صحة، نشاط وحيوية الرجل. نبتكر حلولاً متكاملة ترافق الرجل في روتينه اليومي، لتعزيز طاقته وثقته وحيويته الجسدية والذهنية."
      },
      {
        heading: "الجودة أولويتنا القصوى",
        text: "تعتمد تركيبات ROVANX على مكونات طبيعية منتقاة بعناية فائقة ومعروفة بفعاليتها العالية، مع الالتزام بأعلى معايير السلامة والجودة."
      },
      {
        heading: "خدمة قريبة منكم وفي غاية السرية",
        text: "نلتزم بتوفير تجربة تسوق سلسة وآمنة، مع احترام تام للخصوصية وتوصيل سريع وموثوق في كافة المدن المغربية."
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
