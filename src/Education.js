// Education.js
import React from 'react';

function Education({ data }) {
  return (
    <section className="education-section">
      <h2>Education</h2>
      {data.map((edu, index) => (
        <div key={index} className="education-entry">
        <h3 className="institution">{edu.institution}</h3>
          <p className="degree">{edu.degree}</p>
          <p className="year">{edu.year}</p>
          <p className="gpa">GPA: {edu.gpa}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
