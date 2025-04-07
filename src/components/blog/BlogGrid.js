import React from "react";
import { Container, Row } from "react-bootstrap";
import BlogPost from "./BlogPost";
import "./Card.css";
import { useSiteConfigContext } from "../../contexts/siteConfigContext";

const BlogGrid = () => {
  const siteConfig = useSiteConfigContext();
  console.log(siteConfig);

  const accentColor = siteConfig?.color_scheme?.accent_color;
  const title = siteConfig?.blog_section_block?.blog_title;
  const description = siteConfig?.blog_section_block?.blog_description;
  const blog_posts = siteConfig?.blog_section_block?.blog_posts;

  return (
    <Container>
      <h2 className="mb-4" style={{ color: accentColor }}>
        {title}
      </h2>
      <p className="mb-5">{description}</p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {blog_posts.map((post) => (
          <BlogPost post={post}></BlogPost>
        ))}
      </Row>
    </Container>
  );
};

export default BlogGrid;
