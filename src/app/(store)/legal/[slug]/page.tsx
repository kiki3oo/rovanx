import { LegalView } from "@/components/store/legal-view";


export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <section className="section">
      <LegalView slug={slug} />
    </section>
  );
}
