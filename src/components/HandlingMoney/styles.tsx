import styled from "styled-components";

interface BalanceInputProps {
  width: string;
  mgt: string;
}

export const Content = styled.div`
  width: 100%;
  height: 440px;
  /* background: #232343; */
  display: flex;
  margin-top: 32px;
  padding: 0px 22px;
  flex-direction: column;
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
  height: 330px;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;
`;

export const Tranfer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* background: red; */
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
  margin-top: ${(props) => props.mgt};
  ::placeholder {
    color: #fff;
  }
`;

export const Filter = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  /* background: blue; */
`;

export const FilterGroupTextAndInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: green; */
`;

export const ButtonFilter = styled.button`
  widows: 100%;
  height: 48px;
  background: #202128;
  font-size: 1.8rem;
  border: 0px;
  border-radius: 8px;
`;
