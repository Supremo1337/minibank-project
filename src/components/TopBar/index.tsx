import {
  Content,
  GroupPerfilAndLogOut,
  UserPerfil,
  UserPhoto,
  LogOut,
  IconAndLogOutButtonGrouping,
} from "./styles";
import LogoNGPorExtenso from "../../../public/icon/LogoNGPorExtenso";
import { SignOut } from "phosphor-react";
import { InfoText } from "../../styles/global";

export default function Topbar() {
  return (
    <Content>
      <LogoNGPorExtenso />
      <GroupPerfilAndLogOut>
        <UserPerfil>
          <InfoText fontSize="1.6rem">Gabriel</InfoText>
          <UserPhoto />
        </UserPerfil>
        <LogOut>
          <IconAndLogOutButtonGrouping>
            <SignOut size={24} color="#ffffff" />
            <InfoText fontSize="1.6rem">Sair</InfoText>
          </IconAndLogOutButtonGrouping>
        </LogOut>
      </GroupPerfilAndLogOut>
    </Content>
  );
}
