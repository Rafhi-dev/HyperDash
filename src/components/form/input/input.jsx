const Input = ({
  type = "text",
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  w = "w-full",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className={`my-2`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-md font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${w} px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        } ${
          disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
