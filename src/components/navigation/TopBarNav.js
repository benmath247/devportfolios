import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const TopBarNav = ({ navigation, linkStyle, hoverHandlers, primaryColor }) => {
  const {
    navigation_items,
    github_link,
    linkedin_link,
    email_link,
    resume_link,
  } = navigation;

  // Consistent icon styling with HamburgerNav
  const iconStyle = {
    fontSize: "1.5rem",
    width: "1.5em",
    textAlign: "center",
  };

  return (
    <Navbar
      style={{ backgroundColor: primaryColor, padding: "1rem" }}
      variant="dark"
      expand
    >
      <Container fluid>
        <Nav
          className="me-auto"
          style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
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
        <Nav className="d-flex align-items-center" style={{ gap: "1rem" }}>
          <Nav.Link
            href={github_link}
            style={linkStyle}
            {...hoverHandlers}
            className="social-icon-link"
          >
            <FontAwesomeIcon icon={faGithub} style={iconStyle} />
          </Nav.Link>
          <Nav.Link
            href={linkedin_link}
            style={linkStyle}
            {...hoverHandlers}
            className="social-icon-link"
          >
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
          </Nav.Link>
          <Nav.Link
            href={`mailto:${email_link}`}
            style={linkStyle}
            {...hoverHandlers}
            className="social-icon-link"
          >
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
          </Nav.Link>
          <Nav.Link
            href={resume_link}
            style={linkStyle}
            {...hoverHandlers}
            className="social-icon-link"
          >
            <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopBarNav;
