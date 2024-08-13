export type Tcard = {
    id: string;
    title: string;
    data?: {
      label: string;
      value: number;
      color: string;
    }[];
    chartData?: {
      labels?: string[];
      datasets: {
        data: number[];
        backgroundColor: string[];
      }[];
    };
  };
  
  export type TrowData = {
    widgetRowTitle: string;
    cards: Tcard[];
  };
  
  export type TallCards = TrowData[];

export const allData:TallCards = [
  {
    
    widgetRowTitle: "CSPM Executive Dashboard",
    cards: [
      {
        id:"1",
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
        id:"2",
        title: "Cloud accounts risk assessment",
        data: [
          { label: "Failed", value: 29, color: "#FF0000" },
          { label: "Warning", value: 34, color: "#00FF00" },
          { label: "Not available", value: 12, color: "#FFFF00" },
          { label: "Passed", value: 2, color: "#808080" },
        ],
        chartData: {
          labels: ["Connected", "Not Connected"],
          datasets: [
            {
              data: [29, 34, 12, 2],
              backgroundColor: ["#FF0000", "#00FF00", "#FFFF00", "#808080"],
            },
          ],
        },
      },
      {
        id:"3",
        title: "Cloud accounts risk assessment",
        data:[],
        chartData: {
          labels: ["Connected", "Not Connected"],
          datasets: [
            {
              data: [29, 34, 12, 2],
              backgroundColor: ["#FF0000", "#00FF00", "#FFFF00", "#808080"],
            },
          ],
        },
      },
    ],
  },
];
