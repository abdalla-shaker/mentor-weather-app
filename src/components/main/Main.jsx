import FutureWeatherDetails from "./FutureWeatherDetails";
import TodayDetails from "./TodayDetails";

const Main = () => {
  return (
    <main className="weather-dashboard">
      <TodayDetails />
      <FutureWeatherDetails />
    </main>
  );
};

export default Main;
