export interface WeatherData {
  request_id: number;
  timestamp: number;
  id: number;
  name: string;
  weather: {
    icon: string;
    main: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

export interface WeatherSliceState {
  data: WeatherData[];
  error: any;
  status: "default" | "loading" | "success" | "error";
}
