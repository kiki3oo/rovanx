import { AdminShell } from "@/components/admin/admin-shell";
import { prisma } from "@/lib/db";

export default async function SettingsPage() {
  const settings = await prisma.siteSetting.findMany({ orderBy: { key: "asc" } });
  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">Settings</h1>
      <div className="grid gap-4">
        {settings.map((setting) => (
          <div key={setting.id} className="rounded-lg border border-black/10 bg-white p-5">
            <h2 className="font-black">{setting.key}</h2>
            <pre className="mt-3 overflow-x-auto rounded-md bg-sand-50 p-3 text-xs">
              {JSON.stringify(setting.value, null, 2)}
            </pre>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-black/10 bg-white p-5">
        <h2 className="font-black">Tracking placeholders</h2>
        <p className="mt-2 text-sm text-black/65">
          Meta Pixel, Meta CAPI, Google Analytics, Search Console and TikTok Pixel are intentionally configured through environment variables or settings later. No IDs are hardcoded.
        </p>
      </div>
    </AdminShell>
  );
}
