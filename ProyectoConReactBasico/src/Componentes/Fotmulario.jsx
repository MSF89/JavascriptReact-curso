import React, { Component } from "react";
import '../Recursos/css/form.css';
import '../Recursos/css/button.css'

export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    limpiarFormulario = () => {
        this.setState(
            {
                first_name: "",
                last_name: "",
                email: ""
            }
        )
    }

    asignarValores = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    insertarValores = (event) => {
        event.preventDefault();
        this.props.funcionAgregar(this.state.first_name, this.state.last_name, this.state.email);
        this.limpiarFormulario();
    }


    render() {
        return (

            <form onSubmit={this.insertarValores}>

                <input className="input"
                    id="first_name"
                    type="text"
                    name="first_name"
                    required={true}
                    placeholder="Nombre"
                    value={this.state.first_name}
                    onChange={this.asignarValores}
                />

                <input className="input"
                    id="last_name"
                    type="text"
                    name="last_name"
                    required={true}
                    placeholder="Apellido"
                    value={this.state.last_name}
                    onChange={this.asignarValores}
                />

                <input className="input"
                    id="email"
                    type="email"
                    name="email"
                    required={true}
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.asignarValores}
                />

                <div>
                    <button className="success" type="submit">Agregar Usuario</button>
                    <button className="warning" type="reset">Limpiar Formulario</button>
                </div>

            </form>
        )
    }
}