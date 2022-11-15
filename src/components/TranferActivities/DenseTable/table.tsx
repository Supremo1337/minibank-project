import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Content, TableBody, TableData, TableHead, TableRow } from "./styles";
import { InfoText, Title } from "../../../styles/global";
import IconVerde from "../../../../public/icon/IconVerde";
import IconAzul from "../../../../public/icon/IconAzul";
import { CurrencyCircleDollar } from "phosphor-react";

// function createData(name: string, calories: number, fat: number) {
//   return { name, calories, fat };
// }

// const rows = [
//   createData("Evento", 159, 6.0),
//   createData("Valor", 237, 9.0),
//   createData("De", 262, 16.0),
//   createData("Para", 305, 3.7),
//   createData("Data", 356, 16.0),
// ];

export default function DenseTable() {
  return (
    <>
      <Title fontSize="16px">Atividades de transferência</Title>
      <Content>
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
            </TableData>
            <TableData>
              <InfoText fontSize="16px">Set 20 2022</InfoText>
            </TableData>
          </TableRow>
        </TableBody>
      </Content>
    </>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 328 }} size="small" aria-label="a dense table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell >Atividades de transferência</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell
    //             component="th"
    //             scope="row"
    //             sx={{ width: "1%", fontSize: "1.6rem", color: "#A8AEBA" }}
    //           >
    //             {row.name}
    //           </TableCell>
    //           <TableCell
    //             sx={{ width: "20%", textAlign: "left", fontSize: "1.6rem" }}
    //             align="right"
    //           >
    //             {row.calories}
    //           </TableCell>
    //           <TableCell
    //             sx={{ width: "20%", textAlign: "left", fontSize: "1.6rem" }}
    //             align="right"
    //           >
    //             {row.fat}
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
