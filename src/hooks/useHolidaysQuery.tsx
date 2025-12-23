import { useQuery } from "@tanstack/react-query";
import { fetchHolidays } from "../ports/holidays/api";

export const useHolidaysQuery = (year: number) => {
  const { error, data } = useQuery({
    queryKey: ["holidays"],
    queryFn: () => fetchHolidays(year),
    retry: false
  });

  if (error) {
    console.log(error);
  }

  return {
    holidays: data,
  };
};
