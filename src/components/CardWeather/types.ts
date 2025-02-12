import type { CSSProperties } from "react";

export interface CardWeatherProps {
  city: string;
  temperature: number;
  temperatureMin: number;
  temperatureMax: number;
  icon: string;
  description: string;
  style?: CSSProperties;
}
