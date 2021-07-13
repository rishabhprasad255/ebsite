import React from "react";
import "./App.css";
import { Switch, Route} from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Orders from "./Screens/Orders";
import Cart from "./Screens/Cart";
import Contact from "./Screens/Contact";
import Error from './Screens/Error';
import User from './Screens/User';
import More from './Screens/More';

function AppRouter() {
  return (
    <>
      <Sidebar />
      <Navbar />

      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/orders" component={Orders} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
         <Route path="/user" component={User} />
         <Route path="/more" component={More} />
         <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default AppRouter;
