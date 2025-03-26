import Notecontext from "./notecontext";
import React from "react";
import { useState } from "react";

const NoteState = (props) => {
  const obj = {
    name: "Niloy",
    class: "2nd year",
  };

  const [state, setState] = useState(obj);
  const update=()=>{
    setTimeout(()=>{ 
        setState({
            name: "Nishan",
            class: "4",
        })
    },2000);
  };


  return (<Notecontext.Provider value={{state,update}}>
  {props.children}
  </Notecontext.Provider>
  );
};

export default NoteState;
