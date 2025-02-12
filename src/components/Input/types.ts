import type { CSSProperties, ChangeEvent } from "react";

export type InputDatalist = {
  key: number;
  value: string;
};

export interface InputProps {
  name: string;
  type?: "text" | "email" | "password" | "tel" | "url" | "number" | "date";
  placeholder?: string;
  label?: string;
  id?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  datalist?: InputDatalist[];
  style?: CSSProperties;
}
