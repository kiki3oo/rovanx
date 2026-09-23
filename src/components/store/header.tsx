"use client";

import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
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
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f5f0e7]/92 backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-3 py-2 md:min-h-24">
        <Link href="/" className="flex items-center rounded-md" aria-label="ROVANX home">
          <RovanxLogo className="h-16 w-[122px] sm:h-[86px] sm:w-[172px]" />
        </Link>
        <nav className="hidden items-center rounded-full border border-black/10 bg-white/72 px-2 py-2 text-sm font-bold shadow-sm md:flex">
          {nav.map(([key, href]) => (
            <Link key={key} href={href} className="rounded-full px-3 py-2 text-graphite-900/75 hover:bg-bronze-500/12 hover:text-bronze-600">
              {t(key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <PreferenceSwitcher />
          </div>
          <Link href="/cart" className="btn btn-secondary w-auto px-3 shadow-sm" aria-label={t("cart")}>
            <ShoppingBag size={18} />
            <span className="text-sm">{count}</span>
          </Link>
          <button
            className="btn btn-secondary w-auto px-3 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={t("categories")}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
      {open ? (
        <nav className="container grid gap-2 pb-4 md:hidden">
          <div className="surface-card p-2 sm:hidden">
            <PreferenceSwitcher />
          </div>
          {nav.map(([key, href]) => (
            <Link
              key={key}
              href={href}
              className="surface-card px-3 py-3 font-semibold"
              onClick={() => setOpen(false)}
            >
              {t(key)}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
