import React from 'react';

const LineChart = ({ data, width = 400, height = 200, lineColor = "stroke-blue-500", pointColor = "fill-blue-500" }) => {
  if (!data || data.length < 2) {
    return <div className="text-center text-gray-500">Data tidak cukup untuk menampilkan chart.</div>;
  }

  // Menentukan nilai maksimum dan minimum untuk skala
  const yMax = Math.max(...data.map(p => p.y));
  const yMin = Math.min(...data.map(p => p.y));
  const xMax = Math.max(...data.map(p => p.x));
  const xMin = Math.min(...data.map(p => p.x));

  // Padding untuk chart
  const padding = 30;

  // Fungsi untuk mengubah koordinat data ke koordinat SVG
  const getSvgX = (x) => padding + (x - xMin) / (xMax - xMin) * (width - 2 * padding);
  const getSvgY = (y) => height - padding - (y - yMin) / (yMax - yMin) * (height - 2 * padding);

  // Membuat path untuk garis
  const linePath = data
    .map((p, i) => {
      const x = getSvgX(p.x);
      const y = getSvgY(p.y);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  // Membuat titik-titik
  const points = data.map((p, i) => {
    const x = getSvgX(p.x);
    const y = getSvgY(p.y);
    return <circle key={i} cx={x} cy={y} r="3" className={pointColor} />;
  });

  // Membuat label sumbu Y (contoh sederhana)
  const yAxisLabels = [];
  const numYLabels = 5; // Jumlah label sumbu Y
  for (let i = 0; i <= numYLabels; i++) {
    const val = yMin + (yMax - yMin) * (i / numYLabels);
    const yPos = height - padding - (val - yMin) / (yMax - yMin) * (height - 2 * padding);
    yAxisLabels.push(
      <text
        key={`y-label-${i}`}
        x={padding - 5}
        y={yPos}
        className="text-xs fill-current text-gray-600"
        textAnchor="end"
        dominantBaseline="middle"
      >
        {val.toFixed(1)}
      </text>
    );
  }

  // Membuat label sumbu X (contoh sederhana)
  const xAxisLabels = [];
  const numXLabels = Math.min(data.length, 5); // Jumlah label sumbu X, maksimal 5 atau jumlah data
  for (let i = 0; i < numXLabels; i++) {
    const dataIndex = Math.floor((data.length -1) / (numXLabels -1) * i);
    if (dataIndex >= data.length) continue; // Hindari out of bounds
    const val = data[dataIndex].x;
    const xPos = padding + (val - xMin) / (xMax - xMin) * (width - 2 * padding);
    xAxisLabels.push(
      <text
        key={`x-label-${i}`}
        x={xPos}
        y={height - padding + 15}
        className="text-xs fill-current text-gray-600"
        textAnchor="middle"
      >
        {val.toFixed(1)}
      </text>
    );
  }


  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Sumbu Y */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          className="stroke-gray-300"
        />
        {yAxisLabels}

        {/* Sumbu X */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          className="stroke-gray-300"
        />
        {xAxisLabels}

        {/* Garis Chart */}
        <path d={linePath} className={`fill-none stroke-2 ${lineColor}`} />

        {/* Titik-titik Data */}
        {points}
      </svg>
    </div>
  );
};

export default LineChart;