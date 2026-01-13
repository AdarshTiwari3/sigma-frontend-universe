import { useMemo, useState } from "react";
//Use it only when computation is expensive or causes re-render lag
const UseMemoDemo = () => {
  // it is used in large computation to resolve performance issue

  const [count, setCount] = useState(0);
  const largeComputation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
      sum += i;
    }
    console.log("Runs once", Date.now().toLocaleString());

    return sum;
  }, []);

  return (
    <div className="p-8">
      <div>
        <h2>UseEffect Practice</h2>
      </div>
      <div>
        <p>Count:{count}</p>
        <p>Total Sum: {largeComputation}</p>
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

export default UseMemoDemo;
