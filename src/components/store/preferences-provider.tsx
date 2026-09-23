"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { SupportedCurrency } from "@/lib/money";
import { supportedCurrencies } from "@/lib/money";

export const supportedLocales = ["ar", "fr", "en"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

type PreferencesContextValue = {
  locale: SupportedLocale;
  currency: SupportedCurrency;
  setLocale: (locale: SupportedLocale) => void;
  setCurrency: (currency: SupportedCurrency) => void;
  t: (key: TranslationKey) => string;
};

export const localeLabels: Record<SupportedLocale, string> = {
  ar: "العربية",
  fr: "Français",
  en: "English"
};

export type TranslationKey =
  | "shop"
  | "categories"
  | "blog"
  | "about"
  | "faq"
  | "cart"
  | "add"
  | "language"
  | "currency"
  | "estimatedCurrency"
  | "continueShopping"
  | "checkout"
  | "emptyCart"
  | "viewProducts"
  | "heroBadge"
  | "heroTitle"
  | "heroHighlight"
  | "heroText"
  | "heroCta"
  | "heroBundles"
  | "codSecure"
  | "codSecureText"
  | "callConfirm"
  | "callConfirmText"
  | "delivery"
  | "deliveryText"
  | "premiumPick"
  | "fastDecision"
  | "shopTitle"
  | "shopIntro"
  | "search"
  | "allCategories"
  | "featured"
  | "newest"
  | "priceAsc"
  | "priceDesc"
  | "filter"
  | "noProducts"
  | "offer"
  | "selectionPremium"
  | "phoneCall"
  | "cartTitle"
  | "cartIntro"
  | "subtotal"
  | "shipping"
  | "toConfirm"
  | "phoneConfirmation"
  | "shipAfterValidation"
  | "checkoutBadge"
  | "checkoutTitle"
  | "checkoutIntro"
  | "protectedData"
  | "fullName"
  | "phone"
  | "city"
  | "address"
  | "addressDetails"
  | "notes"
  | "creating"
  | "confirmOrder"
  | "summary"
  | "totalCod"
  | "noOnlinePayment"
  | "callBeforePrep"
  | "deliveryByAvailability"
  | "addProductBeforeCheckout"
  | "readyTitle"
  | "readyText"
  | "start"
  | "viewOffers"
  | "choose" | "chooseText" | "confirm" | "confirmText" | "receive" | "receiveText"
  | "bestSellers" | "bestSellersText" | "categoryIntro" | "bundles" | "bundlesTitle" | "bundlesIntro"
  | "quickConfirm" | "quickConfirmText" | "shipAfterCall" | "shipAfterCallText" | "cashOnDelivery" | "cashOnDeliveryText"
  | "education" | "selectedArticles" | "goalVitality" | "goalWellness" | "goalProstate" | "goalEnergy" | "goalBalance" | "goalSleep"
  | "bundlePageIntro" | "composeOrder" | "bundleShippingText" | "visualPlaceholder" | "orderNow" | "productInfoPending"
  | "support" | "benefits" | "ingredients" | "instructions" | "warnings" | "regulatory" | "deliveryCod" | "relatedProducts"
  | "searchBlog" | "articlesTitle" | "searchAction" | "byAuthor" | "sourcesPending"
  | "contact" | "returns" | "privacy" | "terms" | "cookies" | "shippingPolicy" | "legalPending" | "pagePending"
  | "thanks" | "orderReceived" | "reference" | "nextSteps" | "confirmWhatsapp" | "upsell" | "viewConfirmation"
  | "extraOffer" | "oneOffer" | "sameParcel" | "addToOrder" | "skip" | "orderFailed" | "removeItem"
  | "footerTagline" | "quantity";

const translations: Record<SupportedLocale, Record<TranslationKey, string>> = {
  ar: {
    shop: "المتجر", categories: "الفئات", blog: "المدونة", about: "من نحن", faq: "الأسئلة الشائعة", cart: "السلة", add: "أضف إلى السلة",
    language: "اللغة", currency: "العملة", estimatedCurrency: "عملة العرض", continueShopping: "متابعة التسوق", checkout: "إتمام الطلب",
    emptyCart: "سلة التسوق فارغة.", viewProducts: "عرض المنتجات", heroBadge: "ROVANX المغرب", heroTitle: "حيوية الرجل", heroHighlight: "ورفاهيته",
    heroText: "منتجات مختارة بعناية لتساعدك على اختيار ما يناسبك والطلب بسهولة مع الدفع عند الاستلام.", heroCta: "اكتشف المنتجات", heroBundles: "اكتشف الباقات",
    codSecure: "دفع آمن عند الاستلام", codSecureText: "لا حاجة للدفع عبر الإنترنت", callConfirm: "تأكيد هاتفي", callConfirmText: "قبل الشحن",
    delivery: "توصيل في المغرب", deliveryText: "خطوات بسيطة وواضحة", premiumPick: "اختيارات مميزة", fastDecision: "اختر بسهولة",
    shopTitle: "منتجات ROVANX", shopIntro: "تصفح المنتجات واختر ما يناسبك. ستُضاف الصور النهائية بعد اعتماد المنتجات.",
    search: "بحث", allCategories: "كل الفئات", featured: "المميزة", newest: "الأحدث", priceAsc: "السعر: من الأقل", priceDesc: "السعر: من الأعلى", filter: "تصفية",
    noProducts: "لم يتم العثور على منتجات.", offer: "عرض", selectionPremium: "اختيار مميز", phoneCall: "اتصال",
    cartTitle: "طلبك", cartIntro: "راجع طلبك قبل إتمامه والدفع عند الاستلام.", subtotal: "المجموع الفرعي", shipping: "التوصيل", toConfirm: "يُحدد لاحقًا",
    phoneConfirmation: "تأكيد عبر الهاتف", shipAfterValidation: "الشحن بعد التأكيد", checkoutBadge: "إتمام الطلب", checkoutTitle: "تأكيد الطلب",
    checkoutIntro: "أدخل بياناتك. سيتصل بك أحد أفراد الفريق لتأكيد الطلب قبل الشحن. لا حاجة للدفع عبر الإنترنت.", protectedData: "بياناتك محمية",
    fullName: "الاسم الكامل *", phone: "رقم الهاتف *", city: "المدينة *", address: "العنوان الكامل *", addressDetails: "تفاصيل إضافية", notes: "ملاحظات",
    creating: "جارٍ الإرسال...", confirmOrder: "تأكيد الطلب", summary: "ملخص الطلب", totalCod: "المبلغ عند الاستلام", noOnlinePayment: "لا حاجة للدفع عبر الإنترنت",
    callBeforePrep: "اتصال قبل التجهيز", deliveryByAvailability: "التوصيل حسب التوفر", addProductBeforeCheckout: "أضف منتجًا قبل إتمام الطلب.",
    readyTitle: "هل أنت جاهز للطلب؟", readyText: "ادفع عند الاستلام دون الحاجة إلى إنشاء حساب.", start: "ابدأ الآن", viewOffers: "عرض العروض",
    choose: "اختر", chooseText: "تصفح المنتجات والباقات المتاحة.", confirm: "أكد", confirmText: "أكد طلبك هاتفيًا قبل الشحن.", receive: "استلم", receiveText: "استلم طلبك وادفع عند التوصيل.",
    bestSellers: "الأكثر طلبًا", bestSellersText: "مجموعة مختارة لتسهيل العثور على ما يناسبك.", categoryIntro: "ابحث حسب احتياجك وانتقل مباشرة إلى المنتجات.",
    bundles: "الباقات", bundlesTitle: "باقات ROVANX", bundlesIntro: "حلول مجمعة تساعدك على الاختيار بسهولة.",
    quickConfirm: "تأكيد سريع", quickConfirmText: "سنتصل بك لتأكيد الطلب.", shipAfterCall: "الشحن بعد التأكيد", shipAfterCallText: "نجهز الطلب ونشحنه بعد تأكيده.",
    cashOnDelivery: "الدفع عند الاستلام", cashOnDeliveryText: "ادفع فقط عند وصول طلبك.", education: "مقالات", selectedArticles: "مقالات مختارة",
    goalVitality: "الحيوية", goalWellness: "صحة الرجل", goalProstate: "دعم البروستاتا", goalEnergy: "الطاقة", goalBalance: "التوازن", goalSleep: "النوم",
    bundlePageIntro: "باقات واضحة تساعدك على اختيار مجموعة مناسبة بسهولة.", composeOrder: "كوّن طلبك", bundleShippingText: "الدفع عند الاستلام بعد تأكيد الطلب هاتفيًا.",
    visualPlaceholder: "صورة المنتج ستضاف لاحقًا", orderNow: "اطلب الآن", productInfoPending: "معلومات المنتج قيد الاعتماد.", support: "خدمة العملاء",
    benefits: "الفوائد", ingredients: "المكونات", instructions: "طريقة الاستخدام", warnings: "التحذيرات", regulatory: "معلومات تنظيمية", deliveryCod: "التوصيل والدفع", relatedProducts: "منتجات مشابهة",
    searchBlog: "ابحث في المقالات", articlesTitle: "مقالات ROVANX", searchAction: "بحث", byAuthor: "بقلم", sourcesPending: "المصادر قيد المراجعة قبل نشر المحتوى الصحي.",
    contact: "اتصل بنا", returns: "الاسترجاع", privacy: "الخصوصية", terms: "الشروط والأحكام", cookies: "ملفات تعريف الارتباط", shippingPolicy: "سياسة الشحن",
    legalPending: "سيُنشر المحتوى بعد مراجعته واعتماده.", pagePending: "محتوى قيد الإعداد", thanks: "شكرًا لك", orderReceived: "تم استلام طلبك", reference: "رقم الطلب",
    nextSteps: "سنتصل بك لتأكيد الطلب، ثم نجهزه ونرسله حسب منطقتك.", confirmWhatsapp: "التأكيد عبر واتساب", upsell: "منتج إضافي", viewConfirmation: "عرض تأكيد الطلب",
    extraOffer: "عرض إضافي", oneOffer: "عرض واحد لك", sameParcel: "سيُضاف إلى نفس الطلب والشحنة.", addToOrder: "أضف إلى طلبي", skip: "تخطي",
    orderFailed: "تعذر إتمام الطلب. حاول مرة أخرى.", removeItem: "حذف المنتج", footerTagline: "علامة مغربية تعنى بحيوية الرجل ورفاهيته.", quantity: "الكمية"
  },
  fr: {
    shop: "Boutique",
    categories: "Catégories",
    blog: "Blog",
    about: "À propos",
    faq: "FAQ",
    cart: "Panier",
    add: "Ajouter",
    language: "Langue",
    currency: "Devise",
    estimatedCurrency: "Devise affichee",
    continueShopping: "Continuer shopping",
    checkout: "Passer commande",
    emptyCart: "Votre panier est vide.",
    viewProducts: "Voir les produits",
    heroBadge: "ROVANX Maroc",
    heroTitle: "Vitalité masculine",
    heroHighlight: "& bien-être",
    heroText: "Une boutique premium pensée pour aider le client à choisir vite, commander sans stress, et payer uniquement à la livraison.",
    heroCta: "Voir les produits",
    heroBundles: "Découvrir les packs",
    codSecure: "COD sécurisé",
    codSecureText: "Aucun paiement en ligne",
    callConfirm: "Appel de confirmation",
    callConfirmText: "Avant expédition",
    delivery: "Livraison Maroc",
    deliveryText: "Process simple et clair",
    premiumPick: "Sélection premium",
    fastDecision: "Décision rapide",
    shopTitle: "Produits ROVANX",
    shopIntro: "Filtre rapidement la sélection. Les visuels définitifs restent à remplacer après validation des produits.",
    search: "Recherche",
    allCategories: "Toutes catégories",
    featured: "Featured",
    newest: "Newest",
    priceAsc: "Prix bas à haut",
    priceDesc: "Prix haut à bas",
    filter: "Filtrer",
    noProducts: "Aucun produit trouvé.",
    offer: "Offre",
    selectionPremium: "Sélection premium",
    phoneCall: "Appel",
    cartTitle: "Votre commande",
    cartIntro: "Dernière vérification avant paiement à la livraison.",
    subtotal: "Sous-total",
    shipping: "Livraison",
    toConfirm: "À confirmer",
    phoneConfirmation: "Confirmation téléphonique",
    shipAfterValidation: "Expédition après validation",
    checkoutBadge: "COD Checkout",
    checkoutTitle: "Confirmer la commande",
    checkoutIntro: "Remplissez vos informations. Un agent confirme par téléphone avant expédition. Aucun paiement en ligne.",
    protectedData: "Données protégées",
    fullName: "Nom complet *",
    phone: "Téléphone *",
    city: "Ville *",
    address: "Adresse complète *",
    addressDetails: "Détails additionnels",
    notes: "Notes",
    creating: "Création...",
    confirmOrder: "Confirmer la commande",
    summary: "Résumé",
    totalCod: "Total COD",
    noOnlinePayment: "Aucun paiement en ligne requis",
    callBeforePrep: "Appel avant préparation",
    deliveryByAvailability: "Livraison selon disponibilité",
    addProductBeforeCheckout: "Ajoutez un produit avant le checkout.",
    readyTitle: "Prêt à commander?",
    readyText: "Paiement à la livraison, sans compte client obligatoire.",
    start: "Commencer",
    viewOffers: "Voir les offres",
    choose: "Choisir", chooseText: "Parcourez les produits et les packs disponibles.", confirm: "Confirmer", confirmText: "Confirmez votre commande par téléphone avant l'expédition.", receive: "Recevoir", receiveText: "Recevez votre commande et payez à la livraison.",
    bestSellers: "Meilleures ventes", bestSellersText: "Une sélection courte pour trouver facilement ce qui vous convient.", categoryIntro: "Explorez les produits selon vos besoins.",
    bundles: "Packs", bundlesTitle: "Packs ROVANX", bundlesIntro: "Des solutions groupées pour choisir plus facilement.",
    quickConfirm: "Confirmation rapide", quickConfirmText: "Nous vous appelons pour confirmer la commande.", shipAfterCall: "Expédition après confirmation", shipAfterCallText: "Votre commande est préparée et expédiée après confirmation.",
    cashOnDelivery: "Paiement à la livraison", cashOnDeliveryText: "Payez seulement à la réception.", education: "Conseils", selectedArticles: "Articles sélectionnés",
    goalVitality: "Vitalité", goalWellness: "Bien-être masculin", goalProstate: "Soutien de la prostate", goalEnergy: "Énergie", goalBalance: "Équilibre", goalSleep: "Sommeil",
    bundlePageIntro: "Des packs faciles à comprendre pour choisir une solution complète.", composeOrder: "Composer ma commande", bundleShippingText: "Paiement à la livraison après confirmation téléphonique.",
    visualPlaceholder: "Visuel produit à venir", orderNow: "Commander maintenant", productInfoPending: "Informations produit en cours de validation.", support: "Service client",
    benefits: "Bienfaits", ingredients: "Ingrédients", instructions: "Utilisation", warnings: "Précautions", regulatory: "Informations réglementaires", deliveryCod: "Livraison et paiement", relatedProducts: "Produits associés",
    searchBlog: "Rechercher des articles", articlesTitle: "Articles ROVANX", searchAction: "Chercher", byAuthor: "Par", sourcesPending: "Sources en cours de validation avant publication du contenu santé.",
    contact: "Contact", returns: "Retours", privacy: "Confidentialité", terms: "Conditions générales", cookies: "Cookies", shippingPolicy: "Livraison",
    legalPending: "Ce contenu sera publié après révision et validation.", pagePending: "Contenu à venir", thanks: "Merci", orderReceived: "Commande reçue", reference: "Référence",
    nextSteps: "Nous vous appelons pour confirmer votre commande, puis la préparons et l'expédions selon votre zone.", confirmWhatsapp: "Confirmer sur WhatsApp", upsell: "Produit supplémentaire", viewConfirmation: "Voir la confirmation",
    extraOffer: "Offre supplémentaire", oneOffer: "Une offre pour vous", sameParcel: "Ajouté à la même commande et au même colis.", addToOrder: "Ajouter à ma commande", skip: "Passer",
    orderFailed: "La commande n'a pas abouti. Veuillez réessayer.", removeItem: "Supprimer le produit", footerTagline: "Marque marocaine dédiée à la vitalité et au bien-être masculin.", quantity: "Quantité"
  },
  en: {
    shop: "Shop",
    categories: "Categories",
    blog: "Blog",
    about: "About",
    faq: "FAQ",
    cart: "Cart",
    add: "Add",
    language: "Language",
    currency: "Currency",
    estimatedCurrency: "Display currency",
    continueShopping: "Continue shopping",
    checkout: "Checkout",
    emptyCart: "Your cart is empty.",
    viewProducts: "View products",
    heroBadge: "ROVANX Morocco",
    heroTitle: "Men's Vitality",
    heroHighlight: "& Wellness",
    heroText: "A premium store built to help customers choose fast, order with confidence, and pay only on delivery.",
    heroCta: "View products",
    heroBundles: "Discover bundles",
    codSecure: "Secure COD",
    codSecureText: "No online payment",
    callConfirm: "Confirmation call",
    callConfirmText: "Before shipping",
    delivery: "Morocco delivery",
    deliveryText: "Simple and clear process",
    premiumPick: "Premium pick",
    fastDecision: "Fast decision",
    shopTitle: "ROVANX products",
    shopIntro: "Filter the selection quickly. Final visuals will be replaced after product validation.",
    search: "Search",
    allCategories: "All categories",
    featured: "Featured",
    newest: "Newest",
    priceAsc: "Low to high",
    priceDesc: "High to low",
    filter: "Filter",
    noProducts: "No products found.",
    offer: "Offer",
    selectionPremium: "Premium selection",
    phoneCall: "Call",
    cartTitle: "Your order",
    cartIntro: "Final check before cash on delivery.",
    subtotal: "Subtotal",
    shipping: "Shipping",
    toConfirm: "To confirm",
    phoneConfirmation: "Phone confirmation",
    shipAfterValidation: "Ships after validation",
    checkoutBadge: "COD Checkout",
    checkoutTitle: "Confirm your order",
    checkoutIntro: "Fill in your details. An agent confirms by phone before shipping. No online payment.",
    protectedData: "Protected data",
    fullName: "Full name *",
    phone: "Phone *",
    city: "City *",
    address: "Full address *",
    addressDetails: "Additional details",
    notes: "Notes",
    creating: "Creating...",
    confirmOrder: "Confirm order",
    summary: "Summary",
    totalCod: "COD total",
    noOnlinePayment: "No online payment required",
    callBeforePrep: "Call before preparation",
    deliveryByAvailability: "Delivery by availability",
    addProductBeforeCheckout: "Add a product before checkout.",
    readyTitle: "Ready to order?",
    readyText: "Cash on delivery, no customer account required.",
    start: "Start",
    viewOffers: "View offers",
    choose: "Choose", chooseText: "Browse the available products and bundles.", confirm: "Confirm", confirmText: "Confirm your order by phone before shipping.", receive: "Receive", receiveText: "Receive your order and pay on delivery.",
    bestSellers: "Best sellers", bestSellersText: "A focused selection to help you find what suits you.", categoryIntro: "Explore products by your needs.",
    bundles: "Bundles", bundlesTitle: "ROVANX bundles", bundlesIntro: "Grouped options to make choosing easier.",
    quickConfirm: "Quick confirmation", quickConfirmText: "We call to confirm your order.", shipAfterCall: "Ships after confirmation", shipAfterCallText: "Your order is prepared and shipped after confirmation.",
    cashOnDelivery: "Cash on delivery", cashOnDeliveryText: "Pay only when you receive your order.", education: "Insights", selectedArticles: "Selected articles",
    goalVitality: "Vitality", goalWellness: "Men's wellness", goalProstate: "Prostate support", goalEnergy: "Energy", goalBalance: "Balance", goalSleep: "Sleep",
    bundlePageIntro: "Clear bundles to help you choose a complete option.", composeOrder: "Build my order", bundleShippingText: "Pay on delivery after phone confirmation.",
    visualPlaceholder: "Product image coming soon", orderNow: "Order now", productInfoPending: "Product information pending approval.", support: "Customer support",
    benefits: "Benefits", ingredients: "Ingredients", instructions: "How to use", warnings: "Warnings", regulatory: "Regulatory information", deliveryCod: "Delivery and payment", relatedProducts: "Related products",
    searchBlog: "Search articles", articlesTitle: "ROVANX articles", searchAction: "Search", byAuthor: "By", sourcesPending: "Sources are being reviewed before health content is published.",
    contact: "Contact", returns: "Returns", privacy: "Privacy", terms: "Terms", cookies: "Cookies", shippingPolicy: "Shipping",
    legalPending: "This content will be published after review and approval.", pagePending: "Content coming soon", thanks: "Thank you", orderReceived: "Order received", reference: "Reference",
    nextSteps: "We will call to confirm your order, then prepare and ship it according to your area.", confirmWhatsapp: "Confirm on WhatsApp", upsell: "Additional item", viewConfirmation: "View confirmation",
    extraOffer: "Additional offer", oneOffer: "An offer for you", sameParcel: "Added to the same order and parcel.", addToOrder: "Add to my order", skip: "Skip",
    orderFailed: "Your order could not be placed. Please try again.", removeItem: "Remove product", footerTagline: "A Moroccan brand for men's vitality and wellness.", quantity: "Quantity"
  }
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);
const localeKey = "rovanx-locale";
const currencyKey = "rovanx-currency";
const currencyDefaultCookie = "rovanx-currency-default";

function isSupportedLocale(value: string | null): value is SupportedLocale {
  return Boolean(value && supportedLocales.includes(value as SupportedLocale));
}

function isSupportedCurrency(value: string | null): value is SupportedCurrency {
  return Boolean(value && supportedCurrencies.includes(value as SupportedCurrency));
}

function readCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${name}=`))
    ?.split("=")[1] || null;
}

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>("fr");
  const [currency, setCurrencyState] = useState<SupportedCurrency>("MAD");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeKey);
    const savedCurrency = window.localStorage.getItem(currencyKey);
    const defaultCurrency = readCookie(currencyDefaultCookie);
    // Hydrate browser preferences after mount so SSR markup stays stable.
    if (savedLocale === "ary") window.localStorage.setItem(localeKey, "ar");
    const nextLocale = savedLocale === "ary" ? "ar" : savedLocale;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isSupportedLocale(nextLocale)) setLocaleState(nextLocale);
    if (isSupportedCurrency(savedCurrency)) {
      setCurrencyState(savedCurrency);
    } else if (isSupportedCurrency(defaultCurrency)) {
      setCurrencyState(defaultCurrency);
    }
  }, []);

  const value = useMemo<PreferencesContextValue>(() => ({
    locale,
    currency,
    setLocale(nextLocale) {
      setLocaleState(nextLocale);
      window.localStorage.setItem(localeKey, nextLocale);
      document.documentElement.lang = nextLocale === "ar" ? "ar-MA" : nextLocale;
      document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
    },
    setCurrency(nextCurrency) {
      setCurrencyState(nextCurrency);
      window.localStorage.setItem(currencyKey, nextCurrency);
      writeCookie(currencyKey, nextCurrency);
    },
    t(key) {
      return translations[locale][key];
    }
  }), [currency, locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar-MA" : locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used inside PreferencesProvider");
  return context;
}
