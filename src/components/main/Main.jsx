const Main = () => {
  return (
    <main>
      <article
        className="today-details"
        aria-busy="true"
        aria-label="loading current weather details"
      >
        {/* FOR THE ARTICLE ELEMENT THE ARIA BUSY AND ARIA LABEL VALUES SHOULD CHANGE WHEN THE LOADING STATE IS FALSE. */}

        {/* AS FOR THE SPAN BELOW IT SHOULD BE RENDER CONDITIONALLY BECAUSE IF THE LOADING STATE IS FALSE IT SHOULD NOT BE IN THE DOM */}
        <span className="visually-hidden" role="status">
          loading weather information...
        </span>

        <header
          className="today-details-screen loading"
          aria-hidden="true"
        ></header>
        <dl className="details-list" aria-hidden="true">
          <div className="details-list--item loading">
            <dt className="title">Feels like</dt>
            <dd>
              <output>0</output>
            </dd>
          </div>
          <div className="details-list--item loading">
            <dt className="title">Humidity</dt>
            <dd>
              <output>0</output>
            </dd>
          </div>
          <div className="details-list--item loading">
            <dt className="title">Wind</dt>
            <dd>
              <output>0</output>
            </dd>
          </div>
          <div className="details-list--item loading">
            <dt className="title">Precipitation</dt>
            <dd>
              <output>0</output>
            </dd>
          </div>
        </dl>
      </article>
    </main>
  );
};

export default Main;
