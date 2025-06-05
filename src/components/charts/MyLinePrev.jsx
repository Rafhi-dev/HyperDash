import MyLineChart from './MyLineChart';
MyLineChart

function MyLinePrev() {
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [
      {
        label: 'Pendapatan 2024 (dalam Juta Rp)',
        data: [150, 165, 140, 180, 200, 190, 210, 230, 220, 240, 250, 270],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const revenueOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Grafik Pendapatan Tahunan',
        font: { size: 18 }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) { label += ': '; }
            if (context.parsed.y !== null) { label += 'Rp ' + context.parsed.y + ' Juta'; }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: { display: true, text: 'Pendapatan (Juta Rp)' },
        ticks: { callback: function(value) { return 'Rp ' + value; } }
      },
      x: {
        title: { display: true, text: 'Bulan' }
      }
    }
  };

  const visitorData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
    datasets: [
      {
        label: 'Pengunjung Website A',
        data: [1200, 1900, 3000, 5000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        fill: 'start',
        tension: 0.3,
      },
      {
        label: 'Pengunjung Website B',
        data: [800, 1500, 2800, 4500],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        fill: 'start',
        tension: 0.3,
      },
    ],
  };

  const visitorOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Data Pengunjung Mingguan',
        font: { size: 18 }
      },
      legend: { position: 'bottom' }
    },
    interaction: { mode: 'index', intersect: false },
  };

  return (
    // Container ini akan mengisi <main> dari MainLayout.jsx
    // Padding p-6 dari MainLayout sudah ada jika Outlet adalah children langsung dari main.
    // Jika Outlet dibungkus div lagi di MainLayout, maka padding mungkin perlu di sini.
    // Untuk contoh ini, kita asumsikan MyLinePrev adalah konten utama yang butuh padding sendiri.
    <div className="p-6 space-y-12"> {/* Padding untuk konten halaman */}
      <h1 className="text-2xl pb-4 md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Line Chart Sample
      </h1>

      {/* Baris Pertama: Analisis Pendapatan dan Chart Default berdampingan */}
      <section className="md:flex md:gap-8 space-y-12 md:space-y-0">
                <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Chart Default (Contoh)
          </h2>
          <MyLineChart
            containerClassName="w-full"
            chartHeight="45vh"
            minChartHeight="320px"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Analisis Pendapatan
          </h2>
          <MyLineChart
            chartData={revenueData}
            chartOptions={revenueOptions}
            containerClassName="w-full"
            chartHeight="45vh"
            minChartHeight="320px"
          />
        </div>

      </section>

      {/* Baris Kedua: Perbandingan Pengunjung Website */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Perbandingan Pengunjung Website
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Menggunakan grid untuk konsistensi, bukan flex-1 manual */}
          <div className="bg-blue-50 p-2 rounded-lg">
            <MyLineChart
              chartData={visitorData}
              chartOptions={{
                ...visitorOptions,
                plugins: {
                  ...visitorOptions.plugins,
                  title: { ...visitorOptions.plugins.title, text: "Data Website A & B" }
                }
              }}
              containerClassName="w-full"
              chartHeight="45vh"
              minChartHeight="320px"
            />
          </div>
          <div className="bg-green-50 p-2 rounded-lg">
            <MyLineChart
              chartData={{ ...visitorData, datasets: [visitorData.datasets[0]] }} // Hanya data A
              chartOptions={{
                ...visitorOptions,
                plugins: {
                  ...visitorOptions.plugins,
                  title: { ...visitorOptions.plugins.title, text: "Data Website A Saja" }
                }
              }}
              containerClassName="w-full"
              chartHeight="45vh"
              minChartHeight="320px"
            />
          </div>
        </div>
      </section>

      <p className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} HyperDash
      </p>
    </div>
  );
}

export default MyLinePrev;