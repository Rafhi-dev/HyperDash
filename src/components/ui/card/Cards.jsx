const Card = ({ title, children, w = "sm", imgsrc, className = "" }) => {
  return (
    <div className={`max-w-${w} rounded-lg shadow-lg bg-white ${className}`}>
      {imgsrc ? <img className="w-full p-1" src={imgsrc} /> : ``}
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default Card;
