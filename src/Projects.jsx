import axios from "axios";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [project, setProjects] = useState({});

  useEffect(() => {
    //axios call in here
    axios.get("./data/projects.json").then((response) => {
      setProjects({ projects: response.data });
    }, []);

    return (
      <React.Fragment id={`project-${project.id}`} key={project.id}>
        <ProjectCard project={setProjects} />
      </React.Fragment>
    );
  });
};
export default Projects;

//---------------------------------------------------------------------------------------

// import axios from "axios";
// import React, { Component } from "react";
// import { Container, Grid } from "semantic-ui-react";
// import ProjectCard from "./ProjectCard";

// class Projects extends Component {
//   state = {
//     projects: [],
//   };

//   componentDidMount() {
//     axios.get("./data/projects.json").then((response) => {
//       this.setState({ projects: response.data });
//     });
//   }

//   render() {
//     const { projects } = this.state;

// let projectsList = projects.map((project) => {
//   return (
//     <div id={`project-${project.id}`} key={project.id}>
//       <ProjectCard project={project} />
//     </div>
//   );
// });

//     return (
//       <Container>
//         <h1 id="projects-header">My Projects</h1>
//         <Grid>{projectsList}</Grid>
//       </Container>
//     );
//   }
// }

// export default Projects;
