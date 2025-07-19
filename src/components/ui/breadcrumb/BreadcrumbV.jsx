import { Home } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faBreadSlice, faHome } from "@fortawesome/free-solid-svg-icons";
import { faUikit, faUnity } from "@fortawesome/free-brands-svg-icons";

const BreadcrumbV = () => {
  const dataset = [
    { label: "Home", url: "/" },
    { label: "Components", url: "#" },
    { label: "Breadcrumb", url: "breadcrumb" },
  ];

  const dataSetICon = [
    { label: "Home", url: "/", icon: faHome },
    { label: "Components", url: "#", icon: faUikit },
    { label: "Breadcrumb", url: "breadcrumb", icon: faUnity },
  ];

  const breadcrumb = [
    { label: "Home", url: "/", icon: faHome },
    { label: "Components", url: "#" },
    { label: "Breadcrumb", url: "breadcrumb" },
  ];
  return (
    <>
      <div className="m-4">
        <div className="flex flex-col gap-4">
          <Breadcrumb items={breadcrumb} />
          <div className="flex-1 p-4 bg-white border border-gray-300 rounded-md shadow-md">
            <div className="text-lg font-bold mb-4">Breadcrumb</div>
            <Breadcrumb items={dataset} />
          </div>
          <div className="flex-1 p-4 bg-white border border-gray-300 rounded-md shadow-md">
            <div className="text-lg font-bold mb-4">Breadcrumb with Icon</div>
            <Breadcrumb items={dataSetICon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbV;
