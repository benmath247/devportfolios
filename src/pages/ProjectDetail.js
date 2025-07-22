import { useParams } from "react-router-dom";
import { useSiteConfigContext } from "../contexts/siteConfigContext";

const ProjectDetail = () => {
  const { siteConfig } = useSiteConfigContext();
  const { slug } = useParams();

  const project = siteConfig?.projects_block?.project_items.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return <p className="text-center mt-5">Project not found.</p>;
  }

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: siteConfig.color_scheme.background_color }}
    >
      <h1 style={{ color: siteConfig.color_scheme.text_color }}>
        {project.title}
      </h1>

      {project.subtitle && <p>{project.subtitle}</p>}
      <div className="text-center">
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid mb-3"
          style={{ height: "500px" }}
        />
      </div>
      <p>{project.description}</p>
      <div
        className="blog-content"
        style={{ color: siteConfig.color_scheme.text_color }}
      />
    </div>
  );
};

export default ProjectDetail;
