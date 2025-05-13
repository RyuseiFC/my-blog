"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import {
  MapPin,
  ChevronDown,
  Info,
  Phone,
  Globe,
  Navigation,
  X,
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

// スタジアムデータの型定義
interface Stadium {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  capacity: number;
  image: string;
  description: string;
  homeTeam: string;
  league: string;
  website?: string;
  phone?: string;
  openingYear: number;
  nearestStation?: string;
  accessInfo?: string;
}

declare global {
  interface Window {
    L: typeof import("leaflet");
  }
}

export default function VenuesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLeague, setActiveLeague] = useState("all");
  const [searchQuery] = useState("");
  const [selectedStadium, setSelectedStadium] = useState<Stadium | null>(null);
  const [mapInitialized, setMapInitialized] = useState(false);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // 地域選択のオプション
  // const leagueOptions = [
  //   { id: "all", name: "すべてのリーグ" },
  //   { id: "j1", name: "Jリーグ（J1）" },
  //   { id: "j2", name: "Jリーグ（J2）" },
  //   { id: "j3", name: "Jリーグ（J3）" },
  //   { id: "acl", name: "ACLリーグ" },
  //   { id: "emperor", name: "天皇杯" },
  //   { id: "levain", name: "ルヴァンカップ" },
  //   { id: "wc", name: "ワールドカップ会場" },
  // ];

  const leagueOptions = [
    { id: "all", name: "すべてのリーグ" },
    {
      id: "J3",
      name: "Jリーグ（J3）",
      hp: "https://www.jleague.jp/standings/j3/",
    },
    {
      id: "U18A",
      name: "U18プリンスリーグ北信越",
      hp: "https://www.jfa.jp/match/takamado_jfa_u18_prince2025/hokushinetsu/",
    },
    {
      id: "U18B",
      name: "U-18長野県リーグ 2部A",
      hp: "https://www.nagano-fa.or.jp/cat_2",
    },
    {
      id: "U15A",
      name: "U-15北信越リーグ",
      hp: "https://www.jfa.jp/match/takamado_jfa_u15_2025/regional/hokushinetsu/",
    },
    {
      id: "U15B",
      name: "U-15長野県リーグ1部",
      hp: "https://www.nagano-fa.or.jp/cat_3",
    },
    {
      id: "U14",
      name: "ポラリスC",
      hp: "https://www.jleague.jp/academy/under/u14/2025/schedule/index_p-c.html",
    },
    {
      id: "U13",
      name: "U-13北信越リーグ",
      hp: "https://www.jfa.jp/match/u13_league_2025/regional/hokushinetsu/",
    },
  ];

  // サンプルのスタジアムデータ
  const stadiumsData: Stadium[] = [
    {
      id: "1",
      name: "プライフーズスタジアム",
      location: {
        lat: 40.590264, // 修正
        lng: 141.456111,
      },
      address: "青森県八戸市大字河原木字高館39-1",
      capacity: 5000,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "ヴァンラーレ八戸のホームスタジアム。天然芝のピッチを有する多目的スタジアム。",
      homeTeam: "ヴァンラーレ八戸",
      website: "https://www.vanraure.net/",
      phone: "0178-38-0035",
      openingYear: 2001,
      nearestStation: "八戸駅（JR東北新幹線）",
      accessInfo: "八戸駅から車で約15分",
    },
    {
      id: "2",
      name: "とうほう・みんなのスタジアム",
      location: {
        lat: 37.752169, // 修正
        lng: 140.467953,
      },
      address: "福島県福島市佐原字神事場1番地",
      capacity: 21000,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "福島ユナイテッドFCのホームスタジアム。陸上競技場としても利用される多目的施設。",
      homeTeam: "福島ユナイテッドFC",
      website: "https://fufc.jp/",
      phone: "024-593-1111",
      openingYear: 1994,
      nearestStation: "福島駅（JR東北本線）",
      accessInfo: "福島駅から車で約20分",
    },
    {
      id: "3",
      name: "カンセキスタジアムとちぎ",
      location: {
        lat: 36.55213, // 修正
        lng: 139.883428,
      },
      address: "栃木県宇都宮市西川田4丁目1-1",
      capacity: 25244,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "栃木SCのホームスタジアム。最新の設備を備えた多目的スタジアム。",
      homeTeam: "栃木SC",
      website: "https://www.tochigisc.jp/",
      phone: "028-615-7130",
      openingYear: 2020,
      nearestStation: "西川田駅（東武宇都宮線）",
      accessInfo: "西川田駅から徒歩約15分",
    },
    {
      id: "4",
      name: "CITY FOOTBALL STATION",
      location: {
        lat: 36.406037, // 修正
        lng: 139.732288,
      },
      address: "栃木県栃木市岩舟町静和",
      capacity: 5129,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "栃木シティFCのホームスタジアム。地域密着型のサッカー専用スタジアム。",
      homeTeam: "栃木シティFC",
      website: "https://tochigi-city.com/",
      phone: "0282-21-0001",
      openingYear: 2022,
      nearestStation: "静和駅（東武日光線）",
      accessInfo: "静和駅から徒歩約10分",
    },
    {
      id: "5",
      name: "正田醤油スタジアム群馬",
      location: {
        lat: 36.394759, // 修正
        lng: 139.060523,
      },
      address: "群馬県前橋市敷島町66",
      capacity: 15253,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "ザスパ群馬のホームスタジアム。陸上競技場としても利用される多目的施設。",
      homeTeam: "ザスパ群馬",
      website: "https://www.thespa.co.jp/",
      phone: "027-235-2211",
      openingYear: 1951,
      nearestStation: "前橋駅（JR両毛線）",
      accessInfo: "前橋駅からバスで約20分",
    },
    {
      id: "6",
      name: "相模原ギオンスタジアム",
      location: {
        lat: 35.532205, // 修正
        lng: 139.354748,
      },
      address: "神奈川県相模原市南区下溝4169",
      capacity: 6291,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "SC相模原のホームスタジアム。自然豊かな環境に位置する多目的スタジアム。",
      homeTeam: "SC相模原",
      website: "https://www.scsagamihara.com/",
      phone: "042-777-6088",
      openingYear: 2007,
      nearestStation: "原当麻駅（JR相模線）",
      accessInfo: "原当麻駅から徒歩約15分",
    },
    {
      id: "7",
      name: "サンプロ アルウィン",
      location: {
        lat: 36.205749, // 修正
        lng: 137.926391,
      },
      address: "長野県松本市神林5300",
      capacity: 20396,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "松本山雅FCのホームスタジアム。山々に囲まれた美しい景観のサッカー専用スタジアム。",
      homeTeam: "松本山雅FC",
      website: "https://www.yamaga-fc.com/",
      phone: "0263-48-2007",
      openingYear: 2001,
      nearestStation: "松本駅（JR篠ノ井線）",
      accessInfo: "松本駅からバスで約25分",
    },
    {
      id: "8",
      name: "長野Uスタジアム",
      location: {
        lat: 36.579793, // 修正
        lng: 138.169882,
      },
      address: "長野県長野市篠ノ井東福寺320",
      capacity: 15491,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "AC長野パルセイロのホームスタジアム。最新の設備を備えたサッカー専用スタジアム。",
      homeTeam: "AC長野パルセイロ",
      website: "https://parceiro.co.jp/",
      phone: "026-293-4062",
      openingYear: 2015,
      nearestStation: "篠ノ井駅（JR信越本線）",
      accessInfo: "篠ノ井駅から徒歩約20分",
    },
    {
      id: "9",
      name: "石川県西部緑地公園陸上競技場",
      location: {
        lat: 36.577493, // 修正
        lng: 136.625951,
      },
      address: "石川県金沢市袋畠町南136",
      capacity: 10444,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "ツエーゲン金沢のホームスタジアム。陸上競技場としても利用される多目的施設。",
      homeTeam: "ツエーゲン金沢",
      website: "https://www.zweigen-kanazawa.jp/",
      phone: "076-267-2411",
      openingYear: 1990,
      nearestStation: "金沢駅（JR北陸本線）",
      accessInfo: "金沢駅からバスで約30分",
    },
    {
      id: "10",
      name: "愛鷹広域公園多目的競技場",
      location: {
        lat: 35.10905, // 修正
        lng: 138.895019,
      },
      address: "静岡県沼津市足高202",
      capacity: 5104,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "アスルクラロ沼津のホームスタジアム。自然に囲まれた多目的競技場。",
      homeTeam: "アスルクラロ沼津",
      website: "https://www.azul-claro.jp/",
      phone: "055-929-9000",
      openingYear: 1994,
      nearestStation: "沼津駅（JR東海道本線）",
      accessInfo: "沼津駅からバスで約20分",
    },
    {
      id: "11",
      name: "岐阜メモリアルセンター長良川競技場",
      location: {
        lat: 35.440756, // 修正
        lng: 136.77383,
      },
      address: "岐阜県岐阜市長良福光大野2675-28",
      capacity: 16310,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "岐阜市に位置する多目的スタジアムで、FC岐阜のホームスタジアムとして使用されています。",
      homeTeam: "FC岐阜",
      website: "https://www.fc-gifu.com/watching/stadium_access/",
      phone: "058-233-8822",
      openingYear: 1991,
      nearestStation: "岐阜駅（JR・名鉄）",
      accessInfo: "岐阜駅からバスで約20分",
    },
    {
      id: "12",
      name: "東大阪市花園ラグビー場",
      location: {
        lat: 34.654454, // 修正
        lng: 135.616528,
      },
      address: "大阪府東大阪市松原南1-1-1",
      capacity: 25861,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "日本ラグビーの聖地として知られるスタジアムで、FC大阪のホームスタジアムとしても使用されています。",
      homeTeam: "FC大阪",
      website: "https://www.city.higashiosaka.lg.jp/0000001156.html",
      phone: "06-6721-3650",
      openingYear: 1929,
      nearestStation: "東花園駅（近鉄奈良線）",
      accessInfo: "東花園駅から徒歩約10分",
    },
    {
      id: "13",
      name: "ロートフィールド奈良",
      location: {
        lat: 34.684956, // 修正
        lng: 135.805112,
      },
      address: "奈良県奈良市法蓮佐保山4丁目5-1",
      capacity: 30000,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "奈良市にある多目的スタジアムで、奈良クラブのホームスタジアムとして使用されています。",
      homeTeam: "奈良クラブ",
      website: "https://naraclub.jp/",
      phone: "0742-22-0000",
      openingYear: 1983,
      nearestStation: "奈良駅（JR・近鉄）",
      accessInfo: "奈良駅からバスで約15分",
    },
    {
      id: "14",
      name: "Axisバードスタジアム",
      location: {
        lat: 35.458086, // 修正
        lng: 134.221662,
      },
      address: "鳥取県鳥取市蔵田423",
      capacity: 16033,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "鳥取市にある多目的スタジアムで、ガイナーレ鳥取のホームスタジアムとして使用されています。",
      homeTeam: "ガイナーレ鳥取",
      website: "https://www.gainare.co.jp/stadiums/",
      phone: "0857-53-6565",
      openingYear: 1995,
      nearestStation: "鳥取駅（JR山陰本線）",
      accessInfo: "鳥取駅からバスで約20分",
    },
    {
      id: "15",
      name: "Pikaraスタジアム",
      location: {
        lat: 34.309153, // 修正
        lng: 133.963133,
      },
      address: "香川県丸亀市金倉町830",
      capacity: 30000,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "香川県丸亀市にある多目的スタジアムで、カマタマーレ讃岐のホームスタジアムとして使用されています。",
      homeTeam: "カマタマーレ讃岐",
      website: "https://www.kamatamare.jp/",
      phone: "0877-21-5800",
      openingYear: 1997,
      nearestStation: "丸亀駅（JR予讃線）",
      accessInfo: "丸亀駅からバスで約15分",
    },
    {
      id: "16",
      name: "春野総合運動公園陸上競技場",
      location: {
        lat: 33.520849, // 修正
        lng: 133.59883,
      },
      address: "高知県高知市春野町芳原2485",
      capacity: 10000,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "高知市にある多目的スタジアムで、高知ユナイテッドSCのホームスタジアムとして使用されています。",
      homeTeam: "高知ユナイテッドSC",
      website: "https://kochi-usc.jp/",
      phone: "088-803-7675",
      openingYear: 1985,
      nearestStation: "高知駅（JR土讃線）",
      accessInfo: "高知駅からバスで約30分",
    },
    {
      id: "17",
      name: "ミクニワールドスタジアム北九州",
      location: {
        lat: 33.891611, // 修正
        lng: 130.888943,
      },
      address: "福岡県北九州市小倉北区浅野3丁目9-33",
      capacity: 15000,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "北九州市にある多目的スタジアムで、ギラヴァンツ北九州のホームスタジアムとして使用されています。",
      homeTeam: "ギラヴァンツ北九州",
      website: "https://www.giravanz.jp/",
      phone: "093-521-2020",
      openingYear: 2017,
      nearestStation: "小倉駅（JR・北九州モノレール）",
      accessInfo: "小倉駅から徒歩約7分",
    },
    {
      id: "18",
      name: "いちご宮崎新富サッカー場",
      location: {
        lat: 32.0731, // 修正
        lng: 131.4918,
      },
      address: "宮崎県児湯郡新富町三納代1586",
      capacity: 5000,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "宮崎県新富町にあるサッカー専用スタジアムで、テゲバジャーロ宮崎のホームスタジアムとして使用されています。",
      homeTeam: "テゲバジャーロ宮崎",
      website: "https://www.tegevajaro.com/",
      phone: "0983-33-6020",
      openingYear: 2021,
      nearestStation: "日向新富駅（JR日豊本線）",
      accessInfo: "日向新富駅から徒歩約15分",
    },
    {
      id: "19",
      name: "白波スタジアム（鹿児島県立鴨池陸上競技場）",
      location: {
        lat: 36.413867, // 修正
        lng: 138.005653,
      },
      address: "鹿児島県鹿児島市与次郎2丁目2-2",
      capacity: 12606,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "鹿児島市にある多目的スタジアムで、鹿児島ユナイテッドFCのホームスタジアムとして使用されています。",
      homeTeam: "鹿児島ユナイテッドFC",
      website: "https://www.kufc.co.jp/",
      phone: "099-255-0434",
      openingYear: 1970,
      nearestStation: "鹿児島中央駅（JR・市電）",
      accessInfo: "鹿児島中央駅からバスで約20分",
    },
    {
      id: "20",
      name: "タピック県総ひやごんスタジアム",
      location: {
        lat: 26.308629, // 修正
        lng: 127.821066,
      },
      address: "沖縄県沖縄市比屋根5丁目3-1",
      capacity: 12270,
      image: "/placeholder.svg?height=300&width=600",
      league: "J3",
      description:
        "沖縄県沖縄市に位置する多目的スタジアムで、FC琉球のホームスタジアムとして使用されています。1987年に開場し、2015年に改修されました。陸上競技場を併設し、天然芝のピッチを備えています。",
      homeTeam: "FC琉球",
      website: "https://okinawa-kenso.com/?page_id=213",
      phone: "098-932-5114",
      openingYear: 1987,
      nearestStation: "おもろまち駅（沖縄都市モノレール）",
      accessInfo: "おもろまち駅からバスで約40分、比屋根バス停下車徒歩約10分",
    },
  ];

  // 地図の初期化
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      mapContainerRef.current &&
      !mapRef.current
    ) {
      // Leaflet.jsのスクリプトとCSSを動的に読み込む
      const loadLeaflet = async () => {
        // すでに読み込まれているか確認
        if (!document.getElementById("leaflet-css")) {
          const link = document.createElement("link");
          link.id = "leaflet-css";
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
          link.integrity =
            "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
          link.crossOrigin = "";
          document.head.appendChild(link);
        }

        if (!window.L) {
          await new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
            script.integrity =
              "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
            script.crossOrigin = "";
            script.onload = resolve;
            document.head.appendChild(script);
          });
        }

        // 地図の初期化
        const L = window.L;
        if (mapContainerRef.current && L) {
          // 日本の中心あたりに初期表示
          const map = L.map(mapContainerRef.current).setView(
            [36.2048, 138.2529],
            5
          );
          mapRef.current = map;

          // OpenStreetMapのタイルレイヤーを追加
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map);

          // スタジアムのマーカーを追加
          markersRef.current = stadiumsData.map((stadium) => {
            const marker = L.marker([
              stadium.location.lat,
              stadium.location.lng,
            ])
              .addTo(map)
              .bindPopup(
                `<b>${stadium.name}</b><br>${stadium.address}<br><a href="#" class="stadium-link" data-id="${stadium.id}">詳細を見る</a>`
              );

            marker.on("click", () => {
              setSelectedStadium(stadium);
            });

            return marker;
          });

          // ポップアップ内のリンクをクリックしたときの処理
          map.on("popupopen", () => {
            const links = document.querySelectorAll(".stadium-link");
            links.forEach((link) => {
              link.addEventListener("click", (event) => {
                event.preventDefault();
                const stadiumId = link.getAttribute("data-id");
                const stadium = stadiumsData.find((s) => s.id === stadiumId);
                if (stadium) {
                  setSelectedStadium(stadium);
                }
              });
            });
          });

          setMapInitialized(true);
        }
      };

      loadLeaflet();
    }

    return () => {
      // コンポーネントのアンマウント時に地図を破棄
      if (mapRef.current && typeof window !== "undefined" && window.L) {
        mapRef.current.remove();
        mapRef.current = null;
        markersRef.current = [];
      }
    };
  }, []); // mapContainerRef.currentのみに依存

  // 検索やフィルタリングが変更されたときに地図のマーカーを更新
  useEffect(() => {
    if (
      mapInitialized &&
      mapRef.current &&
      typeof window !== "undefined" &&
      window.L
    ) {
      const L = window.L;

      // 既存のマーカーをすべて削除
      markersRef.current.forEach((marker) => {
        marker.remove();
      });
      markersRef.current = [];

      // フィルタリングされたスタジアムのマーカーを追加
      const filteredStadiums = stadiumsData.filter((stadium) => {
        const matchesLeague =
          activeLeague === "all" || stadium.league === activeLeague;
        const matchesSearch =
          searchQuery === "" ||
          stadium.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLeague && matchesSearch;
      });

      markersRef.current = filteredStadiums.map((stadium) => {
        const marker = L.marker([stadium.location.lat, stadium.location.lng])
          .addTo(mapRef.current)
          .bindPopup(
            `<b>${stadium.name}</b><br>${stadium.address}<br><a href="#" class="stadium-link" data-id="${stadium.id}">詳細を見る</a>`
          );

        marker.on("click", () => {
          setSelectedStadium(stadium);
        });

        return marker;
      });

      // 表示範囲を調整
      if (filteredStadiums.length > 0) {
        // フィルタリングされたスタジアムの数に応じて処理を分ける
        if (filteredStadiums.length === 1) {
          // スタジアムが1つの場合は、そのスタジアムにズームする
          const stadium = filteredStadiums[0];
          mapRef.current.setView(
            [stadium.location.lat, stadium.location.lng],
            12
          );
        } else if (filteredStadiums.length > 1) {
          // スタジアムが複数ある場合は、すべてのスタジアムが表示されるようにバウンドを設定
          try {
            const latLngs = filteredStadiums.map((stadium) => [
              stadium.location.lat,
              stadium.location.lng,
            ]);
            const bounds = L.latLngBounds(latLngs);

            // バウンドが有効かチェック
            if (bounds.isValid()) {
              mapRef.current.fitBounds(bounds, { padding: [50, 50] });
            } else {
              // バウンドが無効な場合はデフォルトビューに戻す
              mapRef.current.setView([36.2048, 138.2529], 5);
            }
          } catch (error) {
            console.error("Error setting map bounds:", error);
            // エラーが発生した場合はデフォルトビューに戻す
            mapRef.current.setView([36.2048, 138.2529], 5);
          }
        } else {
          // スタジアムが0件の場合はデフォルトビューに戻す
          mapRef.current.setView([36.2048, 138.2529], 5);
        }
      } else {
        // スタジアムが0件の場合はデフォルトビューに戻す
        mapRef.current.setView([36.2048, 138.2529], 5);
      }
    }
  }, [activeLeague, searchQuery, mapInitialized]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
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
              <MapPin className="h-5 w-5 text-blue-400" />
              <h2 className="text-xl font-bold text-white">スタジアム</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-white font-medium mb-2">リーグ</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full text-sm flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-white">
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
            </div>

            <div className="flex-1 overflow-auto">
              <h3 className="text-white font-medium mb-3">スタジアム一覧</h3>
              <div className="space-y-2">
                {stadiumsData
                  .filter((stadium) => {
                    const matchesLeague =
                      activeLeague === "all" || stadium.league === activeLeague;
                    const matchesSearch =
                      searchQuery === "" ||
                      stadium.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
                    return matchesLeague && matchesSearch;
                  })
                  .map((stadium) => (
                    <button
                      key={stadium.id}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedStadium?.id === stadium.id
                          ? "bg-blue-500 text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                      onClick={() => {
                        setSelectedStadium(stadium);
                        if (
                          mapRef.current &&
                          typeof window !== "undefined" &&
                          window.L
                        ) {
                          mapRef.current.setView(
                            [stadium.location.lat, stadium.location.lng],
                            15
                          );
                          // マーカーを探してポップアップを開く
                          markersRef.current.forEach((marker) => {
                            const markerLatLng = marker.getLatLng();
                            if (
                              markerLatLng.lat === stadium.location.lat &&
                              markerLatLng.lng === stadium.location.lng
                            ) {
                              marker.openPopup();
                            }
                          });
                        }
                      }}
                    >
                      <div className="font-medium">{stadium.name}</div>
                      <div className="text-sm text-white/70">
                        {stadium.homeTeam}
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* Map Content */}
          <div
            className={`flex-1 flex flex-col opacity-0 ${
              isLoaded ? "animate-fade-in" : ""
            } overflow-hidden`}
            style={{ animationDelay: "0.6s" }}
          >
            {/* Content Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  スタジアム地図
                </h2>
              </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative">
              <div
                ref={mapContainerRef}
                className="absolute top-0 m-10 w-full h-[500px] z-10"
              ></div>

              {/* <MapComponent /> */}

              {selectedStadium && (
                <div className="absolute top-4 right-4 z-20 w-80 bg-black/30 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {selectedStadium.name}
                    </h3>
                    <button
                      className="text-white/70 hover:text-white"
                      onClick={() => setSelectedStadium(null)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="relative h-40 mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={selectedStadium.image || "/placeholder.svg"}
                      alt={selectedStadium.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-2 text-white">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                      <span>{selectedStadium.address}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <Info className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                      <div>
                        <div>
                          収容人数: {selectedStadium.capacity.toLocaleString()}
                          人
                        </div>
                        <div>開設年: {selectedStadium.openingYear}年</div>
                        <div>ホームチーム: {selectedStadium.homeTeam}</div>
                      </div>
                    </div>

                    {selectedStadium.nearestStation && (
                      <div className="flex items-start gap-2">
                        <Navigation className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                        <div>
                          <div>最寄り駅: {selectedStadium.nearestStation}</div>
                          {selectedStadium.accessInfo && (
                            <div>{selectedStadium.accessInfo}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {selectedStadium.phone && (
                      <div className="flex items-start gap-2">
                        <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                        <span>{selectedStadium.phone}</span>
                      </div>
                    )}

                    {selectedStadium.website && (
                      <div className="flex items-start gap-2">
                        <Globe className="h-4 w-4 mt-1 flex-shrink-0 text-blue-400" />
                        <a
                          href={selectedStadium.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:underline"
                        >
                          公式サイト
                        </a>
                      </div>
                    )}

                    <p className="text-sm text-white/80 mt-2">
                      {selectedStadium.description}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                      <Navigation className="h-4 w-4" />
                      <span>ルート検索</span>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                      試合日程を見る
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
