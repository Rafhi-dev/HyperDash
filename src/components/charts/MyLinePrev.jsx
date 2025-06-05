import MyLineChart from './MyLineChart'; // Pastikan path ini benar

function MyLinePrev() {
  const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const weeklyLabels = ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'];

  // Data untuk chart pendapatan
  const revenueDatasets = [
    {
      label: 'Pendapatan 2024 (dalam Juta Rp)',
      data: [150, 165, 140, 180, 200, 190, 210, 230, 220, 240, 250, 270],
      color: 'rgba(75, 192, 192, 1)', // Warna garis utama
      fill: true, // Area di bawah garis diisi warna
      tension: 0.4, // Kelengkungan garis
      // Opsi styling titik (opsional, akan menggunakan warna utama jika tidak dispesifikkan)
      // pointColor: 'rgba(75, 192, 192, 1)',
      // pointBorderColor: '#fff',
      // pointHoverRadius: 7,
      // pointHoverBgColor: '#fff',
      // pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
    },
  ];

  // Data untuk chart pengunjung
  const visitorDatasets = [
    {
      label: 'Pengunjung Website A',
      data: [1200, 1900, 3000, 2000],
      color: 'rgba(255, 99, 132, 1)',
      fill: 'start', // Bisa juga boolean atau 'origin', 'end'
      tension: 0.3,
    },
    {
      label: 'Pengunjung Website B',
      data: [800, 1500, 2800, 4500],
      color: 'rgba(54, 162, 235, 1)',
      fill: 'start',
      tension: 0.3,
    },
  ];

  // Callback untuk format tooltip pendapatan
  const revenueTooltipCallback = (context) => {
    let label = context.dataset.label || '';
    if (label) { label += ': '; }
    if (context.parsed.y !== null) { label += 'Rp ' + context.parsed.y + ' Juta'; }
    return label;
  };

  // Callback untuk format ticks sumbu Y pendapatan
  const revenueYTicksCallback = (value) => 'Rp ' + value;

  return (
    <div className="p-6 space-y-12">
      <h1 className="text-2xl pb-4 md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Line Chart Sample (Refactored)
      </h1>

      {/* Baris Pertama: Analisis Pendapatan dan Chart Default berdampingan */}
      <section className="md:flex md:gap-8 space-y-12 md:space-y-0">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Chart Default (Contoh)
          </h2>
          <MyLineChart
            // Tidak ada labels atau datasetsConfig, jadi akan menggunakan default internal
            titleText="Line Chart Bawaan"
            containerClassName="w-full" // Menimpa default width responsif
            chartHeight="45vh"
            minChartHeight="320px"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Analisis Pendapatan
          </h2>
          <MyLineChart
            labels={monthlyLabels}
            datasetsConfig={revenueDatasets}
            titleText="Grafik Pendapatan Tahunan"
            xAxisLabel="Bulan"
            yAxisLabel="Pendapatan (Juta Rp)"
            yTicksCallback={revenueYTicksCallback}
            tooltipLabelCallback={revenueTooltipCallback}
            beginAtZero={false} // Untuk pendapatan, mungkin tidak mulai dari nol
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
          <div className="p-2 rounded-lg">
            <MyLineChart
              labels={weeklyLabels}
              datasetsConfig={visitorDatasets} // Menggunakan kedua dataset
              titleText="Data Pengunjung Website A & B"
              legendPosition="bottom" // Mengubah posisi legenda
              containerClassName="w-full"
              chartHeight="45vh"
              minChartHeight="320px"
            />
          </div>
          <div className="p-2 rounded-lg">
            <MyLineChart
              labels={weeklyLabels}
              datasetsConfig={[visitorDatasets[0]]} // Hanya data Website A
              titleText="Data Pengunjung Website A Saja"
              legendPosition="bottom"
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