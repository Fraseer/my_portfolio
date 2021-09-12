import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
      <Menu attached="top">
        <Menu.Item
          id="header"
          name="my portfolio"
          as={Link}
          to={{ pathname: "/" }}
        />
        <Menu.Item
          id="projects-tab"
          name="projects"
          as={NavLink}
          to={{ pathname: "/projects" }}
        />
        <Menu.Item
          id="cv-tab"
          name="CV"
          as={NavLink}
          to={{ pathname: "/cv" }}
        />
        <Menu.Item
          id="about-tab"
          name="about me"
          as={NavLink}
          to={{ pathname: "/about" }}
        />
        <Menu.Item
          id="contact-tab"
          name="contact"
          as={NavLink}
          to={{ pathname: "/contact" }}
        />
      </Menu>
  );
};

export default Header;
