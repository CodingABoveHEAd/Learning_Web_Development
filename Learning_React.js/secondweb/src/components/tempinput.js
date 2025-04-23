import React from "react";
// import Tempcheck from "./tempcheck";

const scalenames = {
  c: "celcius",
  f: "farenheit",
};

function Tempinput({scale,Temp,Change}) {

  return (
    <>
      <label>Enter temperature in {scalenames[scale]}</label>
      <br />
      <input type="number" value={Temp} onChange={Change} />
    </>
  );
}

export default Tempinput;
