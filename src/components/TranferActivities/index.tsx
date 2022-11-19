import { useMemo, useState } from "react";
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
import { Props, rows } from "./rows";
import { IconAzul } from "../../../public/icon/IconAzul";
import IconVerde from "../../../public/icon/iconVerde";
import { CurrencyCircleDollar } from "phosphor-react";

export default function TransferActivities() {
  const [dateInput, setDateInput] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [filter, setFilter] = useState<Props[]>([]);

  const columns: Column<Props | undefined, string>[] = [
    {
      cellClass: "cell-id",
      key: "id",
      name: "Evento",
      formatter(props) {
        return (
          <>
            <span className="cell-id-icon">
              {(props.row as any).id.indexOf("Cash-in") ? (
                <IconAzul />
              ) : (
                <IconVerde />
              )}
            </span>

            {props.row?.id}
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
              {(props.row as any).id.indexOf("Cash-in") ? (
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
      setFilter([...rows]);
    }
  }, [dateInput]);

  function filterButton() {
    const data = rows.filter((value) => value.titleDate === dateInput);
    setFilter(data);
  }

  function convertDate() {
    const filterMap = filter.map((row: Props) => {
      if (row.titleDate) {
        return {
          ...row,
          titleDate: new Date(row.titleDate!).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          }),
        };
      }
    });
    return filterMap;
  }

  function checkSwitch(value: string) {
    switch (value) {
      case "1":
        setIsSelected(false);
        setFilter(rows);
        break;
      case "2":
        setIsSelected(true);
        setFilter(rows);
        break;
      case "3":
        setIsSelected(false);
        setFilter(rows.filter((e) => e.id === "Cash-in"));
        break;
      case "4":
        setIsSelected(false);
        setFilter(rows.filter((e) => e.id === "Cash-out"));
        break;
    }
  }
  return (
    <Content>
      <Title fontSize="16px">Atividades de transferência</Title>
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
                placeholder="12/11/2022"
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
        <DataGrid columns={columns} rows={convertDate()} />
      </GroupFilterAndDataGrid>
    </Content>
  );
}
