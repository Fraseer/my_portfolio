import { Container } from "semantic-ui-react";

const Hello = () => {
  return (
    <Container>
      <h1 id="hello">Hello and welcome to my portfolio!</h1>
      <p>
        {" "}
        I am going to be using this site to showcase some of the projects I have
        been working on. Currently the projects are base around web development,
        using the languages JavaScript and Ruby to right the code. Any live
        websites will be written using React and run using the Netlify servers.{" "}
      </p>
    </Container>
  );
};

export default Hello;
