import styled from "@emotion/styled";
import { ButtonIcon } from "components/ButtonIcon";
import { Input } from "components/Input";

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  background-color: #f9f9f9;
  border: 1px solid #112233;
  padding: 0;
  gap: 5px;
`;

export const StyledInput = styled(Input)`
  font-family: "Lato", sans-serif;
  flex-grow: 1;
`;

export const StyledButton = styled(ButtonIcon)`
  color: #222;
`;
