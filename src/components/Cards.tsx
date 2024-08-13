// Cards.tsx
import { Doughnut } from "react-chartjs-2";
import { Tcard } from "../utils/CardsData";

const Cards = ({ cardData }: { cardData: Tcard }) => {
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg p-4 w-96 min-h-60 flex flex-col">
      {/* Close button */}
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      
      <h3 className="text-lg font-semibold mb-4">{cardData.title}</h3>
      {cardData.data?.length ? (
        <div className="flex items-center justify-between">
          <div className="flex justify-center mb-4">
            <div style={{ width: "150px", height: "150px" }}>
              <Doughnut 
                data={cardData.chartData || { labels: [], datasets: [] }} 
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
