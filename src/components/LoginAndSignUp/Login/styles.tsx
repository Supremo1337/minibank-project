import styled from "styled-components";

export const FormLogin = styled.form`
  width: 90%;
  height: 290px;
  display: flex;
  flex-direction: column;
  /* background: blue; */
  box-sizing: border-box;
  align-items: stretch;
  justify-content: space-between;
  @media (min-width: 720px) {
    width: 448px;
    /* background: blue; */
  }
`;

export const GroupCheckBoxAndButton = styled.div`
  width: 100%;
  height: 106px;
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 720px) {
  }
`;

export const ForgetAndLoginBox = styled.div`
  width: 90%;
  height: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 720px) {
    width: 60%;
    /* background: red; */
  }
`;

export const TextForgetAndLogin = styled.label`
  font-size: 14px;
  color: #2c2d30;
  text-decoration: underline;
  cursor: pointer;
  @media (min-width: 720px) {
    font-size: 14px;
    color: #2c2d30;
    text-decoration: underline;
    cursor: pointer;
  }
`;
