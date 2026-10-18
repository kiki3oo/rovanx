import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

const lifetimeSeconds = 60 * 60 * 24 * 30;

function cookieName(orderId: string) {
  return `rovanx_order_access_${orderId}`;
}

function sessionKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32 || secret === "replace-with-a-long-random-secret") {
    throw new Error("ADMIN_SESSION_SECRET must be a unique secret of at least 32 characters");
  }
  return secret;
}

function signature(payload: string) {
  return createHmac("sha256", sessionKey()).update(`order-access.${payload}`).digest("hex");
}

export function createOrderAccessToken(orderId: string, now = Date.now()) {
  const payload = `${orderId}.${now + lifetimeSeconds * 1000}`;
  return `${payload}.${signature(payload)}`;
}

export function verifyOrderAccessToken(token: string | undefined, orderId: string, now = Date.now()) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== orderId) return false;
  const expiresAt = Number(parts[1]);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= now) return false;
  const expected = Buffer.from(signature(`${parts[0]}.${parts[1]}`), "hex");
  const supplied = Buffer.from(parts[2], "hex");
  return expected.length === supplied.length && timingSafeEqual(expected, supplied);
}

export function grantOrderAccess(response: NextResponse, orderId: string) {
  response.cookies.set(cookieName(orderId), createOrderAccessToken(orderId), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: lifetimeSeconds
  });
  return response;
}

export async function hasOrderAccess(orderId: string) {
  const token = (await cookies()).get(cookieName(orderId))?.value;
  return verifyOrderAccessToken(token, orderId);
}
