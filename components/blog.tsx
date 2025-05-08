"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import MainNav from "@/components/main-nav";
import PageTransition from "@/components/page-transition";
import Header from "@/components/Header";
import { Blog } from "@/lib/client";

// カテゴリーの型定義
interface Category {
  name: string;
  count: number;
}

export default function BlogPage({ blogList }: { blogList: Blog[] }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories: Category[] = [
    { name: "テクノロジー", count: 24 },
    { name: "AI", count: 18 },
    { name: "ガジェット", count: 15 },
    { name: "ヘルスケア", count: 12 },
    { name: "VR/AR", count: 10 },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />
      <MainNav />
      {/* Main Content */}
      <PageTransition>
        <main className="relative h-screen w-full pt-40 flex">
          {/* Sidebar - similar to schedule page */}
          <div
            className={`w-64 h-full bg-white/10 backdrop-blur-lg p-4 shadow-xl border-r border-white/20 rounded-tr-3xl opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } flex flex-col`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">
                カテゴリー
              </h3>
              <h3 className="text-sm text-white mb-4 pb-2">(※機能追加予定)</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    {/* <Link
                      href={`/blog/category/${category.name}`}
                      className="flex justify-between items-center text-white hover:text-blue-300 py-2"
                    >
                      <span>{category.name}</span>
                      <span className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link> */}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              {/* <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">
                ニュースレター
              </h3>
              <p className="text-white/80 mb-4">
                最新の記事やテクノロジー情報を受け取りましょう。
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors">
                  登録する
                </button>
              </div> */}
            </div>
          </div>

          {/* Blog Content - Scrollable */}
          <div
            className={`flex-1 flex flex-col opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } overflow-hidden`}
            style={{ animationDelay: "0.6s" }}
          >
            {/* Blog Navigation */}

            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-5xl mx-auto">
                {/* Featured Post */}
                {/* <div
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white/20 mb-12`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative h-[300px] md:h-auto">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                          {featuredPost.category}
                        </span>
                        <span className="text-white/70 text-sm flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {featuredPost.date}
                        </span>
                      </div>
                      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {featuredPost.title}
                      </h1>
                      <p className="text-white/80 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-white/10 text-white/90 text-xs px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            {featuredPost.author.charAt(0)}
                          </div>
                          <span className="text-white">
                            {featuredPost.author}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${featuredPost.id}`}
                          className="flex items-center text-blue-400 hover:text-blue-300"
                        >
                          続きを読む
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Latest Posts Section */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/20">
                    最新の記事
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {blogList.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]"
                      >
                        <div className="relative h-48">
                          <Image
                            src={post.image.url || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="text-white/70 text-sm mb-2 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.createdAt}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {post.title}
                          </h3>
                          <p className="text-white/80 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <Link
                            href={`/blog/${post.id}`}
                            className="flex items-center text-blue-400 hover:text-blue-300"
                          >
                            続きを読む
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <div className="flex justify-center mb-12">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors">
                      もっと見る
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
