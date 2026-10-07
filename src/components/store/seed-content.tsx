"use client";

import { usePreferences, type SupportedLocale } from "@/components/store/preferences-provider";

const seedTranslations: Record<string, Record<SupportedLocale, string>> = {
  "Formule Retardante Naturelle - Control Flow": {
    ar: "تأخير القذف، تحكم طبيعي واستمرارية لعلاقة زوجية طويلة وممتعة",
    fr: "Formule Retardante Naturelle - Control Flow",
    en: "Natural Climax Delay & Intimate Control - Control Flow"
  },
  "Formule Puissance & Endurance Masculine - Vitality Ultra": {
    ar: "صلابة، زيادة فالحجم واستمرارية فائقة باش تمتع الزوجة ديالك فالعلاقة الحميمية وتعيشو أسعد اللحظات",
    fr: "Formule Puissance, Volume & Endurance Masculine - Vitality Ultra",
    en: "Male Power, Volume & Intimate Stamina Formula - Vitality Ultra"
  },
  "Formule avancée Vitality Ultra pour la puissance, la fermeté et l'épanouissement intime du couple.": {
    ar: "تركيبة طبيعية فائقة القوة للصلابة وتمدد الأنسجة وزيادة الحجم والسمك، صُممت خصيصاً باش تمتع الزوجة ديالك فالعلاقة الحميمية ديالكم وتعيشو قمة المتعة والانسجام بدون أي تعب أو إحراج.",
    fr: "Formule avancée Vitality Ultra pour la puissance, la fermeté, le volume et l'épanouissement intime du couple.",
    en: "Advanced Vitality Ultra formula for stamina, firmness, volume, and couple's intimate fulfillment."
  },
  "60 capsules": { ar: "60 كبسولة", fr: "60 capsules", en: "60 capsules" },
  "Complément alimentaire pour hommes": { ar: "مكمل غذائي للرجال", fr: "Complément alimentaire pour hommes", en: "Food supplement for men" },
  "Une formule pour accompagner la vitalité masculine au quotidien. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.": {
    ar: "تركيبة لدعم الحيوية اليومية للرجال. تعرّف على المكونات وطريقة الاستعمال الموضحتين على الملصق.",
    fr: "Une formule pour accompagner la vitalité masculine au quotidien. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    en: "A formula to support men's everyday vitality. See the ingredients and directions on the label."
  },
  "Format de 60 capsules.": { ar: "عبوة تحتوي على 60 كبسولة.", fr: "Format de 60 capsules.", en: "Pack of 60 capsules." },
  "Conseils d'utilisation : 1 à 2 capsules par jour, après le repas, avec un verre d'eau.": {
    ar: "طريقة الاستعمال: كبسولة إلى كبسولتين يومياً بعد الطعام مع كوب من الماء.",
    fr: "Conseils d'utilisation : 1 à 2 capsules par jour, après le repas, avec un verre d'eau.",
    en: "Directions: 1 to 2 capsules daily after a meal with a glass of water."
  },
  "Extraits de ginseng, maca et tongkat ali, gluconate de zinc, vitamine B3, pollen de palmier, gelée royale, vitamine B10 (PABA), citrate de magnésium, taurine, L-arginine, propolis, glycérine, sorbitol, arôme miel et eau. Vérifiez la composition sur l'emballage reçu.": {
    ar: "مستخلصات الجينسنغ والماكا وتونغكات علي، غلوكونات الزنك، فيتامين ب3، حبوب لقاح النخيل، غذاء ملكات النحل، فيتامين ب10 (PABA)، سترات المغنيسيوم، تورين، إل-أرجينين، عكبر، غليسرين، سوربيتول، نكهة العسل وماء. يرجى التحقق من التركيبة على العبوة المستلمة.",
    fr: "Extraits de ginseng, maca et tongkat ali, gluconate de zinc, vitamine B3, pollen de palmier, gelée royale, vitamine B10 (PABA), citrate de magnésium, taurine, L-arginine, propolis, glycérine, sorbitol, arôme miel et eau. Vérifiez la composition sur l'emballage reçu.",
    en: "Ginseng, maca and tongkat ali extracts, zinc gluconate, vitamin B3, palm pollen, royal jelly, vitamin B10 (PABA), magnesium citrate, taurine, L-arginine, propolis, glycerin, sorbitol, honey flavor and water. Check the ingredients on the delivered package."
  },
  "Prendre 1 à 2 capsules par jour, après le repas, avec un verre d'eau. Respectez les indications figurant sur l'emballage.": {
    ar: "تؤخذ كبسولة إلى كبسولتين يومياً بعد الطعام مع كوب من الماء. يُرجى اتباع التعليمات الموجودة على العبوة.",
    fr: "Prendre 1 à 2 capsules par jour, après le repas, avec un verre d'eau. Respectez les indications figurant sur l'emballage.",
    en: "Take 1 to 2 capsules daily after a meal with a glass of water. Follow the directions on the package."
  },
  "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. En cas de grossesse, d'allaitement, de maladie ou de traitement médical, demandez conseil à un professionnel de santé.": {
    ar: "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. لا يُغني عن نظام غذائي متنوع ومتوازن. في حال الحمل أو الرضاعة أو المرض أو تناول أدوية، استشر مختصاً صحياً.",
    fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. En cas de grossesse, d'allaitement, de maladie ou de traitement médical, demandez conseil à un professionnel de santé.",
    en: "Keep out of reach of children. Do not exceed the recommended daily dose. Not a substitute for a varied, balanced diet. If pregnant, nursing, ill or taking medication, consult a healthcare professional."
  },
  "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie.": {
    ar: "هذا المكمل الغذائي ليس دواءً، ولا يُستخدم لتشخيص الأمراض أو علاجها أو الوقاية منها.",
    fr: "Ce complément alimentaire n'est pas un médicament. Il ne sert pas à diagnostiquer, traiter ou prévenir une maladie.",
    en: "This food supplement is not a medicine and is not intended to diagnose, treat or prevent disease."
  },
  "30 capsules": { ar: "30 كبسولة", fr: "30 capsules", en: "30 capsules" },
  "120 ml": { ar: "120 مل", fr: "120 ml", en: "120 ml" },
  "60 ml": { ar: "60 مل", fr: "60 ml", en: "60 ml" },
  "250 g": { ar: "250 غرام", fr: "250 g", en: "250 g" },
  "Huile naturelle pour hommes": { ar: "زيت طبيعي للرجال", fr: "Huile naturelle pour hommes", en: "Natural oil for men" },
  "Poudre nutritionnelle pour hommes": { ar: "مسحوق غذائي للرجال", fr: "Poudre nutritionnelle pour hommes", en: "Nutrition powder for men" },
  "Soutien et confort de la prostate pour hommes": { ar: "دعم صحة وراحة البروستاتا للرجال", fr: "Soutien et confort de la prostate pour hommes", en: "Prostate comfort and support for men" },
  "Format de 30 capsules.": { ar: "عبوة تحتوي على 30 كبسولة.", fr: "Format de 30 capsules.", en: "Pack of 30 capsules." },
  "Flacon de 120 ml.": { ar: "قارورة سعة 120 مل.", fr: "Flacon de 120 ml.", en: "120 ml bottle." },
  "Flacon de 60 ml avec pipette compte-gouttes.": { ar: "قارورة سعة 60 مل مع قطارة دقيقة.", fr: "Flacon de 60 ml avec pipette compte-gouttes.", en: "60 ml bottle with dropper pipette." },
  "Pot de 250 g avec cuillère doseuse.": { ar: "عبوة سعة 250 غرام مع ملعقة قياس.", fr: "Pot de 250 g avec cuillère doseuse.", en: "250 g tub with scoop." },
  "Une formule tonifiante pour accompagner la vitalité et l'endurance masculine au quotidien. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.": {
    ar: "تركيبة منشطة لدعم الحيوية والقدرة البدنية اليومية للرجال. تعرّف على المكونات وطريقة الاستعمال الموضحتين على الملصق.",
    fr: "Une formule tonifiante pour accompagner la vitalité et l'endurance masculine au quotidien. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    en: "A revitalizing formula to support men's daily stamina and vitality. See the ingredients and directions on the label."
  },
  "Extraits de maca péruvienne, ginseng rouge coréen, tribulus terrestris, gluconate de zinc, vitamines B6 et B12, magnésium marin. Gélule végétale. Vérifiez la composition sur l'emballage reçu.": {
    ar: "مستخلصات الماكا البيروفية، الجينسنغ الأحمر الكوري، التريبولوس، غلوكونات الزنك، فيتامين ب6 وب12، مغنيسيوم بحري. كبسولة نباتية. يرجى التحقق من التركيبة على العبوة المستلمة.",
    fr: "Extraits de maca péruvienne, ginseng rouge coréen, tribulus terrestris, gluconate de zinc, vitamines B6 et B12, magnésium marin. Gélule végétale. Vérifiez la composition sur l'emballage reçu.",
    en: "Peruvian maca extracts, Korean red ginseng, tribulus terrestris, zinc gluconate, vitamins B6 and B12, marine magnesium. Plant-based capsule. Check the ingredients on the delivered package."
  },
  "Une formule ciblée pour soutenir la santé de la prostate et préserver le confort urinaire masculin. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.": {
    ar: "تركيبة متخصصة لدعم صحة البروستاتا والحفاظ على راحة المسالك البولية للرجال. تعرّف على المكونات وطريقة الاستعمال الموضحتين على الملصق.",
    fr: "Une formule ciblée pour soutenir la santé de la prostate et préserver le confort urinaire masculin. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    en: "A targeted formula to support prostate health and maintain urinary comfort for men. See the ingredients and directions on the label."
  },
  "Conseils d'utilisation : 5 ml par jour avec le bouchon doseur, de préférence après le repas.": {
    ar: "طريقة الاستعمال: 5 مل يومياً باستخدام غطاء القياس، ويفضل بعد الوجبة.",
    fr: "Conseils d'utilisation : 5 ml par jour avec le bouchon doseur, de préférence après le repas.",
    en: "Directions: 5 ml daily using the measuring cap, preferably after a meal."
  },
  "Extraits de baies de Saw Palmetto, écorce de Pygeum Africanum, huile de graines de courge, lycopène, gluconate de zinc. Vérifiez la composition sur l'emballage reçu.": {
    ar: "مستخلصات توت البلميط المنشاري (Saw Palmetto)، لحاء البيجيوم الأفريقي، زيت بذور القرع، ليكوبين، غلوكونات الزنك. يرجى التحقق من التركيبة على العبوة المستلمة.",
    fr: "Extraits de baies de Saw Palmetto, écorce de Pygeum Africanum, huile de graines de courge, lycopène, gluconate de zinc. Vérifiez la composition sur l'emballage reçu.",
    en: "Saw Palmetto berry extracts, Pygeum Africanum bark, pumpkin seed oil, lycopene, zinc gluconate. Check the ingredients on the delivered package."
  },
  "Prendre 5 ml par jour à l'aide du bouchon doseur, après un repas. Agiter avant utilisation. Respectez les indications figurant sur l'emballage.": {
    ar: "تناول 5 مل يومياً باستخدام غطاء القياس، بعد الوجبة. رُجّ العبوة جيداً قبل الاستعمال. يُرجى اتباع التعليمات الموجودة على العبوة.",
    fr: "Prendre 5 ml par jour à l'aide du bouchon doseur, après un repas. Agiter avant utilisation. Respectez les indications figurant sur l'emballage.",
    en: "Take 5 ml daily using the measuring cap, after a meal. Shake well before use. Follow the directions on the package."
  },
  "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. En cas de traitement médical ou de troubles urinaires sévères, consultez un médecin.": {
    ar: "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. لا يُغني عن نظام غذائي متنوع ومتوازن. في حال الخضوع لعلاج طبي أو وجود اضطرابات بولية حادة، استشر الطبيب.",
    fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. En cas de traitement médical ou de troubles urinaires sévères, consultez un médecin.",
    en: "Keep out of reach of children. Do not exceed the recommended daily dose. Not a substitute for a varied, balanced diet. In case of medical treatment or severe urinary symptoms, consult a doctor."
  },
  "Une formule concentrée pour stimuler la puissance, l'endurance et l'énergie masculine au quotidien. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.": {
    ar: "تركيبة مركزة لتعزيز القوة والتحمل والطاقة الحيوية للرجال يومياً. تعرّف على المكونات وطريقة الاستعمال الموضحتين على الملصق.",
    fr: "Une formule concentrée pour stimuler la puissance, l'endurance et l'énergie masculine au quotidien. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    en: "A concentrated formula to enhance male stamina, power, and vitality. See the ingredients and directions on the label."
  },
  "Extrait concentré de racine de Maca, extrait de Tribulus Terrestris, extrait de Ginseng rouge, gluconate de zinc, vitamines B6 et B12. Vérifiez la composition sur l'emballage reçu.": {
    ar: "مستخلص مركز لجذور الماكا، مستخلص التريبولوس، مستخلص الجينسنغ الأحمر، غلوكونات الزنك، فيتامين ب6 وب12. يرجى التحقق من التركيبة على العبوة المستلمة.",
    fr: "Extrait concentré de racine de Maca, extrait de Tribulus Terrestris, extrait de Ginseng rouge, gluconate de zinc, vitamines B6 et B12. Vérifiez la composition sur l'emballage reçu.",
    en: "Concentrated Maca root extract, Tribulus Terrestris extract, red Ginseng extract, zinc gluconate, vitamins B6 and B12. Check the ingredients on the delivered package."
  },
  "Une formule puissante associant le ginseng rouge et la rhodiola pour dynamiser la résistance physique et mentale. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.": {
    ar: "تركيبة قوية تجمع بين الجينسنغ الأحمر والروديولا لتعزيز القدرة البدنية والذهنية. تعرّف على المكونات وطريقة الاستعمال الموضحتين على الملصق.",
    fr: "Une formule puissante associant le ginseng rouge et la rhodiola pour dynamiser la résistance physique et mentale. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    en: "A powerful formula combining red ginseng and rhodiola to boost physical and mental performance. See the ingredients and directions on the label."
  },
  "Conseils d'utilisation : 1 capsule par jour le matin, après le repas, avec un verre d'eau.": {
    ar: "طريقة الاستعمال: كبسولة واحدة يومياً صباحاً بعد الطعام مع كوب من الماء.",
    fr: "Conseils d'utilisation : 1 capsule par jour le matin, après le repas, avec un verre d'eau.",
    en: "Directions: 1 capsule daily in the morning after a meal with a glass of water."
  },
  "Extrait sec de Panax Ginseng rouge coréen, extrait de Rhodiola Rosea, zinc, vitamines B1, B2, B6. Gélule végétale. Vérifiez la composition sur l'emballage reçu.": {
    ar: "مستخلص الجينسنغ الأحمر الكوري، مستخلص الروديولا الوردية، زنك، فيتامينات ب1، ب2، ب6. كبسولة نباتية. يرجى التحقق من التركيبة على العبوة المستلمة.",
    fr: "Extrait sec de Panax Ginseng rouge coréen, extrait de Rhodiola Rosea, zinc, vitamines B1, B2, B6. Gélule végétale. Vérifiez la composition sur l'emballage reçu.",
    en: "Korean red Panax Ginseng extract, Rhodiola Rosea extract, zinc, vitamins B1, B2, B6. Plant capsule. Check the ingredients on the delivered package."
  },
  "Prendre 1 capsule par jour le matin, après le repas, avec un grand verre d'eau. Respectez les indications figurant sur l'emballage.": {
    ar: "تؤخذ كبسولة واحدة يومياً صباحاً بعد الطعام مع كوب كبير من الماء. يُرجى اتباع التعليمات الموجودة على العبوة.",
    fr: "Prendre 1 capsule par jour le matin, après le repas, avec un grand verre d'eau. Respectez les indications figurant sur l'emballage.",
    en: "Take 1 capsule daily in the morning after a meal with a large glass of water. Follow the directions on the package."
  },
  "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Déconseillé aux personnes sous traitement antidiabétique sans avis médical. Ne remplace pas une alimentation variée et équilibrée.": {
    ar: "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. لا ينصح به لمرضى السكري دون استشارة طبية. لا يُغني عن نظام غذائي متنوع ومتوازن.",
    fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Déconseillé aux personnes sous traitement antidiabétique sans avis médical. Ne remplace pas une alimentation variée et équilibrée.",
    en: "Keep out of reach of children. Do not exceed recommended daily dose. Not advised for people on antidiabetic medication without medical advice. Not a substitute for a varied diet."
  },
  "Une formule d'huiles naturelles enrichie au clou de girofle et ginseng pour le confort, la maîtrise et l'endurance masculine. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.": {
    ar: "تركيبة طبيعية من زيوت القرنفل والجنسنج لتأخير القذف والتحكم الكامل باش متجيبش البليزير ديالك دغيا، وتخلي العلاقة الحميمية مع الزوجة ديالك طويلة وممتعة باش تستمتعو بيها بجوج لأقصى حد.",
    fr: "Une formule d'huiles naturelles enrichie au clou de girofle et ginseng pour le confort, la maîtrise et l'endurance masculine. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    en: "A natural oil formula enriched with clove and ginseng for male comfort, control and stamina. See the ingredients and directions on the label."
  },
  "Conseils d'utilisation : 3 à 5 gouttes en massage doux, 15 à 20 minutes avant le rapport.": {
    ar: "طريقة الاستعمال: 3 إلى 5 قطرات مع تدليك خفيف، قبل 15 إلى 20 دقيقة من العلاقة.",
    fr: "Conseils d'utilisation : 3 à 5 gouttes en massage doux, 15 à 20 minutes avant le rapport.",
    en: "Directions: 3 to 5 drops with gentle massage, 15 to 20 minutes beforehand."
  },
  "Huile de clou de girofle, extrait de Panax Ginseng, huile d'amande douce, extraits de plantes naturelles, acétate de vitamine E. Sans parfum synthétique. Vérifiez la composition sur l'emballage reçu.": {
    ar: "زيت القرنفل، مستخلص الجنسنج، زيت اللوز الحلو، مستخلصات نباتية طبيعية، فيتامين هـ (E). خالٍ من العطور الصناعية. يرجى التحقق من التركيبة على العبوة المستلمة.",
    fr: "Huile de clou de girofle, extrait de Panax Ginseng, huile d'amande douce, extraits de plantes naturelles, acétate de vitamine E. Sans parfum synthétique. Vérifiez la composition sur l'emballage reçu.",
    en: "Clove oil, Panax Ginseng extract, sweet almond oil, natural herbal extracts, vitamin E. Synthetic fragrance-free. Check the ingredients on the delivered package."
  },
  "Appliquer 3 à 5 gouttes sur la zone intime 15 à 20 minutes avant l'acte. Masser délicatement jusqu'à absorption complète. Usage externe uniquement.": {
    ar: "ضع 3 إلى 5 قطرات على المنطقة المطلوبة قبل 15 إلى 20 دقيقة من العلاقة. دلك بلطف حتى الامتصاص التام. للاستعمال الخارجي فقط.",
    fr: "Appliquer 3 à 5 gouttes sur la zone intime 15 à 20 minutes avant l'acte. Masser délicatement jusqu'à absorption complète. Usage externe uniquement.",
    en: "Apply 3 to 5 drops 15 to 20 minutes beforehand. Massage gently until absorbed. For external use only."
  },
  "Usage externe exclusivement. Faire un test cutané avant la première utilisation. Ne pas appliquer sur une peau irritée ou présentant des lésions. Tenir hors de portée des enfants.": {
    ar: "للاستعمال الخارجي فقط. يُجرى اختبار حساسية على الجلد قبل أول استخدام. لا يُستعمل على جلد متهيج أو مجروح. يُحفظ بعيداً عن متناول الأطفال.",
    fr: "Usage externe exclusivement. Faire un test cutané avant la première utilisation. Ne pas appliquer sur une peau irritée ou présentant des lésions. Tenir hors de portée des enfants.",
    en: "For external use only. Perform a skin patch test before first use. Do not apply to irritated or broken skin. Keep out of reach of children."
  },
  "Produit cosmétique pour le bien-être masculin. Respectez les conseils d'utilisation figurant sur l'emballage.": {
    ar: "منتج عناية طبيعي لرفاهية الرجل. يُرجى اتباع إرشادات الاستخدام الموضحة على العبوة.",
    fr: "Produit cosmétique pour le bien-être masculin. Respectez les conseils d'utilisation figurant sur l'emballage.",
    en: "Natural cosmetic product for men's wellness. Follow the directions on the package."
  },
  "Un complexe nutritif haute performance associant protéines de Whey, Maca, Ginseng et Zinc pour soutenir l'énergie, les muscles et la vitalité. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.": {
    ar: "مركب غذائي عالي الجودة يجمع بين بروتين الواي والماكا والجنسنج والزنك لدعم الطاقة وبناء العضلات والحيوية. تعرّف على المكونات وطريقة الاستعمال الموضحتين على الملصق.",
    fr: "Un complexe nutritif haute performance associant protéines de Whey, Maca, Ginseng et Zinc pour soutenir l'énergie, les muscles et la vitalité. Retrouvez la composition et les conseils d'utilisation indiqués sur l'étiquette.",
    en: "A high-performance nutrient complex combining Whey protein, Maca, Ginseng, and Zinc to support energy, muscles, and vitality. See the ingredients and directions on the label."
  },
  "Conseils d'utilisation : 1 cuillère par jour dans 200 ml d'eau ou de lait, le matin ou avant l'effort.": {
    ar: "طريقة الاستعمال: ملعقة واحدة يومياً في 200 مل من الماء أو الحليب، صباحاً أو قبل المجهود.",
    fr: "Conseils d'utilisation : 1 cuillère par jour dans 200 ml d'eau ou de lait, le matin ou avant l'effort.",
    en: "Directions: 1 scoop daily in 200 ml of water or milk, in the morning or before exercise."
  },
  "Protéines de lactosérum (Whey Protein), extrait de Maca, extrait de Panax Ginseng, L-Arginine, gluconate de zinc, vitamine B12, arôme naturel. Vérifiez la composition sur l'emballage reçu.": {
    ar: "بروتين مصل اللبن (واي بروتين)، مستخلص الماكا، مستخلص الجنسنج، إل-أرجينين، غلوكونات الزنك، فيتامين ب12، نكهة طبيعية. يرجى التحقق من التركيبة على العبوة المستلمة.",
    fr: "Protéines de lactosérum (Whey Protein), extrait de Maca, extrait de Panax Ginseng, L-Arginine, gluconate de zinc, vitamine B12, arôme naturel. Vérifiez la composition sur l'emballage reçu.",
    en: "Whey protein, Maca extract, Panax Ginseng extract, L-Arginine, zinc gluconate, vitamin B12, natural flavor. Check the ingredients on the delivered package."
  },
  "Mélanger 1 cuillère (environ 10g) dans 200 ml d'eau fraîche, de lait ou de smoothie. Consommer une fois par jour le matin ou avant l'entraînement. Bien mélanger au shaker.": {
    ar: "اخلط ملعقة واحدة (حوالي 10 غرام) في 200 مل من الماء البارد أو الحليب أو العصير. يُستهلك مرة يومياً في الصباح أو قبل التمرين. يُرج جيداً في الشيكر.",
    fr: "Mélanger 1 cuillère (environ 10g) dans 200 ml d'eau fraîche, de lait ou de smoothie. Consommer une fois par jour le matin ou avant l'entraînement. Bien mélanger au shaker.",
    en: "Mix 1 scoop (approx. 10g) in 200 ml of cold water, milk, or smoothie. Consume once daily in the morning or before training. Shake well."
  },
  "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. Conserver dans un endroit sec et frais.": {
    ar: "يُحفظ بعيداً عن متناول الأطفال. لا تتجاوز الجرعة اليومية الموصى بها. لا يُغني عن نظام غذائي متنوع ومتوازن. يُحفظ في مكان جاف وبارد.",
    fr: "Tenir hors de portée des enfants. Ne pas dépasser la dose journalière recommandée. Ne remplace pas une alimentation variée et équilibrée. Conserver dans un endroit sec et frais.",
    en: "Keep out of reach of children. Do not exceed the recommended daily dose. Not a substitute for a varied, balanced diet. Store in a cool, dry place."
  },
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
  "Ajoutez Royal Force a votre commande": { ar: "أضف Royal Force إلى طلبك", fr: "Ajoutez Royal Force à votre commande", en: "Add Royal Force to your order" },
  "Passez au format Vitality Ultra": { ar: "انتقل إلى Vitality Ultra", fr: "Passez au format Vitality Ultra", en: "Upgrade to Vitality Ultra" },
  "Completez avec Testo Drive": { ar: "أكمل طلبك بـ Testo Drive", fr: "Complétez avec Testo Drive", en: "Complete your order with Testo Drive" },
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
