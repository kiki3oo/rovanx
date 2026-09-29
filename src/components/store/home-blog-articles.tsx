"use client";

import Link from "next/link";
import { usePreferences } from "@/components/store/preferences-provider";
import type { BlogPost } from "@/lib/blog-data";

type HomeBlogArticlesProps = {
  posts: BlogPost[];
};

export function HomeBlogArticles({ posts }: HomeBlogArticlesProps) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {posts.map((article) => {
        const title = isArabic ? article.titleAr : article.titleFr;
        const excerpt = isArabic ? article.excerptAr : article.excerptFr;
        const category = isArabic ? article.categoryAr : article.categoryFr;

        return (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="surface-card group p-5 hover:border-bronze-500/45"
          >
            <span className="badge mb-3 border-bronze-500/20 bg-bronze-500/10 text-xs font-bold text-bronze-700">
              {category}
            </span>
            <h3 className="font-black group-hover:text-bronze-600">{title}</h3>
            <p className="mt-2 text-sm text-black/65 line-clamp-3">{excerpt}</p>
          </Link>
        );
      })}
    </div>
  );
}
