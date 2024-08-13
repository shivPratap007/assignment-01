import { Doughnut } from "react-chartjs-2";

type Tdata = {
  label: string;
  value: number;
  color: string;
}[];

type TchartData = {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
};

const Cards = ({
  title,
  data,
  chartData,
}: {
  title: string;
  data: Tdata;
  chartData: TchartData;
}) => {
  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Disable the built-in legend
      },
    },
  };
  return (
    
    <div className="bg-white shadow-lg  rounded-lg p-4 w-96">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex  items-center justify-between">
        <div className="flex justify-center mb-4">
          <div style={{ width: "150px", height: "150px" }}>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="mt-2 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span
                className={`block w-3 h-3 rounded-full bg-${item.color} `}
                style={{ backgroundColor: item.color }}
              ></span>
              <span>
                {item.label} ({item.value})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
