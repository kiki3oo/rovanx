"use client";

import { MessageCircle } from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";

export function WhatsAppFloatingButton({ phoneNumber }: { phoneNumber?: string }) {
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  const number = phoneNumber && phoneNumber !== "PLACEHOLDER" ? phoneNumber : "212600000000";
  const defaultMessage = encodeURIComponent(
    isArabic
      ? "السلام عليكم، أريد الاستفسار بخصوص منتجات ROVANX وطريقة الطلب."
      : "Bonjour ROVANX, je souhaite avoir plus d'informations sur vos produits."
  );

  return (
    <aside
      aria-label={isArabic ? "تواصل معنا عبر واتساب" : "Contactez-nous sur WhatsApp"}
      className={`fixed bottom-20 z-40 sm:bottom-6 ${isArabic ? "left-5" : "right-5"}`}
    >
      <a
        href={`https://wa.me/${number}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-emerald-500/50"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500"></span>
        </span>
        <MessageCircle size={30} className="fill-white" />
        <span
          className={`pointer-events-none absolute hidden whitespace-nowrap rounded-lg bg-graphite-950 px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-opacity duration-200 group-hover:block ${
            isArabic ? "left-16" : "right-16"
          }`}
        >
          {isArabic ? "تواصل معنا على واتساب" : "Besoin d'aide ? Écrivez-nous"}
        </span>
      </a>
    </aside>
  );
}
