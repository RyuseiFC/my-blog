import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MiniCalendarProps = {
  currentMonth: number;
  currentYear: number;
  calendarDays: (number | null)[];
  prevMonth: () => void;
  nextMonth: () => void;
  setSelectedDay: (day: number) => void;
  setSelectedMonth: (month: number) => void;
  setSelectedYear: (year: number) => void;
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  today: Date;
  onSelectDate: (date: Date) => void;
  setCalendarYear: (year: number) => void;
};

const MiniCalendar: React.FC<MiniCalendarProps> = ({
  currentMonth,
  currentYear,
  calendarDays,
  prevMonth,
  nextMonth,
  setSelectedDay,
  setSelectedMonth,
  setSelectedYear,
  selectedDay,
  selectedMonth,
  selectedYear,
  today,
  onSelectDate,
  setCalendarYear,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">
          {currentYear}
          <br />
          {currentMonth}
          {"月"}
        </h3>
        <div className="flex gap-1">
          <button
            onClick={prevMonth}
            className="p-1 rounded-full hover:bg-white/20"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>
          <button
            onClick={nextMonth}
            className="p-1 rounded-full hover:bg-white/20"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div key={i} className="text-xs text-white/70 font-medium py-1">
            {day}
          </div>
        ))}

        {calendarDays.map(
          (
            day:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  unknown,
                  string | React.JSXElementConstructor<unknown>
                >
              | Iterable<React.ReactNode>
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactPortal
                  | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<unknown>
                    >
                  | Iterable<React.ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined,
            i: React.Key | null | undefined
          ) => {
            const isToday =
              day === today.getDate() &&
              currentMonth === today.getMonth() + 1 &&
              currentYear === today.getFullYear();

            const isSelected = day === selectedDay;

            return (
              <div
                key={i}
                onClick={() => {
                  if (day) {
                    setSelectedDay(Number(day));
                  }
                  setSelectedMonth(currentMonth);
                  setSelectedYear(currentYear);
                  onSelectDate(
                    new Date(currentYear, currentMonth - 1, Number(day))
                  );
                  setCalendarYear(currentYear);
                }}
                className={`text-xs rounded-full w-7 h-7 flex items-center justify-center cursor-pointer 
                ${
                  isSelected &&
                  currentMonth === selectedMonth &&
                  currentYear === selectedYear
                    ? "bg-black/80 text-white"
                    : "text-white hover:bg-white/20"
                } 
                ${isToday ? "ring-2 ring-white" : ""}
                ${!day ? "invisible" : ""}`}
              >
                {day}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MiniCalendar;
