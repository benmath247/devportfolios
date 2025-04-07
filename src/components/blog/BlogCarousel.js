import React, { useState } from "react";
import { Container, Card, Button, Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./BlogCarousel.css";

const BlogCarousel = ({ blogSection, colorScheme }) => {
  const { blog_posts, title, description } = blogSection;
  const { primary_color, secondary_color, accent_color } = colorScheme;
  console.log(colorScheme);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

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
      <h2 className="mb-4 text-center" style={{ color: accent_color }}>
        {title}
      </h2>
      <p className="mb-5 text-center">{description}</p>

      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        prevIcon={<CustomPrevIcon />}
        nextIcon={<CustomNextIcon />}
        indicators={false}
        interval={null}
        className="blog-carousel"
      >
        {blog_posts.map((post) => (
          <Carousel.Item key={post.id}>
            <div className="d-flex justify-content-center">
              <Card
                className="border-0"
                style={{ width: "75%", maxWidth: "800px" }}
              >
                <div className="row g-0">
                  <div className="col-md-6">
                    <Card.Img
                      src={post.image}
                      alt={post.title}
                      className="h-100"
                      style={{ objectFit: "cover", minHeight: "300px" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <Card.Body className="h-100 d-flex flex-column p-4">
                      <Card.Title className="h3">{post.title}</Card.Title>
                      <Card.Text className="flex-grow-1">
                        {post.subtitle}
                      </Card.Text>
                      <Button
                        href={`/blog/${post.slug}`}
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
        {blog_posts.map((_, index) => (
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

export default BlogCarousel;
