"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import { legalContent } from "@/lib/legal-content";

export function LegalView({ slug, isDarkTheme }: { slug: string; isDarkTheme?: boolean }) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";
  const section = legalContent[slug];

  if (!section) {
    return (
      <div className={`container max-w-3xl rounded-xl border p-8 ${isDarkTheme ? "border-white/10 bg-white/95 backdrop-blur-md shadow-2xl" : "border-black/10 bg-white"}`}>
        <h1 className="text-3xl font-black">{isArabic ? "صفحة قيد الإعداد" : "Page en cours de rédaction"}</h1>
        <p className="mt-3 text-black/65">
          {isArabic ? "المحتوى سيكون متوفراً قريباً." : "Ce contenu sera disponible prochainement."}
        </p>
        <Link href="/" className="btn btn-primary mt-6">
          {isArabic ? "العودة للرئيسية" : "Retour à l'accueil"}
        </Link>
      </div>
    );
  }

  const title = isArabic ? section.titleAr : section.titleFr;
  const badge = isArabic ? section.badgeAr : section.badgeFr;
  const content = isArabic ? section.contentAr : section.contentFr;

  return (
    <article className={`container max-w-3xl rounded-2xl p-6 sm:p-10 ${isDarkTheme ? "border border-white/10 bg-[#12141a]/45 backdrop-blur-sm shadow-2xl text-white" : "border border-black/10 bg-white shadow-sm text-graphite-950"}`}>
      <div className="mb-6 flex items-center justify-between">
        <span className={`badge flex items-center gap-1.5 ${isDarkTheme ? "border-bronze-500/30 bg-bronze-500/20 text-bronze-400" : "border-bronze-500/20 bg-bronze-500/10 text-bronze-800"}`}>
          <ShieldCheck size={15} />
          {badge}
        </span>
        <Link
          href="/"
          className={`flex items-center gap-1 text-xs font-bold ${isDarkTheme ? "text-white/70 hover:text-bronze-400" : "text-black/55 hover:text-bronze-600"}`}
        >
          {isArabic ? (
            <>
              العودة للرئيسية <ArrowLeft size={14} />
            </>
          ) : (
            <>
              <ArrowLeft size={14} /> Retour à l&apos;accueil
            </>
          )}
        </Link>
      </div>

      <h1 className={`text-3xl font-black sm:text-4xl ${isDarkTheme ? "text-white" : "text-graphite-950"}`}>{title}</h1>

      <div className="mt-8 grid gap-5">
        {content.map((block, index) => (
          <div key={index} className={`rounded-xl p-5 transition ${isDarkTheme ? "border border-white/10 bg-[#12141a]/70 backdrop-blur-md hover:border-bronze-500/40" : "bg-sand-50/60"}`}>
            {block.heading ? (
              <h2 className={`mb-2 text-lg font-black ${isDarkTheme ? "text-bronze-400" : "text-graphite-900"}`}>{block.heading}</h2>
            ) : null}
            <p className={`text-base leading-relaxed ${isDarkTheme ? "text-white/88" : "text-black/75"}`}>{block.text}</p>
          </div>
        ))}
      </div>

      <div className={`mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row ${isDarkTheme ? "border-white/10" : "border-black/10"}`}>
        <span className={`text-xs ${isDarkTheme ? "text-white/50" : "text-black/50"}`}>ROVANX © {new Date().getFullYear()} - Tous droits réservés</span>
        <Link href="/shop" className="btn btn-primary w-full sm:w-auto">
          {isArabic ? "اكتشف منتجاتنا" : "Découvrir la boutique"} <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
