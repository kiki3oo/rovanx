import Link from "next/link";
import { prisma } from "@/lib/db";
import { RovanxLogo } from "@/components/brand/rovanx-logo";
import { LocalizedText } from "@/components/store/localized-text";
import type { TranslationKey } from "@/components/store/preferences-provider";

const links = [
  ["about", "/legal/about"], ["contact", "/legal/contact"], ["faq", "/legal/faq"],
  ["shippingPolicy", "/legal/shipping"], ["returns", "/legal/returns"],
  ["privacy", "/legal/privacy"], ["terms", "/legal/terms"],
  ["cookies", "/legal/cookies"], ["blog", "/blog"]
] as const satisfies ReadonlyArray<readonly [TranslationKey, string]>;

type StoreSettings = {
  name?: string;
  tagline?: string;
  contactEmail?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
};

export async function Footer() {
  const setting = await prisma.siteSetting.findUnique({ where: { key: "store" } });
  const store = (setting?.value || {}) as StoreSettings;
  const socialLinks = [
    ["Instagram", store.instagram],
    ["Facebook", store.facebook],
    ["TikTok", store.tiktok]
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <footer className="bg-graphite-950 py-10 text-white">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_2fr]">
        <div>
          <RovanxLogo className="h-32 w-[190px]" tone="light" />
          <p className="sr-only">{store.name || "ROVANX"}</p>
          <p className="mt-2 max-w-sm text-sm text-white/68">
            {store.tagline && store.tagline !== "Men's Vitality & Wellness"
              ? store.tagline
              : <LocalizedText id="footerTagline" />}
          </p>
          {store.contactEmail ? (
            <a
              className="mt-3 block text-sm text-white/78 hover:text-white"
              href={`mailto:${store.contactEmail}`}
            >
              {store.contactEmail}
            </a>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-white/78 hover:text-white">
              <LocalizedText id={label} />
            </Link>
          ))}
          {store.whatsapp && store.whatsapp !== "PLACEHOLDER" ? (
            <a
              href={`https://wa.me/${store.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-white/78 hover:text-white"
            >
              WhatsApp
            </a>
          ) : null}
          {socialLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-white/78 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
