"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Calendar, BookOpen, Trophy, Locate } from "lucide-react";
import Link from "next/link";

export default function MainNav() {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navItems = [
    {
      name: "ブログ",
      path: "/",
      icon: BookOpen,
    },
    {
      name: "スケジュール",
      path: "/schedule",
      icon: Calendar,
    },
    {
      name: "ランキング",
      path: "/ranking",
      icon: Trophy,
    },
    // {
    //   name: "試合会場",
    //   path: "/Location",
    //   icon: Locate,
    // },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname.startsWith("/blog");
    }
    return pathname.startsWith(path);
  };

  return (
    <div
      className={`absolute top-24 left-0 right-0 z-10 flex items-center justify-center gap-8 px-8 py-4 opacity-0 ${
        isLoaded ? "animate-fade-in" : ""
      }`}
      style={{ animationDelay: "0.3s" }}
    >
      <div className="bg-white/40 backdrop-blur-lg rounded-full border border-white/20 p-1 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full transition-all ${
                active
                  ? "bg-blue-500 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden md:block font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
