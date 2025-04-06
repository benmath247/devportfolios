import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const TopBarNav = ({ navigation, linkStyle, hoverHandlers, primaryColor }) => {
  const {
    navigation_items,
    github_link,
    linkedin_link,
    email_link,
    resume_link,
  } = navigation;

  return (
    <Navbar
      style={{ backgroundColor: primaryColor, padding: "1rem" }}
      variant="dark"
      expand
    >
      <Container fluid>
        <Nav
          className="me-auto"
          style={{ display: "flex", flexDirection: "row" }}
        >
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
          <Nav.Link
            href={`mailto:${email_link}`}
            style={linkStyle}
            {...hoverHandlers}
          >
            Email
          </Nav.Link>
          <Nav.Link href={resume_link} style={linkStyle} {...hoverHandlers}>
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopBarNav;
