import { EyeSlash } from "phosphor-react";
import { useState } from "react";
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
  SelectFilter,
  FilterOptions,
} from "./styles";

export default function HandlingMoney() {
  const [money, setMoney] = useState("$ 100,00");
  const [show, setShow] = useState(true);

  function onClick() {}

  return (
    <Content>
      <TransferAndFilter>
        <DivTeste>
          <BalanceBox>
            <BalanceGroupTextAndIcon>
              <Title fontSize="1.6rem">Balance</Title>
              <button
                onClick={() => setShow(!show)}
                style={{
                  background: "none",
                  border: "none",
                }}
              >
                <EyeSlash size={16} color="#ffffff" cursor={"pointer"} />
              </button>
            </BalanceGroupTextAndIcon>
            <BalanceText>{show ? money : "$ --"}</BalanceText>
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
              <SelectFilter defaultValue={"Selecione um filtro"}>
                <FilterOptions>Selecione um filtro</FilterOptions>
                <FilterOptions>Filtrar por Data</FilterOptions>
                <FilterOptions>Filtrar por Cash-in</FilterOptions>
                <FilterOptions>Filtrar por Cash-out</FilterOptions>
              </SelectFilter>
            </FilterGroupTextAndInput>
            <BalanceInput
              mg="12px 0 22px 0"
              width="100%"
              widthLaptop="42%"
              maxWidth="436px"
              placeholder="12/11/2022"
              type={"date"}
            />
            <Button>Filtrar</Button>
          </InputsAndButton>
        </Filter>
      </TransferAndFilter>
    </Content>
  );
}
