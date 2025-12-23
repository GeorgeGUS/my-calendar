import { DAYS_OF_WEEK } from "./constants";
import { getYear } from "./logic/getYear";
import { getCalendarData } from "./logic/getCalendarData";
import { getDayClassName } from "./logic/getDayClassName";
import { useHolidaysQuery } from "./hooks/useHolidaysQuery";
import "./App.css";

function App() {
  const year = getYear();
  const { holidays } = useHolidaysQuery(year);
  const calendar = getCalendarData(year, holidays);

  return (
    <div className="year">
      <h1 className="title">Календарь на {calendar.year} год</h1>
      {calendar.months.map((month) => (
        <div key={month.monthName} className="month">
          <h2 className="title">{month.monthName}</h2>
          {DAYS_OF_WEEK.map((day) => (
            <div key={day} className="dayOfWeek">{day}</div>
          ))}
          {month.days.map((day) => (
            <div key={day.dayOfMonth} className={getDayClassName(day)}>{day.dayOfMonth}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
