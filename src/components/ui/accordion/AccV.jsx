import Accordion from "./Accordion";
import Card from "../card/Cards";
const AccV = () => {
  const items = [
    {
      title: "Apa itu Accordion?",
      content:
        "Accordion adalah komponen UI untuk menampilkan dan menyembunyikan konten.",
    },
    {
      title: "Bagaimana cara menggunakannya?",
      content: "Klik pada judul untuk membuka atau menutup konten.",
    },
  ];

  return (
    <div className="m-4 flex flex-col gap-4">
      <div className="bg-white rounded-lg shadow-lg">
        <Card title={"Accordion"}>
          <Accordion items={items} />
        </Card>
      </div>
      <div className="bg-white rounded-lg shadow-lg">
        <Card title={"Usage"}>hallo</Card>
      </div>
    </div>
  );
};

export default AccV;
