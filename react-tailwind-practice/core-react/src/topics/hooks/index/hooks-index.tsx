import { Link } from "react-router-dom";
import { HOOKS_DATA } from "./hooks-data";

const HooksIndex = () => {
  return (
    <div>
      <div className="p-4 border-b border-cyan-700">
        <h2 className="text-center">React Predefined Hooks</h2>
      </div>
      <nav className="p-4">
        <ol className="list-decimal list-inside">
          {HOOKS_DATA.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="hover:text-cyan-700 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default HooksIndex;
