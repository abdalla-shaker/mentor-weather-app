import errorIcon from "../../assets/images/icon-error.svg";
import retryIcon from "../../assets/images/icon-retry.svg";
import Aside from "../aside/Aside";
import Hero from "../hero/Hero";
import Main from "../main/Main";
import { useSelector } from "react-redux";

const WeatherContent = () => {
  const weatherState = useSelector((state) => state.weather);

  const placeIsAvailable = weatherState.isLoading
    ? true
    : !weatherState.weatherData.placeIsNotAvailable;

  if (
    !weatherState.isLoading &&
    weatherState.message === "Error found, please try again later."
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
