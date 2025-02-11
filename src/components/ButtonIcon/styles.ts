import styled from "@emotion/styled";

interface MainButtonStyledProps {
  size: string;
  disabled: boolean;
}

export const MainButtonIcon = styled.button<MainButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  --size: ${({ size }) => size}px;
  height: calc(var(--size) * 1.5);
  width: calc(var(--size) * 1.5);
  outline: none;
  border: none;
  border-radius: 100%;
  color: white;
  cursor: pointer;
  background-color: ${({ disabled }) =>
    disabled ? "var(--secondary-color)" : "var(--primary-color)"};
`;

export const SpanIcon = styled.span`
  font-size: var(--size);
`;
