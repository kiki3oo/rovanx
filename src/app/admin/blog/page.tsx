import Link from "next/link";
import { AdminShell } from "@/components/admin/admin-shell";
import { prisma } from "@/lib/db";

export default async function AdminBlogPage() {
  const articles = await prisma.article.findMany({
    include: { category: true, author: true },
    orderBy: { updatedAt: "desc" }
  });
  return (
    <AdminShell>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl font-black">Blog CMS</h1>
        <Link href="/admin/blog/new" className="btn btn-primary">
          New article
        </Link>
      </div>
      <div className="overflow-x-auto rounded-lg border border-black/10 bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-sand-50">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Author</th>
              <th className="p-3">Status</th>
              <th className="p-3">Updated</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border-t border-black/10">
                <td className="p-3 font-bold">
                  <Link href={`/admin/blog/${article.id}`}>{article.title}</Link>
                </td>
                <td className="p-3">{article.category.name}</td>
                <td className="p-3">{article.author.name}</td>
                <td className="p-3">{article.status}</td>
                <td className="p-3">{article.updatedAt.toLocaleDateString("fr-MA")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
