import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Segment inverted color="orange">
      <Menu inverted secondary size="large">
        <Menu.Item
          id="header"
          name="my portfolio"
          as={Link}
          to={{ pathname: "/" }}
        />
        <Menu.Item
          id="projects-tab"
          name="projects"
          as={Link}
          to={{ pathname: "/projects" }}
        />
        <Menu.Item
          id="cv-tab"
          name="CV"
          as={Link}
          to={{ pathname: "/cv" }}
        />
        <Menu.Item
          id="about-tab"
          name="about me"
          as={Link}
          to={{ pathname: "/about" }}
        />
        <Menu.Item
          id="contact-tab"
          name="contact"
          as={Link}
          to={{ pathname: "/contact" }}
        />
      </Menu>
    </Segment>
  );
};

export default Header;
