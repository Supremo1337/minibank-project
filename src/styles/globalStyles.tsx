import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .css-8je8zh-MuiTouchRipple-root {
    position: relative;
  }

  css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected, 
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root{
    color: ${({ theme }) => theme.text};
    font-family: "Tormenta";
    font-size: 1.5em;
  }
  .container {
    background-color: ${({ theme }) => theme.bodyBar};
    border-radius: 10px;
  }
  .css-5yppak-MuiFormControl-root-MuiTextField-root .MuiOutlinedInput-root fieldset, 
  .css-5yppak-MuiFormControl-root-MuiTextField-root .MuiOutlinedInput-root&:hover fieldset, 
  .css-5yppak-MuiFormControl-root-MuiTextField-root .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: ${({ theme }) => theme.textMaterial};
  }
  .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root, 
  .css-5yppak-MuiFormControl-root-MuiTextField-root label.Mui-focused, 
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root{
    color: ${({ theme }) => theme.text};
  }
  .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input{
    z-index: 1;
    color: ${({ theme }) => theme.text};
  }
  `;
