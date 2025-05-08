import BlogPage from "@/components/blogPage";
import { getBlogs } from "@/lib/client";

export default async function Home() {
  const { contents } = await getBlogs();

  return <BlogPage blogList={contents} />;
}
