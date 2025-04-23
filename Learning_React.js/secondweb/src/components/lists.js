import React from "react";
import { createRoot } from "react-dom/client";



function Names(props) {
    const names=props.id;
  return (
    <>
      {names.map((nam, index) => <p key={index}>{index+1}.My name is {nam}</p> )}
    </>
  );
}

export default Names;
