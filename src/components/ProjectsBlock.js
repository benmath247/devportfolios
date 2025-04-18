import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectCarousel from "./project/ProjectCarousel";

const ProjectsBlock = ({ projectsBlock, primaryColor, secondaryColor }) => {
  if (!projectsBlock) return null;

  const {
    project_items,
    project_style,
    title,
    description,
    background_color_override,
  } = projectsBlock;

  const renderProjectsBlock = (project_items) => {
    if (project_style === "carousel") {
      return (
        <ProjectCarousel
          projectsSection={projectsBlock}
          colorScheme={{
            primary_color: primaryColor,
            secondary_color: secondaryColor,
          }}
        />
      );
    } else {
      return (
        <Row>
          {project_items.map((project) => (
            <Col md={4} className="mb-4" key={project.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      // TODO: this should not use URLfield in the backend. it could very well be an internal link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: primaryColor,
                        borderColor: primaryColor,
                        color: "#fff",
                      }}
                    >
                      Visit Project
                    </Button>
                    <Button
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: secondaryColor,
                        borderColor: secondaryColor,
                        color: "#fff",
                      }}
                    >
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
    }
  };
  return (
    <section
      style={{
        backgroundColor: background_color_override || "transparent",
        padding: "3rem 0",
      }}
      id="projects"
    >
      <Container>
        <h2 className="mb-4 text-center">{title}</h2>
        <p className="mb-5 text-center">{description}</p>
        {renderProjectsBlock(project_items)}
      </Container>
    </section>
  );
};

export default ProjectsBlock;
