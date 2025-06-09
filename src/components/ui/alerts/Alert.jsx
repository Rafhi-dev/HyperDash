import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Alert = ({
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
      } rounded-lg border-2 ${
        isClosed ? "hidden" : ""
      }  p-4 flex flex-row ${className}`}
    >
      <p className="flex-1">{msg}</p>
      <button className="ml-2 text-right cursor-pointer" onClick={closeAlert}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default Alert;
