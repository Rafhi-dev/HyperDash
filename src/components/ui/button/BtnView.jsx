import BarChart from "../../charts/Bar/BarChart";
import Card from "../card/Cards";
import Btn from "./ButtonX";

function BtnView() {
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
    </div>
  );
}

export default BtnView;
