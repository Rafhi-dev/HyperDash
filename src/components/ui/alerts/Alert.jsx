const Alert = ({ msg, value, className = "" }) => {
  return (
    <div
      className={`${
        msg === "succes" ? "bg-green-400/10 border-green-400" : ""
      } rounded-lg border-2  p-4 ${className}`}
    >
      <p>{value}</p>
    </div>
  );
};

export default Alert;
