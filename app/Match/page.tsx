"use client";
import dynamic from "next/dynamic";

// 通常のインポートを動的インポートに置き換え
const Match = dynamic(() => import("@/components/Match"), {
  ssr: false,
});

export default function Schedule() {
  return <Match />;
}
