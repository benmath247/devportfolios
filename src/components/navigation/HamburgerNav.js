import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AnimatedNavLink from "./AnimatedNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const HamburgerNav = ({
  navigation,
  linkStyle,
  hoverHandlers,
  primaryColor,
}) => {
  const {
    navigation_items,
    github_link,
    linkedin_link,
    email_link,
    resume_link,
    icon_animation = "bounce",
  } = navigation;

  // Enhanced icon styling
  const iconStyle = {
    fontSize: "1.5rem", // Larger icons
    width: "1.5em", // Consistent width
    textAlign: "center", // Perfect centering
  };

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: primaryColor }}
      variant="dark"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {navigation_items.map((item) => (
              <AnimatedNavLink
                key={item.id}
                href={item.link}
                linkStyle={linkStyle}
                hoverHandlers={hoverHandlers}
                animation={item.animation || "none"}
              >
                {item.text}
              </AnimatedNavLink>
            ))}
          </Nav>
          <Nav className="d-flex align-items-center" style={{ gap: "1rem" }}>
            <AnimatedNavLink
              href={github_link}
              animation={icon_animation}
              {...{ linkStyle, hoverHandlers }}
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faGithub} style={iconStyle} />
            </AnimatedNavLink>
            <AnimatedNavLink
              href={linkedin_link}
              animation={icon_animation}
              {...{ linkStyle, hoverHandlers }}
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
            </AnimatedNavLink>
            <AnimatedNavLink
              href={`mailto:${email_link}`}
              animation={icon_animation}
              {...{ linkStyle, hoverHandlers }}
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            </AnimatedNavLink>
            <AnimatedNavLink
              href={resume_link}
              animation={icon_animation}
              {...{ linkStyle, hoverHandlers }}
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
            </AnimatedNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HamburgerNav;
