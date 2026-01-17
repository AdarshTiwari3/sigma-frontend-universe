import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "INCREMENT" | "DECREMENT" | "RESET";
}

const initialState: State = {
  count: 0,
  error: null,
};

function countReducer(state: State, action: Action): State {
  const type = action.type;

  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        error: null,
      };

    case "DECREMENT":
      const newVal = state.count - 1;
      const hasError = newVal < 0;
      return {
        ...state,
        count: hasError ? state.count : newVal,
        error: hasError ? "Can't be negative" : null,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="p-8">
      <div>
        <h2 className="text-center">Use Reducer Hook in React</h2>
      </div>
      <div className="mt-2">
        <h2>Count: {state.count}</h2>
        {state.error && (
          <div className="mt-2 mb-2 text-red-400">{state.error} </div>
        )}

        <div className="flex gap-4 pt-2">
          <button
            className="bg-green-700 p-2 rounded-md w-8 cursor-pointer"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            +
          </button>
          <button
            className="bg-green-700 p-2 rounded-md w-8 cursor-pointer"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            -
          </button>
          <button
            className="bg-green-700 p-2 rounded-md cursor-pointer"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default UseReducerDemo;
