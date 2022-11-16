import { Content, TableBody, TableData, TableHead, TableRow } from "./styles";
import { InfoText, Title } from "../../../styles/global";
import { CurrencyCircleDollar, Database } from "phosphor-react";
import IconVerde from "../../../../public/icon/iconVerde";
import IconAzul from "../../../../public/icon/iconAzul";
import * as React from "react";
import List from "@mui/material/List";
import { InputsAndButton } from "../../HandlingMoney/styles";

export default function DenseTable() {
  return (
    <>
      <Title fontSize="16px">Atividades de transferência</Title>
      <Content>
        {/* <List style={{ maxHeight: "100%", overflow: "auto" }}> */}
        <TableBody>
          <TableRow>
            <TableData>
              <Title fontSize="16px">Evento</Title>
            </TableData>
            <TableData>
              <IconVerde />
              <InfoText fontSize="16px">Cash-in</InfoText>
            </TableData>
            <TableData>
              <IconAzul />
              <InfoText fontSize="16px">Cash-out</InfoText>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <Title fontSize="16px">Valor</Title>
            </TableData>
            <TableData>
              <CurrencyCircleDollar size={24} color="#06d186" />
              <InfoText fontSize="16px">$ 500</InfoText>
            </TableData>
            <TableData>
              <CurrencyCircleDollar size={24} color="#d31b54" />
              <InfoText fontSize="16px">$ 500</InfoText>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <Title fontSize="16px">De</Title>
            </TableData>
            <TableData>
              <InfoText fontSize="16px">Usuário001</InfoText>
            </TableData>
            <TableData>
              <InfoText fontSize="16px">Usuário001</InfoText>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <Title fontSize="16px">Para</Title>
            </TableData>
            <TableData>
              <InfoText fontSize="16px">Usuário002</InfoText>
            </TableData>
            <TableData>
              <InfoText fontSize="16px">Usuário002</InfoText>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <Title fontSize="16px">Data</Title>
            </TableData>
            <TableData>
              <InfoText fontSize="16px">Set 20 2022</InfoText>
            </TableData>{" "}
            <TableData>
              <InfoText fontSize="16px">Set 20 2022</InfoText>
            </TableData>
            {/* <TableData>
              <InfoText fontSize="16px">Set 21 2022</InfoText>
            </TableData> */}
          </TableRow>
        </TableBody>
        {/* </List> */}
      </Content>
    </>
  );
}
