import { Holidays } from "./interface";

const HOLIDAYS_API_URL =
  "https://raw.githubusercontent.com/d10xa/holidays-calendar/master/json";

const getUrl = (year: number): string =>
  `${HOLIDAYS_API_URL}/consultant${year}.json`;

export const fetchHolidays = async (year: number): Promise<Holidays> => {
  return fetch(getUrl(year)).then((data) => data.json());
};
