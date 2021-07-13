import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Appcontextfun } from "./components/UsingContext";

ReactDOM.render(
  <Router>
    <Appcontextfun>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </Appcontextfun>
  </Router>,
  document.getElementById("root")
);
