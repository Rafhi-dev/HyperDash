import React from 'react';
import LineChart from './LineChart'; // Sesuaikan path jika perlu

function PreviewChart() {
  // Contoh data: array objek dengan properti x dan y
  const chartData = [
    { x: 0, y: 20 },
    { x: 1, y: 45 },
    { x: 2, y: 30 },
    { x: 3, y: 50 },
    { x: 4, y: 70 },
    { x: 5, y: 60 },
    { x: 6, y: 50 },
  ];

  const chartData2 = [
    { x: 10, y: 5 },
    { x: 20, y: 15 },
    { x: 30, y: 10 },
    { x: 40, y: 25 },
    { x: 50, y: 20 },
  ];


  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-2xl font-bold text-center">Contoh Line Chart</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2">Chart 1 (Default)</h2>
        <LineChart data={chartData} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Chart 2 (Custom Style & Size)</h2>
        <LineChart
          data={chartData2}
          width={500}
          height={250}
          lineColor="stroke-green-600"
          pointColor="fill-green-600"
        />
      </div>

       <div>
        <h2 className="text-xl font-semibold mb-2">Chart (Data Kurang)</h2>
        <LineChart data={[{x:1, y:10}]} />
      </div>
    </div>
  );
}

export default PreviewChart