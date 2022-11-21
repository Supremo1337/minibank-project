import { EyeSlash } from "phosphor-react";
import { useEffect, useState } from "react";
import { ButtonSendAndFilter, Title } from "../../styles/global";
import {
  Content,
  TransferBox,
  BalanceBox,
  BalanceTitleAndIconGroup,
  BalanceText,
  Transfer,
  DivToPlaceInputAndButtonInRow,
  BalanceInput,
  TitleModal,
  SubTitleModal,
  ButtonsRowGroup,
  YesSendButton,
  NoSendButton,
} from "./styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";
import axios from "axios";

interface ChildModalProps {
  handleSubmit: () => void;
  handleCloseFirstModal: () => void;
  username: string;
  amount: string;
}

function style(correctWidth: boolean) {
  return {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 500,
    bgcolor: "#000",
    height: correctWidth ? 400 : 300,
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    pt: 2,
    px: 4,
    pb: 3,
  };
}

function ChildModal({
  handleCloseFirstModal,
  handleSubmit,
  username,
  amount,
}: ChildModalProps) {
  const matches = useMediaQuery("(min-width: 1024px)");
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleOpenConfirmationModal = async () => {
    await handleSubmit();
    setOpenConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    handleCloseFirstModal();
    setOpenConfirmationModal(false);
  };

  return (
    <>
      <ButtonsRowGroup>
        <YesSendButton onClick={handleOpenConfirmationModal}>
          Sim, enviar
        </YesSendButton>
        <NoSendButton onClick={handleCloseFirstModal}>Não, voltar</NoSendButton>
      </ButtonsRowGroup>
      <Modal
        hideBackdrop
        open={openConfirmationModal}
        onClose={handleCloseConfirmationModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style(matches) }}>
          <TitleModal>Transação concluída!</TitleModal>
          <SubTitleModal>
            <span>
              Enviou $ {amount} para {username}
            </span>
          </SubTitleModal>
          <NoSendButton onClick={handleCloseConfirmationModal}>
            Fechar
          </NoSendButton>
        </Box>
      </Modal>
    </>
  );
}

export default function HandlingMoney() {
  const matches = useMediaQuery("(min-width: 1024px)");
  const [money, setMoney] = useState("");
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const [tranferForUserInput, setTranferForUserInput] = useState("");
  const [moneyWanTransfer, setMoneyWanTransfer] = useState("");

  useEffect(() => {
    const res = axios
      .get("http://localhost:3333/api/authme/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tokenBank"),
        },
      })
      .then((res) => {
        setMoney(res.data.user.account.balance);
      })
      .catch((error) => {
        console.log("ERRO AQ", error);
      });
  }, []);

  const sendRequest = async () => {
    const res = await axios.post(
      "http://localhost:3333/api/money/transfer",
      {
        username: tranferForUserInput,
        amount: Number(moneyWanTransfer),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tokenBank"),
        },
      }
    );
    console.log("sendRequest", res.data);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Content>
      <TransferBox>
        <BalanceBox>
          <BalanceTitleAndIconGroup>
            <Title fontSize="1.6rem">Balance</Title>
            <EyeSlash
              onClick={() => setShow(!show)}
              size={16}
              color="#ffffff"
              cursor={"pointer"}
              style={{ userSelect: "none" }}
            />
          </BalanceTitleAndIconGroup>
          <BalanceText>{show ? `R$ ${money}` : "R$ --"}</BalanceText>
        </BalanceBox>
        <Transfer>
          <Title fontSize="1.6rem" mgb="4px">
            Transferir para usuário NG
          </Title>
          <DivToPlaceInputAndButtonInRow>
            <BalanceInput
              mg="12px 0 0 0"
              width="100%"
              widthLaptop="50%"
              placeholder="Insira o usuário de destino"
              maxWidth="400px"
              onChange={(e) => setTranferForUserInput(e.target.value)}
            />
            <BalanceInput
              mg="12px 0 22px 0"
              width="100%"
              widthLaptop="30%"
              placeholder="Insira o valor"
              maxWidth="200px"
              onChange={(e) => setMoneyWanTransfer(e.target.value)}
            />
            <ButtonSendAndFilter onClick={handleOpen}>
              Enviar
            </ButtonSendAndFilter>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style(matches) }}>
                <TitleModal>
                  Tem certeza que deseja <br />
                  fazer essa transição
                </TitleModal>
                <SubTitleModal>
                  Enviar $ {moneyWanTransfer} para{" "}
                  <span>{tranferForUserInput}</span>
                </SubTitleModal>
                <ChildModal
                  amount={moneyWanTransfer}
                  username={tranferForUserInput}
                  handleSubmit={async () => {
                    await sendRequest();
                  }}
                  handleCloseFirstModal={() => setOpen(false)}
                />
              </Box>
            </Modal>
          </DivToPlaceInputAndButtonInRow>
        </Transfer>
      </TransferBox>
    </Content>
  );
}
