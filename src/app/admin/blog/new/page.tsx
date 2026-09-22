import { AdminShell } from "@/components/admin/admin-shell";
import { ArticleForm } from "@/components/admin/article-form";
import { prisma } from "@/lib/db";

export default async function NewArticlePage() {
  const [categories, authors] = await Promise.all([
    prisma.articleCategory.findMany({ orderBy: { name: "asc" } }),
    prisma.author.findMany({ orderBy: { name: "asc" } })
  ]);
  return (
    <AdminShell>
      <h1 className="mb-5 text-3xl font-black">New article</h1>
      <ArticleForm categories={categories} authors={authors} />
    </AdminShell>
  );
}
