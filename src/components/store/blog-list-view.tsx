"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Search, Sparkles } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import type { BlogPost } from "@/lib/blog-data";

type BlogListViewProps = {
  posts: BlogPost[];
};

export function BlogListView({ posts }: BlogListViewProps) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => {
    const title = isArabic ? post.titleAr : post.titleFr;
    const excerpt = isArabic ? post.excerptAr : post.excerptFr;
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return title.toLowerCase().includes(term) || excerpt.toLowerCase().includes(term);
  });

  return (
    <section className="section">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="badge mb-3 flex w-fit items-center gap-1.5 border-bronze-500/25 bg-bronze-500/10 text-bronze-700">
              <BookOpen size={14} />
              {isArabic ? "دليل الصحة والنشاط" : "Conseils & Bien-être Masculin"}
            </span>
            <h1 className="text-4xl font-black text-graphite-950 sm:text-5xl">
              {isArabic ? "مقالات ودراسات ROVANX" : "Le Blog ROVANX"}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-black/65">
              {isArabic
                ? "مقالات متخصصة ونصائح عملية في التغذية، النشاط البدني، والمكملات الطبيعية لدعم حيوية وطاقة الرجل."
                : "Guides experts, conseils nutritionnels et solutions naturelles pour optimiser votre énergie, votre endurance et votre équilibre quotidien."}
            </p>
          </div>

          <div className="relative w-full max-w-xs">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isArabic ? "ابحث عن موضوع..." : "Rechercher un article..."}
              className="w-full rounded-lg border border-black/15 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-bronze-500 focus:outline-none"
            />
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => {
              const title = isArabic ? post.titleAr : post.titleFr;
              const excerpt = isArabic ? post.excerptAr : post.excerptFr;
              const category = isArabic ? post.categoryAr : post.categoryFr;

              return (
                <article
                  key={post.id}
                  className="surface-card group flex flex-col justify-between overflow-hidden rounded-xl border border-black/10 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-bronze-500/40 hover:shadow-lg"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between text-xs">
                      <span className="badge border-bronze-500/20 bg-bronze-500/10 font-bold text-bronze-700">
                        {category}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-black/45">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-black leading-snug text-graphite-950 transition group-hover:text-bronze-600">
                        {title}
                      </h2>
                    </Link>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-black/65">
                      {excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-black/8 pt-4">
                    <span className="text-xs font-semibold text-black/45">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-black text-bronze-600 hover:text-bronze-700"
                    >
                      {isArabic ? "اقرأ المقال" : "Lire l'article"} <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-black/10 bg-white p-12 text-center">
            <p className="text-base text-black/60">
              {isArabic ? "لم نجد أي مقال يطابق بحثك." : "Aucun article ne correspond à votre recherche."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
