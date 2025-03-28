// import logo from './logo.svg';
// import Section from "./components/React_HOC/section";
// import Counter from "./components/React_HOC/counter";
// import Clickcounter from "./components/React_HOC/clickcounter";
import React from "react";
import Todo from "./components/todo";
import Todof from "./components/todof";
// import Counter from "./components/counter";
import Form from "./components/UseRef/form";
import Ref from "./components/UseRef/form2";
import Counter from "./components/usereducer/Counter";
import ComplexCounter from "./components/usereducer/complexounter";
import GetPost from "./components/usereducer/GetPost";
import GetPost2 from "./components/usereducer/GetPost2";
import LayouComponent1 from "./components/customHook/Layoutcomponent";
import LayouComponent2 from "./components/customHook/Layoutcomponent2";
import Logo from "./assets/logo";
import Logo2 from "./assets/Logo2";
import Btntxt from "./assets/btntxt";

class App extends React.Component {
  render() {
    return (
      <div>
        <Btntxt />
      </div>
    );
  }
}

export default App;
