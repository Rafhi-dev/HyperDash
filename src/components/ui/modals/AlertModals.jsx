import {
  CircleAlert,
  CircleCheckBig,
  OctagonX,
  TriangleAlert,
  X,
} from "lucide-react";
import { useEffect } from "react";

function AlertModals({
  alertIsOpen,
  AlertOnClose,
  alert,
  titleAlert,
  alertMsg,
  customFooter,
  btnName,
  onClick,
  children,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        AlertOnClose();
      }
    };

    if (alertIsOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [alertIsOpen, AlertOnClose]);

  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      AlertOnClose();
    }
  };

  if (!alertIsOpen) {
    return null;
  }

  const alertType = alert || "default";
  const styles = {
    success: "shadow-green-400",
    warning: "shadow-orange-400",
    danger: "shadow-red-400",
    default: "shadow-blue-400",
  }[alertType];

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex bg-gray-900/70 items-center justify-center backdrop-blur-sm transition-opacity duration-600"
        onClick={clickOutside}
        aria-modal="true"
        role="dialog"
      >
        {/* Panel Modal */}

        <div
          className={`relative w-2xl transform rounded-xl bg-white p-6 shadow-lg ${styles} transition-all duration-600`}
        >
          {/* Header Modal */}
          <div className="flex justify-end">
            <button
              onClick={AlertOnClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Tutup modal"
            >
              {/* Ikon 'X' */}
              <X />
            </button>
          </div>
          <div className="flex justify-center pb-3">
            <div
              className={`w-20 h-20  rounded-full flex justify-center items-center ${
                alert && alert === "success"
                  ? "bg-green-500/20 text-green-500 "
                  : alert === "warning"
                  ? "bg-orange-500/20 text-orange-500 "
                  : alert === "danger"
                  ? "bg-red-500/20 text-red-500 "
                  : "bg-blue-500/20 text-blue-500 "
              }`}
            >
              {alert && alert === "success" ? (
                <CircleCheckBig size={60} />
              ) : alert === "warning" ? (
                <TriangleAlert size={60} />
              ) : alert === "danger" ? (
                <OctagonX size={60} />
              ) : (
                <CircleAlert size={60} />
              )}
            </div>
          </div>

          {/* Konten Modal */}
          <div
            className={`font-bold ${
              alert && alert === "success"
                ? "text-green-500"
                : alert === "warning"
                ? "text-orange-500"
                : alert === "danger"
                ? "text-red-500"
                : "text-blue-500"
            } text-center text-2xl`}
          >
            {titleAlert
              ? titleAlert
              : alert === "success"
              ? "Success Alert !!"
              : alert === "warning"
              ? "Warning Alert !!"
              : alert === "danger"
              ? "Danger Alert !!"
              : "System Alert"}
          </div>
          {/*alert modal - body*/}
          <div className="mt-4">
            {alertMsg ? (
              <p className="text-sm text-center text-gray-600 mb-6">
                {alertMsg}
              </p>
            ) : (
              children
            )}
            {/*Footer */}
            <div className="mt-4">
              {customFooter ? (
                <div className="flex mt-auto">{customFooter}</div>
              ) : (
                <>
                  <div className="flex mt-auto justify-center">
                    <button
                      onClick={onClick}
                      className={`${
                        alert && alert === "success"
                          ? "bg-green-500 hover:bg-green-600"
                          : alert === "warning"
                          ? "bg-orange-500 hover:bg-orange-600"
                          : alert === "danger"
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-blue-500 hover:bg-blue-600"
                      } rounded-lg hover:scale-101 px-4 py-2 font-semibold text-white`}
                    >
                      {btnName ? btnName : "Okay"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertModals;
