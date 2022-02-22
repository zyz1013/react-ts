import * as React from "react";
import * as ReactDOM from "react-dom";
import Loader from "./Loader";

let App = Loader;

const MOUNT_NODE = document.getElementById("root");

const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

if ((module as any).hot) {
  (module as any).hot.accept("./Loader", () => {
    const NextLoader = require("./Loader").default;
    App = NextLoader;
    setImmediate(() => {
      if (MOUNT_NODE) {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      }
      render();
    });
  });
}

render();
