import { useCallback } from 'react'; // Ditambahkan untuk particlesInit
import Particles from "react-tsparticles"; // Ditambahkan
import { loadSlim } from "tsparticles-slim"; // Ditambahkan, atau loadFull jika Anda menggunakan tsparticles
import MyBarChart from "../../charts/MyBarChart";
import MyLineChart from "../../charts/MyLineChart";
import MyPieChart from "../../charts/MyPieChart";


const Dashboard1 = () => {
  // --- Inisialisasi Partikel ---
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // Anda dapat menginisialisasi instance tsParticles (engine) di sini, menambahkan bentuk khusus atau preset
    // Fungsi ini akan dipanggil sekali, mengabaikan render ulang komponen apa pun
    await loadSlim(engine); // Muat bundel slim, atau loadFull(engine) untuk bundel lengkap
  }, []);

  // --- Opsi Konfigurasi Partikel ---
  const particleOptions = {
    background: {
      // Tidak perlu warna di sini karena akan ditutupi oleh gradien
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push',
        },
        onHover: {
          enable: false,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff', // Warna partikel
      },
      links: {
        color: '#ffffff', // Warna garis antar partikel
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 250, // Jumlah partikel
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  // --- Data Contoh untuk Grafik ---

  // Grafik Garis: Data Penjualan Bulanan
  const lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
  const lineChartDatasets = [
    {
      label: 'Penjualan 2024 (dalam USD)',
      data: [12000, 19000, 15000, 21000, 18000, 24000],
      color: 'rgba(75, 192, 192, 1)',
      fill: true,
      tension: 0.3,
    },
    {
      label: 'Penjualan 2023 (dalam USD)',
      data: [10000, 17000, 13000, 19000, 16000, 20000],
      color: 'rgba(255, 99, 132, 1)',
      fill: false,
      tension: 0.3,
    },
  ];

  // Grafik Pie: Sumber Trafik
  const pieChartLabels = ['Pencarian Organik', 'Langsung', 'Rujukan', 'Media Sosial'];
  const pieChartData = [450, 250, 150, 100];
  const pieChartBackgroundColors = [
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
  ];
  const pieChartDatasetLabel = 'Volume Trafik';

  // Grafik Batang: Pendaftaran Pengguna Baru per Wilayah
  const barChartLabels = ['Amerika Utara', 'Eropa', 'Asia', 'Amerika Selatan', 'Afrika'];
  const barChartDatasets = [
    {
      label: 'Pengguna Baru Q2',
      data: [250, 180, 320, 120, 90],
      color: 'rgba(255, 159, 64, 0.7)',
      borderColor: 'rgba(255, 159, 64, 1)',
    },
  ];

  // Data Tabel: Pesanan Terbaru
  const recentOrders = [
    { id: 'ORD001', customer: 'Alice Wonderland', date: '2024-06-01', total: '$150.00', status: 'Dikirim', statusColor: 'green' },
    { id: 'ORD002', customer: 'Bob The Builder', date: '2024-06-01', total: '$275.50', status: 'Diproses', statusColor: 'blue' },
    { id: 'ORD003', customer: 'Charlie Brown', date: '2024-06-02', total: '$99.99', status: 'Terkirim', statusColor: 'teal' },
    { id: 'ORD004', customer: 'Diana Prince', date: '2024-06-03', total: '$450.00', status: 'Menunggu', statusColor: 'yellow' },
    { id: 'ORD005', customer: 'Edward Scissorhands', date: '2024-06-04', total: '$320.75', status: 'Dibatalkan', statusColor: 'red' },
  ];


  return (
    <div className="p-4 md:p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Bagian Header dengan Partikel */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-600 text-white rounded-lg shadow-xl overflow-hidden">
        <Particles
          id="tsparticles-dashboard1" // Berikan ID unik jika Anda memiliki beberapa instance di halaman yang sama
          init={particlesInit}
          // loaded={particlesLoaded} // Opsional
          options={particleOptions}
          className="absolute inset-0 z-0" // Membuat partikel sebagai latar belakang
        />
        <div className="relative z-10 p-6"> {/* Konten header harus memiliki z-index lebih tinggi */}
          <h1 className="text-2xl md:text-3xl font-bold">
            Greetings Sir.
          </h1>
          <p className="mt-2 opacity-90">
            Welcome to HyperDash, this is a simple dashboard template built with React and Tailwind CSS.
          </p>
          <p className="mt-1 text-xs opacity-70">v0.0.0-Dev</p>
        </div>
      </div>

      {/* --- Baris 1: Grafik Garis dan Grafik Pie --- */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Grafik Garis - Lebih lebar */}
        <div className="lg:col-span-3">
          <MyLineChart
            labels={lineChartLabels}
            datasetsConfig={lineChartDatasets}
            titleText="Perbandingan Penjualan Bulanan"
            xAxisLabel="Bulan"
            yAxisLabel="Pendapatan (USD)"
            legendPosition="bottom"
            containerClassName="w-full" // MyChart components handle their own card bg/shadow
            chartHeight="300px"
            minChartHeight="300px"
            yTicksCallback={(value) => `$${value/1000}k`}
          />
        </div>

        {/* Grafik Pie - Lebih kecil */}
        <div className="lg:col-span-2">
          <MyPieChart
            labels={pieChartLabels}
            data={pieChartData}
            backgroundColors={pieChartBackgroundColors}
            datasetLabel={pieChartDatasetLabel}
            titleText="Sumber Trafik Website"
            legendPosition="right"
            containerClassName="w-full"
            chartHeight="300px"
            minChartHeight="300px"
            cutout="70%" // Contoh bologan tengah
          />
        </div>
      </div>

      {/* --- Baris 2: Grafik Batang (Contoh Full Width) --- */}
      <div>
        <MyBarChart
          labels={barChartLabels}
          datasetsConfig={barChartDatasets}
          titleText="Pendaftaran Pengguna Baru per Wilayah (Q2)"
          xAxisLabel="Wilayah"
          yAxisLabel="Jumlah Pengguna Baru"
          indexAxis="x"
          containerClassName="w-full"
          chartHeight="350px"
          minChartHeight="300px"
          beginAtZero={true}
          tooltipLabelCallback={(context) => {
            let label = context.dataset.label || '';
            if (label) { label += ': '; }
            if (context.parsed.y !== null) { label += `${context.parsed.y} pengguna`; }
            return label;
          }}
        />
      </div>

      {/* --- Bagian: Tabel Pesanan Terbaru --- */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Pesanan Terbaru</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pesanan</th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelanggan</th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{order.id}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-800">{order.customer}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-${order.statusColor}-100 text-${order.statusColor}-800`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
              {recentOrders.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">Tidak ada pesanan terbaru.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} HyperDash.
      </footer>
    </div>
  );
}

export default Dashboard1;