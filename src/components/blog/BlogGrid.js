import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const BlogGrid = ({ blogSection, colorScheme }) => {
  const { blog_posts, title, description } = blogSection;
  const { accentColor } = colorScheme;
  const navigate = useNavigate();

  const handleCardClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <Container>
      <h2 className="mb-4" style={{ color: accentColor }}>
        {title}
      </h2>
      <p className="mb-5">{description}</p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {blog_posts.map((post) => (
          <Col key={post.id}>
            <Card eonClick={() => handleCardClick(post.slug)}>
              <Card.Img
                variant="top"
                src={post.image}
                alt={post.title}
                className="blog-card-img"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.subtitle}</Card.Text>
                <div className="mt-auto text-primary fw-bold"></div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogGrid;
