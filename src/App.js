import React from "react";
import "./App.css";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CategoryBar from "./components/CategoryBar";
import Orders from "./Screens/Orders";
import Cart from "./Screens/Cart";
import Support from "./Screens/Support";
import Error from "./Screens/Error";
import More from "./Screens/More";
import Category from "./Screens/Category";
import User from "./Screens/User";
import { useAppContext } from "./context/UsingContext";
import { ebsite, db, auth } from "./firebase/firebase";
import Register from "./Screens/Register";
import Login from "./Screens/Login";

function AppRouter() {
  const location = useLocation();
  const { pathNames } = useAppContext();

  return (
    <>
      {location.pathname in pathNames ? <Sidebar /> : null}
      {location.pathname in pathNames ? <Navbar /> : null}
      {location.pathname in pathNames ? <CategoryBar /> : null}

      {location.pathname === "/" ? (
        <Redirect from="/" to="/home" exact />
      ) : null}

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/user" component={User} />
        <Route exact path="/more" component={More} />
        <Route exact path="/home/categories/:category" component={Category} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default AppRouter;
