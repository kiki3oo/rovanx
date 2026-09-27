"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import { legalContent } from "@/lib/legal-content";

export function LegalView({ slug }: { slug: string }) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";
  const section = legalContent[slug];

  if (!section) {
    return (
      <div className="container max-w-3xl rounded-xl border border-black/10 bg-white p-8">
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
    <article className="container max-w-3xl rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-6 flex items-center justify-between">
        <span className="badge flex items-center gap-1.5 border-bronze-500/20 bg-bronze-500/10 text-bronze-800">
          <ShieldCheck size={15} />
          {badge}
        </span>
        <Link
          href="/"
          className="flex items-center gap-1 text-xs font-bold text-black/55 hover:text-bronze-600"
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

      <h1 className="text-3xl font-black text-graphite-950 sm:text-4xl">{title}</h1>

      <div className="mt-8 grid gap-6">
        {content.map((block, index) => (
          <div key={index} className="rounded-xl bg-sand-50/60 p-5">
            {block.heading ? (
              <h2 className="mb-2 text-lg font-black text-graphite-900">{block.heading}</h2>
            ) : null}
            <p className="text-base leading-relaxed text-black/75">{block.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 sm:flex-row">
        <span className="text-xs text-black/50">ROVANX © {new Date().getFullYear()} - Tous droits réservés</span>
        <Link href="/shop" className="btn btn-primary w-full sm:w-auto">
          {isArabic ? "اكتشف منتجاتنا" : "Découvrir la boutique"} <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
