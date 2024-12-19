// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';  // Importamos el componente CartWidget

const NavBar = () => {
  return (
    <nav>
      <div className="logo">Mi Tienda</div>
      <div className="links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Nosotros</a>
      </div>
      <CartWidget />  {/* Renderizamos el CartWidget dentro de la barra */}
    </nav>
  );
};

export default NavBar;
