import React from "react";

const ProjectsBlock = ({ projectsBlock }) => {
  if (!projectsBlock) return null;

  const { project_items, title, description, background_color_override } =
    projectsBlock;

  return (
    <section
      className="py-5"
      style={{ backgroundColor: background_color_override }}
    >
      <div className="container">
        <h2 className="mb-4">{title}</h2>
        <p className="mb-5">{description}</p>
        <div className="row">
          {project_items.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </a>
                  <a
                    href={project.github_link}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsBlock;
