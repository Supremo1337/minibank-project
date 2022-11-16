import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 250px;
  background: #232343;
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
