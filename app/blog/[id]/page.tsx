//
import BlogDetail from "@/components/Blogdetail";
import { getDetail } from "@/lib/client";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogPost = await getDetail(id);
  return <BlogDetail blogPost={blogPost} />;
}
