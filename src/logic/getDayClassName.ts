import { Day } from "./getCalendarData";

export const getDayClassName = (day: Day): string => {
  let className = "day";
  className += " col-" + (day.dayOfWeek + 1);
  if (day.isHoliday || day.isWeekend) {
    className += " holiday";
  }
  if (day.isPreHoliday) {
    className += " preholiday";
  }
  return className;
};
