import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Formulario from './Componentes/Formulario';


/* const elemento = document.createElement("h1");
elemento.innerText = "Hola Mundo desde JS Basico"
const contenedor = document.getElementById("root");
contenedor.appendChild(elemento) */
// que/donde
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Formulario/>
  </React.StrictMode>
);

