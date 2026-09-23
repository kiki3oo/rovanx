"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { SupportedCurrency } from "@/lib/money";
import { supportedCurrencies } from "@/lib/money";

export const supportedLocales = ["ary", "fr", "en"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

type PreferencesContextValue = {
  locale: SupportedLocale;
  currency: SupportedCurrency;
  setLocale: (locale: SupportedLocale) => void;
  setCurrency: (currency: SupportedCurrency) => void;
  t: (key: TranslationKey) => string;
};

export const localeLabels: Record<SupportedLocale, string> = {
  ary: "Darija",
  fr: "Francais",
  en: "English"
};

type TranslationKey =
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
  | "viewProducts";

const translations: Record<SupportedLocale, Record<TranslationKey, string>> = {
  ary: {
    shop: "Shop",
    categories: "Categories",
    blog: "Blog",
    about: "About",
    faq: "FAQ",
    cart: "Panier",
    add: "Zid l panier",
    language: "Lougha",
    currency: "Devise",
    estimatedCurrency: "Taman taqribi",
    continueShopping: "Kmel shopping",
    checkout: "Dwez commande",
    emptyCart: "Panier khawi.",
    viewProducts: "Chof produits"
  },
  fr: {
    shop: "Shop",
    categories: "Categories",
    blog: "Blog",
    about: "About",
    faq: "FAQ",
    cart: "Panier",
    add: "Ajouter",
    language: "Langue",
    currency: "Devise",
    estimatedCurrency: "Devise affichee",
    continueShopping: "Continuer shopping",
    checkout: "Passer commande",
    emptyCart: "Votre panier est vide.",
    viewProducts: "Voir les produits"
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
    viewProducts: "View products"
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isSupportedLocale(savedLocale)) setLocaleState(savedLocale);
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
