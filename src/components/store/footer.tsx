import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="bg-graphite-950 py-10 text-white">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="text-2xl font-black">ROVANX</p>
          <p className="mt-2 max-w-sm text-sm text-white/68">
            Marque marocaine de vitalite et bien-etre masculin. Contenu legal et produit a valider avant production.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-white/78 hover:text-white">
              {label}
            </Link>
          ))}
          <span className="text-white/50">Social: placeholders</span>
        </div>
      </div>
    </footer>
  );
}
