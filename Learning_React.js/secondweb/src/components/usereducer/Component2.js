import React, { useContext } from "react";
import { countercontext } from "./complexounter";

function Component2() {
  const countContext = useContext(countercontext);
  return (
    <>
      {/* <p>Component A</p> */}
      <button
        onClick={() =>
          countContext.countdispatch({
            type: "increment2",
            value: 2,
          })
        }
      >
        increment2
      </button>

      {
        <button
          onClick={() =>
            countContext.countdispatch({
              type: "decrement2",
              value: 2,
            })
          }
        >
          decrement2
        </button>
      }
    </>
  );
}

export default Component2;
