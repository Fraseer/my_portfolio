import { Container } from "semantic-ui-react";
// import fetch from "node-fetch";
// import xml2js from "xml2js-es6-promise";

const Hello = () => {
  //   exports.handler = async (event, context, callback) => {
  //     const mediumFeed = `https://medium.com/@fraseer1430`;
  //     const response = await fetch(mediumFeed);
  //     const xml = await response.text();
  //     const data = await xml2js(xml);
  //     return {
  //       statusCode: 200,
  //       body: JSON.stringify(data.rss.channel[0].item),
  //     };
  //   };

  return (
    <Container>
      <h1 id="hello">Hello and welcome to my portfolio!</h1>
      <p>
        I am going to be using this site to showcase some of the projects I've
        been working on. Currently the projects are base around web development,
        using the languages JavaScript and Ruby to write the code. Any live
        websites will be written using React and run using the Netlify servers.
      </p>
    </Container>
  );
};

export default Hello;
