import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const EyeIcon = ({ className }) => (
  <FontAwesomeIcon icon={faEye} className={className} />
);

const EyeSlashIcon = ({ className }) => (
  <FontAwesomeIcon icon={faEyeSlash} className={className} />
);
const PasswordInput = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    if (!disabled) {
      setShowPassword(!showPassword);
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-md font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            ${error ? "border-red-500" : "border-gray-300"}
            ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
            pr-10`}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`text-gray-500 focus:outline-none focus:text-gray-600 ${
              disabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            aria-label={
              showPassword ? "Sembunyikan password" : "Tampilkan password"
            }
            disabled={disabled}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default PasswordInput;
