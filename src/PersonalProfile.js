// PersonalProfile.js
import React from 'react';

function PersonalProfile({ data }) {
  return (
    <section className="personal-profile">
      <h2>Personal Profile</h2>
      <p>{data.profile}</p>
    
    </section>
  );
}


export default PersonalProfile;
