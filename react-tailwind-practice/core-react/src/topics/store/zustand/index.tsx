import useCounterStore from "@/topics/store/zustand/store/counter-store";

const ZustandStore = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  const buttonStyle = `bg-green-700 p-1 rounded-md cursor-pointer`;

  return (
    <div className="p-5">
      <div>
        <h2>Zustand Store</h2>
      </div>
      <div>
        <h2>Counter:{count}</h2>
        <div className="flex gap-4 mt-2">
          <button className={buttonStyle} onClick={increment}>
            Increment
          </button>
          <button className={buttonStyle} onClick={decrement}>
            Decrement
          </button>
          <button className={buttonStyle} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZustandStore;
