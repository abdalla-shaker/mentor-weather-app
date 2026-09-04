import { configureStore, createSlice } from "@reduxjs/toolkit";

const weatherInitialState = {
  isLoading: true,
  weatherData: {},
  hasError: false,
  errorMessage: "",
  isFahrenheit: false,
  isMPH: false,
  isInch: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: weatherInitialState,
  reducers: {
    convertToMM(state) {
      if (!state.isInch) {
        return;
      }

      state.isInch = false;
    },

    convertToInch(state) {
      if (state.isInch) {
        return;
      }

      state.isInch = true;
    },

    convertToMPH(state) {
      if (state.isMPH) {
        return;
      }

      state.isMPH = true;
    },

    convertToKMH(state) {
      if (!state.isMPH) {
        return;
      }

      state.isMPH = false;
    },

    convertToFahrenheit(state) {
      if (state.isFahrenheit) {
        return;
      }
      state.isFahrenheit = true;
    },

    convertToCelsius(state) {
      if (!state.isFahrenheit) {
        return;
      }

      state.isFahrenheit = false;
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },

    setWeatherData(state, action) {
      state.weatherData = action.payload.weatherData;
    },

    setHasError(state, action) {
      state.hasError = action.payload;
    },

    setErrorMessage(state, action) {
      state.errorMessage = action.payload.message;
    },
  },
});

export const store = configureStore({
  reducer: { weather: weatherSlice.reducer },
});

export const weatherActions = weatherSlice.actions;
