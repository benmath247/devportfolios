import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSiteConfigContext } from "../contexts/siteConfigContext";

const BlogList = () => {
  const siteConfig = useSiteConfigContext();

  if (!siteConfig) {
    return <p className="text-center mt-5">Loading site configuration...</p>;
  }

  const posts = siteConfig.blog_section_block.blog_posts;

  if (!posts || posts.length === 0) {
    return <p className="text-center mt-5">No blog posts to display.</p>;
  }

  return (
    <Container className="py-5">
      <h1
        className="mb-4"
        style={{ color: siteConfig.color_scheme.text_color }}
      >
        Blog Articles
      </h1>
      <Row>
        {posts.map((post) => (
          <Col md={4} className="mb-4" key={post.id}>
            <Card>
              <Card.Img variant="top" src={post.image} alt={post.title} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.subtitle}</Card.Text>
                <Button
                  as={Link}
                  to={`/blog/${post.slug}`}
                  style={{
                    backgroundColor: siteConfig.color_scheme.primary_color,
                    borderColor: siteConfig.color_scheme.primary_color,
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
  );
};

export default BlogList;
