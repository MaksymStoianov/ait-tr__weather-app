import type { CSSProperties } from "react";

export interface StyledButtonIconProps {
  disabled: boolean;
}

export interface ButtonProps extends StyledButtonIconProps {
  icon?: string;
  title?: string;
  type: "submit" | "button" | "reset";
  style?: CSSProperties;
  onClick?: () => void;
}
