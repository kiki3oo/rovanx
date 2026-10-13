import type { Metadata } from "next";
import Link from "next/link";
import { VipWheelFunnel } from "@/components/store/vip-wheel-funnel";
import { resolveWheelFunnel, WHEEL_FUNNELS } from "@/lib/wheel-funnels";

export const metadata: Metadata = {
  title: "ROVANX VIP | بوابة العروض والتخفيضات الحصرية",
  description: "دوّر عجلة الحظ الحصرية من ROVANX واستفد من تخفيضك الفوري مع التوصيل المجاني.",
  robots: {
    index: false,
    follow: false
  }
};

export default async function GoWheelRootPage({
  searchParams
}: {
  searchParams: Promise<{ p?: string; code?: string; hub?: string }>;
}) {
  const params = await searchParams;

  // Owner quick-reference hub at /go?hub=1
  if (params.hub === "1") {
    return (
      <div dir="rtl" className="min-h-screen bg-[#12141a] px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-3xl border border-bronze-500/40 bg-gradient-to-b from-[#24060c] to-[#161922] p-6 sm:p-8">
            <span className="badge border-bronze-400/30 bg-bronze-500/15 text-xs font-black text-bronze-300">
              🎯 روابط إعلانات عجلة الحظ (Meta & TikTok Ads)
            </span>
            <h1 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              جميع روابط عجلة التخفيضات حسب كل منتج أو باقة
            </h1>
            <p className="mt-2 text-sm text-white/75">
              كل رابط يفتح صفحة عجلة الحظ المستقلة (بدون قوائم وبدون صور حساسة لقبول سريع في الإعلانات)، وبعد تدوير العجلة يوجه الزبون مباشرة للمنتج أو الباقة المحددة مع تفعيل التخفيض تلقائياً.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {WHEEL_FUNNELS.map((f) => (
              <div
                key={f.code}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-bronze-400/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-lg bg-bronze-500 px-2.5 py-0.5 font-mono text-xs font-black text-black">
                      /go/{f.code}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      -{f.prizePercent}% ({f.promoCode})
                    </span>
                  </div>
                  <h2 className="mt-3 text-base font-black text-white">{f.productLabelAr}</h2>
                  <p className="mt-1 font-mono text-xs text-white/50" dir="ltr">
                    Target: {f.targetPath}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
                  <code className="text-xs text-bronze-300" dir="ltr">
                    https://rovanx.com/go/{f.code}
                  </code>
                  <Link
                    href={`/go/${f.code}`}
                    className="rounded-xl bg-white/10 px-3 py-1.5 text-xs font-black text-white hover:bg-bronze-500 hover:text-black"
                  >
                    معاينة العجلة ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const funnel = resolveWheelFunnel(params.p || params.code || "v1");
  return <VipWheelFunnel funnel={funnel} />;
}
