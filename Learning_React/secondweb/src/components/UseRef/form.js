import {React,useRef,useEffect} from "react";
import Ref from './form2'

function Form(){
    const newref=useRef(null);
    useEffect(() => {
        newref.current.style.backgroundColor='red';
    }, [])
    
    return(
        <>
            <Ref ref={newref} placeholder="Enter title" type="text" />
        </>
    );
}

export default Form;