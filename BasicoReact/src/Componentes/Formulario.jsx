import React, {Component} from "react";

export default class Formulario extends Component{
    constructor(props){
        super(props);
        this.state={
            nombre: "",
            correo: ""
        }
    }

    asignarValores1 = (propiedad, valor) =>{
        const estado ={};
        estado[propiedad]= valor;
        this.setState(estado)
    }

    asignarValoresFormulario =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    EnviarFormulario=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.LimpiarValoresFormulario();
    }

    LimpiarValoresFormulario =()=>{
        this.setState({
            nombre: "",
            correo: ""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.EnviarFormulario}>
                    <input 
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value= {this.state.nombre}
                    onChange={this.asignarValoresFormulario}
                    required={true}/>
                    <input 
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="Correo"
                    value= {this.state.correo}
                    onChange={this.asignarValoresFormulario}
                    required={true}/>
                    <button type="submit">Enviar Formulario</button>
                    <button type="reset" onClick={this.LimpiarValoresFormulario}>Limpiar Formulario</button>
                </form>
            </div>
        )
    }
}
