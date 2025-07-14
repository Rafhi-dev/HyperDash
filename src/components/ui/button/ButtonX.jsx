const Btn = ({
  type = "submit",
  onSubmit,
  onClick,
  value = "Submit",
  children,
  primary = false,
  secondary = false,
  success = false,
  warning = false,
  danger = false,
  customColor = "",
  outline = false,
  className = "",
}) => {
  return (
    <button
      type={`${type}`}
      onSubmit={onSubmit}
      onClick={onClick}
      className={`px-4 py-2 font-semibold rounded-lg shadow-md
        ${
          outline
            ? `bg-tranparent ${
                primary
                  ? "text-blue-600 border border-blue-500 hover:bg-blue-500 hover:text-white"
                  : secondary
                  ? "text-gray-600 border border-gray-500 hover:bg-gray-500 hover:text-white"
                  : success
                  ? "text-emerald-600 border border-emerald-500 hover:bg-emerald-500 hover:text-white"
                  : warning
                  ? "text-yellow-600 border border-yellow-500 hover:bg-yellow-500 hover:text-white"
                  : danger
                  ? "text-red-600 border border-red-500 hover:bg-red-500 hover:text-white"
                  : customColor ||
                    "text-black border border-black hover:bg-black hover:text-white"
              }`
            : `${
                primary
                  ? "bg-blue-500 hover:bg-blue-600 text-white "
                  : secondary
                  ? "bg-gray-500 hover:bg-gray-600 text-white "
                  : success
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white "
                  : warning
                  ? "bg-yellow-500 hover:bg-yellow-600 text-white "
                  : danger
                  ? "bg-red-500 hover:bg-red-600 text-white "
                  : customColor || "bg-black hover:bg-gray-900 text-white "
              }`
        } transition-transform transform hover:scale-102 ${className}`}
    >
      {children ? children : value}
    </button>
  );
};

export default Btn;
