import { EyeSlash } from "phosphor-react";
import { InfoText, Title } from "../../styles/global";
import {
  BalanceBox,
  BalanceGroupTextAndIcon,
  BalanceInput,
  BalanceText,
  Button,
  Content,
  Filter,
  FilterGroupTextAndInput,
  Transfer,
  TransferAndFilter,
  InputsAndButton,
  DivTeste,
} from "./styles";

export default function HandlingMoney() {
  return (
    <Content>
      <TransferAndFilter>
        <DivTeste>
          <BalanceBox>
            <BalanceGroupTextAndIcon>
              <Title fontSize="1.6rem">Balance</Title>
              <EyeSlash size={16} color="#ffffff" />
            </BalanceGroupTextAndIcon>
            <BalanceText>$ --</BalanceText>
          </BalanceBox>

          <Transfer>
            <Title fontSize="1.6rem" mgb="4px">
              Transferir para usuário NG
            </Title>
            <InputsAndButton>
              <BalanceInput
                mg="12px 0 0 0"
                width="100%"
                widthLaptop="50%"
                placeholder="Insira o usuário de destino"
                maxWidth="400px"
              />
              <BalanceInput
                mg="12px 0 22px 0"
                width="100%"
                widthLaptop="30%"
                placeholder="Insira o valor"
                maxWidth="200px"
              />
              <Button>Enviar</Button>
            </InputsAndButton>
          </Transfer>
        </DivTeste>
        <Filter>
          <InputsAndButton>
            <FilterGroupTextAndInput>
              <InfoText fontSize="1.8rem">Filtro</InfoText>
              <BalanceInput
                mg="0"
                width="83%"
                widthLaptop="80%"
                maxWidth="305px"
                placeholder="Selecione um filtro"
              />
            </FilterGroupTextAndInput>
            <BalanceInput
              mg="12px 0 22px 0"
              width="100%"
              widthLaptop="42%"
              maxWidth="436px"
              placeholder="12/11/2022"
            />
            <Button>Filtrar</Button>
          </InputsAndButton>
        </Filter>
      </TransferAndFilter>
    </Content>
  );
}
