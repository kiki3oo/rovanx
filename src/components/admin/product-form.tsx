import type { Category, Product } from "@prisma/client";
import { saveProductAction } from "@/app/admin/actions/products";

export function ProductForm({ product, categories }: { product?: Product | null; categories: Category[] }) {
  return (
    <form action={saveProductAction} className="grid gap-4 rounded-lg border border-black/10 bg-white p-5">
      <input type="hidden" name="id" value={product?.id || ""} />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="field">
          <span>Name</span>
          <input className="input" name="name" defaultValue={product?.name || ""} required />
        </label>
        <label className="field">
          <span>Slug</span>
          <input className="input" name="slug" defaultValue={product?.slug || ""} required />
        </label>
        <label className="field">
          <span>SKU</span>
          <input className="input" name="sku" defaultValue={product?.sku || ""} required />
        </label>
        <label className="field">
          <span>Category</span>
          <select className="select" name="categoryId" defaultValue={product?.categoryId || categories[0]?.id}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Regular price MAD</span>
          <input className="input" name="regularPrice" type="number" defaultValue={product?.regularPrice || 0} required />
        </label>
        <label className="field">
          <span>Sale price MAD</span>
          <input className="input" name="salePrice" type="number" defaultValue={product?.salePrice || ""} />
        </label>
      </div>
      <label className="field">
        <span>Short description</span>
        <input className="input" name="shortDescription" defaultValue={product?.shortDescription || ""} required />
      </label>
      <label className="field">
        <span>Long description</span>
        <textarea className="textarea" name="longDescription" defaultValue={product?.longDescription || ""} required />
      </label>
      <div className="flex flex-wrap gap-4">
        {[
          ["active", "Active", product?.active ?? true],
          ["featured", "Featured", product?.featured ?? false],
          ["hero", "Hero", product?.hero ?? false]
        ].map(([name, label, checked]) => (
          <label key={String(name)} className="flex items-center gap-2 font-bold">
            <input type="checkbox" name={String(name)} defaultChecked={Boolean(checked)} />
            {String(label)}
          </label>
        ))}
      </div>
      <p className="rounded-md bg-sand-50 p-3 text-sm text-black/60">
        Ingredients, dosage, warnings, ONSSA references and claims remain placeholders until official lab documentation is available.
      </p>
      <button className="btn btn-primary">Save product</button>
    </form>
  );
}
