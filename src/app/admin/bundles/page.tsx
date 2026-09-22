import { AdminShell } from "@/components/admin/admin-shell";
import { saveBundleAction } from "@/app/admin/actions/content";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";

export default async function AdminBundlesPage() {
  const bundles = await prisma.bundle.findMany({ orderBy: { createdAt: "asc" } });
  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">Bundles</h1>
      <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-3">
          {bundles.map((bundle) => (
            <form key={bundle.id} action={saveBundleAction} className="grid gap-3 rounded-lg border border-black/10 bg-white p-4">
              <input type="hidden" name="id" value={bundle.id} />
              <input className="input" name="name" defaultValue={bundle.name} />
              <input className="input" name="slug" defaultValue={bundle.slug} />
              <textarea className="textarea" name="description" defaultValue={bundle.description} />
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="input" type="number" name="bundlePrice" defaultValue={bundle.bundlePrice} />
                <input className="input" type="number" name="regularCombinedPrice" defaultValue={bundle.regularCombinedPrice} />
              </div>
              <p className="text-sm">{formatMoney(bundle.bundlePrice)} bundle price</p>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="active" defaultChecked={bundle.active} /> Active
              </label>
              <button className="btn btn-secondary">Save</button>
            </form>
          ))}
        </div>
        <form action={saveBundleAction} className="grid h-fit gap-3 rounded-lg border border-black/10 bg-white p-4">
          <h2 className="font-black">New bundle</h2>
          <input className="input" name="name" placeholder="Name" />
          <input className="input" name="slug" placeholder="slug" />
          <textarea className="textarea" name="description" placeholder="Description" />
          <input className="input" type="number" name="bundlePrice" placeholder="Bundle price" />
          <input className="input" type="number" name="regularCombinedPrice" placeholder="Regular combined price" />
          <label className="flex items-center gap-2">
            <input type="checkbox" name="active" defaultChecked /> Active
          </label>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
      <p className="mt-4 text-sm text-black/60">Bundle item editing is seeded and modeled; granular item editing can be extended from this module.</p>
    </AdminShell>
  );
}
