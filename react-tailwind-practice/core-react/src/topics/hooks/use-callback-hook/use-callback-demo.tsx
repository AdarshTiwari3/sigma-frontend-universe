import { useCallback, useState } from "react";
import Search from "./search";

/*

When a component re-renders, all functions inside it are recreated.
If you pass those functions to child components, React thinks they are “new” and triggers re-renders — even if logic didn’t change.

useCallback keeps the same function instance unless dependencies change.

*/
interface UseCallbackDemoProps {}

const allUser: string[] = ["Ram", "Shyam", "JohnDoe", "Rohan"];

const shuffleArray = (arr: string[]) => {
  const result = [...arr];

  for (let i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }

  return result;
};

const UseCallbackDemo = ({}: UseCallbackDemoProps) => {
  const [users, setUsers] = useState(allUser);

  const handleSearch = useCallback((text: string) => {
    setUsers(
      allUser.filter((user) => user.toLowerCase().includes(text.toLowerCase()))
    );
  }, []);

  const handleShuffle = () => {
    setUsers(shuffleArray(allUser));
  };

  return (
    <div className="p-8">
      <div className="flex gap-5 items-center">
        <button
          className="bg-green-700 rounded-sm p-1 cursor-pointer"
          onClick={handleShuffle}
        >
          Shuffle
        </button>
        <Search onChange={handleSearch} />
      </div>
      <ul className="p-2">
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallbackDemo;
