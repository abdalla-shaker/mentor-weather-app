import { useSelector } from "react-redux";

import TodayHeader from "./TodayHeader.jsx";
import DetailList from "./DetailList.jsx";

const TodayDetails = () => {
  const isLoading = useSelector((state) => state.weather.isLoading);

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
      {isLoading && (
        <span className="visually-hidden" role="status">
          loading weather information...
        </span>
      )}

      <TodayHeader />
      <DetailList />
    </article>
  );
};

export default TodayDetails;
