import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Car from "./components/car";
import Course from "./components/conditional";
import Names from "./components/lists";
import Form from "./components/Form";
import Temp from "./components/temp";
import Text from "./components/inheritence/text";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

const names = ["niloy", "Adit", "Siyam"];

root.render(
  <React.StrictMode>
    {/* <Car year='10.' model='i7'>Hi there.</Car> */}
    {/* <Course show={true}> </Course> */}
    {/* <Names id={names}></Names> */}
    {/* <Form></Form> */}
    {/* <Temp /> */}

    <Text />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
