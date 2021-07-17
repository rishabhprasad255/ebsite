import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const Appcontextfun = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [whichComponent, setwhichComponent] = useState(0);
  const [cartlen, setCartlen] = useState(0);
  const [mycart, setMycart] = useState([
    {
      id: 1,
      title: "pankkkkkkkkkkkkkkkkkkkkt",
      price: "900",
      url: "https://google.com",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kcp4osw0/headphone/c/4/l/probass-fluid-x-boult-audio-original-imaftrbsrrrm4fdn.jpeg?q=70",
    },
    {
      id: 2,
      title: "ppp",
      price: "900",
      url: "https://google.com",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kcp4osw0/headphone/c/4/l/probass-fluid-x-boult-audio-original-imaftrbsrrrm4fdn.jpeg?q=70",
    },
    {
      id: 3,
      title: "mzzgay",
      price: "900",
      url: "https://google.com",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kcp4osw0/headphone/c/4/l/probass-fluid-x-boult-audio-original-imaftrbsrrrm4fdn.jpeg?q=70",
    },
    {
      id: 4,
      title: "ncnnc",
      price: "900",
      url: "https://google.com",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kcp4osw0/headphone/c/4/l/probass-fluid-x-boult-audio-original-imaftrbsrrrm4fdn.jpeg?q=70",
    },
    {
      id: 5,
      title: "lalal",
      price: "900",
      url: "https://google.com",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kcp4osw0/headphone/c/4/l/probass-fluid-x-boult-audio-original-imaftrbsrrrm4fdn.jpeg?q=70",
    },
    {
      id: 23,
      title: "lll",
      price: "900",
      url: "https://google.com",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kcp4osw0/headphone/c/4/l/probass-fluid-x-boult-audio-original-imaftrbsrrrm4fdn.jpeg?q=70",
    },
    {
      id: 22,
      title: "kojcj",
      price: "900",
      url: "https://google.com",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kcp4osw0/headphone/c/4/l/probass-fluid-x-boult-audio-original-imaftrbsrrrm4fdn.jpeg?q=70",
    },
  ]);

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
