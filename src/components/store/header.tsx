"use client";

import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { RovanxLogo } from "@/components/brand/rovanx-logo";
import { useCart } from "@/components/store/cart-provider";

const nav = [
  ["Shop", "/shop"],
  ["Categories", "/shop"],
  ["Blog", "/blog"],
  ["About", "/legal/about"],
  ["FAQ", "/legal/faq"]
];

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f5f0e7]/92 backdrop-blur-xl">
      <div className="container flex min-h-24 items-center justify-between gap-4 py-2">
        <Link href="/" className="flex items-center rounded-md" aria-label="ROVANX home">
          <RovanxLogo className="h-20 w-[150px] sm:h-[86px] sm:w-[172px]" />
        </Link>
        <nav className="hidden items-center rounded-full border border-black/10 bg-white/72 px-2 py-2 text-sm font-bold shadow-sm md:flex">
          {nav.map(([label, href]) => (
            <Link key={label} href={href} className="rounded-full px-3 py-2 text-graphite-900/75 hover:bg-bronze-500/12 hover:text-bronze-600">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/cart" className="btn btn-secondary px-3 shadow-sm" aria-label="Cart">
            <ShoppingBag size={18} />
            <span className="text-sm">{count}</span>
          </Link>
          <button
            className="btn btn-secondary px-3 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
      {open ? (
        <nav className="container grid gap-2 pb-4 md:hidden">
          {nav.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="surface-card px-3 py-3 font-semibold"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
