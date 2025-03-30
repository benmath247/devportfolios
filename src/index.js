import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import useSiteConfig from "./hooks/useSiteConfig";
import BlogPost from "./components/BlogPost";
import siteConfigData from "./data/siteConfig.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWrapper = (props) => {
  const { component } = props;

  //const siteConfig = useSiteConfig();
  const siteConfig = siteConfigData;

  console.log(siteConfig);
  const components = {
    App: <App siteConfig={siteConfig} />,
    BlogPost: <BlogPost siteConfig={siteConfig} />,
  };

  return components[component];
};

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AppWrapper component="App" />} />
        <Route
          path="/blog/:slug"
          element={<AppWrapper component="BlogPost" />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
