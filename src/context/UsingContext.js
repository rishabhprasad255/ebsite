import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const Appcontextfun = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const hideSideBar = () => {
    isSidebarOpen ? setisSidebarOpen(false) : setisSidebarOpen(true);
  };

  const pathNames = {
    "/home": "home",
    "/orders": "orders",
    "/cart": "cart",
    "/contact": "contact",
    "/more": "more",
    "/login": "login",
    "/register": "register",
    "/user": "user",
  };
  const listItems = [
    { id: 1, name: "Home", i: "home", link: "/home" },
    { id: 2, name: "Orders", i: "cube", link: "/orders" },
    { id: 3, name: "Cart", i: "shopping-cart", link: "/cart" },
    { id: 4, name: "Contact", i: "address-book", link: "/contact" },
  ];

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, hideSideBar, pathNames, listItems }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { Appcontextfun, useAppContext };
