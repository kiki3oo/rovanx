"use client";

import { supportedCurrencies } from "@/lib/money";
import { localeLabels, supportedLocales, usePreferences, type SupportedLocale } from "@/components/store/preferences-provider";

export function PreferenceSwitcher() {
  const { currency, locale, setCurrency, setLocale, t } = usePreferences();

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <label className="sr-only" htmlFor="locale-switcher">{t("language")}</label>
      <select
        id="locale-switcher"
        className="h-9 sm:h-10 cursor-pointer rounded-lg border border-[#991b31]/60 bg-gradient-to-b from-[#5a0d1c] via-[#480a16] to-[#33070f] px-2 sm:px-3 text-xs font-bold text-white shadow-md backdrop-blur-md transition-all hover:border-[#c22240] hover:from-[#6e1022] hover:to-[#420914] focus:border-[#c22240] focus:outline-none"
        value={locale}
        onChange={(event) => setLocale(event.target.value as SupportedLocale)}
      >
        {supportedLocales.map((item) => (
          <option key={item} value={item} className="bg-[#33070f] text-white font-bold">
            {localeLabels[item]}
          </option>
        ))}
      </select>
      <label className="sr-only" htmlFor="currency-switcher">{t("currency")}</label>
      <select
        id="currency-switcher"
        className="hidden sm:block h-10 cursor-pointer rounded-lg border border-[#991b31]/60 bg-gradient-to-b from-[#5a0d1c] via-[#480a16] to-[#33070f] px-3 text-xs font-bold text-white shadow-md backdrop-blur-md transition-all hover:border-[#c22240] hover:from-[#6e1022] hover:to-[#420914] focus:border-[#c22240] focus:outline-none"
        value={currency}
        onChange={(event) => setCurrency(event.target.value as typeof currency)}
      >
        {supportedCurrencies.map((item) => (
          <option key={item} value={item} className="bg-[#33070f] text-white font-bold">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
