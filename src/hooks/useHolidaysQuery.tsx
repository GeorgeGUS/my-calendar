import { useQuery } from "@tanstack/react-query";
import { fetchHolidays } from "../ports/holidays/api";

export const useHolidaysQuery = (year: number) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["holidays"],
    queryFn: () => fetchHolidays(year),
  });

  if (error) {
    console.log(error);
  }

  return {
    loading: isLoading,
    holidays: data,
  };
};
