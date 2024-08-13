import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Cards from "./Cards";
import AddCard from "./AddCard";
import { TrowData } from "../utils/CardsData";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircularRow({ rowData }: { rowData: TrowData }) {
  const rowIndex = 0;

  return (
    <div className="mx-6 w-content mb-5">
      <div>
        <h2 className="font-medium">{rowData.widgetRowTitle}</h2>
      </div>
      <div className="flex flex-wrap items-center gap-5 align-middle md:justify-start justify-center">
        {rowData.cards.map((card) => (
          <Cards
            key={card.id}
            cardData={card}
            rowIndex={rowIndex}
          />
        ))}
        <AddCard rowIndex={rowIndex} />
      </div>
    </div>
  );
}
