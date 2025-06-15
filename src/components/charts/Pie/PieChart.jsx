import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

// Registrasi elemen yang dibutuhkan untuk Pie Chart
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const PieChart = ({ chartData, title }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 10,
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
