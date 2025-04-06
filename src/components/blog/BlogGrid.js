import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const BlogGrid = ({ blogSection, colorScheme }) => {
  const { blog_posts, title, description } = blogSection;
  const { primaryColor, accentColor } = colorScheme;

  return (
    <Container>
      <h2 className="mb-4" style={{ color: accentColor }}>
        {title}
      </h2>
      <p className="mb-5">{description}</p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {blog_posts.map((post) => (
          <Col key={post.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={post.image}
                alt={post.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.subtitle}</Card.Text>
                <Button
                  href={`/blog/${post.slug}`}
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    color: "#fff",
                  }}
                  className="mt-auto align-self-start"
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogGrid;
