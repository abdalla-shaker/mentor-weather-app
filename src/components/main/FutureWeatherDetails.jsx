import LoadingFutureDetails from "./LoadingFutureDetails.jsx";
import FutureData from "./FutureData.jsx";

import { useSelector } from "react-redux";

const FutureWeatherDetails = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const isLoading = useSelector((state) => state.weather.isLoading);

  return (
    <article
      className="future-weather-details"
      aria-busy={isLoading}
      aria-label={
        isLoading ? "Loading the 7-day forecast" : "7-day daily forecast"
      }
    >
      {isLoading && (
        <span className="visually-hidden" role="status">
          Loading 7-day forecast...
        </span>
      )}

      <h2>Daily forecast</h2>

      <ul
        className="details-list future-list"
        aria-hidden={isLoading ? "true" : undefined}
        aria-live={isLoading ? undefined : "polite"}
      >
        {isLoading && <LoadingFutureDetails />}

        {!isLoading && (
          <>
            {weatherData.daily?.temperature_2m_max.map((temp, index) => {
              return <FutureData key={index} temp={temp} index={index} />;
            })}
          </>
        )}
      </ul>
    </article>
  );
};

export default FutureWeatherDetails;
