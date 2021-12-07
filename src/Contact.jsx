import React from "react";
import { Container } from "semantic-ui-react";

const ContactForm = () => {
  return (
    <Container>
      <h1 id="contact-header">Contact</h1>
      <p>
        If you like what you see, please don't hesitate to get in contact one of
        the ways below.
      </p>
      <p>Email: Fraser.Hughes@btinternet.com</p>
      <p>
        Social Media:{" "}
        <a
          href="https://www.linkedin.com/in/fraser-hughes-568243107/"
          rel="nofollow noreferrer"
        >
          {" "}
          LinkedIn.
        </a>
        <a href="https://github.com/Fraseer" rel="nofollow noreferrer">
          {" "}
          GitHub.
        </a>
      </p>
    </Container>
  );
};

export default ContactForm;
