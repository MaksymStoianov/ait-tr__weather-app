import type { InputDatalist } from "components/Input";
import type { CSSProperties } from "react";

export interface SearchFormValues {
  city: string;
}

export interface SearchProps {
  icon?: string;
  title?: string;
  placeholder?: string;
  datalist?: InputDatalist[];
  style?: CSSProperties;
}
