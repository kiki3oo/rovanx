import type { SupportedCurrency } from "@/lib/money";

const westAfricanXof = new Set([
  "BJ",
  "BF",
  "CI",
  "GW",
  "ML",
  "NE",
  "SN",
  "TG"
]);

const centralAfricanXaf = new Set(["CM", "CF", "TD", "CG", "GQ", "GA"]);

export function currencyForCountry(countryCode?: string | null): SupportedCurrency {
  const country = countryCode?.toUpperCase();
  if (!country) return "MAD";
  if (country === "MA") return "MAD";
  if (westAfricanXof.has(country)) return "XOF";
  if (centralAfricanXaf.has(country)) return "XAF";
  if (["FR", "BE", "ES", "IT", "DE", "NL", "PT"].includes(country)) return "EUR";
  if (country === "US") return "USD";
  return "MAD";
}
