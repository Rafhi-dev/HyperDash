import Card from "../../ui/card/Cards";
import BarChart from "./BarChart";

const BarChartV = () => {
  const dataPenjualan = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli"],
    datasets: [
      {
        label: "Tren Produk A",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgb(255, 99, 132)", // Warna garis
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Warna area di bawah garis
      },
      {
        label: "Tren Produk B",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <div className="m-4 gap-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 min-w-0">
          <Card title={"Default"}>
            <BarChart chartData={dataPenjualan} title={"Example"} />
          </Card>
        </div>
        <div className="flex-1 min-w-0">
          <Card title={"Horizontal"}>
            <BarChart H={true} chartData={dataPenjualan} title={"Example"} />
          </Card>
        </div>
      </div>
      <div className="flex-1 m-4 bg-white rounded-xl shadow-lg p-8">
        <div className="max-w-full mx-auto">
          <h1 className="text-2xl font-bold mb-4">BarChart</h1>
          <p className="mb-4">
            Komponen <code className="bg-gray-100 px-1 rounded">BarChart</code>{" "}
            digunakan untuk menampilkan data dalam bentuk diagram batang (bar
            chart) menggunakan{" "}
            <a
              href="https://react-chartjs-2.js.org/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-chartjs-2
            </a>{" "}
            dan{" "}
            <a
              href="https://www.chartjs.org/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chart.js
            </a>
            . Mendukung orientasi vertikal maupun horizontal.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Props</h2>
          <table className="w-full mb-6 border border-gray-200 rounded overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3 text-left font-medium">Nama</th>
                <th className="py-2 px-3 text-left font-medium">Tipe</th>
                <th className="py-2 px-3 text-left font-medium">Deskripsi</th>
                <th className="py-2 px-3 text-left font-medium">Wajib</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-3">chartData</td>
                <td className="py-2 px-3">Object</td>
                <td className="py-2 px-3">
                  Data yang akan divisualisasikan dalam bar chart (format
                  Chart.js).
                </td>
                <td className="py-2 px-3">Ya</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3">title</td>
                <td className="py-2 px-3">String</td>
                <td className="py-2 px-3">
                  Judul chart yang akan ditampilkan di atas chart.
                </td>
                <td className="py-2 px-3">Tidak</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3">H</td>
                <td className="py-2 px-3">Boolean</td>
                <td className="py-2 px-3">
                  Jika <code>true</code>, chart akan horizontal (indexAxis:
                  'y'). Default: <code>false</code> (vertikal).
                </td>
                <td className="py-2 px-3">Tidak</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mt-6 mb-2">Contoh Penggunaan</h2>
          <pre className="bg-gray-100 rounded p-4 mb-6 overflow-x-auto text-sm">
            <code>
              {`import BarChart from '@/components/charts/Bar/BarChart';

const data = {
  labels: ['Januari', 'Februari', 'Maret'],
  datasets: [
    {
      label: 'Penjualan',
      data: [120, 150, 170],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e42'],
    },
  ],
};

<BarChart
  chartData={data}
  title="Statistik Penjualan"
  H={false}
/>
`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-6 mb-2">Catatan</h2>
          <ul className="list-disc pl-6">
            <li>
              Gunakan prop <code className="bg-gray-100 px-1 rounded">H</code>{" "}
              untuk mengubah orientasi chart (horizontal/vertikal).
            </li>
            <li>
              Pastikan{" "}
              <code className="bg-gray-100 px-1 rounded">chartData</code>{" "}
              mengikuti format data Chart.js.
            </li>
            <li>
              Komponen ini sudah mengatur opsi{" "}
              <code className="bg-gray-100 px-1 rounded">responsive</code> dan{" "}
              <code className="bg-gray-100 px-1 rounded">title</code> secara
              otomatis.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BarChartV;
