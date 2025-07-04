import Card from "../card/Cards";
import Alert from "./Alert";

const AlertView = () => {
  return (
    <div>
      <div className="flex flex-row">
        <Card title={"Alerts Ui"} className="m-4 border border-gray-300">
          <Alert msg={"Alert Default"} className="my-4" />
          <Alert success msg={"Alert success"} className="my-4" />
          <Alert warning msg={"Alert warning"} className="my-4" />
          <Alert danger msg={"Alert Danger"} className="my-4" />
        </Card>
      </div>
    </div>
  );
};
export default AlertView;
