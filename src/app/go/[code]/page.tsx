import type { Metadata } from "next";
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

export function generateStaticParams() {
  return WHEEL_FUNNELS.map((f) => ({ code: f.code }));
}

export default async function GoWheelCodePage({
  params
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const funnel = resolveWheelFunnel(code);

  return <VipWheelFunnel funnel={funnel} />;
}
