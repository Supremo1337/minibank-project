import styled from "styled-components";

interface BalanceInputProps {
  width: string;
  mg: string;
  widthLaptop?: string;
  maxWidth?: string;
}

export const Content = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  margin-top: 32px;
  padding: 0px 22px;
  flex-direction: column;
  /* background: red; */
  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    height: auto;
    padding: 0px 100px;
  }
  @media (min-width: 1440px) {
    padding: 0px 200px;
    align-items: center;
  }
`;

export const BalanceBox = styled.div`
  width: auto;
  height: 70px;
  /* background: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BalanceText = styled.label`
  font-size: 3.6rem;
  color: #d2d2d2;
`;

export const BalanceTitleAndIconGroup = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TransferBox = styled.div`
  width: 100%;
  height: 480px;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 100%;
    height: 77px;
    margin-top: 0px;
    flex-direction: row;
  }
`;

export const Transfer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* background: cyan; */
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const BalanceInput = styled.input<BalanceInputProps>`
  width: ${(props) => props.width};
  height: 48px;
  background: #343840;
  font-size: 1.6rem;
  border: 0px;
  border-radius: 8px;
  outline: none;
  padding-left: 18px;
  margin: ${(props) => props.mg};
  /* display: ${(props) => (props.title ? "Selecione um filtro" : "none")}; */
  ::placeholder {
    color: #fff;
  }
  @media (min-width: 1024px) {
    margin: 0;
    width: ${(props) => props.widthLaptop};
    max-width: ${(props) => props.maxWidth}; /*436px *305px; */
  }
`;

export const DivPlaceFilterInline = styled.div`
  @media (min-width: 1024px) {
    /* background: pink; */
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const TitleModal = styled.div`
  font: normal normal 600 2.2rem Poppins;
  color: #fff;
  text-align: center;
  @media (min-width: 1024px) {
    font: normal normal 600 3rem/4.3rem Poppins;
  }
`;

export const SubTitleModal = styled.label`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  span {
    font-size: 2rem;
    color: #06d186;
  }
`;

export const ButtonsRowGroup = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  /* background: #06d186; */
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const YesSendButton = styled.button`
  width: 190px;
  height: 48px;
  border: 1px solid #fff;
  border-radius: 8px;
  background: #000;
  font-size: 2rem;
  cursor: pointer;
`;
export const NoSendButton = styled.button`
  width: 190px;
  height: 48px;
  border: 0;
  border-radius: 8px;
  background: #3c3d4a;
  font-size: 2rem;
  cursor: pointer;
`;
