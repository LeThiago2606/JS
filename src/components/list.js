// src/components/list.js
import React from 'react';

const list = ({ welcomeMessage }) => {
  return (
    <div className="container">
      <h2>{welcomeMessage}</h2>
      <p>Aquí van a aparecer los productos en el futuro...</p>
    </div>
  );
};

export default list;
