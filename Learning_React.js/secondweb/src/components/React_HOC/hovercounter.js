import React from "react";

class Hovercounter extends React.Component {

  render() {
    const { count,increment } = this.props;
    return (
      <>
        <h1 onMouseOver={increment}>
          You hovered {count} times
        </h1>
      </>
    );
  }
}

export default Hovercounter;
