import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const BlogRows = ({ blogSection, colorScheme }) => {
  const { blog_posts, title, description } = blogSection;
  const { primaryColor, accentColor } = colorScheme;

  return (
    <Container>
      <h2 className="mb-4" style={{ color: accentColor }}>
        {title}
      </h2>
      <p className="mb-5">{description}</p>
      <Row className="gy-4">
        {blog_posts.map((post) => (
          <Col xs={12} key={post.id}>
            <Card className="flex-row h-100">
              <div className="col-md-4">
                <Card.Img
                  src={post.image}
                  alt={post.title}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
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
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogRows;
