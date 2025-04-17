import HeaderBlock from "../components/HeaderBlock";
import BlogSectionBlock from "../components/blog/BlogSectionBlock";
import ProjectsBlock from "../components/ProjectsBlock";
import React from "react";
import { useSiteConfigContext } from "../contexts/siteConfigContext";
import { Spinner } from "react-bootstrap";

function Home() {
  const { siteConfig } = useSiteConfigContext();
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

export default Home;
