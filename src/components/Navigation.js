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

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navigation_items.map((item) => (
            <li className="nav-item" key={item.id}>
              <a
                className="nav-link"
                href={item.link}
                style={{ color: link_color_override }}
                onMouseOver={(e) => {
                  if (link_color_on_hover)
                    e.target.style.color = link_color_on_hover;
                }}
                onMouseOut={(e) => {
                  if (link_color_on_hover)
                    e.target.style.color = link_color_override || "";
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="d-flex">
          <a href={github_link} className="btn" style={{ color: accentColor }}>
            GitHub
          </a>
          <a
            href={linkedin_link}
            className="btn"
            style={{ color: accentColor }}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email_link}`}
            className="btn"
            style={{ color: accentColor }}
          >
            Email
          </a>
          <a href={resume_link} className="btn" style={{ color: accentColor }}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
