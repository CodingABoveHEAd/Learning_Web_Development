import { useReducer } from "react";

const initialState = {
    counter:0,
    counter2:0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, counter:state.counter + action.value};

    case "decrement":
      return {...state, counter:state.counter - action.value};

      case "increment2":
      return {...state, counter2:state.counter2 + action.value};

    case "decrement2":
      return {...state, counter2:state.counter2 - action.value};
    default:
      return state;
  }
};

function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>count - {count.counter}</p>
      <button
        type="increment"
        onClick={() =>dispatch({
            type:"increment",
            value:5
            })
        }
      >
        increment
      </button>
      <button
        type="decrement"
        onClick={() =>dispatch({
            type:"decrement",
            value:5
            })
        }
      >
        decrement
      </button>




      <p>count - {count.counter2}</p>
      <button
        type="increment2"
        onClick={() =>dispatch({
            type:"increment2",
            value:2
            })
        }
      >
        increment2
      </button>
      <button
        type="decrement2"
        onClick={() =>dispatch({
            type:"decrement2",
            value:2
            })
        }
      >
        decrement2
      </button>
    </>
  );
}

export default ComplexCounter;
