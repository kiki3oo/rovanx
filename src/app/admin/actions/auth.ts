"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { createSession, destroySession, verifyPassword } from "@/lib/auth";

import { headers } from "next/headers";

type LoginAttempt = { count: number; firstAttempt: number; lockedUntil?: number };
const loginAttempts = new Map<string, LoginAttempt>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes lockout

export async function loginAction(formData: FormData) {
  const reqHeaders = await headers();
  const clientIp =
    reqHeaders.get("cf-connecting-ip") ||
    reqHeaders.get("x-forwarded-for")?.split(",")[0].trim() ||
    reqHeaders.get("x-real-ip") ||
    "unknown";

  const email = String(formData.get("email") || "").toLowerCase().trim();
  const password = String(formData.get("password") || "");

  const key = `${clientIp}:${email}`;
  const now = Date.now();
  const attempt = loginAttempts.get(key);

  if (attempt?.lockedUntil && now < attempt.lockedUntil) {
    redirect("/admin/login?error=locked");
  }

  const admin = await prisma.adminUser.findUnique({ where: { email } });
  const isMatch = admin ? await verifyPassword(password, admin.passwordHash) : false;

  if (!admin || !isMatch) {
    const current = attempt || { count: 0, firstAttempt: now };
    current.count += 1;
    if (current.count >= MAX_ATTEMPTS) {
      current.lockedUntil = now + LOCKOUT_MS;
    }
    loginAttempts.set(key, current);
    redirect("/admin/login?error=1");
  }

  // Reset attempts on successful login
  loginAttempts.delete(key);
  await createSession(admin.id);
  redirect("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}
