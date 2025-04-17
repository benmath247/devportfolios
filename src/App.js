import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail";
import { useSiteConfigContext } from "./contexts/siteConfigContext";

import { Spinner } from "react-bootstrap";

function App() {
  const { siteConfig } = useSiteConfigContext();

  return (
    <div>
      {siteConfig ? (
        <div>
          <Router>
            <Navigation
              navigation={siteConfig.navigation}
              colorScheme={siteConfig.color_scheme}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogList />} />

              <Route path="/projects" element={<ProjectList />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>
          </Router>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
}

export default App;
