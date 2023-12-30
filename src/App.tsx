import { DAYS_OF_WEEK } from "./constants";
import { getCalendarData } from "./logic/getCalendarData";
import { getDayClassName } from "./logic/getDayClassName";
import "./App.css";

function App() {
  const calendar = getCalendarData(2024);
  return (
    <div className="year">
      <h1 className="title">Календарь на {calendar.year} год</h1>
      {calendar.months.map((month) => (
        <div className="month">
          <h2 className="title">{month.monthName}</h2>
          {DAYS_OF_WEEK.map((day) => (
            <div className="dayOfWeek">{day}</div>
          ))}
          {month.days.map((day) => (
            <div className={getDayClassName(day)}>{day.dayOfMonth}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
