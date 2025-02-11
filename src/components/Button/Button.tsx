import { MainButton } from "./styles";
import type { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const {
    name = "SEND",
    type = "button",
    onClick,
    disabled = false,
    ...rest
  } = props;

  return (
    <MainButton type={type} onClick={onClick} disabled={disabled} {...rest}>
      {name}
    </MainButton>
  );
}
export default Button;
