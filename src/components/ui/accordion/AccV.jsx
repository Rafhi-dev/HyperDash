import Accordion from "./Accordion";
import Card from "../card/Cards";
import Breadcrumb from "../breadcrumb/Breadcrumb";

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

  const breadcrumb = [
    { label: "Home", url: "/" },
    { label: "Component", url: "#" },
    { label: "Accordion", url: "#" },
  ];

  return (
    <div className="m-4 flex flex-col gap-4">
      <Breadcrumb items={breadcrumb} />
      <div className="bg-white rounded-lg shadow-lg">
        <Card title={"Accordion"}>
          <Accordion items={items} />
        </Card>
      </div>
    </div>
  );
};

export default AccV;
