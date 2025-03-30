import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";

function App({ siteConfig }) {
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
            zIndex: 1,
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
        <p className="text-center mt-5">Loading site configuration...</p>
      )}
    </div>
  );
}

export default App;
