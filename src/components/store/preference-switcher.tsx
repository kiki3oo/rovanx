"use client";

import { supportedCurrencies } from "@/lib/money";
import { localeLabels, supportedLocales, usePreferences } from "@/components/store/preferences-provider";

export function PreferenceSwitcher() {
  const { currency, locale, setCurrency, setLocale, t } = usePreferences();

  return (
    <div className="flex items-center gap-2">
      <label className="sr-only" htmlFor="locale-switcher">{t("language")}</label>
      <select
        id="locale-switcher"
        className="h-11 rounded-md border border-black/10 bg-white/80 px-2 text-xs font-black text-graphite-900 shadow-sm"
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
      >
        {supportedLocales.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
      <label className="sr-only" htmlFor="currency-switcher">{t("currency")}</label>
      <select
        id="currency-switcher"
        className="h-11 rounded-md border border-black/10 bg-white/80 px-2 text-xs font-black text-graphite-900 shadow-sm"
        value={currency}
        onChange={(event) => setCurrency(event.target.value as typeof currency)}
      >
        {supportedCurrencies.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
