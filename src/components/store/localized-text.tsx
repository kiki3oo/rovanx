"use client";

import type { TranslationKey } from "@/components/store/preferences-provider";
import { usePreferences } from "@/components/store/preferences-provider";

type LocalizedTextProps = {
  id: TranslationKey;
  as?: "span" | "p" | "strong";
  className?: string;
};

export function LocalizedText({ id, as = "span", className }: LocalizedTextProps) {
  const { t } = usePreferences();
  const Component = as;
  return <Component className={className}>{t(id)}</Component>;
}
