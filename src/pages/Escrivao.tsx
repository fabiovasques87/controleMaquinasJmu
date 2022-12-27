import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import planta from '../assets/planta.jpg';
import monitores from '../assets/escrivao/monitores.jpeg';
import cpu from '../assets/escrivao/cpu.jpeg';
import elitedesk from  '../assets/escrivao/elitedesk.jpg';
import style from '../escrivao.module.css';


export const Escrivao =() =>{
    type List = {
        monitor?: string;
        microcomputador?: string;
        processador?:string;
        memoriaRam?:string;
        armazenamento?:string;
        id?: number;
        item?:string;
        marca?: string
      }
      
    const lists: Array<List> = [
          {id: 1, item: "monitor:", marca: "LCD, (HP)" },
          {id:2, item: "microcomputador:", marca: "HP Elitedesk"},
          {id:3, item : "processador:", marca: "Core (5) 7ª G"},
          {id:4, item: "memoriaRam:", marca: "8 GB"},
          {id:5, item: "armazenamento:", marca: "SSD 512G"}
      
        ];

    return (
        <div>

                <h3 className={style.fichaTecnica}>Ficha Técnica</h3>
                <hr />
                <>

                <ul>
                    {lists.map((lists, index)=>(
                        
                      <li key={index}>{lists.item} {lists.marca} </li>
                   
                    ))}
                    </ul>
                </>

                <hr />
                        
                 <h4>Imagens do local:</h4>       

                <div className={style.sectionTop}>
                    <img src={monitores} alt="Monitores escrivão" className={style.monitores} />   
                    <img src={cpu} alt="CPU escrivão" className={style.cpu} />  
                    <img src={elitedesk}  className={style.cpu} />        

                </div>

                        <div className={style.sectionBottom}>
                            <Link to="/"><button className={"btn btn-success"}>Página  Inicial</button></Link>
                        </div>
        </div>
    );  
}