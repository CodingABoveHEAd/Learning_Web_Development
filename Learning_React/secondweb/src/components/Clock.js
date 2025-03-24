import React from "react";
import { createRoot } from "react-dom/client";

const elem1 = React.createElement("h1", null, "Hello, world");
const elem2 = <h1>Hello World part2</h1>;
console.log(elem1);
console.log(elem2);

//functional way
// function Print({locale}){
//   return (<h1>Hello {new Date().toLocaleTimeString(locale)}</h1>);
// }

// const cont=document.getElementById('root1');
// const root1=createRoot(cont);
// root1.render(<Print locale="bn-BD"/>);

// using classname:
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  
  componentDidMount() {
   this.clockTimer= setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

 tick(){
        this.setState({ date: new Date()});
  }

  render() {
    return (
      <h1>
        Hello - {this.props.children}{" "}
        {this.state.date.toLocaleTimeString(this.props.locale)}
      </h1>
    );
  }
}

// const clkcomp = new Clock();
// const cont = document.getElementById("root1");
// const root1 = createRoot(cont);
// root1.render(<Clock locale="bn-BD">Test</Clock>);

export default Clock;

//Class object way
// class Clock extends React.Component {
//   time() {
//     return (<h1>Hell0 {new Date().toLocaleTimeString()}</h1>);
//   }
// }

// const clkcomp=new Clock();
// const cont=document.getElementById('root1');
// const root1=createRoot(cont);
// setInterval(() => {
//   root1.render(clkcomp.time());
// }, 1000);

// Ensure your HTML has: <div id="root1"></div>
// const container = document.getElementById("root1");
// const root1 = createRoot(container);
// root1.render(elem2);
