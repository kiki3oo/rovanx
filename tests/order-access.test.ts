import { beforeAll, describe, expect, it } from "vitest";
import { createOrderAccessToken, verifyOrderAccessToken } from "../src/lib/order-access";

beforeAll(() => {
  process.env.ADMIN_SESSION_SECRET = "test-only-secret-with-at-least-thirty-two-characters";
});

describe("order access", () => {
  it("accepts only the matching order before expiry", () => {
    const token = createOrderAccessToken("order-1", 1000);
    expect(verifyOrderAccessToken(token, "order-1", 1001)).toBe(true);
    expect(verifyOrderAccessToken(token, "order-2", 1001)).toBe(false);
    expect(verifyOrderAccessToken(token, "order-1", 1000 + 30 * 24 * 60 * 60 * 1000)).toBe(false);
  });

  it("rejects modified and malformed tokens", () => {
    const token = createOrderAccessToken("order-1", 1000);
    expect(verifyOrderAccessToken(token.replace("order-1", "order-2"), "order-2", 1001)).toBe(false);
    expect(verifyOrderAccessToken("order-1.invalid.signature", "order-1", 1001)).toBe(false);
  });
});
