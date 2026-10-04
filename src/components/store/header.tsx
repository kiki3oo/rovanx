"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { RovanxLogo } from "@/components/brand/rovanx-logo";
import { useCart } from "@/components/store/cart-provider";
import { PreferenceSwitcher } from "@/components/store/preference-switcher";
import { usePreferences } from "@/components/store/preferences-provider";

const nav = [
  ["shop", "/shop"],
  ["categories", "/shop"],
  ["blog", "/blog"],
  ["about", "/legal/about"],
  ["faq", "/legal/faq"]
] as const;

export function Header() {
  const { count } = useCart();
  const { t } = usePreferences();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#5e0d1b]/40 bg-gradient-to-r from-[#170306]/98 via-[#24060c]/96 to-[#170306]/98 shadow-[0_4px_30px_rgba(23,3,6,0.7)] backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-3 py-2 md:min-h-24">
        <Link href="/" className="flex items-center py-1" aria-label="ROVANX home">
          <RovanxLogo className="h-14 w-auto sm:h-[72px]" priority tone="light" />
        </Link>
        <nav className="hidden items-center rounded-full border border-[#8c162c]/40 bg-gradient-to-r from-[#3b0811]/90 via-[#4e0c17]/90 to-[#3b0811]/90 p-1.5 text-sm font-bold shadow-[0_4px_20px_rgba(61,8,17,0.35)] backdrop-blur-md md:flex">
          {nav.map(([key, href]) => (
            <Link
              key={key}
              href={href}
              className="rounded-full px-4 py-1.5 text-white/85 transition-all hover:bg-[#8c162c]/45 hover:text-white hover:shadow-sm"
            >
              {t(key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <PreferenceSwitcher />
          <Link
            href="/cart"
            className="flex h-10 items-center gap-2 rounded-lg border border-[#991b31]/60 bg-gradient-to-b from-[#5a0d1c] via-[#480a16] to-[#33070f] px-3.5 text-white shadow-md transition-all hover:border-[#c22240] hover:from-[#6e1022] hover:to-[#420914]"
            aria-label={t("cart")}
          >
            <ShoppingBag size={18} className="text-bronze-300" />
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-bronze-500 px-1.5 text-xs font-black text-graphite-950">
              {count}
            </span>
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#991b31]/60 bg-gradient-to-b from-[#5a0d1c] via-[#480a16] to-[#33070f] text-white shadow-md transition-all hover:border-[#c22240] hover:from-[#6e1022] hover:to-[#420914] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={t("categories")}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-[#5e0d1b]/40 bg-[#170306]/98 px-4 pb-5 pt-3 backdrop-blur-2xl md:hidden">
          <div className="mb-3 rounded-xl border border-[#991b31]/40 bg-[#2d070e]/80 p-2 sm:hidden">
            <PreferenceSwitcher />
          </div>
          <div className="grid gap-2">
            {nav.map(([key, href]) => (
              <Link
                key={key}
                href={href}
                className="flex items-center justify-between rounded-xl border border-[#991b31]/40 bg-gradient-to-r from-[#480a16] to-[#2b060d] px-4 py-3 font-bold text-white transition-all hover:border-[#c22240]/60 hover:bg-[#5a0d1c]"
                onClick={() => setOpen(false)}
              >
                <span>{t(key)}</span>
                <span className="text-xs text-bronze-400">→</span>
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
