import axios from "axios";
import { createAppSlice } from "store/createAppSlice";
import { v4 } from "uuid";
import type { WeatherData, WeatherSliceState } from "./types";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_API_KEY;
const initialState: WeatherSliceState = {
  data: [],
  error: undefined,
  status: "default",
};

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (cityName: string, thunkApi) => {
        try {
          const lang = document.documentElement.lang ?? "en";

          if (!cityName) {
            throw new Error("cityName = undefined");
          }

          if (!API_KEY) {
            throw new Error("API_KEY = undefined");
          }

          const options = {
            method: "GET",
            url: `${API_URL}?units=metric&lang=${lang}&q=${encodeURIComponent(cityName)}&appid=${API_KEY}`,
            headers: {
              "Content-Type": "application/json",
            },
          };

          const result = await axios.request(options);

          return result.data;
        } catch (error) {
          return thunkApi.rejectWithValue(error);
        }
      },
      {
        pending: (state: WeatherSliceState) => {
          state.status = "loading";
          state.error = undefined;
        },
        fulfilled: (state: WeatherSliceState, action: any) => {
          state.data = [
            {
              request_id: v4(),
              timestamp: new Date().getTime(),
              ...action.payload,
            } as WeatherData,
            ...state.data,
          ];
          state.status = "success";
        },
        rejected: (state: WeatherSliceState, action: any) => {
          state.error = action.payload.message;
          state.status = "error";
        },
      },
    ),
    resetWeather: create.reducer(() => initialState),
  }),
  selectors: {
    weatherData: (state: WeatherSliceState) => state,
  },
});

export const weatherActions = weatherSlice.actions;
export const weatherSelectors = weatherSlice.selectors;
