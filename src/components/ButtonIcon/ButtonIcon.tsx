import { MainButtonIcon, SpanIcon } from "./styles";
import type { ButtonProps } from "./types";

function ButtonIcon(props: ButtonProps) {
  const {
    size = "24",
    icon,
    title,
    type = "button",
    onClick,
    disabled = false,
    ...rest
  } = props;

  return (
    <MainButtonIcon
      size={size}
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      {...rest}
    >
      <SpanIcon translate="no" className="material-symbols-outlined">
        {icon}
      </SpanIcon>
    </MainButtonIcon>
  );
}
export default ButtonIcon;
