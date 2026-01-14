import { useRef, useState } from "react";

const UseRefDemo = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    countRef.current++; //increments the value but does not re-render on changing the value

    console.log("countState=", count);
    console.log("countRef=", countRef.current);
  };

  return (
    <div className="p-8">
      <div>
        <h2 className="text-center">useRef demo</h2>
      </div>
      <div className="mt-5">
        <p>Count:{count}</p>
        <button
          className="bg-green-700 rounded-sm p-1 mt-2 cursor-pointer"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default UseRefDemo;
