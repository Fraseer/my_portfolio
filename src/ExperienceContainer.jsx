import React from "react";
import { Container, Header } from "semantic-ui-react";

const Experience = ({ experience }) => {
  return (
    <div>
      <h2 id="cv-text">
        {experience.employer} <br />
      </h2>
      <p id="cv-text">
        {experience.role} <br />
        {experience.dates} <br />
        {experience.keyTasks} <br />
        <br />
      </p>
    </div>
  );
};

export default Experience;
