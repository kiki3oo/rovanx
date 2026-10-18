import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { createHmac, timingSafeEqual } from "node:crypto";

const cookieName = "rovanx_admin";

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 32 || value === "replace-with-a-long-random-secret") {
    throw new Error("ADMIN_SESSION_SECRET must be a unique secret of at least 32 characters");
  }
  return value;
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export async function createSession(adminId: string) {
  const expiresAt = Date.now() + 60 * 60 * 24 * 7 * 1000;
  const payload = `${adminId}.${expiresAt}`;
  const signature = sign(payload);
  const store = await cookies();
  store.set(cookieName, `${payload}.${signature}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(cookieName);
}

export async function getAdmin() {
  const store = await cookies();
  const session = store.get(cookieName)?.value;
  if (!session) return null;
  const [adminId, expiresAt, signature] = session.split(".");
  if (!adminId || !expiresAt || !signature || session.split(".").length !== 3) return null;
  if (!Number.isSafeInteger(Number(expiresAt)) || Number(expiresAt) <= Date.now()) return null;
  const expected = Buffer.from(sign(`${adminId}.${expiresAt}`), "hex");
  const supplied = Buffer.from(signature, "hex");
  if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) return null;
  return prisma.adminUser.findUnique({ where: { id: adminId } });
}

export async function requireAdmin() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
