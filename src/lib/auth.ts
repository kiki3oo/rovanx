import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

const cookieName = "rovanx_admin";

function secret() {
  return process.env.ADMIN_SESSION_SECRET || "development-secret-change-me";
}

async function sign(value: string) {
  const data = new TextEncoder().encode(`${value}.${secret()}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Buffer.from(digest).toString("hex");
}

export async function createSession(adminId: string) {
  const signature = await sign(adminId);
  const store = await cookies();
  store.set(cookieName, `${adminId}.${signature}`, {
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
  const [adminId, signature] = session.split(".");
  if (!adminId || !signature) return null;
  if ((await sign(adminId)) !== signature) return null;
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
