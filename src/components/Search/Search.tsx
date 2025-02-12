import { CardWeather } from "components/CardWeather";
import { FlexBox } from "components/FlexBox";
import { Spinner } from "components/Spinner";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice";
import * as Yup from "yup";
import { StyledButton, StyledInput, StyledSearchForm } from "./styles";
import type { SearchFormValues, SearchProps } from "./types";

function Search(props: SearchProps) {
  const { icon = "search", placeholder, title, datalist, style } = props;

  const dispatch = useAppDispatch();
  const { data, error, status } = useAppSelector(weatherSelectors.weatherData);

  const validationSchema = Yup.object().shape({
    city: Yup.string()
      .required("Required field")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
  });

  const formik = useFormik({
    initialValues: {
      city: "",
    } as SearchFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: SearchFormValues) => {
      dispatch(weatherActions.getWeather(values.city));
      formik.resetForm();
    },
  });

  return (
    <FlexBox>
      <StyledSearchForm
        title={title}
        style={style}
        onSubmit={formik.handleSubmit}
      >
        <StyledInput
          name="city"
          id="city_id"
          placeholder={placeholder}
          datalist={datalist}
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
        />
        <StyledButton
          icon={icon}
          title="Search"
          type="submit"
          disabled={formik.values.city.length === 0}
        />
      </StyledSearchForm>
      {status === "loading" && <Spinner />}
      {status === "error" && <p>{error}</p>}
      {status === "success" && (
        <CardWeather
          city={data[0].name}
          temperature={data[0].main.temp}
          temperatureMin={data[0].main.temp_min}
          temperatureMax={data[0].main.temp_max}
          icon={data[0].weather[0].icon}
          description={data[0].weather[0].main}
        />
      )}
    </FlexBox>
  );
}

export default Search;
