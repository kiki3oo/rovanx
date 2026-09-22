import type { Article, ArticleCategory, Author } from "@prisma/client";
import { saveArticleAction } from "@/app/admin/actions/content";

export function ArticleForm({
  article,
  categories,
  authors
}: {
  article?: Article | null;
  categories: ArticleCategory[];
  authors: Author[];
}) {
  return (
    <form action={saveArticleAction} className="grid gap-4 rounded-lg border border-black/10 bg-white p-5">
      <input type="hidden" name="id" value={article?.id || ""} />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="field">
          <span>Title</span>
          <input className="input" name="title" defaultValue={article?.title || ""} required />
        </label>
        <label className="field">
          <span>Slug</span>
          <input className="input" name="slug" defaultValue={article?.slug || ""} required />
        </label>
        <label className="field">
          <span>Category</span>
          <select className="select" name="categoryId" defaultValue={article?.categoryId || categories[0]?.id}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Author</span>
          <select className="select" name="authorId" defaultValue={article?.authorId || authors[0]?.id}>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="field">
        <span>Excerpt</span>
        <input className="input" name="excerpt" defaultValue={article?.excerpt || ""} required />
      </label>
      <label className="field">
        <span>Markdown body</span>
        <textarea className="textarea min-h-64" name="body" defaultValue={article?.body || ""} required />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="field">
          <span>SEO title</span>
          <input className="input" name="seoTitle" defaultValue={article?.seoTitle || ""} />
        </label>
        <label className="field">
          <span>SEO description</span>
          <input className="input" name="seoDescription" defaultValue={article?.seoDescription || ""} />
        </label>
      </div>
      <label className="field">
        <span>Status</span>
        <select className="select" name="status" defaultValue={article?.status || "DRAFT"}>
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
        </select>
      </label>
      <p className="rounded-md bg-sand-50 p-3 text-sm text-black/60">
        Health articles must include reviewed sources before production publishing.
      </p>
      <button className="btn btn-primary">Save article</button>
    </form>
  );
}
