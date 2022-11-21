import {
  Content,
  GroupPerfilAndLogOut,
  UserPerfil,
  LogOut,
  IconAndLogOutButtonGrouping,
} from "./styles";
import LogoNGPorExtenso from "../../../public/icon/LogoNGPorExtenso";
import { SignOut, UserCircle } from "phosphor-react";
import { InfoText } from "../../styles/global";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Topbar() {
  const [username, setUsername] = useState();

  const router = useRouter();
  
  const logOut = () => {
    localStorage.removeItem("tokenBank");
    router.push("/");
  };

  useEffect(() => {
    const res = axios
      .get("http://localhost:3333/api/authme/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tokenBank"),
        },
      })
      .then((res) => {
        setUsername(res.data.user.username);
      })
      .catch((error) => {
        console.log("ERRO AQ", error);
      });
  }, []);

  return (
    <Content>
      <LogoNGPorExtenso />
      <GroupPerfilAndLogOut>
        <UserPerfil>
          <InfoText fontSize="1.6rem">{username}</InfoText>
          <UserCircle size={30} color="#7c7c8a" />
        </UserPerfil>
        <LogOut onClick={logOut}>
          <IconAndLogOutButtonGrouping>
            <SignOut size={24} color="#ffffff" />
            <InfoText fontSize="1.6rem">Sair</InfoText>
          </IconAndLogOutButtonGrouping>
        </LogOut>
      </GroupPerfilAndLogOut>
    </Content>
  );
}
