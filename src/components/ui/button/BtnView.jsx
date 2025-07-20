import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Card from "../card/Cards";
import Btn from "./ButtonX";

function BtnView() {
  const setBreadCrumb = [
    { label: "Home", url: "/", icon: faHome },
    { label: "Component", url: "#" },
    { label: "Button" },
  ];
  return (
    <>
      <Breadcrumb items={setBreadCrumb} className={"m-6"} />
      <div className="flex flex-col m-6 gap-4">
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
      </div>
    </>
  );
}

export default BtnView;
