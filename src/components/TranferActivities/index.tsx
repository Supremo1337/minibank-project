import { useMemo, useState } from "react";
import { ButtonSendAndFilter, InfoText, InputsAndButton, Title } from "../../styles/global";
import { BalanceInput } from "../HandlingMoney/styles";
import { Content, Content2, Filter, FilterGroupTextAndInput, FilterOptions, SelectFilter } from "./styles";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { rows } from "./rows";

export default function TransferActivities() {
  const [dateInput, setDateInput] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [filter, setFilter] = useState<any>();

  const columns = [
    { key: "id", name: "Evento" },
    { key: "titleValue", name: "Valor" },
    { key: "titleFrom", name: "De" },
    { key: "titlePara", name: "Para" },
    { key: "titleDate", name: "Data" },
  ];


  useMemo(() => {
    if (!dateInput) {
      setFilter(rows);
    }
  }, [dateInput]);

  function filterButton() {
    const data = rows.filter((value) => value.titleDate === dateInput);
    setFilter(data);
  }

  function checkSwitch(value: string) {
    console.log(value, "VALUE");
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
  console.log(isSelected, "SELECTED");
  return (
    <Content2>
      <Title fontSize="16px">Atividades de transferência</Title>
      <Content>
        <Filter>
          <InputsAndButton>
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
          </InputsAndButton>
        </Filter>
        <DataGrid columns={columns} rows={filter} />
      </Content>
    </Content2>
  );
}
