import { prisma } from "@/lib/db";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Flame,
  Lock,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap
} from "lucide-react";
import { Money } from "@/components/store/money";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";
import { ensureCatalogSynced } from "@/lib/catalog-sync";
import { BundleCodForm, BundleItemData } from "@/components/store/bundle-cod-form";
import { getProductVisual } from "@/lib/product-visuals";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = buildMetadata({
  title: "باقات وعروض التوفير الحصرية | ROVANX",
  description: "باقات ROVANX للنتائج المضاعفة والتوفير الأكبر. علاجات متكاملة مصممة علمياً للرجال: صلابة، تحكم، هرمونات وتوفير حتى 200 درهم مع شحن مجاني وتغليف سري 100%.",
  path: "/bundles"
});

const BUNDLE_BADGES: Record<string, { ar: string; fr: string; color: string }> = {
  "rovanx-pack-puissance": {
    ar: "⭐ الأكثر طلباً وتوفيراً (Best-Seller)",
    fr: "⭐ Meilleure Vente (Best-Seller)",
    color: "from-amber-500 to-amber-600 text-black font-black"
  },
  "rovanx-men-pack": {
    ar: "👑 الثنائي الفحولي الملكي",
    fr: "👑 Duo Virilité Royale",
    color: "from-amber-500/20 to-bronze-500/30 text-amber-300 border border-amber-500/30"
  },
  "rovanx-men-plus-pack": {
    ar: "🏆 الكورس الشامل VIP (3 في 1)",
    fr: "🏆 Cure Complète VIP (3-en-1)",
    color: "from-emerald-500/20 to-teal-500/30 text-emerald-300 border border-emerald-500/30"
  },
  "rovanx-prostate-energie-pack": {
    ar: "🌿 صحة البروستاتا والراحة الليلية",
    fr: "🌿 Santé Prostate & Confort",
    color: "from-blue-500/20 to-cyan-500/30 text-cyan-300 border border-blue-500/30"
  }
};

const BUNDLE_HIGHLIGHTS: Record<string, string[]> = {
  "rovanx-pack-puissance": [
    "صلابة حديدية وتمدد الحجم والسمك من الداخل (Vitality Ultra)",
    "تأخير القذف من 30 إلى 45 دقيقة وتحكم كامل من الخارج (Control Flow)",
    "إمتاع وإسعاد الزوجة في كل لقاء مع توفير فوري 100 درهم"
  ],
  "rovanx-men-pack": [
    "مضاعفة التدفق الدموي وتوسيع الأنسجة الكهفية (Vitality Ultra)",
    "ماكا سوداء بيروفية نادرة لانتصاب صخري دائم (Royal Force)",
    "طاقة فحولية متجددة بدون أي هبوط مع توفير 130 درهم"
  ],
  "rovanx-men-plus-pack": [
    "علاج 360 درجة متكامل: صلابة + هرمونات + طاقة عضلية",
    "تحفيز التستوستيرون الطبيعي بجينسينغ كوري معتق 6 سنوات (Testo Drive)",
    "كورس كامل لمدة شهرين لتثبيت النتائج الدائمة مع توفير 200 درهم"
  ],
  "rovanx-prostate-energie-pack": [
    "إفراغ مريح وكامل للمثانة ونوم هادئ بدون استيقاظ ليلي (Prosta Guard)",
    "تدفق بولي سلس وقوي مع راحة تامة في منطقة الحوض",
    "تنشيط الدورة الدموية ومقاومة الإجهاد والتعب (Testo Drive)"
  ]
};

