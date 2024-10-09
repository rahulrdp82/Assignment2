// Skills.js
import React from 'react';

function Skills({ data }) {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {data.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
