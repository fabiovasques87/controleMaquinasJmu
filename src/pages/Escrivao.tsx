import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import planta from '../assets/planta.jpg';
import monitores from '../assets/escrivao/monitores.jpeg';
import cpu from '../assets/escrivao/cpu.jpeg';
import elitedesk from  '../assets/escrivao/elitedesk.jpg';
import style from '../escrivao.module.css';
import Carousel from 'react-bootstrap/Carousel';


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
        <div className={style.section}>

                <h3 className={style.backgroundTexto}>Ficha Técnica</h3>
                <hr />
                <>

                <ul>
                    {lists.map((lists, index)=>(
                        
                      <li key={index}>{lists.item} {lists.marca} </li>
                   
                    ))}
                    </ul>
                </>

                <hr />
                        
                 <h4 className={style.backgroundTexto}>Imagens do local:</h4>       

                    <div className={style.sectionImg} >
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img className="d-block w-100" src={monitores} alt="Monitores escrivão" />                
                            </Carousel.Item>
                            
                            <Carousel.Item>
                                <img className="d-block w-100" src={elitedesk}   />                
                            </Carousel.Item>
                        </Carousel>
                    </div>                


        </div>
    );  
}