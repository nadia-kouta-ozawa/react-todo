import React from "react";
import ReactDom from "react-dom";

import { App } from "./App";
import Example from "./utils/Example";
// import HelloWorld from "./utils/HelloWorld";

class Main {
  constructor() {
    const ex = new Example();
    ex.console("nadia web starter kit");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new Main();

  ReactDom.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("app")
  );
});
