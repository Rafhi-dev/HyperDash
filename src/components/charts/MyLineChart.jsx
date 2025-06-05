// src/components/MyLineChart.jsx (atau path yang sesuai)
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MyLineChart = ({
  chartData,
  chartOptions,
  containerClassName,
  chartHeight = '40vh',
  minChartHeight = '100px'
}) => {
  const defaultData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Dataset Contoh',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: 'Line Chart',
        color: '#333',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        ticks: {
          color: '#555',
          font: {
            size: 10
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        ticks: {
          color: '#555',
          font: {
            size: 10
          }
        }
      }
    },
  };

  const dataToRender = chartData || defaultData;

  // Smart merging options: prioritizes explicit responsive/maintainAspectRatio from chartOptions
  const optionsToRender = {
    ...defaultOptions,
    ...chartOptions, // chartOptions bisa menimpa apa pun dari defaultOptions
    responsive: (chartOptions && typeof chartOptions.responsive !== 'undefined')
      ? chartOptions.responsive
      : defaultOptions.responsive,
    maintainAspectRatio: (chartOptions && typeof chartOptions.maintainAspectRatio !== 'undefined')
      ? chartOptions.maintainAspectRatio
      : defaultOptions.maintainAspectRatio,
    plugins: { // Deep merge untuk plugins
      ...defaultOptions.plugins,
      ...(chartOptions && chartOptions.plugins),
      legend: {
        ...defaultOptions.plugins.legend,
        ...(chartOptions && chartOptions.plugins && chartOptions.plugins.legend),
      },
      title: {
        ...defaultOptions.plugins.title,
        ...(chartOptions && chartOptions.plugins && chartOptions.plugins.title),
      },
      tooltip: {
        ...defaultOptions.plugins.tooltip,
        ...(chartOptions && chartOptions.plugins && chartOptions.plugins.tooltip),
      }
    },
    scales: { // Deep merge untuk scales
      ...defaultOptions.scales,
      ...(chartOptions && chartOptions.scales),
      x: {
        ...defaultOptions.scales.x,
        ...(chartOptions && chartOptions.scales && chartOptions.scales.x),
      },
      y: {
        ...defaultOptions.scales.y,
        ...(chartOptions && chartOptions.scales && chartOptions.scales.y),
      }
    }
  };

  const baseContainerClasses = "bg-white p-4 rounded-lg shadow";
  const defaultResponsiveWidthClasses = "w-full md:w-3/4 lg:w-1/2 mx-auto";
  const finalContainerClasses = `${baseContainerClasses} ${containerClassName || defaultResponsiveWidthClasses}`;

  return (
    <div className={finalContainerClasses}>
      <div style={{ position: 'relative', height: chartHeight, minHeight: minChartHeight }}>
        <Line options={optionsToRender} data={dataToRender} />
      </div>
    </div>
  );
};

export default MyLineChart;