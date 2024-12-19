// src/CreaTuLanding1sotoApp.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const CreaTuLanding1sotoApp = () => {
  return (
    <div>
      <NavBar />  {/* Barra de navegación */}
      <ItemListContainer welcomeMessage="¡Bienvenido a nuestra tienda online!" />  {/* Mensaje de bienvenida */}
    </div>
  );
};

export default CreaTuLanding1sotoApp;
