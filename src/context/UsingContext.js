import React, { useContext, useState } from "react";
const AppContext = React.createContext();

const Appcontextfun = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [whichComponent, setwhichComponent] = useState(0);
  const [cartlen, setCartlen] = useState(0);
  const [mycart, setMycart] = useState([]);

  const hideSideBar = () => {
    isSidebarOpen ? setisSidebarOpen(false) : setisSidebarOpen(true);
  };

  const hideModal = (val) => {
    setwhichComponent(val);
    isModalOpen ? setisModalOpen(false) : setisModalOpen(true);
  };

  const pathNames = {
    "/home": "home",
    "/orders": "orders",
    "/cart": "cart",
    "/support": "support",
    "/more": "more",
    "/login": "login",
    "/register": "register",
    "/user": "user",
    "/home/categories/electronics": "/home/categories/electronics",
    "/home/categories/homedecore": "/home/categories/homedecore",
    "/home/categories/gaming": "/home/categories/gaming",
    "/home/categories/lights": "/home/categories/lights",
    "/home/categories/sofa": "/home/categories/sofa",
  };

  const listItems = [
    { id: 1, name: "Home", i: "home", link: "/home" },
    { id: 2, name: "Orders", i: "cube", link: "/orders" },
    { id: 3, name: "Cart", i: "shopping-cart", link: "/cart" },
    { id: 4, name: "Support", i: "address-book", link: "/support" },
  ];

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        hideSideBar,
        pathNames,
        listItems,
        isModalOpen,
        setisModalOpen,
        hideModal,
        whichComponent,
        mycart,
        setMycart,
        cartlen,
        setCartlen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { Appcontextfun, useAppContext };
