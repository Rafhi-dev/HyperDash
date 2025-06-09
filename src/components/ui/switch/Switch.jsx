const Switch = ({
  isOn,
  handleToggle,
  id,
  label,
  labelPosition = "right",
  className = "",
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center cursor-pointer ${className}`}
    >
      {label && labelPosition === "left" && (
        <span className="mr-3 text-sm font-medium text-gray-900">{label}</span>
      )}

      <div className="relative">
        <input
          type="checkbox"
          id={id}
          className="sr-only peer"
          checked={isOn}
          onChange={handleToggle}
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 transition-colors"></div>
        <div className="absolute left-0.5 top-0.5 bg-white border-gray-300 border rounded-full h-5 w-5 transition-transform peer-checked:translate-x-full peer-checked:border-white"></div>
      </div>

      {label && labelPosition === "right" && (
        <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>
      )}
    </label>
  );
};

export default Switch;
