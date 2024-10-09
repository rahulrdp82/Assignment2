// WorkExperience.js
import React from 'react';

function WorkExperience({ data }) {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      {data.map((job, index) => (
        <div key={index} className="job">
          <h2>{job.title} - {job.company}</h2>
          <p>{job.dates}</p>
          <p1>{job.description}</p1>
        </div>
      ))}
    </section>
  );
}

export default WorkExperience;
