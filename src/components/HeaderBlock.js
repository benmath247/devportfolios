import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Typed from "typed.js";

const getHeaderStyles = (header_color_override, colorScheme) => ({
  color: header_color_override || colorScheme.text_color,
});

const getSubheadingStyles = (subheading_color_override, colorScheme) => ({
  color: subheading_color_override || colorScheme.text_color,
});

const getButtonStyles = (button_color_override, primaryColor) => ({
  backgroundColor: button_color_override || primaryColor,
  borderColor: button_color_override || primaryColor,
  color: "#fff",
  marginTop: "1rem",
});

const getContainerStyles = (background_color_override) => ({
  backgroundColor: background_color_override || "transparent",
  padding: "3rem 0",
  textAlign: "center",
});

const HeaderBlock = ({ headerBlock, primaryColor, colorScheme }) => {
  if (!headerBlock) return null;

  const {
    background_color_override,
    image,
    header,
    header_color_override,
    header_size,
    subheading,
    subheading_color_override,
    subheading_size,
    button_text,
    button_link,
    button_color_override,
  } = headerBlock;

  return (
    <div style={getContainerStyles(background_color_override)}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            {image && <Image src={image} alt="Header" fluid className="mb-4" />}
            <h1
              className={header_size === "medium" ? "display-4" : "display-3"}
              style={getHeaderStyles(header_color_override, colorScheme)}
            >
              <span
                ref={(el) => {
                  if (!el) return; // Guard against null ref
                  const options = {
                    strings: [header],
                    typeSpeed: 50,
                    backSpeed: 25,
                    showCursor: false, // Hide cursor when done
                    onComplete: () => {
                      // Start typing subheading after heading is complete
                      const subheadingElement =
                        document.getElementById("subheading");
                      if (subheadingElement) {
                        new Typed(subheadingElement, {
                          strings: [subheading],
                          typeSpeed: 50,
                          backSpeed: 25,
                          showCursor: false, // Hide cursor when done
                          startDelay: 300, // Small delay before subheading starts
                        });
                      }
                    },
                  };
                  new Typed(el, options);
                }}
              />
            </h1>
            <h2
              id="subheading"
              className={subheading_size === "medium" ? "h4" : "h3"}
              style={getSubheadingStyles(
                subheading_color_override,
                colorScheme
              )}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBlock;
