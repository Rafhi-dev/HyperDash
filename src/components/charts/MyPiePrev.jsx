// src/pages/MyPiePrev.jsx (atau path yang sesuai)
import MyPieChart from './MyPieChart'; // Sesuaikan path jika perlu

function MyPiePrev() {
  // Data untuk Pie Chart: Distribusi Pengguna OS
  const osLabels = ['Windows', 'MacOS', 'Linux', 'Mobile (Android/iOS)', 'Lainnya'];
  const osData = [450, 250, 150, 350, 50];
  const osBackgroundColors = [
    'rgba(54, 162, 235, 0.8)', // Biru
    'rgba(150, 150, 150, 0.8)', // Abu-abu
    'rgba(255, 206, 86, 0.8)', // Kuning
    'rgba(75, 192, 192, 0.8)', // Teal
    'rgba(255, 159, 64, 0.8)', // Oranye
  ];

  // Data untuk Doughnut Chart: Alokasi Budget
  const budgetLabels = ['Marketing', 'Operasional', 'Pengembangan', 'Sales'];
  const budgetData = [3000, 5000, 4500, 2500];
  // Akan menggunakan warna default karena backgroundColors tidak disediakan

  const customTooltipForBudget = (context) => {
    let label = context.label || '';
    if (label) {
      label += ': ';
    }
    if (context.parsed !== null) {
      label += `Rp ${context.parsed.toLocaleString('id-ID')}`;
      const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
      const percentage = total > 0 ? ((context.parsed / total) * 100).toFixed(1) : 0;
      label += ` (${percentage}%)`;
    }
    return label;
  };

  return (
    <div className="p-6 space-y-12">
      <h1 className="text-2xl pb-4 md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Pie & Doughnut Chart Sample
      </h1>

      {/* Baris Pertama: Pie Chart Distribusi OS & Chart Default */}
      <section className="md:flex md:gap-8 space-y-12 md:space-y-0">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Chart Default (Pie)
          </h2>
          <MyPieChart
            titleText="Pie Chart Bawaan"
            containerClassName="w-full" // Menyesuaikan lebar kontainer
            chartHeight="300px"
            minChartHeight="280px"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Distribusi Pengguna OS (Pie)
          </h2>
          <MyPieChart
            labels={osLabels}
            data={osData}
            backgroundColors={osBackgroundColors}
            datasetLabel="Jumlah Pengguna"
            titleText="Distribusi Pengguna Sistem Operasi"
            legendPosition="right"
            containerClassName="w-full"
            chartHeight="300px"
            minChartHeight="280px"
          />
        </div>
      </section>

      {/* Baris Kedua: Doughnut Chart Alokasi Budget */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 my-8 text-center">
          Alokasi Budget Bulanan (Doughnut)
        </h2>
        <div className="bg-purple-50 p-4 rounded-lg">
           <MyPieChart
            labels={budgetLabels}
            data={budgetData}
            datasetLabel="Alokasi (Rp)"
            titleText="Alokasi Budget Bulanan"
            cutout="60%" // Membuatnya menjadi Doughnut Chart
            legendPosition="bottom"
            tooltipLabelCallback={customTooltipForBudget}
            containerClassName="w-full max-w-md mx-auto" // Contoh ukuran kontainer berbeda
            chartHeight="350px"
            minChartHeight="300px"
            customOptions={{
              plugins: {
                title: {
                  font: { size: 20 } // Ukuran font judul lebih besar
                }
              }
            }}
          />
        </div>
      </section>
      
      <p className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} HyperDash
      </p>
    </div>
  );
}

export default MyPiePrev;