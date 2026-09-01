import { useSelector } from "react-redux";

const Output = ({ data, label }) => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const isLoading = useSelector((state) => state.weather.isLoading);

  return (
    <output aria-labelledby={label}>
      {isLoading ? (
        0
      ) : (
        <>
          {weatherData.current && weatherData.current[data]}
          {weatherData.current && weatherData.current_units[data]?.split("C")}
        </>
      )}
    </output>
  );
};

export default Output;
