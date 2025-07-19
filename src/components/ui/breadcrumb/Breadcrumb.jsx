import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-gray-600 text-sm mb-2" aria-label="Breadcrumb">
      <ul className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <div className="mx-2 text-gray-400">/</div>}
            {index === items.length - 1 ? (
              <div className="text-gray-500 font-medium ">
                <span>
                  <FontAwesomeIcon icon={item.icon} className="text-sm mr-1" />
                </span>
                {item.label}
              </div>
            ) : (
              <Link to={item.url} className="hover:underline">
                <span>
                  <FontAwesomeIcon icon={item.icon} className="text-sm mr-1" />
                </span>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
