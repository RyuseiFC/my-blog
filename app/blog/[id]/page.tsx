//
import BlogDetail from "@/components/Blogdetail";
import { getDetail } from "@/lib/client";

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const blogPost = await getDetail(params.id);
  return <BlogDetail blogPost={blogPost} />;
}
