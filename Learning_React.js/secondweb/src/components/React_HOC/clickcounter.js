import React from "react";

class Clickcounter extends React.Component {

  render() {
    const { count,increment,theme} = this.props;
    let style={};
    if(theme==='dark')
    {
     style={backgroundColor: '#000000',color:'#ffffff'};
    }
    return (
      <>
        <button type="button" onClick={increment} style={style}>
          You clicked {count} times
        </button>
      </>
    );
  }
}

export default Clickcounter;
