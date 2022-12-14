import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 22px;
  @media(min-width: 1024px){
    padding: 0px 100px;
  }
  @media(min-width: 1440px){
    padding: 0px 200px;
  }
`;

export const LogOut = styled.button`
  display: none;
  cursor: pointer;
`;

export const GroupPerfilAndLogOut = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  &:hover ${LogOut} {
    width: 100%;
    height: 40px;
    background: #202128;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 0px;
  }
`;

export const IconAndLogOutButtonGrouping = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserPerfil = styled.div`
  width: 160px;
  height: 40px;
  background: #202128;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
