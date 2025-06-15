import Card from "../../ui/card/Cards";
import PieChart from "./PieChart";

const PieChartV = () => {
  const dataTraffic = {
    labels: ["Organik", "Sosial Media", "Referral", "Direct"],
    datasets: [
      {
        label: "Sumber Traffic",
        data: [1200, 800, 500, 450],
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(201, 203, 207, 0.7)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
        cutout: "70%",
      },
    ],
  };
  const dataTraffic2 = {
    labels: ["Organik", "Sosial Media", "Referral", "Direct"],
    datasets: [
      {
        label: "Sumber Traffic",
        data: [1200, 800, 500, 450],
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(201, 203, 207, 0.7)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="m-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 min-w-0">
          <Card title={"Doughnut"}>
            <div className="flex justify-center h-80">
              <PieChart chartData={dataTraffic} title={"Example"} />
            </div>
          </Card>
        </div>
        <div className="flex-1 min-w-0">
          <Card title={"Pie"}>
            <div className="flex justify-center h-80">
              <PieChart chartData={dataTraffic2} title={"Example"} />
            </div>
          </Card>
        </div>
      </div>

      <div className="flex-1 m-4">
        <div className="max-w-full mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-bold mb-4">PieChart</h1>
          <p className="mb-4">
            Komponen <code className="bg-gray-100 px-1 rounded">PieChart</code>{" "}
            digunakan untuk menampilkan data proporsi dalam bentuk pie chart
            menggunakan{" "}
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
            . Cocok untuk visualisasi distribusi kategori seperti sumber
            traffic, komposisi produk, dsb.
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
                  Data yang akan divisualisasikan dalam pie chart (format
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
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mt-6 mb-2">Contoh Penggunaan</h2>
          <pre className="bg-gray-100 rounded p-4 mb-6 overflow-x-auto text-sm">
            {`import PieChart from '@/components/charts/Pie/PieChart';

const dataTraffic = {
  labels: ["Organik", "Sosial Media", "Referral", "Direct"],
  datasets: [
    {
      label: "Sumber Traffic",
      data: [1200, 800, 500, 450],
      backgroundColor: [
        "rgba(75, 192, 192, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 159, 64, 0.7)",
        "rgba(201, 203, 207, 0.7)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(201, 203, 207, 1)",
      ],
      borderWidth: 1,
      cutout: "70%", // Untuk donut chart, opsional
    },
  ],
};

<PieChart chartData={dataTraffic} title="Sumber Traffic" />
`}
          </pre>

          <h2 className="text-xl font-semibold mt-6 mb-2">Catatan</h2>
          <ul className="list-disc pl-6">
            <li>
              Gunakan properti{" "}
              <code className="bg-gray-100 px-1 rounded">cutout</code> pada
              dataset untuk membuat donut chart.
            </li>
            <li>
              Pastikan{" "}
              <code className="bg-gray-100 px-1 rounded">chartData</code>{" "}
              mengikuti format data Chart.js.
            </li>
            <li>
              Komponen ini sudah mengatur opsi
              <code className="bg-gray-100 px-1 rounded">
                responsive
              </code> dan{" "}
              <code className="bg-gray-100 px-1 rounded">title</code> secara
              otomatis.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PieChartV;
