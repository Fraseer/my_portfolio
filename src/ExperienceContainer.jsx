import React from "react";

const Experience = ({ experience }) => {
  return (
    <div>
      <h2 id="cv-text">
        {experience.employer} <br />
      </h2>
      <p id="cv-text">
        {experience.role} <br />
        {experience.dates} <br />
        {experience.keyTasks1} <br />
        {experience.keyTasks2} <br />
        {experience.keyTasks3} <br />
        <br />
      </p>
    </div>
  );
};

export default Experience;
