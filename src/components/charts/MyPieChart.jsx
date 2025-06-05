// src/components/MyPieChart.jsx (atau path yang sesuai)
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement, // Untuk Pie dan Doughnut charts
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Pie } from 'react-chartjs-2'; // Menggunakan Pie component

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const DEFAULT_COLORS = [
  'rgba(255, 99, 132, 0.8)',
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(100, 255, 100, 0.8)',
  'rgba(255, 100, 100, 0.8)',
];

const MyPieChart = ({
  labels, // Required: Array of strings for slice labels
  data,   // Required: Array of numbers for slice values
  datasetLabel = 'Dataset', // Optional: Label for the dataset in tooltips/legend
  backgroundColors, // Optional: Array of color strings for slices
  borderColors,     // Optional: Array of color strings for slice borders
  borderWidth = 1,  // Optional: Border width for slices
  titleText,
  legendPosition = 'top',
  tooltipLabelCallback,
  cutout, // Optional: string (e.g., '50%') or number for doughnut chart
  customOptions,
  containerClassName,
  chartHeight = '40vh', // Pie charts often look better with similar width/height
  minChartHeight = '250px',
}) => {
  const defaultChartDataStructure = {
    labels: ['Bagian 1', 'Bagian 2', 'Bagian 3'],
    datasets: [
      {
        label: 'Dataset Contoh Pie',
        data: [30, 50, 20],
        backgroundColor: DEFAULT_COLORS.slice(0, 3),
        borderColor: DEFAULT_COLORS.slice(0, 3).map(color => color.replace('0.8', '1')), // More opaque border
        borderWidth: 1,
      },
    ],
  };

  const dataToRender = {
    labels: labels || defaultChartDataStructure.labels,
    datasets: [
      {
        label: datasetLabel,
        data: data || defaultChartDataStructure.datasets[0].data,
        backgroundColor: backgroundColors || DEFAULT_COLORS.slice(0, (data || defaultChartDataStructure.datasets[0].data).length),
        borderColor: borderColors || (backgroundColors || DEFAULT_COLORS.slice(0, (data || defaultChartDataStructure.datasets[0].data).length)).map(color => color.replace(/,\s*\d(\.\d+)?\)$/, ', 1)')), // Make border fully opaque
        borderWidth: borderWidth,
        cutout: cutout, // For doughnut chart
      },
    ],
  };

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false, // Set to false to control height independently, true might be better for pie if width is also controlled
    plugins: {
      legend: {
        position: legendPosition,
        labels: { color: '#333', font: { size: 12 } }
      },
      title: {
        display: !!titleText,
        text: titleText || 'Pie Chart',
        color: '#333',
        font: { size: 16, weight: 'bold' }
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        callbacks: {
          // Default tooltip: shows label and value. Percentage can be added.
          label: tooltipLabelCallback || function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed;
              // Calculate percentage
              const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
              const percentage = total > 0 ? ((context.parsed / total) * 100).toFixed(1) : 0;
              label += ` (${percentage}%)`;
            }
            return label;
          }
        },
      }
    },
    // Scales are not used for Pie charts
  };
  
  if (cutout && dataToRender.datasets[0]) { // Chart.js v3+ dataset-level cutout
      dataToRender.datasets[0].cutout = cutout;
  } else if (cutout && defaultOptions) { // Chart.js v2 style or root-level option
      defaultOptions.cutoutPercentage = parseFloat(cutout); // older versions if string '50%'
      if (typeof cutout === 'string' && cutout.endsWith('%')) {
        defaultOptions.cutout = cutout; // Chart.js v4 might prefer this at root for older compatibility
      }
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
  // Pie charts often look better with a more constrained width if height is fixed, or if aspect ratio is maintained.
  // Defaulting to a common responsive width here.
  const defaultResponsiveWidthClasses = "w-full md:w-3/4 lg:w-1/2 mx-auto"; 
  const finalContainerClasses = `${baseContainerClasses} ${containerClassName || defaultResponsiveWidthClasses}`;

  return (
    <div className={finalContainerClasses}>
      <div style={{ position: 'relative', height: chartHeight, minHeight: minChartHeight, width: '100%' }}> {/* Ensure width for aspect ratio */}
        <Pie options={optionsToRender} data={dataToRender} />
      </div>
    </div>
  );
};

export default MyPieChart;