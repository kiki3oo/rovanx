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
    name: "Vitality Ultra",
    badge: "60 capsules",
    tagline: "صلابة حديدية، زيادة ملحوظة في الحجم والسمك، واستمرارية فائقة لإسعاد زوجتك",
    shortDescription:
      "التركيبة الطبيعية المطورة الأقوى لتعزيز تدفق الدم وتوسيع الأنسجة الكهفية، منحك انتصاباً صخرياً وضخامة تحس بها الزوجة فوراً، مع تحكم كامل في القذف لتمديد وقت العلاقة وعيش أسعد اللحظات الحميمية.",
    benefits: [
      "انتصاب كامل وصلابة حديدية مع زيادة ملحوظة في السمك والطول (ضخامة تحس بها الزوجة فوراً).",
      "تحكم فائق وتأخير طبيعي للقذف لإطالة مدة العلاقة لأكثر من 30 إلى 45 دقيقة بدون تعب.",
      "توسيع الغرف الإسفنجية في أنسجة القضيب لاستيعاب تدفق دموي كثيف يمنح امتلاءً وضخامة دائمة.",
      "طاقة ورغبة متجددة مع سرعة استرجاع لممارسة العلاقة أكثر من مرة في نفس الليلة.",
      "تركيبة نباتية أصلية 100% (جينسينغ أحمر + تونغكات علي + ماكا + L-Arginine + زنك) بدون صداع أو خفقان قلب.",
      "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق المعاينة قبل الدفع."
    ],
    ingredients:
      "مستخلصات الجينسينغ الأحمر الكوري المعتق، التونغكات علي الماليزي، الماكا البيروفية، L-Arginine والتورين، غلوكونات الزنك العضوي، حبوب لقاح النخيل، غذاء الملكات، بروبوليس، فيتامينات B3 و B10 وسترات المغنيسيوم. تركيبة نباتية 100% نقية بدون أي إضافات كيميائية ضارة.",
    usageInstructions:
      "تناول كبسولة إلى كبسولتين يومياً بعد الوجبة مع كأس كبير من الماء. وفي أيام اللقاء، يمكنك تناول كبسولتين قبل العلاقة بساعة واحدة. يُفضل الاستمرار على كورس شهرين إلى 3 أشهر لثبات تمدد الأنسجة الدائم.",
    warnings:
      "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي لا يغني عن تغذية متوازنة. في حال تناول أدوية مزمنة، يُفضل استشارة الطبيب.",
    regulatoryInformation:
      "هذا المكمل الغذائي مركب من خلاصات نباتية طبيعية ومغذيات حيوية 100% وليس دواءً كيميائياً. لا يُستخدم لتشخيص أو علاج الأمراض بشكل منفرد، بل يدعم الأداء والنشاط الفسيولوجي الطبيعي للرجل."
  },
  "rovanx-vitality-30": {
    name: "Vitality Boost",
    badge: "30 capsules",
    tagline: "طاقة متدفقة، صفاء ذهني، وقوة تحمل تدوم طوال اليوم بدون إجهاد",
    shortDescription:
      "تركيبة طبيعية مركزة تجمع بين الماكا البيروفية، الجينسينغ الأحمر الكوري، والتريبولوس لمحاربة التعب والإرهاق اليومي، تعزيز اللياقة البدنية والذهنية، واستعادة الحيوية الذكورية بدون أي منبهات صناعية.",
    benefits: [
      "طاقة نظيفة ومستقرة من الصباح للمساء بدون هبوط مفاجئ أو سخفة بعد الغداء.",
      "محاربة قاطعة للكسل الصباحي والإرهاق المزمن والشعور بالثقل في الجسم.",
      "زيادة ملحوظة في التركيز الذهني والإنتاجية وسرعة اتخاذ القرارات في العمل.",
      "دعم القوة العضلية والقدرة على التحمل واللياقة البدنية والذكورية.",
      "تركيبة نباتية 100% نقية (ماكا + جينسينغ + تريبولوس + زنك + فيتامين ب) آمنة تماماً وبدون أي آثار جانبية.",
      "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق المعاينة قبل الدفع."
    ],
    ingredients:
      "مستخلصات الماكا البيروفية النقية، الجينسينغ الأحمر الكوري المعتق، التريبولوس، غلوكونات الزنك العضوي، فيتامينات B6 و B12، ومغنيسيوم بحري نقي. كبسولات نباتية 100% خالية من الكافيين الصناعي والمواد الحافظة.",
    usageInstructions:
      "تناول كبسولة إلى كبسولتين يومياً في الصباح بعد وجبة الإفطار مع كأس كبير من الماء. يُفضل الاستمرار على كورس شهرين إلى 3 أشهر لتثبيت مستويات الطاقة والنشاط الدائم.",
    warnings:
      "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي لا يغني عن تغذية متوازنة. في حال تناول أدوية مزمنة، يُفضل استشارة الطبيب.",
    regulatoryInformation:
      "هذا المكمل الغذائي مركب من خلاصات نباتية طبيعية وفيتامينات عضوية 100% وليس دواءً كيميائياً. لا يُستخدم لتشخيص أو علاج الأمراض بشكل منفرد، بل يدعم طاقة ونشاط الجسم الطبيعي."
  },
  "rovanx-prostate": {
    name: "Prosta Guard",
    badge: "120 ml",
    tagline: "ودّع الاستيقاظ الليلي وصعوبة التبول واسترجع راحة نومك وحيويتك",
    shortDescription:
      "تركيبة طبيعية سائلة متطورة مخصصة لدعم صحة البروستاتا والتخلص من تكرار التبول وضعف التدفق. تمنحك نوماً هادئاً متواصلاً وتدفقاً مريحاً وسلساً بدون أي مواد كيميائية وبدون آثار جانبية.",
    benefits: [
      "نوم هادئ ومتواصل طوال الليل مع تقليل الاستيقاظ المتكرر للتبول من الأسبوع الأول.",
      "تدفق بولي طبيعي وسلس وقوي بدون تقطيع، حصر، أو تقطير مزعج في النهاية.",
      "إفراغ مريح وتام للمثانة مع إحساس فوري بالخفة والراحة في منطقة الحوض وأسفل البطن.",
      "صيغة سائلة مركزة (120 مل) سريعة الامتصاص المباشر تعطي مفعولاً أسرع بـ 3 مرات من الكبسولات الجافة.",
      "تركيبة نباتية أصلية 100% (Saw Palmetto، بيجيوم، زيت القرع، زنك، ليكوبين) آمنة تماماً وبدون أي آثار جانبية.",
      "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق فحص ومعاينة الطرد قبل الدفع."
    ],
    ingredients:
      "مستخلصات توت البلميط المنشاري النقي (Saw Palmetto)، لحاء الخوخ الأفريقي (Pygeum Africanum)، زيت بذور القرع المعصور على البارد، ليكوبين طبيعي فائق الفعالية، غلوكونات الزنك العضوي عالي الامتصاص. تركيبة نباتية 100% خالية من أي إضافات كيميائية ضارة.",
    usageInstructions:
      "تناول 5 مل يومياً باستخدام غطاء القياس المرفق بعد وجبة الإفطار أو الغداء مع كأس كبير من الماء. رُجّ العبوة جيداً قبل الاستعمال. يُفضل المواظبة على كورس شهرين إلى 3 أشهر لثبات النتائج ووقاية مستمرة.",
    warnings:
      "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي لا يغني عن نظام غذائي متوازن. في حال وجود حالة طبية خاصة أو تناول أدوية مزمنة، يُنصح باستشارة الطبيب.",
    regulatoryInformation:
      "هذا المكمل الغذائي مركب من خلاصات نباتية طبيعية 100% وليس دواءً كيميائياً. لا يُستخدم لتشخيص أو منع الأمراض بشكل منفرد، بل يدعم التوازن الفسيولوجي الطبيعي للبروستاتا والمسالك البولية."
  },
  "rovanx-maca-max": {
    name: "Royal Force",
    badge: "30 capsules",
    tagline: "Complément alimentaire pour hommes",
    shortDescription:
      "Une formule concentrée pour stimuler la puissance, l'endurance et l'énergie masculine au quotidien. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    benefits: [
      "Format de 30 capsules.",
      "Conseils d'utilisation : 1 à 2 capsules par jour, après le repas, avec un verre d'eau."
    ],
    ingredients:
      "Extrait concentré de racine de Maca, extrait de Tribulus Terrestris, extrait de Ginseng rouge, gluconate de zinc, vitamines B6 et B12. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Prendre 1 à 2 capsules par jour, après le repas, avec un verre d'eau. Respectez les indications figurant sur l'emballage.",
    warnings:
      "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. En cas de grossesse, d'allaitement, de maladie ou de traitement médical, demandez conseil à un professionnel de santé.",
    regulatoryInformation:
      "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie."
  },
  "rovanx-ginseng": {
    name: "Testo Drive",
    badge: "30 capsules",
    tagline: "تحفيز التستوستيرون الطبيعي، قوة عضلية وذهنية خارقة، ومقاومة تامة للإجهاد",
    shortDescription:
      "تركيبة نخبوية متطورة تجمع بين الجينسينغ الأحمر الكوري المعتق (6 سنوات) وعشبة الروديولا المتكيفة والزنك العضوي لرفع مستويات التستوستيرون الطبيعي، القضاء على التوتر والإرهاق، واستعادة القوة والدافع الفحولي للرجال.",
    benefits: [
      "تحفيز قوي لإفراز هرمون التستوستيرون الحر الطبيعي بدون أي هرمونات صناعية.",
      "طاقة عضلية وبدنية متفجرة ومقاومة فائقة للإجهاد وضغوطات العمل اليومية.",
      "تخفيض هرمون التوتر (الكورتيزول) بفضل عشبة الروديولا المتكيفة لصفاء ذهني وهدوء تام.",
      "استعادة الرغبة الحميمية المتوهجة والفحولة والثقة الذكورية الكاملة.",
      "تركيبة نباتية أصلية 100% (جينسينغ أحمر كوري 6 سنوات + روديولا + زنك + فيتامينات ب) آمنة تماماً.",
      "توصيل سريع ومجاني للباك الثنائي والثلاثي في كرتون سري ومحكم 100% مع حق المعاينة قبل الدفع."
    ],
    ingredients:
      "مستخلص الجينسينغ الأحمر الكوري المعتق 6 سنوات (Panax Ginseng)، مستخلص عشبة الروديولا الوردية النقية (Rhodiola Rosea)، غلوكونات الزنك العضوي عالي الامتصاص، فيتامينات B1 و B2 و B6. كبسولات نباتية 100% بدون أي إضافات كيميائية ضارة.",
    usageInstructions:
      "تناول كبسولة واحدة يومياً في الصباح بعد وجبة الإفطار مع كأس كبير من الماء. وفي فترات التمارين الشاقة أو الإجهاد الشديد يمكن تناول كبسولتين. يُفضل الالتزام بكورس شهرين إلى 3 أشهر لتثبيت مستويات التستوستيرون الطبيعي.",
    warnings:
      "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. مكمل غذائي طبيعي لا يغني عن تغذية متوازنة. في حال تناول أدوية مزمنة، يُفضل استشارة الطبيب.",
    regulatoryInformation:
      "هذا المكمل الغذائي مركب من خلاصات نباتية طبيعية ومغذيات حيوية 100% وليس دواءً كيميائياً. لا يُستخدم لتشخيص أو علاج الأمراض بشكل منفرد، بل يدعم التوازن الهرموني والطاقة الحيوية للرجل."
  },
  "rovanx-control-oil": {
    name: "Control Flow",
    badge: "60 ml",
    tagline: "Formule Retardante Naturelle - Control Flow",
    shortDescription:
      "Une formule d'huiles naturelles enrichie au clou de girofle et ginseng pour le confort, la maîtrise et l'endurance masculine. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    benefits: [
      "تأخير فعال للقذف والتحكم الكامل باش متجيبش البليزير ديالك دغيا وتطول فالعلاقة.",
      "علاقة حميمية طويلة وممتعة باش تستمتع نتا والزوجة ديالك وتوصلو بجوج للنشوة الكاملة.",
      "Flacon de 60 ml avec pipette compte-gouttes.",
      "Conseils d'utilisation : 3 à 5 gouttes en massage doux, 15 à 20 minutes avant le rapport."
    ],
    ingredients:
      "Huile de clou de girofle, extrait de Panax Ginseng, huile d'amande douce, extraits de plantes naturelles, acétate de vitamine E. Sans parfum synthétique. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Appliquer 3 à 5 gouttes sur la zone intime 15 à 20 minutes avant l'acte. Masser délicatement jusqu'à absorption complète. Usage externe uniquement.",
    warnings:
      "Usage externe exclusivement. Faire un test cutané avant la première utilisation. Ne pas appliquer sur une peau irritée ou présentant des lésions. Tenir hors de portée des enfants.",
    regulatoryInformation:
      "Produit cosmétique pour le bien-être masculin. Respectez les conseils d'utilisation figurant sur l'emballage."
  },
  "rovanx-vital-protein": {
    name: "Vital Protein",
    badge: "250 g",
    tagline: "Formule Énergie, Volume & Vitalité Masculine - Vital Protein",
    shortDescription:
      "Un complexe nutritif haute performance associant protéines de Whey, Maca, Ginseng et L-Arginine pour stimuler le flux sanguin, soutenir la vitalité intime et le volume.",
    benefits: [
      "ضخ قوي للدم لدعم زيادة حجم وسمك القضيب وصلابة قوية كتحس بيها الزوجة ديالك.",
      "طاقة وقوة بدنية فائقة باش تمتع الزوجة ديالك فالعلاقة الحميمية ديالكم وتعيشو متعة حقيقية.",
      "Pot de 250 g avec cuillère doseuse.",
      "Conseils d'utilisation : 1 cuillère par jour dans 200 ml d'eau ou de lait, le matin ou avant l'effort."
    ],
    ingredients:
      "Protéines de lactosérum (Whey Protein), extrait de Maca, extrait de Panax Ginseng, L-Arginine, gluconate de zinc, vitamine B12, arôme naturel. Vérifiez la composition sur l'emballage reçu.",
    usageInstructions:
      "Mélanger 1 cuillère (environ 10g) dans 200 ml d'eau fraîche, de lait ou de smoothie. Consommer une fois par jour le matin ou avant l'entraînement. Bien mélanger au shaker.",
    warnings:
      "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. Conserver dans un endroit sec et frais.",
    regulatoryInformation:
      "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie."
  }
};

export function getProductDetail(slug: string): ProductDetailInfo | null {
  return PRODUCT_DETAILS[slug] || null;
}
