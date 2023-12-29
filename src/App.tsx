import { getCalendarData } from "./logic/getCalendarData";
import "./App.css";

function App() {
  const calendar = getCalendarData(2024);
  return (
    <div className="year">
      <h1 className="title">Календарь на {calendar.year} год</h1>
      {calendar.months.map((month) => (
        <div className="month">
          <h2 className="title">{month.monthName}</h2>
          {month.days.map((day) => (
            <div
              className="day"
              style={{
                gridColumnStart: day.dayOfWeek + 1,
                backgroundColor: day.color,
                boxShadow: day.color ? "none" : undefined,
              }}
            >
              {day.dayOfMonth}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
