import React from "react";
import Counter from "./counter"
import Clickcounter from "./clickcounter"

function Content({theme}){
    return(
        <>
        <Counter render={(count,increment)=> (
            <Clickcounter count={count} increment={increment} theme={theme}/>
          )} />
        </>
    );

}

export default Content;





