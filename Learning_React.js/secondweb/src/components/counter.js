import React, { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [cnt, increment] = useState(0);
  const [text,settext]=useState('');
  const [date,setdate]=useState(new Date());

  const addone=()=>{
    increment((prev)=>prev+1);
  }

  const change=(e)=>{
   settext(e.target.value);
   }

//    const tick=()=>{
//     setdate(new Date());
//    }

  useEffect(() => {
    console.log("updating document title");
    document.title=`the count is ${cnt}`;
    const Time=setInterval(()=>{
        setdate(new Date());
    },1000);
    return ()=>{
        clearInterval(Time);
    }

  },[cnt])
  

  return (
    <>
    <p>current time: {date.toLocaleTimeString()}</p>
      <p>Count Value :{cnt}</p>
      {/* <button type="button" onClick={()=>increment(cnt + 1)}> */}
      <button type="button" onClick={addone}>
        Add One
      </button><br /><br />
      <input type="text" onChange={change}/>
      <p>{text}</p>

    </>
  );
}

export default Counter;

//   how increment looks in this case
//   const increment(cnt){
//     return cnt=cnt+1;
//   }