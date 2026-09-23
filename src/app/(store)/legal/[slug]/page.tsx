import { LocalizedText } from "@/components/store/localized-text";
import type { TranslationKey } from "@/components/store/preferences-provider";

const titles: Record<string, TranslationKey> = {
  about: "about", contact: "contact", faq: "faq", shipping: "shippingPolicy",
  returns: "returns", privacy: "privacy", terms: "terms", cookies: "cookies"
};

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = titles[slug] || "pagePending";
  return (
    <section className="section">
      <div className="container max-w-3xl rounded-lg border border-black/10 bg-white p-6">
        <p className="badge mb-3"><LocalizedText id="pagePending" /></p>
        <h1 className="text-4xl font-black"><LocalizedText id={title} /></h1>
        <p className="mt-4 text-black/65">
          <LocalizedText id="legalPending" />
        </p>
      </div>
    </section>
  );
}
