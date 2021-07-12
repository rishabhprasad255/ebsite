import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const Appcontextfun = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const hideSideBar = () => {
    isSidebarOpen ? setisSidebarOpen(false) : setisSidebarOpen(true);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, hideSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { Appcontextfun, useAppContext };
