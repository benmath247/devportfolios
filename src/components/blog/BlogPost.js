import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BlogPost = ({ post }) => {
  const handleCardClick = (slug) => {
    navigate(`/blog/${slug}`);
  };
  const navigate = useNavigate();
  return (
    <Col key={post.id}>
      <Card onClick={() => handleCardClick(post.slug)}>
        <Card.Img
          variant="top"
          src={post.image}
          alt={post.title}
          className="blog-card-img"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.subtitle}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogPost;
