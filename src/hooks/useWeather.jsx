import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "../store/store.js";

const useWeather = (
  cityName = "Alexandria",
  temperatureUnit = "celsius",
  windSpeedUnit = "kmh",
  precipitationUnit = "mm",
  timezone = "auto",
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherActions.setIsLoading(true));

    const fetchingData = async () => {
      try {
        const geoResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            cityName,
          )}&count=1&language=en&format=json`,
        );

        if (!geoResponse.ok) {
          throw new Error("Couldn't reach geocoding service.");
        }

        const geoData = await geoResponse.json();

        // Location Not Found
        if (!geoData.results || geoData.results.length === 0) {
          dispatch(
            weatherActions.setWeatherData({
              weatherData: {
                placeIsNotAvailable: true,
                locationName: "",
              },
            }),
          );
          dispatch(weatherActions.setIsLoading(false));
          return;
        }

        const {
          latitude,
          longitude,
          name,
          country,
          timezone: resolvedTimezone,
        } = geoData.results[0];

        const selectedTimezone =
          timezone === "auto" ? resolvedTimezone || "auto" : timezone;

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&hourly=temperature_2m,precipitation,precipitation_probability,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=${selectedTimezone}&temperature_unit=${temperatureUnit}&wind_speed_unit=${windSpeedUnit}&precipitation_unit=${precipitationUnit}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather forecast data.");
        }

        const data = await response.json();

        dispatch(weatherActions.setIsLoading(false));
        dispatch(
          weatherActions.setWeatherData({
            weatherData: {
              ...data,
              locationName: name,
              locationCountry: country,
              placeIsNotAvailable: false,
            },
          }),
        );
      } catch (err) {
        dispatch(weatherActions.setIsLoading(false));
        dispatch(weatherActions.setHasError(true));
        dispatch(weatherActions.setErrorMessage({ message: err.message }));
      }
    };

    fetchingData();
  }, [
    dispatch,
    cityName,
    temperatureUnit,
    windSpeedUnit,
    precipitationUnit,
    timezone,
  ]);
};

export default useWeather;
