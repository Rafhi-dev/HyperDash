import { X } from "lucide-react";
import { useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  modalBody,
  fullscreen,
  modalFooter,
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

  const clickoutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex bg-gray-900/70 items-center justify-center shadow-xl backdrop-blur-sm transition-opacity duration-600"
      onClick={clickoutside}
      aria-modal="true"
      role="dialog"
    >
      {/* Panel Modal */}
      <div
        className={`relative w-2xl ${
          fullscreen && fullscreen === true
            ? "w-screen h-screen border border-gray-300"
            : "rounded-xl"
        } transform flex flex-col bg-white p-4 shadow-xl transition-all duration-600`}
      >
        {/* Header Modal */}
        <div className="flex items-start justify-between border-b pb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Tutup modal"
          >
            {/* Ikon 'X' */}
            <X />
          </button>
        </div>

        {/* Konten Modal */}
        <div className="mt-4">{modalBody ? modalBody : children}</div>
        <div className="mt-auto flex justify-end">
          {modalFooter ? modalFooter : ""}
        </div>
      </div>
    </div>
  );
};

export default Modal;
