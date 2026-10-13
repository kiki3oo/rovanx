"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpDown, Search, Sparkles } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import { localizedSeedText } from "@/components/store/seed-content";

type CategoryOption = { id: string; slug: string; name: string };

export function ShopFilters({
  categories,
  search,
  category,
  sort
}: {
  categories: CategoryOption[];
  search: string;
  category: string;
  sort: string;
}) {
  const { locale, t } = usePreferences();
  const isArabic = locale === "ar";
  const router = useRouter();
  const searchParams = useSearchParams();

  // Unified list of categories including Packs
  const categoryPills = [
    {
      slug: "",
      labelAr: "جميع المنتجات",
      labelFr: "Tous les produits"
    },
    {
      slug: "packs",
      labelAr: "⭐ باقات وعروض التوفير",
      labelFr: "⭐ Packs & Offres Avantages"
    },
    ...categories.map((c) => ({
      slug: c.slug,
      labelAr: localizedSeedText(c.name, "ar"),
      labelFr: localizedSeedText(c.name, "fr")
    }))
  ];

  function handleCategoryClick(slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    router.push(`/shop?${params.toString()}`);
  }

  function handleSortChange(newSort: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSort);
    router.push(`/shop?${params.toString()}`);
  }

  return (
    <div className="space-y-4">
      {/* Category Pills Strip */}
      <div className="flex flex-wrap items-center gap-2">
        {categoryPills.map((pill) => {
          const isSelected = category === pill.slug;
          return (
            <button
              key={pill.slug || "all"}
              type="button"
              onClick={() => handleCategoryClick(pill.slug)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                isSelected
                  ? "border border-amber-400 bg-gradient-to-r from-bronze-600 to-amber-600 text-white shadow-lg shadow-amber-500/20 scale-[1.02]"
                  : "border border-white/10 bg-white/[0.04] text-white/70 hover:border-white/25 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {isArabic ? pill.labelAr : pill.labelFr}
            </button>
          );
        })}
      </div>

      {/* Search & Sort Row */}
      <form
        method="GET"
        action="/shop"
        className="grid gap-3 sm:grid-cols-[1fr_auto_auto]"
      >
        {category ? <input type="hidden" name="category" value={category} /> : null}

        <div className="relative">
          <input
            name="search"
            defaultValue={search}
            placeholder={isArabic ? "ابحث عن منتج أو باقة..." : "Rechercher un produit ou pack..."}
            className="input w-full pl-10 pr-4 text-sm"
          />
          <Search size={16} className={`absolute top-1/2 -translate-y-1/2 text-white/40 ${isArabic ? "left-3" : "right-3"}`} />
        </div>

        <div className="relative">
          <select
            name="sort"
            defaultValue={sort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="select text-sm pl-4 pr-8"
          >
            <option value="featured">{isArabic ? "الأكثر طلباً (المميز)" : "Sélection & En vedette"}</option>
            <option value="newest">{isArabic ? "الأحدث" : "Plus récents"}</option>
            <option value="price-asc">{isArabic ? "السعر: من الأقل للأعلى" : "Prix croissant"}</option>
            <option value="price-desc">{isArabic ? "السعر: من الأعلى للأقل" : "Prix décroissant"}</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary px-5 text-sm font-bold">
          {isArabic ? "بحث" : "Rechercher"}
        </button>
      </form>
    </div>
  );
}
