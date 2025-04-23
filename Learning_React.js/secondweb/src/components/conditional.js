import React from "react";
import { createRoot } from "react-dom/client";

class Course extends React.Component{
    constructor(props){
    super(props);
    this.state={
        name:"Web Development",
        title:"CSE 3109",
        credit:2.5,
        show:props.show
    }
    }

    change=()=>{
        if(this.state.title==="CSE 3109")
        this.setState({title:"CSE 3108"});
    else
        this.setState({title:"CSE 3109"});
    }

    render(){
        const {name,title,credit,show}=this.state;
        return(
        <>
            <h1>My course</h1>
            <h1>
            {name}, {title}, {credit}
            </h1>
            <button onClick={()=>this.change()}>change course</button>
            
            {
                show && <p>Hello</p>
            }
        </>
        );
    }

}

export default Course;