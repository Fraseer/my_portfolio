import { Container, Grid } from "semantic-ui-react";

const Hello = () => {
  return (
    <Container>
      <h1 id="hello">Hello and welcome to my portfolio!</h1>
      <p>
        I am going to be using this site to showcase some of the projects I've
        been working on. Currently the projects are based around web development,
        written in JavaScript and Ruby. Any live websites will be written using
        React and run using the Netlify servers.
      </p>
      <br />
      <Grid>
        <img
          width="375"
          id="JS-picture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          alt="JavaScript logo."
        />

        <img
          width="375"
          id="Ruby-picture"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png"
          alt="Ruby logo."
        />
        <img
          width="375"
          id="React-picture"
          src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
          alt="React logo."
        />
      </Grid>
    </Container>
  );
};

export default Hello;
