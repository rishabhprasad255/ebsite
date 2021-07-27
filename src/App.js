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
import Checkout from "./Screens/Checkout";
import { useAppContext } from "./context/UsingContext";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import Invoice from "./Screens/Invoice";

function AppRouter() {
  const location = useLocation();
  const { pathNames } = useAppContext();

  return (
    <div className="app">
      {/* //when user is not logged in we redirect it to login*/}
      {/* {auth.currentUser ? null : <Redirect to="/login" />} */}

      {location.pathname in pathNames ? <Sidebar /> : null}
      {location.pathname in pathNames ? <Navbar /> : null}
      {location.pathname in pathNames ? <CategoryBar /> : null}

      {location.pathname === "/" ? (
        <Redirect from="/" to="/login" exact />
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
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/orders/invoice" component={Invoice} />
        <Route exact path="/home/categories/:category" component={Category} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default AppRouter;
