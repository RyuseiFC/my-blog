import { useState, useRef } from "react";
import { getEndOfWeek, getStartOfWeek } from "@/lib/utils";

export type CalendarEvent = {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  color: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
};

export type UseCalendarReturn = ReturnType<typeof useCalendar>;

// Custom hook for handling calendar state and logic
export const useCalendar = (today: Date) => {
  const [isLoaded, setIsLoaded] = useState(true); //最初から入っていた必要そうなやつ
  const [isPlaying, setIsPlaying] = useState(false); //わからん

  const [currentMonth, setCurrentMonth] = useState<number>( //現在の月
    today.getMonth() + 1
  );
  const [currentYear, setCurrentYear] = useState<number>(today.getFullYear()); //現在の月
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate()); //選択された月
  const [selectedMonth, setSelectedMonth] = useState<number>(
    today.getMonth() + 1
  ); //選択された月
  const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear()); //選択された年

  const [calendarDays, setCalendarDays] = useState<(number | null)[]>([]); //ミニカレンダーで使うやつ
  const [weekDates, setWeekDates] = useState<(number | null)[]>([]); //1週間の日にち

  const [currentView, setCurrentView] = useState<"week" | "day">("week"); //daysとweek表示の切り替え（現状未使用）

  const [currentDate, setCurrentDate] = useState<number>(today.getMonth() + 1); //現在の月
  const [currentDate2, setCurrentDate2] = useState<number | null>(
    today.getMonth()
  ); //次の月

  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  ); //イベントを選択した時

  const [currentYear2, setCurrentYear2] = useState<number>(today.getFullYear()); //来年

  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(
    getStartOfWeek(new Date())
  ); //
  const [currentWeekEnd, setCurrentWeekEnd] = useState<Date>(
    getEndOfWeek(new Date())
  );

  const timeSlotRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<string>("");

  return {
    currentWeekStart,
    setCurrentWeekStart,
    currentWeekEnd,
    setCurrentWeekEnd,
    isLoaded,
    setIsLoaded,
    isPlaying,
    setIsPlaying,
    currentMonth,
    setCalendarDays,
    setWeekDates,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    selectedDay,
    setSelectedDay,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    calendarDays,
    currentView,
    setCurrentView,
    currentDate,
    setCurrentDate,
    currentDate2,
    setCurrentDate2,
    selectedEvent,
    setSelectedEvent,
    weekDates,
    currentYear2,
    setCurrentYear2,
    timeSlotRef,
    containerRef,
  };
};
