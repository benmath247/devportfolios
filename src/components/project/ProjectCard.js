import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const handleCardClick = (slug) => {
    navigate(`/projects/${slug}`);
  };
  const navigate = useNavigate();
  return (
    <Col key={project.id}>
      <Card onClick={() => handleCardClick(project.slug)}>
        <Card.Img
          variant="top"
          src={project.image}
          alt={project.title}
          className="blog-card-img"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.subtitle}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
