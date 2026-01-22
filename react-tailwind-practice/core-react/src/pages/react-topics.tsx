import { Link } from "react-router-dom";

type Topic = {
  label: string;
  path: string;
};

const topics: Topic[] = [
  { label: "Hooks in React", path: "/hooks" },
  { label: "Zustand Store", path: "/zustand-store" },
];

const ReactTopics = () => {
  return (
    <div>
      <div className="border-b border-cyan-700 p-3">
        <h2 className="text-center">Frontend Topics</h2>
      </div>

      <nav className="p-4">
        <ol className="list-decimal list-inside space-y-2">
          {topics.map((topic) => (
            <li key={topic.path}>
              <Link to={topic.path} className="hover:text-cyan-700 font-medium">
                {topic.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default ReactTopics;
