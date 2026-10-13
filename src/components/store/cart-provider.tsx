"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { calculateTierDiscount } from "@/lib/pricing-tiers";

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
  rawSubtotal: number;
  discountTotal: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: CartProduct, quantity?: number, openDrawer?: boolean) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "rovanx-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null;
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setLines(parsed);
      }
    } catch {
      // Ignore JSON or storage error
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded && typeof window !== "undefined") {
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(lines));
      } catch {
        // Ignore quota/private browsing errors
      }
    }
  }, [lines, loaded]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);
    const rawSubtotal = lines.reduce((sum, line) => sum + line.quantity * line.product.price, 0);
    const discountTotal = lines.reduce((sum, line) => {
      const { discount } = calculateTierDiscount(line.product.slug, line.product.price, line.quantity);
      return sum + discount;
    }, 0);
    const subtotal = Math.max(0, rawSubtotal - discountTotal);

    return {
      lines,
      count,
      rawSubtotal,
      discountTotal,
      subtotal,
      isOpen,
      openCart() {
        setIsOpen(true);
      },
      closeCart() {
        setIsOpen(false);
      },
      addItem(product, quantity = 1, openDrawer = true) {
        setLines((current) => {
          const existing = current.find((line) => line.product.id === product.id);
          if (!existing) return [...current, { product, quantity }];
          return current.map((line) =>
            line.product.id === product.id
              ? { ...line, quantity: Math.min(line.quantity + quantity, 20) }
              : line
          );
        });
        if (openDrawer) {
          setIsOpen(true);
        }
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
        if (typeof window !== "undefined") {
          window.localStorage.removeItem(storageKey);
        }
      }
    };
  }, [lines, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
