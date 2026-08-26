const FutureWeatherDetails = () => {
  return (
    <article
      className="future-weather-details"
      aria-busy="true"
      aria-label="Loading The next 7 days forecast"
    >
      <h2>Daily forecast</h2>
      <dl className="details-list future-list" aria-hidden="true">
        <div className="details-list--item future-list--item loading"></div>
        <div className="details-list--item future-list--item loading"></div>
        <div className="details-list--item future-list--item loading"></div>
        <div className="details-list--item future-list--item loading"></div>
        <div className="details-list--item future-list--item loading"></div>
        <div className="details-list--item future-list--item loading"></div>
        <div className="details-list--item future-list--item loading"></div>
      </dl>
    </article>
  );
};

export default FutureWeatherDetails;
