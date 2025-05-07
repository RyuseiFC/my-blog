"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TagIcon, Hash, Clock, ChevronRight } from "lucide-react";
import MainNav from "@/components/main-nav";
import PageTransition from "@/components/page-transition";
import Header from "@/components/Header";

export default function TagsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample tags data
  const popularTags = [
    { name: "スマートグラス", count: 42 },
    { name: "AI", count: 38 },
    { name: "機械学習", count: 31 },
    { name: "AR", count: 27 },
    { name: "VR", count: 25 },
    { name: "ウェアラブル", count: 23 },
    { name: "IoT", count: 21 },
    { name: "ブロックチェーン", count: 19 },
    { name: "クラウド", count: 18 },
    { name: "5G", count: 17 },
    { name: "自動運転", count: 16 },
    { name: "ロボティクス", count: 15 },
    { name: "サイバーセキュリティ", count: 14 },
    { name: "量子コンピューティング", count: 13 },
    { name: "デジタルツイン", count: 12 },
    { name: "エッジコンピューティング", count: 11 },
    { name: "ビッグデータ", count: 10 },
    { name: "NFT", count: 9 },
    { name: "メタバース", count: 8 },
    { name: "サステナビリティ", count: 7 },
  ];

  // Sample posts for selected tag
  const taggedPosts = [
    {
      id: 1,
      title: "スマートグラスが変える未来の働き方",
      excerpt:
        "最新のスマートグラス技術がどのようにビジネスと日常生活を変革するか探ります。",
      image: "/placeholder.svg?height=300&width=600",
      date: "2025年4月2日",
      readTime: "5分",
    },
    {
      id: 2,
      title: "スマートグラスとAIの融合：新たな可能性",
      excerpt:
        "AIとスマートグラスの組み合わせがもたらす革新的なユースケースについて解説します。",
      image: "/placeholder.svg?height=300&width=600",
      date: "2025年3月28日",
      readTime: "7分",
    },
    {
      id: 3,
      title: "医療分野におけるスマートグラスの活用事例",
      excerpt:
        "医療現場でのスマートグラス活用が患者ケアと医療効率をどう向上させるか紹介します。",
      image: "/placeholder.svg?height=300&width=600",
      date: "2025年3月20日",
      readTime: "6分",
    },
    {
      id: 4,
      title: "スマートグラス開発者向けガイド：基礎から応用まで",
      excerpt:
        "スマートグラスアプリケーション開発の基本から高度なテクニックまで解説します。",
      image: "/placeholder.svg?height=300&width=600",
      date: "2025年3月15日",
      readTime: "10分",
    },
    {
      id: 5,
      title: "プライバシーとセキュリティ：スマートグラスの課題と解決策",
      excerpt:
        "スマートグラス普及に伴うプライバシーとセキュリティの課題について考察します。",
      image: "/placeholder.svg?height=300&width=600",
      date: "2025年3月10日",
      readTime: "8分",
    },
  ];

  const handleTagClick = (tagName: string) => {
    setSelectedTag(tagName);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Header />

      {/* Main Navigation */}
      <MainNav />

      {/* Main Content */}
      <PageTransition>
        <main className="relative h-screen w-full pt-40 flex">
          {/* Sidebar with Tags Cloud */}
          <div
            className={`w-64 h-full bg-white/10 backdrop-blur-lg p-4 shadow-xl border-r border-white/20 rounded-tr-3xl opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } flex flex-col`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <TagIcon className="h-5 w-5 text-blue-400" />
              <h2 className="text-xl font-bold text-white">人気のタグ</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => handleTagClick(tag.name)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all mb-2 ${
                    selectedTag === tag.name
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <Hash className="h-3 w-3" />
                  <span>{tag.name}</span>
                  <span className="ml-1 text-xs opacity-70">({tag.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tagged Posts - Scrollable */}
          <div
            className={`flex-1 flex flex-col opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } overflow-hidden`}
            style={{ animationDelay: "0.6s" }}
          >
            {/* Content Header */}
            <div className="flex items-center gap-3 p-6 border-b border-white/20">
              <TagIcon className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">
                {selectedTag ? `#${selectedTag}` : "タグを選択してください"}
              </h2>
              {selectedTag && (
                <span className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full">
                  {popularTags.find((t) => t.name === selectedTag)?.count || 0}{" "}
                  記事
                </span>
              )}
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-4xl mx-auto">
                {selectedTag ? (
                  <div className="space-y-6">
                    {taggedPosts.map((post, index) => (
                      <div
                        key={post.id}
                        className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-white/20 transition-all duration-300 hover:transform hover:scale-[1.01]"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 relative h-48 md:h-auto">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center gap-3 text-white/70 text-sm mb-2">
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {post.date}
                              </span>
                              <span className="flex items-center">
                                <span className="mr-1">•</span>
                                {post.readTime}の読み物
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {post.title}
                            </h3>
                            <p className="text-white/80 mb-4">{post.excerpt}</p>
                            <Link
                              href={`/blog/${post.id}`}
                              className="flex items-center text-blue-400 hover:text-blue-300"
                            >
                              続きを読む
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Footer */}
                    <footer className="bg-black/30 backdrop-blur-md py-8 border-t border-white/10 rounded-xl mt-12">
                      <div className="px-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                          <h2 className="text-2xl font-bold text-white mb-2">
                            Lovy-tech
                          </h2>
                          <p className="text-white/70">
                            未来のテクノロジーを今日に
                          </p>
                        </div>
                        <div className="flex gap-8">
                          <Link
                            href="/blog"
                            className="text-white hover:text-blue-300"
                          >
                            ブログ
                          </Link>
                          <Link
                            href="/about"
                            className="text-white hover:text-blue-300"
                          >
                            会社情報
                          </Link>
                          <Link
                            href="/contact"
                            className="text-white hover:text-blue-300"
                          >
                            お問い合わせ
                          </Link>
                          <Link
                            href="/privacy"
                            className="text-white hover:text-blue-300"
                          >
                            プライバシーポリシー
                          </Link>
                        </div>
                      </div>
                      <div className="px-8 mt-8 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
                        © 2025 Lovy-tech. All rights reserved.
                      </div>
                    </footer>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-20">
                    <TagIcon className="h-16 w-16 text-white/30 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      タグを選択してください
                    </h3>
                    <p className="text-white/70 text-center max-w-md">
                      左側のタグクラウドからタグを選択すると、関連する記事が表示されます。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
