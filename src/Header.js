// Header.js
import React from 'react';

function Header({ data }) {
  return (
    <header>
      <div className="left-header">
        <h1>{data.name}</h1>
        <h3 className="subtitle"> Data Scientist</h3>
      </div>
      <div className="right-header">
        <p>Email: {data.contact.email}</p>
        <p>Web: <a href={data.contact.web} target="_blank" rel="noopener noreferrer">{data.contact.web}</a></p>
        <p>Mobile: {data.contact.mobile}</p>
      </div>
    </header>
  );
}

export default Header;
