import React from "react";
import "./App.css";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Orders from "./Screens/Orders";
import Cart from "./Screens/Cart";
import Support from "./Screens/Support";
import Error from "./Screens/Error";
import User from "./Screens/User";
import More from "./Screens/More";
import { useAppContext } from "./context/UsingContext";

function AppRouter() {
  const location = useLocation();
  const { pathNames } = useAppContext();

  return (
    <>
      {location.pathname in pathNames ? <Sidebar /> : null}
      {location.pathname in pathNames ? <Navbar /> : null}

      {location.pathname === "/" ? (
        <Redirect from="/" to="/home" exact />
      ) : null}

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/user" component={User} />
        <Route exact path="/more" component={More} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default AppRouter;
