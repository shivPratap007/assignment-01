import create from "zustand";
import { TallCards, Tcard, TrowData } from "./utils/CardsData";
import { persist } from "zustand/middleware";

type StoreState = {
  allData: TallCards;
  setAllData: (data: TallCards) => void;
  removeCard: (rowIndex: number, cardId: string) => void;
  addCategory: (widgetRowTitle: string) => void;
  addCard: (rowIndex: number, card: Tcard) => void;
};

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      allData: [
        {
          widgetRowTitle: "CSPM Executive Dashboard",
          cards: [
            {
              id: "1",
              title: "Cloud accounts",
              data: [
                { label: "Connected", value: 2, color: "#4285F4" },
                { label: "Not Connected", value: 2, color: "#E8EAF6" },
              ],
              chartData: {
                labels: ["Connected", "Not Connected"],
                datasets: [
                  {
                    data: [2, 2],
                    backgroundColor: ["#4285F4", "#E8EAF6"],
                  },
                ],
              },
            },
            {
              id: "2",
              title: "Cloud accounts risk assessment",
              data: [
                { label: "Failed", value: 29, color: "#FF0000" },
                { label: "Warning", value: 34, color: "#00FF00" },
                { label: "Not available", value: 12, color: "#FFFF00" },
                { label: "Passed", value: 2, color: "#808080" },
              ],
              chartData: {
                labels: ["Failed", "Warning", "Not available", "Passed"],
                datasets: [
                  {
                    data: [29, 34, 12, 2],
                    backgroundColor: [
                      "#FF0000",
                      "#00FF00",
                      "#FFFF00",
                      "#808080",
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          widgetRowTitle: "CWPP Dashboard",
          cards: [
            {
              id: "3",
              title: "Top 5 namespace specific alerts",
              data: [],
              chartData: {
                labels: ["Connected", "Not Connected"],
                datasets: [
                  {
                    data: [2, 2],
                    backgroundColor: ["#4285F4", "#E8EAF6"],
                  },
                ],
              },
            },
            {
              id: "4",
              title: "Workload alerts",
              data: [],
              chartData: {
                labels: ["Failed", "Warning", "Not available", "Passed"],
                datasets: [
                  {
                    data: [29, 34, 12, 2],
                    backgroundColor: [
                      "#FF0000",
                      "#00FF00",
                      "#FFFF00",
                      "#808080",
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
      setAllData: (data: TallCards) => set({ allData: data }),
      removeCard: (rowIndex, cardId) =>
        set((state) => ({
          allData: state.allData.map((row, index) =>
            index === rowIndex
              ? {
                  ...row,
                  cards: row.cards.filter((card) => card.id !== cardId),
                }
              : row
          ),
        })),
      addCategory: (widgetRowTitle) =>
        set((state) => ({
          allData: [
            ...state.allData,
            {
              widgetRowTitle,
              cards: [],
            } as TrowData,
          ],
        })),
      addCard: (rowIndex, card) =>
        set((state) => ({
          allData: state.allData.map((row, index) =>
            index === rowIndex ? { ...row, cards: [...row.cards, card] } : row
          ),
        })),
    }),
    {
      name: "my-app-storage", // Name of the storage key
      getStorage: () => localStorage, // Use localStorage to persist the state
    }
  )
);
