import React from 'react';
import {connect} from 'react-redux';
import {aumentar, disminuir} from './store/contador/action';

const Contador = ({numero,aumentar, disminuir})=>{
    return(<>
        <button onClick={()=> aumentar()}>AUMENTAR</button>
        <h1>{numero}</h1>
        <button onClick={()=> disminuir()}>DISMINUIR</button>
    
    
    </>)
}

const mapStateToProps= (state) => {

    return{
        numero: state.contadorReducer.numero
    }
}

//connect (que quiero recibir, acciones a enviar) (componenteReact)
export default connect (mapStateToProps, {aumentar, disminuir} )(Contador)