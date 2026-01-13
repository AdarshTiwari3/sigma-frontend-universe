import { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Side Effect");
    return () => {
      //cleanup function
      console.log("Cleanup is done");
    };
  }, []);
  useEffect(() => {
    console.log("Count is :", count);
  }, [count]);
  console.log("Hello useEffect");

  return (
    <div className="p-8">
      <div>
        <h2>UseEffect Practice</h2>
      </div>
      <div>
        <p>Count:{count}</p>
        <div className="flex gap-4 mt-2">
          <button
            className="bg-green-700 rounded-sm p-1 cursor-pointer"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increment
          </button>
          <button
            className="bg-green-700 rounded-sm p-1 cursor-pointer"
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseEffectDemo;
