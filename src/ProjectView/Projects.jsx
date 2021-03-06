import axios from "axios";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Container, Grid } from "semantic-ui-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("./data/projects.json").then((response) => {
      setProjects(response.data);
    });
  }, []);

  let projectsList = projects.map((project) => {
    return (
      <div id={`project-${project.id}`} key={project.id}>
        <ProjectCard project={project} />
      </div>
    );
  });
  return (
    <Container>
      <h1 id="projects-header">My Projects</h1>
      <Grid>{projectsList}</Grid>
    </Container>
  );
};

export default Projects;