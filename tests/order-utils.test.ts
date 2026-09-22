import { describe, expect, it } from "vitest";
import { calculateAov, calculateRate, calculateSubtotal } from "../src/lib/order-utils";

describe("order utilities", () => {
  it("calculates cart subtotal", () => {
    expect(
      calculateSubtotal([
        { unitPrice: 299, quantity: 1 },
        { unitPrice: 169, quantity: 2 }
      ])
    ).toBe(637);
  });

  it("handles AOV and empty order sets", () => {
    expect(calculateAov(1000, 4)).toBe(250);
    expect(calculateAov(1000, 0)).toBe(0);
  });

  it("calculates percentage rates safely", () => {
    expect(calculateRate(3, 10)).toBe(30);
    expect(calculateRate(3, 0)).toBe(0);
  });
});
