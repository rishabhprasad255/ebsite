import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Orders from "./components/Orders";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function AppRouter() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <Redirect from="/" to="/products" />
      <Switch>
        <Route path="/products" component={Home} />
        <Route path="/orders" component={Orders} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default AppRouter;
