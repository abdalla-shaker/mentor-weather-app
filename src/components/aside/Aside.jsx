import useWeather from "../../hooks/useWeather.jsx";
import dropDown from "../../assets/images/icon-dropdown.svg";

const Aside = () => {
  const { isLoading, selectedDay } = useWeather();

  return (
    <aside
      className="aside"
      aria-busy={isLoading}
      aria-label={isLoading ? "Loading hourly forecast" : "Hourly forecast"}
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
        >
          {isLoading ? "-" : selectedDay}
          <img src={dropDown} alt="" aria-hidden="true" />
        </button>
      </header>

      <ul
        className="hourly-list"
        aria-labelledby="hourly-heading"
        aria-hidden={isLoading ? "true" : undefined}
        aria-live={isLoading ? undefined : "polite"}
      >
        <li
          className={`hourly-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`hourly-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`hourly-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`hourly-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`hourly-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`hourly-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`hourly-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
        <li
          className={`hourly-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        ></li>
      </ul>
    </aside>
  );
};

export default Aside;
