import React from "react";
import { useState } from "react";
import { signal, Signal, effect, batch } from "@preact/signals-react";
import Counter, { count, double } from "./Counter";

//   const count = signal(0);
//   const double = signal(0);

export default function Counter1() {
  console.log("render");
  //   const [count, setcount] = useState(0);

  // console.log(typeof count);

  //    const handle=(val)=>{
  //     setcount((prev) => prev + val);
  //   }
  console.log(count.value);

  const handle = (val) => {
    batch(() => {
      count.value += val;
      double.value += val * 2;
    });
  };

  //   effect(()=>console.log(`updated count is ${count.value}`));
  //   effect(()=>console.log(`hello world`));

  return (
    <>
      <div>{count}</div>
      <div>{double}</div>
      <Counter />
      <button onClick={() => handle(2)}>Update</button>
      
    </>
  );
}
