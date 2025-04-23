import React, { useState } from "react";
import Count from "./count";
import Button from "./Button";

export default function Counter() {
  const [count, setcount] = useState(0);

  const inchandle=()=>{
    setcount((prev)=>prev+1);
  }

  const dechandle=()=>{
    setcount((prev)=>prev-1);
  }




  return (
    <>
        <Count cnt={count} />
        <Button Handler={dechandle} type="danger">Decrement</Button>
        <Button Handler={inchandle} type="safe">increment</Button>
        
    </>
  );
  
}
