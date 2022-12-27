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
        <div className={Style.section}>
            
           
            <div className={Style.cardBody}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className={Style.title}>Plenário</Card.Title>                               
                                <Link to="/Plenario"><button className={"btn btn-success"}>Ir para </button></Link>
                            </Card.Body>
                        </Card>                
            </div>
            <div className={Style.cardBody}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className={Style.title}>ADM</Card.Title>                               
                                <Link to="/adm"><button className={"btn btn-success"}>Ir para </button></Link>
                            </Card.Body>
                        </Card>                
            </div>
            <div className={Style.cardBody}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className={Style.title}>Video Conferêcia</Card.Title>                                
                                <Link to="/Video"><button className={"btn btn-success"}>Ir para</button></Link>
                            </Card.Body>
                        </Card>                
            </div>
            <div className={Style.cardBody}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className={Style.title}>Video Conferêcia</Card.Title>                                
                                <Link to="/Video"><button className={"btn btn-success"}>Ir para</button></Link>
                            </Card.Body>
                        </Card>                
            </div>
            <div className={Style.cardBody}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className={Style.title}>Video Conferêcia</Card.Title>                                
                                <Link to="/Video"><button className={"btn btn-success"}>Ir para</button></Link>
                            </Card.Body>
                        </Card>                
            </div>
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