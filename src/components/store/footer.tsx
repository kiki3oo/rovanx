import Link from "next/link";
import { prisma } from "@/lib/db";
import { RovanxLogo } from "@/components/brand/rovanx-logo";

const links = [
  ["About", "/legal/about"],
  ["Contact", "/legal/contact"],
  ["FAQ", "/legal/faq"],
  ["Shipping", "/legal/shipping"],
  ["Returns", "/legal/returns"],
  ["Privacy", "/legal/privacy"],
  ["Terms", "/legal/terms"],
  ["Cookies", "/legal/cookies"],
  ["Blog", "/blog"]
];

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
          <RovanxLogo className="h-14 w-[220px]" tone="light" />
          <p className="sr-only">{store.name || "ROVANX"}</p>
          <p className="mt-2 max-w-sm text-sm text-white/68">
            {store.tagline || "Marque marocaine de vitalite et bien-etre masculin."}
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
              {label}
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
