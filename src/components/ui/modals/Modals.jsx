import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CircleAlert,
  CircleCheckBig,
  OctagonX,
  TriangleAlert,
} from "lucide-react";
import { useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  alert,
  titleAlert,
  alertMsg,
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (alert) {
    return (
      <>
        <div
          className="fixed inset-0 z-50 flex bg-gray-900/70 items-center justify-center backdrop-blur-sm transition-opacity duration-600"
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
        >
          {/* Panel Modal */}

          <div
            className={`relative w-2xl transform rounded-xl bg-white p-8 shadow-lg ${
              alert && alert && alert == "success"
                ? "shadow-green-400"
                : alert == "warning"
                ? "shadow-orange-400"
                : alert == "danger"
                ? "shadow-red-400"
                : "shadow-blue-400"
            } transition-all duration-600`}
          >
            {/* Header Modal */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Tutup modal"
              >
                {/* Ikon 'X' */}
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="flex justify-center pb-3">
              <div
                className={`w-20 h-20  rounded-full flex justify-center items-center ${
                  alert && alert == "success"
                    ? "bg-green-500/20 text-green-500 "
                    : alert == "warning"
                    ? "bg-orange-500/20 text-orange-500 "
                    : alert == "danger"
                    ? "bg-red-500/20 text-red-500 "
                    : "bg-blue-500/20 text-blue-500 "
                }`}
              >
                {alert && alert == "success" ? (
                  <CircleCheckBig size={60} />
                ) : alert == "warning" ? (
                  <TriangleAlert size={60} />
                ) : alert == "danger" ? (
                  <OctagonX size={60} />
                ) : (
                  <CircleAlert size={60} />
                )}
              </div>
            </div>

            {/* Konten Modal */}
            <div
              className={`font-bold ${
                alert && alert == "success"
                  ? "text-green-500"
                  : alert == "warning"
                  ? "text-orange-500"
                  : alert == "danger"
                  ? "text-red-500"
                  : "text-blue-500"
              } text-center text-2xl`}
            >
              {alert && alert == "success"
                ? "Success Alert !!"
                : alert == "warning"
                ? "Warning Alert !!"
                : alert == "danger"
                ? "Danger Alert !!"
                : "System Alert"}
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex bg-gray-900/70 items-center justify-center shadow-xl backdrop-blur-sm transition-opacity duration-600"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      {/* Panel Modal */}
      <div className="relative w-2xl transform rounded-lg bg-white p-4 shadow-xl transition-all duration-600">
        {/* Header Modal */}
        <div className="flex items-start justify-between border-b pb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Tutup modal"
          >
            {/* Ikon 'X' */}
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Konten Modal */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
