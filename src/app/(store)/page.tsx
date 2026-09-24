import Link from "next/link";
import { ArrowRight, BadgeCheck, PhoneCall, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";
import { RovanxLogo } from "@/components/brand/rovanx-logo";
import { Money } from "@/components/store/money";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";

export const metadata = buildMetadata({
  title: "ROVANX | Men's Vitality & Wellness",
  description: "Boutique marocaine ROVANX pour la vitalite et le bien-etre masculin.",
  path: "/"
});

export default async function HomePage() {
  const [featured, bundles, articles] = await Promise.all([
    prisma.product.findMany({ where: { active: true, featured: true }, take: 3, orderBy: { createdAt: "asc" } }),
    prisma.bundle.findMany({ where: { active: true }, take: 3, include: { items: { include: { product: true } } } }),
    prisma.article.findMany({ where: { status: "PUBLISHED" }, take: 3, orderBy: { publishedAt: "desc" } })
  ]);

  return (
    <>
      <section className="brand-hero relative overflow-hidden py-12 text-white md:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
        <div className="container grid items-center gap-10 md:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-6">
            <span className="badge w-fit border-white/10 bg-white/10 text-bronze-500"><LocalizedText id="heroBadge" /></span>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.04] sm:text-5xl md:text-6xl">
              <LocalizedText id="heroTitle" /> <span className="gold-text"><LocalizedText id="heroHighlight" /></span>
            </h1>
            <LocalizedText id="heroText" as="p" className="max-w-xl text-lg text-white/72" />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="btn btn-primary">
                <LocalizedText id="heroCta" /> <ArrowRight size={18} />
              </Link>
              <Link href="/bundles" className="btn border border-white/20 bg-white/8 text-white hover:bg-white/12">
                <LocalizedText id="heroBundles" />
              </Link>
            </div>
            <div className="grid gap-3 pt-2 text-sm text-white/78 sm:grid-cols-3">
              {["codSecure", "callConfirm", "premiumPick"].map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-semibold">
                  <LocalizedText id={item as "codSecure" | "callConfirm" | "premiumPick"} />
                </span>
              ))}
            </div>
          </div>
          <div className="dark-surface soft-glow grid min-h-[310px] place-items-center rounded-lg p-7 shadow-2xl shadow-black/20 md:min-h-[410px]">
            <RovanxLogo className="h-[300px] w-[260px] sm:h-[350px] sm:w-[310px]" />
          </div>
        </div>
        <div className="conversion-strip mt-14">
          <div className="container grid gap-3 py-4 text-sm text-white/75 md:grid-cols-4">
            {[
              [ShieldCheck, "codSecure", "codSecureText"],
              [PhoneCall, "callConfirm", "callConfirmText"],
              [Truck, "delivery", "deliveryText"],
              [Star, "heroBundles", "premiumPick"]
            ].map(([Icon, title, text]) => (
              <div key={String(title)} className="flex gap-3">
                <Icon className="mt-1 shrink-0 text-bronze-500" size={18} />
                <div>
                  <p className="font-black text-white"><LocalizedText id={title as "codSecure" | "callConfirm" | "delivery" | "heroBundles"} /></p>
                  <p><LocalizedText id={text as "codSecureText" | "callConfirmText" | "deliveryText" | "premiumPick"} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-white">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            ["1", "choose", "chooseText"],
            ["2", "confirm", "confirmText"],
            ["3", "receive", "receiveText"]
          ].map(([step, title, text]) => (
            <div key={step} className="premium-panel grid gap-3 p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-graphite-950 text-sm font-black text-bronze-500">{step}</span>
              <h2 className="text-xl font-black"><LocalizedText id={title as "choose" | "confirm" | "receive"} /></h2>
              <LocalizedText id={text as "chooseText" | "confirmText" | "receiveText"} as="p" className="text-sm leading-6 text-black/62" />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-7 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="badge mb-3"><LocalizedText id="bestSellers" /></p>
              <h2 className="text-3xl font-black"><LocalizedText id="premiumPick" /></h2>
              <LocalizedText id="bestSellersText" as="p" className="mt-2 max-w-xl text-black/62" />
            </div>
            <Link href="/shop" className="btn btn-secondary">
              <LocalizedText id="viewProducts" /> <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="badge mb-3"><LocalizedText id="fastDecision" /></p>
            <h2 className="text-3xl font-black"><LocalizedText id="categories" /></h2>
            <LocalizedText id="categoryIntro" as="p" className="mt-3 text-black/62" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["goalVitality", "Vitality"], ["goalWellness", "Men's wellness"], ["goalProstate", "Prostate support"],
              ["goalEnergy", "Energy"], ["goalBalance", "Balance"], ["goalSleep", "Sleep"]
            ].map(([key, goal]) => (
              <Link key={key} href={`/shop?search=${encodeURIComponent(goal)}`} className="surface-card p-5 font-black hover:border-bronze-500">
                <Sparkles className="mb-4 text-bronze-600" size={20} />
                <LocalizedText id={key as "goalVitality" | "goalWellness" | "goalProstate" | "goalEnergy" | "goalBalance" | "goalSleep"} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="badge mb-3"><LocalizedText id="bundles" /></p>
          <h2 className="mb-2 text-3xl font-black"><LocalizedText id="bundlesTitle" /></h2>
          <LocalizedText id="bundlesIntro" as="p" className="mb-7 max-w-2xl text-black/62" />
          <div className="grid gap-5 md:grid-cols-3">
            {bundles.map((bundle) => (
              <article key={bundle.id} className="premium-panel p-5">
                <BadgeCheck className="mb-4 text-bronze-600" />
                <h3 className="text-xl font-black">{bundle.name}</h3>
                <p className="mt-2 text-sm text-black/65"><SeedContent value={bundle.description} /></p>
                <p className="mt-4 text-2xl font-black"><Money value={bundle.bundlePrice} /></p>
                <p className="text-sm text-black/50 line-through"><Money value={bundle.regularCombinedPrice} /></p>
                <Link href="/bundles" className="btn btn-primary mt-5">
                  <LocalizedText id="heroBundles" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-graphite-950 text-white">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            [PhoneCall, "quickConfirm", "quickConfirmText"],
            [Truck, "shipAfterCall", "shipAfterCallText"],
            [ShieldCheck, "cashOnDelivery", "cashOnDeliveryText"]
          ].map(([Icon, title, text]) => (
            <div key={String(title)} className="dark-surface rounded-lg p-5">
              <Icon className="text-bronze-500" />
              <h3 className="mt-4 font-black"><LocalizedText id={title as "quickConfirm" | "shipAfterCall" | "cashOnDelivery"} /></h3>
              <LocalizedText id={text as "quickConfirmText" | "shipAfterCallText" | "cashOnDeliveryText"} as="p" className="mt-2 text-sm text-white/65" />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="badge mb-3"><LocalizedText id="education" /></p>
          <h2 className="mb-7 text-3xl font-black"><LocalizedText id="selectedArticles" /></h2>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="surface-card p-5 hover:border-bronze-500/45">
                <h3 className="font-black"><SeedContent value={article.title} /></h3>
                <p className="mt-2 text-sm text-black/65"><SeedContent value={article.excerpt} /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container dark-surface grid gap-5 rounded-lg p-7 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-black"><LocalizedText id="readyTitle" /></h2>
            <LocalizedText id="readyText" as="p" className="mt-2 text-white/65" />
          </div>
          <Link href="/shop" className="btn btn-primary">
            <LocalizedText id="start" />
          </Link>
        </div>
      </section>

      <div className="mobile-order-bar md:hidden">
        <Link href="/shop" className="btn btn-primary">
          <LocalizedText id="viewOffers" /> <ArrowRight size={18} />
        </Link>
      </div>
    </>
  );
}
