import Link from "next/link";
import { ArrowRight, BadgeCheck, PhoneCall, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/store/product-card";
import { buildMetadata } from "@/lib/seo";
import { formatMoney } from "@/lib/money";
import { RovanxLogo } from "@/components/brand/rovanx-logo";

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
            <span className="badge w-fit border-white/10 bg-white/10 text-bronze-500">ROVANX Morocco</span>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.04] sm:text-5xl md:text-6xl">
              Men&apos;s Vitality <span className="gold-text">& Wellness</span>
            </h1>
            <p className="max-w-xl text-lg text-white/72">
              Une boutique premium pensee pour aider le client a choisir vite, commander sans stress, et payer uniquement a la livraison.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="btn btn-primary">
                Voir les produits <ArrowRight size={18} />
              </Link>
              <Link href="/bundles" className="btn border border-white/20 bg-white/8 text-white hover:bg-white/12">
                Decouvrir les packs
              </Link>
            </div>
            <div className="grid gap-3 pt-2 text-sm text-white/78 sm:grid-cols-3">
              {["Paiement a la livraison", "Confirmation rapide", "Selection premium"].map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-semibold">
                  {item}
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
              [ShieldCheck, "COD securise", "Aucun paiement en ligne"],
              [PhoneCall, "Appel de confirmation", "Avant expedition"],
              [Truck, "Livraison Maroc", "Process simple et clair"],
              [Star, "Packs optimises", "Pour augmenter la valeur"]
            ].map(([Icon, title, text]) => (
              <div key={String(title)} className="flex gap-3">
                <Icon className="mt-1 shrink-0 text-bronze-500" size={18} />
                <div>
                  <p className="font-black text-white">{title as string}</p>
                  <p>{text as string}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-white">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            ["1", "Choisir", "Le client voit directement les produits ou les packs les plus importants."],
            ["2", "Confirmer", "La commande se fait simplement, avec appel de confirmation avant expedition."],
            ["3", "Recevoir", "Paiement a la livraison pour reduire la hesitation et rassurer l'acheteur."]
          ].map(([step, title, text]) => (
            <div key={step} className="premium-panel grid gap-3 p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-graphite-950 text-sm font-black text-bronze-500">{step}</span>
              <h2 className="text-xl font-black">{title}</h2>
              <p className="text-sm leading-6 text-black/62">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-7 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="badge mb-3">Best sellers</p>
              <h2 className="text-3xl font-black">Les offres a montrer en premier</h2>
              <p className="mt-2 max-w-xl text-black/62">Une selection courte et claire pour pousser le client vers l&apos;action sans le perdre dans trop de choix.</p>
            </div>
            <Link href="/shop" className="btn btn-secondary">
              Voir tout le shop <ArrowRight size={17} />
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
            <p className="badge mb-3">Decision rapide</p>
            <h2 className="text-3xl font-black">Choisir par besoin</h2>
            <p className="mt-3 text-black/62">Le client doit reconnaitre son besoin, cliquer, puis avancer vers la commande sans friction.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Vitality", "Men's wellness", "Prostate support", "Energy", "Balance", "Sleep"].map((goal) => (
              <Link key={goal} href={`/shop?search=${encodeURIComponent(goal)}`} className="surface-card p-5 font-black hover:border-bronze-500">
                <Sparkles className="mb-4 text-bronze-600" size={20} />
                {goal}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="badge mb-3">Bundles</p>
          <h2 className="mb-2 text-3xl font-black">Packs pour vendre plus vite</h2>
          <p className="mb-7 max-w-2xl text-black/62">Les packs donnent une proposition plus forte au client et augmentent la valeur de la commande.</p>
          <div className="grid gap-5 md:grid-cols-3">
            {bundles.map((bundle) => (
              <article key={bundle.id} className="premium-panel p-5">
                <BadgeCheck className="mb-4 text-bronze-600" />
                <h3 className="text-xl font-black">{bundle.name}</h3>
                <p className="mt-2 text-sm text-black/65">{bundle.description}</p>
                <p className="mt-4 text-2xl font-black">{formatMoney(bundle.bundlePrice)}</p>
                <p className="text-sm text-black/50 line-through">{formatMoney(bundle.regularCombinedPrice)}</p>
                <Link href="/bundles" className="btn btn-primary mt-5">
                  Voir le pack
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-graphite-950 text-white">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            [PhoneCall, "Confirmation rapide", "Le partenaire contacte le client pour confirmer la commande."],
            [Truck, "Expedition apres confirmation", "Preparation et expedition selon le process fulfillment."],
            [ShieldCheck, "Paiement a la livraison", "COD clair pour le lancement marocain."]
          ].map(([Icon, title, text]) => (
            <div key={String(title)} className="dark-surface rounded-lg p-5">
              <Icon className="text-bronze-500" />
              <h3 className="mt-4 font-black">{title as string}</h3>
              <p className="mt-2 text-sm text-white/65">{text as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="badge mb-3">Education</p>
          <h2 className="mb-7 text-3xl font-black">Articles selectionnes</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="surface-card p-5 hover:border-bronze-500/45">
                <h3 className="font-black">{article.title}</h3>
                <p className="mt-2 text-sm text-black/65">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container dark-surface grid gap-5 rounded-lg p-7 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-black">Pret a commander?</h2>
            <p className="mt-2 text-white/65">Paiement a la livraison, sans compte client obligatoire.</p>
          </div>
          <Link href="/shop" className="btn btn-primary">
            Commencer
          </Link>
        </div>
      </section>

      <div className="mobile-order-bar md:hidden">
        <Link href="/shop" className="btn btn-primary">
          Voir les offres <ArrowRight size={18} />
        </Link>
      </div>
    </>
  );
}
