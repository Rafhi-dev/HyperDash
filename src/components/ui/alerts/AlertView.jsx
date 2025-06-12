import Card from "../card/Cards";
import Alert from "./Alert";

const AlertView = () => {
  return (
    <div>
      <div className="flex-row">
        <Card w="full" title={"Alerts Ui"} className="m-4">
          <Alert msg={"Alert Default"} className="my-4" />
          <Alert success msg={"Alert success"} className="my-4" />
          <Alert warning msg={"Alert warning"} className="my-4" />
          <Alert danger msg={"Alert Danger"} className="my-4" />
        </Card>
        <Card w="full" title={"Docs"} className="m-4">
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
};
export default AlertView;
