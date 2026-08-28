import useWeather from "../../hooks/useWeather";

const TodayDetails = () => {
  const { isLoading } = useWeather();

  return (
    <article
      className="today-details"
      aria-busy={isLoading}
      aria-label={
        isLoading
          ? "Loading current weather details"
          : "Current weather details"
      }
    >
      {/* FOR THE ARTICLE ELEMENT THE ARIA BUSY AND ARIA LABEL VALUES SHOULD CHANGE WHEN THE LOADING STATE IS FALSE. */}
      {isLoading && (
        <span className="visually-hidden" role="status">
          loading weather information...
        </span>
      )}

      <header
        className={`today-details-screen ${isLoading ? "loading" : "fetched-successfully"}`}
        aria-hidden={isLoading}
      ></header>
      <dl
        className="details-list"
        aria-hidden={isLoading ? "true" : undefined}
        aria-live={isLoading ? undefined : "polite"}
      >
        <div
          className={`details-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        >
          <dt className="title" id="lbl-feels-like">
            Feels like
          </dt>
          <dd>
            <output aria-labelledby="lbl-feels-like">0</output>
          </dd>
        </div>

        <div
          className={`details-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        >
          <dt className="title" id="lbl-humidity">
            Humidity
          </dt>
          <dd>
            <output aria-labelledby="lbl-humidity">0</output>
          </dd>
        </div>

        <div
          className={`details-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        >
          <dt className="title" id="lbl-wind">
            Wind
          </dt>
          <dd>
            <output aria-labelledby="lbl-wind">0</output>
          </dd>
        </div>

        <div
          className={`details-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
        >
          <dt className="title" id="lbl-precipitation">
            Precipitation
          </dt>
          <dd>
            <output aria-labelledby="lbl-precipitation">0</output>
          </dd>
        </div>
      </dl>
    </article>
  );
};

export default TodayDetails;
