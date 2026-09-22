"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/components/store/cart-provider";
import { formatMoney } from "@/lib/money";

export default function CartPage() {
  const { lines, subtotal, updateQuantity, removeItem } = useCart();
  const crossSell = lines.length ? null : null;

  return (
    <section className="section">
      <div className="container">
        <p className="badge mb-3">Panier</p>
        <h1 className="mb-8 text-4xl font-black">Votre commande</h1>
        {lines.length ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="grid gap-3">
              {lines.map((line) => (
                <div key={line.product.id} className="grid gap-4 rounded-lg border border-black/10 bg-white p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                  <div>
                    <h2 className="font-black">{line.product.name}</h2>
                    <p className="text-sm text-black/55">{formatMoney(line.product.price)}</p>
                  </div>
                  <label className="field max-w-24">
                    <span className="text-xs font-bold">Qty</span>
                    <input
                      className="input"
                      type="number"
                      min={1}
                      max={20}
                      value={line.quantity}
                      onChange={(event) => updateQuantity(line.product.id, Number(event.target.value))}
                    />
                  </label>
                  <button className="btn btn-secondary px-3" onClick={() => removeItem(line.product.id)} aria-label="Remove item">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {crossSell}
            </div>
            <aside className="h-fit rounded-lg border border-black/10 bg-white p-5">
              <h2 className="text-xl font-black">Total</h2>
              <div className="mt-4 flex justify-between border-t border-black/10 pt-4">
                <span>Sous-total</span>
                <strong>{formatMoney(subtotal)}</strong>
              </div>
              <div className="mt-2 flex justify-between">
                <span>Livraison</span>
                <span>A confirmer</span>
              </div>
              <Link href="/checkout" className="btn btn-primary mt-5 w-full">
                Continuer
              </Link>
            </aside>
          </div>
        ) : (
          <div className="rounded-lg border border-black/10 bg-white p-8 text-center">
            <p>Votre panier est vide.</p>
            <Link href="/shop" className="btn btn-primary mt-4">
              Voir les produits
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
