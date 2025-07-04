const Card = ({ title, children, w = "full", imgsrc, className = "" }) => {
  // Mendukung maxWidth tailwind dan custom pixel
  const widthClass =
    w === "xs"
      ? "max-w-xs"
      : w === "sm"
      ? "max-w-sm"
      : w === "md"
      ? "max-w-md"
      : w === "lg"
      ? "max-w-lg"
      : w === "full"
      ? "max-w-full"
      : "";

  return (
    <div
      className={`rounded-lg shadow-lg bg-white md:w-full ${widthClass} ${className}`}
    >
      {imgsrc && (
        <img
          className="w-full rounded-t-lg object-cover p-1"
          src={imgsrc}
          alt={title || "Card image"}
        />
      )}
      <div className="px-4 py-4">
        {title && <div className="font-bold text-lg mb-2">{title}</div>}
        {children}
      </div>
    </div>
  );
};

export default Card;
