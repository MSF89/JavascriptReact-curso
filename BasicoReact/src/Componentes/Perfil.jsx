import React, {Component} from "react";


const imagen = "https://www.cheso.com.py/images/users/31330.png";

const PerfilCSS = {
    position: "relative",
    margin: "2rem",
    textAlign: "center",
    maxWidth: "400px",
    width: "33%",
    float: "left",
    height: "20rem",
    perspective: "150rem"
}

const botonCSSVerde= {
  backgroundColor: "green", 
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
}
const botonCSSAzul= {
  backgroundColor: "blue", 
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
}
export default class Perfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombrePerfil: this.props.nombrePerfil,
            cargo: this.props.cargo,
            titulo: this.props.titulo,
            parrafo: this.props.cargo,
            mostrarCargo: true,    
        }
    }

    cambiarEstado = () => {
        this.setState({
            mostrarCargo: !this.state.mostrarCargo ,
            parrafo: this.state.mostrarCargo ? this.state.titulo : this.state.cargo,
        })

    }

    //dentro de la clase se usa la palabra reservada THIS para referenciar que pertenece a la clase t no a la funcion
    //this=> para atributos de clase
    render(){
        return(
            <div style={PerfilCSS}>
                <img src= {imagen} width="100" height="100" alt="" />
                <h1>{this.state.nombrePerfil}</h1>
                <p style={{color:"grey",fontFamily:"arial",fontSize:"20px"}}>{this.state.parrafo}</p>
                
                <br/>
                <button style={this.state.mostrarCargo?botonCSSVerde:botonCSSAzul} onClick={ this.cambiarEstado}>Mostrar {this.state.mostrarCargo ? "Titulo" : "Cargo"}</button>

            </div>
        )
    }
}