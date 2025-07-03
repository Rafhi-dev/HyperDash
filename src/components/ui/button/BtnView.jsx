import BarChart from "../../charts/Bar/BarChart";
import Card from "../card/Cards";
import Btn from "./ButtonX";

function BtnView() {
  const dataPenjualan = {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "Penjualan Produk A",
        data: [65, 59, 80, 81, 56, 55, 40, 65, 76, 23, 88, 43],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        label: "Penjualan Produk B",
        data: [28, 48, 40, 19, 86, 27, 80, 59, 80, 81, 56, 55],
        backgroundColor: "oklch(70.7% 0.165 254.624)",
        borderColor: "oklch(62.3% 0.214 259.815)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <Card w="full" title={"Button Solid"}>
        <div className="space-x-4">
          <Btn primary value="Primary" />
          <Btn secondary value="Secondary" />
          <Btn success value="Success" />
          <Btn warning value="Warning" />
          <Btn danger value="Danger" />
          <Btn value="Default" />
        </div>
      </Card>
      <Card w="full" title={"Button Outline"}>
        <div className="space-x-4">
          <Btn outline primary value="Primary" />
          <Btn outline secondary value="Secondary" />
          <Btn outline success value="Success" />
          <Btn outline warning value="Warning" />
          <Btn outline danger value="Danger" />
          <Btn outline value="Default" className="unavailable" />
        </div>
      </Card>
      <div className="flex-1">
        <Card w="full" title={"Docs"}>
          <p className="text-gray-700 text-base">
            Ini adalah konten atau deskripsi singkat di dalam card. Anda bisa
            menulis beberapa kalimat di sini untuk menjelaskan isi dari card
            tersebut. Ini adalah konten atau deskripsi singkat di dalam card.
            Anda bisa menulis beberapa kalimat di sini untuk menjelaskan isi
            dari card tersebut. Ini adalah konten atau deskripsi singkat di
            dalam card. Anda bisa menulis beberapa kalimat di sini untuk
            menjelaskan isi dari card tersebut. Ini adalah konten atau deskripsi
            singkat di dalam card. Anda bisa menulis beberapa kalimat di sini
            untuk menjelaskan isi dari card tersebut.
          </p>
        </Card>
      </div>
      <div className="flex-1">
        <Card w="full">
          <BarChart H chartData={dataPenjualan} title={"Sample Chart"} />
        </Card>
      </div>
    </div>
  );
}

export default BtnView;
