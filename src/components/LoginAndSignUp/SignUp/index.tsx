import React, { useState } from "react";
import {
  Content,
  MidWhiteBox,
  Header,
  TitleH1,
  GroupOfText_Input_Icon,
  InputLoginOrSingUp as InputSignUp,
  LoginOrSingUpSubmit as SignUpSubmit,
  FormLoginOrSingUp,
  TextUnderlined,
} from "../stylesLoginAndSingUp";
import { TextTitle } from "../../../styles/global";
import Link from "next/link";
import { Envelope, Eye, Lock } from "phosphor-react";
import axios from "axios";

export default function SingUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [comparativeSingUp, setComparativeSingUp] = useState("");

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log(username);
    console.log(password);
    const jsonSingUp = { username, password };
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
          <TitleH1>Mini Bank</TitleH1>
          <TextTitle textAlign={"center"}>
            Crie sua conta e conheça a carteira digital da nova geração
          </TextTitle>
        </Header>
        <FormLoginOrSingUp height={"240px"} gap={"8px"} onSubmit={handleSubmit}>
          <GroupOfText_Input_Icon>
            <TextTitle>Seu nome de Usuário</TextTitle>
            <Envelope
              size={24}
              color="#7C7C8A"
              style={{ position: "absolute", top: "36px", left: "10px" }}
            />
            <InputSignUp
              autoFocus
              value={username}
              placeholder="Seu Username (mínimo de 3 caracteres)"
              onChange={(e) => setUsername(e.target.value)}
              minLength={3}
              required
            />
          </GroupOfText_Input_Icon>
          <GroupOfText_Input_Icon>
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
          </GroupOfText_Input_Icon>
          <SignUpSubmit mgt={"20px"} type={"submit"} value="CRIAR SUA CONTA" />
        </FormLoginOrSingUp>
        <Link href="./signup">
          <TextUnderlined>ja possui conta? faça o login!</TextUnderlined>
        </Link>
      </MidWhiteBox>
    </Content>
  );
}
