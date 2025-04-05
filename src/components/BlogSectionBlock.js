import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const BlogSectionBlock = ({ blogSection, primaryColor, colorScheme }) => {
  if (!blogSection) return null;

  const { blog_posts, title, description, background_color_override } = blogSection;

  return (
    <section
      style={{
        backgroundColor: background_color_override || "transparent",
        color: colorScheme.text_color,
        padding: "3rem 0",
      }}
      id="blog"
    >
      <Container>
        <h2 className="mb-4">{title}</h2>
        <p className="mb-5">{description}</p>
        <Row>
          {blog_posts.map((post) => (
            <Col md={4} className="mb-4" key={post.id}>
              <Card>
                <Card.Img variant="top" src={post.image} alt={post.title} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.subtitle}</Card.Text>
                  <Button
                    href={`/blog/${post.slug}`}
                    style={{
                      backgroundColor: primaryColor,
                      borderColor: primaryColor,
                      color: "#fff",
                    }}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSectionBlock;
