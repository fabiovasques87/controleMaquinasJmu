import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



export const Video =() =>{
    return (
        <div>
            <h3>Video Conferencia</h3>
            <Link to="/"><button className={"btn btn-success"}>Voltar para Index</button></Link>
        </div>
    );  
}