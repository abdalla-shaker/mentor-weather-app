import useWeather from "../../hooks/useWeather.jsx";

import errorIcon from "../../assets/images/icon-error.svg";
import retryIcon from "../../assets/images/icon-retry.svg";
import Aside from "../aside/Aside";
import Hero from "../hero/Hero";
import Main from "../main/Main";

const WeatherContent = () => {
  const { isLoading, weatherData, hasError } = useWeather();

  let placeIsAvailable = true;

  if (!isLoading) {
    placeIsAvailable = !weatherData.reason?.includes(
      "Latitude must be in range of -90 to 90°",
    );

    if (
      hasError &&
      !weatherData.reason?.includes("Latitude must be in range of -90 to 90°")
    ) {
      return (
        <main className="hero error-hero">
          <img
            src={errorIcon}
            alt=""
            aria-hidden="true"
            className="error-image"
          />
          <h1>Something went wrong</h1>
          <p>
            We couldn't connect to the server (API error). please try again in a
            few moments.
          </p>

          <button>
            <img src={retryIcon} alt="" aria-hidden="true" /> retry
          </button>
        </main>
      );
    }
  }

  const containerClasses = placeIsAvailable ? "success" : "no-result-container";

  return (
    <>
      <Hero />

      <div className={`weather-details-container ${containerClasses}`}>
        {!placeIsAvailable && (
          <h2 className="no-result-text">No search result found!</h2>
        )}
        {placeIsAvailable && (
          <>
            <Main />
            <Aside />
          </>
        )}
      </div>
    </>
  );
};

export default WeatherContent;
