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
    </div>
  );
}

export default BtnView;
