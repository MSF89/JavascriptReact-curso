import React from "react";
import { useState } from "react";
import avatar from '../../../Recursos/Imagenes/avatar.png'

const Usuario = (props) => {

    const { email, username } = props;
    const [mostrarCorreo, setMostrarCorreo] = useState(true)
    const [elemento, setElemento] = useState(email);

    return (<>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{elemento}</p>
                <button onClick={() => {
                    setMostrarCorreo(!mostrarCorreo)
                    setElemento(mostrarCorreo ? email : username)
                }} className="btn btn-primary">Cambiar</button>
            </div>
        </div>



    </>)

}

export default Usuario;
