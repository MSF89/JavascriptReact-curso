import React from "react";
import Perfil from "./Componentes/Perfil";
import perfilesJSON from './Recursos/archivos/perfiles.json'

export default class App extends React.Component{

    constructor(props){
        super(props)//paso propiedades al padre Component
        this.state = {
            perfiles: perfilesJSON
        }
    }


    //antes de cargar
    //Js-> Programacion Funcional (filter-map-reduce)
    render(){
        return(
            <div>
                { 
                    this.state.perfiles.map( (e)=> 
                        <Perfil key={e.id} nombrePerfil={e.nombrePerfil} cargo={e.cargo} titulo={e.titulo}/>
                    )
                }

            </div>
        )
    }
}