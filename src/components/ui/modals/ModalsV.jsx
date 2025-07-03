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
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Sample Modals">
          {/* Konten di dalam sini bisa berupa apapun: teks, form, gambar, dll. */}
          <p className="text-sm text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
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
      <div className="flex-1 bg-white m-4 p-4 rounded-lg shadow-xl">
        <div className="text-xl font-bold mb-2">Usage</div>
        <p className="text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </>
  );
};

export default ModalsV;
