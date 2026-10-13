export function sanitizePhoneInput(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("00212") && digits.length >= 14) {
    digits = "0" + digits.slice(5);
  } else if (digits.startsWith("212") && digits.length >= 12) {
    digits = "0" + digits.slice(3);
  }
  return digits.slice(0, 10);
}

export function isValidMoroccanPhone10Digits(phone: string): boolean {
  const digits = sanitizePhoneInput(phone);
  return /^0[567]\d{8}$/.test(digits) && digits.length === 10;
}

export function normalizeMoroccanPhone(phone: string) {
  const digits = sanitizePhoneInput(phone);
  if (digits.startsWith("0") && digits.length === 10) {
    return `+212${digits.slice(1)}`;
  }
  return `+${digits}`;
}
