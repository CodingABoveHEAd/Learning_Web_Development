import React, { useContext, useEffect } from "react"; 
import Notecontext from "../../ContextAPI/notecontext";

const Test = () => {
    const a = useContext(Notecontext);

    useEffect(() => {
        a.update();
    }, []);

    return (
        <>
            <p>My name is {a.state.name} & I'm in class {a.state.class}</p>
        </>
    );
};

export default Test;
