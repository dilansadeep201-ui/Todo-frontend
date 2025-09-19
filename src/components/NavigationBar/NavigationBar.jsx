import { useEffect, useState } from "react";
import "./NavigationBar.css";
import { getformattedDay } from "../../utils/getformattedDay";
import { calChangeDay } from "../../utils/calChangeDay";

export function NavigationBar({ gridDate, setGridDate }) {
  const today = new Date();

  // functions

  const formattedToday = getformattedDay(today);
  const formattedYesterday = calChangeDay(formattedToday, -1);
  const formattedTomorrow = calChangeDay(formattedToday, 1);

  const [currentDate, setCurrentDate] = useState(gridDate);
  useEffect(() => {
    setGridDate(currentDate);
  }, [currentDate, setGridDate]);

  return (
    <nav>
      <ul>
        <li>
          <button
            className="previous-day-button move-buttons"
            onClick={() => {
              setCurrentDate(calChangeDay(currentDate, -1));
            }}
          >
            {calChangeDay(currentDate, -1) === formattedYesterday
              ? "Yesterday"
              : `${calChangeDay(currentDate, -1).slice(5)} <<<`}
          </button>
        </li>
        <li>
          <button className="current-day-button move-buttons">
            {currentDate === formattedToday ? "Today" : currentDate}
          </button>
        </li>
        <li>
          <button
            className="nextday-button move-buttons"
            onClick={() => {
              setCurrentDate(calChangeDay(currentDate, 1));
            }}
          >
            {calChangeDay(currentDate, 1) === formattedTomorrow
              ? "Tomorrow"
              : `>>> ${calChangeDay(currentDate, 1).slice(5)}`}
          </button>
        </li>
        <li>
          <input
            type="date"
            className="date-input"
            value={currentDate}
            onChange={(event) => {
              setCurrentDate(event.target.value);
            }}
          />

          {/*<button className="choose-date-button move-buttons">Choose</button>*/}
        </li>
        <li>
          <div className="setting-container">
            <img src="/settings.svg" alt="Settings"></img>
          </div>
        </li>
      </ul>
    </nav>
  );
}
