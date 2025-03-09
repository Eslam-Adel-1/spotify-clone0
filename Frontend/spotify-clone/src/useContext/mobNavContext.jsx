import { useState, createContext } from "react";
export const mobNavContext = createContext(null);

const MobileNavbarContext = ({ children }) => {
  const [mobNav, setMobNav] = useState(false);
  const [currentTab, setCurrentTab] = useState(null);

  return (
    <mobNavContext.Provider
      value={{
        mobNav,
        setMobNav,
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </mobNavContext.Provider>
  );
};

export default MobileNavbarContext;
