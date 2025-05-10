import BlogPage from "@/components/blogPage";
import { getBlogs } from "@/lib/client";

export const metadata = {
  openGraph: {
    title: "ペンギンブログ",
    description:
      "ペンギンブログは、世界中のペンギンの生態、特徴、驚くべき行動を紹介するブログです。ペンギン好きにはたまらない情報が満載！",
    images: [
      {
        url: "/IMG_2793.jpg", // 🌟 静的画像の指定
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
