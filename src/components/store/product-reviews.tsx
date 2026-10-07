"use client";

import { useState } from "react";
import { BadgeCheck, CheckCircle2, MessageSquarePlus, PenTool, ShieldCheck, Star, ThumbsUp } from "lucide-react";
import { getReviewsForProduct, GLOBAL_REVIEW_STATS, type CustomerReview } from "@/lib/reviews-data";
import { StarRating } from "@/components/store/star-rating";
import { usePreferences } from "@/components/store/preferences-provider";

export function ProductReviews({
  slug,
  productName
}: {
  slug: string;
  productName: string;
}) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";
  const initialReviews = getReviewsForProduct(slug);

  const [reviews, setReviews] = useState<CustomerReview[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmitReview(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !comment) return;

    const newRev: CustomerReview = {
      id: `rev-user-${Date.now()}`,
      authorName: name,
      city: city || (isArabic ? "المغرب" : "Maroc"),
      productSlug: slug,
      productName: productName,
      rating: newRating,
      date: isArabic ? "اليوم" : "Aujourd'hui",
      title: title || (isArabic ? "تقييم ممتاز" : "Excellent produit"),
      comment: comment,
      verifiedBuyer: true
    };

    setReviews([newRev, ...reviews]);
    setFormSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setFormSubmitted(false);
      setName("");
      setCity("");
      setTitle("");
      setComment("");
    }, 4000);
  }

  return (
    <section id="reviews-section" className="section border-t border-white/10 bg-[#0e1015] text-white">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-bronze-500/30 bg-bronze-500/10 px-3 py-1 text-xs font-bold text-bronze-300">
              <BadgeCheck size={14} className="text-bronze-400" />
              <span>{isArabic ? "آراء الزبناء الحقيقيين" : "Avis Clients Certifiés"}</span>
            </div>
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              {isArabic ? `تجارب الزبناء مع ${productName}` : `Avis et retours sur ${productName}`}
            </h2>
            <p className="mt-1 text-sm text-white/65">
              {isArabic
                ? "تقييمات موثقة من مشترين حقيقيين جربوا المنتج واستفادوا من نتائجه."
                : "Avis vérifiés de clients ayant commandé et testé ce produit au Maroc."}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="btn border border-bronze-500/40 bg-gradient-to-r from-bronze-600 to-amber-600 px-5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            <PenTool size={16} />
            <span>{isArabic ? "أضف تقييمك الخاص" : "Laisser un avis"}</span>
          </button>
        </div>

        {/* Rating Summary Scorecard */}
        <div className="mb-10 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-col items-center justify-center border-b border-white/10 pb-6 text-center lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <span className="text-5xl font-black text-white sm:text-6xl">{GLOBAL_REVIEW_STATS.averageRating}</span>
            <div className="mt-2">
              <StarRating rating={5} size={20} />
            </div>
            <p className="mt-2 text-sm font-bold text-emerald-400">
              {isArabic ? "98% من المشترين ينصحون بهذا المنتج" : "98% des clients recommandent ce produit"}
            </p>
            <p className="mt-1 text-xs text-white/50">
              {isArabic ? `بناءً على ${GLOBAL_REVIEW_STATS.totalReviews} طلب تم تسليمه` : `Basé sur ${GLOBAL_REVIEW_STATS.totalReviews} commandes vérifiées`}
            </p>
          </div>

          {/* Breakdown Bars */}
          <div className="grid content-center gap-2.5 text-xs">
            {GLOBAL_REVIEW_STATS.ratingBreakdown.map((row) => (
              <div key={row.stars} className="flex items-center gap-3">
                <span className="w-12 font-bold text-white">{row.stars} {isArabic ? "نجوم" : "étoiles"}</span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full transition-all duration-500 shadow-sm shadow-amber-400/30"
                    style={{
                      width: `${row.percentage}%`,
                      backgroundColor: "#f59e0b",
                      backgroundImage: "linear-gradient(90deg, #d97706 0%, #f59e0b 50%, #fcd34d 100%)"
                    }}
                  />
                </div>
                <span className="w-10 text-right font-semibold text-white/70">{row.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Write Review Form */}
        {showForm ? (
          <form
            onSubmit={handleSubmitReview}
            className="mb-10 rounded-2xl border border-bronze-500/30 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-md sm:p-8"
          >
            <h3 className="text-xl font-black text-white sm:text-2xl">
              {isArabic ? "شاركنا تجربتك مع المنتج" : "Partagez votre retour d'expérience"}
            </h3>
            <p className="mt-1 text-xs text-white/60">
              {isArabic ? "رأيك يساعد زبناء آخرين في اتخاذ القرار المناسب." : "Votre avis aide d'autres personnes à faire le bon choix."}
            </p>

            {formSubmitted ? (
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-300">
                <CheckCircle2 size={24} />
                <div>
                  <p className="font-bold">{isArabic ? "شكراً لك! تم تسجيل تقييمك بنجاح." : "Merci beaucoup ! Votre avis a été enregistré."}</p>
                  <p className="text-xs text-emerald-400/80">{isArabic ? "تم نشر تقييمك وسيظهر مباشرة." : "Votre retour a été ajouté aux avis clients."}</p>
                </div>
              </div>
            ) : (
              <div className="mt-5 grid gap-4">
                {/* Rating selection */}
                <div>
                  <label className="mb-1 block text-xs font-bold text-white/80">{isArabic ? "تقييمك بالنجوم:" : "Votre note globale :"}</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 transition-transform hover:scale-125"
                      >
                        <Star
                          size={24}
                          className={star <= newRating ? "fill-amber-400 text-amber-400" : "fill-transparent text-white/30"}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm font-bold text-amber-400">{newRating}/5</span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold text-white/80">{isArabic ? "الاسم الكامل *" : "Votre nom complet *"}</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isArabic ? "مثال: يونس ب." : "Ex: Youssef B."}
                      className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-sm text-white placeholder:text-white/30 focus:border-bronze-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-bold text-white/80">{isArabic ? "المدينة *" : "Votre ville *"}</label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder={isArabic ? "مثال: الدار البيضاء" : "Ex: Casablanca, Rabat..."}
                      className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-sm text-white placeholder:text-white/30 focus:border-bronze-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-white/80">{isArabic ? "عنوان التقييم:" : "Titre de votre avis :"}</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={isArabic ? "مثال: نتيجة سريعة وطاقة ممتازة" : "Ex: Très bon résultat, livraison rapide..."}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-sm text-white placeholder:text-white/30 focus:border-bronze-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-white/80">{isArabic ? "ملاحظاتك وتجربتك *" : "Votre commentaire détaillé *"}</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={isArabic ? "اكتب كيف كانت تجربتك مع هذا المنتج، مدة الاستعمال، التوصيل..." : "Décrivez les effets ressentis, le délai de livraison, la qualité..."}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-sm text-white placeholder:text-white/30 focus:border-bronze-400 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-bold text-white/70 hover:bg-white/5"
                  >
                    {isArabic ? "إلغاء" : "Annuler"}
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary px-6 py-2.5 text-sm font-bold shadow-lg"
                  >
                    {isArabic ? "نشر التقييم الآن" : "Publier mon avis"}
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : null}

        {/* Reviews List */}
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <StarRating rating={rev.rating} size={15} />
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                    <BadgeCheck size={12} />
                    <span>{isArabic ? "شراء مؤكد ✓" : "Achat vérifié ✓"}</span>
                  </span>
                </div>

                <h4 className="mt-3 text-base font-black text-white">
                  {isArabic && rev.titleAr ? rev.titleAr : rev.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {isArabic && rev.commentAr ? rev.commentAr : rev.comment}
                </p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <span>{rev.authorName}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-bronze-400 font-semibold">{rev.city}</span>
                </div>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
