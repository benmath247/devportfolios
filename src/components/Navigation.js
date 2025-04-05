import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navigation = ({ navigation, colorScheme }) => {
  if (!navigation) return null;

  const {
    navigation_items,
    github_link,
    linkedin_link,
    email_link,
    resume_link,
    link_color_override,
    link_color_on_hover,
  } = navigation;

  const accentColor = colorScheme.accent_color;
  const secondaryColor = colorScheme.secondary_color;
  const primaryColor = colorScheme.primary_color;

  const linkStyle = {
    color: link_color_override || accentColor,
  };

  const hoverHandlers = {
    onMouseOver: (e) => {
      e.target.style.color = link_color_on_hover || secondaryColor;
    },
    onMouseOut: (e) => {
      e.target.style.color = link_color_override || accentColor;
    },
  };

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: primaryColor, padding: "1rem" }}
      variant="dark"
    >
      <Container fluid>
        {/* <Navbar.Brand style={{ color: accentColor }}>Menu</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {navigation_items.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.link}
                style={linkStyle}
                {...hoverHandlers}
              >
                {item.text}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href={github_link} style={linkStyle} {...hoverHandlers}>
              GitHub
            </Nav.Link>
            <Nav.Link href={linkedin_link} style={linkStyle} {...hoverHandlers}>
              LinkedIn
            </Nav.Link>
            <Nav.Link href={`mailto:${email_link}`} style={linkStyle} {...hoverHandlers}>
              Email
            </Nav.Link>
            <Nav.Link href={resume_link} style={linkStyle} {...hoverHandlers}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
