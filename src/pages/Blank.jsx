import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../components/ui/breadcrumb/Breadcrumb";

const BlankPage = () => {
  const setBreadcrumb = [
    { label: "Home", url: "/", icon: faHome },
    { label: "Blank Page" },
  ];
  return (
    <>
      <div className="m-6">
        <Breadcrumb items={setBreadcrumb} className={"mb-0"} />

        {/* Content Code... */}
      </div>
    </>
  );
};

export default BlankPage;
