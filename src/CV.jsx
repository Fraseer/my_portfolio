import axios from "axios";
import React, { useState, useEffect } from "react";
import Education from "./EducationContainer";
import Experience from "./ExperienceContainer";
import { Container, Grid } from "semantic-ui-react";

const CV = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios.get("./data/education.json").then((response) => {
      setEducation(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("./data/experience.json").then((response) => {
      setExperience(response.data);
    });
  }, []);

  let educationList = education.map((education) => {
    return (
      <div id={`education-${education.id}`} key={education.id}>
        <Education education={education} />
      </div>
    );
  });

  let experienceList = experience.map((experience) => {
    return (
      <div id={`experience-${experience.id}`} key={experience.id}>
        <Experience experience={experience} />
      </div>
    );
  });

  return (
    <div class="row">
      <div class="column">
        <h1 id="text">Education</h1>
        <p>{educationList}</p>
      </div>

      <div class="column">
        <h1 id="text">Experience</h1>
        <p>{experienceList}</p>
      </div>
    </div>
  );
};

export default CV;
