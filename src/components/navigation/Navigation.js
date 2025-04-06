import React from "react";
import HamburgerNav from "./HamburgerNav";
import TopBarNav from "./TopBarNav";

const Navigation = ({ navigation, colorScheme }) => {
  if (!navigation) return null;

  const { link_color_override, link_color_on_hover } = navigation;
  const accentColor = colorScheme.accent_color;
  const secondaryColor = colorScheme.secondary_color;
  const primaryColor = colorScheme.primary_color;
  const style = navigation.style || "hamburger";
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

  const navProps = {
    navigation,
    linkStyle,
    hoverHandlers,
    primaryColor,
  };

  switch (style) {
    case "hamburger":
      return <HamburgerNav {...navProps} />;
    case "top_bar":
      return <TopBarNav {...navProps} />;
    default:
      return <HamburgerNav {...navProps} />;
  }
};

export default Navigation;
