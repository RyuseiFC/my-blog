"use client";
import { useState, useEffect } from "react";
import events from "@/lib/events";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";
import MiniCalendar from "@/components/MiniCalendar";
import { CalendarEvent, useCalendar } from "@/lib/hooks/useCalendar";
import {
  calculateEventStyle,
  formatTime,
  getStartOfWeek,
  myCalendars,
  scrollDisplay,
  timeSlots,
  weekDays,
} from "@/lib/utils";
import { getBlogs } from "@/lib/client";

// TimeFormat型を定義
type TimeFormat = {
  split: (separator: string) => string[];
};

// イベント型を定義
type Event = {
  id?: number;
  title?: string;
  startTime: TimeFormat;
  endTime: TimeFormat;
  color?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  location?: string;
};

export default function CalendarPage() {
  const today = new Date();
  const {
    currentWeekStart,
    setCurrentWeekStart,
    setCurrentWeekEnd,
    isLoaded,
    setIsLoaded,
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
  } = useCalendar(today);

  const [trigger, setTrigger] = useState(false);
  const [calendarYear, setCalendarYear] = useState<number>(today.getFullYear());

  useEffect(() => {
    scrollDisplay(timeSlotRef);
  }, [timeSlotRef]);

  useEffect(() => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOffset = getFirstDayOffset(currentMonth, currentYear);

    const newCalendarDays = Array.from(
      { length: daysInMonth + firstDayOffset },
      (_, i) => (i < firstDayOffset ? null : i - firstDayOffset + 1)
    );

    setCalendarDays(newCalendarDays);
  }, [currentMonth, currentYear, setCalendarDays]);

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  const getEndOfWeek = (date: Date) => {
    const startOfWeek = getStartOfWeek(date);
    const endOfWeek = new Date(startOfWeek.setDate(startOfWeek.getDate() + 6)); // 6日後が週の終了（土曜日）
    return endOfWeek;
  };

  // 次の週へ移動
  const nextWeek = () => {
    const startOfWeek = getStartOfWeek(currentWeekStart);
    const endOfWeek = getEndOfWeek(currentWeekStart);
    // 週の開始月と終了月を取得
    const startMonth = startOfWeek.getMonth() + 1; // 0-indexedなので1足す
    const endMonth = endOfWeek.getMonth() + 1;

    const nextStartOfWeek = new Date(currentWeekStart);
    nextStartOfWeek.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(getStartOfWeek(nextStartOfWeek));
    setCurrentWeekEnd(getEndOfWeek(nextStartOfWeek));

    if (endMonth === 1 && startMonth === 12) {
      setCurrentYear(currentYear);
      setCurrentYear2(currentYear2 + 1); // 12月の最終週だったら年を更新
    }
    if (endMonth === 1 && startMonth === 12) {
      setCalendarYear((prev) => prev + 1);
    }
  };

  const prevWeek = () => {
    const startOfWeek = getStartOfWeek(currentWeekStart);
    const endOfWeek = getEndOfWeek(currentWeekStart);
    // 週の開始月と終了月を取得
    const startMonth = startOfWeek.getMonth() + 1; // 0-indexedなので1足す
    const endMonth = endOfWeek.getMonth() + 1;
    const prevStartOfWeek = new Date(currentWeekStart);
    prevStartOfWeek.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(getStartOfWeek(prevStartOfWeek));
    setCurrentWeekEnd(getEndOfWeek(prevStartOfWeek));
    setTrigger(true);
    if (endMonth === 1 && startMonth === 12) {
      setCurrentYear2(currentYear2 - 1); // 12月の最終週だったら年を更新
    }
  };

  useEffect(() => {
    const startOfWeek = getStartOfWeek(currentWeekStart);
    const endOfWeek = getEndOfWeek(currentWeekStart);
    // 週の開始月と終了月を取得
    const startMonth = startOfWeek.getMonth() + 1; // 0-indexedなので1足す
    const endMonth = endOfWeek.getMonth() + 1;
    if (endMonth === 1 && startMonth === 12 && trigger === true) {
      setCalendarYear((prev) => prev - 1);
    }
    setTrigger(false);
  }, [currentDate2, currentWeekStart, trigger]);

  const handleDateSelection = (date: Date) => {
    setSelectedDay(date.getDate());
    setSelectedMonth(date.getMonth() + 1);
    setSelectedYear(date.getFullYear());
    setCurrentYear2(currentYear);
    setCurrentWeekStart(getStartOfWeek(date)); // 週ビューを更新
  };

  const nextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const [hoveredEvent, setHoveredEvent] = useState<number | undefined>();

  const goToToday = async () => {
    await getBlogs();
    scrollDisplay(timeSlotRef);
    setCurrentMonth(today.getMonth() + 1); // 1から始まる月に調整
    setCurrentYear(today.getFullYear()); // 今日の年を設定
    setCurrentYear2(today.getFullYear()); // 今日の年を設定
    setSelectedMonth(today.getMonth() + 1);
    setSelectedYear(today.getFullYear());
    setSelectedDay(today.getDate()); // 今日の日付を選択
    setCalendarYear(today.getFullYear());
    // 今日の日付を基に週の始まりと終わりを設定
    const startOfWeek = getStartOfWeek(today);
    const endOfWeek = getEndOfWeek(today);

    setCurrentWeekStart(startOfWeek);
    setCurrentWeekEnd(endOfWeek);
  };

  // 月の日数を取得（うるう年対応）
  const getDaysInMonth = (monthIndex: number, year: number) => {
    return new Date(year, monthIndex, 0).getDate();
  };

  useEffect(() => {
    const startOfWeek = getStartOfWeek(currentWeekStart);
    const endOfWeek = getEndOfWeek(currentWeekStart);

    // 週の開始月と終了月を取得
    const startMonth = startOfWeek.getMonth() + 1; // 0-indexedなので1足す
    const endMonth = endOfWeek.getMonth() + 1;

    // 月が切り替わっている場合に表示月を更新
    if (startMonth !== endMonth) {
      setCurrentDate(startMonth);
      setCurrentDate2(endMonth);
    } else {
      setCurrentDate2(null);
      setCurrentDate(startMonth);
    }

    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day.getDate();
    });

    setWeekDates(weekDays);
  }, [currentWeekStart, setCurrentDate, setCurrentDate2, setWeekDates]); // 依存配列を修正

  // 月の最初の曜日を取得
  const getFirstDayOffset = (monthIndex: number, year: number) => {
    return new Date(year, monthIndex - 1, 1).getDay();
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  // timeSlotsを12時間制に変換して格納
  const formattedTimeSlots = timeSlots.map(formatTime);

  function isOverlappingWithDate(
    eventA: { startDate: string; startTime: TimeFormat; endTime: TimeFormat },
    eventB: Event
  ) {
    // 日付が異なる場合は絶対に重複しない
    if (eventA.startDate !== eventB.startDate) return false;

    // 時間を分（number）に変換
    const toMinutes = (timeStr: TimeFormat) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      return hours * 60 + minutes;
    };

    const startA = toMinutes(eventA.startTime);
    const endA = toMinutes(eventA.endTime);
    const startB = toMinutes(eventB.startTime);
    const endB = toMinutes(eventB.endTime);

    // 時間が少しでも被るか判定
    return startA < endB && endA > startB;
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden
    "
    >
      {/* Main Content */}
      <main className="relative h-screen w-full pt-40 flex">
        {/* Sidebar */}
        <div
          className={`hidden xl:block w-64 h-full bg-white/10 backdrop-blur-lg p-4 shadow-xl border-r border-white/20 rounded-tr-3xl opacity-0 ${
            isLoaded ? "animate-fade-in" : ""
          } flex flex-col justify-between`}
          style={{ animationDelay: "0.4s" }}
        >
          <div>
            {/* Mini Calendar */}
            <MiniCalendar
              currentMonth={currentMonth}
              currentYear={currentYear}
              calendarDays={calendarDays}
              prevMonth={prevMonth}
              nextMonth={nextMonth}
              setSelectedDay={setSelectedDay}
              setSelectedMonth={setSelectedMonth}
              setSelectedYear={setSelectedYear}
              selectedDay={selectedDay}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              today={today}
              onSelectDate={handleDateSelection} // 追加
              setCalendarYear={setCalendarYear}
            />
            {/* My Calendars */}
          </div>

          {/* New position for the big plus button */}
          {/* <button className="mt-6 flex items-center justify-center gap-2 rounded-full bg-blue-500 p-4 text-white w-14 h-14 self-start">
            <Plus className="h-6 w-6" />
          </button> */}
        </div>

        {/* Calendar View */}
        <div
          className={`flex-1 flex flex-col opacity-0 ${
            isLoaded ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          {/* Calendar Controls */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-4">
              <button
                onClick={goToToday}
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                Today
              </button>
              <div className="flex">
                <button
                  onClick={prevWeek}
                  className="p-2 text-white hover:bg-white/10 rounded-l-md"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextWeek}
                  className="p-2 text-white hover:bg-white/10 rounded-r-md"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* 年月と凡例を左右に分ける部分 */}
            <div className="flex justify-between items-center w-full px-4">
              <h2 className="text-sm md:text-xl font-semibold text-white">
                <div>{calendarYear}年</div>
                <div>
                  {currentDate2 !== null
                    ? `${currentDate}月 - ${currentDate2}月`
                    : `${currentDate}月`}
                </div>
              </h2>
              <div className="space-y-2 bg-white/10 text-xs backdrop-blur-lg p-4 shadow-xl border-r border-white/20">
                {myCalendars.map((cal, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-sm ${cal.color}`}></div>
                    <span className="text-white text-sm">{cal.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-4 grid grid-cols-8 border-b border-white/20 week-header sticky bg-white/20 backdrop-blur-lg rounded-xl border shadow-xl h-90">
            <div className="bg-white/30 p-2 text-center text-white/50 text-xs"></div>
            {weekDates.map((day, i) => (
              <div key={i} className="p-2 text-center border-l border-white/20">
                <div className="text-xs text-white/70 font-medium">
                  {weekDays[i]}
                </div>
                <div
                  className={`text-lg font-medium mt-1 text-white ${
                    weekDates[i] === selectedDay &&
                    currentYear2 === selectedYear &&
                    ([1, 2, 3, 4, 5, 6].some((n) => weekDates.includes(n)) &&
                    [26, 27, 28, 29, 30, 31].some((n) =>
                      weekDates.includes(n)
                    ) &&
                    [1, 2, 3, 4, 5, 6].includes(selectedDay)
                      ? currentDate2 === selectedMonth
                      : currentDate === selectedMonth)
                      ? "bg-black rounded-full w-8 h-8 flex items-center justify-center mx-auto"
                      : ""
                  }`}
                >
                  {weekDates[i]}
                </div>
              </div>
            ))}
          </div>

          {/* Week View */}
          <div className="flex-1 overflow-auto p-4">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl h-90">
              {/* Week Header */}

              {/* Time Grid */}
              <div className="grid grid-cols-8">
                {/* Time Labels */}
                <div className="text-white/70 ">
                  {formattedTimeSlots.map((time, i) => (
                    <div
                      key={i}
                      className="h-20 border-b border-white/10 pr-2 text-right text-xs"
                      ref={time === "10 AM" ? timeSlotRef : null} // 6AMの要素にrefを設定
                    >
                      {time}
                    </div>
                  ))}
                </div>

                {/* Days Columns */}
                {weekDates.map((i, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="border-l border-white/20 relative"
                  >
                    {/* イベント表示（重複時はイベント名のみ） */}
                    {(() => {
                      if (i == null) return null;
                      const targetDate = `${String(
                        [1, 2, 3, 4, 5, 6].some((n) => weekDates.includes(n)) &&
                          [26, 27, 28, 29, 30, 31].some((n) =>
                            weekDates.includes(n)
                          ) &&
                          [1, 2, 3, 4, 5, 6].includes(i)
                          ? currentYear
                          : currentYear2
                      )}-${String(
                        [1, 2, 3, 4, 5, 6].some((n) => weekDates.includes(n)) &&
                          [26, 27, 28, 29, 30, 31].some((n) =>
                            weekDates.includes(n)
                          ) &&
                          [1, 2, 3, 4, 5, 6].includes(i)
                          ? currentDate2
                          : currentDate
                      ).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
                      const dailyEvents = events.filter(
                        (event) => event.startDate === targetDate
                      ) as Event[];

                      // 重複判定ロジック
                      const overlappingGroups: Event[][] = [];
                      dailyEvents.forEach((event) => {
                        let groupFound = false;
                        for (const group of overlappingGroups) {
                          if (
                            group.some((e) => isOverlappingWithDate(e, event))
                          ) {
                            group.push(event);
                            groupFound = true;
                            break;
                          }
                        }
                        if (!groupFound) overlappingGroups.push([event]);
                      });

                      return overlappingGroups.flatMap((group, groupIndex) =>
                        group.map((event, eventIndex) => {
                          const isOverlapping = group.length > 1;
                          const eventStyle = calculateEventStyle(
                            event.startTime as string,
                            event.endTime as string
                          );
                          const isHovered = hoveredEvent === event.id;
                          const isOtherHovered =
                            hoveredEvent !== undefined &&
                            hoveredEvent !== event.id;

                          if (!isOverlapping) {
                            eventStyle.width = "100%";
                          }
                          if (isOverlapping) {
                            if (isHovered) {
                              // hover状態の場合は全体の幅で表示
                              eventStyle.width = "calc(100% - 4px)"; // 枠などの調整で若干縮める例
                              eventStyle.left = "0";
                              eventStyle.zIndex = 20;
                            } else {
                              const columnCount = Math.min(group.length, 3); // 最大3列まで
                              const columnWidth = 98 / columnCount;
                              eventStyle.width = `${columnWidth}%`;
                              eventStyle.left = `${
                                2 + (eventIndex % columnCount) * columnWidth
                              }%`;
                              eventStyle.zIndex = 10;
                            }
                          }

                          return (
                            <div
                              key={`${groupIndex}-${eventIndex}`}
                              className={`absolute ${
                                event.color
                              } rounded-md p-1 border w-[50px] text-white text-xs shadow-md cursor-pointer transition-all duration-200 ${
                                isHovered
                                  ? "translate-y-[-2px] shadow-lg border-2 border-white scale-105"
                                  : isOtherHovered
                                  ? "opacity-30"
                                  : ""
                              }`}
                              style={eventStyle}
                              onClick={() =>
                                handleEventClick(event as CalendarEvent)
                              }
                              onMouseEnter={() => {
                                if (event.id !== undefined) {
                                  setHoveredEvent(event.id);
                                }
                              }}
                              onMouseLeave={() => setHoveredEvent(undefined)}
                            >
                              <div className="hidden md:block font-medium px-1">
                                {event.title && event.title.length > 8
                                  ? `${event.title.slice(0, 8)}…`
                                  : event.title}
                              </div>
                              <div className="hidden md:block opacity-80 text-[10px] mt-0.5 px-1 truncate">
                                {`${event.startTime} - ${event.endTime}`}
                              </div>
                            </div>
                          );
                        })
                      );
                    })()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className={`${
                selectedEvent.color?.split("/")[0]
              } p-6 rounded-lg shadow-xl max-w-md w-full mx-4`}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {selectedEvent.title}
              </h3>
              <div className="space-y-3 text-white">
                <p className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  {`${selectedEvent.startTime} - ${selectedEvent.endTime}`}
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  {selectedEvent.location}
                </p>

                <p className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  {selectedEvent.endDate}
                </p>
                <p>
                  <strong>Description:</strong> {selectedEvent.description}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
