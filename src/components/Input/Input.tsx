import { ErrorMessage, InputContainer, InputElement, Label } from "./styles";
import type { InputProps } from "./types";

function Input(props: InputProps) {
  const {
    id,
    name,
    type = "text",
    placeholder,
    value,
    datalist,
    onChange,
    label,
    error,
  } = props;

  const elDatalist =
    datalist &&
    datalist.map(({ key, value }) => <option key={key} value={value}></option>);

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        list={datalist ? `${name}-options` : undefined}
      />
      {datalist && <datalist id={`${name}-options`}>{elDatalist}</datalist>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
}

export default Input;
