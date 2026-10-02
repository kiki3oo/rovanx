"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import type { BlogPost } from "@/lib/blog-data";

type ArticleViewProps = {
  post: BlogPost;
  product?: {
    id: string;
    name: string;
    slug: string;
    price: number;
    regularPrice: number;
    shortDescription: string;
  } | null;
};

export function ArticleView({ post, product }: ArticleViewProps) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  const title = isArabic ? post.titleAr : post.titleFr;
  const excerpt = isArabic ? post.excerptAr : post.excerptFr;
  const category = isArabic ? post.categoryAr : post.categoryFr;
  const content = isArabic ? post.contentAr : post.contentFr;

  return (
    <article className="relative min-h-[90vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-20">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />
      <div className="container relative z-10 max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <span className="badge flex items-center gap-1.5 border-bronze-400/30 bg-bronze-500/15 text-bronze-300 font-bold">
            <Sparkles size={14} />
            {category}
          </span>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-bronze-400 transition-colors"
          >
            {isArabic ? (
              <>
                العودة للمقالات <ArrowLeft size={14} />
              </>
            ) : (
              <>
                <ArrowLeft size={14} /> Tous les articles
              </>
            )}
          </Link>
        </div>

        <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/50">
          <span className="flex items-center gap-1">
            <Clock size={13} /> {post.readTime}
          </span>
          <span>•</span>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span>{isArabic ? "فريق خبراء ROVANX" : "Par l'équipe ROVANX"}</span>
        </div>

        <div className="mt-6 rounded-2xl border border-bronze-500/30 bg-bronze-500/10 p-5 text-base font-medium leading-relaxed text-white/90 backdrop-blur-sm">
          {excerpt}
        </div>

        <div className="mt-8 grid gap-6">
          {content.map((block, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-md shadow-xl">
              {block.heading ? (
                <h2 className="mb-3 text-xl font-black text-white">{block.heading}</h2>
              ) : null}
              <p className="text-base leading-relaxed text-white/80">{block.paragraph}</p>
              {block.bulletPoints && block.bulletPoints.length > 0 ? (
                <ul className="mt-4 grid gap-2.5">
                  {block.bulletPoints.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm font-medium text-white/80">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-bronze-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        {product ? (
          <div className="mt-10 rounded-2xl border border-bronze-500/35 bg-[#171a22]/85 p-6 text-white backdrop-blur-md shadow-2xl sm:p-8">
            <span className="badge mb-3 border-bronze-400/30 bg-bronze-500/15 text-bronze-300 font-bold">
              {isArabic ? "الحل الطبيعي الموصى به" : "Solution Recommandée"}
            </span>
            <h3 className="text-2xl font-black text-white sm:text-3xl">{product.name}</h3>
            <p className="mt-2 text-sm text-white/70">{product.shortDescription}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div>
                <span className="text-2xl font-black text-white">{product.price} MAD</span>
                {product.regularPrice > product.price ? (
                  <span className="ml-2 text-sm text-white/45 line-through">
                    {product.regularPrice} MAD
                  </span>
                ) : null}
              </div>
              <Link href={`/product/${product.slug}`} className="btn btn-primary">
                {isArabic ? "طلب المنتج الآن (الدفع عند الاستلام)" : "Commander maintenant (COD)"}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ) : null}

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <Link href="/blog" className="btn border border-white/20 bg-white/10 text-white hover:bg-white/15">
            {isArabic ? "تصفح باقي المقالات" : "Voir tous les articles"}
          </Link>
          <Link href="/shop" className="btn btn-primary">
            {isArabic ? "زيارة المتجر" : "Découvrir la boutique"}
          </Link>
        </div>
      </div>
    </article>
  );
}
