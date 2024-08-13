import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Cards from "./Cards";
import { cardData } from "../utils/CardsData";
import AddCard from "./AddCard";

// Register the required components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircularRow() {
  return (
    <div className="mx-6 w-content">
      <div>
        <h2 className="font-medium">CSPM Executive Dashboard</h2>
      </div>
      <div className="flex flex-wrap items-center gap-5 align-middle justify-between">
        {cardData.map((card) => (
          <Cards
            key={card.title}
            title={card.title}
            data={card.data}
            chartData={card.chartData}
          />
        ))}
        <AddCard/>
      </div>
    </div>
  );
}
