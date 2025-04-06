import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const BlogMinimalist = ({ blogSection, colorScheme }) => {
  const { blog_posts, title, description } = blogSection;
  const { primaryColor, accentColor } = colorScheme;

  return (
    <Container>
      <h2 className="mb-4" style={{ color: accentColor }}>
        {title}
      </h2>
      <p className="mb-5">{description}</p>
      <ListGroup variant="flush">
        {blog_posts.map((post) => (
          <ListGroup.Item
            key={post.id}
            className="border-0 py-3"
            action
            href={`/blog/${post.slug}`}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{post.title}</h5>
                <p className="mb-0 text-muted">{post.subtitle}</p>
              </div>
              <span style={{ color: primaryColor }}>→</span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default BlogMinimalist;
