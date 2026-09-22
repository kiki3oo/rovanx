const titles: Record<string, string> = {
  about: "About ROVANX",
  contact: "Contact",
  faq: "FAQ",
  shipping: "Shipping Policy",
  returns: "Return Policy",
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",
  cookies: "Cookie Policy"
};

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = titles[slug] || "Page";
  return (
    <section className="section">
      <div className="container max-w-3xl rounded-lg border border-black/10 bg-white p-6">
        <p className="badge mb-3">Placeholder</p>
        <h1 className="text-4xl font-black">{title}</h1>
        <p className="mt-4 text-black/65">
          Contenu editable a finaliser et faire valider avant production. Cette page ne contient pas encore de declarations legales definitives.
        </p>
      </div>
    </section>
  );
}
