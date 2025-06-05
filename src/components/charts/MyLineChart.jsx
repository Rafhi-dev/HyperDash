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

// Fungsi pembantu untuk mengubah warna menjadi rgba dengan opacity background yang diinginkan
const toRgba = (colorString, alpha = 0.2) => {
  if (colorString.startsWith('rgba')) {
    return colorString.replace(/,\s*\d(\.\d+)?\)$/, `, ${alpha})`);
  } else if (colorString.startsWith('rgb')) {
    return colorString.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
  } else if (colorString.startsWith('#')) {
    const hex = colorString.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  // Fallback untuk warna nama atau format lain (kurang andal untuk auto-alpha)
  // Untuk kesederhanaan, contoh ini hanya mengembalikan default jika konversi sulit
  console.warn(`Tidak dapat mengonversi warna "${colorString}" ke RGBA untuk background. Menggunakan default.`);
  return `rgba(0, 0, 0, ${alpha})`;
};

const MyLineChart = ({
  labels, // Wajib: Array string untuk label sumbu x
  datasetsConfig, // Wajib: Array objek: { label: string, data: number[], color: string, fill?: boolean | string, tension?: number, pointColor?: string, pointBorderColor?: string, pointHoverRadius?: number, pointHoverBgColor?: string, pointHoverBorderColor?: string }
  titleText,
  xAxisLabel,
  yAxisLabel,
  yTicksCallback,
  tooltipLabelCallback,
  legendPosition = 'top',
  beginAtZero = true,
  chartOptions: customOptions, // Untuk override lanjutan
  containerClassName,
  chartHeight = '40vh',
  minChartHeight = '100px',
}) => {
  const defaultChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Dataset Contoh',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const generatedDatasets = datasetsConfig && labels
    ? datasetsConfig.map(ds => ({
        label: ds.label,
        data: ds.data,
        borderColor: ds.color,
        backgroundColor: toRgba(ds.color, ds.fill === false ? 0 : 0.2), // jika fill false, opacity bg 0
        fill: ds.fill === undefined ? true : ds.fill, // Default fill true
        tension: ds.tension === undefined ? 0.1 : ds.tension, // Default tension
        pointBackgroundColor: ds.pointColor || ds.color,
        pointBorderColor: ds.pointBorderColor || '#fff',
        pointHoverRadius: ds.pointHoverRadius || 7,
        pointHoverBackgroundColor: ds.pointHoverBgColor || '#fff',
        pointHoverBorderColor: ds.pointHoverBorderColor || ds.color,
      }))
    : defaultChartData.datasets;

  const dataToRender = {
    labels: labels || defaultChartData.labels,
    datasets: generatedDatasets,
  };

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: legendPosition, // 'top', 'bottom', 'left', 'right'
        labels: { color: '#333', font: { size: 12 } }
      },
      title: {
        display: !!titleText, // Tampilkan hanya jika titleText diisi
        text: titleText || 'Line Chart',
        color: '#333',
        font: { size: 16, weight: 'bold' }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        callbacks: {}, // Akan diisi oleh tooltipLabelCallback jika ada
      }
    },
    scales: {
      y: {
        beginAtZero: beginAtZero,
        grid: { color: 'rgba(200, 200, 200, 0.3)' },
        ticks: { color: '#555', font: { size: 10 } },
        title: {
          display: !!yAxisLabel,
          text: yAxisLabel,
          color: '#444',
          font: { size: 12, weight: 'medium'}
        }
      },
      x: {
        grid: { color: 'rgba(200, 200, 200, 0.3)' },
        ticks: { color: '#555', font: { size: 10 } },
        title: {
          display: !!xAxisLabel,
          text: xAxisLabel,
          color: '#444',
          font: { size: 12, weight: 'medium'}
        }
      }
    },
    interaction: { // Default yang baik untuk banyak dataset
      mode: 'index',
      intersect: false,
    },
  };

  if (tooltipLabelCallback && defaultOptions.plugins.tooltip.callbacks) {
    defaultOptions.plugins.tooltip.callbacks.label = tooltipLabelCallback;
  }
  if (yTicksCallback && defaultOptions.scales.y.ticks) {
    defaultOptions.scales.y.ticks.callback = yTicksCallback;
  }
  
  // Strategi merge deep yang sederhana: customOptions bisa override apapun
  // Untuk kebutuhan lebih kompleks, bisa pakai lodash.merge.
  const mergeDeep = (target, source) => {
    const output = { ...target };
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
          if (!(key in target))
            Object.assign(output, { [key]: source[key] });
          else
            output[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }
  const isObject = (item) => (item && typeof item === 'object' && !Array.isArray(item));

  const optionsToRender = customOptions ? mergeDeep(defaultOptions, customOptions) : defaultOptions;


  const baseContainerClasses = "bg-white p-4 rounded-lg shadow";
  const defaultResponsiveWidthClasses = "w-full md:w-3/4 lg:w-1/2 mx-auto"; // Default jika tidak ada class yang diberikan
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