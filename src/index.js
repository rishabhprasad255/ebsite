import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import AppRouter from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Appcontextfun } from "./context/UsingContext";

ReactDOM.render(
  <Router>
    <Appcontextfun>
      <AppRouter />
    </Appcontextfun>
  </Router>,
  document.getElementById("root")
);
