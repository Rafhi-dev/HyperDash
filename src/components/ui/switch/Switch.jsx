const Switch = ({ isOn, handleToggle, id, label, className = "" }) => {
  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      {label && (
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
        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors"></div>
        <div className="absolute left-0.5 top-0.5 bg-white border border-gray-300 rounded-full h-4 w-4 transition-transform peer-checked:translate-x-5 peer-checked:border-white"></div>
      </div>
    </label>
  );
};

export default Switch;
