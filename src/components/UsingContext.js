import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const Appcontextfun = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const hideSideBar = () => {
    isSidebarOpen ? setisSidebarOpen(false) : setisSidebarOpen(true);
  };

  const listItems = [
    { id: 1, name: "Home", i: "home" },
    { id: 2, name: "Orders", i: "cube" },
    { id: 3, name: "Cart", i: "shopping-cart" },
    { id: 4, name: "Contact", i: "address-book" },
  ];

  return (
    <AppContext.Provider value={{ isSidebarOpen, hideSideBar, listItems }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { Appcontextfun, useAppContext };
