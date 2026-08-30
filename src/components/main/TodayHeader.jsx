import useWeather from "../../hooks/useWeather.jsx";

import { formatDate } from "../../utils/formatDate.js";

import desktopBG from "../../assets/images/bg-today-large.svg";
import mobileBG from "../../assets/images/bg-today-small.svg";
import sunnyIcon from "../../assets/images/icon-sunny.webp";

const TodayHeader = () => {
  const { isLoading, weatherData } = useWeather();

  return (
    <>
      <header
        className={`today-details-screen ${isLoading ? "loading" : "fetched-successfully"}`}
        aria-hidden={isLoading}
      >
        {!isLoading && (
          <>
            <picture className="today-screen">
              <source media="(min-width: 768px)" srcSet={desktopBG} />
              <img src={mobileBG} alt="sky image" />
            </picture>
            <div className="place-details">
              <h2>{weatherData.timezone.split("/").join(", ")}</h2>
              <p>{formatDate(weatherData.current.time)}</p>
            </div>
            <div className="temp-details">
              <img src={sunnyIcon} alt="Sun icon" aria-hidden="true" />
              <h3>
                {weatherData.current.apparent_temperature}
                {weatherData.current_units.apparent_temperature.split("C")}
              </h3>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default TodayHeader;
