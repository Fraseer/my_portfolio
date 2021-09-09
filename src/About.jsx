import React from "react";
import { Container } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <h1 id="about-header">About Me</h1>
      <img
        width="200"
        id="about-picture"
        src="https://lh3.googleusercontent.com/pw/AM-JKLXXmt1cVgL7fB-xtpsgl2EGlqwA61ksDagoIrI3Cv0DeHWhKJMsjy89SSDTLJaszAd_AFmVleu7lb5nrohx2mFxk7eABfg78LdaxdD-vZCGwV-85E0r6pQPqSBiV2MveQAs1l4GBexWiC0gban26ETh=w634-h784-no?authuser=0"
        alt="Thats of me!"
      />
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
        basics, all the way to being job ready as a developer in just three
        months. Currently only a couple weeks in, soon I should be able to add
        more content.
      </p>
      <p>
        I grew up on the south east coast of the UK before spending six years in
        Bristol going to university and working as an Aerospace Engineer. I
        moved out to Sweden in December 2020, and haven't looked back,
        Gothenburg is a great city and I plan on spending a lot time here. After
        moving out here I decided to switch careers, and move into something
        completely new, which is where I discoverd Craft Academy and my journey
        began.
      </p>
      <p>
        Outside of coding I have hobbies including running, making use of
        Gothenburgs amazing nature, försöker lära sig svenska, and cooking as a
        way to relax.
      </p>
    </Container>
  );
};

export default About;
