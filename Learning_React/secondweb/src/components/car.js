import React from "react";
import { createRoot } from "react-dom/client";

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"BMW.",
            model:props.model,
            age:props.year,
            color:"Black."
        };
    }
    changeColor=(col)=>{
        this.setState({
            color:col
        });
    }
    render(){
          const {name,color,age,model}=this.state;
        return(
        <>
        <h1>
        {this.props.children}
            The name of my car is {name} 
            The color of my car is {color}
            The age of my car is {age}
            The model of my car is {model}
        </h1>
        <button onClick={this.changeColor.bind(this, 'blue.')}>Change Color using bind</button>
        <button onClick={()=>this.changeColor('red.')}>Change Color using function</button>
        </>
        );
    }
}



export default Car;


// const car=new Car();
// const cont=document.getElementById('root1');
// const root=createRoot(cont);
// root.render(<Car />);