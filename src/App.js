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
          <Navigation
            navigation={siteConfig.navigation}
            colorScheme={siteConfig.color_scheme}
          />
          <HeaderBlock
            headerBlock={siteConfig.header_block}
            primaryColor={siteConfig.color_scheme.primary_color}
          />
          <BlogSectionBlock
            blogSection={siteConfig.blog_section_block}
            primaryColor={siteConfig.color_scheme.primary_color}
          />
          <ProjectsBlock
            projectsBlock={siteConfig.projects_block}
            primaryColor={siteConfig.color_scheme.primary_color}
            secondaryColor={siteConfig.color_scheme.secondary_color}
          />
        </div>
      ) : (
        <p className="text-center mt-5">Loading site configuration...</p>
      )}
    </div>
  );
}

export default App;
