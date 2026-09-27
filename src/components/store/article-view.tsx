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
    <article className="section">
      <div className="container max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <span className="badge flex items-center gap-1.5 border-bronze-500/25 bg-bronze-500/10 text-bronze-700">
            <Sparkles size={14} />
            {category}
          </span>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-xs font-bold text-black/55 hover:text-bronze-600"
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

        <h1 className="text-3xl font-black leading-tight text-graphite-950 sm:text-4xl md:text-5xl">
          {title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-black/50">
          <span className="flex items-center gap-1">
            <Clock size={13} /> {post.readTime}
          </span>
          <span>•</span>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span>{isArabic ? "فريق خبراء ROVANX" : "Par l'équipe ROVANX"}</span>
        </div>

        <div className="mt-6 rounded-xl border border-bronze-500/20 bg-sand-50/70 p-5 text-base font-medium leading-relaxed text-black/75">
          {excerpt}
        </div>

        <div className="mt-8 grid gap-8">
          {content.map((block, idx) => (
            <div key={idx} className="rounded-xl border border-black/8 bg-white p-6 shadow-sm">
              {block.heading ? (
                <h2 className="mb-3 text-xl font-black text-graphite-900">{block.heading}</h2>
              ) : null}
              <p className="text-base leading-relaxed text-black/75">{block.paragraph}</p>
              {block.bulletPoints && block.bulletPoints.length > 0 ? (
                <ul className="mt-4 grid gap-2">
                  {block.bulletPoints.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm font-medium text-black/75">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-bronze-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        {product ? (
          <div className="mt-10 rounded-2xl border border-bronze-500/30 bg-graphite-950 p-6 text-white sm:p-8">
            <span className="badge mb-3 border-bronze-500/30 bg-bronze-500/15 text-bronze-400">
              {isArabic ? "الحل الطبيعي الموصى به" : "Solution Recommandée"}
            </span>
            <h3 className="text-2xl font-black sm:text-3xl">{product.name}</h3>
            <p className="mt-2 text-sm text-white/70">{product.shortDescription}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div>
                <span className="text-2xl font-black text-bronze-400">{product.price} MAD</span>
                {product.regularPrice > product.price ? (
                  <span className="ml-2 text-sm text-white/40 line-through">
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

        <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
          <Link href="/blog" className="btn border border-black/15 bg-white text-black/80 hover:bg-black/5">
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
