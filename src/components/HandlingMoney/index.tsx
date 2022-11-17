import { EyeSlash } from "phosphor-react";
import { useState } from "react";
import { ButtonSendAndFilter, InfoText, InputsAndButton, Title } from "../../styles/global";
import {
  BalanceBox,
  BalanceGroupTextAndIcon,
  BalanceInput,
  BalanceText,
  Content,
  Transfer,
  TransferAndFilter,
  DivTeste,
  TitleModal,
  SubTitleModal,
  ButtonsRowGroup,
  YesSendButton,
  NoSendButton,
} from "./styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 410,
  bgcolor: "#000000",
  border: "2px solid #1C1B23",
  boxShadow: 24,
  display: "flex",
  alingItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export default function HandlingMoney() {
  const [money, setMoney] = useState("$ 100,00");
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <ButtonSendAndFilter onClick={handleOpen}>
                Enviar
              </ButtonSendAndFilter>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <TitleModal>
                    Tem certeza que deseja <br />
                    fazer essa transição
                  </TitleModal>
                  <SubTitleModal>
                    Enviar $ 500 para <span>Usuário001</span>
                  </SubTitleModal>
                  <ButtonsRowGroup>
                    <YesSendButton>Sim, enviar</YesSendButton>
                    <NoSendButton>Não, voltar</NoSendButton>
                  </ButtonsRowGroup>
                </Box>
              </Modal>
            </InputsAndButton>
          </Transfer>
        </DivTeste>
      </TransferAndFilter>
    </Content>
  );
}
