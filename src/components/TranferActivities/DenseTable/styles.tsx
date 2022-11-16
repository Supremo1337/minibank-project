import styled from "styled-components";

export const Content = styled.table`
  width: 100%;
  height: 190px;
  background: green;
  margin-top: 24px;
  @media (min-width: 1024px) {
    height: auto;
    /* display: flex;
    flex-direction: column; */
  }
`;

export const TableHead = styled.thead``;
export const TableRow = styled.tr`
  justify-content: space-between;
  display: flex;
  height: 20%;
  @media (min-width: 1024px) {
    flex-direction: column;
    height: 190px;
  }
`;
export const TableBody = styled.tbody`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const TableData = styled.td`
  display: inline-flex;
  align-items: center;
  flex: 1;
`;
