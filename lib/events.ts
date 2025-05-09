const events = [
  {
    id: 1,
    title: "アスルクラロ沼津 vs 松本山雅ＦＣ",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-02-23",
    endDate: "2025-02-23",
    description: "2025明治安田J3リーグ 第2節",
    location: "愛鷹広域公園多目的競技場",
  },
  {
    id: 2,
    title: "奈良クラブ vs 松本山雅ＦＣ",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-03-01",
    endDate: "2025-03-01",
    description: "2025明治安田J3リーグ 第3節",
    location: "ロートフィールド奈良",
  },
  {
    id: 3,
    title: "テゲバジャーロ宮崎 vs 松本山雅ＦＣ",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-03-09",
    endDate: "2025-03-09",
    description: "2025明治安田J3リーグ 第4節",
    location: "いちご宮崎新富サッカー場",
  },
  {
    id: 4,
    title: "松本山雅ＦＣ vs ＳＣ相模原",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-03-23",
    endDate: "2025-03-23",
    description: "2025明治安田J3リーグ 第6節",
    location: "サンプロ　アルウィン",
  },
  {
    id: 5,
    title: "松本山雅ＦＣ vs サガン鳥栖",
    startTime: "19:00",
    endTime: "21:00",
    color: "bg-green-500/60",
    startDate: "2025-03-26",
    endDate: "2025-03-26",
    description: "2025JリーグYBCルヴァンカップ 1stラウンド 第1節",
    location: "サンプロ　アルウィン",
  },
  {
    id: 6,
    title: "ＦＣ岐阜 vs 松本山雅ＦＣ",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-03-29",
    endDate: "2025-03-29",
    description: "2025明治安田J3リーグ 第7節",
    location: "岐阜メモリアルセンター長良川競技場",
  },
  {
    id: 7,
    title: "松本山雅ＦＣ vs 高知ユナイテッドＳＣ",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-04-05",
    endDate: "2025-04-05",
    description: "2025明治安田J3リーグ 第8節",
    location: "サンプロ　アルウィン",
  },
  {
    id: 8,
    title: "松本山雅ＦＣ vs アルビレックス新潟",
    startTime: "19:00",
    endTime: "21:00",
    color: "bg-green-500/60",
    startDate: "2025-04-09",
    endDate: "2025-04-09",
    description: "2025JリーグYBCルヴァンカップ 1stラウンド 第2節",
    location: "サンプロ　アルウィン",
  },
  {
    id: 9,
    title: "カマタマーレ讃岐 vs 松本山雅ＦＣ",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-04-13",
    endDate: "2025-04-13",
    description: "2025明治安田J3リーグ 第9節",
    location: "Ｐｉｋａｒａスタジアム",
  },
  {
    id: 10,
    title: "松本山雅ＦＣ vs 栃木シティ",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-04-20",
    endDate: "2025-04-20",
    description: "2025明治安田J3リーグ 第10節",
    location: "サンプロ　アルウィン",
  },
  {
    id: 11,
    title: "ギラヴァンツ北九州 vs 松本山雅ＦＣ",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-04-26",
    endDate: "2025-04-26",
    description: "2025明治安田J3リーグ 第1節",
    location: "ミクニワールドスタジアム北九州",
  },
  {
    id: 12,
    title: "松本山雅ＦＣ vs ツエーゲン金沢",
    startTime: "15:00",
    endTime: "17:00",
    color: "bg-green-500/60",
    startDate: "2025-05-03",
    endDate: "2025-05-03",
    description: "2025明治安田J3リーグ 第11節",
    location: "サンプロ　アルウィン",
  },
  {
    id: 13,
    title: "ＦＣ大阪 vs 松本山雅ＦＣ",
    startTime: "19:00",
    endTime: "21:00",
    color: "bg-green-500/60",
    startDate: "2025-05-07",
    endDate: "2025-05-07",
    description: "2025明治安田J3リーグ 第12節",
    location: "東大阪市花園ラグビー場",
  },
  {
    id: 14,
    title: "松本山雅ＦＣ vs ＡＣ長野パルセイロ",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-green-500/60",
    startDate: "2025-05-11",
    endDate: "2025-05-11",
    description: "第30回長野県サッカー選手権大会 決勝戦",
    location: "サンプロ　アルウィン",
  },
  {
    id: 15,
    title: "松本山雅FC vs ＡＣ長野パルセイロ",
    startTime: "19:00",
    endTime: "21:00",
    color: "bg-green-500/60",
    startDate: "2025-05-14",
    endDate: "2025-05-14",
    description: "2025明治安田J3リーグ 第5節",
    location: "サンプロ　アルウィン",
  },
  {
    id: 16,
    title: "松本山雅FC U-18vs星稜",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-blue-500/60",
    startDate: "2025-04-26",
    endDate: "2025-04-26",
    description: "プリンスリーグ北信越第4節",
    location: "かりがね",
    attendees: ["John Doe", "Jane Smith", "Bob Johnson"],
    organizer: "Alice Brown",
  },
  {
    id: 17,
    title: "松本山雅FC U-18 2ndvs都市大塩尻 2nd",
    startTime: "9:30",
    endTime: "11:30",
    color: "bg-blue-500/60",
    startDate: "2025-07-01",
    endDate: "2025-07-01",
    description: "長野県リーグ2部B",
    location: "かしわフィールド（都市大塩尻G）",
    attendees: ["Sarah Lee"],
    organizer: "You",
  },
  {
    id: 18,
    title: "松本山雅FC U-15vsF.THREE",
    startTime: "14:20",
    endTime: "15:50",
    color: "bg-purple-500/60",
    startDate: "2025-04-26",
    endDate: "2025-04-26",
    description: "北信越リーグU15",
    location: "サンコーグリーンフィールド",
    attendees: ["Team Alpha", "Stakeholders"],
    organizer: "Project Manager",
  },
  {
    id: 19,
    title: "松本山雅FC U-18vsパルセイロU-18",
    startTime: "13:00",
    endTime: "15:00",
    color: "bg-blue-500/60",
    startDate: "2025-05-05",
    endDate: "2025-05-05",
    description: "Jユースカップ",
    location: "サンコー",
    attendees: ["John Doe", "Jane Smith", "Bob Johnson"],
    organizer: "Alice Brown",
  },
  {
    id: 20,
    title: "松本山雅FC U-18 2ndvs松本第一 2nd",
    startTime: "13:30",
    endTime: "15:30",
    color: "bg-blue-500/60",
    startDate: "2025-04-05",
    endDate: "2025-04-05",
    description: "長野県リーグ2部B 3○2",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 21,
    title: "松本山雅FC U-18 2ndvs長野吉田",
    startTime: "15:30",
    endTime: "17:30",
    color: "bg-blue-500/60",
    startDate: "2025-04-12",
    endDate: "2025-04-12",
    description: "長野県リーグ2部B 1△1",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 22,
    title: "松本山雅FC U-18 2ndvs伊那北",
    startTime: "13:20",
    endTime: "15:20",
    color: "bg-blue-500/60",
    startDate: "2025-04-19",
    endDate: "2025-04-19",
    description: "長野県リーグ2部B 9〇0",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 23,
    title: "松本山雅FC U-18 2ndvs赤穂",
    startTime: "11:30",
    endTime: "13:30",
    color: "bg-blue-500/60",
    startDate: "2025-04-26",
    endDate: "2025-04-26",
    description: "長野県リーグ2部B 4〇0",
    location: "松本国際高総合グランド",
  },
  {
    id: 24,
    title: "松本山雅FC U-18 2ndvs長野日大 2nd",
    startTime: "13:20",
    endTime: "15:20",
    color: "bg-blue-500/60",
    startDate: "2025-05-03",
    endDate: "2025-05-03",
    description: "長野県リーグ2部2nd 6〇0",
    location: "松本平広域公園球技場",
  },
  {
    id: 26,
    title: "松本山雅FC U-18 2ndvs上田西高 2nd",
    startTime: "12:45",
    endTime: "14:45",
    color: "bg-blue-500/60",
    startDate: "2025-05-10",
    endDate: "2025-05-10",
    description: "長野県リーグ2部 2nd",
    location: "女神湖サッカー場A",
  },
  {
    id: 27,
    title: "松本山雅FC U-18 2ndvs都市大塩尻高 2nd",
    startTime: "11:30",
    endTime: "13:30",
    color: "bg-blue-500/60",
    startDate: "2025-05-24",
    endDate: "2025-05-24",
    description: "長野県リーグ2部B",
    location: "松本国際高総合グランド",
  },
  {
    id: 28,
    title: "松本山雅FC U-18Bvs松本第一 2nd",
    startTime: "11:20",
    endTime: "13:20",
    color: "bg-blue-500/60",
    startDate: "2025-06-14",
    endDate: "2025-06-14",
    description: "長野県リーグ2部B",
    location: "筑北村サッカー場",
  },
  {
    id: 29,
    title: "松本山雅FC U-18 2ndvs長野吉田",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-06-28",
    endDate: "2025-06-28",
    description: "長野県リーグ2部B",
    location: "千曲川リバーフロントB面",
  },
  {
    id: 30,
    title: "松本山雅FC U-18 2ndvs伊那北",
    startTime: "11:15",
    endTime: "13:15",
    color: "bg-blue-500/60",
    startDate: "2025-07-05",
    endDate: "2025-07-05",
    description: "長野県リーグ2部B",
    location: "筑北村サッカー場",
  },
  {
    id: 31,
    title: "松本山雅FC U-18 2ndvs赤穂",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-07-12",
    endDate: "2025-07-12",
    description: "長野県リーグ2部B",
    location: "女神湖サッカー場A",
  },
  {
    id: 32,
    title: "松本山雅FC U-18 2ndvs長野日大 2nd",
    startTime: "13:50",
    endTime: "15:50",
    color: "bg-blue-500/60",
    startDate: "2025-09-13",
    endDate: "2025-09-13",
    description: "長野県リーグ2部B",
    location: "長野日大高グランド",
  },
  {
    id: 33,
    title: "松本山雅FC U-18 2ndvs上田西 2nd",
    startTime: "13:20",
    endTime: "15:20",
    color: "bg-blue-500/60",
    startDate: "2025-09-20",
    endDate: "2025-09-20",
    description: "長野県リーグ2部B",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 34,
    title: "松本山雅FC U-18 2ndvs都市大塩尻 2nd",
    startTime: "10:00",
    endTime: "12:00",
    color: "bg-blue-500/60",
    startDate: "2025-09-27",
    endDate: "2025-09-27",
    description: "長野県リーグ2部B",
    location: "サンコーグリーンフィールド",
  },
  {
    id: 34,
    title: "新潟明訓 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-04-06",
    endDate: "2025-04-06",
    description: "U18プリンスリーグ北信越第1節",
    location: "新潟明訓高グランド",
  },
  {
    id: 35,
    title: "カターレ富山U-18 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-04-12",
    endDate: "2025-04-12",
    description: "U18プリンスリーグ北信越第2節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 36,
    title: "鵬学園 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-04-19",
    endDate: "2025-04-19",
    description: "U18プリンスリーグ北信越第3節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 37,
    title: "星稜 vs 松本山雅FC U-18",
    startTime: "14:00",
    endTime: "16:00",
    color: "bg-blue-500/60",
    startDate: "2025-04-26",
    endDate: "2025-04-26",
    description: "U18プリンスリーグ北信越第4節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 38,
    title: "日本文理 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-04-29",
    endDate: "2025-04-29",
    description: "U18プリンスリーグ北信越第5節",
    location: "日本文理高グランド",
  },
  {
    id: 39,
    title: "松本国際 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-05-03",
    endDate: "2025-05-03",
    description: "U18プリンスリーグ北信越第6節",
    location: "松本平広域公園球技場",
  },
  {
    id: 40,
    title: "帝京長岡 2nd vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-05-10",
    endDate: "2025-05-10",
    description: "U18プリンスリーグ北信越第7節",
    location: "帝京長岡高グラウンド",
  },
  {
    id: 41,
    title: "アルビレックス新潟U-18 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-05-17",
    endDate: "2025-05-17",
    description: "U18プリンスリーグ北信越第8節",
    location: "サンプロ アルウィン",
  },
  {
    id: 42,
    title: "ツエーゲン金沢U-18 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-06-15",
    endDate: "2025-06-15",
    description: "U18プリンスリーグ北信越第9節",
    location: "金沢大学SOLTILO FIELD B",
  },
  {
    id: 43,
    title: "新潟明訓高 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-06-28",
    endDate: "2025-06-28",
    description: "U18プリンスリーグ北信越第10節",
    location: "サンプロ アルウィン",
  },
  {
    id: 44,
    title: "カターレ富山U-18 vs 松本山雅FC U-18",
    startTime: "16:00",
    endTime: "18:00",
    color: "bg-blue-500/60",
    startDate: "2025-07-05",
    endDate: "2025-07-05",
    description: "U18プリンスリーグ北信越第11節",
    location: "永森記念グランド",
  },
  {
    id: 45,
    title: "鵬学園 vs 松本山雅FC U-18",
    startTime: "09:00",
    endTime: "11:00",
    color: "bg-blue-500/60",
    startDate: "2025-07-12",
    endDate: "2025-07-12",
    description: "U18プリンスリーグ北信越第12節",
    location: "金沢市スポーツ交流広場",
  },
  {
    id: 46,
    title: "星稜 vs 松本山雅FC U-18",
    startTime: "16:00",
    endTime: "18:00",
    color: "bg-blue-500/60",
    startDate: "2025-09-06",
    endDate: "2025-09-06",
    description: "U18プリンスリーグ北信越第13節",
    location: "星稜高グラウンド",
  },
  {
    id: 47,
    title: "日本文理 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-09-20",
    endDate: "2025-09-20",
    description: "U18プリンスリーグ北信越第14節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 48,
    title: "松本国際 vs 松本山雅FCU-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-09-27",
    endDate: "2025-09-27",
    description: "U18プリンスリーグ北信越第15節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 49,
    title: "帝京長岡 2nd vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-10-04",
    endDate: "2025-10-04",
    description: "U18プリンスリーグ北信越第16節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 50,
    title: "アルビレックス新潟U-18 vs 松本山雅FC U-18",
    startTime: "10:30",
    endTime: "12:30",
    color: "bg-blue-500/60",
    startDate: "2025-11-15",
    endDate: "2025-11-15",
    description: "U18プリンスリーグ北信越第17節",
    location: "新潟聖籠スポーツセンター",
  },
  {
    id: 51,
    title: "ツエーゲン金沢U-18 vs 松本山雅FC U-18",
    startTime: "11:00",
    endTime: "13:00",
    color: "bg-blue-500/60",
    startDate: "2025-11-22",
    endDate: "2025-11-22",
    description: "U18プリンスリーグ北信越第18節",
    location: "アルウィン芝生グラウンド",
  },
  {
    id: 53,
    title: "カターレ富山U-18 vs 松本山雅FC U-18",
    startTime: "14:30",
    endTime: "16:30",
    color: "bg-blue-500/60",
    startDate: "2025-06-21",
    endDate: "2025-06-21",
    description: "2025Ｊユースカップ 第31回Ｊリーグユース選手権大会 第2節",
    location: "筑北村サッカー場",
  },
  {
    id: 54,
    title: "松本山雅FC U-15 vs SQUARE富山",
    startTime: "12:20",
    endTime: "13:50",
    color: "bg-purple-500/60",
    startDate: "2025-03-16",
    endDate: "2025-03-16",
    description: "高円宮杯U-15北信越リーグ 第1節",
    location: "北陸建工グループアスリートフィール(シーFIELD)",
  },
  {
    id: 55,
    title: "松本山雅FC U-15 vs グランセナ新潟",
    startTime: "14:50",
    endTime: "16:20",
    color: "bg-purple-500/60",
    startDate: "2025-03-20",
    endDate: "2025-03-20",
    description: "高円宮杯U-15北信越リーグ 第2節",
    location: "アルビレッジEピッチ",
  },
  {
    id: 56,
    title: "松本山雅FC U-15 vs 坂井ph丸岡JY",
    startTime: "12:50",
    endTime: "14:20",
    color: "bg-purple-500/60",
    startDate: "2025-03-23",
    endDate: "2025-03-23",
    description: "高円宮杯U-15北信越リーグ 第3節",
    location: "筑北村サッカー場",
  },
  {
    id: 57,
    title: "松本山雅FC U-15 vs AC長野パルセイロ",
    startTime: "13:00",
    endTime: "14:30",
    color: "bg-purple-500/60",
    startDate: "2025-04-05",
    endDate: "2025-04-05",
    description: "高円宮杯U-15北信越リーグ 第4節",
    location: "松本市サッカー場",
  },
  {
    id: 58,
    title: "松本山雅FC U-15 vs F.C.CEDAC",
    startTime: "16:10",
    endTime: "17:40",
    color: "bg-purple-500/60",
    startDate: "2025-04-12",
    endDate: "2025-04-12",
    description: "高円宮杯U-15北信越リーグ 第5節",
    location: "あがた運動公園",
  },
  {
    id: 59,
    title: "松本山雅FC U-15 vs F.THREE",
    startTime: "14:20",
    endTime: "15:50",
    color: "bg-purple-500/60",
    startDate: "2025-04-26",
    endDate: "2025-04-26",
    description: "高円宮杯U-15北信越リーグ 第6節",
    location: "サンコーグリーンフィールド",
  },
  {
    id: 60,
    title: "松本山雅FC U-15 vs アルビレックス新潟 U-15",
    startTime: "13:10",
    endTime: "14:40",
    color: "bg-purple-500/60",
    startDate: "2025-04-29",
    endDate: "2025-04-29",
    description: "高円宮杯U-15北信越リーグ 第7節",
    location: "アルビレッジEピッチ",
  },
  {
    id: 61,
    title: "松本山雅FC U-15 vs 長岡JYFC",
    startTime: "12:50",
    endTime: "14:20",
    color: "bg-purple-500/60",
    startDate: "2025-05-03",
    endDate: "2025-05-03",
    description: "高円宮杯U-15北信越リーグ 第8節",
    location: "長岡ニュータウン",
  },
  {
    id: 62,
    title: "松本山雅FC U-15 vs PateoFC金沢",
    startTime: "14:00",
    endTime: "15:30",
    color: "bg-purple-500/60",
    startDate: "2025-05-10",
    endDate: "2025-05-10",
    description: "高円宮杯U-15北信越リーグ 第9節",
    location: "筑北村サッカー場",
  },
  {
    id: 63,
    title: "松本山雅FC U-15 vs ツエーゲン金沢",
    startTime: "11:20",
    endTime: "12:50",
    color: "bg-purple-500/60",
    startDate: "2025-05-18",
    endDate: "2025-05-18",
    description: "高円宮杯U-15北信越リーグ 第10節",
    location: "松本市サッカー場",
  },
  {
    id: 64,
    title: "松本山雅FC U-15 vs カターレ富山",
    startTime: "12:40",
    endTime: "14:10",
    color: "bg-purple-500/60",
    startDate: "2025-05-31",
    endDate: "2025-05-31",
    description: "高円宮杯U-15北信越リーグ 第11節",
    location: "北陸建工アスリートフィールド(マウンテンFIELD)",
  },
  {
    id: 65,
    title: "松本山雅FC U-15 vs SQUARE富山",
    startTime: "13:40",
    endTime: "15:10",
    color: "bg-purple-500/60",
    startDate: "2025-06-07",
    endDate: "2025-06-07",
    description: "高円宮杯U-15北信越リーグ 第12節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 66,
    title: "松本山雅FC U-15 vs グランセナ新潟",
    startTime: "17:00",
    endTime: "18:30",
    color: "bg-purple-500/60",
    startDate: "2025-06-14",
    endDate: "2025-06-14",
    description: "高円宮杯U-15北信越リーグ 第13節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 67,
    title: "松本山雅FC U-15 vs 坂井ph丸岡JY",
    startTime: "19:00",
    endTime: "20:30",
    color: "bg-purple-500/60",
    startDate: "2025-07-12",
    endDate: "2025-07-12",
    description: "高円宮杯U-15北信越リーグ 第14節",
    location: "三国運動公園･人工芝",
  },
  {
    id: 68,
    title: "松本山雅FC U-15 vs AC長野パルセイロ",
    startTime: "19:00",
    endTime: "20:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-07",
    endDate: "2025-09-07",
    description: "高円宮杯U-15北信越リーグ 第15節",
    location: "松本市サッカー場",
  },
  {
    id: 69,
    title: "松本山雅FC U-15 vs F.C.CEDAC",
    startTime: "19:00",
    endTime: "20:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-14",
    endDate: "2025-09-14",
    description: "高円宮杯U-15北信越リーグ 第16節",
    location: "松本市サッカー場",
  },
  {
    id: 70,
    title: "松本山雅FC U-15 vs F.THREE",
    startTime: "18:00",
    endTime: "19:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-20",
    endDate: "2025-09-20",
    description: "高円宮杯U-15北信越リーグ 第17節",
    location: "グランセナ新潟スタジアム-Bピッチ",
  },
  {
    id: 71,
    title: "松本山雅FC U-15 vs アルビレックス新潟",
    startTime: "19:00",
    endTime: "20:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-23",
    endDate: "2025-09-23",
    description: "高円宮杯U-15北信越リーグ 第18節",
    location: "松本市サッカー場",
  },
  {
    id: 72,
    title: "松本山雅FC U-15 vs 長岡JYFC",
    startTime: "11:00",
    endTime: "12:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-27",
    endDate: "2025-09-27",
    description: "高円宮杯U-15北信越リーグ 第19節",
    location: "松本市サッカー場",
  },

  {
    id: 73,
    title: "PateoFC金沢 vs 松本山雅FC U-15",
    startTime: "13:10",
    endTime: "14:40",
    color: "bg-purple-500/60",
    startDate: "2025-10-05",
    endDate: "2025-10-05",
    description: "高円宮杯U-15北信越リーグ 第20節",
    location: "金沢市営球技場",
  },
  {
    id: 74,
    title: "ツエーゲン金沢 vs 松本山雅FC U-15",
    startTime: "13:40",
    endTime: "15:10",
    color: "bg-purple-500/60",
    startDate: "2025-10-11",
    endDate: "2025-10-11",
    description: "高円宮杯U-15北信越リーグ 第21節",
    location: "金沢市スポーツ交流広場",
  },
  {
    id: 75,
    title: "カターレ富山 vs 松本山雅FC U-15",
    startTime: "12:00",
    endTime: "13:30",
    color: "bg-purple-500/60",
    startDate: "2025-10-19",
    endDate: "2025-10-19",
    description: "高円宮杯U-15北信越リーグ 第22節",
    location: "アルビレッジ天然芝・D・Eピッチ",
  },
  {
    id: 99,
    title: "松本山雅FC U-14 vs AC長野パルセイロ U-14",
    startTime: "17:00",
    endTime: "18:30",
    color: "bg-purple-500/60",
    startDate: "2024-04-27",
    endDate: "2024-04-27",
    description: "2024Ｊリーグ Ｕ-14ポラリスリーグ 第1節",
    location: "筑北村サッカー場",
  },
  {
    id: 98,
    title: "松本山雅FC U-14 vs アルビレックス新潟 U-14",
    startTime: "15:30",
    endTime: "17:00",
    color: "bg-purple-500/60",
    startDate: "2024-05-11",
    endDate: "2024-05-11",
    description: "2024Ｊリーグ Ｕ-14ポラリスリーグ 第2節",
    location: "筑北村サッカー場",
  },
  {
    id: 1,
    title: "C.F.BARRO vs 松本山雅FC U-15B",
    startTime: "12:00",
    endTime: "13:30",
    color: "bg-purple-500/60",
    startDate: "2025-03-15",
    endDate: "2025-03-15",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第1節",
    location: "筑北村サッカー場",
  },
  {
    id: 2,
    title: "アザリー飯田 vs 松本山雅FC U-15B",
    startTime: "12:30",
    endTime: "14:00",
    color: "bg-purple-500/60",
    startDate: "2025-03-20",
    endDate: "2025-03-20",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第2節",
    location: "山吹ほたるパーク",
  },
  {
    id: 3,
    title: "フォルツァ松本 vs 松本山雅FC U-15B",
    startTime: "15:00",
    endTime: "16:30",
    color: "bg-purple-500/60",
    startDate: "2025-04-06",
    endDate: "2025-04-06",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第3節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 4,
    title: "アルティスタ浅間 vs 松本山雅FC U-15B",
    startTime: "10:00",
    endTime: "11:30",
    color: "bg-purple-500/60",
    startDate: "2025-04-12",
    endDate: "2025-04-12",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第4節",
    location: "筑北村サッカー場",
  },
  {
    id: 5,
    title: "FC ASA FUTURO vs 松本山雅FC U-15B",
    startTime: "12:00",
    endTime: "13:30",
    color: "bg-purple-500/60",
    startDate: "2025-04-29",
    endDate: "2025-04-29",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第5節",
    location: "あがた運動公園",
  },
  {
    id: 6,
    title: "松本山雅FC U-15B vs 松本山雅FC U-15上伊那",
    startTime: "12:00",
    endTime: "13:30",
    color: "bg-purple-500/60",
    startDate: "2025-05-03",
    endDate: "2025-05-03",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第6節",
    location: "リバーフロントA",
  },
  {
    id: 7,
    title: "Laule FC vs 松本山雅FC U-15B",
    startTime: "12:00",
    endTime: "13:30",
    color: "bg-purple-500/60",
    startDate: "2025-05-06",
    endDate: "2025-05-06",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第7節",
    location: "サンコーグリーンフィールド",
  },
  {
    id: 8,
    title: "LIGARE上田 vs 松本山雅FC U-15B",
    startTime: "10:00",
    endTime: "11:30",
    color: "bg-purple-500/60",
    startDate: "2025-05-10",
    endDate: "2025-05-10",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第8節",
    location: "臼田",
  },
  {
    id: 9,
    title: "アンテロープ塩尻 vs 松本山雅FC U-15B",
    startTime: "11:30",
    endTime: "13:00",
    color: "bg-purple-500/60",
    startDate: "2025-06-07",
    endDate: "2025-06-07",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第9節",
    location: "サンコーグリーンフィールド",
  },
  {
    id: 10,
    title: "C.F.BARRO vs 松本山雅FC U-15B",
    startTime: "12:00",
    endTime: "13:30",
    color: "bg-purple-500/60",
    startDate: "2025-06-15",
    endDate: "2025-06-15",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第10節",
    location: "サンコーグリーンフィールド",
  },
  {
    id: 11,
    title: "アザリー飯田 vs 松本山雅FC U-15B",
    startTime: "19:00",
    endTime: "20:30",
    color: "bg-purple-500/60",
    startDate: "2025-07-20",
    endDate: "2025-07-20",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第11節",
    location: "山吹ほたるパーク",
  },
  {
    id: 12,
    title: "フォルツァ松本 vs 松本山雅FC U-15B",
    startTime: "11:00",
    endTime: "12:30",
    color: "bg-purple-500/60",
    startDate: "2025-08-31",
    endDate: "2025-08-31",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第12節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 13,
    title: "アルティスタ浅間 vs 松本山雅FC U-15B",
    startTime: "11:00",
    endTime: "12:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-13",
    endDate: "2025-09-13",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第13節",
    location: "臼田総合グラウンド",
  },
  {
    id: 14,
    title: "FC ASA FUTURO vs 松本山雅FC U-15B",
    startTime: "9:00",
    endTime: "10:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-20",
    endDate: "2025-09-20",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第14節",
    location: "あがた運動公園",
  },
  {
    id: 15,
    title: "松本山雅FC U-15上伊那 vs 松本山雅FC U-15B",
    startTime: "12:00",
    endTime: "13:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-23",
    endDate: "2025-09-23",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第15節",
    location: "旭町中学校",
  },
  {
    id: 16,
    title: "Laule FC vs 松本山雅FC U-15B",
    startTime: "13:00",
    endTime: "14:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-28",
    endDate: "2025-09-28",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第16節",
    location: "未定",
  },
  {
    id: 17,
    title: "LIGARE上田 vs 松本山雅FC U-15B",
    startTime: "12:00",
    endTime: "13:30",
    color: "bg-purple-500/60",
    startDate: "2025-10-04",
    endDate: "2025-10-04",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第17節",
    location: "サンコーグリーンフィールド",
  },
  {
    id: 18,
    title: "アンテロープ塩尻 vs 松本山雅FC U-15B",
    startTime: "11:00",
    endTime: "12:30",
    color: "bg-purple-500/60",
    startDate: "2025-10-18",
    endDate: "2025-10-18",
    description:
      "高円宮杯 JFA･U-15サッカーリーグ2025 長野県トップ 1部リーグ 第18節",
    location: "山吹ほたるパーク",
  },

  {
    id: 1,
    title: "松本山雅FC U-14 vs AC長野パルセイロ",
    startTime: "17:00",
    endTime: "18:30",
    color: "bg-purple-500/60",
    startDate: "2025-04-27",
    endDate: "2025-04-27",
    description: "2025Ｊリーグ Ｕ-14ポラリスリーグ 第1節",
    location: "筑北村サッカー場",
  },
  {
    id: 2,
    title: "松本山雅FC U-14 vs アルビレックス新潟",
    startTime: "15:30",
    endTime: "17:00",
    color: "bg-purple-500/60",
    startDate: "2025-05-11",
    endDate: "2025-05-11",
    description: "2025Ｊリーグ Ｕ-14ポラリスリーグ 第2節",
    location: "筑北村サッカー場",
  },
  {
    id: 1,
    title: "松本山雅FC U-13 vs 長岡JYFC",
    startTime: "13:10",
    endTime: "14:40",
    color: "bg-purple-500/60",
    startDate: "2025-05-03",
    endDate: "2025-05-03",
    description: "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第1節",
    location: "松本市サッカー場",
  },
  {
    id: 2,
    title: "松本山雅FC U-13 vs F.C.CEDAC",
    startTime: "15:10",
    endTime: "16:40",
    color: "bg-purple-500/60",
    startDate: "2025-05-06",
    endDate: "2025-05-06",
    description: "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第2節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 3,
    title: "FC北陸 vs 松本山雅FC U-13",
    startTime: "14:40",
    endTime: "16:10",
    color: "bg-purple-500/60",
    startDate: "2025-05-11",
    endDate: "2025-05-11",
    description: "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第3節",
    location: "北陸大学FP",
  },
  {
    id: 4,
    title: "松本山雅FC U-13 vs 武生FC",
    startTime: "15:10",
    endTime: "16:40",
    color: "bg-purple-500/60",
    startDate: "2025-05-24",
    endDate: "2025-05-24",
    description: "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第4節",
    location: "松本市サッカー場",
  },
  {
    id: 5,
    title: "松本山雅FC U-13 vs ツエーゲン金沢 U-13",
    startTime: "13:10",
    endTime: "14:40",
    color: "bg-purple-500/60",
    startDate: "2025-05-31",
    endDate: "2025-05-31",
    description: "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第5節",
    location: "松本市サッカー場",
  },
  {
    id: 6,
    title: "エスポワール白山 vs 松本山雅FC U-13",
    startTime: "12:50",
    endTime: "14:20",
    color: "bg-purple-500/60",
    startDate: "2025-06-07",
    endDate: "2025-06-07",
    description: "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第6節",
    location: "北陸大学FP",
  },
  {
    id: 7,
    title: "松本山雅FC U-13 vs カターレ富山 U-13",
    startTime: "15:10",
    endTime: "16:40",
    color: "bg-purple-500/60",
    startDate: "2025-06-14",
    endDate: "2025-06-14",
    description: "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第7節",
    location: "信州グリーンフィールドかりがね",
  },
  {
    id: 8,
    title: "松本山雅FC U-13 vs PateoFC金沢",
    startTime: "11:20",
    endTime: "12:50",
    color: "bg-purple-500/60",
    startDate: "2025-06-28",
    endDate: "2025-06-28",
    description: "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第8節",
    location: "松本市サッカー場",
  },
  {
    id: 9,
    title: "アルビレックス新潟 U-13 vs 松本山雅FC U-13",
    startTime: "17:30",
    endTime: "19:00",
    color: "bg-purple-500/60",
    startDate: "2025-07-12",
    endDate: "2025-07-12",
    description: "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第9節",
    location: "アルビレッジEピッチ",
  },
  {
    id: 10,
    title: "長岡JYFC vs 松本山雅FC U-13",
    startTime: "19:10",
    endTime: "20:40",
    color: "bg-purple-500/60",
    startDate: "2025-08-30",
    endDate: "2025-08-30",
    description:
      "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第10節",
    location: "長岡ニュータウン",
  },
  {
    id: 11,
    title: "松本山雅FC U-13 vs F.C.CEDAC",
    startTime: "17:10",
    endTime: "18:40",
    color: "bg-purple-500/60",
    startDate: "2025-09-07",
    endDate: "2025-09-07",
    description:
      "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第11節",
    location: "松本市サッカー場",
  },
  {
    id: 12,
    title: "松本山雅FC U-13 vs FC北陸",
    startTime: "17:10",
    endTime: "18:40",
    color: "bg-purple-500/60",
    startDate: "2025-09-14",
    endDate: "2025-09-14",
    description:
      "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第12節",
    location: "松本市サッカー場",
  },
  {
    id: 13,
    title: "武生FC vs 松本山雅FC U-13",
    startTime: "19:00",
    endTime: "20:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-20",
    endDate: "2025-09-20",
    description:
      "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第13節",
    location: "武生特殊鋼材ドリームS",
  },
  {
    id: 14,
    title: "松本山雅FC U-13 vs アルビレックス新潟 U-13",
    startTime: "17:10",
    endTime: "18:40",
    color: "bg-purple-500/60",
    startDate: "2025-09-23",
    endDate: "2025-09-23",
    description:
      "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第14節",
    location: "松本市サッカー場",
  },
  {
    id: 15,
    title: "松本山雅FC U-13 vs カターレ富山 U-13",
    startTime: "11:00",
    endTime: "12:30",
    color: "bg-purple-500/60",
    startDate: "2025-09-28",
    endDate: "2025-09-28",
    description:
      "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第15節",
    location: "北陸建工グループアスリートフィール(シーFIELD)",
  },
  {
    id: 16,
    title: "松本山雅FC U-13 vs エスポワール白山",
    startTime: "12:50",
    endTime: "14:20",
    color: "bg-purple-500/60",
    startDate: "2025-10-05",
    endDate: "2025-10-05",
    description:
      "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第16節",
    location: "松本市サッカー場",
  },
  {
    id: 17,
    title: "ツエーゲン金沢 U-13 vs 松本山雅FC U-13",
    startTime: "13:00",
    endTime: "14:30",
    color: "bg-purple-500/60",
    startDate: "2025-10-13",
    endDate: "2025-10-13",
    description:
      "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第17節",
    location: "金沢大学SOLTILO FIELD-Aコート",
  },
  {
    id: 18,
    title: "PateoFC金沢 vs 松本山雅FC U-13",
    startTime: "13:00",
    endTime: "14:30",
    color: "bg-purple-500/60",
    startDate: "2025-10-18",
    endDate: "2025-10-18",
    description:
      "高円宮杯 JFA U-13サッカーリーグ2025 第12回北信越リーグ 第18節",
    location: "アルビレッジ（ピッチ未定）",
  },
];

export default events;
