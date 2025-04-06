import "bootstrap/dist/css/bootstrap.min.css";
import HeaderBlock from "../components/HeaderBlock";
import BlogSectionBlock from "../components/blog/BlogSectionBlock";
import ProjectsBlock from "../components/ProjectsBlock";
import React from "react";

function Home({ siteConfig }) {
  console.log(siteConfig);
  return (
    <div>
      {siteConfig ? (
        <div
          style={{ backgroundColor: siteConfig.color_scheme.background_color }}
        >
          <HeaderBlock
            headerBlock={siteConfig.header_block}
            primaryColor={siteConfig.color_scheme.primary_color}
            colorScheme={siteConfig.color_scheme}
          />
          <BlogSectionBlock
            blogSection={siteConfig.blog_section_block}
            primaryColor={siteConfig.color_scheme.primary_color}
            colorScheme={siteConfig.color_scheme}
            style={siteConfig.blog_section_block.blog_style}
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

export default Home;