export default async function BundlesPage() {
  await ensureCatalogSynced().catch(() => {});

  const bundles = await prisma.bundle.findMany({
    where: { active: true },
    include: { items: { include: { product: true } } },
    orderBy: { createdAt: "asc" }
  }).catch(() => []);

  const bundlesData: BundleItemData[] = bundles.map((b) => ({
    id: b.id,
    name: b.name,
    slug: b.slug,
    bundlePrice: b.bundlePrice,
    regularCombinedPrice: b.regularCombinedPrice,
    description: b.description,
    badge: BUNDLE_BADGES[b.slug]?.ar,
    items: b.items.map((it) => ({
      productId: it.product.id,
      productName: it.product.name,
      productSlug: it.product.slug,
      quantity: it.quantity
    }))
  }));

  return (
    <div className="relative min-h-screen bg-[#0e1015] text-white">
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#180a0f] via-[#12141a] to-[#0e1015] py-14 md:py-20">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-black text-amber-300">
            <Sparkles size={15} />
            <span>باقات وعروض التوفير الحصرية (ROVANX المغرب)</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white sm:text-5xl lg:text-6xl tracking-tight">
            باقات القوة والنتائج المضاعفة
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
            علاجات متكاملة مصممة علمياً للرجال: صلابة، تحكم، هرمونات وتوفير يصل إلى 200 درهم مع شحن مجاني 0 DH وتغليف سري 100% ودفع عند الاستلام.
          </p>

          {/* 3 Reassurance Pillars */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
              <Truck size={22} className="text-amber-400" />
              <span className="text-xs font-black text-white sm:text-sm">توصيل مجاني 0 DH</span>
              <span className="text-[10px] text-white/60">24 إلى 48 ساعة</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
              <Lock size={22} className="text-amber-400" />
              <span className="text-xs font-black text-white sm:text-sm">تغليف سري 100%</span>
              <span className="text-[10px] text-white/60">طرد محايد بدون إحراج</span>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
              <ShieldCheck size={22} className="text-emerald-400" />
              <span className="text-xs font-black text-white sm:text-sm">معاينة قبل الدفع</span>
              <span className="text-[10px] text-white/60">افحص أمانتك مع الموزع</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PACKS CARDS GRID */}
      <section className="section py-14">
        <div className="container">
          <div className="mb-10 text-center">
            <span className="badge border-white/10 bg-white/5 text-xs font-bold text-amber-400">
              اختر الباقة الأنسب لاحتياجك
            </span>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">
              باقات ROVANX المتكاملة
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bundles.map((bundle) => {
              const badgeInfo = BUNDLE_BADGES[bundle.slug];
              const highlights = BUNDLE_HIGHLIGHTS[bundle.slug] || [];
              const savings = bundle.regularCombinedPrice - bundle.bundlePrice;
              const isBestSeller = bundle.slug === "rovanx-pack-puissance";

              return (
                <article
                  key={bundle.id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl ${
                    isBestSeller
                      ? "border-amber-400 bg-gradient-to-b from-[#241419]/90 via-[#181a22]/80 to-[#12141a]/90 shadow-2xl shadow-amber-500/10 ring-2 ring-amber-400/30"
                      : "border-white/10 bg-white/[0.03] hover:border-amber-500/40 hover:bg-white/[0.06] shadow-xl"
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-black ${
                          badgeInfo ? badgeInfo.color : "bg-white/10 text-white"
                        }`}
                      >
                        {badgeInfo?.ar || "باقة توفير مميزة"}
                      </span>
                      {savings > 0 ? (
                        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-black text-emerald-300">
                          وفر {savings} DH
                        </span>
                      ) : null}
                    </div>

                    {/* Pack Visual Packshots Preview */}
                    <div className="mb-5 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      {bundle.items.map((item, idx) => {
                        const visual = getProductVisual(item.product.slug);
                        return (
                          <div key={item.id} className="flex items-center gap-2">
                            {idx > 0 ? (
                              <span className="text-xl font-black text-amber-400">+</span>
                            ) : null}
                            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-white/[0.03] p-1.5 flex items-center justify-center">
                              {visual ? (
                                <img
                                  src={visual.src}
                                  alt={item.product.name}
                                  className="h-full w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <span className="text-xs font-bold text-white/50">{item.product.name}</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                      {bundle.name}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      {bundle.description}
                    </p>

                    {/* What's inside */}
                    <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                      <p className="text-xs font-black uppercase text-amber-300">مكونات ومزايا الباقة:</p>
                      <ul className="space-y-2 text-xs text-white/85">
                        {highlights.length > 0
                          ? highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                                <span>{h}</span>
                              </li>
                            ))
                          : bundle.items.map((it) => (
                              <li key={it.id} className="flex items-center gap-2">
                                <CheckCircle2 size={15} className="shrink-0 text-emerald-400" />
                                <span>{it.product.name}</span>
                              </li>
                            ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <div>
                        <span className="text-xs text-white/60">سعر الباقة الإجمالي:</span>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-black text-amber-400">
                            <Money value={bundle.bundlePrice} />
                          </p>
                          <p className="text-sm text-white/40 line-through">
                            <Money value={bundle.regularCombinedPrice} />
                          </p>
                        </div>
                      </div>
                      <span className="rounded bg-emerald-500/20 px-2 py-1 text-[11px] font-black text-emerald-300">
                        شحن مجاني 0 DH ✓
                      </span>
                    </div>

                    <a
                      href="#bundle-order-form"
                      className={`btn mt-4 flex min-h-12 w-full items-center justify-center gap-2 text-sm font-black uppercase tracking-wider shadow-lg transition-all ${
                        isBestSeller
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:brightness-110"
                          : "btn-primary"
                      }`}
                    >
                      <span>اطلب هذه الباقة الآن</span>
                      <ArrowDown size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* 3. DIRECT COD ORDER FORM */}
          <BundleCodForm bundles={bundlesData} />
        </div>
      </section>

      {/* 4. FOOTER TRUST & SATISFACTION GUARANTEES */}
      <section className="section border-t border-white/10 bg-[#12141a] py-14">
        <div className="container max-w-4xl text-center">
          <span className="badge border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-300">
            ضمان الرضا والخصوصية 100%
          </span>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
            لماذا يثق آلاف الرجال في المغرب بـ ROVANX؟
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 text-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 font-bold">
                🔒
              </div>
              <h3 className="mt-3 text-base font-black text-white">سرية تامة 100%</h3>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                طرد كرتوني مغلق بإحكام وبدون أي اسم أو تفاصيل للمنتج. معلوماتك الشخصية محمية ولا يتم مشاركتها أبداً.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold">
                ✓
              </div>
              <h3 className="mt-3 text-base font-black text-white">معاينة قبل الدفع</h3>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                من حقك القانوني فحص علبتك والتأكد من سلامة الطرد مع موزع الأمانة قبل تسليم أي درهم.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 font-bold">
                🌿
              </div>
              <h3 className="mt-3 text-base font-black text-white">مكونات طبيعية نقية</h3>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                تركيبات عشبية نباتية 100% بدون أي مواد كيميائية ضارة، لا تسبب صداعاً ولا خفقاناً ولا أي آثار جانبية.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
