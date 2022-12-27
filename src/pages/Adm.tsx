import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



export const Adm =() =>{
    return (
        <div>
            <h3>Pàgina Adm</h3>
            <Link to="/"><button className={"btn btn-success"}>Voltar para Index</button></Link>
        </div>
    );  
}