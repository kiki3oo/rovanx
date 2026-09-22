import Link from "next/link";
import { prisma } from "@/lib/db";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Articles ROVANX sur le bien-etre masculin.",
  path: "/blog"
});

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const params = await searchParams;
  const articles = await prisma.article.findMany({
    where: {
      status: "PUBLISHED",
      OR: params.search
        ? [
            { title: { contains: params.search, mode: "insensitive" } },
            { excerpt: { contains: params.search, mode: "insensitive" } }
          ]
        : undefined
    },
    include: { category: true, author: true },
    orderBy: { publishedAt: "desc" }
  });

  return (
    <section className="section">
      <div className="container">
        <p className="badge mb-3">SEO Blog</p>
        <h1 className="mb-6 text-4xl font-black">Articles ROVANX</h1>
        <form className="mb-8 grid gap-3 rounded-lg border border-black/10 bg-white p-4 sm:grid-cols-[1fr_auto]">
          <input className="input" name="search" placeholder="Recherche" defaultValue={params.search || ""} />
          <button className="btn btn-primary">Chercher</button>
        </form>
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="rounded-lg border border-black/10 bg-white p-5">
              <span className="badge mb-3">{article.category.name}</span>
              <h2 className="font-black">{article.title}</h2>
              <p className="mt-2 text-sm text-black/65">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
