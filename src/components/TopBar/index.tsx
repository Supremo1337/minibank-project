import LogoNGPorExtenso from "../../../public/icon/LogoNGPorExtenso";
import { InfoText } from "../../styles/global";
import {
  Content,
  UserCard,
  UserPhoto,
} from "./styles";

interface InfoTextProps {
  fontSize: string;
}

export default function Topbar() {
  return (
    <Content>
      {/* <LogoNGPorExtenso /> */}
      <UserCard>
        <InfoText fontSize="1.6rem">Gabriel</InfoText>
          <UserPhoto />
      </UserCard>
    </Content>
  );
}
