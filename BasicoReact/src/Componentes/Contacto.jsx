
import ImgPerfil from '../Recursos/sole.webp';
import '../Recursos/css/Contacto.css';


function Contacto(props){// props=> parametro en una funcion
    return(
        <div className="contacto">
            <img src= {ImgPerfil} width="100" height="100" alt="" />
            {props.nombreContacto}    

        </div>
    )
}
export default Contacto;