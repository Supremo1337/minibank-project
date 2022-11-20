import { EyeSlash } from "phosphor-react";
import { useEffect, useState } from "react";
import {
  ButtonSendAndFilter,
  InfoText,
  DivToPlaceInputAndButtonInRow,
  Title,
} from "../../styles/global";
import {
  BalanceBox,
  BalanceTitleAndIconGroup,
  BalanceInput,
  BalanceText,
  Content,
  Transfer,
  TransferBox,
  TitleModal,
  SubTitleModal,
  ButtonsRowGroup,
  YesSendButton,
  NoSendButton,
} from "./styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import useLocalStorage from "use-local-storage";
import { useRouter } from "next/router";

interface Props {
  enviarForm: () => void;
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
  enviarForm,
  username,
  amount,
}: Props) {
  const matches = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);

  const handleOpen = async () => {
    await enviarForm();
    setOpen(true);
  };

  const handleClose = () => {
    handleCloseFirstModal();
    setOpen(false);
  };

  return (
    <>
      <ButtonsRowGroup>
        <YesSendButton onClick={handleOpen}>Sim, enviar</YesSendButton>
        <NoSendButton onClick={handleCloseFirstModal}>Não, voltar</NoSendButton>
      </ButtonsRowGroup>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style(matches) }}>
          <TitleModal>Sucesso</TitleModal>
          <SubTitleModal>
            <span>
              Enviou $ {amount} para {username}
            </span>
          </SubTitleModal>
          <NoSendButton onClick={handleClose}>Fechar</NoSendButton>
        </Box>
      </Modal>
    </>
  );
}

export default function HandlingMoney({ username }: Props) {
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
        // setTranferForUserInput(res.data.)
      })
      .catch((error) => {
        console.log("ERRO AQ", error);
      });
  }, []);

  const enviarRequest = async () => {
    const res = await axios.post(
      "http://localhost:3333/api/money/transfer",
      {
        username: tranferForUserInput,
        amount: moneyWanTransfer,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tokenBank"),
        },
      }
    );
    console.log("enviarRequest", res.data);
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
          <>
            {/* {console.log("INFOS AQ", infos)} */}
            <BalanceTitleAndIconGroup>
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
            </BalanceTitleAndIconGroup>
            <BalanceText>{show ? `$ ${money}` : "$ --"}</BalanceText>
          </>
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
                  enviarForm={async () => {
                    await enviarRequest();
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
