import { Doughnut } from "react-chartjs-2";
import { Tcard } from "../utils/CardsData";
import { useStore } from "../store"; 

interface CardsProps {
  cardData: Tcard;
  rowIndex: number; 
}

const Cards = ({ cardData, rowIndex }: CardsProps) => {
  const removeCard = useStore((state) => state.removeCard);

  const defaultChartData = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-96 min-h-60 flex flex-col relative z-10">
      <button
        className="absolute top-2 right-2 text-gray-500 text-lg"
        onClick={() => removeCard(rowIndex, cardData.id)} 
      >
        &times;
      </button>
      <h3 className="text-lg font-semibold mb-4">{cardData.title}</h3>
      {cardData.data?.length ? (
        <div className="flex items-center justify-between">
          <div className="flex justify-center mb-4">
            <div style={{ width: "150px", height: "150px" }}>
              <Doughnut
                data={cardData?.chartData || defaultChartData}
                options={chartOptions}
              />
            </div>
          </div>
          <div className="mt-2 space-y-2">
            {cardData.data.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span
                  className="block w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span>
                  {item.label} ({item.value})
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-grow items-center justify-center">
          <div className="text-gray-500 pb-12">No graph data visible</div>
        </div>
      )}
    </div>
  );
};

export default Cards;
