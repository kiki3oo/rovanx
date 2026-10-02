import Image from "next/image";
import { LegalView } from "@/components/store/legal-view";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "À Propos de ROVANX | Notre Histoire",
  description: "Découvrez la vision, l'expertise et l'engagement ROVANX pour l'excellence et la vitalité masculine.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="relative min-h-[90vh] bg-[#12141a] text-white overflow-hidden py-12 md:py-20">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/hero/rovanx-about-bg.webp"
          alt="À Propos de ROVANX"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_15%] md:object-[center_20%] opacity-90 md:opacity-95"
        />
        {/* Gentle cinematic lighting so the face and photo are clearly visible */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-[#12141a]/30" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/70 to-transparent" />

      <div className="container relative z-10">
        <LegalView slug="about" isDarkTheme={true} isTransparent={true} />
      </div>
    </div>
  );
}
