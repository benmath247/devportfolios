import React from "react";

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

  const handleMouseOver = (e) => {
    e.target.style.color = link_color_on_hover || secondaryColor;
  };

  const handleMouseOut = (e) => {
    e.target.style.color = link_color_override || accentColor;
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: primaryColor,
        padding: "1rem",
      }}
    >
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navigation_items.map((item) => (
            <li className="nav-item" key={item.id}>
              <a
                className="nav-link"
                href={item.link}
                style={{ color: link_color_override || accentColor }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="d-flex">
          <a
            href={github_link}
            className="btn"
            style={{ color: accentColor }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            GitHub
          </a>
          <a
            href={linkedin_link}
            className="btn"
            style={{ color: accentColor }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email_link}`}
            className="btn"
            style={{ color: accentColor }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Email
          </a>
          <a
            href={resume_link}
            className="btn"
            style={{ color: accentColor }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
