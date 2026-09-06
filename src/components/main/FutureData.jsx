import { useSelector } from "react-redux";
import { smallFormat } from "../../utils/formatDate.js";
import { getIcon } from "../../utils/getIcon.js";

const FutureData = ({ temp, index }) => {
  const isLoading = useSelector((state) => state.weather.isLoading);
  const weatherData = useSelector((state) => state.weather.weatherData);

  const dateLabel = smallFormat(weatherData.daily?.time[index]);
  const maxTemp = `${temp}${weatherData.daily_units?.temperature_2m_max}`;
  const minTemp = `${weatherData.daily?.temperature_2m_min[index]}${weatherData.daily_units?.temperature_2m_min}`;
  const imageName = getIcon(weatherData.daily?.weather_code[index]);

  return (
    <li
      className="details-list--item future-list--item"
      key={index}
      aria-label={`${dateLabel}: High ${maxTemp}, Low ${minTemp}`}
    >
      <h3 id={`forecast-date-${index}`}>{!isLoading && dateLabel}</h3>

      {!isLoading && (
        <img
          src={`/mentor-weather-app/icons/${imageName}.webp`}
          alt={`${imageName} icon`}
          aria-hidden="true"
          className="day-icon"
        />
      )}

      <div className="temps" aria-describedby={`forecast-date-${index}`}>
        <p aria-label={`High temperature: ${maxTemp}`}>
          {!isLoading && temp}
          {!isLoading && weatherData.daily_units?.temperature_2m_max.split("C")}
        </p>
        <p aria-label={`Low temperature: ${minTemp}`}>
          {!isLoading && weatherData.daily?.temperature_2m_min[index]}
          {!isLoading && weatherData.daily_units?.temperature_2m_min.split("C")}
        </p>
      </div>
    </li>
  );
};

export default FutureData;
