"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import PageTransition from "@/components/page-transition";
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

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Main Content */}
      <PageTransition>
        <main className="relative h-screen w-full pt-40 flex">
          {/* Sidebar - similar to schedule page */}
          <div
            className={`hidden sm:block w-64 h-full bg-white/10 backdrop-blur-lg p-4 shadow-xl border-r border-white/20 rounded-tr-3xl opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } flex flex-col`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">
                カテゴリー
              </h3>
              <h3 className="text-sm text-white mb-4 pb-2">(※機能追加予定)</h3>
              <ul className="space-y-2"></ul>
            </div>

            <div className="mb-6"></div>
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
                {/* Latest Posts Section */}
                <div>
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
                          <div className="text-white/40 text-sm mb-2 flex items-center">
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
