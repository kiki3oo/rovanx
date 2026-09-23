"use client";

import { formatDisplayMoney } from "@/lib/money";
import { usePreferences } from "@/components/store/preferences-provider";

export function Money({ value, className }: { value: number; className?: string }) {
  const { currency } = usePreferences();
  return <span className={className}>{formatDisplayMoney(value, currency)}</span>;
}
