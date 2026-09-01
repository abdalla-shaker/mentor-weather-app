import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "../store/store.js";

const useWeather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherActions.setIsLoading(true));
    const fetchingData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=30.04&longitude=31.23&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&hourly=temperature_2m,precipitation,precipitation_probability,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto",
        );

        if (!response.ok) {
          const data = await response.json();
          dispatch(weatherActions.setWeatherData({ weatherData: data }));
          throw new Error("Error found, please try again later.");
        }

        const data = await response.json();

        dispatch(weatherActions.setIsLoading(false));
        dispatch(weatherActions.setWeatherData({ weatherData: data }));
      } catch (err) {
        dispatch(weatherActions.setIsLoading(false));
        dispatch(weatherActions.setHasError(true));
        dispatch(weatherActions.setErrorMessage({ message: err.message }));
      }
    };

    fetchingData();
  }, [dispatch]);
};

export default useWeather;
