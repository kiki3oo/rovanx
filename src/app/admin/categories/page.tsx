import { AdminShell } from "@/components/admin/admin-shell";
import { saveCategoryAction } from "@/app/admin/actions/content";
import { prisma } from "@/lib/db";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">Categories</h1>
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="rounded-lg border border-black/10 bg-white">
          {categories.map((category) => (
            <form key={category.id} action={saveCategoryAction} className="grid gap-3 border-b border-black/10 p-4 md:grid-cols-4">
              <input type="hidden" name="id" value={category.id} />
              <input className="input" name="name" defaultValue={category.name} />
              <input className="input" name="slug" defaultValue={category.slug} />
              <input className="input" name="description" defaultValue={category.description || ""} />
              <label className="flex items-center gap-2">
                <input type="checkbox" name="active" defaultChecked={category.active} /> Active
              </label>
              <button className="btn btn-secondary md:col-span-4">Save</button>
            </form>
          ))}
        </div>
        <form action={saveCategoryAction} className="grid h-fit gap-3 rounded-lg border border-black/10 bg-white p-4">
          <h2 className="font-black">New category</h2>
          <input className="input" name="name" placeholder="Name" />
          <input className="input" name="slug" placeholder="slug" />
          <input className="input" name="description" placeholder="Description" />
          <label className="flex items-center gap-2">
            <input type="checkbox" name="active" defaultChecked /> Active
          </label>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </AdminShell>
  );
}
