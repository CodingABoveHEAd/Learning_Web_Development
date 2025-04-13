import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/RouterDom/Home";
import Menu from "./Components/RouterDom/Menu";
import About from "./Components/RouterDom/About";
import Navbar2 from "./Components/RouterDom/Navbar2";
import Error from "./Components/RouterDom/Error";
// import Counter from "./Components/Preact/preact1";
import Apps from "./Components/RedUx/app";

import Dummy from "./Components/RedUx/dummy";
import { store } from "./Components/RedUx/Store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Dummy />
        </Provider>

        {/* <Apps /> */}
        {/* <Router>
          <Navbar2 />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Menu/*" element={<Menu />}>
              <Route path="world" element={<p>Hello world niloy</p>} />
            </Route>

            <Route path="/about/:category/:top" element={<About count="5" />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </Router> */}
      </>
    );
  }
}
export default App;
