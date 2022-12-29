import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import planta from '../assets/planta.jpg';
import style from '../styles.module.css';
import Table from 'react-bootstrap/Table';

export const Plenario =() =>{
    

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
                            <th>Gerenciamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
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
                            <td><Link to={'/escrivao'} ><button className={"btn btn-success"} >Acessar </button> </Link></td>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
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
                            <td><Link to={'/escrivao'} ><button className={"btn btn-success"} >Acessar </button> </Link></td>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
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
                            <td><Link to={'/escrivao'} ><button className={"btn btn-success"} >Acessar </button> </Link></td>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
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
                            <td><Link to={'/escrivao'} ><button className={"btn btn-success"} >Acessar </button> </Link></td>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
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
                            <td><Link to={'/escrivao'} ><button className={"btn btn-success"} >Acessar </button> </Link></td>
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