"use client";

import { usePreferences } from "@/components/store/preferences-provider";

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
  const { t } = usePreferences();

  return (
    <form className="surface-card grid gap-3 p-4 sm:grid-cols-3">
      <input className="input" name="search" aria-label={t("search")} placeholder={t("search")} defaultValue={search} />
      <select className="select" name="category" aria-label={t("categories")} defaultValue={category}>
        <option value="">{t("allCategories")}</option>
        {categories.map((item) => <option key={item.id} value={item.slug}>{item.name}</option>)}
      </select>
      <select className="select" name="sort" aria-label={t("filter")} defaultValue={sort}>
        <option value="featured">{t("featured")}</option>
        <option value="newest">{t("newest")}</option>
        <option value="price-asc">{t("priceAsc")}</option>
        <option value="price-desc">{t("priceDesc")}</option>
      </select>
      <button className="btn btn-primary sm:col-span-3">{t("filter")}</button>
    </form>
  );
}
