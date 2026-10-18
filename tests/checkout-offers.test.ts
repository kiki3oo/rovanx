import { describe, expect, it } from "vitest";
import { matchesBundle, validBumpPrice } from "../src/lib/checkout-offers";

const line = (id: string, slug: string, quantity = 1, isBump = false) => ({
  product: { id, slug }, quantity, isBump
});

describe("checkout offer validation", () => {
  it("accepts only the exact bundle contents and quantities", () => {
    const bundle = [{ productId: "vitality", quantity: 1 }, { productId: "oil", quantity: 1 }];
    expect(matchesBundle([line("vitality", "rovanx-vitality-60"), line("oil", "rovanx-control-oil")], bundle)).toBe(true);
    expect(matchesBundle([line("vitality", "rovanx-vitality-60"), line("other", "rovanx-ginseng")], bundle)).toBe(false);
    expect(matchesBundle([line("vitality", "rovanx-vitality-60", 2), line("oil", "rovanx-control-oil")], bundle)).toBe(false);
    expect(matchesBundle([line("vitality", "rovanx-vitality-60"), line("oil", "rovanx-control-oil", 1, true)], bundle)).toBe(false);
  });

  it("accepts only the configured bump for the main product", () => {
    expect(validBumpPrice([line("vitality", "rovanx-vitality-60"), line("oil", "rovanx-control-oil", 1, true)])).toBe(149);
    expect(validBumpPrice([line("oil", "rovanx-control-oil"), line("vitality", "rovanx-vitality-60", 1, true)])).toBe(199);
    expect(validBumpPrice([line("other", "rovanx-ginseng"), line("vitality", "rovanx-vitality-60", 1, true)])).toBeNull();
    expect(validBumpPrice([line("vitality", "rovanx-vitality-60"), line("oil", "rovanx-control-oil", 2, true)])).toBeNull();
  });
});
