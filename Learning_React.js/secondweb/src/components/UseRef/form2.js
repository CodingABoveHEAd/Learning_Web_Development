import { React, forwardRef } from "react";

function Form2({ placeholder, type}, ref) {
    return(<input ref={ref} type={type} placeholder={placeholder}></input>);
//    console.log(type);
}
const Ref = forwardRef(Form2);

export default Ref;
