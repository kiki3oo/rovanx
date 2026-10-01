import Image from "next/image";
import { LegalView } from "@/components/store/legal-view";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ | Questions Fréquentes",
  description: "Toutes les réponses à vos questions sur les commandes, la livraison et les produits ROVANX.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <div className="relative min-h-[90vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-20">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/hero/rovanx-faq-bg.webp"
          alt="ROVANX FAQ Experience"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-top opacity-80 md:opacity-90"
        />
        {/* Depth gradients to blend into dark theme and keep reading comfortable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/40 to-[#12141a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12141a]/70 via-transparent to-[#12141a]/70" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />

      <div className="container relative z-10">
        <LegalView slug="faq" isDarkTheme={true} />
      </div>
    </div>
  );
}
