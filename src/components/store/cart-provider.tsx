"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartProduct = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  regularPrice: number;
};

export type CartLine = {
  product: CartProduct;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  addItem: (product: CartProduct, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "rovanx-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    // Hydrate persisted cart after mount so SSR markup stays stable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setLines(JSON.parse(saved));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) window.localStorage.setItem(storageKey, JSON.stringify(lines));
  }, [lines, loaded]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = lines.reduce((sum, line) => sum + line.quantity * line.product.price, 0);

    return {
      lines,
      count,
      subtotal,
      addItem(product, quantity = 1) {
        setLines((current) => {
          const existing = current.find((line) => line.product.id === product.id);
          if (!existing) return [...current, { product, quantity }];
          return current.map((line) =>
            line.product.id === product.id
              ? { ...line, quantity: Math.min(line.quantity + quantity, 20) }
              : line
          );
        });
      },
      updateQuantity(productId, quantity) {
        setLines((current) =>
          current.map((line) =>
            line.product.id === productId
              ? { ...line, quantity: Math.max(1, Math.min(quantity, 20)) }
              : line
          )
        );
      },
      removeItem(productId) {
        setLines((current) => current.filter((line) => line.product.id !== productId));
      },
      clear() {
        setLines([]);
        window.localStorage.removeItem(storageKey);
      }
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
