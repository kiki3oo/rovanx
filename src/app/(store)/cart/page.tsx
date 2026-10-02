"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Trash2, Truck } from "lucide-react";
import { useCart } from "@/components/store/cart-provider";
import { Money } from "@/components/store/money";
import { usePreferences } from "@/components/store/preferences-provider";

export default function CartPage() {
  const { lines, subtotal, updateQuantity, removeItem } = useCart();
  const { t } = usePreferences();
  const crossSell = lines.length ? null : null;

  return (
    <section className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-16">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
      <div className="container relative z-10">
        <p className="badge mb-3 border-white/10 bg-white/10 text-bronze-400">{t("cart")}</p>
        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="text-4xl font-black text-white sm:text-5xl">{t("cartTitle")}</h1>
            <p className="mt-3 text-white/75">{t("cartIntro")}</p>
          </div>
          <Link href="/shop" className="btn border border-white/20 bg-white/10 text-white hover:bg-white/15">
            {t("continueShopping")}
          </Link>
        </div>
        {lines.length ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="grid gap-3">
              {lines.map((line) => (
                <div key={line.product.id} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white backdrop-blur-md transition-all hover:border-bronze-500/40 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                  <div>
                    <h2 className="text-lg font-black text-white">{line.product.name}</h2>
                    <p className="mt-1 text-sm font-bold text-bronze-300"><Money value={line.product.price} /></p>
                  </div>
                  <label className="field max-w-24">
                    <span className="text-xs font-bold text-white/70">{t("quantity")}</span>
                    <input
                      className="rounded-lg border border-white/15 bg-white/[0.05] p-2 text-center text-sm text-white focus:border-bronze-400 focus:outline-none"
                      type="number"
                      min={1}
                      max={20}
                      value={line.quantity}
                      onChange={(event) => updateQuantity(line.product.id, Number(event.target.value))}
                    />
                  </label>
                  <button className="btn border border-white/10 bg-white/[0.05] px-3 text-white/70 transition-colors hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400" onClick={() => removeItem(line.product.id)} aria-label={t("removeItem")}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {crossSell}
            </div>
            <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-md">
              <h2 className="text-xl font-black text-white">{t("summary")}</h2>
              <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-white/85">
                <span>{t("subtotal")}</span>
                <strong className="text-xl text-white"><Money value={subtotal} /></strong>
              </div>
              <div className="mt-2 flex justify-between text-white/70">
                <span>{t("shipping")}</span>
                <span>{t("toConfirm")}</span>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-white/70">
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-bronze-400" /> {t("codSecureText")}</span>
                <span className="flex items-center gap-2"><PhoneCall size={16} className="text-bronze-400" /> {t("phoneConfirmation")}</span>
                <span className="flex items-center gap-2"><Truck size={16} className="text-bronze-400" /> {t("shipAfterValidation")}</span>
              </div>
              <Link href="/checkout" className="btn btn-primary mt-6 w-full">
                {t("checkout")} <ArrowRight size={17} />
              </Link>
            </aside>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-10 text-center text-white backdrop-blur-md">
            <p className="text-lg text-white/75">{t("emptyCart")}</p>
            <Link href="/shop" className="btn btn-primary mt-5">
              {t("viewProducts")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
