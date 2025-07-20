import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Card from "../card/Cards";
import Alert from "./Alert";

const AlertView = () => {
  const dataSet = [
    { label: "Home", url: "/", icon: faHome },
    { label: "Component", url: "#" },
    { label: "Alert" },
  ];
  return (
    <>
      <Breadcrumb items={dataSet} className={"m-6 mb-0"} />
      <div className="flex flex-row">
        <Card title={"Alerts Ui"} className="m-6 border border-gray-300">
          <Alert msg={"Alert Default"} className="my-4" />
          <Alert success msg={"Alert success"} className="my-4" />
          <Alert warning msg={"Alert warning"} className="my-4" />
          <Alert danger msg={"Alert Danger"} className="my-4" />
        </Card>
      </div>
    </>
  );
};
export default AlertView;
