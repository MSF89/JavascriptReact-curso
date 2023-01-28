import React from "react";
import DataTable from 'react-data-table-component';
import '../Recursos/css/alerta.css'

const columnas = [
    {
        name: "Album",
        selector: "albumId",
        sortable: true
    },
    {
        name: "ID",
        selector: "id",
        sortable: true
    },
    {
        name: "Titulo del album",
        selector: "title",
        sortable: true,
        grow:4
    },
    {
        name: "URL del album",
        selector: "url",
        sortable: true,
        grow:4,
        cell: (e)=>(
            <a href={e.url} target="_blank">Ir al album</a>
        )
    },
]
const datos = [
    {
        id: "1",
        nombre: "Octavio",
        apellido: "Robleto"
    },
    {
        id: "2",
        nombre: "Mariana",
        apellido: "Bracho"
    },
    {
        id: "3",
        nombre: "Analia",
        apellido: "Perez"
    },
    {
        id: "4",
        nombre: "Pedro",
        apellido: "Montesino"
    },
];

class Tabla extends React.Component{

    constructor(props){
        super(props);
        this.state={
            album: [],
            albumTemp: [],
            filtro:""
        }
    }

    componentDidMount(){
        this.buscarAlbum();
    }

    buscarAlbum = () => {
        const URL = "https://jsonplaceholder.typicode.com/photos";
        fetch(URL)
        .then((response)=> response.json())
        .then((json)=> this.setState({album:json, albumTemp:json}))       
        .catch((e) => alert('ERROR al obtener datos album'))
        .finally((e) => console.log('Finalizo la carga de album'))
    }

    filtrarDatos=  async(e)=>{
        await this.setState({
            filtro: e.target.value
        });
        this.filtrarAlbum();
    }
    filtrarAlbum=()=>{
        this.setState({albumTemp: this.state.album.filter(
            (e)=>  e.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.filtro.toLowerCase()) || e.id.toString().includes(this.state.filtro)
            )})
       
    }

    render(){
        return(<>

                <div>
                    <input
                    type="text"
                    placeholder="Filter"
                    name="filtro"
                    value={this.state.filtro}
                    onChange={this.filtrarDatos}/>
                </div>

                <DataTable
                    columns={columnas}
                    data={this.state.albumTemp}
                    pagination
                    paginationComponentOptions={
                        {
                            rowsPerPageText:"Filas por pagina",
                            selectAllRowsItem:true,
                            selectAllRowsItemText:"Todos",
                            rangeSeparatorText:"de"
                        }
                    }
                    noDataComponent={
                        <>
                        <div class="alert">
                            <span class="closebtn">X</span>
                            <strong>Danger!</strong>Indicate
                        </div>

                        </>
                    }
                />
        </>)
    }
}

export default Tabla;
