"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, Star, ThumbsUp, Truck } from "lucide-react";
import { REVIEWS_DATA, GLOBAL_REVIEW_STATS } from "@/lib/reviews-data";
import { StarRating } from "@/components/store/star-rating";
import { usePreferences } from "@/components/store/preferences-provider";

export function HomeReviews() {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", labelFr: "Tous les avis", labelAr: "جميع الآراء" },
    { id: "Énergie & Vitalité", labelFr: "Énergie & Vitalité", labelAr: "الطاقة والنشاط" },
    { id: "Livraison & Emballage", labelFr: "Livraison & Service", labelAr: "التوصيل والتغليف" },
    { id: "Fidélité & Rachat", labelFr: "Fidélité & Rachat", labelAr: "تكرار الطلب" }
  ];

  const filteredReviews = selectedFilter === "all"
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.highlight === selectedFilter);

  return (
    <section className="section relative overflow-hidden border-t border-white/10 bg-[#12141a] text-white">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-bronze-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#8c162c]/10 blur-[120px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-bronze-500/30 bg-bronze-500/10 px-4 py-1 text-xs font-bold text-bronze-300">
            <Sparkles size={14} className="text-bronze-400" />
            <span>{isArabic ? "آراء الزبناء الحقيقية والموثقة" : "Avis Clients Vérifiés & Certifiés"}</span>
          </div>

          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            {isArabic ? (
              <>ما يقوله عملاؤنا <span className="gold-text">في مختلف مدن المغرب</span></>
            ) : (
              <>Ce que disent les hommes qui <span className="gold-text">font confiance à ROVANX</span></>
            )}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-white/70 sm:text-lg">
            {isArabic
              ? "أكثر من 2,400 رجل بالمغرب استرجعوا طاقتهم ونشاطهم اليومي. تجارب حقيقية ونتائج ملموسة."
              : "Des retours d'expérience authentiques sur l'énergie, l'endurance et le bien-être au quotidien."}
          </p>

          {/* Trust KPI Strip */}
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="text-3xl font-black text-white">{GLOBAL_REVIEW_STATS.averageRating}</span>
                <span className="text-sm text-white/60">/5</span>
              </div>
              <StarRating rating={5} size={14} className="mt-1" />
              <span className="mt-1 text-xs text-white/60">{isArabic ? "معدل الرضا العام" : "Note moyenne"}</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
              <span className="text-3xl font-black text-white">{GLOBAL_REVIEW_STATS.satisfactionPercentage}%</span>
              <span className="mt-1 text-xs font-bold text-emerald-400">{isArabic ? "نسبة الرضا" : "Clients satisfaits"}</span>
              <span className="text-[11px] text-white/50">{isArabic ? "من أول شهر" : "Dès le 1er mois"}</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
              <span className="text-3xl font-black text-white">+2,400</span>
              <span className="mt-1 text-xs font-bold text-bronze-300">{isArabic ? "عميل بالمغرب" : "Clients au Maroc"}</span>
              <span className="text-[11px] text-white/50">{isArabic ? "في كل المدن" : "Partout au Royaume"}</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
              <div className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck size={24} />
              </div>
              <span className="mt-1 text-xs font-bold text-white">{isArabic ? "دفع عند الاستلام" : "100% COD Sécurisé"}</span>
              <span className="text-[11px] text-white/50">{isArabic ? "افحص طردك أولاً" : "Ouvrez avant de payer"}</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  selectedFilter === opt.id
                    ? "border border-bronze-500/50 bg-gradient-to-r from-bronze-600 to-amber-600 text-white shadow-lg shadow-bronze-600/30"
                    : "border border-white/10 bg-white/[0.04] text-white/70 hover:border-white/20 hover:text-white"
                }`}
              >
                {isArabic ? opt.labelAr : opt.labelFr}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-bronze-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/50"
            >
              <div>
                {/* Top Meta: Stars + Verified Badge */}
                <div className="flex items-center justify-between gap-2">
                  <StarRating rating={rev.rating} size={16} />
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400">
                    <BadgeCheck size={13} />
                    <span>{isArabic ? "مشتري موثق ✓" : "Acheteur vérifié ✓"}</span>
                  </span>
                </div>

                {/* Review Title */}
                <h3 className="mt-3 text-base font-black text-white group-hover:text-bronze-300 transition-colors">
                  {isArabic && rev.titleAr ? rev.titleAr : rev.title}
                </h3>

                {/* Review Body */}
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {isArabic && rev.commentAr ? rev.commentAr : rev.comment}
                </p>
              </div>

              {/* Bottom Details */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{rev.authorName}</span>
                    <span>•</span>
                    <span className="text-bronze-400 font-semibold">{rev.city}</span>
                  </div>
                  <span>{rev.date}</span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="inline-block rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] font-semibold text-white/70">
                    {rev.productName}
                  </span>
                  {rev.highlight ? (
                    <span className="text-[10px] font-bold text-bronze-500/80 uppercase tracking-wider">
                      {rev.highlight}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-12 rounded-2xl border border-bronze-500/30 bg-gradient-to-r from-[#1f0509] via-[#2d0810] to-[#1a0407] p-6 text-center shadow-2xl backdrop-blur-xl sm:p-8">
          <h3 className="text-2xl font-black text-white sm:text-3xl">
            {isArabic ? "انضم لأكثر من 2,400 رجل اختاروا حيوية ROVANX" : "Rejoignez plus de 2,400 hommes satisfaits au Maroc"}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/70 sm:text-base">
            {isArabic
              ? "طلب سريع بالدفع عند الاستلام. التوصيل مجاني وسريع لجميع المدن مع إمكانية فحص الطرد قبل الأداء."
              : "Formule originale certifiée, livraison rapide 24/48h partout au Maroc avec paiement en espèces après vérification du colis."}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="btn btn-primary px-7 py-3 text-base shadow-xl">
              <span>{isArabic ? "اطلب الآن (الدفع عند الاستلام)" : "Commander maintenant - Paiement COD"}</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/bundles" className="btn border border-white/20 bg-white/5 text-white hover:bg-white/10 px-6 py-3 text-base">
              <span>{isArabic ? "اكتشف باقات التوفير" : "Découvrir les packs duo"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
