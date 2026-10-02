import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, PhoneCall, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";
import { RovanxLogo } from "@/components/brand/rovanx-logo";
import { Money } from "@/components/store/money";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";
import { BLOG_POSTS } from "@/lib/blog-data";
import { HomeBlogArticles } from "@/components/store/home-blog-articles";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "ROVANX | Men's Vitality & Wellness",
  description: "Boutique marocaine ROVANX pour la vitalite et le bien-etre masculin.",
  path: "/"
});


import { ensureCatalogSynced } from "@/lib/catalog-sync";

export default async function HomePage() {
  await ensureCatalogSynced().catch(() => {});
  const [featured, bundles] = await Promise.all([
    prisma.product.findMany({ where: { active: true, featured: true }, take: 12, orderBy: { createdAt: "asc" } }).catch(() => []),
    prisma.bundle.findMany({ where: { active: true }, take: 3, include: { items: { include: { product: true } } } }).catch(() => [])
  ]);

  return (
    <>
      <section className="brand-hero relative overflow-hidden py-12 text-white md:py-20">
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/hero/rovanx-hero-sensual.webp"
            alt="ROVANX Men's Vitality & Wellness"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-[#12141a]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12141a]/70 via-transparent to-[#12141a]/70" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
        <div className="container relative z-10 grid items-center gap-10 md:grid-cols-[1.02fr_0.98fr]">
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
          <div className="dark-surface soft-glow grid min-h-[310px] place-items-center rounded-2xl p-7 shadow-2xl shadow-black/30 md:min-h-[410px]">
            <RovanxLogo className="h-[280px] w-auto sm:h-[360px]" tone="light" priority />
          </div>
        </div>
        <div className="conversion-strip relative z-10 mt-14">
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

      <section className="section-tight border-b border-white/10 bg-[#12141a] text-white">
        <div className="container grid gap-5 md:grid-cols-3">
          {[
            ["1", "choose", "chooseText"],
            ["2", "confirm", "confirmText"],
            ["3", "receive", "receiveText"]
          ].map(([step, title, text]) => (
            <div
              key={step}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze-500/50 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-bronze-400 to-bronze-600 text-sm font-black text-white shadow-lg shadow-bronze-600/30">
                  {step}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-bronze-500/70">
                  ROVANX 0{step}
                </span>
              </div>
              <h2 className="text-xl font-black text-white transition-colors group-hover:text-bronze-400">
                <LocalizedText id={title as "choose" | "confirm" | "receive"} />
              </h2>
              <LocalizedText
                id={text as "chooseText" | "confirmText" | "receiveText"}
                as="p"
                className="mt-2 text-sm leading-6 text-white/72"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section relative overflow-hidden bg-[#12141a] text-white">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/hero/rovanx-bestsellers-bg.webp"
            alt="ROVANX Best Sellers"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-top opacity-65 md:opacity-80"
          />
          {/* Subtle depth gradients for readability & dark continuity */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/50 to-[#12141a]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12141a]/70 via-transparent to-[#12141a]/70" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />

        <div className="container relative z-10">
          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="badge mb-3 border-white/10 bg-white/10 text-bronze-500"><LocalizedText id="bestSellers" /></p>
              <h2 className="text-3xl font-black text-white sm:text-4xl"><LocalizedText id="premiumPick" /></h2>
              <LocalizedText id="bestSellersText" as="p" className="mt-2 max-w-xl text-white/72" />
            </div>
            <Link href="/shop" className="btn border border-white/20 bg-white/10 text-white hover:bg-white/15">
              <LocalizedText id="viewProducts" /> <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} darkTheme />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-white/10 bg-[#12141a] text-white">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="badge mb-3 border-white/10 bg-white/10 text-bronze-400"><LocalizedText id="fastDecision" /></p>
            <h2 className="text-3xl font-black text-white sm:text-4xl"><LocalizedText id="categories" /></h2>
            <LocalizedText id="categoryIntro" as="p" className="mt-3 text-white/70" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["goalVitality", "Vitality"], ["goalWellness", "Men's wellness"], ["goalProstate", "Prostate support"],
              ["goalEnergy", "Energy"], ["goalBalance", "Balance"], ["goalSleep", "Sleep"]
            ].map(([key, goal]) => (
              <Link
                key={key}
                href={`/shop?search=${encodeURIComponent(goal)}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze-500/50 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-black/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-bronze-500/25 bg-bronze-500/15 text-bronze-400 transition-colors group-hover:bg-bronze-500/25 group-hover:text-bronze-300">
                    <Sparkles size={20} />
                  </span>
                  <ArrowRight size={16} className="text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-bronze-400" />
                </div>
                <span className="text-base font-black text-white transition-colors group-hover:text-bronze-300">
                  <LocalizedText id={key as "goalVitality" | "goalWellness" | "goalProstate" | "goalEnergy" | "goalBalance" | "goalSleep"} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden border-b border-white/10 bg-[#12141a] text-white">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
        <div className="container relative z-10">
          <p className="badge mb-3 border-white/10 bg-white/10 text-bronze-400"><LocalizedText id="bundles" /></p>
          <h2 className="mb-2 text-3xl font-black text-white sm:text-4xl"><LocalizedText id="bundlesTitle" /></h2>
          <LocalizedText id="bundlesIntro" as="p" className="mb-8 max-w-2xl text-white/70" />
          <div className="grid gap-6 md:grid-cols-3">
            {bundles.map((bundle) => (
              <article
                key={bundle.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze-500/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/50"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-bronze-500/30 bg-gradient-to-br from-bronze-400/20 to-bronze-600/30 text-bronze-400 shadow-md">
                      <BadgeCheck size={26} />
                    </span>
                    <span className="badge border-bronze-500/30 bg-bronze-500/15 text-xs font-bold text-bronze-300 uppercase tracking-wider">
                      Pack Avantage
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white transition-colors group-hover:text-bronze-400">{bundle.name}</h3>
                  <div className="mt-3 text-sm leading-6 text-white/70 line-clamp-3"><SeedContent value={bundle.description} /></div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="mb-4 flex items-end justify-between gap-3">
                    <strong className="text-2xl font-black text-white"><Money value={bundle.bundlePrice} /></strong>
                    <span className="text-sm text-white/50 line-through"><Money value={bundle.regularCombinedPrice} /></span>
                  </div>
                  <Link href="/bundles" className="btn btn-primary flex w-full items-center justify-center gap-2">
                    <LocalizedText id="heroBundles" /> <ArrowRight size={17} />
                  </Link>
                </div>
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
          <HomeBlogArticles posts={BLOG_POSTS.slice(0, 3)} />
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
