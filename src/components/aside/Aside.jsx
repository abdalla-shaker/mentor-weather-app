import { useSelector } from "react-redux";
import { useState } from "react";

import HourlyList from "./HourlyList";
import { dayFormat } from "../../utils/formatDate";

import dropDown from "../../assets/images/icon-dropdown.svg";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLoading = useSelector((state) => state.weather.isLoading);
  const weatherData = useSelector((state) => state.weather.weatherData);

  const [dayDate, setDayDate] = useState(weatherData.daily?.time[0]);

  const getDay = (dayDate) => {
    setDayDate(dayDate);
  };

  const listHandler = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <aside
      className="aside"
      aria-busy={isLoading}
      aria-labelledby="hourly-heading"
    >
      {isLoading && (
        <span className="visually-hidden" role="status">
          Loading hourly forecast...
        </span>
      )}

      <header className="aside-header">
        <h2 id="hourly-heading">Hourly forecast</h2>

        <div className="daily-time-container">
          <button
            onClick={listHandler}
            className="forecast-list-btn"
            type="button"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-disabled={isLoading}
            disabled={isLoading}
            aria-label="Select day for hourly forecast"
          >
            {isLoading && <>-</>}
            {!isLoading &&
              dayFormat(dayDate ? dayDate : weatherData.daily.time[0])}
            <img src={dropDown} alt="" aria-hidden="true" />
          </button>

          {isOpen && (
            <ul className="daily-list">
              {weatherData.daily?.time.map((day) => {
                return (
                  <li key={day} className="daily-list--item">
                    <button onClick={getDay.bind(null, day)}>
                      {dayFormat(day)}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </header>

      <HourlyList dayDate={dayDate} />
    </aside>
  );
};

export default Aside;
