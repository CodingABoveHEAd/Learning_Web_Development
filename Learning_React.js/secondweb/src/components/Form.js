import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuei: "JavaScript",
      valuef: "JavaScript is Awesome",
      values: "Angular",
      check: false,
    };
  }
  //e=event
  //target=input one that triggers the event
  //value= value of that input

  Change = (e) => {
    const { type,value,checked } = e.target;
    if (type === "text") {
      this.setState({
        valuei: value,
      });
    } else if (type === "select-one") {
      this.setState({
        values: value,
      });
    } else if (type === "checkbox") {
      this.setState({
        check: checked,
      });
    } else {
      this.setState({
        valuef: value,
      });
    }
  };

  submit = (e) => {
    const { valuei, valuef, values, check } = this.state;
    e.preventDefault();
    console.log(valuei, valuef, values, check);
  };

  render() {
    const { valuei, valuef, values, check } = this.state;
    return (
      <>
        <form onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Enter Title"
            value={valuei}
            onChange={this.Change}
          />
          <br />
          <br />

          <textarea
            name="text"
            value={valuef}
            onChange={this.Change}
          ></textarea>
          <br />
          <br />

          <select value={values} onChange={this.Change}>
            <option>React</option>
            <option>Angular</option>
            <option>Node</option>
          </select>
          <br />
          <br />

          <input type="checkbox" checked={check} onChange={this.Change} />
          <br/>
          <br/>
          <input type="submit"/>
        </form>
        {/* <p>Current JavaScript value: {valuei}</p> */}
      </>
    );
  }
}

export default Form;
