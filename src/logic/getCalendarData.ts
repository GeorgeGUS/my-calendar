import {
  getDaysInYear,
  getDay,
  getDate,
  getMonth,
  formatISO,
  intlFormat,
} from "date-fns";
import { Holidays } from "../ports/holidays/interface";

export interface CalendarData {
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

export const getCalendarData = (
  year: number,
  holidays: Holidays | undefined
): CalendarData => {
  const daysInYear = getDaysInYear(new Date(year, 0, 1));
  const daysByMonth: Record<string, Month> = {};

  for (let day = 1; day <= daysInYear; day++) {
    const date = new Date(year, 0, day);
    const formattedDate = formatISO(date, { representation: "date" });
    const month = getMonth(date);
    const dayOfWeek = getDay(new Date(year, 0, day - 1));
    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
    const isHoliday = holidays?.holidays.includes(formattedDate) || false;
    const isPreHoliday = holidays?.preholidays.includes(formattedDate) || false;

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
