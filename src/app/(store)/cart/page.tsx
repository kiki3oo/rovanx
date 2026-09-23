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
    <section className="section">
      <div className="container">
        <p className="badge mb-3">{t("cart")}</p>
        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="text-4xl font-black">{t("cartTitle")}</h1>
            <p className="mt-3 text-black/62">{t("cartIntro")}</p>
          </div>
          <Link href="/shop" className="btn btn-secondary">
            {t("continueShopping")}
          </Link>
        </div>
        {lines.length ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="grid gap-3">
              {lines.map((line) => (
                <div key={line.product.id} className="surface-card grid gap-4 p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                  <div>
                    <h2 className="font-black">{line.product.name}</h2>
                    <p className="text-sm text-black/55"><Money value={line.product.price} /></p>
                  </div>
                  <label className="field max-w-24">
                    <span className="text-xs font-bold">{t("quantity")}</span>
                    <input
                      className="input"
                      type="number"
                      min={1}
                      max={20}
                      value={line.quantity}
                      onChange={(event) => updateQuantity(line.product.id, Number(event.target.value))}
                    />
                  </label>
                  <button className="btn btn-secondary px-3" onClick={() => removeItem(line.product.id)} aria-label={t("removeItem")}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {crossSell}
            </div>
            <aside className="premium-panel h-fit p-5">
              <h2 className="text-xl font-black">{t("summary")}</h2>
              <div className="mt-4 flex justify-between border-t border-black/10 pt-4">
                <span>{t("subtotal")}</span>
                <strong><Money value={subtotal} /></strong>
              </div>
              <div className="mt-2 flex justify-between">
                <span>{t("shipping")}</span>
                <span>{t("toConfirm")}</span>
              </div>
              <div className="mt-5 grid gap-3 text-sm text-black/65">
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-bronze-600" /> {t("codSecureText")}</span>
                <span className="flex items-center gap-2"><PhoneCall size={16} className="text-bronze-600" /> {t("phoneConfirmation")}</span>
                <span className="flex items-center gap-2"><Truck size={16} className="text-bronze-600" /> {t("shipAfterValidation")}</span>
              </div>
              <Link href="/checkout" className="btn btn-primary mt-5 w-full">
                {t("checkout")} <ArrowRight size={17} />
              </Link>
            </aside>
          </div>
        ) : (
          <div className="premium-panel p-8 text-center">
            <p>{t("emptyCart")}</p>
            <Link href="/shop" className="btn btn-primary mt-4">
              {t("viewProducts")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
