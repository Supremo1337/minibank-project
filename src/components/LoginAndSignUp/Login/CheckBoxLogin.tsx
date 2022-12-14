import styled from "styled-components";

interface CheckboxProps {
  checked?: unknown;
}

export const CheckboxContainer = styled.div<CheckboxProps>`
  padding-left: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  user-select: none;
  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const HiddenCheckbox = styled.input.attrs({type: "checkbox"})<CheckboxProps>`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  user-select: none;
`;

export const StyledCheckbox = styled.label<CheckboxProps>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${(props) => (props.checked ? "#000" : "")};
  border: ${(props) => (props.checked ? "" : "1px solid")};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  div {
    display: ${(props) => (props.checked ? "flex" : "none")};
    filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg)
      brightness(105%) contrast(68%);
  }
`;
