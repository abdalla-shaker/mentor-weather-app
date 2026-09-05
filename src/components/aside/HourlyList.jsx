import { useSelector } from "react-redux";
import HourlyListIsLoading from "./HourlyListIsLoading.jsx";
import { getIcon } from "../../utils/getIcon.js";
import { formatTime } from "../../utils/formatDate.js";

const HourlyList = ({ dayDate }) => {
  const isLoading = useSelector((state) => state.weather.isLoading);
  const weatherData = useSelector((state) => state.weather.weatherData);

  const hasData = !isLoading && weatherData.hourly?.time;

  let hourlyTemps = [];
  let hourlyCodes = [];
  let hourlyTimes = [];
  let unit = "°C";

  if (hasData) {
    const { time, temperature_2m, weather_code } = weatherData.hourly;
    unit = weatherData.hourly_units?.temperature_2m || "°C";

    
    const startIndex = dayDate
      ? time.findIndex((t) => t.startsWith(dayDate))
      : 0;
    const actualIndex = startIndex !== -1 ? startIndex : 0;

    
    const dayTimes = time.slice(actualIndex, actualIndex + 24);
    const dayTemps = temperature_2m.slice(actualIndex, actualIndex + 24);
    const dayCodes = weather_code.slice(actualIndex, actualIndex + 24);

    hourlyTimes = dayTimes.filter((_, i) => i % 3 === 0);
    hourlyTemps = dayTemps.filter((_, i) => i % 3 === 0);
    hourlyCodes = dayCodes.filter((_, i) => i % 3 === 0);
  }

  return (
    <ul className="hourly-list" aria-live={isLoading ? undefined : "polite"}>
      {isLoading ? (
        <HourlyListIsLoading />
      ) : (
        hourlyTemps.map((temp, index) => {
          const imageName = getIcon(hourlyCodes[index]);
          const formatted = formatTime(hourlyTimes[index]);
          const timeFormatted = formatted?.includes(",")
            ? formatted.split(", ")[1]
            : formatted;
          const roundTemp = Math.round(temp);

          return (
            <li className="hourly-list--item" key={hourlyTimes[index] || index}>
              <article
                className="list-container"
                aria-label={`Forecast for ${timeFormatted}`}
              >
                <div className="date-detail">
                  <img
                    src={`/icons/${imageName}.webp`}
                    alt={
                      imageName ? imageName.replace(/-/g, " ") : "Weather icon"
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
        })
      )}
    </ul>
  );
};

export default HourlyList;
