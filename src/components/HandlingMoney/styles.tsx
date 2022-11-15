import styled from "styled-components";

interface BalanceInputProps {
  width: string;
  mg: string;
  widthLaptop?: string;
  maxWidth?: string;
}

export const Content = styled.div`
  width: 100%;
  height: 500px;
  background: #232343;
  display: flex;
  margin-top: 32px;
  padding: 0px 22px;
  flex-direction: column;
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
  width: 90px;
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

export const BalanceGroupTextAndIcon = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TransferAndFilter = styled.div`
  width: 100%;
  height: 480px;
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 100%;
    height: 160px;
    margin-top: 0px;
  }
`;

export const Transfer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: red;
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const BalanceInput = styled.input<BalanceInputProps>`
  width: ${(props) => props.width};
  height: 48px;
  /* background: #343840; */
  font-size: 1.6rem;
  border: 0px;
  border-radius: 8px;
  outline: none;
  padding-left: 18px;
  margin: ${(props) => props.mg};
  ::placeholder {
    color: #fff;
  }
  @media (min-width: 1024px) {
    margin: 0;
    width: ${(props) => props.widthLaptop};
    max-width: ${(props) => props.maxWidth}; /*436px *305px; */
  }
`;

export const Filter = styled.div`
  width: 100%;
  height: 178px;
  display: flex;
  flex-direction: column;
  background: blue;
  @media (min-width: 1024px) {
    width: 90%;
    height: auto;
  }
`;

export const FilterGroupTextAndInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: purple;
  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const Button = styled.button`
  width: 112px;
  height: 48px;
  background: #202128;
  font-size: 1.8rem;
  border: 0px;
  border-radius: 8px;
  @media (min-width: 1024px) {
  }
`;

export const InputsAndButton = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    background: green;
    justify-content: space-between;
  }
`;

export const DivTeste = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
