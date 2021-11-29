import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <PrimeraApp /> */}
    <CounterApp value={10} />
  </React.StrictMode>,
  document.getElementById("root")
);
