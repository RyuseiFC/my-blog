import { clsx, type ClassValue } from "clsx";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollDisplay = (timeSlotRef: RefObject<HTMLElement | null>) => {
  if (timeSlotRef.current) {
    timeSlotRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const myCalendars = [
  { name: "松本山雅FC(Top)", color: "bg-green-500" },
  { name: "松本山雅FC U-18", color: "bg-blue-500" },
  { name: "松本山雅FC U-15", color: "bg-purple-500" },
];

export const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export const timeSlots = Array.from({ length: 24 }, (_, i) => i); // 0時から23時まで

export const getStartOfWeek = (date: Date) => {
  const day = date.getDay();
  const diff = date.getDate() - day; // 日曜日が週の開始
  const startOfWeek = new Date(date.setDate(diff));
  return startOfWeek;
};

export const getEndOfWeek = (date: Date) => {
  const startOfWeek = getStartOfWeek(date);
  const endOfWeek = new Date(startOfWeek.setDate(startOfWeek.getDate() + 6)); // 6日後が週の終了（土曜日）
  return endOfWeek;
};

export function calculateEventStyle(
  startTime: string,
  endTime: string
): {
  top: string;
  height: string;
  width?: string;
  left?: string;
  zIndex?: number;
} {
  const start =
    Number.parseInt(startTime.split(":")[0]) +
    Number.parseInt(startTime.split(":")[1]) / 60;
  const end =
    Number.parseInt(endTime.split(":")[0]) +
    Number.parseInt(endTime.split(":")[1]) / 60;
  const top = start * 80; // 80px per hour
  const height = (end - start) * 80;
  return { top: `${top}px`, height: `${height}px` };
}

export const formatTime = (time: number) => {
  if (time === 0) return "12 AM";
  if (time === 12) return "12 PM";
  const suffix = time < 12 ? "AM" : "PM";
  const formattedHour = time % 12 === 0 ? 12 : time % 12;
  return `${formattedHour} ${suffix}`;
};
