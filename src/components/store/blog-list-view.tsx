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
    <section className="relative min-h-[85vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-16">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="container relative z-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="badge mb-3 flex w-fit items-center gap-1.5 border-white/10 bg-white/10 text-bronze-400">
              <BookOpen size={14} />
              {isArabic ? "دليل الصحة والنشاط" : "Conseils & Bien-être Masculin"}
            </span>
            <h1 className="text-4xl font-black text-white sm:text-5xl">
              {isArabic ? "مقالات ودراسات ROVANX" : "Le Blog ROVANX"}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-white/75">
              {isArabic
                ? "مقالات متخصصة ونصائح عملية في التغذية، النشاط البدني، والمكملات الطبيعية لدعم حيوية وطاقة الرجل."
                : "Guides experts, conseils nutritionnels et solutions naturelles pour optimiser votre énergie, votre endurance et votre équilibre quotidien."}
            </p>
          </div>

          <div className="relative w-full max-w-xs">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isArabic ? "ابحث عن موضوع..." : "Rechercher un article..."}
              className="w-full rounded-xl border border-white/15 bg-white/[0.05] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/40 backdrop-blur-md focus:border-bronze-400 focus:outline-none"
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
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze-500/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/50"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between text-xs">
                      <span className="badge border-bronze-400/30 bg-bronze-500/15 font-bold text-bronze-300">
                        {category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/50">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-black leading-snug text-white transition-colors group-hover:text-bronze-400">
                        {title}
                      </h2>
                    </Link>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
                      {excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs text-white/50">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-bronze-400 transition-colors group-hover:text-bronze-300"
                    >
                      {isArabic ? "اقرأ المقال" : "Lire l'article"} <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-12 text-center backdrop-blur-md">
            <p className="text-base text-white/70">
              {isArabic ? "لم نجد أي مقال يطابق بحثك." : "Aucun article ne correspond à votre recherche."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
