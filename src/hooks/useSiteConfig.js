import { useEffect, useState } from "react";
import axios from "axios";

const useSiteConfig = () => {
  const [siteConfig, setSiteConfig] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND;
  const siteId = process.env.REACT_APP_PORTFOLIO_ID;
  const url = `${backendUrl}/portfolios/${siteId}`;

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
