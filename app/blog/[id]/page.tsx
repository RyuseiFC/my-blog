import BlogDetail from "@/components/Blogdetail";
import { getDetail } from "@/lib/client";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log("あ", params);
  const { id } = await params; // paramsをawaitしてからidを取り出す
  const blogPost = await getDetail(id);
  return <BlogDetail blogPost={blogPost} />;
}
