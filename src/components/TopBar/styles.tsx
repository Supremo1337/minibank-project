import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100px;
  background: #1b1b2d;
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

export const GroupCardAndLogOut = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  &:hover ${LogOut} {
    width: 160px;
    height: 40px;
    background: #202128;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 0px;
  }
`;

export const LogOutGroup = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserCard = styled.div`
  width: 160px;
  height: 40px;
  background: #202128;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const UserPhoto = styled.div`
  background-image: url("/img/user.png");
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
