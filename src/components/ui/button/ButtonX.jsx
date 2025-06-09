const Btn = ({
  type = "submit",
  onSubmit,
  onClick,
  value = "Submit",
  children,
  color,
  outline = false,
}) => {
  return (
    <button
      type={`${type}`}
      onSubmit={onSubmit}
      onClick={onClick}
      className={`px-4 py-2 font-semibold rounded-lg shadow-md
        ${
          outline
            ? `${
                color === "primary"
                  ? "bg-tranparent text-blue-600 border border-blue-500 hover:bg-blue-500 hover:text-white"
                  : color === "secondary"
                  ? "bg-tranparent text-gray-600 border border-gray-500 hover:bg-gray-500 hover:text-white"
                  : color === "success"
                  ? "bg-tranparent text-emerald-600 border border-emerald-500 hover:bg-emerald-500 hover:text-white"
                  : color === "warning"
                  ? "bg-tranparent text-yellow-600 border border-yellow-500 hover:bg-yellow-500 hover:text-white"
                  : color === "danger"
                  ? "bg-tranparent text-red-600 border border-red-500 hover:bg-red-500 hover:text-white"
                  : "bg-tranparent text-blue-600 border border-blue-500 hover:bg-blue-500 hover:text-white"
              }`
            : `
            ${
              color === "primary"
                ? "bg-blue-500 hover:bg-blue-600 text-white "
                : color === "secondary"
                ? "bg-gray-500 hover:bg-gray-600 text-white "
                : color === "success"
                ? "bg-emerald-500 hover:bg-emerald-600 text-white "
                : color === "warning"
                ? "bg-yellow-500 hover:bg-yellow-600 text-white "
                : color === "danger"
                ? "bg-red-500 hover:bg-red-600 text-white "
                : "bg-sky-500 hover:bg-sky-600 text-white "
            }`
        }
         
          transition-transform transform hover:scale-105`}
    >
      {children ? children : value}
    </button>
  );
};

export default Btn;
