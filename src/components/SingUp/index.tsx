import React, { useState } from "react";
// import { TextTitle } from "../../styles/global";
import {
  BackgroundOverlay,
  Content,
  FormLogin,
  GroupCheckBoxAndButton,
  Header,
  InputAndText,
  InputLogin,
  LoginBox,
  LoginSubmit,
  TitleH1,
} from "./styles";
// import { TormentaLogoLogin } from "../../../public/img/TormentaLogoLogin";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "./CheckBoxLogin";
// import { Envelope, Lock } from "phosphor-react";
import Link from "next/link";
import { TextTitle } from "../../styles/global";
import LogoNG from "../../../public/icon/LogoNG";
// import axios from "axios";

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [comparativeSingUp, setComparativeSingUp] = useState("");
  const [second, setSecond] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(email);
  //   console.log(password);
  //   const jsonSingUp = { email, password, confirmPassword };
  //   axios
  //     .post("http://localhost:8000/api/authme/register", JSON.stringify(jsonSingUp), {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((res) => {
  //       window.location.href = "/";
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setComparativeSingUp(error);
  //     });
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
          <TextTitle>Crie sua conta e aproveite sua aventura</TextTitle>
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
          <InputAndText>
            <TextTitle>Confirmar sua senha</TextTitle>
            {/* <Lock
              size={24}
              color="#7C7C8A"
              style={{ position: "relative", top: "29px", left: "10px" }}
            /> */}
            <InputLogin
              type="password"
              value={confirmPassword}
              placeholder="********"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputAndText>
            {/* <Link href="./"> */}
            <a>
              <LoginSubmit type={"submit"} value="CRIAR SUA CONTA" />
              <TextTitle></TextTitle>
            </a>
            {/* </Link> */}
        </FormLogin>
      </LoginBox>
      <BackgroundOverlay></BackgroundOverlay>
    </Content>
  );
}
