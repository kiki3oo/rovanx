"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "vitality-ultra",
    title: "ROVANX Vitality Ultra",
    src: "/hero/rovanx-hero-showcase-v2.webp"
  },
  {
    id: "royal-force",
    title: "ROVANX Royal Force",
    src: "/hero/rovanx-hero-showcase-royal-force.webp"
  },
  {
    id: "expert-choice",
    title: "ROVANX Expert Choice",
    src: "/hero/rovanx-hero-showcase-expert.webp"
  }
];

export function HeroShowcaseSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="group relative flex aspect-square w-full max-w-[540px] mx-auto items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-2xl shadow-black/50 backdrop-blur-md select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-[1.02] pointer-events-none z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                width={1024}
                height={1024}
                className="h-full w-full rounded-xl object-cover shadow-2xl"
                priority={index === 0}
                unoptimized
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows (Visible on hover on desktop, always accessible on touch) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-black/80 hover:scale-110 transition-all duration-200"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-black/80 hover:scale-110 transition-all duration-200"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Pill Indicators */}
      <div className="absolute bottom-4 inset-x-0 z-20 flex items-center justify-center gap-2">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 shadow-lg shadow-red-600/50"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
