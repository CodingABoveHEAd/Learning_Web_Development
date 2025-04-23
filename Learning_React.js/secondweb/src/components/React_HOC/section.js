import React from "react";
import Content from "./content";

function Section({theme}){
    return (
    <>
    <h1>This is a section</h1>
    <Content theme={theme}/>
    </>
    );
}

export default Section;