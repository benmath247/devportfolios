import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderBlock from "./components/HeaderBlock";
import Navigation from "./components/Navigation";
import BlogSectionBlock from "./components/BlogSectionBlock";
import ProjectsBlock from "./components/ProjectsBlock";

function App({ siteConfig }) {
  return (
    <div>
      {siteConfig ? (
        <div
          style={{ backgroundColor: siteConfig.color_scheme.background_color }}
        >
          <Navigation navigation={siteConfig.navigation} />
          <HeaderBlock headerBlock={siteConfig.header_block} />
          <BlogSectionBlock blogSection={siteConfig.blog_section_block} />
          <ProjectsBlock projectsBlock={siteConfig.projects_block} />
        </div>
      ) : (
        <p className="text-center mt-5">Loading site configuration...</p>
      )}
    </div>
  );
}

export default App;
