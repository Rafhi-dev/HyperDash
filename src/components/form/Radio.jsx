import React from "react";

const Radio = ({
  label,
  options,
  selectedValue,
  onChange,
  name,
  direction = "vertical", // 'vertical' atau 'horizontal'
  error,
  className = "",
}) => {
  const layoutClasses = {
    vertical: "flex-col space-y-2",
    horizontal: "flex-col sm:flex-row sm:space-x-5 sm:space-y-0 space-y-2",
  };

  return (
    <fieldset className={className}>
      <legend
        className={`block text-md font-medium mb-2 ${
          error ? "text-red-600" : "text-gray-700"
        }`}
      >
        {label}
      </legend>
      <div className={`flex ${layoutClasses[direction]}`}>
        {options.map((option) => (
          <label
            key={option.value}
            htmlFor={option.id || `${name}-${option.value}`}
            className={`flex items-center ${
              option.disabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <input
              type="radio"
              id={option.id || `${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              disabled={option.disabled}
              className="peer sr-only"
            />
            <div
              className={`
                w-5 h-5 border-4 rounded-full flex items-center justify-center
                transition-colors
                ${
                  option.disabled
                    ? "border-gray-200" // Warna border saat disabled
                    : "peer-checked:border-blue-600 border-gray-300"
                }
              `}
              aria-hidden="true"
            >
              <div
                className={`
                  w-2.5 h-2.5 rounded-full
                  transition-transform transform
                  ${
                    option.disabled
                      ? selectedValue === option.value
                        ? "bg-gray-300 scale-100"
                        : "bg-gray-300 scale-0"
                      : "bg-blue-600 scale-0 peer-checked:scale-100"
                  }
                `}
              ></div>
            </div>

            <div className={`ml-3 ${option.disabled ? "opacity-50" : ""}`}>
              <span className="block text-md font-medium text-gray-800">
                {option.label}
              </span>
              {option.description && (
                <span className="block text-sm text-gray-500">
                  {option.description}
                </span>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </fieldset>
  );
};

export default Radio;
