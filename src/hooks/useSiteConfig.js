import { useEffect, useState } from "react";
import axios from "axios";

// import the siteConfig.json file from ../data/siteConfig.json
import siteConfigData from "../data/siteConfig.json";
const useSiteConfig = () => {
  const [siteConfig, setSiteConfig] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND;
  const siteId = process.env.REACT_APP_PORTFOLIO_ID;
  const url = `${backendUrl}/portfolios/${siteId}`;

  return siteConfigData;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setSiteConfig(response.data);
      })
      .catch((error) => {
        console.error("Error fetching site config:", error);
      });
  }, [url]);

  return siteConfig;
};

export default useSiteConfig;
