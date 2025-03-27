import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>count - {count}</p>
      <button
        type="increment"
        onClick={() =>dispatch("increment")
        }
      >
        increment
      </button>
      <button
        type="decrement"
        onClick={() =>dispatch("decrement")
        }
      >
        decrement
      </button>
    </>
  );
}

export default Counter;
