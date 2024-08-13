export const cardData = [
  {
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
          data: [29,34,12,2],
          backgroundColor: ["#FF0000", "#00FF00","#FFFF00","#808080"],
        },
      ],
    },
  },
  
  
];
