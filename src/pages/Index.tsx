import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import  Style  from '../styles.module.css';



  


export const Index =() =>{

    //  type List = {
    //     monitor?: string;
    //     microcomputador?: string;
    //     processador?:string;
    //     memoriaRam?:string;
    //     armazenamento?:string;
    //     id?: number;
    //     item?:string;
    //     marca?: string
    //   }
      
    // const lists: Array<List> = [
    //       {id: 1, item: "monitor", marca: "LCD, (HP)" },
    //       {id:2, item: "microcomputador", marca: "HP Elitedesk"},
    //       {id:3, item : "processador:", marca: "Core (5) 7ª G"},
    //       {id:4, item: "memoriaRam:", marca: "8 GB"},
    //       {id:5, item: "armazenamento:", marca: "SSD 512"}
      
    //     ];

    return (
        
            
            <div className={Style.container}>
                        <Card style={{ width: '400px', height:'180px '}}>
                            <Card.Body>
                                <Card.Title className={Style.titleCard}>Plenário</Card.Title>                               
                                <Link to="/Plenario" className={Style.linkButton}><button className={Style.button}>Ir para </button></Link>
                            </Card.Body>
                        </Card> 
                        <Card style={{ width: '400px', height:'180px '}}>
                            <Card.Body>
                                <Card.Title className={Style.titleCard}>ADM</Card.Title>                               
                                <Link to="/adm" className={Style.link}><button className={Style.button}>Ir para </button></Link>
                            </Card.Body>
                        </Card> 
                        <Card style={{ width: '400px', height:'180px '}}>
                            <Card.Body>
                                <Card.Title className={Style.titleCard}>Oficiais de Justiça</Card.Title>                               
                                <Link to="/Plenario" className={Style.link}><button className={Style.button}>Ir para </button></Link>
                            </Card.Body>    
                        </Card> 
                        <Card style={{ width: '400px', height:'180px '}}>
                            <Card.Body>
                                <Card.Title className={Style.titleCard}>Almoxarifado</Card.Title>                               
                                <Link to="/Plenario" className={Style.link}><button className={Style.button}>Ir para </button></Link>
                            </Card.Body>
                        </Card> 
                      
           
            {/* <>
                <ul>
                    {lists.map((lists, index)=>(
                        
                      <li key={index}>{lists.item}- {lists.marca} </li>
                   
                    ))}
                    </ul>
                </> */}

        </div>
    );
}