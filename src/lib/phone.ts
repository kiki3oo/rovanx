export function normalizeMoroccanPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("212")) return `+${digits}`;
  if (digits.startsWith("0")) return `+212${digits.slice(1)}`;
  if (digits.length === 9) return `+212${digits}`;
  return `+${digits}`;
}
