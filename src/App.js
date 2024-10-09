// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

function App() {
  const [resumeData] = useState({
    name: 'Rahul Patel',
    
    contact: {
      email: 'rahul@gmail.com',
      web: 'abc.github.io/abc',
      mobile: '01234567890',
    },
    profile: 'Loream ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exerciation ullamco laborisnisi ut aliquip ex ea commodo consequat',
    skills: ['A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill','A Key skill', 'A Key skill', 'A Key skill','A Key skill'],
    experience: [
      {
        title: 'Job Title at Company (August 2022 – December 2023)',
      
        description: 'Loream ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exerciation ullamco laborisnisi ut aliquip ex ea commodo consequat',
      },
      {
        title: 'Job Title 2 at Company 2 (August 2020 – December 2021)',
       
        description: 'Loream ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exerciation ullamco laborisnisi ut aliquip ex ea commodo consequat',
      },
    ],
    education:[
      {
        institution: 'New Jerey Institute of Technology',
        degree: 'BS in Computer Science',
        year: '2018 - 2022',
        gpa: '3.9',
      },
      {
        institution: 'New Jerey Institute of Technology',
        degree: 'MS in Data Science',
        year: '2022 - 2023',
        gpa: '4.0',
      },
      
    ],
  });

  return (
    <div className="App resume-container">
      <Header data={resumeData} />
      <PersonalProfile data={resumeData} />
      <WorkExperience data={resumeData.experience} />
      <Skills data={resumeData.skills} />
      <Education data={resumeData.education} />
    </div>
  );
}

export default App;
