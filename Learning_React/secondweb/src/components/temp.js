import React from "react";
import Tempcheck from "./tempcheck";
import Tempinput from "./tempinput";
import { tocelcius, tofarenheit } from "./lib/converter";

// const scalenames = {
//   c: "celcius",
//   f: "farenheit",
// };

// function Tempinput({ scale, Temp, Change }) {
//   return (
//     <>
//       <label>Enter temperature in {scalenames[scale]}</label>
//       <br />
//       <input type="number" value={Temp} onChange={Change} />
//     </>
//   );
// }

class Temp extends React.Component {
  state = {
    temp: 0,
    scale: "",
  };

  handleChange = (e, scale) => {
    this.setState({
      temp: e.target.value,
      scale,
    });
  };

  render() {
    const { temp, scale } = this.state;
    var cel = temp;
    var fer = temp;
    scale === "f" ? (cel = tocelcius(temp)) : (fer = tofarenheit(temp));
    return (
      <>
        <Tempinput
          scale="c"
          Temp={cel}
          Change={(e) => this.handleChange(e, "c")}
        />
        <br />
        <br />
        <Tempinput
          scale="f"
          Temp={fer}
          Change={(e) => this.handleChange(e, "f")}
        />
      </>
    );
  }
}

export default Temp;
