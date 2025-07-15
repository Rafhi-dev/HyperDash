import { useState } from "react";
import Modal from "./Modals";
import AlertModals from "./AlertModals";

const ModalsV = () => {
  // State untuk mengontrol visibilitas modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [AlertOpen, setAlertOpen] = useState(false);
  const [modalFullscreen, setModalFullscreen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAlert = () => setAlertOpen(true);
  const closeAlert = () => setAlertOpen(false);

  const openModalFull = () => setModalFullscreen(true);
  const closeModalfull = () => setModalFullscreen(false);
  return (
    <>
      <div className="p-6 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <p className="mb-4 text-xl font-bold">Default Modal</p>
            <button
              onClick={openModal}
              className="rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md transition hover:bg-blue-600 "
            >
              Buka Modal
            </button>
          </div>
          <div className="flex-1 p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <p className="mb-4 text-xl font-bold">Fullscreen Modal</p>
            <button
              onClick={openModalFull}
              className="rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md transition hover:bg-blue-600 "
            >
              Buka Modal
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <p className="mb-4 text-xl font-bold">Alert Modal</p>
            <button
              onClick={openAlert}
              className="rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md transition hover:bg-blue-600 "
            >
              Buka Modal
            </button>
          </div>
          <div className="flex-1 p-4"></div>
        </div>

        {/* Panggil komponen Modal di sini */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Sample Modals"
          modalFooter={
            <>
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
            </>
          }
        >
          {/* Konten di dalam sini bisa berupa apapun: teks, form, gambar, dll. */}
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor
            felis risus nisi non. Quisque eu ut tempor curabitur.
          </p>
        </Modal>

        {/*modal fullscreen*/}

        <Modal
          fullscreen
          isOpen={modalFullscreen}
          onClose={closeModalfull}
          title="Fullscreen Modals"
          modalFooter={
            <>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={closeModalfull}
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
            </>
          }
        >
          {/* Konten di dalam sini bisa berupa apapun: teks, form, gambar, dll. */}
          <p className="text-md text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor
            felis risus nisi non. Quisque eu ut tempor curabitur.
          </p>
        </Modal>

        <AlertModals
          alert={"success"}
          alertIsOpen={AlertOpen}
          AlertOnClose={closeAlert}
          alertMsg={
            "Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor felis risus nisi non. Quisque eu ut tempor curabitur"
          }
          onClick={closeAlert}
        ></AlertModals>
      </div>
    </>
  );
};

export default ModalsV;
