import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registrasi komponen-komponen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ H = false, chartData, title }) => {
  let scaleHorizontal = {
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  let scaleVertical = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  let pluginChart = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
        },
      },
    },
  };

  const horizontal = {
    indexAxis: "y",
    responsive: true,
    ...pluginChart,
    ...scaleHorizontal,
  };

  const vertical = {
    indexAxis: "x",
    responsive: true,
    ...pluginChart,
    ...scaleVertical,
  };

  return <Bar options={H ? horizontal : vertical} data={chartData} />;
};

export default BarChart;
