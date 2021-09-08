import React from "react";
import { Card, Image } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <button oneclick="ProjectCard">
      <Card>
        <Image src={project.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{project.name}</Card.Header>
          <Card.Description>{project.description}</Card.Description>
        </Card.Content>
      </Card>
    </button>
  );
};

export default ProjectCard;