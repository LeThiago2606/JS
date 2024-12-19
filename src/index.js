// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Estilos globales
import App from './App';  // El componente principal de la aplicación

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Aquí se monta la aplicación */}
  </React.StrictMode>,
  document.getElementById('root')  // Se monta en el div con id 'root' del index.html
);
