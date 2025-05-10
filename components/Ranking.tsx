"use client";

import { useState, useEffect } from "react";

import { Trophy, ChevronDown } from "lucide-react";
import PageTransition from "@/components/page-transition";
import { U18A, J3, U15A, U15B, U13, U14, U18B } from "@/lib/soccer-data";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function RankingsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLeague, setActiveLeague] = useState("J3");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // リーグ選択のオプション
  const leagueOptions = [
    {
      id: "J3",
      name: "Jリーグ（J3）",
      hp: "https://www.jleague.jp/standings/j3/",
      rank: J3,
    },
    {
      id: "U18A",
      name: "U18プリンスリーグ北信越",
      hp: "https://www.jfa.jp/match/takamado_jfa_u18_prince2025/hokushinetsu/",
      rank: U18A,
    },
    {
      id: "U18B",
      name: "U-18長野県リーグ 2部A",
      hp: "https://www.nagano-fa.or.jp/cat_2",
      rank: U18B,
    },
    {
      id: "U15A",
      name: "U-15北信越リーグ",
      hp: "https://www.jfa.jp/match/takamado_jfa_u15_2025/regional/hokushinetsu/",
      rank: U15A,
    },
    {
      id: "U15B",
      name: "U-15長野県リーグ1部",
      hp: "https://www.nagano-fa.or.jp/cat_3",
      rank: U15B,
    },
    {
      id: "U14",
      name: "ポラリスC",
      hp: "https://www.jleague.jp/academy/under/u14/2025/schedule/index_p-c.html",
      rank: U14,
    },
    {
      id: "U13",
      name: "U-13北信越リーグ",
      hp: "https://www.jfa.jp/match/u13_league_2025/regional/hokushinetsu/",
      rank: U13,
    },
  ];

  const findLeagueById = (id: string) => {
    return leagueOptions.find((league) => league.id === id);
  };

  return (
    <div>
      {/* Main Content */}
      <PageTransition>
        <main className="relative h-screen w-full pt-40 flex">
          {/* Sidebar */}
          <div
            className={`hidden md:block w-64 h-full bg-white/10 backdrop-blur-lg p-4 shadow-xl border-r border-white/20 rounded-tr-3xl opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } flex flex-col`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-blue-400" />
              <h2 className="text-xl font-bold text-white">リーグ選択</h2>
            </div>
            <div className="flex items-center flex-col gap-2 mb-6">
              <h3 className="text-sm font-bold text-white">
                最新の順位は各リーグの公式HPを参照ください。
              </h3>
              <h6 className="text-xs text-white/50">
                (このページは気まぐれで手動更新です)
              </h6>
            </div>

            <div className="space-y-2">
              {leagueOptions.map((league) => (
                <button
                  key={league.id}
                  onClick={() => setActiveLeague(league.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeLeague === league.id
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {league.name}
                </button>
              ))}
            </div>
          </div>

          {/* Rankings Content - Scrollable */}
          <div
            className={`flex-1 flex flex-col opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } overflow-hidden`}
            style={{ animationDelay: "0.6s" }}
          >
            {/* <StylishDropdown
              options={leagueOptions.map((league) => ({
                value: league.id,
                label: league.name,
              }))}
              placeholder="リーグを選択"
              onChange={(value) => setActiveLeague(value)}
            /> */}

            {/* Content Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  {leagueOptions.find((l) => l.id === activeLeague)?.name ||
                    "Jリーグ（J3）"}
                </h2>
                <a
                  href={leagueOptions.find((l) => l.id === activeLeague)?.hp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-white bg-white/20 rounded-lg hover:text-blue-300 transition-colors"
                >
                  公式HPはこちら(外部のページへ遷移します)
                </a>
              </div>
              <div className="md:hidden flex items-center gap-4">
                <div className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-white">
                        <span>リーグを選択</span>
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
              </div>
            </div>
            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-5xl mx-auto">
                {/* League Table */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 mb-8">
                  <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-white/20">
                    順位表
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full text-white">
                      <thead>
                        <tr className="text-white/70 border-b border-white/20">
                          <th className="py-3 text-left pl-2">順位</th>
                          <th className="py-3 text-left">クラブ</th>
                          <th className="py-3 text-center">試合</th>
                          <th className="py-3 text-center">勝</th>
                          <th className="py-3 text-center">分</th>
                          <th className="py-3 text-center">負</th>
                          <th className="py-3 text-center">得点</th>
                          <th className="py-3 text-center">失点</th>
                          <th className="py-3 text-center">得失点差</th>
                          <th className="py-3 text-center">勝点</th>
                        </tr>
                      </thead>
                      <tbody>
                        {findLeagueById(activeLeague)?.rank?.map((team) => (
                          <tr
                            key={team.id}
                            className={`${
                              team.name.includes("松本山雅")
                                ? "bg-green-600"
                                : ""
                            } border-b border-white/10 ${
                              team.name === "松本山雅ＦＣ"
                                ? ""
                                : "hover:bg-white/5"
                            } transition-colors`}
                          >
                            <td className="py-4 pl-2">{team.rank}</td>
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                <span className="font-medium">{team.name}</span>
                              </div>
                            </td>
                            <td className="py-4 text-center">{team.played}</td>
                            <td className="py-4 text-center">{team.won}</td>
                            <td className="py-4 text-center">{team.drawn}</td>
                            <td className="py-4 text-center">{team.lost}</td>
                            <td className="py-4 text-center">
                              {team.goalsFor}
                            </td>
                            <td className="py-4 text-center">
                              {team.goalsAgainst}
                            </td>
                            <td className="py-4 text-center">
                              {team.goalsFor - team.goalsAgainst}
                            </td>
                            <td className="py-4 text-center font-bold">
                              {team.points}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">ACL出場圏</h4>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                        <span className="text-white/80 text-sm">1位〜3位</span>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">降格圏</h4>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                        <span className="text-white/80 text-sm">
                          16位〜18位
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* Top Scorers */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 mb-8">
                  <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-white/20">
                    得点ランキング(チーム内)
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full text-white">
                      <thead>
                        <tr className="text-white/70 border-b border-white/20">
                          <th className="py-3 text-left pl-2">順位</th>
                          <th className="py-3 text-left">選手</th>
                          <th className="py-3 text-left">クラブ</th>
                          <th className="py-3 text-center">試合</th>
                          <th className="py-3 text-center">得点</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {[
                          {
                            id: 1,
                            rank: 1,
                            name: "鈴木 太郎",
                            team: "横浜F・マリノス",
                            matches: 28,
                            goals: 18,
                          },
                          {
                            id: 2,
                            rank: 2,
                            name: "佐藤 健太",
                            team: "ヴィッセル神戸",
                            matches: 27,
                            goals: 16,
                          },
                          {
                            id: 3,
                            rank: 3,
                            name: "田中 誠",
                            team: "浦和レッズ",
                            matches: 28,
                            goals: 15,
                          },
                          {
                            id: 4,
                            rank: 4,
                            name: "山本 大輔",
                            team: "サンフレッチェ広島",
                            matches: 26,
                            goals: 14,
                          },
                          {
                            id: 5,
                            rank: 5,
                            name: "中村 優太",
                            team: "松本山雅FC",
                            matches: 28,
                            goals: 13,
                          },
                        ].map((player) => (
                          <tr
                            key={player.id}
                            className="border-b border-white/10 hover:bg-white/5 transition-colors"
                          >
                            <td className="py-4 pl-2">{player.rank}</td>
                            <td className="py-4 font-medium">{player.name}</td>
                            <td className="py-4">{player.team}</td>
                            <td className="py-4 text-center">
                              {player.matches}
                            </td>
                            <td className="py-4 text-center font-bold">
                              {player.goals}
                            </td>
                          </tr>
                        ))} */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
