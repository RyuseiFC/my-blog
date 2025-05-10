//
import BlogDetail from "@/components/Blogdetail";
import { getDetail } from "@/lib/client";

export default async function BlogPostPage({
  params,
}: {
  params: { id: string }; // Promise型ではなく直接オブジェクト型に
}) {
  const { id } = params; // awaitする必要なし
  const blogPost = await getDetail(id);
  return <BlogDetail blogPost={blogPost} />;
}
