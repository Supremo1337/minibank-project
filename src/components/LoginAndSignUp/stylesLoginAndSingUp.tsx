import styled from "styled-components";

interface InputLoginProps {
  minLength?: number;
}

interface LoginOrSingUpSubmitProps {
  mgt: string;
}

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/img/bannerngcash.jpg");
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`;

export const MidWhiteBox = styled.div`
  width: 90%;
  max-width: 638px;
  height: 730px;
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  position: relative;
  z-index: 1;
  @media (min-width: 720px) {
    width: 638px;
    height: 830px;
  }
`;

export const Header = styled.div`
  width: 80%;
  height: 212px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 720px) {
    width: 302px;
    height: 212px;
  }
`;

export const TitleH1 = styled.div`
  font-weight: bold;
  font-size: 2.8rem;
  @media (min-width: 720px) {
    font-size: 3.2rem;
    margin-top: 12px;
  }
`;

export const InputAndTextDiv = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  /* background: pink; */
`;

export const InputLoginOrSingUp = styled.input<InputLoginProps>`
  width: 100%;
  height: 48px;
  padding: 0 40px;
  font-size: 1.2rem;
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  ::placeholder {
    font-size: 1.2rem;
    color: #7c7c8a;
  }
  @media (min-width: 720px) {
    font-size: 1.4rem;
    ::placeholder {
      font-size: 1.4rem;
    }
  }
`;

export const LoginOrSingUpSubmit = styled.input<LoginOrSingUpSubmitProps>`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background: #000;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin-top: ${(props) => props.mgt};
  cursor: pointer;
  :hover {
    background: #090808;
  }
`;
