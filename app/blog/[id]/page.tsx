import BlogDetail from "@/components/Blogdetail";
import { getBlogs, getDetail } from "@/lib/client";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogPost = await getDetail(id);
  return <BlogDetail blogPost={blogPost} />;
}

export async function generateStaticParams() {
  const posts = await getBlogs(); // 全記事取得
  return posts.contents.map((post: { id: string }) => ({
    id: post.id,
  }));
}
