// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lovy-tech | Smart Glasses OS",
  description:
    "Advanced e-OS system for smart glasses with real-time performance tracking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-screen w-full">
          <Image
            src="/IMG_2793.jpg"
            alt="Yamaga"
            fill
            priority
            unoptimized
            className="object-cover brightness-50"
          />

          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
