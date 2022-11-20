import React, { useState } from "react";
import {
  Content,
  MidWhiteBox,
  Header,
  TitleH1,
  InputAndTextDiv,
  InputLoginOrSingUp as InputSignUp,
  LoginOrSingUpSubmit as SignUpSubmit,
} from "../stylesLoginAndSingUp";
import { TextTitle } from "../../../styles/global";
import LogoNG from "../../../../public/icon/LogoNG";
import Link from "next/link";
import { Envelope, Eye, Lock } from "phosphor-react";
import { FormSingUp } from "./styles";
import axios from "axios";

export default function SingUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [comparativeSingUp, setComparativeSingUp] = useState("");
  const [second, setSecond] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log(username);
    console.log(password);
    const jsonSingUp = { username, password, confirmPassword };
    axios
      .post(
        "http://localhost:3333/api/authme/register",
        JSON.stringify(jsonSingUp),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        setComparativeSingUp(error);
      });
  }

  return (
    <Content>
      <MidWhiteBox>
        <Header>
          <LogoNG width={130} />
          <TitleH1>NG CASH</TitleH1>
          <TextTitle textAlign={"center"}>
            Crie sua conta e conheça a carteira digital da nova geração
          </TextTitle>
        </Header>
        <FormSingUp onSubmit={handleSubmit}>
          <InputAndTextDiv>
            <TextTitle>Seu nome de Usuário</TextTitle>
            <Envelope
              size={24}
              color="#7C7C8A"
              style={{ position: "absolute", top: "36px", left: "10px" }}
            />
            <InputSignUp
              autoFocus
              value={username}
              placeholder="johndoe@gmail.com"
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
              style={{ position: "absolute", top: "36px", left: "10px" }}
            />
            <InputSignUp
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
                top: "40px",
                right: "20px",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputAndTextDiv>
          <InputAndTextDiv>
            <TextTitle>Confirmar sua senha</TextTitle>
            <Lock
              size={24}
              color="#7C7C8A"
              style={{ position: "absolute", top: "36px", left: "10px" }}
            />
            <InputSignUp
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              placeholder="********"
              onChange={(e) => setConfirmPassword(e.target.value)}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Sua senha precisa conter pelo menos 8 caracteres, um número e uma letra maiúscula."
              required
            />
            <Eye
              size={20}
              color="#7c7c8a"
              style={{
                position: "absolute",
                top: "40px",
                right: "20px",
                cursor: "pointer",
              }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </InputAndTextDiv>
          <SignUpSubmit mgt={"20px"} type={"submit"} value="CRIAR SUA CONTA" />
        </FormSingUp>
      </MidWhiteBox>
    </Content>
  );
}
