import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import ProjectList from "./pages/ProjectList";
import { useSiteConfigContext } from "./contexts/siteConfigContext";

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
