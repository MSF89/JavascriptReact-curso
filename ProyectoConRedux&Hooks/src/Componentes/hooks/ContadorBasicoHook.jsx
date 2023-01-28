import React from "react";


const ContadorBasicoHooks = () => {

    /* state = {
        numero: 0
    } */
    const [numero, setNumero] = React.useState(0)
    return (<>
        <div>

            <h2>Contador: {numero}</h2>
            <button onClick={() => setNumero(numero + 1)}>+</button>
            <button onClick={() => setNumero(numero - 1)}>-</button>
        </div>
    </>)
}

export default ContadorBasicoHooks;