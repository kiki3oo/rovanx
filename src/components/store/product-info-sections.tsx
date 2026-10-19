"use client";

import { CheckCircle2, Clock3, ShieldCheck, Truck } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import { getLocalizedProduct } from "@/lib/store-translations";
import { LocalizedText } from "@/components/store/localized-text";

export function ProductInfoSections({
  productSlug,
  fallbackBenefits,
  fallbackIngredients,
  fallbackInstructions,
  fallbackWarnings,
  fallbackRegulatory
}: {
  productSlug: string;
  fallbackBenefits?: string[];
  fallbackIngredients?: string | null;
  fallbackInstructions?: string | null;
  fallbackWarnings?: string | null;
  fallbackRegulatory?: string | null;
}) {
  const { locale } = usePreferences();
  const loc = getLocalizedProduct(productSlug, locale);

  const benefitsList = (loc?.benefits && loc.benefits.length > 0) ? loc.benefits : (fallbackBenefits || []);
  const ingredients = loc?.ingredients || fallbackIngredients;
  const instructions = loc?.usageInstructions || fallbackInstructions;
  const warnings = loc?.warnings || fallbackWarnings;
  const regulatory = loc?.regulatoryInformation || fallbackRegulatory;

  const sections = [
    {
      id: "benefits" as const,
      icon: CheckCircle2,
      isList: true,
      items: benefitsList,
      text: null
    },
    {
      id: "ingredients" as const,
      icon: CheckCircle2,
      isList: false,
      items: [],
      text: ingredients
    },
    {
      id: "instructions" as const,
      icon: Clock3,
      isList: false,
      items: [],
      text: instructions
    },
    {
      id: "warnings" as const,
      icon: ShieldCheck,
      isList: false,
      items: [],
      text: warnings
    },
    {
      id: "regulatory" as const,
      icon: ShieldCheck,
      isList: false,
      items: [],
      text: regulatory
    },
    {
      id: "deliveryCod" as const,
      icon: Truck,
      isList: false,
      items: [],
      text: null
    }
  ];

  return (
    <section className="section border-t border-white/10 bg-[#0e1015] text-white">
      <div className="container grid gap-5 md:grid-cols-2">
        {sections.map(({ id, icon: Icon, isList, items, text }) => (
          <div
            key={id}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-xl backdrop-blur-md"
          >
            <Icon className="mb-4 text-bronze-400" size={24} />
            <h2 className="text-lg font-black text-white">
              <LocalizedText id={id} />
            </h2>
            <div className="mt-2 text-sm leading-relaxed text-white/70">
              {isList ? (
                items.length > 0 ? (
                  <ul className="list-disc space-y-2 ps-5">
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <LocalizedText id="productInfoPending" />
                )
              ) : text ? (
                <p>{text}</p>
              ) : id === "deliveryCod" ? (
                <LocalizedText id="bundleShippingText" />
              ) : (
                <LocalizedText id="productInfoPending" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
