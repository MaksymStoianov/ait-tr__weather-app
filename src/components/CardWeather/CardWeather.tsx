import { FlexBox } from "components/FlexBox";
import {
  StyledCardWeather,
  StyledCity,
  StyledDescription,
  StyledIcon,
  StyledTemperature,
  StyledTemperatureMax,
  StyledTemperatureMin,
} from "./styles";
import type { CardWeatherProps } from "./types";

function WeatherCard(props: CardWeatherProps) {
  const {
    city,
    temperature,
    temperatureMin,
    temperatureMax,
    icon,
    description,
    style,
  } = props;

  const src = `https://openweathermap.org/img/wn/${icon}.png`;

  return (
    <StyledCardWeather style={style}>
      <FlexBox style={{ gap: "5px" }}>
        <StyledCity>{city}</StyledCity>
        <StyledTemperature>{temperature.toFixed(0)}</StyledTemperature>
        <StyledIcon src={src} alt={city} />
        <StyledDescription>{description}</StyledDescription>
        <FlexBox direction="row" style={{ gap: "15px" }}>
          <StyledTemperatureMin>
            {temperatureMin.toFixed(0)}
          </StyledTemperatureMin>
          <StyledTemperatureMax>
            {temperatureMax.toFixed(0)}
          </StyledTemperatureMax>
        </FlexBox>
      </FlexBox>
    </StyledCardWeather>
  );
}

export default WeatherCard;
