"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  ChevronDown,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PageTransition from "@/components/page-transition";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// 試合データの型定義
interface Match {
  id: string;
  homeTeam: {
    id: string;
    name: string;
    logo: string;
  };
  awayTeam: {
    id: string;
    name: string;
    logo: string;
  };
  date: string;
  time: string;
  venue: string;
  competition: string;
  status?: "scheduled" | "live" | "finished";
  score?: {
    home: number;
    away: number;
  };
}

export default function Match() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLeague, setActiveLeague] = useState("j1");
  const [activeMonth, setActiveMonth] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // リーグ選択のオプション
  const leagueOptions = [
    { id: "j1", name: "Jリーグ（J1）" },
    { id: "j2", name: "Jリーグ（J2）" },
    { id: "j3", name: "Jリーグ（J3）" },
    { id: "acl", name: "ACLリーグ" },
    { id: "premier", name: "プレミアリーグ" },
    { id: "laliga", name: "ラ・リーガ" },
    { id: "bundesliga", name: "ブンデスリーガ" },
    { id: "seriea", name: "セリエA" },
  ];

  // 月選択のオプション
  const monthOptions = [
    { id: "all", name: "全期間" },
    { id: "202504", name: "2025年4月" },
    { id: "202505", name: "2025年5月" },
    { id: "202506", name: "2025年6月" },
    { id: "202507", name: "2025年7月" },
    { id: "202508", name: "2025年8月" },
    { id: "202509", name: "2025年9月" },
  ];

  // サンプルの試合データ
  const matchesData: Match[] = [
    {
      id: "1",
      homeTeam: {
        id: "team1",
        name: "ヴィッセル神戸",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team2",
        name: "サンフレッチェ広島",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月6日",
      time: "14:00",
      venue: "ノエビアスタジアム神戸",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    {
      id: "2",
      homeTeam: {
        id: "team3",
        name: "松本山雅FC",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team4",
        name: "横浜F・マリノス",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月6日",
      time: "16:00",
      venue: "サンプロアルウィン",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    {
      id: "3",
      homeTeam: {
        id: "team5",
        name: "浦和レッズ",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team6",
        name: "FC東京",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月6日",
      time: "19:00",
      venue: "埼玉スタジアム2002",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    {
      id: "4",
      homeTeam: {
        id: "team7",
        name: "鹿島アントラーズ",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team8",
        name: "名古屋グランパス",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月7日",
      time: "14:00",
      venue: "県立カシマサッカースタジアム",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    {
      id: "5",
      homeTeam: {
        id: "team9",
        name: "セレッソ大阪",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team10",
        name: "柏レイソル",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月7日",
      time: "16:00",
      venue: "ヨドコウ桜スタジアム",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    {
      id: "6",
      homeTeam: {
        id: "team1",
        name: "ヴィッセル神戸",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team5",
        name: "浦和レッズ",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月13日",
      time: "14:00",
      venue: "ノエビアスタジアム神戸",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    {
      id: "7",
      homeTeam: {
        id: "team4",
        name: "横浜F・マリノス",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team7",
        name: "鹿島アントラーズ",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月13日",
      time: "16:00",
      venue: "日産スタジアム",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    {
      id: "8",
      homeTeam: {
        id: "team2",
        name: "サンフレッチェ広島",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team9",
        name: "セレッソ大阪",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月13日",
      time: "19:00",
      venue: "エディオンスタジアム広島",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    {
      id: "9",
      homeTeam: {
        id: "team6",
        name: "FC東京",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team3",
        name: "松本山雅FC",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月14日",
      time: "14:00",
      venue: "味の素スタジアム",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    {
      id: "10",
      homeTeam: {
        id: "team8",
        name: "名古屋グランパス",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team10",
        name: "柏レイソル",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月14日",
      time: "16:00",
      venue: "豊田スタジアム",
      competition: "Jリーグ（J1）",
      status: "scheduled",
    },
    // 過去の試合（結果あり��
    {
      id: "11",
      homeTeam: {
        id: "team4",
        name: "横浜F・マリノス",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team7",
        name: "鹿島アントラーズ",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月3日",
      time: "19:00",
      venue: "日産スタジアム",
      competition: "Jリーグ（J1）",
      status: "finished",
      score: {
        home: 2,
        away: 1,
      },
    },
    {
      id: "12",
      homeTeam: {
        id: "team5",
        name: "浦和レッズ",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team6",
        name: "FC東京",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月2日",
      time: "19:00",
      venue: "埼玉スタジアム2002",
      competition: "Jリーグ（J1）",
      status: "finished",
      score: {
        home: 3,
        away: 0,
      },
    },
    {
      id: "13",
      homeTeam: {
        id: "team3",
        name: "松本山雅FC",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        id: "team8",
        name: "名古屋グランパス",
        logo: "/placeholder.svg?height=32&width=32",
      },
      date: "2025年4月1日",
      time: "19:00",
      venue: "サンプロアルウィン",
      competition: "Jリーグ（J1）",
      status: "finished",
      score: {
        home: 2,
        away: 2,
      },
    },
  ];

  // 日付でグループ化する関数
  const groupMatchesByDate = (matches: Match[]) => {
    const grouped = matches.reduce((acc, match) => {
      if (!acc[match.date]) {
        acc[match.date] = [];
      }
      acc[match.date].push(match);
      return acc;
    }, {} as Record<string, Match[]>);

    // 日付順にソート
    return Object.entries(grouped).sort((a, b) => {
      const dateA = new Date(a[0].replace(/年|月|日/g, ""));
      const dateB = new Date(b[0].replace(/年|月|日/g, ""));
      return dateA.getTime() - dateB.getTime();
    });
  };

  // フィルタリングされた試合データ
  const filteredMatches = matchesData.filter((match) => {
    // リーグでフィルタリング
    if (
      activeLeague !== "all" &&
      match.competition !==
        leagueOptions.find((l) => l.id === activeLeague)?.name
    ) {
      return false;
    }

    // 月でフィルタリング
    if (activeMonth !== "all") {
      const year = activeMonth.substring(0, 4);
      const month = activeMonth.substring(4, 6);
      const matchDate = match.date;
      if (!matchDate.includes(`${year}年${Number.parseInt(month)}月`)) {
        return false;
      }
    }

    return true;
  });

  // 日付でグループ化された試合データ
  const groupedMatches = groupMatchesByDate(filteredMatches);

  // ページネーション
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredMatches.length / itemsPerPage);
  const paginatedMatches = groupedMatches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}

      {/* Main Navigation */}

      {/* Main Content */}
      <PageTransition>
        <main className="relative h-screen w-full pt-40 flex">
          {/* Sidebar */}
          <div
            className={`w-64 h-full bg-white/10 backdrop-blur-lg p-4 shadow-xl border-r border-white/20 rounded-tr-3xl opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } flex flex-col`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-blue-400" />
              <h2 className="text-xl font-bold text-white">試合スケジュール</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2">リーグ</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-white">
                      <span>
                        {leagueOptions.find((l) => l.id === activeLeague)
                          ?.name || "すべてのリーグ"}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white/10 backdrop-blur-lg border-white/20">
                    <DropdownMenuLabel className="text-white">
                      リーグ選択
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/20" />
                    {leagueOptions.map((league) => (
                      <DropdownMenuItem
                        key={league.id}
                        className={`text-white hover:bg-white/20 cursor-pointer ${
                          activeLeague === league.id ? "bg-blue-500/50" : ""
                        }`}
                        onClick={() => setActiveLeague(league.id)}
                      >
                        {league.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">期間</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-white">
                      <span>
                        {monthOptions.find((m) => m.id === activeMonth)?.name ||
                          "すべての期間"}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white/10 backdrop-blur-lg border-white/20">
                    <DropdownMenuLabel className="text-white">
                      期間選択
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/20" />
                    {monthOptions.map((month) => (
                      <DropdownMenuItem
                        key={month.id}
                        className={`text-white hover:bg-white/20 cursor-pointer ${
                          activeMonth === month.id ? "bg-blue-500/50" : ""
                        }`}
                        onClick={() => setActiveMonth(month.id)}
                      >
                        {month.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">表示</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between gap-2 bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg px-4 py-2 text-white">
                    <span>すべての試合</span>
                  </button>
                  <button className="w-full flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-white">
                    <span>今後の試合のみ</span>
                  </button>
                  <button className="w-full flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-white">
                    <span>結果のみ</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-white mb-4">注目の試合</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="text-white/70 text-xs mb-2">
                    2025年4月13日 16:00
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                      <span className="text-white">横浜F・マリノス</span>
                    </div>
                    <span className="text-white font-bold">VS</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">鹿島アントラーズ</span>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-white/70 text-xs mt-2 text-center">
                    日産スタジアム
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="text-white/70 text-xs mb-2">
                    2025年4月13日 14:00
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                      <span className="text-white">ヴィッセル神戸</span>
                    </div>
                    <span className="text-white font-bold">VS</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">浦和レッズ</span>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-white/70 text-xs mt-2 text-center">
                    ノエビアスタジアム神戸
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Content - Scrollable */}
          <div
            className={`flex-1 flex flex-col opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } overflow-hidden`}
            style={{ animationDelay: "0.6s" }}
          >
            {/* Content Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  試合スケジュール
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-white">
                  <Filter className="h-4 w-4" />
                  <span>フィルター</span>
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-white">
                      <span>2024-2025シーズン</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white/10 backdrop-blur-lg border-white/20">
                    <DropdownMenuLabel className="text-white">
                      シーズン選択
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuItem className="text-white hover:bg-white/20 cursor-pointer bg-blue-500/50">
                      2024-2025シーズン
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-white/20 cursor-pointer">
                      2023-2024シーズン
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-white/20 cursor-pointer">
                      2022-2023シーズン
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-5xl mx-auto">
                {/* Matches List */}
                <div className="space-y-8">
                  {paginatedMatches.map(([date, matches]) => (
                    <div
                      key={date}
                      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20"
                    >
                      <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-white/20">
                        {date}
                      </h3>

                      <div className="space-y-4">
                        {matches.map((match) => (
                          <div
                            key={match.id}
                            className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 cursor-pointer"
                          >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-3">
                                    <div className="relative w-8 h-8 flex-shrink-0">
                                      <Image
                                        src={
                                          match.homeTeam.logo ||
                                          "/placeholder.svg"
                                        }
                                        alt={match.homeTeam.name}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                      />
                                    </div>
                                    <span className="text-white font-medium">
                                      {match.homeTeam.name}
                                    </span>
                                  </div>

                                  {match.status === "finished" ? (
                                    <span className="text-white font-bold text-xl mx-4">
                                      {match.score?.home} - {match.score?.away}
                                    </span>
                                  ) : (
                                    <span className="text-white font-bold text-xl mx-4">
                                      VS
                                    </span>
                                  )}

                                  <div className="flex items-center gap-3">
                                    <span className="text-white font-medium">
                                      {match.awayTeam.name}
                                    </span>
                                    <div className="relative w-8 h-8 flex-shrink-0">
                                      <Image
                                        src={
                                          match.awayTeam.logo ||
                                          "/placeholder.svg"
                                        }
                                        alt={match.awayTeam.name}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
                                <div className="flex items-center gap-2">
                                  <span className="text-white/70 text-sm">
                                    {match.time}
                                  </span>
                                  {match.status === "live" && (
                                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                                      LIVE
                                    </span>
                                  )}
                                  {match.status === "finished" && (
                                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                                      終了
                                    </span>
                                  )}
                                </div>
                                <span className="text-white/70 text-sm">
                                  {match.venue}
                                </span>
                                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                  {match.competition}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg ${
                        currentPage === 1
                          ? "bg-white/5 text-white/50 cursor-not-allowed"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg ${
                            currentPage === page
                              ? "bg-blue-500 text-white"
                              : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}

                    <button
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg ${
                        currentPage === totalPages
                          ? "bg-white/5 text-white/50 cursor-not-allowed"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
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
