import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { buildMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArticleView } from "@/components/store/article-view";

export const revalidate = 60;

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.titleFr,
    description: post.excerptFr,
    path: `/blog/${post.slug}`
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  let product = null;
  if (post.recommendedProductSlug) {
    product = await prisma.product
      .findUnique({
        where: { slug: post.recommendedProductSlug },
        select: {
          id: true,
          name: true,
          slug: true,
          regularPrice: true,
          salePrice: true,
          shortDescription: true
        }
      })
      .then((p) =>
        p
          ? {
              id: p.id,
              name: p.name,
              slug: p.slug,
              price: p.salePrice || p.regularPrice,
              regularPrice: p.regularPrice,
              shortDescription: p.shortDescription
            }
          : null
      )
      .catch(() => null);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titleFr,
    description: post.excerptFr,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleView post={post} product={product} />
    </>
  );
}
