import React, { Component } from "react";
import Formulario from "./Componentes/Fotmulario";
import Usuario from "./Componentes/Usuario";
import avatarPNG from "./Recursos/Imagenes/avatar.png";
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
import "./Recursos/css/menu.css";
import Error from "./Componentes/Error"
import Tabla from "./Componentes/Tabla"



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }
    componentDidMount() {
        this.buscarUsuarios();
    }

    buscarUsuarios = () => {
        fetch('https://reqres.in/api/users')
            .then((response) => response.json())
            .then((json) => { this.setState({ usuarios: json.data }) })
            .catch((e) => alert('ERROR al obtener datos usuarios'))
            .finally((e) => console.log('Finalizo la carga de usuarios'))
    }

    agregarUsuario = (nombre, apellido, correo) => {
        const usuario = {
            first_name: nombre,
            last_name: apellido,
            email: correo,
            avatar: avatarPNG
        }
        const URL = "https://reqres.in/api/users";
        const HEADER = {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(URL, HEADER)
            .then((response) => response.json())
            .then((json) => this.setState({ usuarios: [...this.state.usuarios, json] }))
            .catch((e) => alert('ERROR al obtener datos usuarios'))
            .finally((e) => console.log('Finalizo la carga de usuarios'))
    }

    renderUsuarios = () => {
        return (
            this.state.usuarios.map((e) =>
            (
                <Usuario
                    key={e.id}
                    id={e.id}
                    first_name={e.first_name}
                    last_name={e.last_name}
                    email={e.email}
                    avatar={e.avatar}
                />
            ))
        )
    }
    render() {
        return (
            <div>
                <Router>
                    <nav className="menu">
                        <NavLink className="enlace" activeClassName to="/">Formulario</NavLink>
                        <NavLink className="enlace" activeClassName to="/usuarios">Usuarios</NavLink>
                        <NavLink className="enlace" activeClassName to="/comentarios">Comentarios de Usuarios</NavLink>
                    </nav>
                    <Routes>
                        <Route index element={ 
                            <Formulario funcionAgregar={this.agregarUsuario} />} />
                        <Route path="usuarios" element={this.renderUsuarios()} />
                        <Route path="*" element={<Error/>}/>
                        <Route path="/comentarios" element={<Tabla/>}/>

                    </Routes>
                </Router>
            </div>

        )
    }
}
export default App;