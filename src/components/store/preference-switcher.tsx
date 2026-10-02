"use client";

import { supportedCurrencies } from "@/lib/money";
import { localeLabels, supportedLocales, usePreferences, type SupportedLocale } from "@/components/store/preferences-provider";

export function PreferenceSwitcher() {
  const { currency, locale, setCurrency, setLocale, t } = usePreferences();

  return (
    <div className="flex items-center gap-1.5">
      <label className="sr-only" htmlFor="locale-switcher">{t("language")}</label>
      <select
        id="locale-switcher"
        className="h-10 rounded-lg border border-[#8c162c]/35 bg-black/45 px-2.5 text-xs font-bold text-white shadow-sm backdrop-blur-md transition-colors hover:border-[#a81c37]/60 focus:border-[#a81c37] focus:outline-none"
        value={locale}
        onChange={(event) => setLocale(event.target.value as SupportedLocale)}
      >
        {supportedLocales.map((item) => (
          <option key={item} value={item} className="bg-[#1f0509] text-white">
            {localeLabels[item]}
          </option>
        ))}
      </select>
      <label className="sr-only" htmlFor="currency-switcher">{t("currency")}</label>
      <select
        id="currency-switcher"
        className="h-10 rounded-lg border border-[#8c162c]/35 bg-black/45 px-2.5 text-xs font-bold text-white shadow-sm backdrop-blur-md transition-colors hover:border-[#a81c37]/60 focus:border-[#a81c37] focus:outline-none"
        value={currency}
        onChange={(event) => setCurrency(event.target.value as typeof currency)}
      >
        {supportedCurrencies.map((item) => (
          <option key={item} value={item} className="bg-[#1f0509] text-white">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
