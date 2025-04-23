import React from "react";

class Todo extends React.Component {
  state = {
    todo: "",
    warning: null,
  };

  Handler = (e) => {
    const inpval = e.target.value;
    const warning = inpval.includes(".js") ? "You need JS Knowledge.":
    'no need of JavaScript.';
    this.setState({
      todo: inpval,
      warning,
    });
  };

  render() {
    const { todo, warning } = this.state;
    return (
      <>
      <p>{todo}</p>
        <input type="text" value={todo} onChange={this.Handler} />
      <p>{warning}</p>
      </>
    );
  }
}

export default Todo;
