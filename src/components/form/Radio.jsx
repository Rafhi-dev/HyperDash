const Radio = ({ label, options, selectedValue, onChange, name, className = '' }) => {
  return (
    <fieldset className={className}>
      <legend className="text-lg font-semibold text-gray-900 mb-2">{label}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            htmlFor={option.id || `${name}-${option.value}`}
            className="flex items-center p-3 rounded-lg border border-gray-300 has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500 transition-colors cursor-pointer"
          >
            <input
              type="radio"
              id={option.id || `${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />
            <span className="ml-3 text-md font-medium text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default Radio