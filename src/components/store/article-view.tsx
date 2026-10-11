"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Lock,
  Package,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";
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
    isBundle?: boolean;
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
        {/* Breadcrumb Header */}
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
                العودة لجميع المقالات <ArrowLeft size={14} />
              </>
            ) : (
              <>
                <ArrowLeft size={14} /> Tous les articles
              </>
            )}
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>

        {/* Meta Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/50">
          <span className="flex items-center gap-1">
            <Clock size={13} /> {post.readTime}
          </span>
          <span>•</span>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span>{isArabic ? "فريق خبراء وأطباء ROVANX" : "Par l'équipe médicale ROVANX"}</span>
        </div>

        {/* Excerpt / Lead Paragraph */}
        <div className="mt-6 rounded-2xl border border-bronze-500/30 bg-bronze-500/10 p-5 text-base font-medium leading-relaxed text-white/90 backdrop-blur-sm">
          {excerpt}
        </div>

        {/* Content Blocks */}
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
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        {/* Reassurance Strip: Discretion & COD Inspection (Confirmation & Delivery Rate Engine) */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-black/40 p-6 backdrop-blur-md">
          <div className="mb-4 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-300">
              <ShieldCheck size={15} className="text-amber-400" />
              {isArabic ? "ضمانات الشراء والتوصيل من ROVANX المغرب" : "Garanties d'Achat & Livraison ROVANX Maroc"}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-amber-500/30 bg-amber-500/15 text-amber-300">
                <Lock size={15} />
              </span>
              <div>
                <h4 className="text-xs font-black text-white">
                  {isArabic ? "طرد سري ومغلف 100%" : "Colis 100% Discret & Anonyme"}
                </h4>
                <p className="text-[11px] text-white/60">
                  {isArabic ? "كرتونة محايدة بدون أي اسم أو رسم محرج لحماية خصوصيتك" : "Emballage neutre sans aucune mention du produit"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/15 text-emerald-300">
                <Package size={15} />
              </span>
              <div>
                <h4 className="text-xs font-black text-white">
                  {isArabic ? "فحص الطرد قبل الأداء" : "Vérification Avant Paiement"}
                </h4>
                <p className="text-[11px] text-white/60">
                  {isArabic ? "حق فتح ومعاينة العلب للتأكد منها قبل دفع أي درهم" : "Ouvrez et contrôlez le colis avant de régler"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-bronze-500/30 bg-bronze-500/15 text-bronze-300">
                <Truck size={15} />
              </span>
              <div>
                <h4 className="text-xs font-black text-white">
                  {isArabic ? "توصيل مجاني وسريع 24/48h" : "Livraison Gratuite 24/48h"}
                </h4>
                <p className="text-[11px] text-white/60">
                  {isArabic ? "الموزع كيتصل بك مسبقاً لتحديد موعد ومكان الاستلام" : "Appel préalable du livreur pour fixer le créneau"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-cyan-500/30 bg-cyan-500/15 text-cyan-300">
                <PhoneCall size={15} />
              </span>
              <div>
                <h4 className="text-xs font-black text-white">
                  {isArabic ? "تأكيد هاتفي لبق وسريع" : "Confirmation Téléphonique Discrète"}
                </h4>
                <p className="text-[11px] text-white/60">
                  {isArabic ? "مكالمة سريعة في دقيقة لتأكيد العنوان فقط بدون إحراج" : "Appel d'une minute pour valider l'adresse uniquement"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Solution Card (CRO Engine) */}
        {product ? (
          <div className="mt-8 rounded-2xl border border-bronze-500/40 bg-gradient-to-br from-[#1d1217] via-[#151720] to-[#12141a] p-6 text-white backdrop-blur-md shadow-2xl sm:p-8">
            <span className="badge mb-3 border-amber-400/40 bg-amber-500/20 text-amber-300 font-black">
              {product.isBundle
                ? isArabic ? "⭐ الباقة المتكاملة الموصى بها (توفير خاص)" : "⭐ Pack Avantage Recommandé"
                : isArabic ? "⚡ الحل الطبيعي الموصى به" : "⚡ Formule Naturelle Recommandée"}
            </span>

            <h3 className="text-2xl font-black text-white sm:text-3xl">{product.name}</h3>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">{product.shortDescription}</p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div>
                <span className="text-xs text-white/50 block mb-0.5">
                  {isArabic ? "السعر الإجمالي (شحن مجاني 0 DH):" : "Prix total (Livraison 0 DH) :"}
                </span>
                <span className="text-3xl font-black text-amber-400">{product.price} MAD</span>
                {product.regularPrice > product.price ? (
                  <span className="ml-2.5 text-sm text-white/45 line-through">
                    {product.regularPrice} MAD
                  </span>
                ) : null}
              </div>

              <Link
                href={product.isBundle ? "/bundles" : `/product/${product.slug}`}
                className="btn btn-primary px-6 py-3 text-sm font-black shadow-xl"
              >
                <span>
                  {product.isBundle
                    ? isArabic ? "اطلب الباقة الآن (الدفع عند الاستلام)" : "Commander le Pack (COD)"
                    : isArabic ? "طلب المنتج الآن (الدفع عند الاستلام)" : "Commander maintenant (COD)"}
                </span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        ) : null}

        {/* Bottom Navigation */}
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
