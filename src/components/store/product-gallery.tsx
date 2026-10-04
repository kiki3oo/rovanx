"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductVisual } from "@/lib/product-visuals";

export function ProductGallery({
  images,
  productName
}: {
  images: ProductVisual[];
  productName: string;
}) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative flex aspect-square w-full max-w-[520px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md text-center">
        <div>
          <p className="text-3xl font-black text-white">{productName}</p>
          <p className="mt-2 text-white/60">Photo du produit bientôt disponible</p>
        </div>
      </div>
    );
  }

  const current = images[selectedIdx] || images[0];

  return (
    <div className="flex flex-col gap-4 w-full max-w-[520px] mx-auto">
      {/* Main Image Showcase */}
      <div className="group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-2xl shadow-black/50 backdrop-blur-md">
        <img
          src={current.src}
          alt={current.alt || productName}
          className="h-full w-full rounded-xl object-cover transition-all duration-500 group-hover:scale-[1.02]"
        />

        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white/90 backdrop-blur-md border border-white/10 select-none">
            {selectedIdx + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails row (if multiple images) */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-3">
          {images.map((item, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={item.src + idx}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                aria-label={`Afficher l'image ${idx + 1}`}
                className={`relative h-20 w-20 overflow-hidden rounded-xl border p-1 transition-all duration-200 ${
                  isSelected
                    ? "border-bronze-400 bg-white/[0.08] ring-2 ring-bronze-400/50 scale-105 shadow-lg shadow-black/40"
                    : "border-white/10 bg-white/[0.02] opacity-70 hover:opacity-100 hover:border-white/30"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full rounded-lg object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
