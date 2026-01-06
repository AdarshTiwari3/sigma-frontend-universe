import { Link } from "react-router-dom";

const ReactTopics = () => {
  return (
    <div>
      <div className="border-b border-cyan-700 p-3">
        <h2 className="text-center"> Frontend Topics</h2>
      </div>
      <nav className="p-4">
        <ol className="list-decimal list-inside">
          <li>
            <Link to="/hooks" className="hover:text-cyan-700 font-medium">
              Hooks in React
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default ReactTopics;
