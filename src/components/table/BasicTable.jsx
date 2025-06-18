const ReusableTable = ({
  columns,
  data,
  emptynotif = "No data to display",
}) => {
  if (!columns || !data || columns.length === 0 || data.length === 0) {
    return (
      <div className="m-4 p-4 bg-white shadow-md rounded-lg text-gray-700">
        {emptynotif}
      </div>
    );
  }

  return (
    <>
      <div className="bg-white shadow-xl rounded-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm text-left text-gray-700">
          <thead className="bg-blue-400 text-xs uppercase text-white">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-3">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-200">
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-6 py-4 ${column.className || ""}`}
                  >
                    {column.render ? column.render(row) : row[column.DataKey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReusableTable;
