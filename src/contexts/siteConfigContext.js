import useSiteConfig from "../hooks/useSiteConfig";
import { createContext, useContext } from "react";
const SiteConfigContext = createContext();

const SiteConfigProvider = ({ children }) => {
  const siteConfig = useSiteConfig();

  return (
    <SiteConfigContext.Provider value={{ siteConfig }}>
      {children}
    </SiteConfigContext.Provider>
  );
};

const useSiteConfigContext = () => {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error(
      "useSiteConfigContext must be used within a SiteConfigProvider"
    );
  }
  return context;
};

export { SiteConfigProvider, SiteConfigContext, useSiteConfigContext };
