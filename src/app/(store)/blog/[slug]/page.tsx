import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { buildMetadata } from "@/lib/seo";
import { LocalizedText } from "@/components/store/localized-text";
import { SeedContent } from "@/components/store/seed-content";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({ where: { slug } });
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    path: `/blog/${article.slug}`,
    image: article.ogImage
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug },
    include: { author: true, category: true, relatedProducts: { include: { product: true } } }
  });
  if (!article || article.status !== "PUBLISHED") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author.name },
    datePublished: article.publishedAt?.toISOString()
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="section">
        <div className="container max-w-3xl">
          <span className="badge mb-3"><SeedContent value={article.category.name} /></span>
          <h1 className="text-4xl font-black"><SeedContent value={article.title} /></h1>
          <p className="mt-3 text-black/55"><LocalizedText id="byAuthor" /> {article.author.name}</p>
          <div className="mt-8 rounded-lg border border-black/10 bg-white p-6 leading-8 text-black/75">
            {article.body.split("\n").map((paragraph) => (
              <p key={paragraph} className="mb-4">
                <SeedContent value={paragraph} />
              </p>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-bronze-500/20 bg-white p-4 text-sm text-black/65">
            <LocalizedText id="sourcesPending" />
          </div>
        </div>
      </article>
    </>
  );
}
