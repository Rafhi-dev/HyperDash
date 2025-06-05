import MyBarChart from "./MyBarChart";

// src/pages/MyBarPrev.jsx (atau path yang sesuai)
MyBarChart

function MyBarPrev() {
  const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const productLabels = ['Produk A', 'Produk B', 'Produk C', 'Produk D'];

  // Data untuk chart pendapatan (contoh Bar Chart)
  const revenueBarDatasets = [
    {
      label: 'Pendapatan 2024 (dalam Juta Rp)',
      data: [150, 165, 140, 180, 200, 190, 210, 230, 220, 240, 250, 270],
      color: 'rgba(75, 192, 192, 0.7)', // Warna bar utama (dengan sedikit transparansi)
      borderColor: 'rgba(75, 192, 192, 1)', // Warna border bar
      borderWidth: 1,
    },
  ];
  
  // Data untuk chart perbandingan penjualan produk (contoh Bar Chart Horizontal)
  const productSalesDatasets = [
    {
      label: 'Penjualan Unit Kuartal Ini',
      data: [350, 450, 300, 500],
      color: 'rgba(255, 159, 64, 0.7)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
    {
      label: 'Target Penjualan Unit',
      data: [400, 420, 350, 480],
      color: 'rgba(153, 102, 255, 0.7)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    }
  ];


  // Callback untuk format tooltip
  const barTooltipCallback = (context) => {
    let label = context.dataset.label || '';
    if (label) { label += ': '; }
    // Untuk bar horizontal, nilai ada di context.parsed.x
    // Untuk bar vertikal, nilai ada di context.parsed.y
    const value = context.chart.options.indexAxis === 'y' ? context.parsed.x : context.parsed.y;
    if (value !== null) { 
      label += (context.dataset.label.includes('Juta Rp') ? 'Rp ' : '') + value + (context.dataset.label.includes('Juta Rp') ? ' Juta' : ' Unit');
    }
    return label;
  };

  // Callback untuk format ticks sumbu nilai (Y untuk vertikal, X untuk horizontal)
  const valueAxisTicksCallback = (value) => (value >= 1000000 ? `${value / 1000000} Jt` : (value >=1000 ? `${value/1000} K` : value) );


  return (
    <div className="p-6 space-y-12">
      <h1 className="text-2xl pb-4 md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Bar Chart Sample
      </h1>

      {/* Baris Pertama: Analisis Pendapatan (Vertikal) & Chart Default */}
      <section className="md:flex md:gap-8 space-y-12 md:space-y-0">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Chart Default (Bar)
          </h2>
          <MyBarChart
            titleText="Bar Chart Bawaan"
            containerClassName="w-full"
            chartHeight="45vh"
            minChartHeight="320px"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Analisis Pendapatan (Bar Vertikal)
          </h2>
          <MyBarChart
            labels={monthlyLabels}
            datasetsConfig={revenueBarDatasets}
            titleText="Grafik Pendapatan Tahunan"
            xAxisLabel="Bulan"
            yAxisLabel="Pendapatan (Juta Rp)"
            tooltipLabelCallback={barTooltipCallback}
            yTicksCallback={(value) => `Rp ${value}`} // Sumbu Y adalah sumbu nilai
            beginAtZero={true}
            containerClassName="w-full"
            chartHeight="45vh"
            minChartHeight="320px"
          />
        </div>
      </section>

      {/* Baris Kedua: Perbandingan Penjualan Produk (Horizontal) */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 my-8 text-center">
          Perbandingan Penjualan Produk (Bar Horizontal)
        </h2>
        <div className="bg-indigo-50 p-2 rounded-lg">
           <MyBarChart
            labels={productLabels} // Kategori produk di sumbu Y
            datasetsConfig={productSalesDatasets}
            titleText="Penjualan Unit Produk (Kuartal Ini)"
            indexAxis="y" // Membuat chart menjadi bar horizontal
            xAxisLabel="Jumlah Unit Terjual" // Sumbu X adalah sumbu nilai
            yAxisLabel="Produk" // Sumbu Y adalah sumbu kategori
            tooltipLabelCallback={barTooltipCallback}
            yTicksCallback={valueAxisTicksCallback} // Untuk sumbu nilai (sekarang sumbu X)
            legendPosition="bottom"
            containerClassName="w-full"
            chartHeight="55vh" // Mungkin butuh lebih tinggi untuk bar horizontal
            minChartHeight="400px"
            customOptions={{ // Kustomisasi tambahan jika perlu
                scales: {
                    x: { // Karena indexAxis='y', sumbu 'x' adalah sumbu nilai
                        ticks: {
                            stepSize: 50 // Contoh kustomisasi ticks
                        }
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

export default MyBarPrev;