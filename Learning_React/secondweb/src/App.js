import logo from './logo.svg';
import Section from "./components/React_HOC/section";
import Counter from "./components/React_HOC/counter";
import Clickcounter from "./components/React_HOC/clickcounter";
import React from 'react';

class App extends React.Component {

  state={
    theme:'dark',
  };

  render(){
    const {theme}=this.state;
  return(
    <>
      <Section  theme={theme}/>
    </>
  );
}
  
}

export default App;
