"use client";

import { usePreferences } from "@/components/store/preferences-provider";

export function BlogSearch({ search }: { search: string }) {
  const { t } = usePreferences();
  return (
    <form className="mb-8 grid gap-3 rounded-lg border border-black/10 bg-white p-4 sm:grid-cols-[1fr_auto]">
      <input className="input" name="search" aria-label={t("searchBlog")} placeholder={t("searchBlog")} defaultValue={search} />
      <button className="btn btn-primary">{t("searchAction")}</button>
    </form>
  );
}
