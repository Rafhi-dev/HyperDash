import { useState } from "react";
import Modal from "./Modals";

const ModalsV = () => {
  // State untuk mengontrol visibilitas modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="mb-4 text-3xl font-bold">Sample 1</h1>
        <button
          onClick={openModal}
          className="rounded-lg bg-black px-6 py-2 text-white shadow-md transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Buka Modal
        </button>

        {/* Panggil komponen Modal di sini */}
        <Modal
          alert
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Sample Modals"
        >
          {/* Konten di dalam sini bisa berupa apapun: teks, form, gambar, dll. */}
          <p className="text-sm text-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor
            felis risus nisi non. Quisque eu ut tempor curabitur.
          </p>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={closeModal}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
            >
              Batal
            </button>
            <button
              onClick={() => {
                alert("Aksi diterima!");
                closeModal();
              }}
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none"
            >
              Terima
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalsV;
