import useWeather from "../../hooks/useWeather.jsx";

const FutureWeatherDetails = () => {
  const { isLoading } = useWeather();

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
        <li
          className={`details-list--item future-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`details-list--item future-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`details-list--item future-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`details-list--item future-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`details-list--item future-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`details-list--item future-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`details-list--item future-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
      </ul>
    </article>
  );
};

export default FutureWeatherDetails;
