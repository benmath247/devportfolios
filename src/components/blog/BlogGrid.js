import React from "react";
import { Container, Row } from "react-bootstrap";
import BlogPost from "./BlogPost";
import "./Card.css";
import { useSiteConfigContext } from "../../contexts/siteConfigContext";

const BlogGrid = () => {
  const { siteConfig } = useSiteConfigContext();
  console.log(siteConfig);

  const textColor = siteConfig?.color_scheme?.text_color;
  const title = siteConfig?.blog_section_block?.title;
  const description = siteConfig?.blog_section_block?.blog_description;
  const blog_posts = siteConfig?.blog_section_block?.blog_posts;
  const name = siteConfig?.blog_section_block?.name;

  return (
    <Container>
      <h2 className="mb-4 text-center" style={{ color: textColor }}>
        {name}
      </h2>
      <p className="mb-4 text-center" style={{ color: textColor }}>
        {title}
      </p>

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
