import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "../button/ButtonX";
import Card from "./Cards";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const CardView = () => {
  return (
    <>
      <div className=" bg-white rounded-lg shadow-xl border border-gray-300 p-6 m-4 z-10">
        <div className="mb-6 text-xl font-bold">Card with image</div>
        <div className="grid grid-cols md:grid-cols-3 justify-items-center gap-4">
          <div className="gap-4 ">
            <Card
              className="border border-gray-300"
              title={"Card title"}
              imgsrc={"https://picsum.photos/300/200"}
            >
              <p className="text-gray-700 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <div className="flex justify-start">
                <Btn primary className="mt-6" value="Read more.." />
              </div>
            </Card>
          </div>
          <div className="">
            <Card
              className="border border-gray-300"
              imgsrc={"https://picsum.photos/300/200"}
              title={"Card title"}
            >
              <p className="text-gray-700 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Card>
          </div>
          <div className="">
            <Card
              className="border border-gray-300"
              imgsrc={"https://picsum.photos/300/200"}
              title={"Card title"}
            >
              <p className="text-gray-700 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className="flex mt-4 space-x-1 font-medium text-blue-400 hover:text-blue-700 justify-end">
                <span>
                  <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                </span>
                <button>Learn More..</button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-lg shadow-xl border border-gray-300 p-6 m-4 z-10">
        <div className="mb-6 text-xl font-bold">Card without image</div>
        <div className="grid grid-cols md:grid-cols-3 justify-items-center gap-4">
          <div className="gap-4 ">
            <Card className="border border-gray-300" title={"Card title"}>
              <p className="text-gray-700 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <div className="flex justify-start">
                <Btn primary className="mt-6" value="Read more.." />
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="border border-gray-300" title={"Card title"}>
              <p className="text-gray-700 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Card>
          </div>
          <div className="">
            <Card className="border border-gray-300" title={"Card title"}>
              <p className="text-gray-700 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className="flex mt-4 space-x-1 font-medium text-blue-400 hover:text-blue-700 justify-end">
                <span>
                  <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                </span>
                <button>Learn More..</button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardView;
