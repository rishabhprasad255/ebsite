import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function AppRouter() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <Redirect from="/" to="/products" />
      <Switch>
        <Route path="/products" component={Home} />
      </Switch>
    </>
  );
}

export default AppRouter;
