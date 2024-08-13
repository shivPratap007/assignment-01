import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Cards from "./Cards";
import AddCard from "./AddCard";

// Register the required components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

type TCardData = {
  title: string;
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  chartData: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
};

type TrowData = {
  widgetRowTitle: string;
  cards: TCardData[];
};

export default function CircularRow({ rowData }: { rowData: TrowData }) {
  return (
    <div className="mx-6 w-content">
      <div>
        <h2 className="font-medium">{rowData.widgetRowTitle}</h2>
      </div>
      <div className="flex flex-wrap items-center gap-5 align-middle justify-between">
        {rowData.cards.map((card) => (
          <Cards
            key={card.title}
            title={card.title}
            data={card.data}
            chartData={card.chartData}
          />
        ))}
        <AddCard />
      </div>
    </div>
  );
}
