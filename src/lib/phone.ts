export function sanitizePhoneInput(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("00212") && digits.length >= 14) {
    digits = "0" + digits.slice(5);
  } else if (digits.startsWith("212") && digits.length >= 12) {
    digits = "0" + digits.slice(3);
  }
  return digits.slice(0, 10);
}

const KNOWN_FAKE_SUBSCRIBERS = new Set([
  "12345678",
  "01234567",
  "23456789",
  "87654321",
  "76543210",
  "98765432",
  "01020304",
  "10203040",
  "11223344",
  "55667788",
  "12341234",
  "12312312",
  "00001111",
  "11110000"
]);

export function isFakePhonePattern(digits: string): boolean {
  if (digits.length !== 10) return true;
  const sub = digits.slice(2); // 8-digit subscriber number

  // 1. Block known sequential/test patterns
  if (KNOWN_FAKE_SUBSCRIBERS.has(sub)) return true;

  // 2. Block 6 or more identical consecutive digits anywhere (e.g. 0600000000, 0666666666, 0612222222)
  if (/(\d)\1{5,}/.test(digits)) return true;

  // 3. Block 8-digit subscriber numbers with only 1 or 2 unique digits (e.g. 0612121212, 0650505050)
  const uniqueDigits = new Set(sub.split("")).size;
  if (uniqueDigits <= 2) return true;

  // 4. Block 6+ strictly ascending or descending consecutive digits in subscriber number
  const ascending = "0123456789";
  const descending = "9876543210";
  for (let i = 0; i <= sub.length - 6; i++) {
    const chunk = sub.slice(i, i + 6);
    if (ascending.includes(chunk) || descending.includes(chunk)) {
      return true;
    }
  }

  return false;
}

export function isValidMoroccanPhone10Digits(phone: string): boolean {
  const digits = sanitizePhoneInput(phone);
  if (!/^0[567]\d{8}$/.test(digits) || digits.length !== 10) {
    return false;
  }
  return !isFakePhonePattern(digits);
}

export function isValidHumanText(raw: string, minLength = 2): boolean {
  const text = raw.trim();
  if (text.length < minLength) return false;

  // Reject 5+ identical consecutive characters (e.g. "aaaaa", "هههههه")
  if (/(.)\1{4,}/u.test(text)) return false;

  // Reject common test/spam strings
  const normalized = text.toLowerCase().replace(/\s+/g, " ");
  if (
    /^(test|testing|teste|azerty|qwerty|asdf|asdfgh|zxcv|zxcvbn|qwertz|fake|faux|null|none|admin|root|تست|تجربة|لا شيء|بدون|هههه+)$/i.test(
      normalized
    )
  ) {
    return false;
  }

  // Must contain at least 2 actual letters (Arabic or Latin)
  const letters = text.match(/[a-zA-Z\u0600-\u06FF]/g);
  if (!letters || letters.length < 2) return false;

  return true;
}

export function normalizeMoroccanPhone(phone: string) {
  const digits = sanitizePhoneInput(phone);
  if (digits.startsWith("0") && digits.length === 10) {
    return `+212${digits.slice(1)}`;
  }
  return `+${digits}`;
}

