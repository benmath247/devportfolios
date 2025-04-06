import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Spinner from "react-bootstrap/Spinner";
import useSiteConfig from "./hooks/useSiteConfig";

function App() {
  // use siteConfigContext to get site configuration
  const siteConfig = useSiteConfig();
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {siteConfig ? (
        <div
          style={{
            position: "relative",
            backgroundColor: siteConfig.color_scheme.background_color,
          }}
        >
          <Router>
            <Navigation
              navigation={siteConfig.navigation}
              colorScheme={siteConfig.color_scheme}
            />
            <Routes>
              <Route path="/" element={<Home siteConfig={siteConfig} />} />
              <Route
                path="/blog/:slug"
                element={<BlogPost siteConfig={siteConfig} />}
              />
            </Routes>
          </Router>
        </div>
      ) : (
        <div className="text-center mt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default App;
