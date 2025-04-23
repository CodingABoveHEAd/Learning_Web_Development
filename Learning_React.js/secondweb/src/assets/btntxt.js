import React from "react";
import { useState } from "react";

export default function Btntxt(){
    const [col,setcol]=useState('black');

    const rand=()=>{
        const color=['blue','yellow','red','violet','green'];
        return color[Math.floor(Math.random()*color.length)];
    }

    return(
        <>
            <p style={{backgroundColor:col}}>This is my colorful text</p>
            <button style={{color:'red'}} type='button' onClick={()=>setcol(rand())}>Change background color</button>
        </>
    );
}

