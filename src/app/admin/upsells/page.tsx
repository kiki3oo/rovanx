import { AdminShell } from "@/components/admin/admin-shell";
import { saveUpsellRuleAction } from "@/app/admin/actions/content";
import { prisma } from "@/lib/db";
import { formatMoney } from "@/lib/money";

export default async function UpsellsPage() {
  const [rules, products] = await Promise.all([
    prisma.upsellRule.findMany({ include: { sourceProduct: true, offeredProduct: true }, orderBy: { priority: "desc" } }),
    prisma.product.findMany({ where: { active: true }, orderBy: { name: "asc" } })
  ]);
  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">Upsell Rules</h1>
      <div className="grid gap-5 lg:grid-cols-[1fr_420px]">
        <div className="grid gap-3">
          {rules.map((rule) => (
            <form key={rule.id} action={saveUpsellRuleAction} className="grid gap-3 rounded-lg border border-black/10 bg-white p-4">
              <input type="hidden" name="id" value={rule.id} />
              <div className="text-sm">
                <strong>{rule.sourceProduct.name}</strong> {"->"} <strong>{rule.offeredProduct.name}</strong> ({rule.upsellPrice ? formatMoney(rule.upsellPrice) : "default price"})
              </div>
              <input className="input" name="headline" defaultValue={rule.headline} />
              <input className="input" name="description" defaultValue={rule.description} />
              <input className="input" type="number" name="upsellPrice" defaultValue={rule.upsellPrice || ""} />
              <input className="input" type="number" name="priority" defaultValue={rule.priority} />
              <input type="hidden" name="sourceProductId" value={rule.sourceProductId} />
              <input type="hidden" name="offeredProductId" value={rule.offeredProductId} />
              <label className="flex items-center gap-2">
                <input type="checkbox" name="enabled" defaultChecked={rule.enabled} /> Enabled
              </label>
              <button className="btn btn-secondary">Save</button>
            </form>
          ))}
        </div>
        <form action={saveUpsellRuleAction} className="grid h-fit gap-3 rounded-lg border border-black/10 bg-white p-4">
          <h2 className="font-black">New rule</h2>
          <select className="select" name="sourceProductId">
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                Source: {product.name}
              </option>
            ))}
          </select>
          <select className="select" name="offeredProductId">
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                Offer: {product.name}
              </option>
            ))}
          </select>
          <input className="input" name="headline" placeholder="Headline" />
          <input className="input" name="description" placeholder="Description" />
          <input className="input" type="number" name="upsellPrice" placeholder="Upsell price" />
          <input className="input" type="number" name="priority" placeholder="Priority" defaultValue={0} />
          <label className="flex items-center gap-2">
            <input type="checkbox" name="enabled" defaultChecked /> Enabled
          </label>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </AdminShell>
  );
}
