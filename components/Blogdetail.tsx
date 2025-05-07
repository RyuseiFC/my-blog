"use client";

import { LineShareButton, LineIcon, TwitterShareButton } from "react-share";

import { useState } from "react";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ChevronLeft,
  Bookmark,
  Heart,
  MessageSquare,
  FileText,
  MessageCircle,
} from "lucide-react";
import MainNav from "@/components/main-nav";
import PageTransition from "@/components/page-transition";
import Header from "@/components/Header";
import { Blog } from "@/lib/client";

export default function BlogDetail({ blogPost }: { blogPost: Blog }) {
  const [activeTab, setActiveTab] = useState("article");
  const url = "https://www.yamaga-fc.com";
  const isLoaded = true;
  const formatted = format(parseISO(blogPost.createdAt), "yyyy年M月d日");

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />
      <MainNav />
      <PageTransition>
        <main className="relative h-screen w-full pt-36 flex">
          <div
            className={`w-64 h-full bg-white/10 backdrop-blur-lg p-4 shadow-xl border-r border-white/20 rounded-tr-3xl  flex flex-col`}
          >
            <Link
              href="/"
              className="group flex items-center gap-2 text-white mb-6 transition-colors px-4 py-2 rounded hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4 group-hover:text-blue-300 transition-colors" />
              <span className="group-hover:text-blue-300 transition-colors">
                ブログ一覧に戻る
              </span>
            </Link>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">
                記事情報
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-white">
                  <span>カテゴリー:</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {blogPost.category}
                  </span>
                </div>
                <div className="flex justify-between text-white">
                  <span>公開日:</span>
                  <span className="text-white/70">{formatted}</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>読了時間:</span>
                  <span className="text-white/70">{blogPost.readtime}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/20">
                タグ
              </h3>
              <div className="flex flex-wrap gap-2 text-white">
                {blogPost.tags.split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex-1 flex flex-col opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } overflow-hidden`}
            style={{ animationDelay: "0.6s" }}
          >
            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto pt-6">
              <div className="border-b border-white/20 bg-white/5 backdrop-blur-sm py-3">
                <div className="max-w-2xl mx-auto px-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex-1">
                      <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {blogPost.title}
                      </h1>
                      <p className="text-white/80 text-sm mb-4">
                        {blogPost.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                          {blogPost.category}
                        </span>
                        <span className="text-white/70 text-sm flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatted}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="border-b border-white/20 bg-white/5">
                <div className="max-w-2xl mx-auto px-6">
                  <div className="flex">
                    <button
                      onClick={() => setActiveTab("article")}
                      className={`px-4 py-3 flex items-center gap-2 border-b-2 transition-colors ${
                        activeTab === "article"
                          ? "border-blue-500 text-white font-medium"
                          : "border-transparent text-white/70 hover:text-white"
                      }`}
                    >
                      <FileText className="h-4 w-4" />
                      <span>記事</span>
                    </button>
                    {/* <button
                      onClick={() => setActiveTab("comments")}
                      className={`px-4 py-3 flex items-center gap-2 border-b-2 transition-colors ${
                        activeTab === "comments"
                          ? "border-blue-500 text-white font-medium"
                          : "border-transparent text-white/70 hover:text-white"
                      }`}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>コメント </span>
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-6 py-4">
                {/* Tab Content */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow-lg border border-white/20 mb-6">
                  {activeTab === "article" && (
                    <div
                      className="prose prose-lg prose-invert max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: blogPost.content || blogPost.excerpt,
                      }}
                    />
                  )}
                  {/* {activeTab === "comments" && (
                    <div className="py-4">
                      <div className="mb-6">
                        <h3 className="text-white text-lg font-medium mb-4">
                          コメント
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-white/5 p-4 rounded-lg">
                            <div className="flex items-start gap-3 mb-2">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src="/placeholder.svg?height=100&width=100"
                                  alt="User"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-white font-medium">
                                    鈴木 一郎
                                  </span>
                                  <span className="text-white/50 text-xs">
                                    2025年4月2日
                                  </span>
                                </div>
                                <p className="text-white/80 mt-1">
                                  とても興味深い記事でした。スマートグラスの医療分野での活用事例がもっと知りたいです。
                                </p>
                              </div>
                            </div>
                            <div className="ml-12 mt-2">
                              <button className="text-blue-400 text-sm hover:text-blue-300 mr-4">
                                返信
                              </button>
                              <button className="text-white/50 text-sm hover:text-white/70">
                                いいね (3)
                              </button>
                            </div>
                          </div>

                          <div className="bg-white/5 p-4 rounded-lg">
                            <div className="flex items-start gap-3 mb-2">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src="/placeholder.svg?height=100&width=100"
                                  alt="User"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-white font-medium">
                                    田中 花子
                                  </span>
                                  <span className="text-white/50 text-xs">
                                    2025年4月1日
                                  </span>
                                </div>
                                <p className="text-white/80 mt-1">
                                  プライバシーの懸念についてもっと詳しく知りたいです。特に公共の場での使用に関する法的な側面はどうなっていますか？
                                </p>
                              </div>
                            </div>
                            <div className="ml-12 mt-2">
                              <button className="text-blue-400 text-sm hover:text-blue-300 mr-4">
                                返信
                              </button>
                              <button className="text-white/50 text-sm hover:text-white/70">
                                いいね (5)
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-white text-lg font-medium mb-4">
                          コメントを追加
                        </h3>
                        <textarea
                          className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                          placeholder="コメントを入力してください..."
                        ></textarea>
                        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                          投稿する
                        </button>
                      </div>
                    </div>
                  )} */}
                </div>

                {/* Article Actions */}
                {activeTab === "article" && (
                  <div className="flex items-center justify-between mb-8">
                    {/* <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                        <Heart className="h-5 w-5" />
                        <span>{0}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab("comments")}
                        className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
                      >
                        <MessageSquare className="h-5 w-5" />
                        <span>{0}</span>
                      </button>
                    </div> */}
                    <div className="flex items-center gap-4">
                      {/* <button className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                        <Bookmark className="h-5 w-5" />
                        <span>保存</span>
                      </button> */}
                      <TwitterShareButton url={url}>
                        <Image
                          src="/logo.svg"
                          alt="Xでシェア"
                          width={20}
                          height={20}
                        />
                      </TwitterShareButton>
                      <LineShareButton url={url}>
                        <LineIcon size={24} />
                      </LineShareButton>
                    </div>
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
