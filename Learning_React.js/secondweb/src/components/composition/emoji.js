import React from "react";
import Text from "./Textf";

class Emoji extends React.Component {
  addemoji(text, emoji) {
    return emoji + " " + text + " " + emoji;
  }
  render() {
    return  this.props.children({addemoji:this.addemoji});
  }
}

export default Emoji;
