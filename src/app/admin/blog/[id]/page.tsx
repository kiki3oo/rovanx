import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { ArticleForm } from "@/components/admin/article-form";
import { prisma } from "@/lib/db";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [article, categories, authors] = await Promise.all([
    prisma.article.findUnique({ where: { id } }),
    prisma.articleCategory.findMany({ orderBy: { name: "asc" } }),
    prisma.author.findMany({ orderBy: { name: "asc" } })
  ]);
  if (!article) notFound();
  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">Edit article</h1>
      <ArticleForm article={article} categories={categories} authors={authors} />
    </AdminShell>
  );
}
