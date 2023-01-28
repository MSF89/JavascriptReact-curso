import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import Usuarios from './Componentes/hooks/Usuarios/Usuarios'
import Grafico from './Componentes/Graficos/Grafico'
/* import ContadorReducer from './Contador';
import ContadorBasicoRedux from './ContadorBasicoRedux'
import { Provider } from 'react-redux';
import Stores from './store/index';
import ContadorBasicoHook from './Componentes/hooks/ContadorBasicoHook' */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grafico/>
    <Usuarios/>
  </React.StrictMode>
);



/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContadorBasicoHook/>
    <br/>
    <br/>
    <ContadorBasicoRedux/> 
    <br/>
    <br/>
    <Provider store = {Stores}>
      <ContadorReducer/>
    </Provider>
  </React.StrictMode>
); */
