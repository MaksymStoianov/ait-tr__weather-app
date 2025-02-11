import type { CSSProperties } from "react";

export interface ButtonProps {
  size?: string;
  icon?: string;
  title?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
}
