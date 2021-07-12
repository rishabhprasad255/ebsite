import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {Appcontextfun} from './components/UsingContext';

ReactDOM.render(
  <Appcontextfun >
  <Router>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Router>
  </Appcontextfun>,
  document.getElementById("root")
);


