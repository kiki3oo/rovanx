import { AdminShell } from "@/components/admin/admin-shell";
import { saveStoreSettingsAction } from "@/app/admin/actions/content";
import { prisma } from "@/lib/db";

type StoreSettings = {
  name?: string;
  tagline?: string;
  contactEmail?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  legalReviewRequired?: boolean;
};

export default async function SettingsPage({
  searchParams
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const params = await searchParams;
  const setting = await prisma.siteSetting.findUnique({ where: { key: "store" } });
  const store = (setting?.value || {}) as StoreSettings;

  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">Settings</h1>
      {params.saved === "1" ? (
        <p className="mb-4 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm font-bold text-emerald-800">
          Store settings saved successfully.
        </p>
      ) : null}

      <form action={saveStoreSettingsAction} className="rounded-lg border border-black/10 bg-white p-5">
        <h2 className="text-xl font-black">Store information</h2>
        <p className="mt-1 text-sm text-black/60">These details appear on the storefront and order confirmation page.</p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="field">
            <span className="font-bold">Store name</span>
            <input className="input" name="name" defaultValue={store.name || "ROVANX"} required />
          </label>
          <label className="field">
            <span className="font-bold">Tagline</span>
            <input className="input" name="tagline" defaultValue={store.tagline || ""} />
          </label>
          <label className="field">
            <span className="font-bold">Contact email</span>
            <input className="input" name="contactEmail" type="email" defaultValue={store.contactEmail || ""} />
          </label>
          <label className="field">
            <span className="font-bold">WhatsApp number</span>
            <input className="input" name="whatsapp" inputMode="tel" defaultValue={store.whatsapp === "PLACEHOLDER" ? "" : store.whatsapp || ""} placeholder="212600000000" />
            <span className="text-xs text-black/55">Use the country code without + or spaces.</span>
          </label>
          <label className="field">
            <span className="font-bold">Instagram URL</span>
            <input className="input" name="instagram" type="url" defaultValue={store.instagram || ""} placeholder="https://instagram.com/..." />
          </label>
          <label className="field">
            <span className="font-bold">Facebook URL</span>
            <input className="input" name="facebook" type="url" defaultValue={store.facebook || ""} placeholder="https://facebook.com/..." />
          </label>
          <label className="field">
            <span className="font-bold">TikTok URL</span>
            <input className="input" name="tiktok" type="url" defaultValue={store.tiktok || ""} placeholder="https://tiktok.com/@..." />
          </label>
          <label className="flex min-h-11 items-center gap-3 rounded-md border border-black/10 px-3">
            <input name="legalReviewRequired" type="checkbox" defaultChecked={store.legalReviewRequired !== false} />
            <span className="font-bold">Legal review required</span>
          </label>
        </div>

        <button className="btn btn-primary mt-5" type="submit">Save settings</button>
      </form>

      <div className="mt-5 rounded-lg border border-black/10 bg-white p-5">
        <h2 className="font-black">Tracking placeholders</h2>
        <p className="mt-2 text-sm text-black/65">
          Meta Pixel, Meta CAPI, Google Analytics, Search Console and TikTok Pixel are intentionally configured through environment variables or settings later. No IDs are hardcoded.
        </p>
      </div>
    </AdminShell>
  );
}
