import React from "react";
import BlogGrid from "./BlogGrid";
import BlogRows from "./BlogRows";
import BlogMinimalist from "./BlogMinimalist";
import BlogCarousel from "./BlogCarousel";

const BlogSectionBlock = ({
  blogSection,
  colorScheme,
  style, // 'grid', 'rows', or 'minimalist'
}) => {
  if (!blogSection) return null;

  const { background_color_override } = blogSection;

  const sectionStyle = {
    backgroundColor: background_color_override || "transparent",
    color: colorScheme.text_color,
    padding: "3rem 0",
  };

  const blogProps = {
    blogSection,
    colorScheme,
  };

  return (
    <section style={sectionStyle} id="blog">
      {style === "grid" && <BlogGrid {...blogProps} />}
      {style === "rows" && <BlogRows {...blogProps} />}
      {style === "minimalist" && <BlogMinimalist {...blogProps} />}
      {style === "carousel" && <BlogCarousel {...blogProps} />}
    </section>
  );
};

export default BlogSectionBlock;
