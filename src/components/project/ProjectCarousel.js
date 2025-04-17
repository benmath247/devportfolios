import React, { useState, useEffect } from "react";
import { Container, Card, Button, Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProjectCarousel.css";

const ProjectCarousel = ({ projectsSection, colorScheme }) => {
  const { project_items, title, description } = projectsSection;
  const { primary_color, secondary_color, accent_color } = colorScheme;
  console.log(colorScheme);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  // Automatically move to the next slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % project_items.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [project_items.length]);

  const CustomPrevIcon = () => (
    <span
      className="carousel-control-prev-icon"
      style={{
        backgroundColor: primary_color,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaChevronLeft />
    </span>
  );

  const CustomNextIcon = () => (
    <span
      className="carousel-control-next-icon"
      aria-hidden="true"
      style={{
        backgroundColor: primary_color,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaChevronRight />
    </span>
  );

  return (
    <Container>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        prevIcon={<CustomPrevIcon />}
        nextIcon={<CustomNextIcon />}
        indicators={false}
        interval={null} // Disable built-in interval to use custom logic
        className="project-carousel"
      >
        {project_items.map((project) => (
          <Carousel.Item key={project.id}>
            <div className="d-flex justify-content-center">
              <Card
                className="border-0"
                style={{ width: "75%", maxWidth: "800px" }}
              >
                <div className="row g-0">
                  <div className="col-md-6">
                    <Card.Img
                      src={project.image}
                      alt={project.title}
                      className="h-100"
                      style={{ objectFit: "cover", minHeight: "300px" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <Card.Body className="h-100 d-flex flex-column p-4">
                      <Card.Title className="h3">{project.title}</Card.Title>
                      <Card.Text className="flex-grow-1">
                        {project.subtitle}
                      </Card.Text>
                      <Button
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: secondary_color,
                          borderColor: secondary_color,
                          color: "#fff",
                          alignSelf: "flex-start",
                        }}
                      >
                        Visit Project
                      </Button>
                      <Button
                        href={`/project/${project.slug}`}
                        style={{
                          backgroundColor: primary_color,
                          borderColor: primary_color,
                          color: "#fff",
                          alignSelf: "flex-start",
                        }}
                      >
                        Read More
                      </Button>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="text-center mt-4">
        {project_items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              backgroundColor:
                index === activeIndex ? primary_color : secondary_color,
              margin: "0 4px",
              cursor: "pointer",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProjectCarousel;
