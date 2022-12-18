import { useEffect, useMemo, useState } from "react";
import { ButtonSendAndFilter, InfoText, Title } from "../../styles/global";
import { BalanceInput } from "../HandlingMoney/styles";
import {
  GroupFilterAndDataGrid,
  Content,
  Filter,
  FilterGroupTextAndInput,
  FilterOptions,
  SelectFilter,
} from "./styles";
import "react-data-grid/lib/styles.css";
import DataGrid, { Column } from "react-data-grid";
import { IconAzul } from "../../../public/icon/iconAzul";
import IconVerde from "../../../public/icon/iconVerde";
import { CurrencyCircleDollar } from "phosphor-react";
import useLocalStorage from "use-local-storage";
import { useRouter } from "next/router";
import axios from "axios";

export interface Props {
  id?: string;
  isCashOut?: boolean;
  titleValue?: string;
  titleFrom?: string;
  titlePara?: string;
  titleDate?: string;
}

export default function TransferActivities() {
  const [dateInput, setDateInput] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [filter, setFilter] = useState<Props[]>([]);
  const [dataServer, setDataServer] = useState<Props[]>([]);

  const router = useRouter();

  useEffect(() => {
    const res = axios
      .get("http://localhost:3333/api/money/transactions", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tokenBank"),
        },
      })
      .then((res) => {
        setDataServer(
          res.data.transactions.map((row: any) => {
            return {
              id: row.id,
              isCashOut: row.debitedAccountId === res.data.accountId,
              titleValue: row.value,
              titleFrom: row.debitedAccount.user.username,
              titlePara: row.creditedAccount.user.username,
              titleDate: new Date(row.createdAt).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              }),
            };
          })
        );
      })
      .catch((error) => {
        console.log("ERRO AQ", error);
      });
  }, []);

  const columns: Column<Props | undefined, string>[] = [
    {
      cellClass: "cell-id",
      key: "isCashOut",
      name: "Evento",
      formatter(props) {
        return (
          <>
            <span className="cell-id-icon">
              {props.row?.isCashOut ? <IconAzul /> : <IconVerde />}
            </span>

            {props.row?.isCashOut ? "Cash-out" : "Cash-in"}
          </>
        );
      },
    },
    {
      cellClass: "cell-id",
      key: "titleValue",
      name: "Valor",
      formatter(props) {
        return (
          <>
            <span className="cell-id-icon">
              {props.row?.isCashOut ? (
                <CurrencyCircleDollar size={24} color="#a31541" />
              ) : (
                <CurrencyCircleDollar size={24} color="#06d186" />
              )}
            </span>

            {(props.row as any).titleValue}
          </>
        );
      },
    },
    { key: "titleFrom", name: "De" },
    { key: "titlePara", name: "Para" },
    { key: "titleDate", name: "Data" },
  ];

  useMemo(() => {
    if (!dateInput) {
      setFilter([...dataServer]);
    }
  }, [dateInput, dataServer]);

  function filterButton() {
    const data = dataServer.filter((value) => {
      const dateFormated = new Date(dateInput).toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      });
      return value.titleDate === dateFormated;
    });
    setFilter(data);
  }

  function checkSwitch(value: string) {
    switch (value) {
      case "1":
        setIsSelected(false);
        setFilter(dataServer);
        break;
      case "2":
        setIsSelected(true);
        setFilter(dataServer);
        break;
      case "3":
        setIsSelected(false);
        setFilter(dataServer.filter((e) => !e.isCashOut));
        break;
      case "4":
        setIsSelected(false);
        setFilter(dataServer.filter((e) => e.isCashOut));
        break;
    }
  }

  return (
    <Content>
      <GroupFilterAndDataGrid>
        <Filter>
          <FilterGroupTextAndInput>
            <InfoText fontSize="1.8rem">Filtro</InfoText>
            <SelectFilter
              onChange={(e) => {
                checkSwitch(e.target.value);
              }}
            >
              <FilterOptions value="1" title="Selecione um filtro">
                Selecione um filtro
              </FilterOptions>
              <FilterOptions value="2" title="Filtrar por data">
                Filtrar por data
              </FilterOptions>
              <FilterOptions value="3" title="Filtrar Por Cash-in">
                Filtrar por Cash-in
              </FilterOptions>
              <FilterOptions value="4" title="Filtrar Por Cash-out">
                Filtrar por Cash-out
              </FilterOptions>
            </SelectFilter>
          </FilterGroupTextAndInput>
          {isSelected && (
            <>
              <BalanceInput
                mg="12px 0 22px 0"
                width="100%"
                widthLaptop="42%"
                maxWidth="436px"
                type={"date"}
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
              />
              <ButtonSendAndFilter onClick={filterButton}>
                Filtrar
              </ButtonSendAndFilter>
            </>
          )}
        </Filter>
        <Title fontSize="16px">Atividades de transferência</Title>
        <DataGrid columns={columns} rows={filter} />
      </GroupFilterAndDataGrid>
    </Content>
  );
}
