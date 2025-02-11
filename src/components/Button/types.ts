import type { CSSProperties } from "react";

export interface ButtonProps {
  name?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
}
