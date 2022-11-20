import React, { useEffect, useState } from "react";
import {
  ForgetAndLoginBox,
  FormLogin,
  GroupCheckBoxAndButton,
  TextForgetAndLogin,
} from "./styles";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "./CheckBoxLogin";
import { useRouter } from "next/router";
import { TextTitle } from "../../../styles/global";
import {
  Content,
  Header,
  InputAndTextDiv,
  InputLoginOrSingUp as InputLogin,
  LoginOrSingUpSubmit as LoginSubmit,
  MidWhiteBox,
  TitleH1,
} from "../stylesLoginAndSingUp";
import { Envelope, Eye, Lock } from "phosphor-react";
import LogoNG from "../../../../public/icon/LogoNG";
import Link from "next/link";
import axios from "axios";
import useLocalStorage from "use-local-storage";

export default function Login() {
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [comparativeLogin, setComparativeLogin] = useState("");

  // const [token, setToken] = useLocalStorage("tokenBank", null);
  const router = useRouter();

  // useEffect(() => {
  //   if (token) {
  //     router.push("/mainpage");
  //   }
  // }, [token]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    console.log("ENTROU AQ");
    event.preventDefault();
    const jsonLogin = { username, password };
    const res = axios
      .post("http://localhost:3333/api/authme/authenticate", jsonLogin, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (!res.data.token) return;
        // setToken(res.data.token);
        localStorage.setItem("tokenBank", res.data.token);
        router.push("/mainpage");
        console.log("ESSE É O RES", res);
      })
      .catch((error) => {
        console.log("ERRO AQ", error);
        setComparativeLogin(error.response);
      });
  };

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <Content>
      <MidWhiteBox>
        <Header>
          <LogoNG width={130} />
          <TitleH1>NG CASH</TitleH1>
          <TextTitle textAlign={"center"}>
            Faça login e conheça a carteira digital da nova geração.
          </TextTitle>
        </Header>
        <FormLogin onSubmit={handleSubmit}>
          <InputAndTextDiv>
            <TextTitle>Seu nome de Usuário</TextTitle>
            <Envelope
              size={24}
              color="#7C7C8A"
              style={{ position: "absolute", top: "39px", left: "10px" }}
            />
            <InputLogin
              autoFocus
              value={username}
              placeholder="Seu Username (mínimo de 3 caracteres)"
              onChange={(e) => setUsername(e.target.value)}
              minLength={3}
              required
            />
          </InputAndTextDiv>
          <InputAndTextDiv>
            <TextTitle>Insira sua Senha</TextTitle>
            <Lock
              size={24}
              color="#7C7C8A"
              style={{ position: "absolute", top: "39px", left: "10px" }}
            />
            <InputLogin
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Sua senha precisa conter pelo menos 8 caracteres, um número e uma letra maiúscula."
              required
            />
            <Eye
              size={20}
              color="#7c7c8a"
              style={{
                position: "absolute",
                top: "42px",
                right: "20px",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputAndTextDiv>
          <GroupCheckBoxAndButton>
            <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
              <HiddenCheckbox
                onChange={handleCheckboxChange}
                checked={checked}
              />
              <StyledCheckbox checked={checked}>
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
            <a>
              <LoginSubmit
                type={"submit"}
                value="ENTRAR NA SUA CONTA"
                mgt={"0"}
              />
            </a>
          </GroupCheckBoxAndButton>
        </FormLogin>
        <ForgetAndLoginBox>
          <TextForgetAndLogin>Esqueceu sua senha?</TextForgetAndLogin>
          <Link href="./signup">
            <TextForgetAndLogin>
              não possui conta? crie uma agora!
            </TextForgetAndLogin>
          </Link>
        </ForgetAndLoginBox>
      </MidWhiteBox>
    </Content>
  );
}
