import { configureStore, createSlice } from "@reduxjs/toolkit";

const weatherInitialState = {
  isLoading: true,
  weatherData: {},
  hasError: false,
  errorMessage: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: weatherInitialState,
  reducers: {
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
