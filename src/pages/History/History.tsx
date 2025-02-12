import { Button } from "components/Button";
import { CardWeather } from "components/CardWeather";
import { FlexBox } from "components/FlexBox";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice";
import { StyledPageWrapper } from "./styles";

function History() {
  const { data } = useAppSelector(weatherSelectors.weatherData);

  const dispatch = useAppDispatch();

  const resetWeather = () => {
    dispatch(weatherActions.resetWeather());
  };

  const elData = data.map(item => (
    <CardWeather
      key={item.request_id}
      city={item.name}
      temperature={item.main.temp}
      temperatureMin={item.main.temp_min}
      temperatureMax={item.main.temp_max}
      icon={item.weather[0].icon}
      description={item.weather[0].main}
    />
  ));

  return (
    <StyledPageWrapper>
      <FlexBox
        direction="row"
        style={{
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          flex: "1",
        }}
      >
        {data.length > 0 && (
          <Button
            name="Delete all cards"
            type="button"
            onClick={resetWeather}
          />
        )}
        {data.length ? elData : <p>Empty</p>}
      </FlexBox>
    </StyledPageWrapper>
  );
}

export default History;
