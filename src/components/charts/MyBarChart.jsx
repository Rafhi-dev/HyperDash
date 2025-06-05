// src/components/MyBarChart.jsx (atau path yang sesuai)
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, // Diubah dari LineElement dan PointElement
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'; // Menggunakan Bar component

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement, // Daftarkan BarElement
  Title,
  Tooltip,
  Legend
);

// Helper function to ensure color has full opacity for borders, or create a slightly darker version
// For simplicity, this example will just use the provided color or a default.
// A more advanced version could be:
// const toBorderColor = (colorString, darkenFactor = 0.8) => { ... }

const MyBarChart = ({
  labels, // Required: Array of strings for x-axis labels
  datasetsConfig, // Required: Array of objects: { label: string, data: number[], color: string (for backgroundColor), borderColor?: string, borderWidth?: number }
  titleText,
  xAxisLabel,
  yAxisLabel,
  yTicksCallback,
  tooltipLabelCallback,
  legendPosition = 'top',
  beginAtZero = true,
  indexAxis = 'x', // 'x' untuk bar vertikal (default), 'y' untuk bar horizontal
  customOptions, // For advanced overrides
  containerClassName,
  chartHeight = '40vh',
  minChartHeight = '100px',
}) => {
  const defaultChartData = {
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    datasets: [
      {
        label: 'Dataset Contoh Bar',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Warna default untuk bar
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const generatedDatasets = datasetsConfig && labels
    ? datasetsConfig.map(ds => ({
        label: ds.label,
        data: ds.data,
        backgroundColor: ds.color, // `color` dari config menjadi backgroundColor
        borderColor: ds.borderColor || ds.color, // Jika borderColor tidak ada, gunakan warna utama (atau variasinya)
        borderWidth: ds.borderWidth === undefined ? 1 : ds.borderWidth,
      }))
    : defaultChartData.datasets;

  const dataToRender = {
    labels: labels || defaultChartData.labels,
    datasets: generatedDatasets,
  };

  const defaultOptions = {
    indexAxis: indexAxis, // Memungkinkan bar horizontal jika 'y'
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: legendPosition,
        labels: { color: '#333', font: { size: 12 } }
      },
      title: {
        display: !!titleText,
        text: titleText || 'Bar Chart',
        color: '#333',
        font: { size: 16, weight: 'bold' }
      },
      tooltip: {
        mode: 'index', // Baik untuk grouped bar charts
        intersect: false,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        callbacks: {},
      }
    },
    scales: {
      y: { // Untuk indexAxis 'x' (bar vertikal), ini adalah sumbu Y
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
      x: { // Untuk indexAxis 'x' (bar vertikal), ini adalah sumbu X
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
    interaction: { // Baik untuk grouped bar charts
      mode: 'index',
      intersect: false,
    },
  };
  
  // Menyesuaikan label sumbu jika indexAxis adalah 'y' (bar horizontal)
  if (indexAxis === 'y') {
    // Sumbu X menjadi sumbu nilai, Sumbu Y menjadi sumbu kategori
    defaultOptions.scales.x.title.text = yAxisLabel; // Label nilai (sebelumnya yAxisLabel)
    defaultOptions.scales.x.title.display = !!yAxisLabel;
    defaultOptions.scales.y.title.text = xAxisLabel; // Label kategori (sebelumnya xAxisLabel)
    defaultOptions.scales.y.title.display = !!xAxisLabel;
    if (yTicksCallback) { // yTicksCallback sekarang untuk sumbu nilai (X)
        defaultOptions.scales.x.ticks.callback = yTicksCallback;
    }
  } else { // indexAxis 'x'
    if (yTicksCallback) { // yTicksCallback untuk sumbu nilai (Y)
        defaultOptions.scales.y.ticks.callback = yTicksCallback;
    }
  }


  if (tooltipLabelCallback && defaultOptions.plugins.tooltip.callbacks) {
    defaultOptions.plugins.tooltip.callbacks.label = tooltipLabelCallback;
  }
  
  const isObject = (item) => (item && typeof item === 'object' && !Array.isArray(item));
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

  const optionsToRender = customOptions ? mergeDeep(defaultOptions, customOptions) : defaultOptions;

  const baseContainerClasses = "bg-white p-4 rounded-lg shadow";
  const defaultResponsiveWidthClasses = "w-full md:w-3/4 lg:w-1/2 mx-auto";
  const finalContainerClasses = `${baseContainerClasses} ${containerClassName || defaultResponsiveWidthClasses}`;

  return (
    <div className={finalContainerClasses}>
      <div style={{ position: 'relative', height: chartHeight, minHeight: minChartHeight }}>
        <Bar options={optionsToRender} data={dataToRender} /> {/* Menggunakan Bar component */}
      </div>
    </div>
  );
};

export default MyBarChart;