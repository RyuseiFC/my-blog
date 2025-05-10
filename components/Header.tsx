"use client";
import Link from "next/link";
import React from "react";
import MainNav from "@/components/main-nav";

const Header = () => {
  const isLoaded = true;
  return (
    <header
      className={`absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6 opacity-0 ${
        isLoaded ? "animate-fade-in" : ""
      }`}
      style={{ animationDelay: "0.2s" }}
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl font-semibold text-white drop-shadow-lg">
          山雅の追っかけ
        </span>
        <span className="hidden md:block text-sm font-semibold text-white drop-shadow-lg">
          個人開発のアウトプットとして運営しているサイト（非公式）
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative"></div>
        <Link className="text-white " href="/">
          ホームへ
        </Link>
      </div>
      <MainNav />
    </header>
  );
};

export default Header;
