import React from "react";
import { Nav } from "react-bootstrap";
import "./AnimatedNavLink.css";

const AnimatedNavLink = ({
  href,
  children,
  linkStyle,
  hoverHandlers,
  animation,
}) => {
  return (
    <div {...hoverHandlers}>
      <Nav.Link
        href={href}
        style={linkStyle}
        className={`animated-nav-link ${animation}-hover`}
      >
        <div className="nav-link-container">{children}</div>
      </Nav.Link>
    </div>
  );
};

export default AnimatedNavLink;
