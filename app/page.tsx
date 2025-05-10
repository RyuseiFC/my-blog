import BlogPage from "@/components/blogPage";
import { getBlogs } from "@/lib/client";

export const metadata = {
  openGraph: {
    title: "雷鳥ブログ",
    description: "",
    images: [
      {
        url: "https://my-blog-liart-chi.vercel.app/IMG_1379_Original.jpg", // 🌟 静的画像の指定
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Home() {
  const { contents } = await getBlogs();

  return <BlogPage blogList={contents} />;
}
