export const supportedCurrencies = ["MAD", "EUR", "USD", "XOF", "XAF"] as const;

export type SupportedCurrency = (typeof supportedCurrencies)[number];

export const currencyLabels: Record<SupportedCurrency, string> = {
  MAD: "MAD",
  EUR: "EUR",
  USD: "USD",
  XOF: "XOF",
  XAF: "XAF"
};

const ratesFromMad: Record<SupportedCurrency, number> = {
  MAD: 1,
  EUR: 0.092,
  USD: 0.1,
  XOF: 60,
  XAF: 60
};

export function convertFromMad(value: number, currency: SupportedCurrency) {
  return Math.round(value * ratesFromMad[currency]);
}

export function formatMoney(value: number, currency: SupportedCurrency = "MAD") {
  const locale = currency === "MAD" ? "fr-MA" : currency === "USD" ? "en-US" : "fr-FR";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

export function formatDisplayMoney(valueMad: number, currency: SupportedCurrency = "MAD") {
  return formatMoney(convertFromMad(valueMad, currency), currency);
}
