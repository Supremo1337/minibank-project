import { EyeSlash } from "phosphor-react";
import { InfoText, Title } from "../../styles/global";
import {
  BalanceBox,
  BalanceGroupTextAndIcon,
  BalanceInput,
  BalanceText,
  ButtonFilter,
  Content,
  Filter,
  FilterGroupTextAndInput,
  Tranfer,
  TransferAndFilter,
} from "./styles";

export default function HandlingMoney() {
  return (
    <Content>
      <BalanceBox>
        <BalanceGroupTextAndIcon>
          <Title fontSize="1.6rem">Balance</Title>
          <EyeSlash size={16} color="#ffffff" />
        </BalanceGroupTextAndIcon>
        <BalanceText>$ --</BalanceText>
      </BalanceBox>
      <TransferAndFilter>
        <Tranfer>
          <Title fontSize="1.6rem" mgb="4px">
            Transferir para usuário NG
          </Title>
          <BalanceInput mgt="12px" width="100%" placeholder="Insira o usuário de destino" />
          <BalanceInput mgt="12px" width="100%" placeholder="Insira o valor" />
        </Tranfer>
        <Filter>
          <FilterGroupTextAndInput>
            <InfoText fontSize="1.8rem">Filtro</InfoText>
            <BalanceInput mgt="0" width="83%" placeholder="Selecione um filtro" />
          </FilterGroupTextAndInput>
          <BalanceInput mgt="12px" width="100%" placeholder="12/11/2022" />
        </Filter>
        <ButtonFilter>Filtrar</ButtonFilter>
      </TransferAndFilter>
    </Content>
  );
}
