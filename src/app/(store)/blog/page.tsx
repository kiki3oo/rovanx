import { buildMetadata } from "@/lib/seo";
import { BlogListView } from "@/components/store/blog-list-view";
import { BLOG_POSTS } from "@/lib/blog-data";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Blog & Conseils Vitalité Masculine",
  description: "Découvrez nos guides d'experts, conseils nutritionnels et solutions naturelles pour la santé et la vitalité masculine au Maroc.",
  path: "/blog"
});

export default function BlogPage() {
  return <BlogListView posts={BLOG_POSTS} />;
}
