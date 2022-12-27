import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import planta from '../assets/planta.jpg';
import style from '../styles.module.css';


export const Plenario =() =>{
    

    return (
        <div>

            <h3>Plenário</h3>
            <img src={planta} alt="" useMap='#image-map' className={style.img}  /><br />
                 <map name="image-map" >
                    <area shape="rect" coords="402,119,535,180" alt="Link 1" href="#teste" />
                    <area shape="rect" coords="685,321,813,387" alt="Link 1" href="/escrivao" />
                </map>
            <Link to="/"><button className={"btn btn-success"}>Página Inicial</button></Link>
        </div>
    );  
}