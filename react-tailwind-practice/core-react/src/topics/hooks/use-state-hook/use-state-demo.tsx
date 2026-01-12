import { useState } from "react";

type User = {
  name: string;
  age: number;
  isActive: boolean;
};
const UseStateDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User>({
    name: "Andy",
    age: 23,
    isActive: false,
  });
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () =>
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const handleUser = () => setUser((prev) => ({ ...prev, name: "JohnDoe" }));

  return (
    <div className="p-8">
      <div className="mb-4">
        <h2>useState Practice</h2>
      </div>
      <div>
        <p>Count:{count}</p>
        <h4>{user.name}</h4>
        <div className="flex gap-4 mt-2">
          <button
            className="bg-green-700 rounded-sm p-1 cursor-pointer"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="bg-green-700 rounded-sm p-1 cursor-pointer"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <button
            className="bg-blue-700 rounded-sm p-1 cursor-pointer"
            onClick={handleUser}
          >
            Update Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseStateDemo;
