import { Icon } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-gray-600 text-sm mb-2" aria-label="Breadcrumb">
      <ul className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2 text-gray-400">/</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-500 font-medium">{item.label}</span>
            ) : (
              <Link to={item.url} className="hover:underline">
                <Icon iconNode={item.Icon} /> {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
