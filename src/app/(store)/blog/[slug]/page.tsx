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
              shortDescription: p.shortDescription,
              isBundle: false
            }
          : null
      )
      .catch(() => null);

    if (!product) {
      const bundle = await prisma.bundle
        .findUnique({
          where: { slug: post.recommendedProductSlug },
          select: {
            id: true,
            name: true,
            slug: true,
            bundlePrice: true,
            regularCombinedPrice: true,
            description: true
          }
        })
        .catch(() => null);

      if (bundle) {
        product = {
          id: bundle.id,
          name: bundle.name,
          slug: bundle.slug,
          price: bundle.bundlePrice,
          regularPrice: bundle.regularCombinedPrice,
          shortDescription: bundle.description,
          isBundle: true
        };
      }
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titleFr,
    alternativeHeadline: post.titleAr,
    description: post.excerptFr,
    keywords: post.seoKeywords?.join(", ") || "vitalité masculine maroc, érection, endurance",
    author: { "@type": "Organization", name: "ROVANX Laboratoires" },
    publisher: {
      "@type": "Organization",
      name: "ROVANX Maroc",
      logo: {
        "@type": "ImageObject",
        url: "https://rovanx.com/brand/rovanx-logo-v3.webp"
      }
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: `https://rovanx.com/blog/${post.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ArticleView post={post} product={product} />
    </>
  );
}
