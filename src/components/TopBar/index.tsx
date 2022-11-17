import { SignOut } from "phosphor-react";
import LogoNGPorExtenso from "../../../public/icon/LogoNGPorExtenso";
import { InfoText } from "../../styles/global";
import {
  Content,
  GroupCardAndLogOut,
  LogOutGroup,
  LogOut,
  UserCard,
  UserPhoto,
} from "./styles";

export default function Topbar() {
  return (
    <Content>
      <LogoNGPorExtenso />
      <GroupCardAndLogOut>
        <UserCard>
          <InfoText fontSize="1.6rem">Gabriel</InfoText>
          <UserPhoto />
        </UserCard>
        <LogOut>
          <LogOutGroup>
            <SignOut size={24} color="#ffffff" />
            <InfoText fontSize="1.6rem">Sair</InfoText>
          </LogOutGroup>
        </LogOut>
      </GroupCardAndLogOut>
    </Content>
  );
}
