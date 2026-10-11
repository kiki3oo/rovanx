import { buildMetadata } from "@/lib/seo";
import { BlogListView } from "@/components/store/blog-list-view";
import { BLOG_POSTS } from "@/lib/blog-data";

export const revalidate = 60;

export const metadata = buildMetadata({
  title: "دليل ومقالات الصحة والحيوية الذكورية | Blog ROVANX Maroc",
  description: "مقالات طبية وحلول طبيعية مثبتة لعلاج سرعة القذف، تقوية الانتصاب، صحة البروستات، رفع التستوستيرون، ودليل الشراء السري والدفع عند الاستلام بالمغرب.",
  path: "/blog"
});

export default function BlogPage() {
  return <BlogListView posts={BLOG_POSTS} />;
}
