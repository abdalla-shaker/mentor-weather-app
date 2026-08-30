import useWeather from "../../hooks/useWeather";

const Output = ({ data, label }) => {
  const { isLoading, weatherData } = useWeather();
  return (
    <output aria-labelledby={label}>
      {isLoading ? (
        0
      ) : (
        <>
          {weatherData.current[data]}
          {weatherData.current_units[data].split("C")}
        </>
      )}
    </output>
  );
};

export default Output;
