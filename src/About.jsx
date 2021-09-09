import React from "react";
import { Container } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <h1 id="about-header">About Me</h1>
      <p>
        My journey into web developement started with the{" "}
        <a
          id="craftacademy"
          href="https://www.craftacademy.se/english/"
          rel="nofollow noreferrer"
        >
          Craft Academy bootcamp.{" "}
        </a>
        This is a very intensive course designed to take you from the very
        basics, all the way up to being job ready as a developer in just three
        months.
      </p>
      <p>
        Here is some info about me.... Some more info.... Oh look, even more...
      </p>
    </Container>
  );
};

export default About;
