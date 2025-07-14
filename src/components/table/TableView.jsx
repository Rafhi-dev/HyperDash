import Card from "../ui/card/Cards";
import ReusableTable from "./BasicTable";

const TableView = () => {
  const sampleUsers = [
    {
      id: 1,
      name: "Budi Santoso",
      email: "budi.s@example.com",
      status: "Aktif",
    },
    {
      id: 2,
      name: "Citra Lestari",
      email: "citra.l@example.com",
      status: "Aktif",
    },
    {
      id: 3,
      name: "Ahmad Dahlan",
      email: "ahmad.d@example.com",
      status: "Tidak Aktif",
    },
    {
      id: 4,
      name: "Dewi Anggraini",
      email: "dewi.a@example.com",
      status: "Aktif",
    },
    {
      id: 5,
      name: "Eko Prasetyo",
      email: "eko.p@example.com",
      status: "Aktif",
    },
    {
      id: 6,
      name: "Fitriani",
      email: "fitriani@example.com",
      status: "Tidak Aktif",
    },
    {
      id: 7,
      name: "Gilang Ramadhan",
      email: "gilang.r@example.com",
      status: "Aktif",
    },
    {
      id: 8,
      name: "Hesti Purwanti",
      email: "hesti.p@example.com",
      status: "Aktif",
    },
  ];

  const columnsConfig = [
    {
      header: "ID",
      DataKey: "id",
    },
    {
      header: "Nama Pengguna",
      DataKey: "name",
    },
    {
      header: "Email",
      DataKey: "email",
    },
    {
      header: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            row.status === "Aktif"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Tindakan",
      render: (row) => (
        <button
          onClick={() => alert(`Melihat detail untuk ID: ${row.id}`)}
          className="text-blue-600 hover:text-blue-900 font-medium"
        >
          Lihat Detail
        </button>
      ),
    },
  ];

  return (
    <div className="m-4 flex flex-col gap-4">
      <div className="flex-1">
        <ReusableTable columns={columnsConfig} data={sampleUsers} />
      </div>
    </div>
  );
};

export default TableView;
