import styled from "@emotion/styled";

interface MainButtonStyledProps {
  disabled: boolean;
}

export const MainButton = styled.button<MainButtonStyledProps>`
  min-width: 100px;
  min-height: 48px;
  outline: none;
  border: none;
  padding: 10px 15px;
  background-color: ${({ disabled }) =>
    disabled ? "var(--secondary-color)" : "var(--primary-color)"};
  border-radius: var(--border-radius);
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
  cursor: pointer;
`;
