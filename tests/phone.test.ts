import { describe, expect, it } from "vitest";
import { normalizeMoroccanPhone } from "../src/lib/phone";

describe("phone normalization", () => {
  it("normalizes Moroccan local numbers", () => {
    expect(normalizeMoroccanPhone("0612 34 56 78")).toBe("+212612345678");
  });

  it("keeps 212-prefixed numbers", () => {
    expect(normalizeMoroccanPhone("+212 612 34 56 78")).toBe("+212612345678");
  });
});
