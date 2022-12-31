import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import planta from '../assets/planta.jpg';
import style from '../styles.module.css';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export const Plenario =() =>{
    
    const [open, setOpen] = useState(false);

    return (
        
        <div>
            

            <h2 className={style.textTituloPlenario}>Plenário</h2>
            <div className={style.section}>
                    <Table responsive>
                    <thead>
                            <tr>
                            <th>Patrimonio</th>
                            <th>Monitor</th>
                            <th>Microcomputador</th>
                            <th>WebCam</th>
                            <th>Teclado</th>
                            <th>Mouse</th>
                            <th>S.O</th>
                            <th>Processador</th>
                            <th>Memória Ram</th>
                            <th>Hostname</th>
                            <th>IP</th>
                            <th>OBS</th>
                            <th colSpan={3} className={style.alignTextTable}>Gerenciamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 1</td>
                                <td >Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>172.16.14.X</td>
                                <td>Otto</td>
                            <div className={style.alignButtonTable}>
                                <td  ><Link  to={'/escrivao'}  ><button className={"btn btn-success"} >Visualizar </button> </Link></td>
                                <td > <Link to={'/editar'} ><button className={"btn btn-warning"} >Editar </button> </Link>  </td>
                                <td > <Link to={'/excluir'} ><button className={"btn btn-danger"} >Excluir </button> </Link>  </td>
                            </div>
                            </tr>
                            <tr>
                                <td> 1</td>
                                <td >Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>172.16.14.X</td>
                                <td>Otto</td>
                            <div className={style.alignButtonTable}>
                                <td  ><Link  to={'/escrivao'}  ><button className={"btn btn-success"} >Visualizar </button> </Link></td>
                                <td > <Link to={'/editar'} ><button className={"btn btn-warning"} >Editar </button> </Link>  </td>
                                <td > <Link to={'/excluir'} ><button className={"btn btn-danger"} >Excluir </button> </Link>  </td>
                            </div>
                            </tr>
                            <tr>
                                <td> 1</td>
                                <td >Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>172.16.14.X</td>
                                <td>Otto</td>
                            <div className={style.alignButtonTable}>
                                <td  ><Link  to={'/escrivao'}  ><button className={"btn btn-success"} >Visualizar </button> </Link></td>
                                <td > <Link to={'/editar'} ><button className={"btn btn-warning"} >Editar </button> </Link>  </td>
                                <td > <Link to={'/excluir'} ><button className={"btn btn-danger"} >Excluir </button> </Link>  </td>
                            </div>
                            </tr>
                            
                        </tbody>
                    </Table>

           
            </div>

            {
                /*
            
                <img src={planta} alt="" useMap='#image-map' className={style.img}  /><br />
                 <map name="image-map" >
                    <area shape="rect" coords="402,119,535,180" alt="Link 1" href="#teste" />
                    <area shape="rect" coords="685,321,813,387" alt="Link 1" href="/escrivao" />
                </map>
                */
            }
        </div>
    );  
}