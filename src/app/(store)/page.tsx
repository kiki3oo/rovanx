import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, PhoneCall } from "lucide-react";
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
      <section className="relative overflow-hidden bg-graphite-950 py-16 text-white md:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
        <div className="container grid items-center gap-10 md:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-6">
            <span className="badge w-fit border-white/10 bg-white/10 text-bronze-500">ROVANX Morocco</span>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.04] sm:text-5xl md:text-6xl">
              Men&apos;s Vitality & Wellness
            </h1>
            <p className="max-w-xl text-lg text-white/72">
              Une experience premium pour les hommes qui veulent commander simplement, avec une selection claire et le paiement a la livraison.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="btn btn-primary">
                Voir les produits <ArrowRight size={18} />
              </Link>
              <Link href="/bundles" className="btn border border-white/20 bg-white/8 text-white hover:bg-white/12">
                Decouvrir les packs
              </Link>
            </div>
            <div className="grid gap-3 pt-2 text-sm text-white/72 sm:grid-cols-3">
              {["Paiement a la livraison", "Selection premium", "Support rapide"].map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="dark-surface grid min-h-[390px] place-items-center rounded-lg p-8 shadow-2xl shadow-black/20">
            <RovanxLogo className="h-[300px] w-[260px] sm:h-[350px] sm:w-[310px]" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="badge mb-3">Best sellers</p>
              <h2 className="text-3xl font-black">Produits selectionnes</h2>
              <p className="mt-2 max-w-xl text-black/62">Une presentation propre maintenant, avec les images et noms definitifs a remplacer quand tu me les donnes.</p>
            </div>
            <Link href="/shop" className="font-bold text-bronze-600">
              Shop
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
            <p className="badge mb-3">Choose by goal</p>
            <h2 className="text-3xl font-black">Choisir par objectif</h2>
            <p className="mt-3 text-black/62">Une navigation rapide pour aider le client a trouver le bon produit ou pack.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Vitality", "Men's wellness", "Prostate support", "Energy", "Balance", "Sleep"].map((goal) => (
              <Link key={goal} href={`/shop?search=${encodeURIComponent(goal)}`} className="surface-card p-5 font-black hover:border-bronze-500">
                {goal}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="badge mb-3">Bundles</p>
          <h2 className="mb-7 text-3xl font-black">Augmenter la valeur de la commande</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {bundles.map((bundle) => (
              <article key={bundle.id} className="surface-card p-5">
                <h3 className="text-xl font-black">{bundle.name}</h3>
                <p className="mt-2 text-sm text-black/65">{bundle.description}</p>
                <p className="mt-4 text-2xl font-black">{formatMoney(bundle.bundlePrice)}</p>
                <p className="text-sm text-black/50 line-through">{formatMoney(bundle.regularCombinedPrice)}</p>
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
    </>
  );
}
