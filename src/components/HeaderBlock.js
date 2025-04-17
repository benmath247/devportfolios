import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// Extract logic into variables
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
  // TODO: get colorscheme and headerblock from context. the props here are weird

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
            {image && (
              <Image
                src={image}
                alt="Header"
                fluid
                className="mb-4"
              />
            )}
            <h1
              className={header_size === "medium" ? "display-4" : "display-3"}
              style={getHeaderStyles(header_color_override, colorScheme)}
            >
              {header}
            </h1>
            <h2
              className={subheading_size === "medium" ? "h4" : "h3"}
              style={getSubheadingStyles(subheading_color_override, colorScheme)}
            >
              {subheading}
            </h2>
            {button_text && button_link && (
              <Button
                href={button_link}
                style={getButtonStyles(button_color_override, primaryColor)}
              >
                {button_text}
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBlock;
