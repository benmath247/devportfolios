import React from "react";

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
    <div
      className="text-center py-5"
      style={{ backgroundColor: background_color_override }}
    >
      {image && <img src={image} alt="Header" className="img-fluid mb-4" />}
      <h1
        className={`${header_size === "medium" ? "display-4" : "display-3"}`}
        style={{
          color: header_color_override
            ? header_color_override
            : colorScheme.text_color,
        }}
      >
        {header}
      </h1>
      <h2
        className={`${subheading_size === "medium" ? "h4" : "h3"}`}
        style={{
          color: subheading_color_override
            ? subheading_color_override
            : colorScheme.text_color,
        }}
      >
        {subheading}
      </h2>
      {button_text && button_link && (
        <a
          href={button_link}
          className="btn mt-3"
          style={{
            backgroundColor: button_color_override || primaryColor,
            color: "#fff",
          }}
        >
          {button_text}
        </a>
      )}
    </div>
  );
};

export default HeaderBlock;
