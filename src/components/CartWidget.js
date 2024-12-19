// src/components/CartWidget.js
import React from 'react';

const CartWidget = () => {
  const itemsInCart = 5;  // Esto puede ser dinámico más adelante

  return (
    <div className="cart">
      <span role="img" aria-label="cart">🛒</span>
      <span>{itemsInCart} items</span>
    </div>
  );
};

export default CartWidget;
