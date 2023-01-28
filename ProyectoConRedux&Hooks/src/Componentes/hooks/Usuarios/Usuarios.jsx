import React from "react";
import { useState, useEffect } from "react";
import Usuario from "./Usuario";



const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const URL = "https://jsonplaceholder.typicode.com/users";
        fetch(URL)
            .then((response) => response.json())
            .then((json) => setUsuarios(json))
            .catch((e) => console.log(e))
            .finally(()=> console.log('finalizo la promesa'))
    },[])

    return (<>

        {usuarios.map((e) => 

            <Usuario name={e.name} username={e.username} email={e.email} />

        )}
    </>)
}

export default Usuarios;