import { useEffect, useState } from "react";

export default function LayouComponent1(){
    const [small,setsmall]=useState(false);

    const check=()=>{
        setsmall(window.innerWidth<768);
    }
    useEffect(() => {
    // check();
    window.addEventListener('resize',check);
      
    return()=>window.removeEventListener('resize',check);
    }, [])
    

    return(
        <>
            <h1>
                You are browsing on {small?'small':'large'} device
            </h1>
        </>
    );
}