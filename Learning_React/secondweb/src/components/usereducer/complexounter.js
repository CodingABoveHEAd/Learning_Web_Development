import react,{ useReducer } from "react";
import Component1 from "./Component1";
import React from "react";

export const countercontext=React.createContext();

const initialState = {
  counter: 0,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };

    case "decrement":
      return { ...state, counter: state.counter - action.value };

    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };

    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
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
        onClick={() =>
          dispatch({
            type: "increment",
            value: 5,
          })
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 5,
          })
        }
      >
        decrement
      </button>

      <p>count - {count.counter2}</p>
      <countercontext.Provider value={{countdispatch:dispatch}}>
        <Component1 />
      </countercontext.Provider>
      
    </>
  );
}

export default ComplexCounter;
