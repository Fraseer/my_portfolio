import React from "react";

const Education = ({ education }) => {
  return (
    <div>
      <h2 id="cv-text">
        {education.location} <br />
      </h2>
      <p id="cv-text">
        {education.qualification} <br />
        {education.dates} <br />
        <br />
      </p>
    </div>
  );
};

export default Education;
