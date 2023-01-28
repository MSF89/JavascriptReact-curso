import React, { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import Charts from "chart.js/auto"
import Tendencias from "../../Recursos/Archivos/tendencias.json"




function Grafico(params) {
    const [etiquetas, setEtiquetas] = useState([])
    const [valores2021, setValores2021] = useState([])
    const [valores2022, setValores2022] = useState([])

    useEffect(()=>{
        setEtiquetas(Tendencias.map((e)=>e.mes));
        setValores2021(Tendencias.map((e)=>e.cantidad2021));
        setValores2022(Tendencias.map((e)=>e.cantidad2022));
    }, [])

    const opciones = {
        responsive: true,
        title: {
            display: true,
            text: "Meses del año"
        }
    }
    const datos = {
        labels: etiquetas,
        datasets: [
            {
                label: "2021",
                data: valores2021
            },
            {
                label: "2022",
                data: valores2022
            }
        ]
    }

    return (<>
        <div >
            <Bar options={opciones} data={datos} />
        </div>
    </>)
}

export default Grafico