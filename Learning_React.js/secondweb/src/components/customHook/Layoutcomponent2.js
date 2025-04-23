import { useEffect, useState } from "react";

export default function LayouComponent2(){
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
            <h1 className={small?'small':'large'}>
                You are browsing on another device.
            </h1>
        </>
    );
}