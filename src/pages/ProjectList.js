import { Container, Row } from "react-bootstrap";
import { useSiteConfigContext } from "../contexts/siteConfigContext";
import ProjectCard from "../components/project/ProjectCard";
import { Spinner } from "react-bootstrap";
import ProjectCarousel from "../components/project/ProjectCarousel";

const ProjectList = () => {
  const { siteConfig } = useSiteConfigContext();
  if (!siteConfig) {
    return <Spinner animation="border" />;
  }

  const projects = siteConfig.projects_block.project_items;
  const sectionStyle = siteConfig.projects_block.project_style;

  if (!projects || projects.length === 0) {
    return <p className="text-center mt-5">No projects to display.</p>;
  }
  const generateProjects = (projects) => {
    if (sectionStyle === "carousel") {
      return (
        <ProjectCarousel
          projectsSection={siteConfig.projects_block}
          colorScheme={siteConfig.color_scheme}
        />
      );
    } else {
      return (
        <Row className="justify-content-center">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </Row>
      );
    }
  };
  console.log("This is working");
  console.log(sectionStyle);
  return (
    <Container className="py-5">
      <h1
        className="mb-4"
        style={{ color: siteConfig.color_scheme.text_color }}
      >
        Projects
      </h1>

      {projects ? generateProjects(projects) : <p>No projects to display.</p>}
    </Container>
  );
};

export default ProjectList;
