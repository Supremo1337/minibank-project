import React, { useState } from "react";
// import { TextTitle } from "../../styles/global";
import {
  BackgroundOverlay,
  Content,
  ForgetAndLogin,
  FormLogin,
  GroupCheckBoxAndButton,
  Header,
  InputAndText,
  InputLogin,
  LoginBox,
  LoginSubmit,
  TextForgetAndLogin,
  TitleH1,
} from "./styles";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "./CheckBoxLogin";
import { Envelope, Lock } from "phosphor-react";
import Link from "next/link";
// import axios from "axios";
// import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { TextTitle } from "../../styles/global";
import LogoNG from "../../../public/icon/LogoNG";

export default function Login() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comparativeLogin, setComparativeLogin] = useState("");
  // const [token, setToken] = useLocalStorage("tokenTormenta20", null);
  const router = useRouter();

  // useEffect(() => {
  //   if (token) {
  //     router.push("/ficha");
  //   }
  // }, [token]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const jsonLogin = { email, password };
  //   const res = axios
  //     .post("http://localhost:8000/api/authme/authenticate", jsonLogin, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((res) => {
  //       if (!res.data.token) return;
  //       setToken(res.data.token);
  //       console.log("ESSE É O RES", res);
  //     })
  //     .catch((error) => {
  //       console.log("ERRO AQ", error);
  //       setComparativeLogin(error.response);
  //     });
  //   console.log("RESDATA AQ", res.data);
  // };

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("CONSOLE DENTRO DO HANDLE SUBMIT", event);
  //   const teste = (e, id) => {};
  // }

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <Content>
      <LoginBox>
        <Header>
          <LogoNG />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100;600&family=Poppins&display=swap"
            rel="stylesheet"
          />
          <TitleH1>NG CASH</TitleH1>
          <TextTitle>Faça login e aproveite sua aventura</TextTitle>
        </Header>
        <FormLogin>
          <InputAndText>
            <TextTitle>Endereço de e-mail</TextTitle>
            {/* <Envelope
              size={24}
              color="#7C7C8A"
              style={{ position: "relative", top: "29px", left: "10px" }}
            /> */}
            <InputLogin
              autoFocus
              type="email"
              value={email}
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputAndText>
          <InputAndText>
            <TextTitle>Insira sua Senha</TextTitle>
            {/* <Lock
              size={24}
              color="#7C7C8A"
              style={{ position: "relative", top: "29px", left: "10px" }}
            /> */}
            <InputLogin
              type="password"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputAndText>
          <GroupCheckBoxAndButton>
            <CheckboxContainer onClick={handleCheckboxChange}>
              <HiddenCheckbox onChange={handleCheckboxChange} />
              <StyledCheckbox>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundImage: `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 20 20' width='20px' height='20px'%3E%3Cg id='surface115629650'%3E%3Crect x='0' y='0' width='20' height='20' style='fill:rgb(0%25,0%25,0%25);fill-opacity:1;stroke:none;'/%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:rgb(100%25,100%25,100%25);fill-opacity:1;' d='M 17.988281 3.992188 C 17.8125 4 17.648438 4.070312 17.527344 4.195312 L 7.332031 14.390625 L 3.136719 10.195312 C 2.972656 10.019531 2.722656 9.949219 2.488281 10.011719 C 2.253906 10.074219 2.074219 10.253906 2.011719 10.488281 C 1.949219 10.722656 2.019531 10.972656 2.195312 11.136719 L 6.863281 15.804688 C 7.121094 16.066406 7.542969 16.066406 7.804688 15.804688 L 18.472656 5.136719 C 18.667969 4.945312 18.726562 4.652344 18.621094 4.398438 C 18.511719 4.148438 18.261719 3.984375 17.988281 3.992188 Z M 17.988281 3.992188 '/%3E%3C/g%3E%3C/svg%3E%0A")`,
                  }}
                ></div>
              </StyledCheckbox>
              <TextTitle>Lembrar de mim por 30 dias</TextTitle>
            </CheckboxContainer>
            {/* <Link href="./ficha"> */}
            <a>
              <LoginSubmit type={"submit"} value="ENTRAR NA SUA CONTA" />
            </a>
            {/* </Link> */}
          </GroupCheckBoxAndButton>
        </FormLogin>
        <ForgetAndLogin>
          <TextForgetAndLogin>Esqueceu sua senha?</TextForgetAndLogin>
          {/* <Link href="./singUp"> */}
          {/* <a> */}
          <TextForgetAndLogin>
            não possui conta? crie uma agora!
          </TextForgetAndLogin>
          {/* </a> */}
          {/* </Link> */}
        </ForgetAndLogin>
      </LoginBox>
      {/* <BackgroundOverlay/> */}
    </Content>
  );
}
