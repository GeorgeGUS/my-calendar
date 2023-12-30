import {
  getDaysInYear,
  getDay,
  getDate,
  getMonth,
  formatISO,
  intlFormat,
} from "date-fns";
import holidays from "../assets/holidays2024.json";

interface CalendarData {
  year: number;
  months: Month[];
}

interface Month {
  monthName: string;
  days: Day[];
}

export interface Day {
  dayOfMonth: number;
  dayOfWeek: number;
  isWeekend: boolean;
  isHoliday: boolean;
  isPreHoliday: boolean;
}

export const getCalendarData = (year: number): CalendarData => {
  const daysInYear = getDaysInYear(new Date(year, 0, 1));
  const daysByMonth: Record<string, any> = {};

  for (let day = 1; day <= daysInYear; day++) {
    const date = new Date(year, 0, day);
    const formattedDate = formatISO(date, { representation: "date" });
    const month = getMonth(date);
    const dayOfWeek = getDay(new Date(year, 0, day - 1));
    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
    const isHoliday = holidays.holidays.includes(formattedDate);
    const isPreHoliday = holidays.preholidays.includes(formattedDate);

    const dayData: Day = {
      dayOfMonth: getDate(date),
      dayOfWeek,
      isWeekend,
      isHoliday,
      isPreHoliday,
    };

    if (!daysByMonth[month]) {
      const monthData: Month = {
        monthName: intlFormat(date, { month: "long" }, { locale: "ru-RU" }),
        days: [dayData],
      };
      daysByMonth[month] = monthData;
    } else {
      daysByMonth[month].days.push(dayData);
    }
  }

  return {
    year,
    months: Object.values(daysByMonth),
  };
};
