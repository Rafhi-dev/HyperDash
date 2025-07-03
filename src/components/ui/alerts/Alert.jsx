import {
  faCircleCheck,
  faCircleQuestion,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Alert = ({
  title,
  msg,
  success = false,
  warning = false,
  danger = false,
  className = "",
}) => {
  const [isClosed, setIsClosed] = useState(false);

  const closeAlert = () => {
    setIsClosed(!isClosed);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div
      className={`${
        success
          ? "bg-green-400/10 border-green-400"
          : warning
          ? "bg-orange-400/10 border-orange-400"
          : danger
          ? "bg-red-400/10 border-red-400"
          : "bg-blue-400/10 border-blue-400"
      } rounded-lg border  p-4 flex flex-row ${className}`}
    >
      <div className="flex">
        <FontAwesomeIcon
          className={`mt-1 mr-2 ${
            success
              ? "text-green-500"
              : warning
              ? "text-orange-500"
              : danger
              ? "text-red-500"
              : "text-blue-500"
          }`}
          icon={
            success
              ? faCircleCheck
              : warning
              ? faCircleQuestion
              : danger
              ? faCircleXmark
              : faCircleCheck
          }
          size="lg"
        />
      </div>
      <div className="flex-1">
        <span className="font-semibold">
          {title
            ? title
            : success
            ? "Success Message"
            : warning
            ? "Warning Message"
            : danger
            ? "Danger Message"
            : "System Message"}
        </span>
        <div className="text-gray-700">{msg}</div>
      </div>
      <button className="ml-2 text-right cursor-pointer" onClick={closeAlert}>
        <FontAwesomeIcon className="text-gray-400" icon={faXmark} size="sm" />
      </button>
    </div>
  );
};

export default Alert;
