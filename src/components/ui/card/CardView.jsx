import Btn from "../button/ButtonX";
import Card from "./Cards";

const CardView = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 m-4 z-10">
        <div className="w-fit">
          <Card
            w="xs"
            title={"Card with image"}
            imgsrc={"https://placehold.co/300x200"}
          >
            <p className="text-gray-700 text-base">
              Ini adalah konten atau deskripsi singkat di dalam card
            </p>
            <div className="flex justify-start">
              <Btn value="Read more.." />
            </div>
          </Card>
        </div>
        <div className="inline-block">
          <Card
            w="xs"
            imgsrc={"https://placehold.co/300x200"}
            title={"Card Default"}
          >
            <p className="text-gray-700 text-base">
              Ini adalah konten atau deskripsi singkat di dalam card. Anda bisa
              menulis
            </p>
          </Card>
        </div>
      </div>
      <div className="flex-1 m-4">
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
    </>
  );
};

export default CardView;
