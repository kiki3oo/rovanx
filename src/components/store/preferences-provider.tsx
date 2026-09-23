"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { SupportedCurrency } from "@/lib/money";
import { supportedCurrencies } from "@/lib/money";

export const supportedLocales = ["ary", "fr", "en"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

export type TranslationKey =
  | "shop" | "categories" | "blog" | "about" | "faq" | "cart" | "add" | "language" | "currency" | "estimatedCurrency"
  | "continueShopping" | "checkout" | "emptyCart" | "viewProducts" | "heroBadge" | "heroTitle" | "heroHighlight" | "heroText"
  | "heroCta" | "heroBundles" | "codSecure" | "codSecureText" | "callConfirm" | "callConfirmText" | "delivery" | "deliveryText"
  | "premiumPick" | "fastDecision" | "shopTitle" | "shopIntro" | "search" | "allCategories" | "featured" | "newest" | "priceAsc"
  | "priceDesc" | "filter" | "noProducts" | "offer" | "selectionPremium" | "phoneCall" | "cartTitle" | "cartIntro" | "subtotal"
  | "shipping" | "toConfirm" | "phoneConfirmation" | "shipAfterValidation" | "checkoutBadge" | "checkoutTitle" | "checkoutIntro"
  | "protectedData" | "fullName" | "phone" | "city" | "address" | "addressDetails" | "notes" | "creating" | "confirmOrder"
  | "summary" | "totalCod" | "noOnlinePayment" | "callBeforePrep" | "deliveryByAvailability" | "addProductBeforeCheckout"
  | "readyTitle" | "readyText" | "start" | "viewOffers";

type PreferencesContextValue = {
  locale: SupportedLocale;
  currency: SupportedCurrency;
  setLocale: (locale: SupportedLocale) => void;
  setCurrency: (currency: SupportedCurrency) => void;
  t: (key: TranslationKey) => string;
};

export const localeLabels: Record<SupportedLocale, string> = {
  ary: "Darija",
  fr: "Français",
  en: "English"
};

const shared = {
  heroBadge: "ROVANX Morocco",
  checkoutBadge: "COD Checkout",
  totalCod: "Total COD",
  notes: "Notes"
};

const translations: Record<SupportedLocale, Record<TranslationKey, string>> = {
  ary: {
    ...shared,
    shop: "Boutika", categories: "L asnaf", blog: "Maqalat", about: "3lina", faq: "As2ila", cart: "Panier", add: "Zid l panier",
    language: "Lougha", currency: "L3omla", estimatedCurrency: "Taman taqribi", continueShopping: "Kmel shopping", checkout: "Dwez commande",
    emptyCart: "Panier khawi.", viewProducts: "Chof produits", heroTitle: "Vitalité dyal rjal", heroHighlight: "w wellness",
    heroText: "Boutika premium mratba باش client yختار بسرعة، yدوز commande بلا صداع، و yخلص غير ملي توصلو السلعة.", heroCta: "Chof produits",
    heroBundles: "Chof packs", codSecure: "COD m2amen", codSecureText: "Makayn hta paiement online", callConfirm: "Confirmation b appel",
    callConfirmText: "Qbel expedition", delivery: "Livraison Maroc", deliveryText: "Process sahl w wadih", premiumPick: "Selection premium",
    fastDecision: "Qarar sari3", shopTitle: "Produits ROVANX", shopIntro: "Filtri selection بسرعة. Tsawer النهائية غادي nbdloha ملي tsift lina produits/packs.",
    search: "Qelleb", allCategories: "Ga3 categories", featured: "Mokhtar", newest: "Jdid", priceAsc: "Taman tala3", priceDesc: "Taman habet",
    filter: "Filtrer", noProducts: "Ma kayn hta produit.", offer: "Offre", selectionPremium: "Selection premium", phoneCall: "Appel",
    cartTitle: "Commande dyalek", cartIntro: "Akher verification qbel paiement a la livraison.", subtotal: "Sous-total", shipping: "Livraison",
    toConfirm: "Ghadi tt2akked", phoneConfirmation: "Confirmation b telephone", shipAfterValidation: "Expedition ba3d validation",
    checkoutTitle: "Confirmer commande", checkoutIntro: "3mer informations dyalek. Agent kay3ayet lik qbel expedition. Makayn hta paiement online.",
    protectedData: "Donnees mahmiyin", fullName: "Smiya kamla *", phone: "Telephone *", city: "Ville *", address: "Adresse kamla *",
    addressDetails: "Details zaydin", creating: "Kaytsayeb...", confirmOrder: "Confirmer commande", summary: "Resume",
    noOnlinePayment: "Makayn hta paiement online", callBeforePrep: "Appel qbel preparation", deliveryByAvailability: "Livraison 3la hsab disponibilite",
    addProductBeforeCheckout: "Zid chi produit qbel checkout.", readyTitle: "Wajed tcommande?", readyText: "Paiement a la livraison, bla compte client obligatoire.",
    start: "Bda daba", viewOffers: "Chof offres"
  },
  fr: {
    ...shared,
    shop: "Boutique", categories: "Catégories", blog: "Blog", about: "À propos", faq: "FAQ", cart: "Panier", add: "Ajouter", language: "Langue",
    currency: "Devise", estimatedCurrency: "Devise affichée", continueShopping: "Continuer shopping", checkout: "Passer commande", emptyCart: "Votre panier est vide.",
    viewProducts: "Voir les produits", heroBadge: "ROVANX Maroc", heroTitle: "Vitalité masculine", heroHighlight: "& bien-être",
    heroText: "Une boutique premium pensée pour aider le client à choisir vite, commander sans stress, et payer uniquement à la livraison.", heroCta: "Voir les produits",
    heroBundles: "Découvrir les packs", codSecure: "COD sécurisé", codSecureText: "Aucun paiement en ligne", callConfirm: "Appel de confirmation",
    callConfirmText: "Avant expédition", delivery: "Livraison Maroc", deliveryText: "Process simple et clair", premiumPick: "Sélection premium",
    fastDecision: "Décision rapide", shopTitle: "Produits ROVANX", shopIntro: "Filtre rapidement la sélection. Les visuels définitifs restent à remplacer après validation des produits.",
    search: "Recherche", allCategories: "Toutes catégories", featured: "Featured", newest: "Newest", priceAsc: "Prix bas à haut", priceDesc: "Prix haut à bas",
    filter: "Filtrer", noProducts: "Aucun produit trouvé.", offer: "Offre", selectionPremium: "Sélection premium", phoneCall: "Appel",
    cartTitle: "Votre commande", cartIntro: "Dernière vérification avant paiement à la livraison.", subtotal: "Sous-total", shipping: "Livraison",
    toConfirm: "À confirmer", phoneConfirmation: "Confirmation téléphonique", shipAfterValidation: "Expédition après validation",
    checkoutTitle: "Confirmer la commande", checkoutIntro: "Remplissez vos informations. Un agent confirme par téléphone avant expédition. Aucun paiement en ligne.",
    protectedData: "Données protégées", fullName: "Nom complet *", phone: "Téléphone *", city: "Ville *", address: "Adresse complète *",
    addressDetails: "Détails additionnels", creating: "Création...", confirmOrder: "Confirmer la commande", summary: "Résumé",
    noOnlinePayment: "Aucun paiement en ligne requis", callBeforePrep: "Appel avant préparation", deliveryByAvailability: "Livraison selon disponibilité",
    addProductBeforeCheckout: "Ajoutez un produit avant le checkout.", readyTitle: "Prêt à commander?", readyText: "Paiement à la livraison, sans compte client obligatoire.",
    start: "Commencer", viewOffers: "Voir les offres"
  },
  en: {
    ...shared,
    shop: "Shop", categories: "Categories", blog: "Blog", about: "About", faq: "FAQ", cart: "Cart", add: "Add", language: "Language", currency: "Currency",
    estimatedCurrency: "Display currency", continueShopping: "Continue shopping", checkout: "Checkout", emptyCart: "Your cart is empty.", viewProducts: "View products",
    heroTitle: "Men's Vitality", heroHighlight: "& Wellness", heroText: "A premium store built to help customers choose fast, order with confidence, and pay only on delivery.",
    heroCta: "View products", heroBundles: "Discover bundles", codSecure: "Secure COD", codSecureText: "No online payment", callConfirm: "Confirmation call",
    callConfirmText: "Before shipping", delivery: "Morocco delivery", deliveryText: "Simple and clear process", premiumPick: "Premium pick", fastDecision: "Fast decision",
    shopTitle: "ROVANX products", shopIntro: "Filter the selection quickly. Final visuals will be replaced after product validation.", search: "Search", allCategories: "All categories",
    featured: "Featured", newest: "Newest", priceAsc: "Low to high", priceDesc: "High to low", filter: "Filter", noProducts: "No products found.",
    offer: "Offer", selectionPremium: "Premium selection", phoneCall: "Call", cartTitle: "Your order", cartIntro: "Final check before cash on delivery.",
    subtotal: "Subtotal", shipping: "Shipping", toConfirm: "To confirm", phoneConfirmation: "Phone confirmation", shipAfterValidation: "Ships after validation",
    checkoutTitle: "Confirm your order", checkoutIntro: "Fill in your details. An agent confirms by phone before shipping. No online payment.", protectedData: "Protected data",
    fullName: "Full name *", phone: "Phone *", city: "City *", address: "Full address *", addressDetails: "Additional details", creating: "Creating...",
    confirmOrder: "Confirm order", summary: "Summary", noOnlinePayment: "No online payment required", callBeforePrep: "Call before preparation",
    deliveryByAvailability: "Delivery by availability", addProductBeforeCheckout: "Add a product before checkout.", readyTitle: "Ready to order?", readyText: "Cash on delivery, no customer account required.",
    start: "Start", viewOffers: "View offers"
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
  return document.cookie.split("; ").find((item) => item.startsWith(`${name}=`))?.split("=")[1] || null;
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isSupportedLocale(savedLocale)) setLocaleState(savedLocale);
    if (isSupportedCurrency(savedCurrency)) setCurrencyState(savedCurrency);
    else if (isSupportedCurrency(defaultCurrency)) setCurrencyState(defaultCurrency);
  }, []);

  const value = useMemo<PreferencesContextValue>(() => ({
    locale,
    currency,
    setLocale(nextLocale) {
      setLocaleState(nextLocale);
      window.localStorage.setItem(localeKey, nextLocale);
      document.documentElement.lang = nextLocale === "ary" ? "ar-MA" : nextLocale;
      document.documentElement.dir = nextLocale === "ary" ? "rtl" : "ltr";
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
    document.documentElement.lang = locale === "ary" ? "ar-MA" : locale;
    document.documentElement.dir = locale === "ary" ? "rtl" : "ltr";
  }, [locale]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used inside PreferencesProvider");
  return context;
}
