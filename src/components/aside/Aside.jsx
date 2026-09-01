import HourlyListIsLoading from "./HourlyListIsLoading.jsx";

import { getIcon } from "../../utils/getIcon.js";
import { formatTime } from "../../utils/formatDate.js";
import dropDown from "../../assets/images/icon-dropdown.svg";
import { useSelector } from "react-redux";

const Aside = () => {
  const isLoading = useSelector((state) => state.weather.isLoading);
  const weatherData = useSelector((state) => state.weather.weatherData);

  const hourlyTemps = weatherData?.hourly?.temperature_2m || [];
  const hourlyCodes = weatherData?.hourly?.weather_code || [];
  const hourlyTimes = weatherData?.hourly?.time || [];
  const unit = weatherData?.hourly_units?.temperature_2m || "°C";

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

        <button
          className="forecast-list-btn"
          type="button"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-disabled={isLoading}
          disabled={isLoading}
          aria-label="Select day for hourly forecast"
        >
          -
          <img src={dropDown} alt="" aria-hidden="true" />
        </button>
      </header>

      <ul className="hourly-list" aria-live={isLoading ? undefined : "polite"}>
        {isLoading && <HourlyListIsLoading />}

        {!isLoading &&
          hourlyTemps.slice(0, 8).map((temp, index) => {
            const imageName = getIcon(hourlyCodes[index]);
            const timeFormatted = formatTime(hourlyTimes[index]).split(", ")[1];
            const roundTemp = Math.round(temp);

            return (
              <li
                className="hourly-list--item"
                key={hourlyTimes[index] || index}
              >
                <article
                  className="list-container"
                  aria-label={`Forecast for ${timeFormatted}`}
                >
                  <div className="date-detail">
                    <img
                      src={`/icons/${imageName}.webp`}
                      alt={
                        imageName
                          ? imageName.replace(/-/g, " ")
                          : "Weather icon"
                      }
                    />
                    <p>
                      <time dateTime={hourlyTimes[index]}>{timeFormatted}</time>
                    </p>
                  </div>
                  <p className="temp">
                    <span>
                      {roundTemp}
                      {unit}
                    </span>
                    <span className="visually-hidden">{roundTemp} degrees</span>
                  </p>
                </article>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

export default Aside;
