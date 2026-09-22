import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { loginAction } from "@/app/admin/actions/auth";

export default async function AdminLoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const admin = await getAdmin();
  if (admin) redirect("/admin");
  const params = await searchParams;

  return (
    <section className="section">
      <div className="container max-w-md">
        <form action={loginAction} className="grid gap-4 rounded-lg border border-black/10 bg-white p-6">
          <div>
            <p className="badge mb-3">Protected</p>
            <h1 className="text-3xl font-black">Admin login</h1>
          </div>
          <label className="field">
            <span>Email</span>
            <input className="input" type="email" name="email" required />
          </label>
          <label className="field">
            <span>Password</span>
            <input className="input" type="password" name="password" required />
          </label>
          {params.error ? <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">Invalid admin login.</p> : null}
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </section>
  );
}
