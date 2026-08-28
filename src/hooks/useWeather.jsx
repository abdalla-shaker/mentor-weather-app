import { useEffect, useState } from "react";

const useWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=30.04&longitude=31.23&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&hourly=temperature_2m,precipitation_probability,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto",
        );

        if (!response.ok) {
          const data = await response.json();
          console.log(data);
          setWeatherData(data);
          throw new Error("Error found, please try again later.");
        }

        const data = await response.json();

        setIsLoading(false);
        setWeatherData(data);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(err);
      }
    };

    fetchingData();
  }, []);

  return { isLoading, weatherData, errorMessage, hasError };
};

export default useWeather;
