import Output from "./Output.jsx";

import { useSelector } from "react-redux";

const DetailList = () => {
  const isLoading = useSelector((state) => state.weather.isLoading);

  return (
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
          <Output data={"apparent_temperature"} label={"lbl-feels-like"} />
        </dd>
      </div>

      <div
        className={`details-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
      >
        <dt className="title" id="lbl-humidity">
          Humidity
        </dt>
        <dd>
          <Output data="relative_humidity_2m" label="lbl-humidity" />
        </dd>
      </div>

      <div
        className={`details-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
      >
        <dt className="title" id="lbl-wind">
          Wind
        </dt>
        <dd>
          <Output data="wind_speed_10m" label="lbl-wind" />
        </dd>
      </div>

      <div
        className={`details-list--item ${isLoading ? "loading" : "fetched-successfully"}`}
      >
        <dt className="title" id="lbl-precipitation">
          Precipitation
        </dt>
        <dd>
          <Output data="precipitation" label="lbl-precipitation" />
        </dd>
      </div>
    </dl>
  );
};

export default DetailList;
