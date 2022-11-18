import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  /* background: #232343; */
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: 0px 22px;
  @media (min-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 0px 100px;
  }
  @media (min-width: 1440px) {
    padding: 0px 200px;
  }
`;


export const GroupFilterAndDataGrid = styled.div`
  width: 100%;
  height: auto;
  /* background: green; */
  margin-top: 24px;
  @media (min-width: 1024px) {
    height: auto;
    /* display: flex;
    flex-direction: column; */
  }
`;

export const Filter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* background: blue; */
  @media (min-width: 1024px) {
    width: 90%;
    height: auto;
    flex-direction: row;
    justify-content:space-between;
  }
`;
export const FilterGroupTextAndInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: purple; */
  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const FilterOptions = styled.option`
  font-size: 1.6rem;
  border: 0px;
`;

export const SelectFilter = styled.select`
  width: 83%;
  height: 48px;
  background: #343840;
  font-size: 1.6rem;
  border: 0px;
  border-radius: 8px;
  outline: none;
  padding-left: 18px;
  margin: 0;
  ::placeholder {
    color: #fff;
  }
  @media (min-width: 1024px) {
    margin: 0;
    width: 80;
    max-width: 305px; /*436px *305px; */
  }
`;
