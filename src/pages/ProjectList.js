import { Container, Row } from "react-bootstrap";
import { useSiteConfigContext } from "../contexts/siteConfigContext";
import ProjectCard from "../components/project/ProjectCard";
import { Spinner } from "react-bootstrap";

const ProjectList = () => {
  const { siteConfig } = useSiteConfigContext();
  if (!siteConfig) {
    return <Spinner animation="border" />;
  }

  const projects = siteConfig.projects_block.project_items;

  if (!projects || projects.length === 0) {
    return <p className="text-center mt-5">No projects to display.</p>;
  }
  return (
    <Container className="py-5">
      <h1
        className="mb-4"
        style={{ color: siteConfig.color_scheme.text_color }}
      >
        Projects
      </h1>
      <Row>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ProjectList;
