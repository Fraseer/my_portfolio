import React from "react";
import { Card, Image } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <a href={project.url}>
      <button oneclick="ProjectCard">
        <Card>
          <Image src={project.image} wrapped ui={false} alt={project.alt} />
          <Card.Content>
            <Card.Header>{project.name}</Card.Header>
            <Card.Description>{project.description}</Card.Description>
          </Card.Content>
        </Card>
      </button>
    </a>
  );
};

export default ProjectCard;
