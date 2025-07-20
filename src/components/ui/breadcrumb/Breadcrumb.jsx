import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items, className }) => {
  return (
    <nav
      className={`text-gray-600 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ul className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && (
              <div className="mx-1 text-gray-400">
                <ChevronRight size={15} />
              </div>
            )}
            {index === items.length - 1 ? (
              <div className="text-gray-500 font-medium ">
                {item.icon && (
                  <FontAwesomeIcon icon={item.icon} className="text-sm mr-1" />
                )}
                {item.label}
              </div>
            ) : (
              <Link
                to={item.url}
                className="hover:underline hover:text-blue-500"
              >
                {item.icon && (
                  <FontAwesomeIcon icon={item.icon} className="text-sm mr-1" />
                )}
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
