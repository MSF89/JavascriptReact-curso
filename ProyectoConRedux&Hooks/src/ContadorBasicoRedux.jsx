import React from 'react';
import {createStore} from 'redux';
//elemento -> estado
const sumar =
{
  type:"+"
};
const restar =
{
  type:"-"
};
//quien lo va a cambiar => reductor funcion()
const operar = (state = 0, accion) => {
  if(accion.type === "+"){
    return state + 1;
  }
  if(accion.type === "-"){
    return state - 1;
  }
}
//quien va a retornar

const store = createStore(operar);


const ContadorBasicoRedux =()=>{
  return<>
    <button onClick={()=>store.dispatch(sumar)}>+</button>
    <h1 id='numero'>{store.getState()}</h1>
    <button onClick={()=>store.dispatch(restar)}>-</button>
  </>;
}

store.subscribe(()=>{
  document.getElementById('numero').innerHTML = store.getState();
})

export default ContadorBasicoRedux;