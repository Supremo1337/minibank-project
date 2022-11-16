import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type DateType = {
  name: string;
};

type State = {
  dates: DateType[];
  datesFilter: (date: DateType) => void;
};

const useUserStore = create<State>((set) => ({
  dates: [],

  datesFilter: (date: DateType) => {
    set((state) => ({ dates: [...state.dates], date }));
  },
}));

export default useUserStore;
