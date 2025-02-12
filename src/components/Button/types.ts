import type { CSSProperties } from "react";

export interface StyledButtonProps {
  disabled: boolean;
}

export interface ButtonProps extends StyledButtonProps {
  name?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  style?: CSSProperties;
}
