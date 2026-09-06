import { useSelector } from "react-redux";

import TodayHeader from "./TodayHeader.jsx";
import DetailList from "./DetailList.jsx";

const TodayDetails = () => {
  const isLoading = useSelector((state) => state.weather.isLoading);
  const hasError = useSelector((state) => state.weather.hasError);
  const errorMessage = useSelector((state) => state.weather.errorMessage);
  const weatherData = useSelector((state) => state.weather.weatherData);

  return (
    <article
      className="today-details"
      aria-live="polite"
      aria-atomic="true"
      aria-busy={isLoading}
      aria-label={
        isLoading
          ? "Loading current weather details"
          : "Current weather details"
      }
    >
      <div role="status" aria-live="polite" className="sr-only">
        {isLoading && "Fetching weather data..."}
        {hasError && `Error: ${errorMessage}`}
        {weatherData &&
          `Showing weather forecast for ${weatherData.locationName}`}
      </div>

      <TodayHeader />
      <DetailList />
    </article>
  );
};

export default TodayDetails;
