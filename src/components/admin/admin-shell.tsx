import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { logoutAction } from "@/app/admin/actions/auth";

const nav = [
  ["Dashboard", "/admin"],
  ["Orders", "/admin/orders"],
  ["Products", "/admin/products"],
  ["Categories", "/admin/categories"],
  ["Bundles", "/admin/bundles"],
  ["Upsell Rules", "/admin/upsells"],
  ["Customers", "/admin/customers"],
  ["Blog", "/admin/blog"],
  ["Settings", "/admin/settings"]
];

export async function AdminShell({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();
  return (
    <div className="min-h-screen bg-sand-50">
      <header className="border-b border-black/10 bg-graphite-950 text-white">
        <div className="container flex min-h-16 items-center justify-between gap-4">
          <Link href="/admin" className="font-black">
            ROVANX Admin
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-white/65 sm:inline">{admin.email}</span>
            <form action={logoutAction}>
              <button className="btn border border-white/15 bg-white/10 px-3 py-2 text-sm">Logout</button>
            </form>
          </div>
        </div>
      </header>
      <div className="container grid gap-6 py-6 lg:grid-cols-[220px_1fr]">
        <nav className="grid content-start gap-1 rounded-lg border border-black/10 bg-white p-3">
          {nav.map(([label, href]) => (
            <Link key={label} href={href} className="rounded-md px-3 py-2 text-sm font-bold hover:bg-sand-50">
              {label}
            </Link>
          ))}
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
}
