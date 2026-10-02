"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import type { BlogPost } from "@/lib/blog-data";

type HomeBlogArticlesProps = {
  posts: BlogPost[];
};

export function HomeBlogArticles({ posts }: HomeBlogArticlesProps) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((article) => {
        const title = isArabic ? article.titleAr : article.titleFr;
        const excerpt = isArabic ? article.excerptAr : article.excerptFr;
        const category = isArabic ? article.categoryAr : article.categoryFr;

        return (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze-500/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/50"
          >
            <div>
              <div className="mb-4 flex items-center justify-between text-xs">
                <span className="badge border-bronze-400/30 bg-bronze-500/15 text-xs font-bold text-bronze-300">
                  {category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/50">
                  <Clock size={12} /> {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-black leading-snug text-white transition-colors group-hover:text-bronze-400">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70 line-clamp-3">
                {excerpt}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold text-bronze-400 transition-colors group-hover:text-bronze-300">
              <span>{isArabic ? "قراءة المقال" : "Lire l'article"}</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
